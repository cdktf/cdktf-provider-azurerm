// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}
  */
  readonly advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}
  */
  readonly eventDeliverySchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}
  */
  readonly eventhubEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}
  */
  readonly expirationTimeUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}
  */
  readonly hybridConnectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}
  */
  readonly includedEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#labels EventgridEventSubscription#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#name EventgridEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#scope EventgridEventSubscription#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}
  */
  readonly serviceBusQueueEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}
  */
  readonly serviceBusTopicEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#topic_name EventgridEventSubscription#topic_name}
  */
  readonly topicName?: string;
  /**
  * advanced_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#advanced_filter EventgridEventSubscription#advanced_filter}
  */
  readonly advancedFilter?: EventgridEventSubscriptionAdvancedFilter;
  /**
  * azure_function_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}
  */
  readonly azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint;
  /**
  * dead_letter_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#dead_letter_identity EventgridEventSubscription#dead_letter_identity}
  */
  readonly deadLetterIdentity?: EventgridEventSubscriptionDeadLetterIdentity;
  /**
  * delivery_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#delivery_identity EventgridEventSubscription#delivery_identity}
  */
  readonly deliveryIdentity?: EventgridEventSubscriptionDeliveryIdentity;
  /**
  * delivery_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#delivery_property EventgridEventSubscription#delivery_property}
  */
  readonly deliveryProperty?: EventgridEventSubscriptionDeliveryProperty[];
  /**
  * eventhub_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#eventhub_endpoint EventgridEventSubscription#eventhub_endpoint}
  */
  readonly eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint;
  /**
  * hybrid_connection_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#hybrid_connection_endpoint EventgridEventSubscription#hybrid_connection_endpoint}
  */
  readonly hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#retry_policy EventgridEventSubscription#retry_policy}
  */
  readonly retryPolicy?: EventgridEventSubscriptionRetryPolicy;
  /**
  * storage_blob_dead_letter_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}
  */
  readonly storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination;
  /**
  * storage_queue_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}
  */
  readonly storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint;
  /**
  * subject_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#subject_filter EventgridEventSubscription#subject_filter}
  */
  readonly subjectFilter?: EventgridEventSubscriptionSubjectFilter;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#timeouts EventgridEventSubscription#timeouts}
  */
  readonly timeouts?: EventgridEventSubscriptionTimeouts;
  /**
  * webhook_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#webhook_endpoint EventgridEventSubscription#webhook_endpoint}
  */
  readonly webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint;
}
export interface EventgridEventSubscriptionAdvancedFilterBoolEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterBoolEquals): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNotNull): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberIn): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberInRange): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThan): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotIn): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringContains): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringEndsWith): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringIn): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotContains): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotIn): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#bool_equals EventgridEventSubscription#bool_equals}
  */
  readonly boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[];
  /**
  * is_not_null block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#is_not_null EventgridEventSubscription#is_not_null}
  */
  readonly isNotNull?: EventgridEventSubscriptionAdvancedFilterIsNotNull[];
  /**
  * is_null_or_undefined block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}
  */
  readonly isNullOrUndefined?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[];
  /**
  * number_greater_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_greater_than EventgridEventSubscription#number_greater_than}
  */
  readonly numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
  /**
  * number_greater_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}
  */
  readonly numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
  /**
  * number_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_in EventgridEventSubscription#number_in}
  */
  readonly numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[];
  /**
  * number_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_in_range EventgridEventSubscription#number_in_range}
  */
  readonly numberInRange?: EventgridEventSubscriptionAdvancedFilterNumberInRange[];
  /**
  * number_less_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_less_than EventgridEventSubscription#number_less_than}
  */
  readonly numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
  /**
  * number_less_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}
  */
  readonly numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
  /**
  * number_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_not_in EventgridEventSubscription#number_not_in}
  */
  readonly numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
  /**
  * number_not_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#number_not_in_range EventgridEventSubscription#number_not_in_range}
  */
  readonly numberNotInRange?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[];
  /**
  * string_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_begins_with EventgridEventSubscription#string_begins_with}
  */
  readonly stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
  /**
  * string_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_contains EventgridEventSubscription#string_contains}
  */
  readonly stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[];
  /**
  * string_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_ends_with EventgridEventSubscription#string_ends_with}
  */
  readonly stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
  /**
  * string_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_in EventgridEventSubscription#string_in}
  */
  readonly stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[];
  /**
  * string_not_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_not_begins_with EventgridEventSubscription#string_not_begins_with}
  */
  readonly stringNotBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[];
  /**
  * string_not_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_not_contains EventgridEventSubscription#string_not_contains}
  */
  readonly stringNotContains?: EventgridEventSubscriptionAdvancedFilterStringNotContains[];
  /**
  * string_not_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_not_ends_with EventgridEventSubscription#string_not_ends_with}
  */
  readonly stringNotEndsWith?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[];
  /**
  * string_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#string_not_in EventgridEventSubscription#string_not_in}
  */
  readonly stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[];
}

