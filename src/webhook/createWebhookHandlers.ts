import { Config } from "../models/config";
import { AirFocusApiClient } from "../apiClient/airfocusApiClient";
import { Handler } from "../models/handler";
import { createOrUpdateWebhookIntegration } from "./webhook";
import { HandlerInitializer } from "../models/handlerInitializer";

export async function createWebhookHandlers(
  config: Config,
  airFocusApiClient: AirFocusApiClient,
  initializers: HandlerInitializer[],
): Promise<Handler[]> {
  const handlers: Handler[] = [];

  for (const initializer of initializers) {
    for (const workspaceId of initializer.workspaceIds) {
      const handler = initializer.createHandler(workspaceId, airFocusApiClient);
      await createOrUpdateWebhookIntegration(handler, config, workspaceId);
      handlers.push(handler);
    }
  }

  return handlers;
}
