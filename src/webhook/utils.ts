import { Config } from "../models/config";

export function getRemoteWebhookUrl(
  config: Config,
  handlerId: string,
  workspaceId: string,
): string {
  return `${config.selfBaseUrl}${getLocalWebhookUrl(handlerId, workspaceId)}`;
}

export function getLocalWebhookUrl(
  handlerId: string,
  workspaceId: string,
): string {
  return `/hooks/${handlerId}/workspace/${workspaceId}`;
}
