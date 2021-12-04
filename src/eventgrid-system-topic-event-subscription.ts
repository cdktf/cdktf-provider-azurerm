// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridSystemTopicEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#advanced_filtering_on_arrays_enabled EventgridSystemTopicEventSubscription#advanced_filtering_on_arrays_enabled}
  */
  readonly advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#event_delivery_schema EventgridSystemTopicEventSubscription#event_delivery_schema}
  */
  readonly eventDeliverySchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#eventhub_endpoint_id EventgridSystemTopicEventSubscription#eventhub_endpoint_id}
  */
  readonly eventhubEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#expiration_time_utc EventgridSystemTopicEventSubscription#expiration_time_utc}
  */
  readonly expirationTimeUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#hybrid_connection_endpoint_id EventgridSystemTopicEventSubscription#hybrid_connection_endpoint_id}
  */
  readonly hybridConnectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#included_event_types EventgridSystemTopicEventSubscription#included_event_types}
  */
  readonly includedEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#labels EventgridSystemTopicEventSubscription#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#name EventgridSystemTopicEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#resource_group_name EventgridSystemTopicEventSubscription#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#service_bus_queue_endpoint_id EventgridSystemTopicEventSubscription#service_bus_queue_endpoint_id}
  */
  readonly serviceBusQueueEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#service_bus_topic_endpoint_id EventgridSystemTopicEventSubscription#service_bus_topic_endpoint_id}
  */
  readonly serviceBusTopicEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#system_topic EventgridSystemTopicEventSubscription#system_topic}
  */
  readonly systemTopic: string;
  /**
  * advanced_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#advanced_filter EventgridSystemTopicEventSubscription#advanced_filter}
  */
  readonly advancedFilter?: EventgridSystemTopicEventSubscriptionAdvancedFilter;
  /**
  * azure_function_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#azure_function_endpoint EventgridSystemTopicEventSubscription#azure_function_endpoint}
  */
  readonly azureFunctionEndpoint?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint;
  /**
  * dead_letter_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#dead_letter_identity EventgridSystemTopicEventSubscription#dead_letter_identity}
  */
  readonly deadLetterIdentity?: EventgridSystemTopicEventSubscriptionDeadLetterIdentity;
  /**
  * delivery_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#delivery_identity EventgridSystemTopicEventSubscription#delivery_identity}
  */
  readonly deliveryIdentity?: EventgridSystemTopicEventSubscriptionDeliveryIdentity;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#retry_policy EventgridSystemTopicEventSubscription#retry_policy}
  */
  readonly retryPolicy?: EventgridSystemTopicEventSubscriptionRetryPolicy;
  /**
  * storage_blob_dead_letter_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#storage_blob_dead_letter_destination EventgridSystemTopicEventSubscription#storage_blob_dead_letter_destination}
  */
  readonly storageBlobDeadLetterDestination?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination;
  /**
  * storage_queue_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#storage_queue_endpoint EventgridSystemTopicEventSubscription#storage_queue_endpoint}
  */
  readonly storageQueueEndpoint?: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint;
  /**
  * subject_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#subject_filter EventgridSystemTopicEventSubscription#subject_filter}
  */
  readonly subjectFilter?: EventgridSystemTopicEventSubscriptionSubjectFilter;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#timeouts EventgridSystemTopicEventSubscription#timeouts}
  */
  readonly timeouts?: EventgridSystemTopicEventSubscriptionTimeouts;
  /**
  * webhook_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#webhook_endpoint EventgridSystemTopicEventSubscription#webhook_endpoint}
  */
  readonly webhookEndpoint?: EventgridSystemTopicEventSubscriptionWebhookEndpoint;
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridSystemTopicEventSubscriptionAdvancedFilter {
  /**
  * bool_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#bool_equals EventgridSystemTopicEventSubscription#bool_equals}
  */
  readonly boolEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[];
  /**
  * is_not_null block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#is_not_null EventgridSystemTopicEventSubscription#is_not_null}
  */
  readonly isNotNull?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull[];
  /**
  * is_null_or_undefined block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#is_null_or_undefined EventgridSystemTopicEventSubscription#is_null_or_undefined}
  */
  readonly isNullOrUndefined?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined[];
  /**
  * number_greater_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_greater_than EventgridSystemTopicEventSubscription#number_greater_than}
  */
  readonly numberGreaterThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[];
  /**
  * number_greater_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_greater_than_or_equals EventgridSystemTopicEventSubscription#number_greater_than_or_equals}
  */
  readonly numberGreaterThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
  /**
  * number_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_in EventgridSystemTopicEventSubscription#number_in}
  */
  readonly numberIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[];
  /**
  * number_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_in_range EventgridSystemTopicEventSubscription#number_in_range}
  */
  readonly numberInRange?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange[];
  /**
  * number_less_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_less_than EventgridSystemTopicEventSubscription#number_less_than}
  */
  readonly numberLessThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[];
  /**
  * number_less_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_less_than_or_equals EventgridSystemTopicEventSubscription#number_less_than_or_equals}
  */
  readonly numberLessThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
  /**
  * number_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_not_in EventgridSystemTopicEventSubscription#number_not_in}
  */
  readonly numberNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[];
  /**
  * number_not_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#number_not_in_range EventgridSystemTopicEventSubscription#number_not_in_range}
  */
  readonly numberNotInRange?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange[];
  /**
  * string_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_begins_with EventgridSystemTopicEventSubscription#string_begins_with}
  */
  readonly stringBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[];
  /**
  * string_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_contains EventgridSystemTopicEventSubscription#string_contains}
  */
  readonly stringContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[];
  /**
  * string_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_ends_with EventgridSystemTopicEventSubscription#string_ends_with}
  */
  readonly stringEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[];
  /**
  * string_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_in EventgridSystemTopicEventSubscription#string_in}
  */
  readonly stringIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[];
  /**
  * string_not_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_not_begins_with EventgridSystemTopicEventSubscription#string_not_begins_with}
  */
  readonly stringNotBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith[];
  /**
  * string_not_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_not_contains EventgridSystemTopicEventSubscription#string_not_contains}
  */
  readonly stringNotContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains[];
  /**
  * string_not_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_not_ends_with EventgridSystemTopicEventSubscription#string_not_ends_with}
  */
  readonly stringNotEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith[];
  /**
  * string_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#string_not_in EventgridSystemTopicEventSubscription#string_not_in}
  */
  readonly stringNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference | EventgridSystemTopicEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToTerraform)(struct!.boolEquals),
    is_not_null: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullToTerraform)(struct!.isNotNull),
    is_null_or_undefined: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform)(struct!.isNullOrUndefined),
    number_greater_than: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform)(struct!.numberGreaterThan),
    number_greater_than_or_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform)(struct!.numberGreaterThanOrEquals),
    number_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToTerraform)(struct!.numberIn),
    number_in_range: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeToTerraform)(struct!.numberInRange),
    number_less_than: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToTerraform)(struct!.numberLessThan),
    number_less_than_or_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform)(struct!.numberLessThanOrEquals),
    number_not_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToTerraform)(struct!.numberNotIn),
    number_not_in_range: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform)(struct!.numberNotInRange),
    string_begins_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToTerraform)(struct!.stringBeginsWith),
    string_contains: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToTerraform)(struct!.stringContains),
    string_ends_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToTerraform)(struct!.stringEndsWith),
    string_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToTerraform)(struct!.stringIn),
    string_not_begins_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform)(struct!.stringNotBeginsWith),
    string_not_contains: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsToTerraform)(struct!.stringNotContains),
    string_not_ends_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform)(struct!.stringNotEndsWith),
    string_not_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToTerraform)(struct!.stringNotIn),
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolEquals) {
      hasAnyValues = true;
      internalValueResult.boolEquals = this._boolEquals;
    }
    if (this._isNotNull) {
      hasAnyValues = true;
      internalValueResult.isNotNull = this._isNotNull;
    }
    if (this._isNullOrUndefined) {
      hasAnyValues = true;
      internalValueResult.isNullOrUndefined = this._isNullOrUndefined;
    }
    if (this._numberGreaterThan) {
      hasAnyValues = true;
      internalValueResult.numberGreaterThan = this._numberGreaterThan;
    }
    if (this._numberGreaterThanOrEquals) {
      hasAnyValues = true;
      internalValueResult.numberGreaterThanOrEquals = this._numberGreaterThanOrEquals;
    }
    if (this._numberIn) {
      hasAnyValues = true;
      internalValueResult.numberIn = this._numberIn;
    }
    if (this._numberInRange) {
      hasAnyValues = true;
      internalValueResult.numberInRange = this._numberInRange;
    }
    if (this._numberLessThan) {
      hasAnyValues = true;
      internalValueResult.numberLessThan = this._numberLessThan;
    }
    if (this._numberLessThanOrEquals) {
      hasAnyValues = true;
      internalValueResult.numberLessThanOrEquals = this._numberLessThanOrEquals;
    }
    if (this._numberNotIn) {
      hasAnyValues = true;
      internalValueResult.numberNotIn = this._numberNotIn;
    }
    if (this._numberNotInRange) {
      hasAnyValues = true;
      internalValueResult.numberNotInRange = this._numberNotInRange;
    }
    if (this._stringBeginsWith) {
      hasAnyValues = true;
      internalValueResult.stringBeginsWith = this._stringBeginsWith;
    }
    if (this._stringContains) {
      hasAnyValues = true;
      internalValueResult.stringContains = this._stringContains;
    }
    if (this._stringEndsWith) {
      hasAnyValues = true;
      internalValueResult.stringEndsWith = this._stringEndsWith;
    }
    if (this._stringIn) {
      hasAnyValues = true;
      internalValueResult.stringIn = this._stringIn;
    }
    if (this._stringNotBeginsWith) {
      hasAnyValues = true;
      internalValueResult.stringNotBeginsWith = this._stringNotBeginsWith;
    }
    if (this._stringNotContains) {
      hasAnyValues = true;
      internalValueResult.stringNotContains = this._stringNotContains;
    }
    if (this._stringNotEndsWith) {
      hasAnyValues = true;
      internalValueResult.stringNotEndsWith = this._stringNotEndsWith;
    }
    if (this._stringNotIn) {
      hasAnyValues = true;
      internalValueResult.stringNotIn = this._stringNotIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilter | undefined) {
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
  private _boolEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[]; 
  public get boolEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bool_equals') as any;
  }
  public set boolEquals(value: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[]) {
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
  private _isNotNull?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull[]; 
  public get isNotNull() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('is_not_null') as any;
  }
  public set isNotNull(value: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull[]) {
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
  private _isNullOrUndefined?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined[]; 
  public get isNullOrUndefined() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('is_null_or_undefined') as any;
  }
  public set isNullOrUndefined(value: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined[]) {
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
  private _numberGreaterThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[]; 
  public get numberGreaterThan() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_greater_than') as any;
  }
  public set numberGreaterThan(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[]) {
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
  private _numberGreaterThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[]; 
  public get numberGreaterThanOrEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_greater_than_or_equals') as any;
  }
  public set numberGreaterThanOrEquals(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[]) {
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
  private _numberIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[]; 
  public get numberIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_in') as any;
  }
  public set numberIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[]) {
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
  private _numberInRange?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange[]; 
  public get numberInRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_in_range') as any;
  }
  public set numberInRange(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange[]) {
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
  private _numberLessThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[]; 
  public get numberLessThan() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_less_than') as any;
  }
  public set numberLessThan(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[]) {
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
  private _numberLessThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[]; 
  public get numberLessThanOrEquals() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_less_than_or_equals') as any;
  }
  public set numberLessThanOrEquals(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[]) {
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
  private _numberNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[]; 
  public get numberNotIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_not_in') as any;
  }
  public set numberNotIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[]) {
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
  private _numberNotInRange?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange[]; 
  public get numberNotInRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('number_not_in_range') as any;
  }
  public set numberNotInRange(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange[]) {
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
  private _stringBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[]; 
  public get stringBeginsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_begins_with') as any;
  }
  public set stringBeginsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[]) {
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
  private _stringContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[]; 
  public get stringContains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_contains') as any;
  }
  public set stringContains(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[]) {
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
  private _stringEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[]; 
  public get stringEndsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_ends_with') as any;
  }
  public set stringEndsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[]) {
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
  private _stringIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[]; 
  public get stringIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_in') as any;
  }
  public set stringIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[]) {
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
  private _stringNotBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith[]; 
  public get stringNotBeginsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_begins_with') as any;
  }
  public set stringNotBeginsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith[]) {
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
  private _stringNotContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains[]; 
  public get stringNotContains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_contains') as any;
  }
  public set stringNotContains(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains[]) {
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
  private _stringNotEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith[]; 
  public get stringNotEndsWith() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_ends_with') as any;
  }
  public set stringNotEndsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith[]) {
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
  private _stringNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[]; 
  public get stringNotIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('string_not_in') as any;
  }
  public set stringNotIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[]) {
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
export interface EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#function_id EventgridSystemTopicEventSubscription#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
}

