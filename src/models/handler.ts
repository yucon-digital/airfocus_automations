import { AirFocusApiClient } from "../apiClient/airfocusApiClient";
import { WebhookEvent } from "./webhook";

export interface Handler {
  getId: () => string;
  getWorkspaceId: () => string;
  getSubscribedWebhookEvents: () => Promise<WebhookEvent[]>;
  handle: (event: any) => Promise<void>;
  getAirFocusApiClient: () => AirFocusApiClient;
}

export abstract class BaseHandler implements Handler {
  getId = () => this.constructor.name;
  getAirFocusApiClient = () => this.airFocusApiClient;
  getWorkspaceId = () => this.workspaceId;

  protected constructor(
    protected readonly workspaceId: string,
    protected readonly airFocusApiClient: AirFocusApiClient,
  ) {}

  abstract handle(event: any): Promise<void>;

  abstract getSubscribedWebhookEvents(): Promise<WebhookEvent[]>;

  protected async getItemIdFromEvent(event: any): Promise<string | undefined> {
    const data = event.event.data;
    let itemId = event.event.data.itemId;
    let workspaceId = event.embed.items[itemId]?.workspaceId;

    if (!!workspaceId && workspaceId !== this.getWorkspaceId()) {
      return;
    }

    if (["createdItemRelation", "deletedItemRelation"].includes(data.type)) {
      let relationItemIds: string[] = [];

      if (data.type === "deletedItemRelation") {
        relationItemIds = [data.info.parentId, data.info.childId];
      } else {
        const itemRelationId = data.itemRelationId;
        const itemRelation =
          await this.airFocusApiClient.getRelationItem(itemRelationId);
        relationItemIds = [itemRelation.parentId, itemRelation.childId];
      }

      const items =
        await this.airFocusApiClient.retrieveItemsGlobally(relationItemIds);

      for (const item of items) {
        if (item.workspaceId === this.getWorkspaceId()) {
          itemId = item.id;
          break;
        }
      }
    }

    return itemId;
  }
}
