import { AirFocusApiClient } from "../apiClient/airfocusApiClient";
import { Handler } from "./handler";

export interface HandlerInitializer {
  workspaceIds: string[];
  createHandler: (
    workspaceId: string,
    airFocusApiClient: AirFocusApiClient,
  ) => Handler;
}