export function eventgridEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterOutputReference | EventgridEventSubscriptionAdvancedFilter): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionAdvancedFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolEquals = this._boolEquals;
    }
    if (this._isNotNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNotNull = this._isNotNull;
    }
    if (this._isNullOrUndefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullOrUndefined = this._isNullOrUndefined;
    }
    if (this._numberGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberGreaterThan = this._numberGreaterThan;
    }
    if (this._numberGreaterThanOrEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberGreaterThanOrEquals = this._numberGreaterThanOrEquals;
    }
    if (this._numberIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberIn = this._numberIn;
    }
    if (this._numberInRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberInRange = this._numberInRange;
    }
    if (this._numberLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberLessThan = this._numberLessThan;
    }
    if (this._numberLessThanOrEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberLessThanOrEquals = this._numberLessThanOrEquals;
    }
    if (this._numberNotIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberNotIn = this._numberNotIn;
    }
    if (this._numberNotInRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberNotInRange = this._numberNotInRange;
    }
    if (this._stringBeginsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringBeginsWith = this._stringBeginsWith;
    }
    if (this._stringContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringContains = this._stringContains;
    }
    if (this._stringEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEndsWith = this._stringEndsWith;
    }
    if (this._stringIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringIn = this._stringIn;
    }
    if (this._stringNotBeginsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotBeginsWith = this._stringNotBeginsWith;
    }
    if (this._stringNotContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotContains = this._stringNotContains;
    }
    if (this._stringNotEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEndsWith = this._stringNotEndsWith;
    }
    if (this._stringNotIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotIn = this._stringNotIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boolEquals = undefined;
      this._isNotNull = undefined;
      this._isNullOrUndefined = undefined;
      this._numberGreaterThan = undefined;
      this._numberGreaterThanOrEquals = undefined;
      this._numberIn = undefined;
      this._numberInRange = undefined;
      this._numberLessThan = undefined;
      this._numberLessThanOrEquals = undefined;
      this._numberNotIn = undefined;
      this._numberNotInRange = undefined;
      this._stringBeginsWith = undefined;
      this._stringContains = undefined;
      this._stringEndsWith = undefined;
      this._stringIn = undefined;
      this._stringNotBeginsWith = undefined;
      this._stringNotContains = undefined;
      this._stringNotEndsWith = undefined;
      this._stringNotIn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boolEquals = value.boolEquals;
      this._isNotNull = value.isNotNull;
      this._isNullOrUndefined = value.isNullOrUndefined;
      this._numberGreaterThan = value.numberGreaterThan;
      this._numberGreaterThanOrEquals = value.numberGreaterThanOrEquals;
      this._numberIn = value.numberIn;
      this._numberInRange = value.numberInRange;
      this._numberLessThan = value.numberLessThan;
      this._numberLessThanOrEquals = value.numberLessThanOrEquals;
      this._numberNotIn = value.numberNotIn;
      this._numberNotInRange = value.numberNotInRange;
      this._stringBeginsWith = value.stringBeginsWith;
      this._stringContains = value.stringContains;
      this._stringEndsWith = value.stringEndsWith;
      this._stringIn = value.stringIn;
      this._stringNotBeginsWith = value.stringNotBeginsWith;
      this._stringNotContains = value.stringNotContains;
      this._stringNotEndsWith = value.stringNotEndsWith;
      this._stringNotIn = value.stringNotIn;
    }
  }

  // bool_equals - computed: false, optional: true, required: false
  private _boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[]; 
  public get boolEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bool_equals') as any;
  }
  public set boolEquals(value: EventgridEventSubscriptionAdvancedFilterBoolEquals[]) {
    this._boolEquals = value;
  }
  public resetBoolEquals() {
    this._boolEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolEqualsInput() {
    return this._boolEquals;
  }

  // is_not_null - computed: false, optional: true, required: false
  private _isNotNull?: EventgridEventSubscriptionAdvancedFilterIsNotNull[]; 
  public get isNotNull() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('is_not_null') as any;
  }
  public set isNotNull(value: EventgridEventSubscriptionAdvancedFilterIsNotNull[]) {
    this._isNotNull = value;
  }
  public resetIsNotNull() {
    this._isNotNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotNullInput() {
    return this._isNotNull;
  }

  // is_null_or_undefined - computed: false, optional: true, required: false
  private _isNullOrUndefined?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[]; 
  public get isNullOrUndefined() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('is_null_or_undefined') as any;
  }
  public set isNullOrUndefined(value: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[]) {
    this._isNullOrUndefined = value;
  }
  public resetIsNullOrUndefined() {
    this._isNullOrUndefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullOrUndefinedInput() {
    return this._isNullOrUndefined;
  }

  // number_greater_than - computed: false, optional: true, required: false
  private _numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[]; 
  public get numberGreaterThan() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_greater_than') as any;
  }
  public set numberGreaterThan(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[]) {
    this._numberGreaterThan = value;
  }
  public resetNumberGreaterThan() {
    this._numberGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberGreaterThanInput() {
    return this._numberGreaterThan;
  }

  // number_greater_than_or_equals - computed: false, optional: true, required: false
  private _numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[]; 
  public get numberGreaterThanOrEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_greater_than_or_equals') as any;
  }
  public set numberGreaterThanOrEquals(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[]) {
    this._numberGreaterThanOrEquals = value;
  }
  public resetNumberGreaterThanOrEquals() {
    this._numberGreaterThanOrEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberGreaterThanOrEqualsInput() {
    return this._numberGreaterThanOrEquals;
  }

  // number_in - computed: false, optional: true, required: false
  private _numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[]; 
  public get numberIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_in') as any;
  }
  public set numberIn(value: EventgridEventSubscriptionAdvancedFilterNumberIn[]) {
    this._numberIn = value;
  }
  public resetNumberIn() {
    this._numberIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInInput() {
    return this._numberIn;
  }

  // number_in_range - computed: false, optional: true, required: false
  private _numberInRange?: EventgridEventSubscriptionAdvancedFilterNumberInRange[]; 
  public get numberInRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_in_range') as any;
  }
  public set numberInRange(value: EventgridEventSubscriptionAdvancedFilterNumberInRange[]) {
    this._numberInRange = value;
  }
  public resetNumberInRange() {
    this._numberInRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInRangeInput() {
    return this._numberInRange;
  }

  // number_less_than - computed: false, optional: true, required: false
  private _numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[]; 
  public get numberLessThan() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_less_than') as any;
  }
  public set numberLessThan(value: EventgridEventSubscriptionAdvancedFilterNumberLessThan[]) {
    this._numberLessThan = value;
  }
  public resetNumberLessThan() {
    this._numberLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberLessThanInput() {
    return this._numberLessThan;
  }

  // number_less_than_or_equals - computed: false, optional: true, required: false
  private _numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[]; 
  public get numberLessThanOrEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_less_than_or_equals') as any;
  }
  public set numberLessThanOrEquals(value: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[]) {
    this._numberLessThanOrEquals = value;
  }
  public resetNumberLessThanOrEquals() {
    this._numberLessThanOrEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberLessThanOrEqualsInput() {
    return this._numberLessThanOrEquals;
  }

  // number_not_in - computed: false, optional: true, required: false
  private _numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[]; 
  public get numberNotIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_not_in') as any;
  }
  public set numberNotIn(value: EventgridEventSubscriptionAdvancedFilterNumberNotIn[]) {
    this._numberNotIn = value;
  }
  public resetNumberNotIn() {
    this._numberNotIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberNotInInput() {
    return this._numberNotIn;
  }

  // number_not_in_range - computed: false, optional: true, required: false
  private _numberNotInRange?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[]; 
  public get numberNotInRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_not_in_range') as any;
  }
  public set numberNotInRange(value: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[]) {
    this._numberNotInRange = value;
  }
  public resetNumberNotInRange() {
    this._numberNotInRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberNotInRangeInput() {
    return this._numberNotInRange;
  }

  // string_begins_with - computed: false, optional: true, required: false
  private _stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[]; 
  public get stringBeginsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_begins_with') as any;
  }
  public set stringBeginsWith(value: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[]) {
    this._stringBeginsWith = value;
  }
  public resetStringBeginsWith() {
    this._stringBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringBeginsWithInput() {
    return this._stringBeginsWith;
  }

  // string_contains - computed: false, optional: true, required: false
  private _stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[]; 
  public get stringContains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_contains') as any;
  }
  public set stringContains(value: EventgridEventSubscriptionAdvancedFilterStringContains[]) {
    this._stringContains = value;
  }
  public resetStringContains() {
    this._stringContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringContainsInput() {
    return this._stringContains;
  }

  // string_ends_with - computed: false, optional: true, required: false
  private _stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[]; 
  public get stringEndsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_ends_with') as any;
  }
  public set stringEndsWith(value: EventgridEventSubscriptionAdvancedFilterStringEndsWith[]) {
    this._stringEndsWith = value;
  }
  public resetStringEndsWith() {
    this._stringEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEndsWithInput() {
    return this._stringEndsWith;
  }

  // string_in - computed: false, optional: true, required: false
  private _stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[]; 
  public get stringIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_in') as any;
  }
  public set stringIn(value: EventgridEventSubscriptionAdvancedFilterStringIn[]) {
    this._stringIn = value;
  }
  public resetStringIn() {
    this._stringIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInInput() {
    return this._stringIn;
  }

  // string_not_begins_with - computed: false, optional: true, required: false
  private _stringNotBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[]; 
  public get stringNotBeginsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_begins_with') as any;
  }
  public set stringNotBeginsWith(value: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[]) {
    this._stringNotBeginsWith = value;
  }
  public resetStringNotBeginsWith() {
    this._stringNotBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotBeginsWithInput() {
    return this._stringNotBeginsWith;
  }

  // string_not_contains - computed: false, optional: true, required: false
  private _stringNotContains?: EventgridEventSubscriptionAdvancedFilterStringNotContains[]; 
  public get stringNotContains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_contains') as any;
  }
  public set stringNotContains(value: EventgridEventSubscriptionAdvancedFilterStringNotContains[]) {
    this._stringNotContains = value;
  }
  public resetStringNotContains() {
    this._stringNotContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotContainsInput() {
    return this._stringNotContains;
  }

  // string_not_ends_with - computed: false, optional: true, required: false
  private _stringNotEndsWith?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[]; 
  public get stringNotEndsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_ends_with') as any;
  }
  public set stringNotEndsWith(value: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[]) {
    this._stringNotEndsWith = value;
  }
  public resetStringNotEndsWith() {
    this._stringNotEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEndsWithInput() {
    return this._stringNotEndsWith;
  }

  // string_not_in - computed: false, optional: true, required: false
  private _stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[]; 
  public get stringNotIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_in') as any;
  }
  public set stringNotIn(value: EventgridEventSubscriptionAdvancedFilterStringNotIn[]) {
    this._stringNotIn = value;
  }
  public resetStringNotIn() {
    this._stringNotIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotInInput() {
    return this._stringNotIn;
  }
}
export interface EventgridEventSubscriptionAzureFunctionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
}