export function eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference | EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint): any {
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

export class EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionId) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._maxEventsPerBatch) {
      hasAnyValues = true;
      internalValueResult.maxEventsPerBatch = this._maxEventsPerBatch;
    }
    if (this._preferredBatchSizeInKilobytes) {
      hasAnyValues = true;
      internalValueResult.preferredBatchSizeInKilobytes = this._preferredBatchSizeInKilobytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionDeadLetterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#type EventgridSystemTopicEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridSystemTopicEventSubscriptionDeadLetterIdentityToTerraform(struct?: EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference | EventgridSystemTopicEventSubscriptionDeadLetterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}

export class EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionDeadLetterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentity) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentity = this._userAssignedIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionDeadLetterIdentity | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionDeliveryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#type EventgridSystemTopicEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridSystemTopicEventSubscriptionDeliveryIdentityToTerraform(struct?: EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference | EventgridSystemTopicEventSubscriptionDeliveryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}

export class EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionDeliveryIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentity) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentity = this._userAssignedIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionDeliveryIdentity | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#event_time_to_live EventgridSystemTopicEventSubscription#event_time_to_live}
  */
  readonly eventTimeToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#max_delivery_attempts EventgridSystemTopicEventSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts: number;
}

export function eventgridSystemTopicEventSubscriptionRetryPolicyToTerraform(struct?: EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference | EventgridSystemTopicEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_time_to_live: cdktf.numberToTerraform(struct!.eventTimeToLive),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}

