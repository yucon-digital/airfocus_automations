import { ItemWithItemEmbed, Status } from "../models/airfocus";
import { BaseHandler } from "../models/handler";
import { AirFocusApiClient } from "../apiClient/airfocusApiClient";
import { WebhookEvent } from "../models/webhook";

export interface AutoUpdateFeedbackStatusHandlerProps {
  feedbackStatusMapping: {
    new: string;
    accepted: string;
    inProgress: string;
    completed: string;
  };
}

export class AutoUpdateFeedbackStatusHandler extends BaseHandler {
  constructor(
    protected workspaceId: string,
    airFocusApiClient: AirFocusApiClient,
    protected readonly props: AutoUpdateFeedbackStatusHandlerProps,
  ) {
    super(workspaceId, airFocusApiClient);
  }

  public async getSubscribedWebhookEvents(): Promise<WebhookEvent[]> {
    return [
      { type: "itemCreated" },
      { type: "itemStatusUpdated" },
      { type: "itemRelationChanged" },
    ];
  }

  public handle = async (event: any) => {
    const itemId = await this.getItemIdFromEvent(event);

    if (!itemId) {
      return;
    }

    const item = await this.airFocusApiClient.getItem(
      this.getWorkspaceId(),
      itemId,
    );

    const eventType = event.matchedFilter.type;

    if (item._embedded.workspaceItemType === "feedback") {
      // allow manually updating feedback status
      if (eventType === "itemStatusUpdated") {
        return;
      }
      return this.updateFeedback(item);
    }

    if (eventType === "itemCreated") {
      return;
    }

    if (item._embedded.workspaceItemType === "initiative") {
      return this.handleInitiativeUpdated(item);
    }

    if (item._embedded.workspaceItemType === "epic") {
      return this.handleEpicUpdated(item);
    }
  };

  async handleInitiativeUpdated(item: ItemWithItemEmbed): Promise<void> {
    await Promise.all(
      (item._embedded.parents || []).map(async (child) => {
        const feedback = await this.airFocusApiClient.getItem(
          child.workspaceId,
          child.itemId,
        );
        await this.updateFeedback(feedback);
      }),
    );
  }

  async handleEpicUpdated(item: ItemWithItemEmbed): Promise<void> {
    await Promise.all(
      (item._embedded.parents || []).map(async (parent) => {
        const initiative = await this.airFocusApiClient.getItem(
          parent.workspaceId,
          parent.itemId,
        );
        await this.updateInitiative(initiative);
      }),
    );
  }

  async updateFeedback(item: ItemWithItemEmbed): Promise<void> {
    const workspace = await this.airFocusApiClient.getWorkspace(
      item.workspaceId,
    );
    const initiativesWithStatuses = await Promise.all(
      (item._embedded.children || []).map(async (initiative) => {
        const [item, workspace] = await Promise.all([
          this.airFocusApiClient.getItem(
            initiative.workspaceId,
            initiative.itemId,
          ),
          this.airFocusApiClient.getWorkspace(initiative.workspaceId),
        ]);
        return {
          initiative: item,
          statuses: workspace._embedded.statuses,
        };
      }),
    );
    const feedbackStatus = this.getFeedbackStatusFromInitiatives(
      initiativesWithStatuses,
      workspace._embedded.statuses,
    );
    await this.airFocusApiClient.updateItem({
      ...item,
      statusId: feedbackStatus.id,
    });
  }

  async updateInitiative(item: ItemWithItemEmbed): Promise<void> {
    const workspace = await this.airFocusApiClient.getWorkspace(
      item.workspaceId,
    );
    const epicsWithStatuses = await Promise.all(
      (item._embedded.children || []).map(async (epic) => {
        const [item, workspace] = await Promise.all([
          this.airFocusApiClient.getItem(epic.workspaceId, epic.itemId),
          this.airFocusApiClient.getWorkspace(epic.workspaceId),
        ]);
        return {
          epic: item,
          statuses: workspace._embedded.statuses,
        };
      }),
    );
    const initiativeStatus = this.getInitiativeStatusFromEpics(
      epicsWithStatuses,
      workspace._embedded.statuses,
    );

    await this.airFocusApiClient.updateItem({
      ...item,
      statusId: initiativeStatus.id,
    });
  }

