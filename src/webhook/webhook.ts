import { Config } from "../models/config";
import packageJson from "../../package.json";
import { Handler } from "../models/handler";
import { getRemoteWebhookUrl } from "./utils";

export async function createOrUpdateWebhookIntegration(
  handler: Handler,
  config: Config,
  workspaceId: string,
): Promise<void> {
  const airFocusApiClient = handler.getAirFocusApiClient();
  const workspace = await airFocusApiClient.getWorkspace(workspaceId);
  const integrationIds = Object.keys(workspace._embedded.integrations || {});

  const handlerId = handler.getId();
  const webhookEvents = await handler.getSubscribedWebhookEvents();

  const integrationSettings = {
    url: getRemoteWebhookUrl(config, handlerId, workspaceId),
    title: `${packageJson.name} (${handlerId})`,
    events: webhookEvents,
    method: "POST",
    headers: [
      ["Authorization", `Bearer ${config.selfAuthorization}`],
      ["Content-Type", "application/json"],
    ],
    template: "{{event}}",
    inputFormat: "text",
  };

  const integrationId = integrationIds.find((integrationId) => {
    const integration = workspace._embedded.integrations[integrationId];
    return (
      integration.typeId === "webhook" &&
      integration.settings.title === integrationSettings.title
    );
  });

  if (!integrationId) {
    await airFocusApiClient.installIntegration(
      workspaceId,
      "webhook",
      integrationSettings,
    );
    console.log(
      `Created new webhook integration ${integrationSettings.title} for workspace ${workspaceId}`,
    );
    return;
  }

  await airFocusApiClient.reconfigureIntegration(
    workspaceId,
    integrationId,
    integrationSettings,
  );

  console.log(
    `Updated existing webhook integration ${integrationSettings.title} for workspace ${workspaceId}`,
  );
}
