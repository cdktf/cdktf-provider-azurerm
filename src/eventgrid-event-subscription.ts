// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}
  */
  readonly advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#event_delivery_schema EventgridEventSubscription#event_delivery_schema}
  */
  readonly eventDeliverySchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}
  */
  readonly eventhubEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#expiration_time_utc EventgridEventSubscription#expiration_time_utc}
  */
  readonly expirationTimeUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}
  */
  readonly hybridConnectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#included_event_types EventgridEventSubscription#included_event_types}
  */
  readonly includedEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#labels EventgridEventSubscription#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#name EventgridEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#scope EventgridEventSubscription#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}
  */
  readonly serviceBusQueueEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}
  */
  readonly serviceBusTopicEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#topic_name EventgridEventSubscription#topic_name}
  */
  readonly topicName?: string;
  /**
  * advanced_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#advanced_filter EventgridEventSubscription#advanced_filter}
  */
  readonly advancedFilter?: EventgridEventSubscriptionAdvancedFilter;
  /**
  * azure_function_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}
  */
  readonly azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint;
  /**
  * dead_letter_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#dead_letter_identity EventgridEventSubscription#dead_letter_identity}
  */
  readonly deadLetterIdentity?: EventgridEventSubscriptionDeadLetterIdentity;
  /**
  * delivery_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#delivery_identity EventgridEventSubscription#delivery_identity}
  */
  readonly deliveryIdentity?: EventgridEventSubscriptionDeliveryIdentity;
  /**
  * delivery_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#delivery_property EventgridEventSubscription#delivery_property}
  */
  readonly deliveryProperty?: EventgridEventSubscriptionDeliveryProperty[];
  /**
  * eventhub_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#eventhub_endpoint EventgridEventSubscription#eventhub_endpoint}
  */
  readonly eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint;
  /**
  * hybrid_connection_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#hybrid_connection_endpoint EventgridEventSubscription#hybrid_connection_endpoint}
  */
  readonly hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#retry_policy EventgridEventSubscription#retry_policy}
  */
  readonly retryPolicy?: EventgridEventSubscriptionRetryPolicy;
  /**
  * storage_blob_dead_letter_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}
  */
  readonly storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination;
  /**
  * storage_queue_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}
  */
  readonly storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint;
  /**
  * subject_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#subject_filter EventgridEventSubscription#subject_filter}
  */
  readonly subjectFilter?: EventgridEventSubscriptionSubjectFilter;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#timeouts EventgridEventSubscription#timeouts}
  */
  readonly timeouts?: EventgridEventSubscriptionTimeouts;
  /**
  * webhook_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#webhook_endpoint EventgridEventSubscription#webhook_endpoint}
  */
  readonly webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint;
}
export interface EventgridEventSubscriptionAdvancedFilterBoolEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

function eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterBoolEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterIsNotNull {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

function eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNotNull): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

function eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberInRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberLessThan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberNotIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberNotInRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringContains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotContains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilter {
  /**
  * bool_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#bool_equals EventgridEventSubscription#bool_equals}
  */
  readonly boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[];
  /**
  * is_not_null block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#is_not_null EventgridEventSubscription#is_not_null}
  */
  readonly isNotNull?: EventgridEventSubscriptionAdvancedFilterIsNotNull[];
  /**
  * is_null_or_undefined block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}
  */
  readonly isNullOrUndefined?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[];
  /**
  * number_greater_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_greater_than EventgridEventSubscription#number_greater_than}
  */
  readonly numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
  /**
  * number_greater_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}
  */
  readonly numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
  /**
  * number_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_in EventgridEventSubscription#number_in}
  */
  readonly numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[];
  /**
  * number_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_in_range EventgridEventSubscription#number_in_range}
  */
  readonly numberInRange?: EventgridEventSubscriptionAdvancedFilterNumberInRange[];
  /**
  * number_less_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_less_than EventgridEventSubscription#number_less_than}
  */
  readonly numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
  /**
  * number_less_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}
  */
  readonly numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
  /**
  * number_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_not_in EventgridEventSubscription#number_not_in}
  */
  readonly numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
  /**
  * number_not_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_not_in_range EventgridEventSubscription#number_not_in_range}
  */
  readonly numberNotInRange?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[];
  /**
  * string_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_begins_with EventgridEventSubscription#string_begins_with}
  */
  readonly stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
  /**
  * string_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_contains EventgridEventSubscription#string_contains}
  */
  readonly stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[];
  /**
  * string_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_ends_with EventgridEventSubscription#string_ends_with}
  */
  readonly stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
  /**
  * string_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_in EventgridEventSubscription#string_in}
  */
  readonly stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[];
  /**
  * string_not_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_begins_with EventgridEventSubscription#string_not_begins_with}
  */
  readonly stringNotBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[];
  /**
  * string_not_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_contains EventgridEventSubscription#string_not_contains}
  */
  readonly stringNotContains?: EventgridEventSubscriptionAdvancedFilterStringNotContains[];
  /**
  * string_not_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_ends_with EventgridEventSubscription#string_not_ends_with}
  */
  readonly stringNotEndsWith?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[];
  /**
  * string_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_in EventgridEventSubscription#string_not_in}
  */
  readonly stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[];
}

function eventgridEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterOutputReference | EventgridEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform)(struct!.boolEquals),
    is_not_null: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform)(struct!.isNotNull),
    is_null_or_undefined: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform)(struct!.isNullOrUndefined),
    number_greater_than: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform)(struct!.numberGreaterThan),
    number_greater_than_or_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform)(struct!.numberGreaterThanOrEquals),
    number_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberInToTerraform)(struct!.numberIn),
    number_in_range: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform)(struct!.numberInRange),
    number_less_than: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform)(struct!.numberLessThan),
    number_less_than_or_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform)(struct!.numberLessThanOrEquals),
    number_not_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform)(struct!.numberNotIn),
    number_not_in_range: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform)(struct!.numberNotInRange),
    string_begins_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform)(struct!.stringBeginsWith),
    string_contains: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform)(struct!.stringContains),
    string_ends_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform)(struct!.stringEndsWith),
    string_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringInToTerraform)(struct!.stringIn),
    string_not_begins_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform)(struct!.stringNotBeginsWith),
    string_not_contains: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform)(struct!.stringNotContains),
    string_not_ends_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform)(struct!.stringNotEndsWith),
    string_not_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform)(struct!.stringNotIn),
  }
}

export class EventgridEventSubscriptionAdvancedFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bool_equals - computed: false, optional: true, required: false
  private _boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[] | undefined; 
  public get boolEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bool_equals') as any;
  }
  public set boolEquals(value: EventgridEventSubscriptionAdvancedFilterBoolEquals[] | undefined) {
    this._boolEquals = value;
  }
  public resetBoolEquals() {
    this._boolEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolEqualsInput() {
    return this._boolEquals
  }

  // is_not_null - computed: false, optional: true, required: false
  private _isNotNull?: EventgridEventSubscriptionAdvancedFilterIsNotNull[] | undefined; 
  public get isNotNull() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('is_not_null') as any;
  }
  public set isNotNull(value: EventgridEventSubscriptionAdvancedFilterIsNotNull[] | undefined) {
    this._isNotNull = value;
  }
  public resetIsNotNull() {
    this._isNotNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotNullInput() {
    return this._isNotNull
  }

  // is_null_or_undefined - computed: false, optional: true, required: false
  private _isNullOrUndefined?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[] | undefined; 
  public get isNullOrUndefined() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('is_null_or_undefined') as any;
  }
  public set isNullOrUndefined(value: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[] | undefined) {
    this._isNullOrUndefined = value;
  }
  public resetIsNullOrUndefined() {
    this._isNullOrUndefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullOrUndefinedInput() {
    return this._isNullOrUndefined
  }

  // number_greater_than - computed: false, optional: true, required: false
  private _numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[] | undefined; 
  public get numberGreaterThan() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_greater_than') as any;
  }
  public set numberGreaterThan(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[] | undefined) {
    this._numberGreaterThan = value;
  }
  public resetNumberGreaterThan() {
    this._numberGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberGreaterThanInput() {
    return this._numberGreaterThan
  }

  // number_greater_than_or_equals - computed: false, optional: true, required: false
  private _numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | undefined; 
  public get numberGreaterThanOrEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_greater_than_or_equals') as any;
  }
  public set numberGreaterThanOrEquals(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | undefined) {
    this._numberGreaterThanOrEquals = value;
  }
  public resetNumberGreaterThanOrEquals() {
    this._numberGreaterThanOrEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberGreaterThanOrEqualsInput() {
    return this._numberGreaterThanOrEquals
  }

  // number_in - computed: false, optional: true, required: false
  private _numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[] | undefined; 
  public get numberIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_in') as any;
  }
  public set numberIn(value: EventgridEventSubscriptionAdvancedFilterNumberIn[] | undefined) {
    this._numberIn = value;
  }
  public resetNumberIn() {
    this._numberIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInInput() {
    return this._numberIn
  }

  // number_in_range - computed: false, optional: true, required: false
  private _numberInRange?: EventgridEventSubscriptionAdvancedFilterNumberInRange[] | undefined; 
  public get numberInRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_in_range') as any;
  }
  public set numberInRange(value: EventgridEventSubscriptionAdvancedFilterNumberInRange[] | undefined) {
    this._numberInRange = value;
  }
  public resetNumberInRange() {
    this._numberInRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInRangeInput() {
    return this._numberInRange
  }

  // number_less_than - computed: false, optional: true, required: false
  private _numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[] | undefined; 
  public get numberLessThan() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_less_than') as any;
  }
  public set numberLessThan(value: EventgridEventSubscriptionAdvancedFilterNumberLessThan[] | undefined) {
    this._numberLessThan = value;
  }
  public resetNumberLessThan() {
    this._numberLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberLessThanInput() {
    return this._numberLessThan
  }

  // number_less_than_or_equals - computed: false, optional: true, required: false
  private _numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | undefined; 
  public get numberLessThanOrEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_less_than_or_equals') as any;
  }
  public set numberLessThanOrEquals(value: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | undefined) {
    this._numberLessThanOrEquals = value;
  }
  public resetNumberLessThanOrEquals() {
    this._numberLessThanOrEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberLessThanOrEqualsInput() {
    return this._numberLessThanOrEquals
  }

  // number_not_in - computed: false, optional: true, required: false
  private _numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[] | undefined; 
  public get numberNotIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_not_in') as any;
  }
  public set numberNotIn(value: EventgridEventSubscriptionAdvancedFilterNumberNotIn[] | undefined) {
    this._numberNotIn = value;
  }
  public resetNumberNotIn() {
    this._numberNotIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberNotInInput() {
    return this._numberNotIn
  }

  // number_not_in_range - computed: false, optional: true, required: false
  private _numberNotInRange?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[] | undefined; 
  public get numberNotInRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_not_in_range') as any;
  }
  public set numberNotInRange(value: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[] | undefined) {
    this._numberNotInRange = value;
  }
  public resetNumberNotInRange() {
    this._numberNotInRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberNotInRangeInput() {
    return this._numberNotInRange
  }

  // string_begins_with - computed: false, optional: true, required: false
  private _stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[] | undefined; 
  public get stringBeginsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_begins_with') as any;
  }
  public set stringBeginsWith(value: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[] | undefined) {
    this._stringBeginsWith = value;
  }
  public resetStringBeginsWith() {
    this._stringBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringBeginsWithInput() {
    return this._stringBeginsWith
  }

  // string_contains - computed: false, optional: true, required: false
  private _stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[] | undefined; 
  public get stringContains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_contains') as any;
  }
  public set stringContains(value: EventgridEventSubscriptionAdvancedFilterStringContains[] | undefined) {
    this._stringContains = value;
  }
  public resetStringContains() {
    this._stringContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringContainsInput() {
    return this._stringContains
  }

  // string_ends_with - computed: false, optional: true, required: false
  private _stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[] | undefined; 
  public get stringEndsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_ends_with') as any;
  }
  public set stringEndsWith(value: EventgridEventSubscriptionAdvancedFilterStringEndsWith[] | undefined) {
    this._stringEndsWith = value;
  }
  public resetStringEndsWith() {
    this._stringEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEndsWithInput() {
    return this._stringEndsWith
  }

  // string_in - computed: false, optional: true, required: false
  private _stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[] | undefined; 
  public get stringIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_in') as any;
  }
  public set stringIn(value: EventgridEventSubscriptionAdvancedFilterStringIn[] | undefined) {
    this._stringIn = value;
  }
  public resetStringIn() {
    this._stringIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInInput() {
    return this._stringIn
  }

  // string_not_begins_with - computed: false, optional: true, required: false
  private _stringNotBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[] | undefined; 
  public get stringNotBeginsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_begins_with') as any;
  }
  public set stringNotBeginsWith(value: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[] | undefined) {
    this._stringNotBeginsWith = value;
  }
  public resetStringNotBeginsWith() {
    this._stringNotBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotBeginsWithInput() {
    return this._stringNotBeginsWith
  }

  // string_not_contains - computed: false, optional: true, required: false
  private _stringNotContains?: EventgridEventSubscriptionAdvancedFilterStringNotContains[] | undefined; 
  public get stringNotContains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_contains') as any;
  }
  public set stringNotContains(value: EventgridEventSubscriptionAdvancedFilterStringNotContains[] | undefined) {
    this._stringNotContains = value;
  }
  public resetStringNotContains() {
    this._stringNotContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotContainsInput() {
    return this._stringNotContains
  }

  // string_not_ends_with - computed: false, optional: true, required: false
  private _stringNotEndsWith?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[] | undefined; 
  public get stringNotEndsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_ends_with') as any;
  }
  public set stringNotEndsWith(value: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[] | undefined) {
    this._stringNotEndsWith = value;
  }
  public resetStringNotEndsWith() {
    this._stringNotEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEndsWithInput() {
    return this._stringNotEndsWith
  }

  // string_not_in - computed: false, optional: true, required: false
  private _stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[] | undefined; 
  public get stringNotIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_in') as any;
  }
  public set stringNotIn(value: EventgridEventSubscriptionAdvancedFilterStringNotIn[] | undefined) {
    this._stringNotIn = value;
  }
  public resetStringNotIn() {
    this._stringNotIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotInInput() {
    return this._stringNotIn
  }
}
export interface EventgridEventSubscriptionAzureFunctionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#function_id EventgridEventSubscription#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
}

function eventgridEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridEventSubscriptionAzureFunctionEndpointOutputReference | EventgridEventSubscriptionAzureFunctionEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_id: cdktf.stringToTerraform(struct!.functionId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
  }
}

export class EventgridEventSubscriptionAzureFunctionEndpointOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId
  }

  // max_events_per_batch - computed: false, optional: true, required: false
  private _maxEventsPerBatch?: number | undefined; 
  public get maxEventsPerBatch() {
    return this.getNumberAttribute('max_events_per_batch');
  }
  public set maxEventsPerBatch(value: number | undefined) {
    this._maxEventsPerBatch = value;
  }
  public resetMaxEventsPerBatch() {
    this._maxEventsPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsPerBatchInput() {
    return this._maxEventsPerBatch
  }

  // preferred_batch_size_in_kilobytes - computed: false, optional: true, required: false
  private _preferredBatchSizeInKilobytes?: number | undefined; 
  public get preferredBatchSizeInKilobytes() {
    return this.getNumberAttribute('preferred_batch_size_in_kilobytes');
  }
  public set preferredBatchSizeInKilobytes(value: number | undefined) {
    this._preferredBatchSizeInKilobytes = value;
  }
  public resetPreferredBatchSizeInKilobytes() {
    this._preferredBatchSizeInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBatchSizeInKilobytesInput() {
    return this._preferredBatchSizeInKilobytes
  }
}
export interface EventgridEventSubscriptionDeadLetterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#type EventgridEventSubscription#type}
  */
  readonly type: string;
}