  private getInitiativeStatusFromEpics(
    epicsWithStatuses: {
      epic: ItemWithItemEmbed;
      statuses: Record<string, Status>;
    }[],
    initiativeWorkspaceStatuses: Record<string, Status>,
  ): Status {
    if (
      epicsWithStatuses.every((epicsWithStatuses) => {
        const status =
          epicsWithStatuses.statuses[epicsWithStatuses.epic.statusId];
        return status.category === "closed";
      })
    ) {
      return Object.values(initiativeWorkspaceStatuses).find(
        (status) =>
          initiativeWorkspaceStatuses[status.id].category === "closed",
      )!;
    }

    if (
      epicsWithStatuses.some((epicsWithStatuses) => {
        const status =
          epicsWithStatuses.statuses[epicsWithStatuses.epic.statusId];
        return status.category === "active" || status.category === "closed";
      })
    ) {
      return Object.values(initiativeWorkspaceStatuses).find(
        (status) =>
          initiativeWorkspaceStatuses[status.id].category === "active",
      )!;
    }

    const mostAdvancedStatus = epicsWithStatuses.reduce(
      (mostAdvancedStatus, epicWithStatuses) => {
        const status =
          epicWithStatuses.statuses[epicWithStatuses.epic.statusId];

        if (status.order > mostAdvancedStatus.order) {
          return status;
        }
        return mostAdvancedStatus;
      },
      epicsWithStatuses[0].statuses[epicsWithStatuses[0].epic.statusId],
    );

    const initiativeWorkspaceStatus = Object.values(
      initiativeWorkspaceStatuses,
    ).find(
      (status) =>
        mostAdvancedStatus.category === status.category &&
        mostAdvancedStatus.order === status.order,
    );

    if (initiativeWorkspaceStatus) {
      return initiativeWorkspaceStatus;
    }

    return Object.values(initiativeWorkspaceStatuses).find(
      (status) => mostAdvancedStatus.category === status.category,
    )!;
  }

  private getFeedbackStatusFromInitiatives(
    initiativesWithStatus: {
      initiative: ItemWithItemEmbed;
      statuses: Record<string, Status>;
    }[],
    feedbackWorkspaceStatuses: Record<string, Status>,
  ): Status {
    if (initiativesWithStatus.length === 0) {
      return Object.values(feedbackWorkspaceStatuses).find(
        (status) =>
          feedbackWorkspaceStatuses[status.id].name ===
          this.props.feedbackStatusMapping.new,
      )!;
    }

    if (
      initiativesWithStatus.every((initiativeWithStatus) => {
        const status =
          initiativeWithStatus.statuses[
            initiativeWithStatus.initiative.statusId
          ];
        return status.category === "closed";
      })
    ) {
      return Object.values(feedbackWorkspaceStatuses).find(
        (status) =>
          feedbackWorkspaceStatuses[status.id].name ===
          this.props.feedbackStatusMapping.completed,
      )!;
    }

    if (
      initiativesWithStatus.every((initiativeWithStatus) => {
        const status =
          initiativeWithStatus.statuses[
            initiativeWithStatus.initiative.statusId
          ];
        return status.category === "active" || status.category === "closed";
      })
    ) {
      return Object.values(feedbackWorkspaceStatuses).find(
        (status) =>
          feedbackWorkspaceStatuses[status.id].name ===
          this.props.feedbackStatusMapping.inProgress,
      )!;
    }

    return Object.values(feedbackWorkspaceStatuses).find(
      (status) =>
        feedbackWorkspaceStatuses[status.id].name ===
        this.props.feedbackStatusMapping.accepted,
    )!;
  }
}