export function eventgridEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridEventSubscriptionAzureFunctionEndpointOutputReference | EventgridEventSubscriptionAzureFunctionEndpoint): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionAzureFunctionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._maxEventsPerBatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsPerBatch = this._maxEventsPerBatch;
    }
    if (this._preferredBatchSizeInKilobytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredBatchSizeInKilobytes = this._preferredBatchSizeInKilobytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionAzureFunctionEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionId = undefined;
      this._maxEventsPerBatch = undefined;
      this._preferredBatchSizeInKilobytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionId = value.functionId;
      this._maxEventsPerBatch = value.maxEventsPerBatch;
      this._preferredBatchSizeInKilobytes = value.preferredBatchSizeInKilobytes;
    }
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
    return this._functionId;
  }

  // max_events_per_batch - computed: false, optional: true, required: false
  private _maxEventsPerBatch?: number; 
  public get maxEventsPerBatch() {
    return this.getNumberAttribute('max_events_per_batch');
  }
  public set maxEventsPerBatch(value: number) {
    this._maxEventsPerBatch = value;
  }
  public resetMaxEventsPerBatch() {
    this._maxEventsPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsPerBatchInput() {
    return this._maxEventsPerBatch;
  }

  // preferred_batch_size_in_kilobytes - computed: false, optional: true, required: false
  private _preferredBatchSizeInKilobytes?: number; 
  public get preferredBatchSizeInKilobytes() {
    return this.getNumberAttribute('preferred_batch_size_in_kilobytes');
  }
  public set preferredBatchSizeInKilobytes(value: number) {
    this._preferredBatchSizeInKilobytes = value;
  }
  public resetPreferredBatchSizeInKilobytes() {
    this._preferredBatchSizeInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBatchSizeInKilobytesInput() {
    return this._preferredBatchSizeInKilobytes;
  }
}
export interface EventgridEventSubscriptionDeadLetterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridEventSubscriptionDeadLetterIdentityToTerraform(struct?: EventgridEventSubscriptionDeadLetterIdentityOutputReference | EventgridEventSubscriptionDeadLetterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}

export class EventgridEventSubscriptionDeadLetterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionDeadLetterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentity = this._userAssignedIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionDeadLetterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._userAssignedIdentity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._userAssignedIdentity = value.userAssignedIdentity;
    }
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
    return this._type;
  }

  // user_assigned_identity - computed: false, optional: true, required: false
  private _userAssignedIdentity?: string; 
  public get userAssignedIdentity() {
    return this.getStringAttribute('user_assigned_identity');
  }
  public set userAssignedIdentity(value: string) {
    this._userAssignedIdentity = value;
  }
  public resetUserAssignedIdentity() {
    this._userAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityInput() {
    return this._userAssignedIdentity;
  }
}
export interface EventgridEventSubscriptionDeliveryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridEventSubscriptionDeliveryIdentityToTerraform(struct?: EventgridEventSubscriptionDeliveryIdentityOutputReference | EventgridEventSubscriptionDeliveryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}

export class EventgridEventSubscriptionDeliveryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionDeliveryIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentity = this._userAssignedIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionDeliveryIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._userAssignedIdentity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._userAssignedIdentity = value.userAssignedIdentity;
    }
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
    return this._type;
  }

  // user_assigned_identity - computed: false, optional: true, required: false
  private _userAssignedIdentity?: string; 
  public get userAssignedIdentity() {
    return this.getStringAttribute('user_assigned_identity');
  }
  public set userAssignedIdentity(value: string) {
    this._userAssignedIdentity = value;
  }
  public resetUserAssignedIdentity() {
    this._userAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityInput() {
    return this._userAssignedIdentity;
  }
}
export interface EventgridEventSubscriptionDeliveryProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#secret EventgridEventSubscription#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}
  */
  readonly sourceField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value?: string;
}

export function eventgridEventSubscriptionDeliveryPropertyToTerraform(struct?: EventgridEventSubscriptionDeliveryProperty): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#eventhub_id EventgridEventSubscription#eventhub_id}
  */
  readonly eventhubId?: string;
}

export function eventgridEventSubscriptionEventhubEndpointToTerraform(struct?: EventgridEventSubscriptionEventhubEndpointOutputReference | EventgridEventSubscriptionEventhubEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eventhub_id: cdktf.stringToTerraform(struct!.eventhubId),
  }
}

export class EventgridEventSubscriptionEventhubEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionEventhubEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventhubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventhubId = this._eventhubId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionEventhubEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventhubId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventhubId = value.eventhubId;
    }
  }

  // eventhub_id - computed: true, optional: true, required: false
  private _eventhubId?: string; 
  public get eventhubId() {
    return this.getStringAttribute('eventhub_id');
  }
  public set eventhubId(value: string) {
    this._eventhubId = value;
  }
  public resetEventhubId() {
    this._eventhubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubIdInput() {
    return this._eventhubId;
  }
}
export interface EventgridEventSubscriptionHybridConnectionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#hybrid_connection_id EventgridEventSubscription#hybrid_connection_id}
  */
  readonly hybridConnectionId?: string;
}

