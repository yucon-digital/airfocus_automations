import axios, { AxiosInstance } from "axios";

import { Config } from "../models/config";
import {
  Api,
  ItemRelationWithEmbed,
  ItemWithItemEmbed,
  ItemWithItemEmbedOrNullList,
  WorkspaceWithWorkspaceEmbed,
} from "../models/airfocus";

export class AirFocusApiClient {
  private axiosClient: AxiosInstance;
  private generatedAirFocusApiClient: Api<string>;

  constructor(private readonly config: Config) {
    this.generatedAirFocusApiClient = new Api({
      baseURL: config.airfocusBaseUrl,
      headers: {
        Authorization: `Bearer ${config.airfocusApiKey}`,
      },
    });
    this.axiosClient = axios.create({
      baseURL: this.config.airfocusBaseUrl,
      headers: {
        Authorization: `Bearer ${this.config.airfocusApiKey}`,
      },
    });
  }

  async retrieveItemsGlobally(
    itemIds: string[],
  ): Promise<ItemWithItemEmbedOrNullList> {
    const result =
      await this.generatedAirFocusApiClient.api.retrieveItemsGlobally(
        undefined,
        itemIds,
      );
    return result.data;
  }

  async getRelationItem(
    itemRelationId: string,
  ): Promise<ItemRelationWithEmbed> {
    const result =
      await this.generatedAirFocusApiClient.api.retrieveItemRelation(
        itemRelationId,
      );
    return result.data;
  }

  async getItem(
    workspaceId: string,
    itemId: string,
  ): Promise<ItemWithItemEmbed> {
    const result = await this.generatedAirFocusApiClient.api.retrieveItem(
      workspaceId,
      itemId,
    );
    return result.data;
  }

  async getWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceWithWorkspaceEmbed> {
    const result =
      await this.generatedAirFocusApiClient.api.retrieveWorkspace(workspaceId);
    return result.data;
  }

  async updateItem(item: ItemWithItemEmbed): Promise<ItemWithItemEmbed> {
    const result = await this.generatedAirFocusApiClient.api.updateItem(
      item.workspaceId,
      item.id,
      item,
    );
    return result.data;
  }

  async installIntegration(
    workspaceId: string,
    typeId: "webhook",
    integrationSettings: any,
  ): Promise<any> {
    const axiosClient = axios.create({
      baseURL: this.config.airfocusBaseUrl,
      headers: {
        Authorization: `Bearer ${this.config.airfocusApiKey}`,
      },
    });

    const res = await axiosClient.post(
      `/api/workspaces/${workspaceId}/install-integration`,
      {
        typeId: typeId,
        settings: integrationSettings,
      },
    );
    return res.data;
  }

  async reconfigureIntegration(
    workspaceId: string,
    integrationId: string,
    integrationSettings: any,
  ): Promise<any> {
    const res = await this.axiosClient.post(
      `/api/workspaces/${workspaceId}/reconfigure-integration`,
      {
        integrationId: integrationId,
        settings: integrationSettings,
      },
    );
    return res.data;
  }
}