export class EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTimeToLive) {
      hasAnyValues = true;
      internalValueResult.eventTimeToLive = this._eventTimeToLive;
    }
    if (this._maxDeliveryAttempts) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryAttempts = this._maxDeliveryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionRetryPolicy | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#storage_blob_container_name EventgridSystemTopicEventSubscription#storage_blob_container_name}
  */
  readonly storageBlobContainerName: string;
}

export function eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_blob_container_name: cdktf.stringToTerraform(struct!.storageBlobContainerName),
  }
}

export class EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountId) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    if (this._storageBlobContainerName) {
      hasAnyValues = true;
      internalValueResult.storageBlobContainerName = this._storageBlobContainerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionStorageQueueEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#queue_message_time_to_live_in_seconds EventgridSystemTopicEventSubscription#queue_message_time_to_live_in_seconds}
  */
  readonly queueMessageTimeToLiveInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#queue_name EventgridSystemTopicEventSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function eventgridSystemTopicEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference | EventgridSystemTopicEventSubscriptionStorageQueueEndpoint): any {
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

export class EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionStorageQueueEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueMessageTimeToLiveInSeconds) {
      hasAnyValues = true;
      internalValueResult.queueMessageTimeToLiveInSeconds = this._queueMessageTimeToLiveInSeconds;
    }
    if (this._queueName) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._storageAccountId) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionSubjectFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#case_sensitive EventgridSystemTopicEventSubscription#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#subject_begins_with EventgridSystemTopicEventSubscription#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#subject_ends_with EventgridSystemTopicEventSubscription#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
}