function eventgridEventSubscriptionDeadLetterIdentityToTerraform(struct?: EventgridEventSubscriptionDeadLetterIdentityOutputReference | EventgridEventSubscriptionDeadLetterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class EventgridEventSubscriptionDeadLetterIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface EventgridEventSubscriptionDeliveryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#type EventgridEventSubscription#type}
  */
  readonly type: string;
}

function eventgridEventSubscriptionDeliveryIdentityToTerraform(struct?: EventgridEventSubscriptionDeliveryIdentityOutputReference | EventgridEventSubscriptionDeliveryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class EventgridEventSubscriptionDeliveryIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface EventgridEventSubscriptionDeliveryProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#header_name EventgridEventSubscription#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#secret EventgridEventSubscription#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#source_field EventgridEventSubscription#source_field}
  */
  readonly sourceField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value?: string;
}

function eventgridEventSubscriptionDeliveryPropertyToTerraform(struct?: EventgridEventSubscriptionDeliveryProperty): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    secret: cdktf.booleanToTerraform(struct!.secret),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionEventhubEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#eventhub_id EventgridEventSubscription#eventhub_id}
  */
  readonly eventhubId?: string;
}

function eventgridEventSubscriptionEventhubEndpointToTerraform(struct?: EventgridEventSubscriptionEventhubEndpointOutputReference | EventgridEventSubscriptionEventhubEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eventhub_id: cdktf.stringToTerraform(struct!.eventhubId),
  }
}

export class EventgridEventSubscriptionEventhubEndpointOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // eventhub_id - computed: true, optional: true, required: false
  private _eventhubId?: string | undefined; 
  public get eventhubId() {
    return this.getStringAttribute('eventhub_id');
  }
  public set eventhubId(value: string | undefined) {
    this._eventhubId = value;
  }
  public resetEventhubId() {
    this._eventhubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubIdInput() {
    return this._eventhubId
  }
}
export interface EventgridEventSubscriptionHybridConnectionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#hybrid_connection_id EventgridEventSubscription#hybrid_connection_id}
  */
  readonly hybridConnectionId?: string;
}

function eventgridEventSubscriptionHybridConnectionEndpointToTerraform(struct?: EventgridEventSubscriptionHybridConnectionEndpointOutputReference | EventgridEventSubscriptionHybridConnectionEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_connection_id: cdktf.stringToTerraform(struct!.hybridConnectionId),
  }
}

