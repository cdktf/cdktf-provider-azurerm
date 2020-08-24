// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventgridEventSubscriptionConfig extends TerraformMetaArguments {
  readonly eventDeliverySchema?: string;
  readonly includedEventTypes?: string[];
  readonly labels?: string[];
  readonly name: string;
  readonly scope: string;
  readonly topicName?: string;
  /** eventhub_endpoint block */
  readonly eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint[];
  /** hybrid_connection_endpoint block */
  readonly hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint[];
  /** retry_policy block */
  readonly retryPolicy?: EventgridEventSubscriptionRetryPolicy[];
  /** storage_blob_dead_letter_destination block */
  readonly storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination[];
  /** storage_queue_endpoint block */
  readonly storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint[];
  /** subject_filter block */
  readonly subjectFilter?: EventgridEventSubscriptionSubjectFilter[];
  /** timeouts block */
  readonly timeouts?: EventgridEventSubscriptionTimeouts;
  /** webhook_endpoint block */
  readonly webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint[];
}
export interface EventgridEventSubscriptionEventhubEndpoint {
  readonly eventhubId: string;
}
export interface EventgridEventSubscriptionHybridConnectionEndpoint {
  readonly hybridConnectionId: string;
}
export interface EventgridEventSubscriptionRetryPolicy {
  readonly eventTimeToLive: number;
  readonly maxDeliveryAttempts: number;
}
export interface EventgridEventSubscriptionStorageBlobDeadLetterDestination {
  readonly storageAccountId: string;
  readonly storageBlobContainerName: string;
}
export interface EventgridEventSubscriptionStorageQueueEndpoint {
  readonly queueName: string;
  readonly storageAccountId: string;
}
export interface EventgridEventSubscriptionSubjectFilter {
  readonly caseSensitive?: boolean;
  readonly subjectBeginsWith?: string;
  readonly subjectEndsWith?: string;
}
export interface EventgridEventSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface EventgridEventSubscriptionWebhookEndpoint {
  readonly url: string;
}

// Resource

export class EventgridEventSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventgridEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventDeliverySchema = config.eventDeliverySchema;
    this._includedEventTypes = config.includedEventTypes;
    this._labels = config.labels;
    this._name = config.name;
    this._scope = config.scope;
    this._topicName = config.topicName;
    this._eventhubEndpoint = config.eventhubEndpoint;
    this._hybridConnectionEndpoint = config.hybridConnectionEndpoint;
    this._retryPolicy = config.retryPolicy;
    this._storageBlobDeadLetterDestination = config.storageBlobDeadLetterDestination;
    this._storageQueueEndpoint = config.storageQueueEndpoint;
    this._subjectFilter = config.subjectFilter;
    this._timeouts = config.timeouts;
    this._webhookEndpoint = config.webhookEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_delivery_schema - computed: false, optional: true, required: false
  private _eventDeliverySchema?: string;
  public get eventDeliverySchema() {
    return this._eventDeliverySchema;
  }
  public set eventDeliverySchema(value: string | undefined) {
    this._eventDeliverySchema = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // included_event_types - computed: true, optional: true, required: false
  private _includedEventTypes?: string[];
  public get includedEventTypes() {
    return this._includedEventTypes ?? this.getListAttribute('included_event_types');
  }
  public set includedEventTypes(value: string[] | undefined) {
    this._includedEventTypes = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: string[] | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // topic_name - computed: true, optional: true, required: false
  private _topicName?: string;
  public get topicName() {
    return this._topicName ?? this.getStringAttribute('topic_name');
  }
  public set topicName(value: string | undefined) {
    this._topicName = value;
  }

  // eventhub_endpoint - computed: false, optional: true, required: false
  private _eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint[];
  public get eventhubEndpoint() {
    return this._eventhubEndpoint;
  }
  public set eventhubEndpoint(value: EventgridEventSubscriptionEventhubEndpoint[] | undefined) {
    this._eventhubEndpoint = value;
  }

  // hybrid_connection_endpoint - computed: false, optional: true, required: false
  private _hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint[];
  public get hybridConnectionEndpoint() {
    return this._hybridConnectionEndpoint;
  }
  public set hybridConnectionEndpoint(value: EventgridEventSubscriptionHybridConnectionEndpoint[] | undefined) {
    this._hybridConnectionEndpoint = value;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: EventgridEventSubscriptionRetryPolicy[];
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public set retryPolicy(value: EventgridEventSubscriptionRetryPolicy[] | undefined) {
    this._retryPolicy = value;
  }

  // storage_blob_dead_letter_destination - computed: false, optional: true, required: false
  private _storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination[];
  public get storageBlobDeadLetterDestination() {
    return this._storageBlobDeadLetterDestination;
  }
  public set storageBlobDeadLetterDestination(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination[] | undefined) {
    this._storageBlobDeadLetterDestination = value;
  }

  // storage_queue_endpoint - computed: false, optional: true, required: false
  private _storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint[];
  public get storageQueueEndpoint() {
    return this._storageQueueEndpoint;
  }
  public set storageQueueEndpoint(value: EventgridEventSubscriptionStorageQueueEndpoint[] | undefined) {
    this._storageQueueEndpoint = value;
  }

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter?: EventgridEventSubscriptionSubjectFilter[];
  public get subjectFilter() {
    return this._subjectFilter;
  }
  public set subjectFilter(value: EventgridEventSubscriptionSubjectFilter[] | undefined) {
    this._subjectFilter = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridEventSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventgridEventSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // webhook_endpoint - computed: false, optional: true, required: false
  private _webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint[];
  public get webhookEndpoint() {
    return this._webhookEndpoint;
  }
  public set webhookEndpoint(value: EventgridEventSubscriptionWebhookEndpoint[] | undefined) {
    this._webhookEndpoint = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_delivery_schema: this._eventDeliverySchema,
      included_event_types: this._includedEventTypes,
      labels: this._labels,
      name: this._name,
      scope: this._scope,
      topic_name: this._topicName,
      eventhub_endpoint: this._eventhubEndpoint,
      hybrid_connection_endpoint: this._hybridConnectionEndpoint,
      retry_policy: this._retryPolicy,
      storage_blob_dead_letter_destination: this._storageBlobDeadLetterDestination,
      storage_queue_endpoint: this._storageQueueEndpoint,
      subject_filter: this._subjectFilter,
      timeouts: this._timeouts,
      webhook_endpoint: this._webhookEndpoint,
    };
  }
}
