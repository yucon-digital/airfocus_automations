export type WebhookEvent =
  | WebhookEventItemCreated
  | WebhookEventItemStatusUpdated
  | WebhookEventItemRelationChanged
  | WebhookEventItemFieldUpdated;

export interface WebhookEventItemCreated {
  type: "itemCreated";
}

export interface WebhookEventItemStatusUpdated {
  type: "itemStatusUpdated";
}

export interface WebhookEventItemRelationChanged {
  type: "itemRelationChanged";
}

export interface WebhookEventItemFieldUpdated {
  type: "itemFieldUpdated";
  fieldId: string;
}