export class EventgridEventSubscriptionHybridConnectionEndpointOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hybrid_connection_id - computed: true, optional: true, required: false
  private _hybridConnectionId?: string | undefined; 
  public get hybridConnectionId() {
    return this.getStringAttribute('hybrid_connection_id');
  }
  public set hybridConnectionId(value: string | undefined) {
    this._hybridConnectionId = value;
  }
  public resetHybridConnectionId() {
    this._hybridConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionIdInput() {
    return this._hybridConnectionId
  }
}
export interface EventgridEventSubscriptionRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#event_time_to_live EventgridEventSubscription#event_time_to_live}
  */
  readonly eventTimeToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts: number;
}

function eventgridEventSubscriptionRetryPolicyToTerraform(struct?: EventgridEventSubscriptionRetryPolicyOutputReference | EventgridEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_time_to_live: cdktf.numberToTerraform(struct!.eventTimeToLive),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}

export class EventgridEventSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // event_time_to_live - computed: false, optional: false, required: true
  private _eventTimeToLive?: number; 
  public get eventTimeToLive() {
    return this.getNumberAttribute('event_time_to_live');
  }
  public set eventTimeToLive(value: number) {
    this._eventTimeToLive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeToLiveInput() {
    return this._eventTimeToLive
  }

  // max_delivery_attempts - computed: false, optional: false, required: true
  private _maxDeliveryAttempts?: number; 
  public get maxDeliveryAttempts() {
    return this.getNumberAttribute('max_delivery_attempts');
  }
  public set maxDeliveryAttempts(value: number) {
    this._maxDeliveryAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryAttemptsInput() {
    return this._maxDeliveryAttempts
  }
}
export interface EventgridEventSubscriptionStorageBlobDeadLetterDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}
  */
  readonly storageBlobContainerName: string;
}

function eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_blob_container_name: cdktf.stringToTerraform(struct!.storageBlobContainerName),
  }
}

export class EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // storage_blob_container_name - computed: false, optional: false, required: true
  private _storageBlobContainerName?: string; 
  public get storageBlobContainerName() {
    return this.getStringAttribute('storage_blob_container_name');
  }
  public set storageBlobContainerName(value: string) {
    this._storageBlobContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobContainerNameInput() {
    return this._storageBlobContainerName
  }
}
export interface EventgridEventSubscriptionStorageQueueEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#queue_name EventgridEventSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
}

function eventgridEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridEventSubscriptionStorageQueueEndpointOutputReference | EventgridEventSubscriptionStorageQueueEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export class EventgridEventSubscriptionStorageQueueEndpointOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }
}
export interface EventgridEventSubscriptionSubjectFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#case_sensitive EventgridEventSubscription#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#subject_begins_with EventgridEventSubscription#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#subject_ends_with EventgridEventSubscription#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
}

function eventgridEventSubscriptionSubjectFilterToTerraform(struct?: EventgridEventSubscriptionSubjectFilterOutputReference | EventgridEventSubscriptionSubjectFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    subject_begins_with: cdktf.stringToTerraform(struct!.subjectBeginsWith),
    subject_ends_with: cdktf.stringToTerraform(struct!.subjectEndsWith),
  }
}

export class EventgridEventSubscriptionSubjectFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable | undefined; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive') as any;
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable | undefined) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive
  }

  // subject_begins_with - computed: false, optional: true, required: false
  private _subjectBeginsWith?: string | undefined; 
  public get subjectBeginsWith() {
    return this.getStringAttribute('subject_begins_with');
  }
  public set subjectBeginsWith(value: string | undefined) {
    this._subjectBeginsWith = value;
  }
  public resetSubjectBeginsWith() {
    this._subjectBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectBeginsWithInput() {
    return this._subjectBeginsWith
  }

  // subject_ends_with - computed: false, optional: true, required: false
  private _subjectEndsWith?: string | undefined; 
  public get subjectEndsWith() {
    return this.getStringAttribute('subject_ends_with');
  }
  public set subjectEndsWith(value: string | undefined) {
    this._subjectEndsWith = value;
  }
  public resetSubjectEndsWith() {
    this._subjectEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectEndsWithInput() {
    return this._subjectEndsWith
  }
}
export interface EventgridEventSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#create EventgridEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#delete EventgridEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#read EventgridEventSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#update EventgridEventSubscription#update}
  */
  readonly update?: string;
}

function eventgridEventSubscriptionTimeoutsToTerraform(struct?: EventgridEventSubscriptionTimeoutsOutputReference | EventgridEventSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class EventgridEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface EventgridEventSubscriptionWebhookEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}
  */
  readonly activeDirectoryAppIdOrUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}
  */
  readonly activeDirectoryTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#url EventgridEventSubscription#url}
  */
  readonly url: string;
}

function eventgridEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridEventSubscriptionWebhookEndpointOutputReference | EventgridEventSubscriptionWebhookEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_app_id_or_uri: cdktf.stringToTerraform(struct!.activeDirectoryAppIdOrUri),
    active_directory_tenant_id: cdktf.stringToTerraform(struct!.activeDirectoryTenantId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class EventgridEventSubscriptionWebhookEndpointOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // active_directory_app_id_or_uri - computed: false, optional: true, required: false
  private _activeDirectoryAppIdOrUri?: string | undefined; 
  public get activeDirectoryAppIdOrUri() {
    return this.getStringAttribute('active_directory_app_id_or_uri');
  }
  public set activeDirectoryAppIdOrUri(value: string | undefined) {
    this._activeDirectoryAppIdOrUri = value;
  }
  public resetActiveDirectoryAppIdOrUri() {
    this._activeDirectoryAppIdOrUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAppIdOrUriInput() {
    return this._activeDirectoryAppIdOrUri
  }

  // active_directory_tenant_id - computed: false, optional: true, required: false
  private _activeDirectoryTenantId?: string | undefined; 
  public get activeDirectoryTenantId() {
    return this.getStringAttribute('active_directory_tenant_id');
  }
  public set activeDirectoryTenantId(value: string | undefined) {
    this._activeDirectoryTenantId = value;
  }
  public resetActiveDirectoryTenantId() {
    this._activeDirectoryTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryTenantIdInput() {
    return this._activeDirectoryTenantId
  }

  // max_events_per_batch - computed: false, optional: true, required: false
  private _maxEventsPerBatch?: number | undefined; 
  public get maxEventsPerBatch() {
    return this.getNumberAttribute('max_events_per_batch');
  }
  public set maxEventsPerBatch(value: number | undefined) {
    this._maxEventsPerBatch = value;
  }
  public resetMaxEventsPerBatch() {
    this._maxEventsPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsPerBatchInput() {
    return this._maxEventsPerBatch
  }

  // preferred_batch_size_in_kilobytes - computed: false, optional: true, required: false
  private _preferredBatchSizeInKilobytes?: number | undefined; 
  public get preferredBatchSizeInKilobytes() {
    return this.getNumberAttribute('preferred_batch_size_in_kilobytes');
  }
  public set preferredBatchSizeInKilobytes(value: number | undefined) {
    this._preferredBatchSizeInKilobytes = value;
  }
  public resetPreferredBatchSizeInKilobytes() {
    this._preferredBatchSizeInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBatchSizeInKilobytesInput() {
    return this._preferredBatchSizeInKilobytes
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html azurerm_eventgrid_event_subscription}
*/
export class EventgridEventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventgrid_event_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html azurerm_eventgrid_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridEventSubscriptionConfig
  */
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
    this._advancedFilteringOnArraysEnabled = config.advancedFilteringOnArraysEnabled;
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
    this._deadLetterIdentity = config.deadLetterIdentity;
    this._deliveryIdentity = config.deliveryIdentity;
    this._deliveryProperty = config.deliveryProperty;
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

  // advanced_filtering_on_arrays_enabled - computed: false, optional: true, required: false
  private _advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get advancedFilteringOnArraysEnabled() {
    return this.getBooleanAttribute('advanced_filtering_on_arrays_enabled') as any;
  }
  public set advancedFilteringOnArraysEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._advancedFilteringOnArraysEnabled = value;
  }
  public resetAdvancedFilteringOnArraysEnabled() {
    this._advancedFilteringOnArraysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilteringOnArraysEnabledInput() {
    return this._advancedFilteringOnArraysEnabled
  }

  // event_delivery_schema - computed: false, optional: true, required: false
  private _eventDeliverySchema?: string | undefined; 
  public get eventDeliverySchema() {
    return this.getStringAttribute('event_delivery_schema');
  }
  public set eventDeliverySchema(value: string | undefined) {
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
  private _eventhubEndpointId?: string | undefined; 
  public get eventhubEndpointId() {
    return this.getStringAttribute('eventhub_endpoint_id');
  }
  public set eventhubEndpointId(value: string | undefined) {
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
  private _expirationTimeUtc?: string | undefined; 
  public get expirationTimeUtc() {
    return this.getStringAttribute('expiration_time_utc');
  }
  public set expirationTimeUtc(value: string | undefined) {
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
  private _hybridConnectionEndpointId?: string | undefined; 
  public get hybridConnectionEndpointId() {
    return this.getStringAttribute('hybrid_connection_endpoint_id');
  }
  public set hybridConnectionEndpointId(value: string | undefined) {
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
  private _includedEventTypes?: string[] | undefined; 
  public get includedEventTypes() {
    return this.getListAttribute('included_event_types');
  }
  public set includedEventTypes(value: string[] | undefined) {
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
  private _labels?: string[] | undefined; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] | undefined) {
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
  private _name?: string; 
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
  private _scope?: string; 
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
  private _serviceBusQueueEndpointId?: string | undefined; 
  public get serviceBusQueueEndpointId() {
    return this.getStringAttribute('service_bus_queue_endpoint_id');
  }
  public set serviceBusQueueEndpointId(value: string | undefined) {
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
  private _serviceBusTopicEndpointId?: string | undefined; 
  public get serviceBusTopicEndpointId() {
    return this.getStringAttribute('service_bus_topic_endpoint_id');
  }
  public set serviceBusTopicEndpointId(value: string | undefined) {
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
  private _topicName?: string | undefined; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string | undefined) {
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
  private _advancedFilter?: EventgridEventSubscriptionAdvancedFilter | undefined; 
  private __advancedFilterOutput = new EventgridEventSubscriptionAdvancedFilterOutputReference(this as any, "advanced_filter", true);
  public get advancedFilter() {
    return this.__advancedFilterOutput;
  }
  public putAdvancedFilter(value: EventgridEventSubscriptionAdvancedFilter | undefined) {
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
  private _azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint | undefined; 
  private __azureFunctionEndpointOutput = new EventgridEventSubscriptionAzureFunctionEndpointOutputReference(this as any, "azure_function_endpoint", true);
  public get azureFunctionEndpoint() {
    return this.__azureFunctionEndpointOutput;
  }
  public putAzureFunctionEndpoint(value: EventgridEventSubscriptionAzureFunctionEndpoint | undefined) {
    this._azureFunctionEndpoint = value;
  }
  public resetAzureFunctionEndpoint() {
    this._azureFunctionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionEndpointInput() {
    return this._azureFunctionEndpoint
  }

  // dead_letter_identity - computed: false, optional: true, required: false
  private _deadLetterIdentity?: EventgridEventSubscriptionDeadLetterIdentity | undefined; 
  private __deadLetterIdentityOutput = new EventgridEventSubscriptionDeadLetterIdentityOutputReference(this as any, "dead_letter_identity", true);
  public get deadLetterIdentity() {
    return this.__deadLetterIdentityOutput;
  }
  public putDeadLetterIdentity(value: EventgridEventSubscriptionDeadLetterIdentity | undefined) {
    this._deadLetterIdentity = value;
  }
  public resetDeadLetterIdentity() {
    this._deadLetterIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterIdentityInput() {
    return this._deadLetterIdentity
  }

  // delivery_identity - computed: false, optional: true, required: false
  private _deliveryIdentity?: EventgridEventSubscriptionDeliveryIdentity | undefined; 
  private __deliveryIdentityOutput = new EventgridEventSubscriptionDeliveryIdentityOutputReference(this as any, "delivery_identity", true);
  public get deliveryIdentity() {
    return this.__deliveryIdentityOutput;
  }
  public putDeliveryIdentity(value: EventgridEventSubscriptionDeliveryIdentity | undefined) {
    this._deliveryIdentity = value;
  }
  public resetDeliveryIdentity() {
    this._deliveryIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryIdentityInput() {
    return this._deliveryIdentity
  }

  // delivery_property - computed: false, optional: true, required: false
  private _deliveryProperty?: EventgridEventSubscriptionDeliveryProperty[] | undefined; 
  public get deliveryProperty() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('delivery_property') as any;
  }
  public set deliveryProperty(value: EventgridEventSubscriptionDeliveryProperty[] | undefined) {
    this._deliveryProperty = value;
  }
  public resetDeliveryProperty() {
    this._deliveryProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPropertyInput() {
    return this._deliveryProperty
  }

  // eventhub_endpoint - computed: false, optional: true, required: false
  private _eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint | undefined; 
  private __eventhubEndpointOutput = new EventgridEventSubscriptionEventhubEndpointOutputReference(this as any, "eventhub_endpoint", true);
  public get eventhubEndpoint() {
    return this.__eventhubEndpointOutput;
  }
  public putEventhubEndpoint(value: EventgridEventSubscriptionEventhubEndpoint | undefined) {
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
  private _hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint | undefined; 
  private __hybridConnectionEndpointOutput = new EventgridEventSubscriptionHybridConnectionEndpointOutputReference(this as any, "hybrid_connection_endpoint", true);
  public get hybridConnectionEndpoint() {
    return this.__hybridConnectionEndpointOutput;
  }
  public putHybridConnectionEndpoint(value: EventgridEventSubscriptionHybridConnectionEndpoint | undefined) {
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
  private _retryPolicy?: EventgridEventSubscriptionRetryPolicy | undefined; 
  private __retryPolicyOutput = new EventgridEventSubscriptionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: EventgridEventSubscriptionRetryPolicy | undefined) {
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
  private _storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination | undefined; 
  private __storageBlobDeadLetterDestinationOutput = new EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(this as any, "storage_blob_dead_letter_destination", true);
  public get storageBlobDeadLetterDestination() {
    return this.__storageBlobDeadLetterDestinationOutput;
  }
  public putStorageBlobDeadLetterDestination(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination | undefined) {
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
  private _storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint | undefined; 
  private __storageQueueEndpointOutput = new EventgridEventSubscriptionStorageQueueEndpointOutputReference(this as any, "storage_queue_endpoint", true);
  public get storageQueueEndpoint() {
    return this.__storageQueueEndpointOutput;
  }
  public putStorageQueueEndpoint(value: EventgridEventSubscriptionStorageQueueEndpoint | undefined) {
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
  private _subjectFilter?: EventgridEventSubscriptionSubjectFilter | undefined; 
  private __subjectFilterOutput = new EventgridEventSubscriptionSubjectFilterOutputReference(this as any, "subject_filter", true);
  public get subjectFilter() {
    return this.__subjectFilterOutput;
  }
  public putSubjectFilter(value: EventgridEventSubscriptionSubjectFilter | undefined) {
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
  private _timeouts?: EventgridEventSubscriptionTimeouts | undefined; 
  private __timeoutsOutput = new EventgridEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: EventgridEventSubscriptionTimeouts | undefined) {
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
  private _webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint | undefined; 
  private __webhookEndpointOutput = new EventgridEventSubscriptionWebhookEndpointOutputReference(this as any, "webhook_endpoint", true);
  public get webhookEndpoint() {
    return this.__webhookEndpointOutput;
  }
  public putWebhookEndpoint(value: EventgridEventSubscriptionWebhookEndpoint | undefined) {
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
      advanced_filtering_on_arrays_enabled: cdktf.booleanToTerraform(this._advancedFilteringOnArraysEnabled),
      event_delivery_schema: cdktf.stringToTerraform(this._eventDeliverySchema),
      eventhub_endpoint_id: cdktf.stringToTerraform(this._eventhubEndpointId),
      expiration_time_utc: cdktf.stringToTerraform(this._expirationTimeUtc),
      hybrid_connection_endpoint_id: cdktf.stringToTerraform(this._hybridConnectionEndpointId),
      included_event_types: cdktf.listMapper(cdktf.stringToTerraform)(this._includedEventTypes),
      labels: cdktf.listMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      service_bus_queue_endpoint_id: cdktf.stringToTerraform(this._serviceBusQueueEndpointId),
      service_bus_topic_endpoint_id: cdktf.stringToTerraform(this._serviceBusTopicEndpointId),
      topic_name: cdktf.stringToTerraform(this._topicName),
      advanced_filter: eventgridEventSubscriptionAdvancedFilterToTerraform(this._advancedFilter),
      azure_function_endpoint: eventgridEventSubscriptionAzureFunctionEndpointToTerraform(this._azureFunctionEndpoint),
      dead_letter_identity: eventgridEventSubscriptionDeadLetterIdentityToTerraform(this._deadLetterIdentity),
      delivery_identity: eventgridEventSubscriptionDeliveryIdentityToTerraform(this._deliveryIdentity),
      delivery_property: cdktf.listMapper(eventgridEventSubscriptionDeliveryPropertyToTerraform)(this._deliveryProperty),
      eventhub_endpoint: eventgridEventSubscriptionEventhubEndpointToTerraform(this._eventhubEndpoint),
      hybrid_connection_endpoint: eventgridEventSubscriptionHybridConnectionEndpointToTerraform(this._hybridConnectionEndpoint),
      retry_policy: eventgridEventSubscriptionRetryPolicyToTerraform(this._retryPolicy),
      storage_blob_dead_letter_destination: eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(this._storageBlobDeadLetterDestination),
      storage_queue_endpoint: eventgridEventSubscriptionStorageQueueEndpointToTerraform(this._storageQueueEndpoint),
      subject_filter: eventgridEventSubscriptionSubjectFilterToTerraform(this._subjectFilter),
      timeouts: eventgridEventSubscriptionTimeoutsToTerraform(this._timeouts),
      webhook_endpoint: eventgridEventSubscriptionWebhookEndpointToTerraform(this._webhookEndpoint),
    };
  }
}
