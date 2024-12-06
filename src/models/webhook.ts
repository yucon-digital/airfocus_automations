export type WebhookEvent =
  | WebhookEventItemCreated
  | WebhookEventItemStatusUpdated
  | WebhookEventItemRelationChanged;

export interface WebhookEventItemCreated {
  type: "itemCreated";
}

export interface WebhookEventItemStatusUpdated {
  type: "itemStatusUpdated";
}

export interface WebhookEventItemRelationChanged {
  type: "itemRelationChanged";
}