export function eventgridEventSubscriptionHybridConnectionEndpointToTerraform(struct?: EventgridEventSubscriptionHybridConnectionEndpointOutputReference | EventgridEventSubscriptionHybridConnectionEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_connection_id: cdktf.stringToTerraform(struct!.hybridConnectionId),
  }
}

export class EventgridEventSubscriptionHybridConnectionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionHybridConnectionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hybridConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridConnectionId = this._hybridConnectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionHybridConnectionEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hybridConnectionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hybridConnectionId = value.hybridConnectionId;
    }
  }

  // hybrid_connection_id - computed: true, optional: true, required: false
  private _hybridConnectionId?: string; 
  public get hybridConnectionId() {
    return this.getStringAttribute('hybrid_connection_id');
  }
  public set hybridConnectionId(value: string) {
    this._hybridConnectionId = value;
  }
  public resetHybridConnectionId() {
    this._hybridConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionIdInput() {
    return this._hybridConnectionId;
  }
}
export interface EventgridEventSubscriptionRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}
  */
  readonly eventTimeToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts: number;
}

export function eventgridEventSubscriptionRetryPolicyToTerraform(struct?: EventgridEventSubscriptionRetryPolicyOutputReference | EventgridEventSubscriptionRetryPolicy): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimeToLive = this._eventTimeToLive;
    }
    if (this._maxDeliveryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryAttempts = this._maxDeliveryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventTimeToLive = undefined;
      this._maxDeliveryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventTimeToLive = value.eventTimeToLive;
      this._maxDeliveryAttempts = value.maxDeliveryAttempts;
    }
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
    return this._eventTimeToLive;
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
    return this._maxDeliveryAttempts;
  }
}
export interface EventgridEventSubscriptionStorageBlobDeadLetterDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}
  */
  readonly storageBlobContainerName: string;
}

export function eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridEventSubscriptionStorageBlobDeadLetterDestination): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionStorageBlobDeadLetterDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    if (this._storageBlobContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBlobContainerName = this._storageBlobContainerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAccountId = undefined;
      this._storageBlobContainerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAccountId = value.storageAccountId;
      this._storageBlobContainerName = value.storageBlobContainerName;
    }
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
    return this._storageAccountId;
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
    return this._storageBlobContainerName;
  }
}
export interface EventgridEventSubscriptionStorageQueueEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}
  */
  readonly queueMessageTimeToLiveInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function eventgridEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridEventSubscriptionStorageQueueEndpointOutputReference | EventgridEventSubscriptionStorageQueueEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_message_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.queueMessageTimeToLiveInSeconds),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export class EventgridEventSubscriptionStorageQueueEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionStorageQueueEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueMessageTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueMessageTimeToLiveInSeconds = this._queueMessageTimeToLiveInSeconds;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionStorageQueueEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueMessageTimeToLiveInSeconds = undefined;
      this._queueName = undefined;
      this._storageAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueMessageTimeToLiveInSeconds = value.queueMessageTimeToLiveInSeconds;
      this._queueName = value.queueName;
      this._storageAccountId = value.storageAccountId;
    }
  }

  // queue_message_time_to_live_in_seconds - computed: false, optional: true, required: false
  private _queueMessageTimeToLiveInSeconds?: number; 
  public get queueMessageTimeToLiveInSeconds() {
    return this.getNumberAttribute('queue_message_time_to_live_in_seconds');
  }
  public set queueMessageTimeToLiveInSeconds(value: number) {
    this._queueMessageTimeToLiveInSeconds = value;
  }
  public resetQueueMessageTimeToLiveInSeconds() {
    this._queueMessageTimeToLiveInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMessageTimeToLiveInSecondsInput() {
    return this._queueMessageTimeToLiveInSeconds;
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
    return this._queueName;
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
    return this._storageAccountId;
  }
}
export interface EventgridEventSubscriptionSubjectFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
}

export function eventgridEventSubscriptionSubjectFilterToTerraform(struct?: EventgridEventSubscriptionSubjectFilterOutputReference | EventgridEventSubscriptionSubjectFilter): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionSubjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._subjectBeginsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectBeginsWith = this._subjectBeginsWith;
    }
    if (this._subjectEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectEndsWith = this._subjectEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionSubjectFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._subjectBeginsWith = undefined;
      this._subjectEndsWith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._subjectBeginsWith = value.subjectBeginsWith;
      this._subjectEndsWith = value.subjectEndsWith;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive') as any;
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // subject_begins_with - computed: false, optional: true, required: false
  private _subjectBeginsWith?: string; 
  public get subjectBeginsWith() {
    return this.getStringAttribute('subject_begins_with');
  }
  public set subjectBeginsWith(value: string) {
    this._subjectBeginsWith = value;
  }
  public resetSubjectBeginsWith() {
    this._subjectBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectBeginsWithInput() {
    return this._subjectBeginsWith;
  }

  // subject_ends_with - computed: false, optional: true, required: false
  private _subjectEndsWith?: string; 
  public get subjectEndsWith() {
    return this.getStringAttribute('subject_ends_with');
  }
  public set subjectEndsWith(value: string) {
    this._subjectEndsWith = value;
  }
  public resetSubjectEndsWith() {
    this._subjectEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectEndsWithInput() {
    return this._subjectEndsWith;
  }
}
export interface EventgridEventSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#create EventgridEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#delete EventgridEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#read EventgridEventSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#update EventgridEventSubscription#update}
  */
  readonly update?: string;
}

export function eventgridEventSubscriptionTimeoutsToTerraform(struct?: EventgridEventSubscriptionTimeoutsOutputReference | EventgridEventSubscriptionTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface EventgridEventSubscriptionWebhookEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}
  */
  readonly activeDirectoryAppIdOrUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}
  */
  readonly activeDirectoryTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription#url EventgridEventSubscription#url}
  */
  readonly url: string;
}