export function eventgridSystemTopicEventSubscriptionSubjectFilterToTerraform(struct?: EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference | EventgridSystemTopicEventSubscriptionSubjectFilter): any {
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

export class EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionSubjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._subjectBeginsWith) {
      hasAnyValues = true;
      internalValueResult.subjectBeginsWith = this._subjectBeginsWith;
    }
    if (this._subjectEndsWith) {
      hasAnyValues = true;
      internalValueResult.subjectEndsWith = this._subjectEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionSubjectFilter | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#create EventgridSystemTopicEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#delete EventgridSystemTopicEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#read EventgridSystemTopicEventSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#update EventgridSystemTopicEventSubscription#update}
  */
  readonly update?: string;
}

export function eventgridSystemTopicEventSubscriptionTimeoutsToTerraform(struct?: EventgridSystemTopicEventSubscriptionTimeoutsOutputReference | EventgridSystemTopicEventSubscriptionTimeouts): any {
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

export class EventgridSystemTopicEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionTimeouts | undefined) {
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
export interface EventgridSystemTopicEventSubscriptionWebhookEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#active_directory_app_id_or_uri EventgridSystemTopicEventSubscription#active_directory_app_id_or_uri}
  */
  readonly activeDirectoryAppIdOrUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#active_directory_tenant_id EventgridSystemTopicEventSubscription#active_directory_tenant_id}
  */
  readonly activeDirectoryTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html#url EventgridSystemTopicEventSubscription#url}
  */
  readonly url: string;
}

