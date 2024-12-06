/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** ApiKey */
export interface ApiKey {
  /** @format date-time */
  createdAt: string;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUsedAt?: string;
  name: string;
  /** @uniqueItems true */
  scopes: string[];
  /** @format uuid */
  userId: string;
}

/** App */
export interface App {
  /** @format uuid */
  id: string;
  settings: any;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** AttachmentSearchQuery */
export interface AttachmentSearchQuery {
  /** @format uuid */
  itemId?: string;
}

/** BooleanFieldWithFieldEmbed */
export interface BooleanFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** BulkInviteUsersRequest */
export interface BulkInviteUsersRequest {
  users?: BulkInviteUsersRequestUser[];
}

/** BulkInviteUsersRequestUser */
export interface BulkInviteUsersRequestUser {
  email: string;
  fullName?: string;
  role: Role;
}

/** ChangePasswordRequest */
export interface ChangePasswordRequest {
  newPassword: string;
  oldPassword: string;
}

/** ChangeUserDisabledRequest */
export interface ChangeUserDisabledRequest {
  disabled: boolean;
  /** @format uuid */
  userId: string;
}

/** ChangeUserRoleRequest */
export interface ChangeUserRoleRequest {
  role: Role;
  /** @format uuid */
  userId: string;
}

/** Comment */
export interface Comment {
  content: RichText;
  /** @format date-time */
  createdAt: string;
  /** @format uuid */
  id: string;
  /** @format uuid */
  itemId: string;
  /** @format date-time */
  lastUpdatedAt: string;
  reactions?: CommentReaction[];
  /** @format uuid */
  userId: string;
}

/** CommentBulkAction */
export type CommentBulkAction =
  | ({
      type: "create";
    } & CommentBulkCreate)
  | ({
      type: "delete";
    } & CommentBulkDelete)
  | ({
      type: "patch";
    } & CommentBulkPatch)
  | ({
      type: "update";
    } & CommentBulkUpdate);

/** CommentBulkCreate */
export interface CommentBulkCreate {
  resource: Comment;
  type: "create";
}

/** CommentBulkDelete */
export interface CommentBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** CommentBulkPatch */
export interface CommentBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** CommentBulkUpdate */
export interface CommentBulkUpdate {
  /** @format uuid */
  id: string;
  resource: Comment;
  type: "update";
}

/** CommentEmbed */
export type CommentEmbed = object;

/** CommentReaction */
export interface CommentReaction {
  emoji: CommentReactionEmoji;
  userIds?: string[];
}

/** CommentReactionEmoji */
export enum CommentReactionEmoji {
  BlueHeart = "blue_heart",
  Clap = "clap",
  Confused = "confused",
  Eyes = "eyes",
  Value1 = "+1",
  Rocket = "rocket",
  ThinkingFace = "thinking_face",
  WhiteCheckMark = "white_check_mark",
}

/** CommentSearchQuery */
export interface CommentSearchQuery {
  /** @format uuid */
  itemId?: string;
}

/** CommentWithCommentEmbed */
export interface CommentWithCommentEmbed {
  _embedded: CommentEmbed;
  content: RichText;
  /** @format date-time */
  createdAt: string;
  /** @format uuid */
  id: string;
  /** @format uuid */
  itemId: string;
  /** @format date-time */
  lastUpdatedAt: string;
  reactions?: CommentReaction[];
  /** @format uuid */
  userId: string;
}

/** CommentWithCommentEmbedOrNullList */
export type CommentWithCommentEmbedOrNullList = CommentWithCommentEmbed[];

/** CommentWithCommentEmbedPage */
export interface CommentWithCommentEmbedPage {
  items?: CommentWithCommentEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** CreateApiKeyRequest */
export interface CreateApiKeyRequest {
  name: string;
  /** @uniqueItems true */
  scopes?: string[];
}

/** CreateApiKeyResponse */
export interface CreateApiKeyResponse {
  apiKey: ApiKey;
  secret: string;
}

/** CreateStatus */
export interface CreateStatus {
  /**
   * Status category adds some additional meaning to each status:
   * - 'draft': only semantic meaning
   * - 'active': only semantic meaning
   * - 'closed': items with a status in this category will be considered as completed, which contributes to progress calculation (e.g. "1/3 items completed").
   */
  category: StatusCategory;
  /** Color of a status-chip in UI. */
  color?: StatusColor;
  /** Whether this status should be applied by default to newly created items. There can be only one default status in each workspace. */
  default: boolean;
  /** Name of this status in UI. */
  name: string;
  /**
   * Order of this status comparing to other statuses in the same workspace.
   * @format int32
   */
  order: number;
}

/** CreateUserInviteRequest */
export interface CreateUserInviteRequest {
  /** @format uuid */
  userId: string;
}

/** DateFieldWithFieldEmbed */
export interface DateFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** DateRangeFieldWithFieldEmbed */
export interface DateRangeFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/**
 * ErrorResponse
 * A general error response which is returned by the server for all handled errors.
 */
export interface ErrorResponse {
  /** Machine readable code */
  code: string;
  /** Additional informational data about the error */
  data: object;
  /** Error messages */
  message: string;
}

/** FieldEmbed */
export interface FieldEmbed {
  /** List of all workspaces where this field is used. */
  workspaces?: FieldFieldWorkspaceEmbed[];
}

/** FieldFieldWorkspaceEmbed */
export interface FieldFieldWorkspaceEmbed {
  /**
   * Order of the field in this specific workspace.
   * @format int32
   */
  order: number;
  /** @format uuid */
  workspaceId: string;
}

/** FieldSearchQuery */
export interface FieldSearchQuery {
  /** Return only fields with the specified isTeamField value. */
  isTeamField?: boolean;
  /**
   * Return only fields which are installed in the specified workspaces.
   * @uniqueItems true
   */
  workspaceIds?: string[];
}

/** FieldServerEndpointsFieldToWorkspaceLink */
export interface FieldServerEndpointsFieldToWorkspaceLink {
  /** @format uuid */
  fieldId: string;
  /** @format uuid */
  workspaceId: string;
}

/** FieldServerEndpointsFieldTypeInfo */
export interface FieldServerEndpointsFieldTypeInfo {
  typeId: string;
}

/** FieldServerEndpointsInstallFieldRequest */
export type FieldServerEndpointsInstallFieldRequest =
  | ({
      typeId: "boolean";
    } & InstallBooleanFieldRequest)
  | ({
      typeId: "date";
    } & InstallDateFieldRequest)
  | ({
      typeId: "date-range";
    } & InstallDateRangeFieldRequest)
  | ({
      typeId: "number";
    } & InstallNumberFieldRequest)
  | ({
      typeId: "people";
    } & InstallPeopleFieldRequest)
  | ({
      typeId: "select";
    } & InstallSelectFieldRequest)
  | ({
      typeId: "text";
    } & InstallTextFieldRequest)
  | ({
      typeId: "time-period";
    } & InstallTimePeriodFieldRequest);

/** FieldServerEndpointsInstallFieldRequestLegacy */
export interface FieldServerEndpointsInstallFieldRequestLegacy {
  description: string;
  isTeamField: boolean;
  name: string;
  settings: any;
  typeId: string;
  /** @format uuid */
  workspaceId?: string;
}

/** FieldServerEndpointsReconfigureFieldRequest */
export interface FieldServerEndpointsReconfigureFieldRequest {
  description: string;
  isTeamField: boolean;
  name: string;
  /**
   * The settings object which corresponds to the type of the requested field, or it can be skipped if the requested field does not have any settings.
   * This schema shows all the available field-settings. See also the Field schema to learn about settings of each specific field type.
   */
  settings?:
    | FormSourceFieldTypeSettings
    | InsightsFieldTypeSettings
    | NumberFieldTypeSettings
    | OkrConfidenceFieldSettings
    | OkrTimePeriodFieldSettings
    | PeopleFieldTypeSettings
    | SelectFieldTypeSettings
    | TimePeriodFieldSettings
    | VotingAppScoreFieldTypeSettings;
}

/** FieldServerEndpointsReconfigureFieldRequestLegacy */
export interface FieldServerEndpointsReconfigureFieldRequestLegacy {
  description: string;
  /** @format uuid */
  fieldId: string;
  isTeamField: boolean;
  name: string;
  settings: any;
}

/** FieldServerEndpointsReorderFieldsRequest */
export interface FieldServerEndpointsReorderFieldsRequest {
  fieldIds?: string[];
  /** @format uuid */
  workspaceId: string;
}

/** FieldServerEndpointsUninstallFieldRequest */
export interface FieldServerEndpointsUninstallFieldRequest {
  /** @format uuid */
  fieldId: string;
}

/** FieldWithFieldEmbed */
export type FieldWithFieldEmbed =
  | ({
      typeId: "boolean";
    } & BooleanFieldWithFieldEmbed)
  | ({
      typeId: "date";
    } & DateFieldWithFieldEmbed)
  | ({
      typeId: "date-range";
    } & DateRangeFieldWithFieldEmbed)
  | ({
      typeId: "form-source";
    } & FormSourceFieldWithFieldEmbed)
  | ({
      typeId: "form-target";
    } & FormTargetFieldWithFieldEmbed)
  | ({
      typeId: "insights";
    } & InsightsFieldWithFieldEmbed)
  | ({
      typeId: "mirror-source";
    } & MirrorSourceFieldWithFieldEmbed)
  | ({
      typeId: "mirror-target";
    } & MirrorTargetFieldWithFieldEmbed)
  | ({
      typeId: "number";
    } & NumberFieldWithFieldEmbed)
  | ({
      typeId: "okr-checkins";
    } & OkrCheckinsFieldWithFieldEmbed)
  | ({
      typeId: "okr-confidence";
    } & OkrConfidenceFieldWithFieldEmbed)
  | ({
      typeId: "okr-key-result-reference";
    } & OkrKeyResultReferenceFieldWithFieldEmbed)
  | ({
      typeId: "okr-key-results";
    } & OkrKeyResultsFieldWithFieldEmbed)
  | ({
      typeId: "okr-progress";
    } & OkrProgressFieldWithFieldEmbed)
  | ({
      typeId: "okr-time-period";
    } & OkrTimePeriodFieldWithFieldEmbed)
  | ({
      typeId: "people";
    } & PeopleFieldWithFieldEmbed)
  | ({
      typeId: "portal";
    } & PortalFieldWithFieldEmbed)
  | ({
      typeId: "prioritization";
    } & PrioritizationFieldWithFieldEmbed)
  | ({
      typeId: "select";
    } & SelectFieldWithFieldEmbed)
  | ({
      typeId: "text";
    } & TextFieldWithFieldEmbed)
  | ({
      typeId: "time-period";
    } & TimePeriodFieldWithFieldEmbed)
  | ({
      typeId: "votes";
    } & VotesFieldWithFieldEmbed)
  | ({
      typeId: "votingScore";
    } & VotingScoreFieldWithFieldEmbed);

/** FieldWithFieldEmbedPage */
export interface FieldWithFieldEmbedPage {
  items?: FieldWithFieldEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** FormSourceFieldTypeSettings */
export interface FormSourceFieldTypeSettings {
  /** @format int32 */
  maximum?: number;
}

/** FormSourceFieldWithFieldEmbed */
export interface FormSourceFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: FormSourceFieldTypeSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** FormTargetFieldWithFieldEmbed */
export interface FormTargetFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** InboxCounter */
export interface InboxCounter {
  /** @format int32 */
  count: number;
  id: string;
  name: string;
}

/** InboxViewEndpointsInboxCountersRequest */
export interface InboxViewEndpointsInboxCountersRequest {
  archived: boolean;
  countAssigned: boolean;
  filter?: ItemSearchQueryFilter;
}

/** InsightsFieldTypeSettings */
export interface InsightsFieldTypeSettings {
  /** @format int32 */
  maximum?: number;
}

/** InsightsFieldWithFieldEmbed */
export interface InsightsFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: InsightsFieldTypeSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** InstallBooleanFieldRequest */
export interface InstallBooleanFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallDateFieldRequest */
export interface InstallDateFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallDateRangeFieldRequest */
export interface InstallDateRangeFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallNumberFieldRequest */
export interface InstallNumberFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  /** Field settings. */
  settings: NumberFieldTypeSettings;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallPeopleFieldRequest */
export interface InstallPeopleFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  /** Field settings. */
  settings: PeopleFieldTypeSettings;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallSelectFieldRequest */
export interface InstallSelectFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  /** Field settings. */
  settings: SelectFieldTypeSettings;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallTextFieldRequest */
export interface InstallTextFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** InstallTimePeriodFieldRequest */
export interface InstallTimePeriodFieldRequest {
  /**
   * User-readable field description.
   * @default ""
   */
  description?: string;
  /**
   * Whether the field should be installed as a team-field or a workspace-specific field.
   * @default false
   */
  isTeamField?: boolean;
  /** User-readable field name. */
  name: string;
  /** Field settings. */
  settings: TimePeriodFieldSettings;
  typeId: string;
  /**
   * If isTeamField=false then exactly one workspace ID should be provided.
   * If isTeamField=true then any amount of workspace IDs can be provided to be linked to the newly installed field.
   */
  workspaceIds?: string[];
}

/** IntegrationCapabilities */
export interface IntegrationCapabilities {
  debug: boolean;
  hierarchy: boolean;
  push: boolean;
  sync: boolean;
}

/** IntegrationSummary */
export interface IntegrationSummary {
  capabilities: IntegrationCapabilities;
  /** @format date-time */
  createdAt: string;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastSyncAt?: string;
  lastSyncState?: IntegrationSyncState;
  settings: any;
  typeId: string;
}

/** IntegrationSyncState */
export interface IntegrationSyncState {
  /** @format int32 */
  errorCount: number;
  /** @format int32 */
  successCount: number;
}

/** InviteUserRequest */
export interface InviteUserRequest {
  email: string;
  fullName: string;
  role: Role;
}

/** Item */
export interface Item {
  archived: boolean;
  assigneeUserIds?: string[];
  color: ItemColor;
  /** @format date-time */
  createdAt: string;
  description: RichText;
  /** Values of custom fields, where each key is a custom-field ID and each value is a JSON-formatted value of the corresponding field. */
  fields: Record<string, any>;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUpdatedAt: string;
  name: string;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  order: number;
  /** @format date-time */
  statusCategoryUpdatedAt?: string;
  /** @format uuid */
  statusId: string;
  /** @format date-time */
  statusUpdatedAt?: string;
  /** @format uuid */
  workspaceId: string;
}

/**
 * ItemAttachment
 * A connection link between an item and an uploaded attachment.
 */
export interface ItemAttachment {
  /** Type of updated content. */
  contentType: string;
  /**
   * When this attachment link has been created.
   * @format date-time
   */
  createdAt: string;
  /**
   * ID of an item-attachment link.
   * @format uuid
   */
  id: string;
  /**
   * ID of the item to which the attachment is linked.
   * @format uuid
   */
  itemId: string;
  /**
   * When this attachment link has been updated for the last time.
   * @format date-time
   */
  lastUpdatedAt: string;
  /** Name of the attachment, e.g. its file name (to be displayed in UI). */
  name: string;
  /** URI of the attachment contents. It can be any URI, but conventionally it's a relative URI like 'attachment:1ecb9ecd-8a97-403a-a74a-741eb4b8fb69' with UUID of a file uploaded to airfocus file-storage. Such URI is then resolved by clients into a full HTTPS URL. */
  uri: string;
}

/** ItemAttachmentBulkAction */
export type ItemAttachmentBulkAction =
  | ({
      type: "create";
    } & ItemAttachmentBulkCreate)
  | ({
      type: "delete";
    } & ItemAttachmentBulkDelete)
  | ({
      type: "patch";
    } & ItemAttachmentBulkPatch)
  | ({
      type: "update";
    } & ItemAttachmentBulkUpdate);

/** ItemAttachmentBulkCreate */
export interface ItemAttachmentBulkCreate {
  /** A connection link between an item and an uploaded attachment. */
  resource: ItemAttachment;
  type: "create";
}

/** ItemAttachmentBulkDelete */
export interface ItemAttachmentBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** ItemAttachmentBulkPatch */
export interface ItemAttachmentBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** ItemAttachmentBulkUpdate */
export interface ItemAttachmentBulkUpdate {
  /** @format uuid */
  id: string;
  /** A connection link between an item and an uploaded attachment. */
  resource: ItemAttachment;
  type: "update";
}

/**
 * ItemAttachmentWithEmbed
 * A connection link between an item and an uploaded attachment.
 */
export interface ItemAttachmentWithEmbed {
  _embedded: object;
  /** Type of updated content. */
  contentType: string;
  /**
   * When this attachment link has been created.
   * @format date-time
   */
  createdAt: string;
  /**
   * ID of an item-attachment link.
   * @format uuid
   */
  id: string;
  /**
   * ID of the item to which the attachment is linked.
   * @format uuid
   */
  itemId: string;
  /**
   * When this attachment link has been updated for the last time.
   * @format date-time
   */
  lastUpdatedAt: string;
  /** Name of the attachment, e.g. its file name (to be displayed in UI). */
  name: string;
  /** URI of the attachment contents. It can be any URI, but conventionally it's a relative URI like 'attachment:1ecb9ecd-8a97-403a-a74a-741eb4b8fb69' with UUID of a file uploaded to airfocus file-storage. Such URI is then resolved by clients into a full HTTPS URL. */
  uri: string;
}

/** ItemAttachmentWithEmbedOrNullList */
export type ItemAttachmentWithEmbedOrNullList = ItemAttachmentWithEmbed[];

/** ItemAttachmentWithEmbedPage */
export interface ItemAttachmentWithEmbedPage {
  items?: ItemAttachmentWithEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** ItemBulkAction */
export type ItemBulkAction =
  | ({
      type: "create";
    } & ItemBulkCreate)
  | ({
      type: "delete";
    } & ItemBulkDelete)
  | ({
      type: "patch";
    } & ItemBulkPatch)
  | ({
      type: "update";
    } & ItemBulkUpdate);

/** ItemBulkCreate */
export interface ItemBulkCreate {
  resource: Item;
  type: "create";
}

/** ItemBulkDelete */
export interface ItemBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** ItemBulkPatch */
export interface ItemBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** ItemBulkUpdate */
export interface ItemBulkUpdate {
  /** @format uuid */
  id: string;
  resource: Item;
  type: "update";
}

/** ItemColor */
export enum ItemColor {
  Amber = "amber",
  Azure = "azure",
  Black = "black",
  Blue = "blue",
  Coco = "coco",
  Daulphine = "daulphine",
  Emerald = "emerald",
  Fanta = "fanta",
  Granite = "granite",
  Great = "great",
  Leaf = "leaf",
  Moss = "moss",
  Ocean = "ocean",
  Orange = "orange",
  Pink = "pink",
  Purple = "purple",
  Red = "red",
  Sky = "sky",
  Violet = "violet",
  Yellow = "yellow",
}

/** ItemConstraint */
export type ItemConstraint =
  | ({
      type: "integrationPushForbidden";
    } & ItemConstraintIntegrationPushForbidden)
  | ({
      type: "integrationToInternal";
    } & ItemConstraintIntegrationToInternal)
  | ({
      type: "propertyReadOnly";
    } & ItemConstraintPropertyReadOnly)
  | ({
      type: "undeletable";
    } & ItemConstraintUndeletable);

/** ItemConstraintIntegrationPushForbidden */
export interface ItemConstraintIntegrationPushForbidden {
  /** @format uuid */
  extensionId: string;
}

/** ItemConstraintIntegrationToInternal */
export interface ItemConstraintIntegrationToInternal {
  /** @format uuid */
  extensionId: string;
  /** A combination of 'fieldid:' prefix and a UUID field-id. */
  property: Property;
}

/** ItemConstraintPropertyReadOnly */
export interface ItemConstraintPropertyReadOnly {
  /** @format uuid */
  extensionId: string;
  /** A combination of 'fieldid:' prefix and a UUID field-id. */
  property: Property;
}

/** ItemConstraintUndeletable */
export interface ItemConstraintUndeletable {
  /** @format uuid */
  extensionId: string;
}

/** ItemEmbed */
export interface ItemEmbed {
  alias?: string;
  apps: Record<string, ItemEmbedApp>;
  /** @format int32 */
  attachmentCount: number;
  children?: ItemEmbedRelativeItem[];
  /** @format int32 */
  commentCount: number;
  constraints?: ItemConstraint[];
  integration?: ItemEmbedIntegration;
  /** @format int32 */
  linkCount: number;
  parents?: ItemEmbedRelativeItem[];
  progress: ItemEmbedProgress;
  watched: boolean;
  workspaceItemType?: ItemType;
}

/** ItemEmbedApp */
export interface ItemEmbedApp {
  data: any;
  /** @format uuid */
  id: string;
  typeId: string;
}

/** ItemEmbedIntegration */
export interface ItemEmbedIntegration {
  data: any;
  /** @format uuid */
  id: string;
  typeId: string;
}

/** ItemEmbedProgress */
export interface ItemEmbedProgress {
  /** @format int32 */
  closed: number;
  /** @format int32 */
  total: number;
}

/** ItemEmbedRelativeItem */
export interface ItemEmbedRelativeItem {
  alias?: string;
  /** @format int32 */
  childOrder: number;
  item?: Item;
  /** @format uuid */
  itemId: string;
  itemType?: ItemType;
  /** @format int32 */
  parentOrder: number;
  /** @format uuid */
  relationId: string;
  /** @format uuid */
  workspaceId: string;
}

/** ItemLink */
export interface ItemLink {
  /** @format uuid */
  fromItemId: string;
  /**
   * How this link is ordered in the list of links of the "fromItem".
   * @format int32
   */
  fromOrder: number;
  /** @format uuid */
  id: string;
  /** @format uuid */
  toItemId: string;
  /**
   * How this link is ordered in the list of links of the "toItem".
   * @format int32
   */
  toOrder: number;
  /** Type of a link */
  type: ItemLinkType;
}

/** ItemLinkBulkAction */
export type ItemLinkBulkAction =
  | ({
      type: "create";
    } & ItemLinkBulkCreate)
  | ({
      type: "delete";
    } & ItemLinkBulkDelete)
  | ({
      type: "patch";
    } & ItemLinkBulkPatch)
  | ({
      type: "update";
    } & ItemLinkBulkUpdate);

/** ItemLinkBulkCreate */
export interface ItemLinkBulkCreate {
  resource: ItemLink;
  type: "create";
}

/** ItemLinkBulkDelete */
export interface ItemLinkBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** ItemLinkBulkPatch */
export interface ItemLinkBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** ItemLinkBulkUpdate */
export interface ItemLinkBulkUpdate {
  /** @format uuid */
  id: string;
  resource: ItemLink;
  type: "update";
}

/** ItemLinkConstraintUndeletable */
export interface ItemLinkConstraintUndeletable {
  /** @format uuid */
  extensionId: string;
  type: "undeletable";
}

/** ItemLinkEmbed */
export interface ItemLinkEmbed {
  apps: Record<string, ItemLinkEmbedApp>;
  constraints?: ({
    type: "undeletable";
  } & ItemLinkConstraintUndeletable)[];
  /** @format uuid */
  fromWorkspaceId: string;
  /** @format uuid */
  toWorkspaceId: string;
}

/** ItemLinkEmbedApp */
export interface ItemLinkEmbedApp {
  data: any;
  /** @format uuid */
  id: string;
  typeId: string;
}

/**
 * ItemLinkSearchQuery
 * Query-parameters for searching links.
 */
export interface ItemLinkSearchQuery {
  /**
   * Also include links which connect archived items.
   * @default false
   */
  includeArchived?: boolean;
  /**
   * Return only those links which connect the specified items.
   * @uniqueItems true
   */
  itemIds?: string[];
  /**
   * Return only those links which connect items in the specified workspaces.
   * @uniqueItems true
   */
  workspaceIds?: string[];
}

/**
 * ItemLinkType
 * Type of a link
 */
export enum ItemLinkType {
  Dependency = "dependency",
  Duplicate = "duplicate",
  Relation = "relation",
}

/** ItemLinkWithItemLinkEmbed */
export interface ItemLinkWithItemLinkEmbed {
  _embedded: ItemLinkEmbed;
  /** @format uuid */
  fromItemId: string;
  /**
   * How this link is ordered in the list of links of the "fromItem".
   * @format int32
   */
  fromOrder: number;
  /** @format uuid */
  id: string;
  /** @format uuid */
  toItemId: string;
  /**
   * How this link is ordered in the list of links of the "toItem".
   * @format int32
   */
  toOrder: number;
  /** Type of a link */
  type: ItemLinkType;
}

/** ItemLinkWithItemLinkEmbedOrNullList */
export type ItemLinkWithItemLinkEmbedOrNullList = ItemLinkWithItemLinkEmbed[];

/** ItemLinkWithItemLinkEmbedPage */
export interface ItemLinkWithItemLinkEmbedPage {
  items?: ItemLinkWithItemLinkEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** ItemRelation */
export interface ItemRelation {
  /** @format uuid */
  childId: string;
  /** @format int32 */
  childOrder: number;
  /** @format uuid */
  id: string;
  /** @format uuid */
  parentId: string;
  /** @format int32 */
  parentOrder: number;
}

/** ItemRelationBulkAction */
export type ItemRelationBulkAction =
  | ({
      type: "create";
    } & ItemRelationBulkCreate)
  | ({
      type: "delete";
    } & ItemRelationBulkDelete)
  | ({
      type: "patch";
    } & ItemRelationBulkPatch)
  | ({
      type: "update";
    } & ItemRelationBulkUpdate);

/** ItemRelationBulkCreate */
export interface ItemRelationBulkCreate {
  resource: ItemRelation;
  type: "create";
}

/** ItemRelationBulkDelete */
export interface ItemRelationBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** ItemRelationBulkPatch */
export interface ItemRelationBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** ItemRelationBulkUpdate */
export interface ItemRelationBulkUpdate {
  /** @format uuid */
  id: string;
  resource: ItemRelation;
  type: "update";
}

/** ItemRelationSearchQuery */
export interface ItemRelationSearchQuery {
  filter?: ItemRelationSearchQueryFilter;
}

/** ItemRelationSearchQueryFilter */
export type ItemRelationSearchQueryFilter =
  | ({
      type: "child";
    } & ItemRelationSearchQueryFilterChild)
  | ({
      type: "parent";
    } & ItemRelationSearchQueryFilterParent)
  | ({
      type: "parentOrChild";
    } & ItemRelationSearchQueryFilterParentOrChild);

/** ItemRelationSearchQueryFilterChild */
export interface ItemRelationSearchQueryFilterChild {
  /** @format uuid */
  itemId: string;
}

/** ItemRelationSearchQueryFilterParent */
export interface ItemRelationSearchQueryFilterParent {
  /** @format uuid */
  itemId: string;
}

/** ItemRelationSearchQueryFilterParentOrChild */
export interface ItemRelationSearchQueryFilterParentOrChild {
  /** @format uuid */
  itemId: string;
}

/** ItemRelationWithEmbed */
export interface ItemRelationWithEmbed {
  _embedded: object;
  /** @format uuid */
  childId: string;
  /** @format int32 */
  childOrder: number;
  /** @format uuid */
  id: string;
  /** @format uuid */
  parentId: string;
  /** @format int32 */
  parentOrder: number;
}

/** ItemRelationWithEmbedOrNullList */
export type ItemRelationWithEmbedOrNullList = ItemRelationWithEmbed[];

/** ItemRelationWithEmbedPage */
export interface ItemRelationWithEmbedPage {
  items?: ItemRelationWithEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** ItemSearchQuery */
export interface ItemSearchQuery {
  archived: boolean;
  filter?: ItemSearchQueryFilter;
  sort: ItemSearchQuerySort;
}

/** ItemSearchQueryDateTimeFilterValue */
export interface ItemSearchQueryDateTimeFilterValue {
  /** @format date */
  date: string;
  time?: string;
  zoneId: string;
}

/** ItemSearchQueryFilter */
export type ItemSearchQueryFilter =
  | ({
      type: "and";
    } & ItemSearchQueryFilterAnd)
  | ({
      type: "assignees";
    } & ItemSearchQueryFilterAssignees)
  | ({
      type: "createdAt";
    } & ItemSearchQueryFilterCreatedAt)
  | ({
      type: "field";
    } & ItemSearchQueryFilterField)
  | ({
      type: "integration";
    } & ItemSearchQueryFilterIntegration)
  | ({
      type: "item";
    } & ItemSearchQueryFilterItem)
  | ({
      type: "lastUpdatedAt";
    } & ItemSearchQueryFilterLastUpdatedAt)
  | ({
      type: "name";
    } & ItemSearchQueryFilterName)
  | ({
      type: "not";
    } & ItemSearchQueryFilterNot)
  | ({
      type: "or";
    } & ItemSearchQueryFilterOr)
  | ({
      type: "parent";
    } & ItemSearchQueryFilterParent)
  | ({
      type: "status";
    } & ItemSearchQueryFilterStatus)
  | ({
      type: "statusCategory";
    } & ItemSearchQueryFilterStatusCategory)
  | ({
      type: "updated";
    } & ItemSearchQueryFilterUpdated);

/** ItemSearchQueryFilterAnd */
export interface ItemSearchQueryFilterAnd {
  inner: ItemSearchQueryFilter;
}

/** ItemSearchQueryFilterAssignees */
export type ItemSearchQueryFilterAssignees =
  | ({
      mode: "contain";
    } & ItemSearchQueryFilterAssigneesContain)
  | ({
      mode: "containsAll";
    } & ItemSearchQueryFilterAssigneesContainsAll)
  | ({
      mode: "containsAny";
    } & ItemSearchQueryFilterAssigneesContainsAny)
  | ({
      mode: "defined";
    } & ItemSearchQueryFilterAssigneesDefined);

/** ItemSearchQueryFilterAssigneesContain */
export interface ItemSearchQueryFilterAssigneesContain {
  user: UserRef;
}

/** ItemSearchQueryFilterAssigneesContainsAll */
export interface ItemSearchQueryFilterAssigneesContainsAll {
  users?: UserRef[];
}

/** ItemSearchQueryFilterAssigneesContainsAny */
export interface ItemSearchQueryFilterAssigneesContainsAny {
  users?: UserRef[];
}

/** ItemSearchQueryFilterAssigneesDefined */
export type ItemSearchQueryFilterAssigneesDefined = object;

/** ItemSearchQueryFilterCreatedAt */
export interface ItemSearchQueryFilterCreatedAt {
  mode: ItemSearchQueryTimeMode;
  value: ItemSearchQueryDateTimeFilterValue;
}

/** ItemSearchQueryFilterField */
export type ItemSearchQueryFilterField = {
  mode: "value";
} & ItemSearchQueryFilterFieldValue;

/** ItemSearchQueryFilterFieldValue */
export interface ItemSearchQueryFilterFieldValue {
  /** @format uuid */
  fieldId: string;
  filter: JsObject;
}

/** ItemSearchQueryFilterIntegration */
export type ItemSearchQueryFilterIntegration =
  | ({
      mode: "defined";
    } & ItemSearchQueryFilterIntegrationDefined)
  | ({
      mode: "value";
    } & ItemSearchQueryFilterIntegrationValue);

/** ItemSearchQueryFilterIntegrationDefined */
export type ItemSearchQueryFilterIntegrationDefined = object;

/** ItemSearchQueryFilterIntegrationValue */
export interface ItemSearchQueryFilterIntegrationValue {
  /** @format uuid */
  integrationId: string;
}

/** ItemSearchQueryFilterItem */
export type ItemSearchQueryFilterItem = {
  mode: "watchSelf";
} & ItemSearchQueryFilterItemWatchSelf;

/** ItemSearchQueryFilterItemWatchSelf */
export type ItemSearchQueryFilterItemWatchSelf = object;

/** ItemSearchQueryFilterLastUpdatedAt */
export interface ItemSearchQueryFilterLastUpdatedAt {
  mode: ItemSearchQueryTimeMode;
  /** A combination of 'fieldid:' prefix and a UUID field-id. */
  property?: Property;
  value: ItemSearchQueryDateTimeFilterValue;
}

/** ItemSearchQueryFilterName */
export type ItemSearchQueryFilterName =
  | ({
      mode: "contain";
    } & ItemSearchQueryFilterNameContain)
  | ({
      mode: "equal";
    } & ItemSearchQueryFilterNameEqual);

/** ItemSearchQueryFilterNameContain */
export interface ItemSearchQueryFilterNameContain {
  caseSensitive: boolean;
  text: string;
}

/** ItemSearchQueryFilterNameEqual */
export interface ItemSearchQueryFilterNameEqual {
  caseSensitive: boolean;
  text: string;
}

/** ItemSearchQueryFilterNot */
export interface ItemSearchQueryFilterNot {
  inner: ItemSearchQueryFilter;
}

/** ItemSearchQueryFilterOr */
export interface ItemSearchQueryFilterOr {
  inner: ItemSearchQueryFilter;
}

/** ItemSearchQueryFilterParent */
export type ItemSearchQueryFilterParent =
  | ({
      mode: "defined";
    } & ItemSearchQueryFilterParentDefined)
  | ({
      mode: "value";
    } & ItemSearchQueryFilterParentValue);

/** ItemSearchQueryFilterParentDefined */
export type ItemSearchQueryFilterParentDefined = object;

/** ItemSearchQueryFilterParentValue */
export interface ItemSearchQueryFilterParentValue {
  /** @format uuid */
  itemId: string;
  /** @format uuid */
  workspaceId: string;
}

/** ItemSearchQueryFilterStatus */
export type ItemSearchQueryFilterStatus =
  | ({
      mode: "containsAny";
    } & ItemSearchQueryFilterStatusContainsAny)
  | ({
      mode: "updatedSince";
    } & ItemSearchQueryFilterStatusUpdatedSince);

/** ItemSearchQueryFilterStatusCategory */
export type ItemSearchQueryFilterStatusCategory =
  | ({
      mode: "containsAny";
    } & ItemSearchQueryFilterStatusCategoryContainsAny)
  | ({
      mode: "updatedSince";
    } & ItemSearchQueryFilterStatusCategoryUpdatedSince);

/** ItemSearchQueryFilterStatusCategoryContainsAny */
export interface ItemSearchQueryFilterStatusCategoryContainsAny {
  /** @uniqueItems true */
  categories?: StatusCategory[];
}

/** ItemSearchQueryFilterStatusCategoryUpdatedSince */
export interface ItemSearchQueryFilterStatusCategoryUpdatedSince {
  value: ItemSearchQueryTimeAnchor;
}

/** ItemSearchQueryFilterStatusContainsAny */
export interface ItemSearchQueryFilterStatusContainsAny {
  /** @uniqueItems true */
  statusIds?: string[];
}

/** ItemSearchQueryFilterStatusUpdatedSince */
export interface ItemSearchQueryFilterStatusUpdatedSince {
  value: ItemSearchQueryTimeAnchor;
}

/** ItemSearchQueryFilterUpdated */
export type ItemSearchQueryFilterUpdated = {
  mode: "since";
} & ItemSearchQueryFilterUpdatedSince;

/** ItemSearchQueryFilterUpdatedSince */
export interface ItemSearchQueryFilterUpdatedSince {
  /** A combination of 'fieldid:' prefix and a UUID field-id. */
  property?: Property;
  /** @format date-time */
  timestamp: string;
}

/** ItemSearchQuerySort */
export type ItemSearchQuerySort =
  | ({
      type: "createdAt";
    } & ItemSearchQuerySortCreatedAt)
  | ({
      type: "field";
    } & ItemSearchQuerySortField)
  | ({
      type: "lastUpdatedAt";
    } & ItemSearchQuerySortLastUpdatedAt)
  | ({
      type: "name";
    } & ItemSearchQuerySortName)
  | ({
      type: "order";
    } & ItemSearchQuerySortOrder)
  | ({
      type: "status";
    } & ItemSearchQuerySortStatus);

/** ItemSearchQuerySortCreatedAt */
export interface ItemSearchQuerySortCreatedAt {
  direction: ItemSearchQuerySortDirection;
}

/** ItemSearchQuerySortDirection */
export enum ItemSearchQuerySortDirection {
  Asc = "asc",
  Desc = "desc",
}

/** ItemSearchQuerySortField */
export interface ItemSearchQuerySortField {
  direction: ItemSearchQuerySortDirection;
  /** @format uuid */
  fieldId: string;
}

/** ItemSearchQuerySortLastUpdatedAt */
export interface ItemSearchQuerySortLastUpdatedAt {
  direction: ItemSearchQuerySortDirection;
}

/** ItemSearchQuerySortName */
export interface ItemSearchQuerySortName {
  direction: ItemSearchQuerySortDirection;
}

/** ItemSearchQuerySortOrder */
export interface ItemSearchQuerySortOrder {
  direction: ItemSearchQuerySortDirection;
}

/** ItemSearchQuerySortStatus */
export interface ItemSearchQuerySortStatus {
  direction: ItemSearchQuerySortDirection;
}

/** ItemSearchQueryTimeAnchor */
export type ItemSearchQueryTimeAnchor =
  | ({
      type: "days";
    } & ItemSearchQueryTimeAnchorDays)
  | ({
      type: "months";
    } & ItemSearchQueryTimeAnchorMonths)
  | ({
      type: "weeks";
    } & ItemSearchQueryTimeAnchorWeeks);

/** ItemSearchQueryTimeAnchorDays */
export interface ItemSearchQueryTimeAnchorDays {
  /** @format int32 */
  count: number;
}

/** ItemSearchQueryTimeAnchorMonths */
export interface ItemSearchQueryTimeAnchorMonths {
  /** @format int32 */
  count: number;
}

/** ItemSearchQueryTimeAnchorWeeks */
export interface ItemSearchQueryTimeAnchorWeeks {
  /** @format int32 */
  count: number;
}

/** ItemSearchQueryTimeMode */
export enum ItemSearchQueryTimeMode {
  After = "after",
  AfterOrOn = "afterOrOn",
  Before = "before",
  BeforeOrOn = "beforeOrOn",
}

/** ItemType */
export enum ItemType {
  Bug = "bug",
  Epic = "epic",
  Experiment = "experiment",
  Feature = "feature",
  Feedback = "feedback",
  Idea = "idea",
  Initiative = "initiative",
  AppOkrObjective = "app:okr:objective",
  Opportunity = "opportunity",
  Product = "product",
  Project = "project",
  Story = "story",
  Task = "task",
}

/** ItemWithItemEmbed */
export interface ItemWithItemEmbed {
  _embedded: ItemEmbed;
  archived: boolean;
  assigneeUserIds?: string[];
  color: ItemColor;
  /** @format date-time */
  createdAt: string;
  description: RichText;
  /** Values of custom fields, where each key is a custom-field ID and each value is a JSON-formatted value of the corresponding field. */
  fields: Record<string, any>;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUpdatedAt: string;
  name: string;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  order: number;
  /** @format date-time */
  statusCategoryUpdatedAt?: string;
  /** @format uuid */
  statusId: string;
  /** @format date-time */
  statusUpdatedAt?: string;
  /** @format uuid */
  workspaceId: string;
}

/** ItemWithItemEmbedOrNullList */
export type ItemWithItemEmbedOrNullList = ItemWithItemEmbed[];

/** ItemWithItemEmbedPage */
export interface ItemWithItemEmbedPage {
  items?: ItemWithItemEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** JsObject */
export type JsObject = object;

/**
 * JsonPatch
 * A JSON Patch document. See https://jsonpatch.com/ for more information.
 */
export type JsonPatch = JsonPatchOperation[];

/** JsonPatchAdd */
export interface JsonPatchAdd {
  op: "add";
  path: string;
  value: any;
}

/** JsonPatchCopy */
export interface JsonPatchCopy {
  from: string;
  op: "copy";
  path: string;
}

/** JsonPatchMove */
export interface JsonPatchMove {
  from: string;
  op: "move";
  path: string;
}

/** JsonPatchOperation */
export type JsonPatchOperation =
  | ({
      op: "add";
    } & JsonPatchAdd)
  | ({
      op: "copy";
    } & JsonPatchCopy)
  | ({
      op: "move";
    } & JsonPatchMove)
  | ({
      op: "remove";
    } & JsonPatchRemove)
  | ({
      op: "replace";
    } & JsonPatchReplace)
  | ({
      op: "test";
    } & JsonPatchTest);

/** JsonPatchRemove */
export interface JsonPatchRemove {
  old?: any;
  op: "remove";
  path: string;
}

/** JsonPatchReplace */
export interface JsonPatchReplace {
  old?: any;
  op: "replace";
  path: string;
  value: any;
}

/** JsonPatchTest */
export interface JsonPatchTest {
  op: "test";
  path: string;
  value: any;
}

/** KickUserRequest */
export interface KickUserRequest {
  /** @format uuid */
  userId: string;
}

/** Milestone */
export interface Milestone {
  /** @format date-time */
  createdAt: string;
  /** @format date */
  date: string;
  description: string;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUpdatedAt: string;
  name: string;
  timezone?: string;
  /** @format uuid */
  workspaceId: string;
}

/** MilestoneBulkAction */
export type MilestoneBulkAction =
  | ({
      type: "create";
    } & MilestoneBulkCreate)
  | ({
      type: "delete";
    } & MilestoneBulkDelete)
  | ({
      type: "patch";
    } & MilestoneBulkPatch)
  | ({
      type: "update";
    } & MilestoneBulkUpdate);

/** MilestoneBulkCreate */
export interface MilestoneBulkCreate {
  resource: Milestone;
  type: "create";
}

/** MilestoneBulkDelete */
export interface MilestoneBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** MilestoneBulkPatch */
export interface MilestoneBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** MilestoneBulkUpdate */
export interface MilestoneBulkUpdate {
  /** @format uuid */
  id: string;
  resource: Milestone;
  type: "update";
}

/** MilestoneWithEmbed */
export interface MilestoneWithEmbed {
  _embedded: object;
  /** @format date-time */
  createdAt: string;
  /** @format date */
  date: string;
  description: string;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUpdatedAt: string;
  name: string;
  timezone?: string;
  /** @format uuid */
  workspaceId: string;
}

/** MilestoneWithEmbedOrNullList */
export type MilestoneWithEmbedOrNullList = MilestoneWithEmbed[];

/** MilestoneWithEmbedPage */
export interface MilestoneWithEmbedPage {
  items?: MilestoneWithEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** MirrorSourceFieldWithFieldEmbed */
export interface MirrorSourceFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** MirrorTargetFieldWithFieldEmbed */
export interface MirrorTargetFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** NumberFieldTypeSettings */
export interface NumberFieldTypeSettings {
  maximum?: number;
  minimum?: number;
  overflow: boolean;
  stepping?: NumberFieldTypeSettingsStepping;
  unit?: NumberFieldTypeSettingsUnit;
}

/** NumberFieldTypeSettingsStepping */
export type NumberFieldTypeSettingsStepping =
  | ({
      type: "equal";
    } & NumberFieldTypeSettingsSteppingEqual)
  | ({
      type: "exponential";
    } & NumberFieldTypeSettingsSteppingExponential)
  | ({
      type: "fibonacci";
    } & NumberFieldTypeSettingsSteppingFibonacci);

/** NumberFieldTypeSettingsSteppingEqual */
export interface NumberFieldTypeSettingsSteppingEqual {
  delta: number;
}

/** NumberFieldTypeSettingsSteppingExponential */
export interface NumberFieldTypeSettingsSteppingExponential {
  factor: number;
}

/** NumberFieldTypeSettingsSteppingFibonacci */
export type NumberFieldTypeSettingsSteppingFibonacci = object;

/** NumberFieldTypeSettingsUnit */
export type NumberFieldTypeSettingsUnit =
  | ({
      type: "custom";
    } & NumberFieldTypeSettingsUnitCustom)
  | ({
      type: "money";
    } & NumberFieldTypeSettingsUnitMoney)
  | ({
      type: "percent";
    } & NumberFieldTypeSettingsUnitPercent)
  | ({
      type: "storyPoints";
    } & NumberFieldTypeSettingsUnitStoryPoints);

/** NumberFieldTypeSettingsUnitCustom */
export interface NumberFieldTypeSettingsUnitCustom {
  prefix: string;
  suffix: string;
}

/** NumberFieldTypeSettingsUnitMoney */
export interface NumberFieldTypeSettingsUnitMoney {
  currency: string;
}

/** NumberFieldTypeSettingsUnitPercent */
export type NumberFieldTypeSettingsUnitPercent = object;

/** NumberFieldTypeSettingsUnitStoryPoints */
export type NumberFieldTypeSettingsUnitStoryPoints = object;

/** NumberFieldWithFieldEmbed */
export interface NumberFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: NumberFieldTypeSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** OkrCheckinsFieldWithFieldEmbed */
export interface OkrCheckinsFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** OkrConfidenceFieldSettings */
export interface OkrConfidenceFieldSettings {
  /** @format int32 */
  low: number;
  /** @format int32 */
  medium: number;
}

/** OkrConfidenceFieldWithFieldEmbed */
export interface OkrConfidenceFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: OkrConfidenceFieldSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** OkrKeyResultReferenceFieldWithFieldEmbed */
export interface OkrKeyResultReferenceFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** OkrKeyResultsFieldWithFieldEmbed */
export interface OkrKeyResultsFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** OkrProgressFieldWithFieldEmbed */
export interface OkrProgressFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** OkrTimePeriodFieldSettings */
export interface OkrTimePeriodFieldSettings {
  timePeriods?: TimePeriod[];
}

/** OkrTimePeriodFieldWithFieldEmbed */
export interface OkrTimePeriodFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: OkrTimePeriodFieldSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** PeopleFieldTypeSettings */
export interface PeopleFieldTypeSettings {
  autoAssign: boolean;
}

/** PeopleFieldWithFieldEmbed */
export interface PeopleFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: PeopleFieldTypeSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** Permission */
export enum Permission {
  Comment = "comment",
  Full = "full",
  Read = "read",
  Write = "write",
}

/** PortalFieldWithFieldEmbed */
export interface PortalFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** PrioritizationFieldWithFieldEmbed */
export interface PrioritizationFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/**
 * Property
 * A combination of 'fieldid:' prefix and a UUID field-id.
 */
export type Property = "archived" | "assignees" | "color" | "description" | "name" | "status" | string;

/** ResendUserInviteRequest */
export interface ResendUserInviteRequest {
  email: string;
}

/** RichText */
export interface RichText {
  blocks?: RichTextBlock[];
}

/** RichTextBlock */
export type RichTextBlock =
  | ({
      type: "attachment";
    } & RichTextBlockAttachment)
  | ({
      type: "blockquote";
    } & RichTextBlockBlockquote)
  | ({
      type: "code";
    } & RichTextBlockCode)
  | ({
      type: "custom";
    } & RichTextBlockCustom)
  | ({
      type: "embed";
    } & RichTextBlockEmbed)
  | ({
      type: "headline";
    } & RichTextBlockHeadline)
  | ({
      type: "indentation";
    } & RichTextBlockIndentation)
  | ({
      type: "list";
    } & RichTextBlockList)
  | ({
      type: "panel";
    } & RichTextBlockPanel)
  | ({
      type: "paragraph";
    } & RichTextBlockParagraph);

/** RichTextBlockAttachment */
export interface RichTextBlockAttachment {
  /** @format uuid */
  attachmentId: string;
  caption?: string;
  contentType: string;
  /** @format int32 */
  width?: number;
}

/** RichTextBlockBlockquote */
export interface RichTextBlockBlockquote {
  content?: RichTextInline[];
}

/** RichTextBlockCode */
export interface RichTextBlockCode {
  content: string;
  language?: string;
}

/** RichTextBlockCustom */
export interface RichTextBlockCustom {
  id: string;
  raw: string;
}

/** RichTextBlockEmbed */
export interface RichTextBlockEmbed {
  caption?: string;
  /** @format int32 */
  height?: number;
  url: string;
}

/** RichTextBlockHeadline */
export interface RichTextBlockHeadline {
  content?: RichTextInline[];
  /** @format int32 */
  level: number;
}

/** RichTextBlockIndentation */
export interface RichTextBlockIndentation {
  content: RichTextBlock;
}

/** RichTextBlockList */
export interface RichTextBlockList {
  bulletListMarker?: string;
  items?: RichTextListItem[];
  ordered: boolean;
  orderedListDelimiter?: string;
  /** @format int32 */
  orderedListStartsAt?: number;
}

/** RichTextBlockPanel */
export interface RichTextBlockPanel {
  colorHex: string;
  content: RichTextBlock;
}

/** RichTextBlockParagraph */
export interface RichTextBlockParagraph {
  content?: RichTextInline[];
}

/** RichTextInline */
export type RichTextInline =
  | ({
      type: "bold";
    } & RichTextInlineBold)
  | ({
      type: "code";
    } & RichTextInlineCode)
  | ({
      type: "custom";
    } & RichTextInlineCustom)
  | ({
      type: "image";
    } & RichTextInlineImage)
  | ({
      type: "italic";
    } & RichTextInlineItalic)
  | ({
      type: "link";
    } & RichTextInlineLink)
  | ({
      type: "mention";
    } & RichTextInlineMention)
  | ({
      type: "strikeThrough";
    } & RichTextInlineStrikeThrough)
  | ({
      type: "text";
    } & RichTextInlineText)
  | ({
      type: "underline";
    } & RichTextInlineUnderline);

/** RichTextInlineBold */
export interface RichTextInlineBold {
  content: RichTextInline;
}

/** RichTextInlineCode */
export interface RichTextInlineCode {
  content: string;
}

/** RichTextInlineCustom */
export interface RichTextInlineCustom {
  id: string;
  raw: string;
}

/** RichTextInlineImage */
export interface RichTextInlineImage {
  content: RichTextInline;
  url: string;
}

/** RichTextInlineItalic */
export interface RichTextInlineItalic {
  content: RichTextInline;
}

/** RichTextInlineLink */
export interface RichTextInlineLink {
  content: RichTextInline;
  url: string;
}

/** RichTextInlineMention */
export interface RichTextInlineMention {
  /** @format uuid */
  userId: string;
}

/** RichTextInlineStrikeThrough */
export interface RichTextInlineStrikeThrough {
  content: RichTextInline;
}

/** RichTextInlineText */
export interface RichTextInlineText {
  content: string;
}

/** RichTextInlineUnderline */
export interface RichTextInlineUnderline {
  content: RichTextInline;
}

/** RichTextListItem */
export interface RichTextListItem {
  content: RichTextBlock;
}

/** Role */
export enum Role {
  Admin = "admin",
  Contributor = "contributor",
  Editor = "editor",
}

/** SelectFieldOptionColor */
export enum SelectFieldOptionColor {
  Blue = "blue",
  Coco = "coco",
  Daulphine = "daulphine",
  Great = "great",
  Orange = "orange",
  Pink = "pink",
  Red = "red",
  Violet = "violet",
  Yellow = "yellow",
}

/** SelectFieldTypeOption */
export interface SelectFieldTypeOption {
  color?: SelectFieldOptionColor;
  default: boolean;
  description: string;
  id: string;
  name: string;
  numericValue?: number;
}

/** SelectFieldTypeSettings */
export interface SelectFieldTypeSettings {
  multi: boolean;
  options?: SelectFieldTypeOption[];
}

/** SelectFieldWithFieldEmbed */
export interface SelectFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: SelectFieldTypeSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** SetClientSettingsRequest */
export interface SetClientSettingsRequest {
  path?: string;
  value: any;
}

/** Status */
export interface Status {
  /**
   * Status category adds some additional meaning to each status:
   * - 'draft': only semantic meaning
   * - 'active': only semantic meaning
   * - 'closed': items with a status in this category will be considered as completed, which contributes to progress calculation (e.g. "1/3 items completed").
   */
  category: StatusCategory;
  /** Color of a status-chip in UI. */
  color?: StatusColor;
  /** Whether this status should be applied by default to newly created items. There can be only one default status in each workspace. */
  default: boolean;
  /** @format uuid */
  id: string;
  /** Name of this status in UI. */
  name: string;
  /**
   * Order of this status comparing to other statuses in the same workspace.
   * @format int32
   */
  order: number;
  /** @format uuid */
  workspaceId: string;
}

/**
 * StatusCategory
 * Status category adds some additional meaning to each status:
 * - 'draft': only semantic meaning
 * - 'active': only semantic meaning
 * - 'closed': items with a status in this category will be considered as completed, which contributes to progress calculation (e.g. "1/3 items completed").
 */
export enum StatusCategory {
  Active = "active",
  Closed = "closed",
  Draft = "draft",
}

/**
 * StatusColor
 * Color of a status-chip in UI.
 */
export enum StatusColor {
  Blue = "blue",
  Coco = "coco",
  Daulphine = "daulphine",
  Great = "great",
  Orange = "orange",
  Pink = "pink",
  Red = "red",
  Violet = "violet",
  Yellow = "yellow",
}

/** StoreAcceptedTosRequest */
export interface StoreAcceptedTosRequest {
  text: string;
}

/** Team */
export interface Team {
  companyInfo?: TeamCompanyInfo;
  /** @format date-time */
  createdAt: string;
  flags: TeamFlags;
  name: string;
  slug: string;
  state: TeamState;
  /** @format uuid */
  teamId: string;
  /** @format date-time */
  updatedAt: string;
}

/** TeamCompanyInfo */
export interface TeamCompanyInfo {
  role: TeamCompanyInfoRole;
  size: TeamCompanyInfoSize;
  telephone?: string;
}

/** TeamCompanyInfoRole */
export enum TeamCompanyInfoRole {
  CustomerSuccess = "customerSuccess",
  Design = "design",
  Engineering = "engineering",
  Marketing = "marketing",
  NotListed = "notListed",
  ProductManagement = "productManagement",
  ProjectManagement = "projectManagement",
  Sales = "sales",
  Unknown = "unknown",
}

/** TeamCompanyInfoSize */
export enum TeamCompanyInfoSize {
  Range1000Plus = "range1000plus",
  Range11To50 = "range11to50",
  Range1To10 = "range1to10",
  Range201To1000 = "range201to1000",
  Range51To200 = "range51to200",
  Unknown = "unknown",
}

/** TeamFlag */
export interface TeamFlag {
  enforced: boolean;
  explicit: boolean;
  value: boolean;
}

/** TeamFlags */
export interface TeamFlags {
  enableAi: TeamFlag;
  enableOkrApp: TeamFlag;
  removeBranding: TeamFlag;
  requirePortalPassword: TeamFlag;
  requireShareLinkPassword: TeamFlag;
  restrictShareLinkCreation: TeamFlag;
}

/** TeamState */
export interface TeamState {
  /** @uniqueItems true */
  features: string[];
  seats: TeamStateAllTeamStateSeats;
  subscription: TeamStateSubscription;
  /**
   * @deprecated
   * @format date-time
   */
  trialUntil?: string;
  workspaces: TeamStateWorkspaces;
}

/** TeamStateAllTeamStateSeats */
export interface TeamStateAllTeamStateSeats {
  admin?: TeamStateSeats;
  any?: TeamStateSeats;
  contributor?: TeamStateSeats;
  editor?: TeamStateSeats;
}

/** TeamStateSeats */
export interface TeamStateSeats {
  /** @format int32 */
  free: number;
  total: number;
  /** @format int32 */
  used: number;
}

/** TeamStateSubscription */
export type TeamStateSubscription =
  | ({
      type: "expired";
    } & TeamStateSubscriptionExpired)
  | ({
      type: "subscribed";
    } & TeamStateSubscriptionSubscribed)
  | ({
      type: "trial";
    } & TeamStateSubscriptionTrial);

/** TeamStateSubscriptionExpired */
export interface TeamStateSubscriptionExpired {
  /** @format date-time */
  trialUntil: string;
}

/** TeamStateSubscriptionSubscribed */
export type TeamStateSubscriptionSubscribed = object;

/** TeamStateSubscriptionTrial */
export interface TeamStateSubscriptionTrial {
  /** @format date-time */
  trialUntil: string;
}

/** TeamStateWorkspaces */
export interface TeamStateWorkspaces {
  total: number;
}

/** Template */
export interface Template {
  abstract: string;
  apps?: TemplateApp[];
  description: string;
  featured: boolean;
  id: string;
  imageUrl?: string;
  name: string;
  views?: TemplateView[];
  viewsSectionTitle: string;
  /** @format int32 */
  workspacesCount: number;
}

/** TemplateApp */
export interface TemplateApp {
  description?: string;
  name: string;
  typeId: string;
}

/** TemplateCategory */
export interface TemplateCategory {
  name: string;
  slug: string;
  templateIds?: string[];
}

/** TemplatePageWithEmbed */
export interface TemplatePageWithEmbed {
  _embedded: TemplateSearchEmbed;
  items?: Template[];
  /** @format int32 */
  totalItems: number;
}

/** TemplateSearchEmbed */
export interface TemplateSearchEmbed {
  categories?: TemplateCategory[];
}

/** TemplateView */
export interface TemplateView {
  description?: string;
  iconName?: string;
  imageUrl: string;
  name: string;
}

/** TextFieldWithFieldEmbed */
export interface TextFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** TimePeriod */
export interface TimePeriod {
  /** @format date */
  endDate: string;
  /** @format uuid */
  id: string;
  label: string;
  /** @format date */
  startDate: string;
}

/** TimePeriodFieldSettings */
export type TimePeriodFieldSettings =
  | ({
      type: "iterations";
    } & TimePeriodFieldSettingsIterations)
  | ({
      type: "simple";
    } & TimePeriodFieldSettingsSimple);

/** TimePeriodFieldSettingsIterations */
export interface TimePeriodFieldSettingsIterations {
  /** @format uuid */
  currentId: string;
  multi: boolean;
  timePeriods?: TimePeriod[];
}

/** TimePeriodFieldSettingsSimple */
export interface TimePeriodFieldSettingsSimple {
  multi: boolean;
  timePeriods?: TimePeriod[];
}

/** TimePeriodFieldWithFieldEmbed */
export interface TimePeriodFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: TimePeriodFieldSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** UpdateStatus */
export interface UpdateStatus {
  /**
   * Status category adds some additional meaning to each status:
   * - 'draft': only semantic meaning
   * - 'active': only semantic meaning
   * - 'closed': items with a status in this category will be considered as completed, which contributes to progress calculation (e.g. "1/3 items completed").
   */
  category: StatusCategory;
  /** Color of a status-chip in UI. */
  color?: StatusColor;
  /** Whether this status should be applied by default to newly created items. There can be only one default status in each workspace. */
  default: boolean;
  /** @format uuid */
  id: string;
  /** Name of this status in UI. */
  name: string;
  /**
   * Order of this status comparing to other statuses in the same workspace.
   * @format int32
   */
  order: number;
}

/** UpdateTeamFlagsRequest */
export interface UpdateTeamFlagsRequest {
  enableAi?: boolean;
  enableOkrApp?: boolean;
  removeBranding?: boolean;
  requirePortalPassword?: boolean;
  requireShareLinkPassword?: boolean;
  restrictShareLinkCreation?: boolean;
}

/** UpdateUserRequest */
export interface UpdateUserRequest {
  /** @format uuid */
  avatarAttachmentId?: string;
  email: string;
  fullName: string;
}

/** User */
export interface User {
  /** @format uuid */
  avatarAttachmentId?: string;
  /** @format date-time */
  createdAt: string;
  disabled: boolean;
  email: string;
  emailVerified: boolean;
  fullName: string;
  isTeamCreator: boolean;
  /** @format date-time */
  lastSeenAt?: string;
  role: Role;
  state: UserState;
  /** @format uuid */
  teamId: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  userId: string;
}

/** UserRef */
export type UserRef = UserRefUserRefCurrent | UserRefUserRefId;

/** UserRefUserRefCurrent */
export type UserRefUserRefCurrent = object;

/** UserRefUserRefId */
export interface UserRefUserRefId {
  /** @format uuid */
  id: string;
}

/** UserState */
export interface UserState {
  pending: boolean;
  unseated: boolean;
}

/** View */
export interface View {
  description: string;
  /** @format uuid */
  id: string;
  itemFilter?: ItemSearchQueryFilter;
  itemSort?: ItemSearchQuerySort[];
  name: string;
  /** @format int32 */
  order: number;
  /** @format int32 */
  pinnedToPosition?: number;
  /** @format uuid */
  privateOwnerId?: string;
  requiredPermission?: Permission;
  settings: any;
  typeId: string;
  /** @format uuid */
  workspaceId: string;
}

/** VotesFieldWithFieldEmbed */
export interface VotesFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** VotingAppScoreFieldTypeSettings */
export interface VotingAppScoreFieldTypeSettings {
  maximum?: number;
  minimum?: number;
}

/** VotingScoreFieldWithFieldEmbed */
export interface VotingScoreFieldWithFieldEmbed {
  _embedded: FieldEmbed;
  /** @format date-time */
  createdAt: string;
  description: string;
  /** @format uuid */
  id: string;
  isTeamField: boolean;
  name: string;
  settings: VotingAppScoreFieldTypeSettings;
  /** @format uuid */
  teamId: string;
  typeId: string;
}

/** Workspace */
export interface Workspace {
  alias?: string;
  archived: boolean;
  /** @format date-time */
  createdAt: string;
  defaultPermission?: Permission;
  description: RichText;
  /** @format uuid */
  id: string;
  itemColor?: ItemColor;
  itemType?: ItemType;
  /** @format date-time */
  lastUpdatedAt: string;
  legacyId?: string;
  metadata?: WorkspaceWorkspaceMetadata;
  name: string;
  namespace: WorkspaceNamespace;
  progressMode: WorkspaceProgressMode;
  /** @format uuid */
  teamId: string;
}

/** WorkspaceBulkAction */
export type WorkspaceBulkAction =
  | ({
      type: "create";
    } & WorkspaceBulkCreate)
  | ({
      type: "delete";
    } & WorkspaceBulkDelete)
  | ({
      type: "patch";
    } & WorkspaceBulkPatch)
  | ({
      type: "update";
    } & WorkspaceBulkUpdate);

/** WorkspaceBulkCreate */
export interface WorkspaceBulkCreate {
  resource: Workspace;
  type: "create";
}

/** WorkspaceBulkDelete */
export interface WorkspaceBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** WorkspaceBulkPatch */
export interface WorkspaceBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** WorkspaceBulkUpdate */
export interface WorkspaceBulkUpdate {
  /** @format uuid */
  id: string;
  resource: Workspace;
  type: "update";
}

/** WorkspaceEmbed */
export interface WorkspaceEmbed {
  apps: Record<string, App>;
  children?: WorkspaceEmbedRelation[];
  currentPermission?: Permission;
  fields: Record<string, FieldWithFieldEmbed>;
  integrations: Record<string, IntegrationSummary>;
  /** @format int32 */
  itemCount: number;
  itemStatusCount: Record<string, number>;
  itemStatusCountArchived: Record<string, number>;
  parents?: WorkspaceEmbedRelation[];
  permissions: Record<string, Permission>;
  statuses: Record<string, Status>;
  views: Record<string, View>;
}

/** WorkspaceEmbedRelation */
export interface WorkspaceEmbedRelation {
  /** @format uuid */
  relationId: string;
  workspace?: Workspace;
  /** @format uuid */
  workspaceId: string;
}

/** WorkspaceGroup */
export interface WorkspaceGroup {
  /** @format date-time */
  createdAt: string;
  defaultPermission?: Permission;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUpdatedAt: string;
  name: string;
  /** @format uuid */
  teamId: string;
}

/** WorkspaceGroupAssignWorkspaceRequest */
export interface WorkspaceGroupAssignWorkspaceRequest {
  /** @format uuid */
  workspaceGroupId?: string;
  /** @format uuid */
  workspaceId: string;
}

/** WorkspaceGroupBulkAction */
export type WorkspaceGroupBulkAction =
  | ({
      type: "create";
    } & WorkspaceGroupBulkCreate)
  | ({
      type: "delete";
    } & WorkspaceGroupBulkDelete)
  | ({
      type: "patch";
    } & WorkspaceGroupBulkPatch)
  | ({
      type: "update";
    } & WorkspaceGroupBulkUpdate);

/** WorkspaceGroupBulkCreate */
export interface WorkspaceGroupBulkCreate {
  resource: WorkspaceGroup;
  type: "create";
}

/** WorkspaceGroupBulkDelete */
export interface WorkspaceGroupBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** WorkspaceGroupBulkPatch */
export interface WorkspaceGroupBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** WorkspaceGroupBulkUpdate */
export interface WorkspaceGroupBulkUpdate {
  /** @format uuid */
  id: string;
  resource: WorkspaceGroup;
  type: "update";
}

/** WorkspaceGroupEmbed */
export interface WorkspaceGroupEmbed {
  currentPermission?: Permission;
  permissions: Record<string, Permission>;
  workspaces?: Workspace[];
}

/** WorkspaceGroupPermissionsUpdateRequest */
export interface WorkspaceGroupPermissionsUpdateRequest {
  permissions: Record<string, Permission>;
}

/** WorkspaceGroupWithWorkspaceGroupEmbed */
export interface WorkspaceGroupWithWorkspaceGroupEmbed {
  _embedded: WorkspaceGroupEmbed;
  /** @format date-time */
  createdAt: string;
  defaultPermission?: Permission;
  /** @format uuid */
  id: string;
  /** @format date-time */
  lastUpdatedAt: string;
  name: string;
  /** @format uuid */
  teamId: string;
}

/** WorkspaceGroupWithWorkspaceGroupEmbedOrNullList */
export type WorkspaceGroupWithWorkspaceGroupEmbedOrNullList = WorkspaceGroupWithWorkspaceGroupEmbed[];

/** WorkspaceGroupWithWorkspaceGroupEmbedPage */
export interface WorkspaceGroupWithWorkspaceGroupEmbedPage {
  items?: WorkspaceGroupWithWorkspaceGroupEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** WorkspaceNamespace */
export enum WorkspaceNamespace {
  Main = "main",
  AppOkr = "app:okr",
}

/** WorkspaceProgressMode */
export enum WorkspaceProgressMode {
  Count = "count",
  None = "none",
  Percentage = "percentage",
}

/** WorkspaceRelation */
export interface WorkspaceRelation {
  /** @format uuid */
  childId: string;
  /** @format uuid */
  id: string;
  /** @format uuid */
  parentId: string;
}

/** WorkspaceRelationBulkAction */
export type WorkspaceRelationBulkAction =
  | ({
      type: "create";
    } & WorkspaceRelationBulkCreate)
  | ({
      type: "delete";
    } & WorkspaceRelationBulkDelete)
  | ({
      type: "patch";
    } & WorkspaceRelationBulkPatch)
  | ({
      type: "update";
    } & WorkspaceRelationBulkUpdate);

/** WorkspaceRelationBulkCreate */
export interface WorkspaceRelationBulkCreate {
  resource: WorkspaceRelation;
  type: "create";
}

/** WorkspaceRelationBulkDelete */
export interface WorkspaceRelationBulkDelete {
  /** @format uuid */
  id: string;
  type: "delete";
}

/** WorkspaceRelationBulkPatch */
export interface WorkspaceRelationBulkPatch {
  /** @format uuid */
  id: string;
  /** A JSON Patch document. See https://jsonpatch.com/ for more information. */
  transform: JsonPatch;
  type: "patch";
}

/** WorkspaceRelationBulkUpdate */
export interface WorkspaceRelationBulkUpdate {
  /** @format uuid */
  id: string;
  resource: WorkspaceRelation;
  type: "update";
}

/** WorkspaceRelationSearchQuery */
export interface WorkspaceRelationSearchQuery {
  filter?: WorkspaceRelationSearchQueryFilter;
}

/** WorkspaceRelationSearchQueryFilter */
export type WorkspaceRelationSearchQueryFilter =
  | ({
      type: "and";
    } & WorkspaceRelationSearchQueryFilterAnd)
  | ({
      type: "child";
    } & WorkspaceRelationSearchQueryFilterChild)
  | ({
      type: "not";
    } & WorkspaceRelationSearchQueryFilterNot)
  | ({
      type: "or";
    } & WorkspaceRelationSearchQueryFilterOr)
  | ({
      type: "parent";
    } & WorkspaceRelationSearchQueryFilterParent);

/** WorkspaceRelationSearchQueryFilterAnd */
export interface WorkspaceRelationSearchQueryFilterAnd {
  inner: WorkspaceRelationSearchQueryFilter;
}

/** WorkspaceRelationSearchQueryFilterChild */
export type WorkspaceRelationSearchQueryFilterChild =
  | ({
      mode: "containAny";
    } & WorkspaceRelationSearchQueryFilterChildContainAny)
  | ({
      mode: "equal";
    } & WorkspaceRelationSearchQueryFilterChildEqual);

/** WorkspaceRelationSearchQueryFilterChildContainAny */
export interface WorkspaceRelationSearchQueryFilterChildContainAny {
  /** @uniqueItems true */
  workspaceIds?: string[];
}

/** WorkspaceRelationSearchQueryFilterChildEqual */
export interface WorkspaceRelationSearchQueryFilterChildEqual {
  /** @format uuid */
  workspaceId: string;
}

/** WorkspaceRelationSearchQueryFilterNot */
export interface WorkspaceRelationSearchQueryFilterNot {
  inner: WorkspaceRelationSearchQueryFilter;
}

/** WorkspaceRelationSearchQueryFilterOr */
export interface WorkspaceRelationSearchQueryFilterOr {
  inner: WorkspaceRelationSearchQueryFilter;
}

/** WorkspaceRelationSearchQueryFilterParent */
export type WorkspaceRelationSearchQueryFilterParent =
  | ({
      mode: "containAny";
    } & WorkspaceRelationSearchQueryFilterParentContainAny)
  | ({
      mode: "equal";
    } & WorkspaceRelationSearchQueryFilterParentEqual);

/** WorkspaceRelationSearchQueryFilterParentContainAny */
export interface WorkspaceRelationSearchQueryFilterParentContainAny {
  /** @uniqueItems true */
  workspaceIds?: string[];
}

/** WorkspaceRelationSearchQueryFilterParentEqual */
export interface WorkspaceRelationSearchQueryFilterParentEqual {
  /** @format uuid */
  workspaceId: string;
}

/** WorkspaceRelationWithEmbed */
export interface WorkspaceRelationWithEmbed {
  _embedded: object;
  /** @format uuid */
  childId: string;
  /** @format uuid */
  id: string;
  /** @format uuid */
  parentId: string;
}

/** WorkspaceRelationWithEmbedOrNullList */
export type WorkspaceRelationWithEmbedOrNullList = WorkspaceRelationWithEmbed[];

/** WorkspaceRelationWithEmbedPage */
export interface WorkspaceRelationWithEmbedPage {
  items?: WorkspaceRelationWithEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** WorkspaceRelationsSetRequest */
export interface WorkspaceRelationsSetRequest {
  /** @uniqueItems true */
  childIds?: string[];
  /** @uniqueItems true */
  parentIds?: string[];
  /** @format uuid */
  workspaceId: string;
}

/** WorkspaceSearchEmbed */
export interface WorkspaceSearchEmbed {
  currentPermission?: Permission;
  /** @format int32 */
  itemCount: number;
  permissions: Record<string, Permission>;
  statuses: Record<string, Status>;
}

/** WorkspaceSearchQuery */
export interface WorkspaceSearchQuery {
  archived: boolean;
  filter?: WorkspaceSearchQueryFilter;
  sort: WorkspaceSearchQuerySort;
}

/** WorkspaceSearchQueryFilter */
export type WorkspaceSearchQueryFilter =
  | WorkspaceSearchQueryFilterAnd
  | WorkspaceSearchQueryFilterMembersContainAny
  | WorkspaceSearchQueryFilterNameContain
  | WorkspaceSearchQueryFilterNameEqual
  | WorkspaceSearchQueryFilterNamespaceContainAny
  | WorkspaceSearchQueryFilterNot
  | WorkspaceSearchQueryFilterOr;

/** WorkspaceSearchQueryFilterAnd */
export interface WorkspaceSearchQueryFilterAnd {
  inner?: WorkspaceSearchQueryFilter[];
}

/** WorkspaceSearchQueryFilterMembersContainAny */
export interface WorkspaceSearchQueryFilterMembersContainAny {
  /** @uniqueItems true */
  ids?: string[];
}

/** WorkspaceSearchQueryFilterNameContain */
export interface WorkspaceSearchQueryFilterNameContain {
  caseSensitive: boolean;
  text: string;
}

/** WorkspaceSearchQueryFilterNameEqual */
export interface WorkspaceSearchQueryFilterNameEqual {
  caseSensitive: boolean;
  text: string;
}

/** WorkspaceSearchQueryFilterNamespaceContainAny */
export interface WorkspaceSearchQueryFilterNamespaceContainAny {
  values?: WorkspaceNamespace[];
}

/** WorkspaceSearchQueryFilterNot */
export interface WorkspaceSearchQueryFilterNot {
  inner: WorkspaceSearchQueryFilter;
}

/** WorkspaceSearchQueryFilterOr */
export interface WorkspaceSearchQueryFilterOr {
  inner?: WorkspaceSearchQueryFilter[];
}

/** WorkspaceSearchQuerySort */
export type WorkspaceSearchQuerySort =
  | ({
      type: "createdAt";
    } & WorkspaceSearchQuerySortCreatedAt)
  | ({
      type: "lastUpdatedAt";
    } & WorkspaceSearchQuerySortLastUpdatedAt)
  | ({
      type: "name";
    } & WorkspaceSearchQuerySortName);

/** WorkspaceSearchQuerySortCreatedAt */
export interface WorkspaceSearchQuerySortCreatedAt {
  direction: WorkspaceSearchQuerySortDirection;
}

/** WorkspaceSearchQuerySortDirection */
export enum WorkspaceSearchQuerySortDirection {
  Asc = "asc",
  Desc = "desc",
}

/** WorkspaceSearchQuerySortLastUpdatedAt */
export interface WorkspaceSearchQuerySortLastUpdatedAt {
  direction: WorkspaceSearchQuerySortDirection;
}

/** WorkspaceSearchQuerySortName */
export interface WorkspaceSearchQuerySortName {
  direction: WorkspaceSearchQuerySortDirection;
}

/** WorkspaceServerEndpointsSetStatusesRequest */
export interface WorkspaceServerEndpointsSetStatusesRequest {
  /** A map of status replacements, where key is and OLD status-id and value is a NEW status-id. Replacements must be specified for each status being deleted from the workspace.This mapping will be used to migrate all items in the workspace to new statuses before deleting the old ones. */
  replacements: Record<string, string>;
  statuses?: (CreateStatus | UpdateStatus)[];
}

/** WorkspaceServerEndpointsWorkspaceDuplicateRequest */
export interface WorkspaceServerEndpointsWorkspaceDuplicateRequest {
  /** Whether to also duplicate all user-permissions to the new workspace. */
  duplicatePermissions: boolean;
}

/** WorkspaceServerEndpointsWorkspacePermissionsUpdateRequest */
export interface WorkspaceServerEndpointsWorkspacePermissionsUpdateRequest {
  defaultPermission?: Permission;
  /** Explicit permissions for specific users in the team. */
  permissions: Record<string, Permission>;
}

/** WorkspaceWithWorkspaceEmbed */
export interface WorkspaceWithWorkspaceEmbed {
  _embedded: WorkspaceEmbed;
  alias?: string;
  archived: boolean;
  /** @format date-time */
  createdAt: string;
  defaultPermission?: Permission;
  description: RichText;
  /** @format uuid */
  id: string;
  itemColor?: ItemColor;
  itemType?: ItemType;
  /** @format date-time */
  lastUpdatedAt: string;
  legacyId?: string;
  metadata?: WorkspaceWorkspaceMetadata;
  name: string;
  namespace: WorkspaceNamespace;
  progressMode: WorkspaceProgressMode;
  /** @format uuid */
  teamId: string;
}

/** WorkspaceWithWorkspaceEmbedOrNullList */
export type WorkspaceWithWorkspaceEmbedOrNullList = WorkspaceWithWorkspaceEmbed[];

/** WorkspaceWithWorkspaceSearchEmbed */
export interface WorkspaceWithWorkspaceSearchEmbed {
  _embedded: WorkspaceSearchEmbed;
  alias?: string;
  archived: boolean;
  /** @format date-time */
  createdAt: string;
  defaultPermission?: Permission;
  description: RichText;
  /** @format uuid */
  id: string;
  itemColor?: ItemColor;
  itemType?: ItemType;
  /** @format date-time */
  lastUpdatedAt: string;
  legacyId?: string;
  metadata?: WorkspaceWorkspaceMetadata;
  name: string;
  namespace: WorkspaceNamespace;
  progressMode: WorkspaceProgressMode;
  /** @format uuid */
  teamId: string;
}

/** WorkspaceWithWorkspaceSearchEmbedPage */
export interface WorkspaceWithWorkspaceSearchEmbedPage {
  items?: WorkspaceWithWorkspaceSearchEmbed[];
  /** @format int32 */
  totalItems: number;
}

/** WorkspaceWorkspaceMetadata */
export interface WorkspaceWorkspaceMetadata {
  duplicated: boolean;
  templateId?: string;
  templateWorkspaceRef?: string;
  version?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://app.airfocus.com" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title airfocus API
 * @version 1.0.0-beta.33.53.6
 * @baseUrl https://app.airfocus.com
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Installs a new field. If it's a team-field, then it's possible to install it with empty or any non-empty amount of linked workspaces. Otherwise, if it's not a team-field, then exactly one linked workspace should be specified.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name InstallField
     * @summary Install a new field
     * @request POST:/api/fields
     * @secure
     */
    installField: (
      data: FieldServerEndpointsInstallFieldRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/fields`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the order of fields in the specified workspace.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ReorderFields
     * @summary Reorder fields
     * @request POST:/api/fields/reorder
     * @secure
     */
    reorderFields: (
      data: FieldServerEndpointsReorderFieldsRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/fields/reorder`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Searches fields in the current team based on the specified filters.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>  - team features: "team-fields" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name SearchFields
     * @summary Search fields
     * @request POST:/api/fields/search
     * @secure
     */
    searchFields: (
      data: FieldSearchQuery,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbedPage, any>({
        path: `/api/fields/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all field-types available in the system.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>  - team features: "team-fields" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ListFieldTypes
     * @summary List all available field types
     * @request GET:/api/fields/types
     * @secure
     */
    listFieldTypes: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldServerEndpointsFieldTypeInfo[], any>({
        path: `/api/fields/types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes existing links between team-fields and workspaces. Returns updated fields with their linked workspaces embedded. Returns an error if either of the requested fields is not a team-field. Ignores when trying to delete non-existing links. <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name UnlinkTeamFieldsFromWorkspaces
     * @summary Unlink team-fields from workspaces
     * @request DELETE:/api/fields/workspaces
     * @secure
     */
    unlinkTeamFieldsFromWorkspaces: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: FieldServerEndpointsFieldToWorkspaceLink[],
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed[], any>({
        path: `/api/fields/workspaces`,
        method: "DELETE",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Links existing team-fields to existing workspaces. Returns updated fields with their linked workspaces embedded. Returns an error if either of the requested fields is not a team-field. Ignores existing links. <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name LinkTeamFieldsToWorkspaces
     * @summary Link team-fields to workspaces
     * @request POST:/api/fields/workspaces
     * @secure
     */
    linkTeamFieldsToWorkspaces: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: FieldServerEndpointsFieldToWorkspaceLink[],
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed[], any>({
        path: `/api/fields/workspaces`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the requested field together with all its connections to workspaces and its values in the corresponding workspaces<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name DeleteField
     * @summary Delete field
     * @request DELETE:/api/fields/{fieldId}
     * @secure
     */
    deleteField: (
      fieldId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/fields/${fieldId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a found field with its embedded data. The field is accessible by the current user only if it's a team-field, or if it belongs to an accessible workspace.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>  - team features: "team-fields" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name RetrieveField
     * @summary Retrieve a single field
     * @request GET:/api/fields/{fieldId}
     * @secure
     */
    retrieveField: (
      fieldId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/fields/${fieldId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates configuration properties of an existing field.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ReconfigureField
     * @summary Reconfigure field
     * @request PUT:/api/fields/{fieldId}
     * @secure
     */
    reconfigureField: (
      fieldId: string,
      data: FieldServerEndpointsReconfigureFieldRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/fields/${fieldId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile:read"
     *
     * @tags Profile
     * @name RetrieveProfile
     * @request GET:/api/profile
     * @secure
     */
    retrieveProfile: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/api/profile`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile"
     *
     * @tags Profile
     * @name UpdateProfile
     * @request PUT:/api/profile
     * @secure
     */
    updateProfile: (
      data: UpdateUserRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/api/profile`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile"
     *
     * @tags Profile
     * @name ListApiKeys
     * @request GET:/api/profile/api-keys
     * @secure
     */
    listApiKeys: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiKey[], any>({
        path: `/api/profile/api-keys`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile"
     *
     * @tags Profile
     * @name CreateApiKey
     * @request POST:/api/profile/api-keys
     * @secure
     */
    createApiKey: (
      data: CreateApiKeyRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateApiKeyResponse, any>({
        path: `/api/profile/api-keys`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile"
     *
     * @tags Profile
     * @name DeleteApiKey
     * @request DELETE:/api/profile/api-keys/{apiKeyId}
     * @secure
     */
    deleteApiKey: (
      apiKeyId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/profile/api-keys/${apiKeyId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile"
     *
     * @tags Profile
     * @name ChangePassword
     * @request POST:/api/profile/change-password
     * @secure
     */
    changePassword: (
      data: ChangePasswordRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/profile/change-password`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile:read"
     *
     * @tags Profile
     * @name GetClientSettings
     * @request GET:/api/profile/client-settings
     * @secure
     */
    getClientSettings: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/profile/client-settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "profile"
     *
     * @tags Profile
     * @name SetClientSettings
     * @request PUT:/api/profile/client-settings
     * @secure
     */
    setClientSettings: (
      data: SetClientSettingsRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/profile/client-settings`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team:read"
     *
     * @tags Team
     * @name RetrieveTeam
     * @request GET:/api/team
     * @secure
     */
    retrieveTeam: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Team, any>({
        path: `/api/team`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name UpdateTeamFlags
     * @request PATCH:/api/team/flags
     * @secure
     */
    updateTeamFlags: (
      data: UpdateTeamFlagsRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TeamFlags, any>({
        path: `/api/team/flags`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name AcceptTermsOfService
     * @request POST:/api/team/tos
     * @secure
     */
    acceptTermsOfService: (
      data: StoreAcceptedTosRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/team/tos`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description List team users.<br/>Requirements:<br/>- auth-client scopes: "team:read"
     *
     * @tags Team
     * @name ListUsers
     * @request GET:/api/team/users
     * @secure
     */
    listUsers: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User[], any>({
        path: `/api/team/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name ChangeUserDisabled
     * @request POST:/api/team/users/disabled
     * @secure
     */
    changeUserDisabled: (
      data: ChangeUserDisabledRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/team/users/disabled`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name SendUserInvite
     * @request POST:/api/team/users/invite
     * @secure
     */
    sendUserInvite: (
      data: InviteUserRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/api/team/users/invite`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name SendBulkUserInvites
     * @request POST:/api/team/users/invite/bulk
     * @secure
     */
    sendBulkUserInvites: (
      data: BulkInviteUsersRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User[], any>({
        path: `/api/team/users/invite/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name CreateUserInvite
     * @request POST:/api/team/users/invite/create
     * @secure
     */
    createUserInvite: (
      data: CreateUserInviteRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/api/team/users/invite/create`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name ResendUserInvite
     * @request POST:/api/team/users/invite/resend
     * @secure
     */
    resendUserInvite: (
      data: ResendUserInviteRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/team/users/invite/resend`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name KickUser
     * @request POST:/api/team/users/kick
     * @secure
     */
    kickUser: (
      data: KickUserRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/team/users/kick`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Requirements:<br/>- auth-client scopes: "team"<br/>- user role: "admin"<br/>Returns:<br/>- 403 if user does not match the required role
     *
     * @tags Team
     * @name ChangeUserRole
     * @request POST:/api/team/users/role
     * @secure
     */
    changeUserRole: (
      data: ChangeUserRoleRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/team/users/role`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns all workspace-templates available to the current team.<br/>Requirements:<br/>- auth-client scopes: "workspace:read"
     *
     * @tags Templates
     * @name ListTemplates
     * @summary List templates
     * @request GET:/api/templates
     * @secure
     */
    listTemplates: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TemplatePageWithEmbed, any>({
        path: `/api/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns newly created workspace with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name CreateWorkspace
     * @summary Create a new workspace
     * @request POST:/api/workspaces
     * @secure
     */
    createWorkspace: (
      data: Workspace,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbed, ErrorResponse>({
        path: `/api/workspaces`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple workspaces.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name BulkWorkspaces
     * @summary Perform multiple operations with workspaces
     * @request POST:/api/workspaces/bulk
     * @secure
     */
    bulkWorkspaces: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: WorkspaceBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the total counter number.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name CountWorkspaces
     * @summary Count workspaces in the current team.
     * @request GET:/api/workspaces/count
     * @secure
     */
    countWorkspaces: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<number, ErrorResponse>({
        path: `/api/workspaces/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates an SSE connection which sends a events every time when something has happened in any workspace.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name WorkspaceEventsSse
     * @summary Server-side-events for updates in all workspaces.
     * @request GET:/api/workspaces/events/sse
     * @secure
     */
    workspaceEventsSse: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorResponse>({
        path: `/api/workspaces/events/sse`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns all field-types available in the system.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>  - team features: "team-fields" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ListFieldTypesLegacy
     * @summary List all available field types
     * @request GET:/api/workspaces/extensions/fields
     * @deprecated
     * @secure
     */
    listFieldTypesLegacy: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldServerEndpointsFieldTypeInfo[], any>({
        path: `/api/workspaces/extensions/fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns counters for each.
     *
     * @name RetrieveInboxCounters
     * @request POST:/api/workspaces/extensions/views/inbox/{viewId}/counters
     * @secure
     */
    retrieveInboxCounters: (
      viewId: string,
      data: InboxViewEndpointsInboxCountersRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<InboxCounter[], any>({
        path: `/api/workspaces/extensions/views/inbox/${viewId}/counters`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Links existing team-fields to existing workspaces. Returns updated fields with their linked workspaces embedded. Returns an error if either of the requested fields is not a team-field. Ignores existing links. <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name LinkTeamFieldsToWorkspacesLegacy
     * @summary Add team-field to workspace
     * @request POST:/api/workspaces/fields/add-team-field
     * @deprecated
     * @secure
     */
    linkTeamFieldsToWorkspacesLegacy: (
      data: FieldServerEndpointsFieldToWorkspaceLink,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/workspaces/fields/add-team-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Installs a new field. If it's a team-field, then it's possible to install it with empty or any non-empty amount of linked workspaces. Otherwise, if it's not a team-field, then exactly one linked workspace should be specified.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name InstallFieldLegacy
     * @summary Install a new field
     * @request POST:/api/workspaces/fields/install-field
     * @deprecated
     * @secure
     */
    installFieldLegacy: (
      data: FieldServerEndpointsInstallFieldRequestLegacy,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/workspaces/fields/install-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates configuration properties of an existing field.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ReconfigureFieldLegacy
     * @summary Reconfigure field
     * @request POST:/api/workspaces/fields/reconfigure-field
     * @deprecated
     * @secure
     */
    reconfigureFieldLegacy: (
      data: FieldServerEndpointsReconfigureFieldRequestLegacy,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/workspaces/fields/reconfigure-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all team-fields installed for the current team.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>  - team features: "team-fields" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name GetAllTeamFieldsLegacy
     * @summary List team-fields
     * @request GET:/api/workspaces/fields/team-fields
     * @deprecated
     * @secure
     */
    getAllTeamFieldsLegacy: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbedPage, any>({
        path: `/api/workspaces/fields/team-fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns newly created workspace group with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name CreateWorkspaceGroup
     * @summary Create a new workspace group
     * @request POST:/api/workspaces/groups
     * @secure
     */
    createWorkspaceGroup: (
      data: WorkspaceGroup,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbed, ErrorResponse>({
        path: `/api/workspaces/groups`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags WorkspaceGroups
     * @name AssignWorkspaceToGroup
     * @summary Update workspace-group permissions.
     * @request POST:/api/workspaces/groups/assign
     * @secure
     */
    assignWorkspaceToGroup: (
      data: WorkspaceGroupAssignWorkspaceRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/groups/assign`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple workspace groups.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name BulkWorkspaceGroups
     * @summary Perform multiple operations with workspace groups
     * @request POST:/api/workspaces/groups/bulk
     * @secure
     */
    bulkWorkspaceGroups: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: WorkspaceGroupBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/groups/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of workspace groups.<br/> Returns null for those workspace groups which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name ListWorkspaceGroups
     * @summary Retrieve multiple workspace groups by their IDs
     * @request POST:/api/workspaces/groups/list
     * @secure
     */
    listWorkspaceGroups: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/groups/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all workspace groups or searches workspace groups by query. Always returns only workspace groups which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name SearchWorkspaceGroups
     * @summary Retrieve or search workspace groups
     * @request POST:/api/workspaces/groups/search
     * @secure
     */
    searchWorkspaceGroups: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: CommentEmbed,
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbedPage, ErrorResponse>({
        path: `/api/workspaces/groups/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the workspace group was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name DeleteWorkspaceGroup
     * @summary Delete an existing workspace group
     * @request DELETE:/api/workspaces/groups/{workspaceGroupId}
     * @secure
     */
    deleteWorkspaceGroup: (
      workspaceGroupId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/groups/${workspaceGroupId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found workspace group.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name RetrieveWorkspaceGroup
     * @summary Retrieve a single workspace group by its ID
     * @request GET:/api/workspaces/groups/{workspaceGroupId}
     * @secure
     */
    retrieveWorkspaceGroup: (
      workspaceGroupId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbed, ErrorResponse>({
        path: `/api/workspaces/groups/${workspaceGroupId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated workspace group with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name PatchWorkspaceGroup
     * @summary Patch an existing workspace group
     * @request PATCH:/api/workspaces/groups/{workspaceGroupId}
     * @secure
     */
    patchWorkspaceGroup: (
      workspaceGroupId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbed, ErrorResponse>({
        path: `/api/workspaces/groups/${workspaceGroupId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated workspace group with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceGroups
     * @name UpdateWorkspaceGroup
     * @summary Update an existing workspace group
     * @request PUT:/api/workspaces/groups/{workspaceGroupId}
     * @secure
     */
    updateWorkspaceGroup: (
      workspaceGroupId: string,
      data: WorkspaceGroup,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceGroupWithWorkspaceGroupEmbed, ErrorResponse>({
        path: `/api/workspaces/groups/${workspaceGroupId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags WorkspaceGroups
     * @name UpdateWorkspaceGroupPermissions
     * @summary Update workspace-group permissions.
     * @request POST:/api/workspaces/groups/{workspaceGroupId}/permissions
     * @secure
     */
    updateWorkspaceGroupPermissions: (
      workspaceGroupId: string,
      data: WorkspaceGroupPermissionsUpdateRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/groups/${workspaceGroupId}/permissions`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns newly created item relation with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name CreateItemRelation
     * @summary Create a new item relation
     * @request POST:/api/workspaces/item-relations
     * @secure
     */
    createItemRelation: (
      data: ItemRelation,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/item-relations`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple item relations.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name BulkItemRelations
     * @summary Perform multiple operations with item relations
     * @request POST:/api/workspaces/item-relations/bulk
     * @secure
     */
    bulkItemRelations: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: ItemRelationBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/item-relations/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of item relations.<br/> Returns null for those item relations which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name ListItemRelations
     * @summary Retrieve multiple item relations by their IDs
     * @request POST:/api/workspaces/item-relations/list
     * @secure
     */
    listItemRelations: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/item-relations/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all item relations or searches item relations by query. Always returns only item relations which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name SearchItemRelations
     * @summary Retrieve or search item relations
     * @request POST:/api/workspaces/item-relations/search
     * @secure
     */
    searchItemRelations: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: ItemRelationSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbedPage, ErrorResponse>({
        path: `/api/workspaces/item-relations/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the item relation was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name DeleteItemRelation
     * @summary Delete an existing item relation
     * @request DELETE:/api/workspaces/item-relations/{itemRelationId}
     * @secure
     */
    deleteItemRelation: (
      itemRelationId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/item-relations/${itemRelationId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found item relation.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name RetrieveItemRelation
     * @summary Retrieve a single item relation by its ID
     * @request GET:/api/workspaces/item-relations/{itemRelationId}
     * @secure
     */
    retrieveItemRelation: (
      itemRelationId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/item-relations/${itemRelationId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated item relation with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name PatchItemRelation
     * @summary Patch an existing item relation
     * @request PATCH:/api/workspaces/item-relations/{itemRelationId}
     * @secure
     */
    patchItemRelation: (
      itemRelationId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/item-relations/${itemRelationId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated item relation with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemRelations
     * @name UpdateItemRelation
     * @summary Update an existing item relation
     * @request PUT:/api/workspaces/item-relations/{itemRelationId}
     * @secure
     */
    updateItemRelation: (
      itemRelationId: string,
      data: ItemRelation,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/item-relations/${itemRelationId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns found item.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name RetrieveItemByAlias
     * @summary Retrieve a single item by its alias (e.g. 'DEV-123').
     * @request GET:/api/workspaces/items/alias/{aliasValue}
     * @secure
     */
    retrieveItemByAlias: (
      aliasValue: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbed, ErrorResponse>({
        path: `/api/workspaces/items/alias/${aliasValue}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns ids of newly copied items, with order of the returned ids matching the order of requested source items. Returns Not Found if either of the specified source items does not exist.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name CopyItems
     * @summary Copy specified items.
     * @request POST:/api/workspaces/items/copy
     * @secure
     */
    copyItems: (
      query: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * Workspace of the source items to be copied.
         * @format uuid
         */
        sourceWorkspaceId: string;
        /**
         * Target workspace for the newly copied items.
         * @format uuid
         */
        targetWorkspaceId: string;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<string[], ErrorResponse>({
        path: `/api/workspaces/items/copy`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an array of results, where each element is either a found item with its embeddings, or null if there no item with such ID.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name RetrieveItemsGlobally
     * @summary Retrieve items from any workspace by specified IDs.
     * @request POST:/api/workspaces/items/list
     * @secure
     */
    retrieveItemsGlobally: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/items/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns ids of newly created items in the target workspace, with order of the returned ids matching the order of requested source items. Returns Not Found if either of the specified source items does not exist.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name MoveItems
     * @summary Move specified items from one workspace to another.
     * @request POST:/api/workspaces/items/move
     * @secure
     */
    moveItems: (
      query: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * Workspace of the source items to be moved.
         * @format uuid
         */
        sourceWorkspaceId: string;
        /**
         * New target workspace for the moved items.
         * @format uuid
         */
        targetWorkspaceId: string;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<string[], ErrorResponse>({
        path: `/api/workspaces/items/move`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of workspaces.<br/> Returns null for those workspaces which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name ListWorkspaces
     * @summary Retrieve multiple workspaces by their IDs
     * @request POST:/api/workspaces/list
     * @secure
     */
    listWorkspaces: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all workspaces or searches workspaces by query. Always returns only workspaces which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name SearchWorkspaces
     * @summary Retrieve or search workspaces
     * @request POST:/api/workspaces/search
     * @secure
     */
    searchWorkspaces: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: WorkspaceSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceSearchEmbedPage, ErrorResponse>({
        path: `/api/workspaces/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all workspace-templates available to the current team.<br/>Requirements:<br/>- auth-client scopes: "workspace:read"
     *
     * @tags Templates
     * @name ListTemplatesLegacy
     * @summary List templates
     * @request GET:/api/workspaces/templates
     * @deprecated
     * @secure
     */
    listTemplatesLegacy: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TemplatePageWithEmbed, any>({
        path: `/api/workspaces/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes the field and all its connections to workspaces, regardless whether it's a team-field or not.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name UninstallFieldCompletelyLegacy
     * @summary Completely delete field
     * @request POST:/api/workspaces/uninstall-field
     * @deprecated
     * @secure
     */
    uninstallFieldCompletelyLegacy: (
      data: FieldServerEndpointsUninstallFieldRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/workspaces/uninstall-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns newly created workspace relation with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name CreateWorkspaceRelation
     * @summary Create a new workspace relation
     * @request POST:/api/workspaces/workspace-relations
     * @secure
     */
    createWorkspaceRelation: (
      data: WorkspaceRelation,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/workspace-relations`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple workspace relations.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name BulkWorkspaceRelations
     * @summary Perform multiple operations with workspace relations
     * @request POST:/api/workspaces/workspace-relations/bulk
     * @secure
     */
    bulkWorkspaceRelations: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: WorkspaceRelationBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of workspace relations.<br/> Returns null for those workspace relations which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name ListWorkspaceRelations
     * @summary Retrieve multiple workspace relations by their IDs
     * @request POST:/api/workspaces/workspace-relations/list
     * @secure
     */
    listWorkspaceRelations: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all workspace relations or searches workspace relations by query. Always returns only workspace relations which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name SearchWorkspaceRelations
     * @summary Retrieve or search workspace relations
     * @request POST:/api/workspaces/workspace-relations/search
     * @secure
     */
    searchWorkspaceRelations: (
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: WorkspaceRelationSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbedPage, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkspaceRelations
     * @name PutApiWorkspacesWorkspaceRelationsSet
     * @request PUT:/api/workspaces/workspace-relations/set
     * @secure
     */
    putApiWorkspacesWorkspaceRelationsSet: (
      data: WorkspaceRelationsSetRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbed, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/set`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the workspace relation was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name DeleteWorkspaceRelation
     * @summary Delete an existing workspace relation
     * @request DELETE:/api/workspaces/workspace-relations/{workspaceRelationId}
     * @secure
     */
    deleteWorkspaceRelation: (
      workspaceRelationId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/${workspaceRelationId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found workspace relation.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name RetrieveWorkspaceRelation
     * @summary Retrieve a single workspace relation by its ID
     * @request GET:/api/workspaces/workspace-relations/{workspaceRelationId}
     * @secure
     */
    retrieveWorkspaceRelation: (
      workspaceRelationId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/${workspaceRelationId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated workspace relation with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name PatchWorkspaceRelation
     * @summary Patch an existing workspace relation
     * @request PATCH:/api/workspaces/workspace-relations/{workspaceRelationId}
     * @secure
     */
    patchWorkspaceRelation: (
      workspaceRelationId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/${workspaceRelationId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated workspace relation with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, WorkspaceRelations
     * @name UpdateWorkspaceRelation
     * @summary Update an existing workspace relation
     * @request PUT:/api/workspaces/workspace-relations/{workspaceRelationId}
     * @secure
     */
    updateWorkspaceRelation: (
      workspaceRelationId: string,
      data: WorkspaceRelation,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceRelationWithEmbed, ErrorResponse>({
        path: `/api/workspaces/workspace-relations/${workspaceRelationId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the workspace was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name DeleteWorkspace
     * @summary Delete an existing workspace
     * @request DELETE:/api/workspaces/{workspaceId}
     * @secure
     */
    deleteWorkspace: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found workspace.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name RetrieveWorkspace
     * @summary Retrieve a single workspace by its ID
     * @request GET:/api/workspaces/{workspaceId}
     * @secure
     */
    retrieveWorkspace: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated workspace with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name PatchWorkspace
     * @summary Patch an existing workspace
     * @request PATCH:/api/workspaces/{workspaceId}
     * @secure
     */
    patchWorkspace: (
      workspaceId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated workspace with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Workspaces
     * @name UpdateWorkspace
     * @summary Update an existing workspace
     * @request PUT:/api/workspaces/{workspaceId}
     * @secure
     */
    updateWorkspace: (
      workspaceId: string,
      data: Workspace,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns newly created attachment with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name CreateItemAttachment
     * @summary Create a new attachment
     * @request POST:/api/workspaces/{workspaceId}/attachments
     * @secure
     */
    createItemAttachment: (
      workspaceId: string,
      data: ItemAttachment,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple attachments.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name BulkItemAttachments
     * @summary Perform multiple operations with attachments
     * @request POST:/api/workspaces/{workspaceId}/attachments/bulk
     * @secure
     */
    bulkItemAttachments: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: ItemAttachmentBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of attachments.<br/> Returns null for those attachments which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name ListItemAttachments
     * @summary Retrieve multiple attachments by their IDs
     * @request POST:/api/workspaces/{workspaceId}/attachments/list
     * @secure
     */
    listItemAttachments: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all attachments or searches attachments by query. Always returns only attachments which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name SearchItemAttachments
     * @summary Retrieve or search attachments
     * @request POST:/api/workspaces/{workspaceId}/attachments/search
     * @secure
     */
    searchItemAttachments: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: AttachmentSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbedPage, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the attachment was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name DeleteItemAttachment
     * @summary Delete an existing attachment
     * @request DELETE:/api/workspaces/{workspaceId}/attachments/{itemAttachmentId}
     * @secure
     */
    deleteItemAttachment: (
      workspaceId: string,
      itemAttachmentId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/${itemAttachmentId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found attachment.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name RetrieveItemAttachment
     * @summary Retrieve a single attachment by its ID
     * @request GET:/api/workspaces/{workspaceId}/attachments/{itemAttachmentId}
     * @secure
     */
    retrieveItemAttachment: (
      workspaceId: string,
      itemAttachmentId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/${itemAttachmentId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated attachment with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name PatchItemAttachment
     * @summary Patch an existing attachment
     * @request PATCH:/api/workspaces/{workspaceId}/attachments/{itemAttachmentId}
     * @secure
     */
    patchItemAttachment: (
      workspaceId: string,
      itemAttachmentId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/${itemAttachmentId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated attachment with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemAttachments
     * @name UpdateItemAttachment
     * @summary Update an existing attachment
     * @request PUT:/api/workspaces/{workspaceId}/attachments/{itemAttachmentId}
     * @secure
     */
    updateItemAttachment: (
      workspaceId: string,
      itemAttachmentId: string,
      data: ItemAttachment,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemAttachmentWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/attachments/${itemAttachmentId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates an SSE connection which sends an event every time something changes in the background activity of this workspace.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name WorkspaceBackgroundActivitySse
     * @summary Server-sent-events for background activity in workspace.
     * @request GET:/api/workspaces/{workspaceId}/background-activity/sse
     * @secure
     */
    workspaceBackgroundActivitySse: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/background-activity/sse`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns newly created comment with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name CreateComment
     * @summary Create a new comment
     * @request POST:/api/workspaces/{workspaceId}/comments
     * @secure
     */
    createComment: (
      workspaceId: string,
      data: Comment,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple comments.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name BulkComments
     * @summary Perform multiple operations with comments
     * @request POST:/api/workspaces/{workspaceId}/comments/bulk
     * @secure
     */
    bulkComments: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: CommentBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of comments.<br/> Returns null for those comments which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name ListComments
     * @summary Retrieve multiple comments by their IDs
     * @request POST:/api/workspaces/{workspaceId}/comments/list
     * @secure
     */
    listComments: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all comments or searches comments by query. Always returns only comments which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name SearchComments
     * @summary Retrieve or search comments
     * @request POST:/api/workspaces/{workspaceId}/comments/search
     * @secure
     */
    searchComments: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: CommentSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbedPage, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the comment was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name DeleteComment
     * @summary Delete an existing comment
     * @request DELETE:/api/workspaces/{workspaceId}/comments/{commentId}
     * @secure
     */
    deleteComment: (
      workspaceId: string,
      commentId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/${commentId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found comment.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name RetrieveComment
     * @summary Retrieve a single comment by its ID
     * @request GET:/api/workspaces/{workspaceId}/comments/{commentId}
     * @secure
     */
    retrieveComment: (
      workspaceId: string,
      commentId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/${commentId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated comment with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name PatchComment
     * @summary Patch an existing comment
     * @request PATCH:/api/workspaces/{workspaceId}/comments/{commentId}
     * @secure
     */
    patchComment: (
      workspaceId: string,
      commentId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/${commentId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated comment with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Comments
     * @name UpdateComment
     * @summary Update an existing comment
     * @request PUT:/api/workspaces/{workspaceId}/comments/{commentId}
     * @secure
     */
    updateComment: (
      workspaceId: string,
      commentId: string,
      data: Comment,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CommentWithCommentEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/${commentId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This action can be performed only as a real authenticated user<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Comments
     * @name RemoveCommentReaction
     * @summary Remove a reaction from the specified comment.
     * @request DELETE:/api/workspaces/{workspaceId}/comments/{commentId}/reactions/{emojiCode}
     * @secure
     */
    removeCommentReaction: (
      workspaceId: string,
      commentId: string,
      emojiCode: CommentReactionEmoji,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/${commentId}/reactions/${emojiCode}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description This action can be performed only as a real authenticated user<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Comments
     * @name AddCommentReaction
     * @summary Add a reaction to the specified comment.
     * @request POST:/api/workspaces/{workspaceId}/comments/{commentId}/reactions/{emojiCode}
     * @secure
     */
    addCommentReaction: (
      workspaceId: string,
      commentId: string,
      emojiCode: CommentReactionEmoji,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/comments/${commentId}/reactions/${emojiCode}`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the newly created workspace with embedded data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name DuplicateWorkspace
     * @summary Duplicate workspace with all its items and apps.
     * @request POST:/api/workspaces/{workspaceId}/duplicate
     * @secure
     */
    duplicateWorkspace: (
      workspaceId: string,
      data: WorkspaceServerEndpointsWorkspaceDuplicateRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceWithWorkspaceEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/duplicate`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates an SSE connection which sends a events every time when something in the workspace has happened.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name WorkspaceEventsByWorkspaceIdSse
     * @summary Server-side-events for updates in a single workspace.
     * @request GET:/api/workspaces/{workspaceId}/events/sse
     * @secure
     */
    workspaceEventsByWorkspaceIdSse: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/events/sse`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Installs a new field. If it's a team-field, then it's possible to install it with empty or any non-empty amount of linked workspaces. Otherwise, if it's not a team-field, then exactly one linked workspace should be specified.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name InstallFieldLegacyWithWorkspaceId
     * @summary Install a new field
     * @request POST:/api/workspaces/{workspaceId}/install-field
     * @deprecated
     * @secure
     */
    installFieldLegacyWithWorkspaceId: (
      workspaceId: string,
      data: FieldServerEndpointsInstallFieldRequestLegacy,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/workspaces/${workspaceId}/install-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns newly created item with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name CreateItem
     * @summary Create a new item
     * @request POST:/api/workspaces/{workspaceId}/items
     * @secure
     */
    createItem: (
      workspaceId: string,
      data: Item,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple items.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name BulkItems
     * @summary Perform multiple operations with items
     * @request POST:/api/workspaces/{workspaceId}/items/bulk
     * @secure
     */
    bulkItems: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: ItemBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of items.<br/> Returns null for those items which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name ListItems
     * @summary Retrieve multiple items by their IDs
     * @request POST:/api/workspaces/{workspaceId}/items/list
     * @secure
     */
    listItems: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sets all items to match the color configured in the workspace settings if it's configured, otherwise resets each item with a randomly generated color from the available color palette.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name ResetItemColors
     * @summary Reset colors of all items in the specified workspace.
     * @request POST:/api/workspaces/{workspaceId}/items/reset-colors
     * @secure
     */
    resetItemColors: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/reset-colors`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns all items or searches items by query. Always returns only items which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name SearchItems
     * @summary Retrieve or search items
     * @request POST:/api/workspaces/{workspaceId}/items/search
     * @secure
     */
    searchItems: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: ItemSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbedPage, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name UnwatchItems
     * @summary Remove watching status of the current user for the specified items.
     * @request POST:/api/workspaces/{workspaceId}/items/unwatch
     * @secure
     */
    unwatchItems: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/unwatch`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Items
     * @name WatchItems
     * @summary Set current user as a watcher of the specified items.
     * @request POST:/api/workspaces/{workspaceId}/items/watch
     * @secure
     */
    watchItems: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/watch`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns empty result if the item was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name DeleteItem
     * @summary Delete an existing item
     * @request DELETE:/api/workspaces/{workspaceId}/items/{itemId}
     * @secure
     */
    deleteItem: (
      workspaceId: string,
      itemId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/${itemId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found item.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name RetrieveItem
     * @summary Retrieve a single item by its ID
     * @request GET:/api/workspaces/{workspaceId}/items/{itemId}
     * @secure
     */
    retrieveItem: (
      workspaceId: string,
      itemId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/${itemId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated item with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name PatchItem
     * @summary Patch an existing item
     * @request PATCH:/api/workspaces/{workspaceId}/items/{itemId}
     * @secure
     */
    patchItem: (
      workspaceId: string,
      itemId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/${itemId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated item with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Items
     * @name UpdateItem
     * @summary Update an existing item
     * @request PUT:/api/workspaces/{workspaceId}/items/{itemId}
     * @secure
     */
    updateItem: (
      workspaceId: string,
      itemId: string,
      data: Item,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemWithItemEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/items/${itemId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns newly created item link with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name CreateItemLink
     * @summary Create a new item link
     * @request POST:/api/workspaces/{workspaceId}/links
     * @secure
     */
    createItemLink: (
      workspaceId: string,
      data: ItemLink,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple item links.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name BulkItemLinks
     * @summary Perform multiple operations with item links
     * @request POST:/api/workspaces/{workspaceId}/links/bulk
     * @secure
     */
    bulkItemLinks: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: ItemLinkBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of item links.<br/> Returns null for those item links which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name ListItemLinks
     * @summary Retrieve multiple item links by their IDs
     * @request POST:/api/workspaces/{workspaceId}/links/list
     * @secure
     */
    listItemLinks: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all item links or searches item links by query. Always returns only item links which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name SearchItemLinks
     * @summary Retrieve or search item links
     * @request POST:/api/workspaces/{workspaceId}/links/search
     * @secure
     */
    searchItemLinks: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: ItemLinkSearchQuery,
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbedPage, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the item link was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name DeleteItemLink
     * @summary Delete an existing item link
     * @request DELETE:/api/workspaces/{workspaceId}/links/{itemLinkId}
     * @secure
     */
    deleteItemLink: (
      workspaceId: string,
      itemLinkId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/${itemLinkId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found item link.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name RetrieveItemLink
     * @summary Retrieve a single item link by its ID
     * @request GET:/api/workspaces/{workspaceId}/links/{itemLinkId}
     * @secure
     */
    retrieveItemLink: (
      workspaceId: string,
      itemLinkId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/${itemLinkId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated item link with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name PatchItemLink
     * @summary Patch an existing item link
     * @request PATCH:/api/workspaces/{workspaceId}/links/{itemLinkId}
     * @secure
     */
    patchItemLink: (
      workspaceId: string,
      itemLinkId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/${itemLinkId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated item link with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, ItemLinks
     * @name UpdateItemLink
     * @summary Update an existing item link
     * @request PUT:/api/workspaces/{workspaceId}/links/{itemLinkId}
     * @secure
     */
    updateItemLink: (
      workspaceId: string,
      itemLinkId: string,
      data: ItemLink,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ItemLinkWithItemLinkEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/links/${itemLinkId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns newly created milestone with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name CreateMilestone
     * @summary Create a new milestone
     * @request POST:/api/workspaces/{workspaceId}/milestones
     * @secure
     */
    createMilestone: (
      workspaceId: string,
      data: Milestone,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Accepts a list of create/update/patch/delete operations (see the request model for more details).<br/> Each operations can target a single or multiple milestones.<br/> Returns a list of results for each input operation including errors.<br/> Guarantees that the size and order of the returned results matches the input list of operations.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name BulkMilestones
     * @summary Perform multiple operations with milestones
     * @request POST:/api/workspaces/{workspaceId}/milestones/bulk
     * @secure
     */
    bulkMilestones: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: MilestoneBulkAction[],
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/bulk`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of milestones.<br/> Returns null for those milestones which are not found or not accessible.<br/> Guarantees that the size and order of the returned list matches the requested IDs.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name ListMilestones
     * @summary Retrieve multiple milestones by their IDs
     * @request POST:/api/workspaces/{workspaceId}/milestones/list
     * @secure
     */
    listMilestones: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbedOrNullList, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all milestones or searches milestones by query. Always returns only milestones which are accessible by the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name SearchMilestones
     * @summary Retrieve or search milestones
     * @request POST:/api/workspaces/{workspaceId}/milestones/search
     * @secure
     */
    searchMilestones: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
        /**
         * How many elements to skip.
         * @format int32
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * How many elements to return.
         * @format int32
         * @min 0
         * @max 1000
         * @default 10
         */
        limit?: number;
        /**
         * From which element the page should start.
         * @deprecated
         * @format int32
         * @min 0
         * @default 0
         */
        from?: number;
        /**
         * At which element the page should end (excluding it).
         * @deprecated
         * @format int32
         */
        to?: number;
      },
      data?: CommentEmbed,
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbedPage, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns empty result if the milestone was successfully deleted.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name DeleteMilestone
     * @summary Delete an existing milestone
     * @request DELETE:/api/workspaces/{workspaceId}/milestones/{milestoneId}
     * @secure
     */
    deleteMilestone: (
      workspaceId: string,
      milestoneId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/${milestoneId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns found milestone.<br/>Requirements:<br/>  - auth-client scopes: "workspace:read"<br/>  - user permission: "read" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name RetrieveMilestone
     * @summary Retrieve a single milestone by its ID
     * @request GET:/api/workspaces/{workspaceId}/milestones/{milestoneId}
     * @secure
     */
    retrieveMilestone: (
      workspaceId: string,
      milestoneId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/${milestoneId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the whole updated milestone with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name PatchMilestone
     * @summary Patch an existing milestone
     * @request PATCH:/api/workspaces/{workspaceId}/milestones/{milestoneId}
     * @secure
     */
    patchMilestone: (
      workspaceId: string,
      milestoneId: string,
      data: JsonPatch,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/${milestoneId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated milestone with its sanitised data.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>400 if the resource is not found<br/>403 if user does not have the required permission
     *
     * @tags CRUD, Milestones
     * @name UpdateMilestone
     * @summary Update an existing milestone
     * @request PUT:/api/workspaces/{workspaceId}/milestones/{milestoneId}
     * @secure
     */
    updateMilestone: (
      workspaceId: string,
      milestoneId: string,
      data: Milestone,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MilestoneWithEmbed, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/milestones/${milestoneId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns effective permission for the current user.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "write" or higher<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name UpdateWorkspacePermissions
     * @summary Update workspace permissions.
     * @request POST:/api/workspaces/{workspaceId}/permissions
     * @secure
     */
    updateWorkspacePermissions: (
      workspaceId: string,
      data: WorkspaceServerEndpointsWorkspacePermissionsUpdateRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Permission, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/permissions`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates configuration properties of an existing field.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ReconfigureFieldLegacyWithWorkspaceId
     * @summary Reconfigure field
     * @request POST:/api/workspaces/{workspaceId}/reconfigure-field
     * @deprecated
     * @secure
     */
    reconfigureFieldLegacyWithWorkspaceId: (
      workspaceId: string,
      data: FieldServerEndpointsReconfigureFieldRequestLegacy,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldWithFieldEmbed, any>({
        path: `/api/workspaces/${workspaceId}/reconfigure-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the order of fields in the specified workspace.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name ReorderFieldsLegacy
     * @summary Reorder fields
     * @request POST:/api/workspaces/{workspaceId}/reorder-fields
     * @deprecated
     * @secure
     */
    reorderFieldsLegacy: (
      workspaceId: string,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      data?: string[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/workspaces/${workspaceId}/reorder-fields`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Set statuses all at once for the specified workspace. New statuses in the list will be added to the database, missing statuses will be removed from the database, all other statuses will be updated. Each workspace must have at least one status in each category: 'draft', 'active', 'closed'<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Workspaces
     * @name SetWorkspaceStatuses
     * @request POST:/api/workspaces/{workspaceId}/statuses
     * @secure
     */
    setWorkspaceStatuses: (
      workspaceId: string,
      data: WorkspaceServerEndpointsSetStatusesRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/workspaces/${workspaceId}/statuses`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Uninstalls a field from the specified workspace. For team-fields it results in just removing the field<>workspace connection, but the field itself won't be removed. For non-team-fields it additionally results in removing the field.<br/>Requirements:<br/>  - auth-client scopes: "workspace"<br/>  - user permission: "full"<br/>  - team features: "team-fields" when operating with team-fields<br/>  - user role: "admin" when operating with team-fields<br/>Returns:<br/>403 if user does not have the required permission
     *
     * @tags Fields
     * @name UninstallFieldLegacy
     * @summary Delete field
     * @request POST:/api/workspaces/{workspaceId}/uninstall-field
     * @deprecated
     * @secure
     */
    uninstallFieldLegacy: (
      workspaceId: string,
      data: FieldServerEndpointsUninstallFieldRequest,
      query?: {
        /** Auth token as query parameter (alternative to Authorization header). */
        token?: string;
        /** Enable sudo-mode for admins for a single request, which gives full permission to all workspaces in the team. */
        actAsAdmin?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/workspaces/${workspaceId}/uninstall-field`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