export function eventgridEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridEventSubscriptionWebhookEndpointOutputReference | EventgridEventSubscriptionWebhookEndpoint): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridEventSubscriptionWebhookEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryAppIdOrUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryAppIdOrUri = this._activeDirectoryAppIdOrUri;
    }
    if (this._activeDirectoryTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryTenantId = this._activeDirectoryTenantId;
    }
    if (this._maxEventsPerBatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsPerBatch = this._maxEventsPerBatch;
    }
    if (this._preferredBatchSizeInKilobytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredBatchSizeInKilobytes = this._preferredBatchSizeInKilobytes;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridEventSubscriptionWebhookEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectoryAppIdOrUri = undefined;
      this._activeDirectoryTenantId = undefined;
      this._maxEventsPerBatch = undefined;
      this._preferredBatchSizeInKilobytes = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectoryAppIdOrUri = value.activeDirectoryAppIdOrUri;
      this._activeDirectoryTenantId = value.activeDirectoryTenantId;
      this._maxEventsPerBatch = value.maxEventsPerBatch;
      this._preferredBatchSizeInKilobytes = value.preferredBatchSizeInKilobytes;
      this._url = value.url;
    }
  }

  // active_directory_app_id_or_uri - computed: false, optional: true, required: false
  private _activeDirectoryAppIdOrUri?: string; 
  public get activeDirectoryAppIdOrUri() {
    return this.getStringAttribute('active_directory_app_id_or_uri');
  }
  public set activeDirectoryAppIdOrUri(value: string) {
    this._activeDirectoryAppIdOrUri = value;
  }
  public resetActiveDirectoryAppIdOrUri() {
    this._activeDirectoryAppIdOrUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAppIdOrUriInput() {
    return this._activeDirectoryAppIdOrUri;
  }

  // active_directory_tenant_id - computed: false, optional: true, required: false
  private _activeDirectoryTenantId?: string; 
  public get activeDirectoryTenantId() {
    return this.getStringAttribute('active_directory_tenant_id');
  }
  public set activeDirectoryTenantId(value: string) {
    this._activeDirectoryTenantId = value;
  }
  public resetActiveDirectoryTenantId() {
    this._activeDirectoryTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryTenantIdInput() {
    return this._activeDirectoryTenantId;
  }

  // max_events_per_batch - computed: false, optional: true, required: false
  private _maxEventsPerBatch?: number; 
  public get maxEventsPerBatch() {
    return this.getNumberAttribute('max_events_per_batch');
  }
  public set maxEventsPerBatch(value: number) {
    this._maxEventsPerBatch = value;
  }
  public resetMaxEventsPerBatch() {
    this._maxEventsPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsPerBatchInput() {
    return this._maxEventsPerBatch;
  }

  // preferred_batch_size_in_kilobytes - computed: false, optional: true, required: false
  private _preferredBatchSizeInKilobytes?: number; 
  public get preferredBatchSizeInKilobytes() {
    return this.getNumberAttribute('preferred_batch_size_in_kilobytes');
  }
  public set preferredBatchSizeInKilobytes(value: number) {
    this._preferredBatchSizeInKilobytes = value;
  }
  public resetPreferredBatchSizeInKilobytes() {
    this._preferredBatchSizeInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBatchSizeInKilobytesInput() {
    return this._preferredBatchSizeInKilobytes;
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
    return this._url;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription azurerm_eventgrid_event_subscription}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription azurerm_eventgrid_event_subscription} Resource
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
    this._advancedFilter.internalValue = config.advancedFilter;
    this._azureFunctionEndpoint.internalValue = config.azureFunctionEndpoint;
    this._deadLetterIdentity.internalValue = config.deadLetterIdentity;
    this._deliveryIdentity.internalValue = config.deliveryIdentity;
    this._deliveryProperty = config.deliveryProperty;
    this._eventhubEndpoint.internalValue = config.eventhubEndpoint;
    this._hybridConnectionEndpoint.internalValue = config.hybridConnectionEndpoint;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._storageBlobDeadLetterDestination.internalValue = config.storageBlobDeadLetterDestination;
    this._storageQueueEndpoint.internalValue = config.storageQueueEndpoint;
    this._subjectFilter.internalValue = config.subjectFilter;
    this._timeouts.internalValue = config.timeouts;
    this._webhookEndpoint.internalValue = config.webhookEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_filtering_on_arrays_enabled - computed: false, optional: true, required: false
  private _advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable; 
  public get advancedFilteringOnArraysEnabled() {
    return this.getBooleanAttribute('advanced_filtering_on_arrays_enabled') as any;
  }
  public set advancedFilteringOnArraysEnabled(value: boolean | cdktf.IResolvable) {
    this._advancedFilteringOnArraysEnabled = value;
  }
  public resetAdvancedFilteringOnArraysEnabled() {
    this._advancedFilteringOnArraysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilteringOnArraysEnabledInput() {
    return this._advancedFilteringOnArraysEnabled;
  }

  // event_delivery_schema - computed: false, optional: true, required: false
  private _eventDeliverySchema?: string; 
  public get eventDeliverySchema() {
    return this.getStringAttribute('event_delivery_schema');
  }
  public set eventDeliverySchema(value: string) {
    this._eventDeliverySchema = value;
  }
  public resetEventDeliverySchema() {
    this._eventDeliverySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliverySchemaInput() {
    return this._eventDeliverySchema;
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
    return this._eventhubEndpointId;
  }

  // expiration_time_utc - computed: false, optional: true, required: false
  private _expirationTimeUtc?: string; 
  public get expirationTimeUtc() {
    return this.getStringAttribute('expiration_time_utc');
  }
  public set expirationTimeUtc(value: string) {
    this._expirationTimeUtc = value;
  }
  public resetExpirationTimeUtc() {
    this._expirationTimeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUtcInput() {
    return this._expirationTimeUtc;
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
    return this._hybridConnectionEndpointId;
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
    return this._includedEventTypes;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._name;
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
    return this._scope;
  }

  // service_bus_queue_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusQueueEndpointId?: string; 
  public get serviceBusQueueEndpointId() {
    return this.getStringAttribute('service_bus_queue_endpoint_id');
  }
  public set serviceBusQueueEndpointId(value: string) {
    this._serviceBusQueueEndpointId = value;
  }
  public resetServiceBusQueueEndpointId() {
    this._serviceBusQueueEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusQueueEndpointIdInput() {
    return this._serviceBusQueueEndpointId;
  }

  // service_bus_topic_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusTopicEndpointId?: string; 
  public get serviceBusTopicEndpointId() {
    return this.getStringAttribute('service_bus_topic_endpoint_id');
  }
  public set serviceBusTopicEndpointId(value: string) {
    this._serviceBusTopicEndpointId = value;
  }
  public resetServiceBusTopicEndpointId() {
    this._serviceBusTopicEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusTopicEndpointIdInput() {
    return this._serviceBusTopicEndpointId;
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
    return this._topicName;
  }

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter = new EventgridEventSubscriptionAdvancedFilterOutputReference(this as any, "advanced_filter", true);
  public get advancedFilter() {
    return this._advancedFilter;
  }
  public putAdvancedFilter(value: EventgridEventSubscriptionAdvancedFilter) {
    this._advancedFilter.internalValue = value;
  }
  public resetAdvancedFilter() {
    this._advancedFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilterInput() {
    return this._advancedFilter.internalValue;
  }

  // azure_function_endpoint - computed: false, optional: true, required: false
  private _azureFunctionEndpoint = new EventgridEventSubscriptionAzureFunctionEndpointOutputReference(this as any, "azure_function_endpoint", true);
  public get azureFunctionEndpoint() {
    return this._azureFunctionEndpoint;
  }
  public putAzureFunctionEndpoint(value: EventgridEventSubscriptionAzureFunctionEndpoint) {
    this._azureFunctionEndpoint.internalValue = value;
  }
  public resetAzureFunctionEndpoint() {
    this._azureFunctionEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionEndpointInput() {
    return this._azureFunctionEndpoint.internalValue;
  }

  // dead_letter_identity - computed: false, optional: true, required: false
  private _deadLetterIdentity = new EventgridEventSubscriptionDeadLetterIdentityOutputReference(this as any, "dead_letter_identity", true);
  public get deadLetterIdentity() {
    return this._deadLetterIdentity;
  }
  public putDeadLetterIdentity(value: EventgridEventSubscriptionDeadLetterIdentity) {
    this._deadLetterIdentity.internalValue = value;
  }
  public resetDeadLetterIdentity() {
    this._deadLetterIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterIdentityInput() {
    return this._deadLetterIdentity.internalValue;
  }

  // delivery_identity - computed: false, optional: true, required: false
  private _deliveryIdentity = new EventgridEventSubscriptionDeliveryIdentityOutputReference(this as any, "delivery_identity", true);
  public get deliveryIdentity() {
    return this._deliveryIdentity;
  }
  public putDeliveryIdentity(value: EventgridEventSubscriptionDeliveryIdentity) {
    this._deliveryIdentity.internalValue = value;
  }
  public resetDeliveryIdentity() {
    this._deliveryIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryIdentityInput() {
    return this._deliveryIdentity.internalValue;
  }

  // delivery_property - computed: false, optional: true, required: false
  private _deliveryProperty?: EventgridEventSubscriptionDeliveryProperty[]; 
  public get deliveryProperty() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('delivery_property') as any;
  }
  public set deliveryProperty(value: EventgridEventSubscriptionDeliveryProperty[]) {
    this._deliveryProperty = value;
  }
  public resetDeliveryProperty() {
    this._deliveryProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPropertyInput() {
    return this._deliveryProperty;
  }

  // eventhub_endpoint - computed: false, optional: true, required: false
  private _eventhubEndpoint = new EventgridEventSubscriptionEventhubEndpointOutputReference(this as any, "eventhub_endpoint", true);
  public get eventhubEndpoint() {
    return this._eventhubEndpoint;
  }
  public putEventhubEndpoint(value: EventgridEventSubscriptionEventhubEndpoint) {
    this._eventhubEndpoint.internalValue = value;
  }
  public resetEventhubEndpoint() {
    this._eventhubEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointInput() {
    return this._eventhubEndpoint.internalValue;
  }

  // hybrid_connection_endpoint - computed: false, optional: true, required: false
  private _hybridConnectionEndpoint = new EventgridEventSubscriptionHybridConnectionEndpointOutputReference(this as any, "hybrid_connection_endpoint", true);
  public get hybridConnectionEndpoint() {
    return this._hybridConnectionEndpoint;
  }
  public putHybridConnectionEndpoint(value: EventgridEventSubscriptionHybridConnectionEndpoint) {
    this._hybridConnectionEndpoint.internalValue = value;
  }
  public resetHybridConnectionEndpoint() {
    this._hybridConnectionEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionEndpointInput() {
    return this._hybridConnectionEndpoint.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new EventgridEventSubscriptionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: EventgridEventSubscriptionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // storage_blob_dead_letter_destination - computed: false, optional: true, required: false
  private _storageBlobDeadLetterDestination = new EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(this as any, "storage_blob_dead_letter_destination", true);
  public get storageBlobDeadLetterDestination() {
    return this._storageBlobDeadLetterDestination;
  }
  public putStorageBlobDeadLetterDestination(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination) {
    this._storageBlobDeadLetterDestination.internalValue = value;
  }
  public resetStorageBlobDeadLetterDestination() {
    this._storageBlobDeadLetterDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobDeadLetterDestinationInput() {
    return this._storageBlobDeadLetterDestination.internalValue;
  }

  // storage_queue_endpoint - computed: false, optional: true, required: false
  private _storageQueueEndpoint = new EventgridEventSubscriptionStorageQueueEndpointOutputReference(this as any, "storage_queue_endpoint", true);
  public get storageQueueEndpoint() {
    return this._storageQueueEndpoint;
  }
  public putStorageQueueEndpoint(value: EventgridEventSubscriptionStorageQueueEndpoint) {
    this._storageQueueEndpoint.internalValue = value;
  }
  public resetStorageQueueEndpoint() {
    this._storageQueueEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQueueEndpointInput() {
    return this._storageQueueEndpoint.internalValue;
  }

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter = new EventgridEventSubscriptionSubjectFilterOutputReference(this as any, "subject_filter", true);
  public get subjectFilter() {
    return this._subjectFilter;
  }
  public putSubjectFilter(value: EventgridEventSubscriptionSubjectFilter) {
    this._subjectFilter.internalValue = value;
  }
  public resetSubjectFilter() {
    this._subjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFilterInput() {
    return this._subjectFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventgridEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventgridEventSubscriptionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // webhook_endpoint - computed: false, optional: true, required: false
  private _webhookEndpoint = new EventgridEventSubscriptionWebhookEndpointOutputReference(this as any, "webhook_endpoint", true);
  public get webhookEndpoint() {
    return this._webhookEndpoint;
  }
  public putWebhookEndpoint(value: EventgridEventSubscriptionWebhookEndpoint) {
    this._webhookEndpoint.internalValue = value;
  }
  public resetWebhookEndpoint() {
    this._webhookEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEndpointInput() {
    return this._webhookEndpoint.internalValue;
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
      advanced_filter: eventgridEventSubscriptionAdvancedFilterToTerraform(this._advancedFilter.internalValue),
      azure_function_endpoint: eventgridEventSubscriptionAzureFunctionEndpointToTerraform(this._azureFunctionEndpoint.internalValue),
      dead_letter_identity: eventgridEventSubscriptionDeadLetterIdentityToTerraform(this._deadLetterIdentity.internalValue),
      delivery_identity: eventgridEventSubscriptionDeliveryIdentityToTerraform(this._deliveryIdentity.internalValue),
      delivery_property: cdktf.listMapper(eventgridEventSubscriptionDeliveryPropertyToTerraform)(this._deliveryProperty),
      eventhub_endpoint: eventgridEventSubscriptionEventhubEndpointToTerraform(this._eventhubEndpoint.internalValue),
      hybrid_connection_endpoint: eventgridEventSubscriptionHybridConnectionEndpointToTerraform(this._hybridConnectionEndpoint.internalValue),
      retry_policy: eventgridEventSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      storage_blob_dead_letter_destination: eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(this._storageBlobDeadLetterDestination.internalValue),
      storage_queue_endpoint: eventgridEventSubscriptionStorageQueueEndpointToTerraform(this._storageQueueEndpoint.internalValue),
      subject_filter: eventgridEventSubscriptionSubjectFilterToTerraform(this._subjectFilter.internalValue),
      timeouts: eventgridEventSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
      webhook_endpoint: eventgridEventSubscriptionWebhookEndpointToTerraform(this._webhookEndpoint.internalValue),
    };
  }
}