export function eventgridSystemTopicEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference | EventgridSystemTopicEventSubscriptionWebhookEndpoint): any {
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

export class EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionWebhookEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryAppIdOrUri) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryAppIdOrUri = this._activeDirectoryAppIdOrUri;
    }
    if (this._activeDirectoryTenantId) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryTenantId = this._activeDirectoryTenantId;
    }
    if (this._maxEventsPerBatch) {
      hasAnyValues = true;
      internalValueResult.maxEventsPerBatch = this._maxEventsPerBatch;
    }
    if (this._preferredBatchSizeInKilobytes) {
      hasAnyValues = true;
      internalValueResult.preferredBatchSizeInKilobytes = this._preferredBatchSizeInKilobytes;
    }
    if (this._url) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionWebhookEndpoint | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html azurerm_eventgrid_system_topic_event_subscription}
*/
export class EventgridSystemTopicEventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventgrid_system_topic_event_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic_event_subscription.html azurerm_eventgrid_system_topic_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridSystemTopicEventSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridSystemTopicEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_system_topic_event_subscription',
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
    this._resourceGroupName = config.resourceGroupName;
    this._serviceBusQueueEndpointId = config.serviceBusQueueEndpointId;
    this._serviceBusTopicEndpointId = config.serviceBusTopicEndpointId;
    this._systemTopic = config.systemTopic;
    this._advancedFilter.internalValue = config.advancedFilter;
    this._azureFunctionEndpoint.internalValue = config.azureFunctionEndpoint;
    this._deadLetterIdentity.internalValue = config.deadLetterIdentity;
    this._deliveryIdentity.internalValue = config.deliveryIdentity;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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

  // system_topic - computed: false, optional: false, required: true
  private _systemTopic?: string; 
  public get systemTopic() {
    return this.getStringAttribute('system_topic');
  }
  public set systemTopic(value: string) {
    this._systemTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTopicInput() {
    return this._systemTopic;
  }

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter = new EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference(this as any, "advanced_filter", true);
  public get advancedFilter() {
    return this._advancedFilter;
  }
  public putAdvancedFilter(value: EventgridSystemTopicEventSubscriptionAdvancedFilter) {
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
  private _azureFunctionEndpoint = new EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference(this as any, "azure_function_endpoint", true);
  public get azureFunctionEndpoint() {
    return this._azureFunctionEndpoint;
  }
  public putAzureFunctionEndpoint(value: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint) {
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
  private _deadLetterIdentity = new EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference(this as any, "dead_letter_identity", true);
  public get deadLetterIdentity() {
    return this._deadLetterIdentity;
  }
  public putDeadLetterIdentity(value: EventgridSystemTopicEventSubscriptionDeadLetterIdentity) {
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
  private _deliveryIdentity = new EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference(this as any, "delivery_identity", true);
  public get deliveryIdentity() {
    return this._deliveryIdentity;
  }
  public putDeliveryIdentity(value: EventgridSystemTopicEventSubscriptionDeliveryIdentity) {
    this._deliveryIdentity.internalValue = value;
  }
  public resetDeliveryIdentity() {
    this._deliveryIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryIdentityInput() {
    return this._deliveryIdentity.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: EventgridSystemTopicEventSubscriptionRetryPolicy) {
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
  private _storageBlobDeadLetterDestination = new EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(this as any, "storage_blob_dead_letter_destination", true);
  public get storageBlobDeadLetterDestination() {
    return this._storageBlobDeadLetterDestination;
  }
  public putStorageBlobDeadLetterDestination(value: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination) {
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
  private _storageQueueEndpoint = new EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference(this as any, "storage_queue_endpoint", true);
  public get storageQueueEndpoint() {
    return this._storageQueueEndpoint;
  }
  public putStorageQueueEndpoint(value: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint) {
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
  private _subjectFilter = new EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference(this as any, "subject_filter", true);
  public get subjectFilter() {
    return this._subjectFilter;
  }
  public putSubjectFilter(value: EventgridSystemTopicEventSubscriptionSubjectFilter) {
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
  private _timeouts = new EventgridSystemTopicEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventgridSystemTopicEventSubscriptionTimeouts) {
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
  private _webhookEndpoint = new EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference(this as any, "webhook_endpoint", true);
  public get webhookEndpoint() {
    return this._webhookEndpoint;
  }
  public putWebhookEndpoint(value: EventgridSystemTopicEventSubscriptionWebhookEndpoint) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_bus_queue_endpoint_id: cdktf.stringToTerraform(this._serviceBusQueueEndpointId),
      service_bus_topic_endpoint_id: cdktf.stringToTerraform(this._serviceBusTopicEndpointId),
      system_topic: cdktf.stringToTerraform(this._systemTopic),
      advanced_filter: eventgridSystemTopicEventSubscriptionAdvancedFilterToTerraform(this._advancedFilter.internalValue),
      azure_function_endpoint: eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToTerraform(this._azureFunctionEndpoint.internalValue),
      dead_letter_identity: eventgridSystemTopicEventSubscriptionDeadLetterIdentityToTerraform(this._deadLetterIdentity.internalValue),
      delivery_identity: eventgridSystemTopicEventSubscriptionDeliveryIdentityToTerraform(this._deliveryIdentity.internalValue),
      retry_policy: eventgridSystemTopicEventSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      storage_blob_dead_letter_destination: eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(this._storageBlobDeadLetterDestination.internalValue),
      storage_queue_endpoint: eventgridSystemTopicEventSubscriptionStorageQueueEndpointToTerraform(this._storageQueueEndpoint.internalValue),
      subject_filter: eventgridSystemTopicEventSubscriptionSubjectFilterToTerraform(this._subjectFilter.internalValue),
      timeouts: eventgridSystemTopicEventSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
      webhook_endpoint: eventgridSystemTopicEventSubscriptionWebhookEndpointToTerraform(this._webhookEndpoint.internalValue),
    };
  }
}
