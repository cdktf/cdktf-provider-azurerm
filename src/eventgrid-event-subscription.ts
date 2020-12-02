// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventgridEventSubscriptionConfig extends TerraformMetaArguments {
  readonly eventDeliverySchema?: string;
  readonly eventhubEndpointId?: string;
  readonly expirationTimeUtc?: string;
  readonly hybridConnectionEndpointId?: string;
  readonly includedEventTypes?: string[];
  readonly labels?: string[];
  readonly name: string;
  readonly scope: string;
  readonly serviceBusQueueEndpointId?: string;
  readonly serviceBusTopicEndpointId?: string;
  readonly topicName?: string;
  /** advanced_filter block */
  readonly advancedFilter?: EventgridEventSubscriptionAdvancedFilter[];
  /** azure_function_endpoint block */
  readonly azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint[];
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
export interface EventgridEventSubscriptionAdvancedFilterBoolEquals {
  readonly key: string;
  readonly value: boolean;
}
export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThan {
  readonly key: string;
  readonly value: number;
}
export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  readonly key: string;
  readonly value: number;
}
export interface EventgridEventSubscriptionAdvancedFilterNumberIn {
  readonly key: string;
  readonly values: number[];
}
export interface EventgridEventSubscriptionAdvancedFilterNumberLessThan {
  readonly key: string;
  readonly value: number;
}
export interface EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  readonly key: string;
  readonly value: number;
}
export interface EventgridEventSubscriptionAdvancedFilterNumberNotIn {
  readonly key: string;
  readonly values: number[];
}
export interface EventgridEventSubscriptionAdvancedFilterStringBeginsWith {
  readonly key: string;
  readonly values: string[];
}
export interface EventgridEventSubscriptionAdvancedFilterStringContains {
  readonly key: string;
  readonly values: string[];
}
export interface EventgridEventSubscriptionAdvancedFilterStringEndsWith {
  readonly key: string;
  readonly values: string[];
}
export interface EventgridEventSubscriptionAdvancedFilterStringIn {
  readonly key: string;
  readonly values: string[];
}
export interface EventgridEventSubscriptionAdvancedFilterStringNotIn {
  readonly key: string;
  readonly values: string[];
}
export interface EventgridEventSubscriptionAdvancedFilter {
  /** bool_equals block */
  readonly boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[];
  /** number_greater_than block */
  readonly numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
  /** number_greater_than_or_equals block */
  readonly numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
  /** number_in block */
  readonly numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[];
  /** number_less_than block */
  readonly numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
  /** number_less_than_or_equals block */
  readonly numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
  /** number_not_in block */
  readonly numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
  /** string_begins_with block */
  readonly stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
  /** string_contains block */
  readonly stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[];
  /** string_ends_with block */
  readonly stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
  /** string_in block */
  readonly stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[];
  /** string_not_in block */
  readonly stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[];
}
export interface EventgridEventSubscriptionAzureFunctionEndpoint {
  readonly functionId: string;
  readonly maxEventsPerBatch?: number;
  readonly preferredBatchSizeInKilobytes?: number;
}
export interface EventgridEventSubscriptionEventhubEndpoint {
  readonly eventhubId?: string;
}
export interface EventgridEventSubscriptionHybridConnectionEndpoint {
  readonly hybridConnectionId?: string;
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
  readonly activeDirectoryAppIdOrUri?: string;
  readonly activeDirectoryTenantId?: string;
  readonly maxEventsPerBatch?: number;
  readonly preferredBatchSizeInKilobytes?: number;
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
    this._eventhubEndpointId = config.eventhubEndpointId;
    this._expirationTimeUtc = config.expirationTimeUtc;
    this._hybridConnectionEndpointId = config.hybridConnectionEndpointId;
    this._includedEventTypes = config.includedEventTypes;
    this._labels = config.labels;
    this._name = config.name;
    this._scope = config.scope;
    this._serviceBusQueueEndpointId = config.serviceBusQueueEndpointId;
    this._serviceBusTopicEndpointId = config.serviceBusTopicEndpointId;
    this._topicName = config.topicName;
    this._advancedFilter = config.advancedFilter;
    this._azureFunctionEndpoint = config.azureFunctionEndpoint;
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
    return this.getStringAttribute('event_delivery_schema');
  }
  public set eventDeliverySchema(value: string ) {
    this._eventDeliverySchema = value;
  }
  public resetEventDeliverySchema() {
    this._eventDeliverySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliverySchemaInput() {
    return this._eventDeliverySchema
  }

  // eventhub_endpoint_id - computed: true, optional: true, required: false
  private _eventhubEndpointId?: string;
  public get eventhubEndpointId() {
    return this.getStringAttribute('eventhub_endpoint_id');
  }
  public set eventhubEndpointId(value: string) {
    this._eventhubEndpointId = value;
  }
  public resetEventhubEndpointId() {
    this._eventhubEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointIdInput() {
    return this._eventhubEndpointId
  }

  // expiration_time_utc - computed: false, optional: true, required: false
  private _expirationTimeUtc?: string;
  public get expirationTimeUtc() {
    return this.getStringAttribute('expiration_time_utc');
  }
  public set expirationTimeUtc(value: string ) {
    this._expirationTimeUtc = value;
  }
  public resetExpirationTimeUtc() {
    this._expirationTimeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUtcInput() {
    return this._expirationTimeUtc
  }

  // hybrid_connection_endpoint_id - computed: true, optional: true, required: false
  private _hybridConnectionEndpointId?: string;
  public get hybridConnectionEndpointId() {
    return this.getStringAttribute('hybrid_connection_endpoint_id');
  }
  public set hybridConnectionEndpointId(value: string) {
    this._hybridConnectionEndpointId = value;
  }
  public resetHybridConnectionEndpointId() {
    this._hybridConnectionEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionEndpointIdInput() {
    return this._hybridConnectionEndpointId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_event_types - computed: true, optional: true, required: false
  private _includedEventTypes?: string[];
  public get includedEventTypes() {
    return this.getListAttribute('included_event_types');
  }
  public set includedEventTypes(value: string[]) {
    this._includedEventTypes = value;
  }
  public resetIncludedEventTypes() {
    this._includedEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedEventTypesInput() {
    return this._includedEventTypes
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[];
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // service_bus_queue_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusQueueEndpointId?: string;
  public get serviceBusQueueEndpointId() {
    return this.getStringAttribute('service_bus_queue_endpoint_id');
  }
  public set serviceBusQueueEndpointId(value: string ) {
    this._serviceBusQueueEndpointId = value;
  }
  public resetServiceBusQueueEndpointId() {
    this._serviceBusQueueEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusQueueEndpointIdInput() {
    return this._serviceBusQueueEndpointId
  }

  // service_bus_topic_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusTopicEndpointId?: string;
  public get serviceBusTopicEndpointId() {
    return this.getStringAttribute('service_bus_topic_endpoint_id');
  }
  public set serviceBusTopicEndpointId(value: string ) {
    this._serviceBusTopicEndpointId = value;
  }
  public resetServiceBusTopicEndpointId() {
    this._serviceBusTopicEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusTopicEndpointIdInput() {
    return this._serviceBusTopicEndpointId
  }

  // topic_name - computed: true, optional: true, required: false
  private _topicName?: string;
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName
  }

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter?: EventgridEventSubscriptionAdvancedFilter[];
  public get advancedFilter() {
    return this.interpolationForAttribute('advanced_filter') as any;
  }
  public set advancedFilter(value: EventgridEventSubscriptionAdvancedFilter[] ) {
    this._advancedFilter = value;
  }
  public resetAdvancedFilter() {
    this._advancedFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilterInput() {
    return this._advancedFilter
  }

  // azure_function_endpoint - computed: false, optional: true, required: false
  private _azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint[];
  public get azureFunctionEndpoint() {
    return this.interpolationForAttribute('azure_function_endpoint') as any;
  }
  public set azureFunctionEndpoint(value: EventgridEventSubscriptionAzureFunctionEndpoint[] ) {
    this._azureFunctionEndpoint = value;
  }
  public resetAzureFunctionEndpoint() {
    this._azureFunctionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionEndpointInput() {
    return this._azureFunctionEndpoint
  }

  // eventhub_endpoint - computed: false, optional: true, required: false
  private _eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint[];
  public get eventhubEndpoint() {
    return this.interpolationForAttribute('eventhub_endpoint') as any;
  }
  public set eventhubEndpoint(value: EventgridEventSubscriptionEventhubEndpoint[] ) {
    this._eventhubEndpoint = value;
  }
  public resetEventhubEndpoint() {
    this._eventhubEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointInput() {
    return this._eventhubEndpoint
  }

  // hybrid_connection_endpoint - computed: false, optional: true, required: false
  private _hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint[];
  public get hybridConnectionEndpoint() {
    return this.interpolationForAttribute('hybrid_connection_endpoint') as any;
  }
  public set hybridConnectionEndpoint(value: EventgridEventSubscriptionHybridConnectionEndpoint[] ) {
    this._hybridConnectionEndpoint = value;
  }
  public resetHybridConnectionEndpoint() {
    this._hybridConnectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionEndpointInput() {
    return this._hybridConnectionEndpoint
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: EventgridEventSubscriptionRetryPolicy[];
  public get retryPolicy() {
    return this.interpolationForAttribute('retry_policy') as any;
  }
  public set retryPolicy(value: EventgridEventSubscriptionRetryPolicy[] ) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // storage_blob_dead_letter_destination - computed: false, optional: true, required: false
  private _storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination[];
  public get storageBlobDeadLetterDestination() {
    return this.interpolationForAttribute('storage_blob_dead_letter_destination') as any;
  }
  public set storageBlobDeadLetterDestination(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination[] ) {
    this._storageBlobDeadLetterDestination = value;
  }
  public resetStorageBlobDeadLetterDestination() {
    this._storageBlobDeadLetterDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobDeadLetterDestinationInput() {
    return this._storageBlobDeadLetterDestination
  }

  // storage_queue_endpoint - computed: false, optional: true, required: false
  private _storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint[];
  public get storageQueueEndpoint() {
    return this.interpolationForAttribute('storage_queue_endpoint') as any;
  }
  public set storageQueueEndpoint(value: EventgridEventSubscriptionStorageQueueEndpoint[] ) {
    this._storageQueueEndpoint = value;
  }
  public resetStorageQueueEndpoint() {
    this._storageQueueEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQueueEndpointInput() {
    return this._storageQueueEndpoint
  }

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter?: EventgridEventSubscriptionSubjectFilter[];
  public get subjectFilter() {
    return this.interpolationForAttribute('subject_filter') as any;
  }
  public set subjectFilter(value: EventgridEventSubscriptionSubjectFilter[] ) {
    this._subjectFilter = value;
  }
  public resetSubjectFilter() {
    this._subjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFilterInput() {
    return this._subjectFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridEventSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridEventSubscriptionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // webhook_endpoint - computed: false, optional: true, required: false
  private _webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint[];
  public get webhookEndpoint() {
    return this.interpolationForAttribute('webhook_endpoint') as any;
  }
  public set webhookEndpoint(value: EventgridEventSubscriptionWebhookEndpoint[] ) {
    this._webhookEndpoint = value;
  }
  public resetWebhookEndpoint() {
    this._webhookEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEndpointInput() {
    return this._webhookEndpoint
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_delivery_schema: this._eventDeliverySchema,
      eventhub_endpoint_id: this._eventhubEndpointId,
      expiration_time_utc: this._expirationTimeUtc,
      hybrid_connection_endpoint_id: this._hybridConnectionEndpointId,
      included_event_types: this._includedEventTypes,
      labels: this._labels,
      name: this._name,
      scope: this._scope,
      service_bus_queue_endpoint_id: this._serviceBusQueueEndpointId,
      service_bus_topic_endpoint_id: this._serviceBusTopicEndpointId,
      topic_name: this._topicName,
      advanced_filter: this._advancedFilter,
      azure_function_endpoint: this._azureFunctionEndpoint,
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
