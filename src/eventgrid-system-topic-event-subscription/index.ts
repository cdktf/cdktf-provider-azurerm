// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridSystemTopicEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#advanced_filtering_on_arrays_enabled EventgridSystemTopicEventSubscription#advanced_filtering_on_arrays_enabled}
  */
  readonly advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#event_delivery_schema EventgridSystemTopicEventSubscription#event_delivery_schema}
  */
  readonly eventDeliverySchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#eventhub_endpoint_id EventgridSystemTopicEventSubscription#eventhub_endpoint_id}
  */
  readonly eventhubEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#expiration_time_utc EventgridSystemTopicEventSubscription#expiration_time_utc}
  */
  readonly expirationTimeUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#hybrid_connection_endpoint_id EventgridSystemTopicEventSubscription#hybrid_connection_endpoint_id}
  */
  readonly hybridConnectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#id EventgridSystemTopicEventSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#included_event_types EventgridSystemTopicEventSubscription#included_event_types}
  */
  readonly includedEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#labels EventgridSystemTopicEventSubscription#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#name EventgridSystemTopicEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#resource_group_name EventgridSystemTopicEventSubscription#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#service_bus_queue_endpoint_id EventgridSystemTopicEventSubscription#service_bus_queue_endpoint_id}
  */
  readonly serviceBusQueueEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#service_bus_topic_endpoint_id EventgridSystemTopicEventSubscription#service_bus_topic_endpoint_id}
  */
  readonly serviceBusTopicEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#system_topic EventgridSystemTopicEventSubscription#system_topic}
  */
  readonly systemTopic: string;
  /**
  * advanced_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#advanced_filter EventgridSystemTopicEventSubscription#advanced_filter}
  */
  readonly advancedFilter?: EventgridSystemTopicEventSubscriptionAdvancedFilter;
  /**
  * azure_function_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#azure_function_endpoint EventgridSystemTopicEventSubscription#azure_function_endpoint}
  */
  readonly azureFunctionEndpoint?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint;
  /**
  * dead_letter_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#dead_letter_identity EventgridSystemTopicEventSubscription#dead_letter_identity}
  */
  readonly deadLetterIdentity?: EventgridSystemTopicEventSubscriptionDeadLetterIdentity;
  /**
  * delivery_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#delivery_identity EventgridSystemTopicEventSubscription#delivery_identity}
  */
  readonly deliveryIdentity?: EventgridSystemTopicEventSubscriptionDeliveryIdentity;
  /**
  * delivery_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#delivery_property EventgridSystemTopicEventSubscription#delivery_property}
  */
  readonly deliveryProperty?: EventgridSystemTopicEventSubscriptionDeliveryProperty[] | cdktf.IResolvable;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#retry_policy EventgridSystemTopicEventSubscription#retry_policy}
  */
  readonly retryPolicy?: EventgridSystemTopicEventSubscriptionRetryPolicy;
  /**
  * storage_blob_dead_letter_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#storage_blob_dead_letter_destination EventgridSystemTopicEventSubscription#storage_blob_dead_letter_destination}
  */
  readonly storageBlobDeadLetterDestination?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination;
  /**
  * storage_queue_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#storage_queue_endpoint EventgridSystemTopicEventSubscription#storage_queue_endpoint}
  */
  readonly storageQueueEndpoint?: EventgridSystemTopicEventSubscriptionStorageQueueEndpoint;
  /**
  * subject_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#subject_filter EventgridSystemTopicEventSubscription#subject_filter}
  */
  readonly subjectFilter?: EventgridSystemTopicEventSubscriptionSubjectFilter;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#timeouts EventgridSystemTopicEventSubscription#timeouts}
  */
  readonly timeouts?: EventgridSystemTopicEventSubscriptionTimeouts;
  /**
  * webhook_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#webhook_endpoint EventgridSystemTopicEventSubscription#webhook_endpoint}
  */
  readonly webhookEndpoint?: EventgridSystemTopicEventSubscriptionWebhookEndpoint;
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[][] | cdktf.IResolvable;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false), false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberListList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[][] | cdktf.IResolvable; 
  public get values() {
    return this.interpolationForAttribute('values');
  }
  public set values(value: number[][] | cdktf.IResolvable) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: number[][] | cdktf.IResolvable;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false), false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberListList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[][] | cdktf.IResolvable; 
  public get values() {
    return this.interpolationForAttribute('values');
  }
  public set values(value: number[][] | cdktf.IResolvable) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference {
    return new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionAdvancedFilter {
  /**
  * bool_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#bool_equals EventgridSystemTopicEventSubscription#bool_equals}
  */
  readonly boolEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[] | cdktf.IResolvable;
  /**
  * is_not_null block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#is_not_null EventgridSystemTopicEventSubscription#is_not_null}
  */
  readonly isNotNull?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull[] | cdktf.IResolvable;
  /**
  * is_null_or_undefined block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#is_null_or_undefined EventgridSystemTopicEventSubscription#is_null_or_undefined}
  */
  readonly isNullOrUndefined?: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined[] | cdktf.IResolvable;
  /**
  * number_greater_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_greater_than EventgridSystemTopicEventSubscription#number_greater_than}
  */
  readonly numberGreaterThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[] | cdktf.IResolvable;
  /**
  * number_greater_than_or_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_greater_than_or_equals EventgridSystemTopicEventSubscription#number_greater_than_or_equals}
  */
  readonly numberGreaterThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | cdktf.IResolvable;
  /**
  * number_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_in EventgridSystemTopicEventSubscription#number_in}
  */
  readonly numberIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[] | cdktf.IResolvable;
  /**
  * number_in_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_in_range EventgridSystemTopicEventSubscription#number_in_range}
  */
  readonly numberInRange?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange[] | cdktf.IResolvable;
  /**
  * number_less_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_less_than EventgridSystemTopicEventSubscription#number_less_than}
  */
  readonly numberLessThan?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[] | cdktf.IResolvable;
  /**
  * number_less_than_or_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_less_than_or_equals EventgridSystemTopicEventSubscription#number_less_than_or_equals}
  */
  readonly numberLessThanOrEquals?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | cdktf.IResolvable;
  /**
  * number_not_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_not_in EventgridSystemTopicEventSubscription#number_not_in}
  */
  readonly numberNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[] | cdktf.IResolvable;
  /**
  * number_not_in_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#number_not_in_range EventgridSystemTopicEventSubscription#number_not_in_range}
  */
  readonly numberNotInRange?: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange[] | cdktf.IResolvable;
  /**
  * string_begins_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_begins_with EventgridSystemTopicEventSubscription#string_begins_with}
  */
  readonly stringBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[] | cdktf.IResolvable;
  /**
  * string_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_contains EventgridSystemTopicEventSubscription#string_contains}
  */
  readonly stringContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[] | cdktf.IResolvable;
  /**
  * string_ends_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_ends_with EventgridSystemTopicEventSubscription#string_ends_with}
  */
  readonly stringEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[] | cdktf.IResolvable;
  /**
  * string_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_in EventgridSystemTopicEventSubscription#string_in}
  */
  readonly stringIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[] | cdktf.IResolvable;
  /**
  * string_not_begins_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_begins_with EventgridSystemTopicEventSubscription#string_not_begins_with}
  */
  readonly stringNotBeginsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith[] | cdktf.IResolvable;
  /**
  * string_not_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_contains EventgridSystemTopicEventSubscription#string_not_contains}
  */
  readonly stringNotContains?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains[] | cdktf.IResolvable;
  /**
  * string_not_ends_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_ends_with EventgridSystemTopicEventSubscription#string_not_ends_with}
  */
  readonly stringNotEndsWith?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith[] | cdktf.IResolvable;
  /**
  * string_not_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_in EventgridSystemTopicEventSubscription#string_not_in}
  */
  readonly stringNotIn?: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[] | cdktf.IResolvable;
}

export function eventgridSystemTopicEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference | EventgridSystemTopicEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToTerraform, true)(struct!.boolEquals),
    is_not_null: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullToTerraform, true)(struct!.isNotNull),
    is_null_or_undefined: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform, true)(struct!.isNullOrUndefined),
    number_greater_than: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform, true)(struct!.numberGreaterThan),
    number_greater_than_or_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform, true)(struct!.numberGreaterThanOrEquals),
    number_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToTerraform, true)(struct!.numberIn),
    number_in_range: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeToTerraform, true)(struct!.numberInRange),
    number_less_than: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToTerraform, true)(struct!.numberLessThan),
    number_less_than_or_equals: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform, true)(struct!.numberLessThanOrEquals),
    number_not_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToTerraform, true)(struct!.numberNotIn),
    number_not_in_range: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform, true)(struct!.numberNotInRange),
    string_begins_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToTerraform, true)(struct!.stringBeginsWith),
    string_contains: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToTerraform, true)(struct!.stringContains),
    string_ends_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToTerraform, true)(struct!.stringEndsWith),
    string_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToTerraform, true)(struct!.stringIn),
    string_not_begins_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform, true)(struct!.stringNotBeginsWith),
    string_not_contains: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsToTerraform, true)(struct!.stringNotContains),
    string_not_ends_with: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform, true)(struct!.stringNotEndsWith),
    string_not_in: cdktf.listMapper(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToTerraform, true)(struct!.stringNotIn),
  }
}


export function eventgridSystemTopicEventSubscriptionAdvancedFilterToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference | EventgridSystemTopicEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_equals: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsToHclTerraform, true)(struct!.boolEquals),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList",
    },
    is_not_null: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullToHclTerraform, true)(struct!.isNotNull),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList",
    },
    is_null_or_undefined: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedToHclTerraform, true)(struct!.isNullOrUndefined),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList",
    },
    number_greater_than: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanToHclTerraform, true)(struct!.numberGreaterThan),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList",
    },
    number_greater_than_or_equals: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToHclTerraform, true)(struct!.numberGreaterThanOrEquals),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList",
    },
    number_in: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInToHclTerraform, true)(struct!.numberIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList",
    },
    number_in_range: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeToHclTerraform, true)(struct!.numberInRange),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList",
    },
    number_less_than: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanToHclTerraform, true)(struct!.numberLessThan),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList",
    },
    number_less_than_or_equals: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToHclTerraform, true)(struct!.numberLessThanOrEquals),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList",
    },
    number_not_in: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInToHclTerraform, true)(struct!.numberNotIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList",
    },
    number_not_in_range: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeToHclTerraform, true)(struct!.numberNotInRange),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList",
    },
    string_begins_with: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithToHclTerraform, true)(struct!.stringBeginsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList",
    },
    string_contains: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsToHclTerraform, true)(struct!.stringContains),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList",
    },
    string_ends_with: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithToHclTerraform, true)(struct!.stringEndsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList",
    },
    string_in: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringInToHclTerraform, true)(struct!.stringIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList",
    },
    string_not_begins_with: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithToHclTerraform, true)(struct!.stringNotBeginsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList",
    },
    string_not_contains: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsToHclTerraform, true)(struct!.stringNotContains),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList",
    },
    string_not_ends_with: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithToHclTerraform, true)(struct!.stringNotEndsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList",
    },
    string_not_in: {
      value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInToHclTerraform, true)(struct!.stringNotIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAdvancedFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolEquals = this._boolEquals?.internalValue;
    }
    if (this._isNotNull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNotNull = this._isNotNull?.internalValue;
    }
    if (this._isNullOrUndefined?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullOrUndefined = this._isNullOrUndefined?.internalValue;
    }
    if (this._numberGreaterThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberGreaterThan = this._numberGreaterThan?.internalValue;
    }
    if (this._numberGreaterThanOrEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberGreaterThanOrEquals = this._numberGreaterThanOrEquals?.internalValue;
    }
    if (this._numberIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberIn = this._numberIn?.internalValue;
    }
    if (this._numberInRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberInRange = this._numberInRange?.internalValue;
    }
    if (this._numberLessThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberLessThan = this._numberLessThan?.internalValue;
    }
    if (this._numberLessThanOrEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberLessThanOrEquals = this._numberLessThanOrEquals?.internalValue;
    }
    if (this._numberNotIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberNotIn = this._numberNotIn?.internalValue;
    }
    if (this._numberNotInRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberNotInRange = this._numberNotInRange?.internalValue;
    }
    if (this._stringBeginsWith?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringBeginsWith = this._stringBeginsWith?.internalValue;
    }
    if (this._stringContains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringContains = this._stringContains?.internalValue;
    }
    if (this._stringEndsWith?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEndsWith = this._stringEndsWith?.internalValue;
    }
    if (this._stringIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringIn = this._stringIn?.internalValue;
    }
    if (this._stringNotBeginsWith?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotBeginsWith = this._stringNotBeginsWith?.internalValue;
    }
    if (this._stringNotContains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotContains = this._stringNotContains?.internalValue;
    }
    if (this._stringNotEndsWith?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEndsWith = this._stringNotEndsWith?.internalValue;
    }
    if (this._stringNotIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotIn = this._stringNotIn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionAdvancedFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boolEquals.internalValue = undefined;
      this._isNotNull.internalValue = undefined;
      this._isNullOrUndefined.internalValue = undefined;
      this._numberGreaterThan.internalValue = undefined;
      this._numberGreaterThanOrEquals.internalValue = undefined;
      this._numberIn.internalValue = undefined;
      this._numberInRange.internalValue = undefined;
      this._numberLessThan.internalValue = undefined;
      this._numberLessThanOrEquals.internalValue = undefined;
      this._numberNotIn.internalValue = undefined;
      this._numberNotInRange.internalValue = undefined;
      this._stringBeginsWith.internalValue = undefined;
      this._stringContains.internalValue = undefined;
      this._stringEndsWith.internalValue = undefined;
      this._stringIn.internalValue = undefined;
      this._stringNotBeginsWith.internalValue = undefined;
      this._stringNotContains.internalValue = undefined;
      this._stringNotEndsWith.internalValue = undefined;
      this._stringNotIn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boolEquals.internalValue = value.boolEquals;
      this._isNotNull.internalValue = value.isNotNull;
      this._isNullOrUndefined.internalValue = value.isNullOrUndefined;
      this._numberGreaterThan.internalValue = value.numberGreaterThan;
      this._numberGreaterThanOrEquals.internalValue = value.numberGreaterThanOrEquals;
      this._numberIn.internalValue = value.numberIn;
      this._numberInRange.internalValue = value.numberInRange;
      this._numberLessThan.internalValue = value.numberLessThan;
      this._numberLessThanOrEquals.internalValue = value.numberLessThanOrEquals;
      this._numberNotIn.internalValue = value.numberNotIn;
      this._numberNotInRange.internalValue = value.numberNotInRange;
      this._stringBeginsWith.internalValue = value.stringBeginsWith;
      this._stringContains.internalValue = value.stringContains;
      this._stringEndsWith.internalValue = value.stringEndsWith;
      this._stringIn.internalValue = value.stringIn;
      this._stringNotBeginsWith.internalValue = value.stringNotBeginsWith;
      this._stringNotContains.internalValue = value.stringNotContains;
      this._stringNotEndsWith.internalValue = value.stringNotEndsWith;
      this._stringNotIn.internalValue = value.stringNotIn;
    }
  }

  // bool_equals - computed: false, optional: true, required: false
  private _boolEquals = new EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList(this, "bool_equals", false);
  public get boolEquals() {
    return this._boolEquals;
  }
  public putBoolEquals(value: EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals[] | cdktf.IResolvable) {
    this._boolEquals.internalValue = value;
  }
  public resetBoolEquals() {
    this._boolEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolEqualsInput() {
    return this._boolEquals.internalValue;
  }

  // is_not_null - computed: false, optional: true, required: false
  private _isNotNull = new EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList(this, "is_not_null", false);
  public get isNotNull() {
    return this._isNotNull;
  }
  public putIsNotNull(value: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull[] | cdktf.IResolvable) {
    this._isNotNull.internalValue = value;
  }
  public resetIsNotNull() {
    this._isNotNull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotNullInput() {
    return this._isNotNull.internalValue;
  }

  // is_null_or_undefined - computed: false, optional: true, required: false
  private _isNullOrUndefined = new EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList(this, "is_null_or_undefined", false);
  public get isNullOrUndefined() {
    return this._isNullOrUndefined;
  }
  public putIsNullOrUndefined(value: EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined[] | cdktf.IResolvable) {
    this._isNullOrUndefined.internalValue = value;
  }
  public resetIsNullOrUndefined() {
    this._isNullOrUndefined.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullOrUndefinedInput() {
    return this._isNullOrUndefined.internalValue;
  }

  // number_greater_than - computed: false, optional: true, required: false
  private _numberGreaterThan = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList(this, "number_greater_than", false);
  public get numberGreaterThan() {
    return this._numberGreaterThan;
  }
  public putNumberGreaterThan(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan[] | cdktf.IResolvable) {
    this._numberGreaterThan.internalValue = value;
  }
  public resetNumberGreaterThan() {
    this._numberGreaterThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberGreaterThanInput() {
    return this._numberGreaterThan.internalValue;
  }

  // number_greater_than_or_equals - computed: false, optional: true, required: false
  private _numberGreaterThanOrEquals = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList(this, "number_greater_than_or_equals", false);
  public get numberGreaterThanOrEquals() {
    return this._numberGreaterThanOrEquals;
  }
  public putNumberGreaterThanOrEquals(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | cdktf.IResolvable) {
    this._numberGreaterThanOrEquals.internalValue = value;
  }
  public resetNumberGreaterThanOrEquals() {
    this._numberGreaterThanOrEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberGreaterThanOrEqualsInput() {
    return this._numberGreaterThanOrEquals.internalValue;
  }

  // number_in - computed: false, optional: true, required: false
  private _numberIn = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList(this, "number_in", false);
  public get numberIn() {
    return this._numberIn;
  }
  public putNumberIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn[] | cdktf.IResolvable) {
    this._numberIn.internalValue = value;
  }
  public resetNumberIn() {
    this._numberIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInInput() {
    return this._numberIn.internalValue;
  }

  // number_in_range - computed: false, optional: true, required: false
  private _numberInRange = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList(this, "number_in_range", false);
  public get numberInRange() {
    return this._numberInRange;
  }
  public putNumberInRange(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange[] | cdktf.IResolvable) {
    this._numberInRange.internalValue = value;
  }
  public resetNumberInRange() {
    this._numberInRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInRangeInput() {
    return this._numberInRange.internalValue;
  }

  // number_less_than - computed: false, optional: true, required: false
  private _numberLessThan = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList(this, "number_less_than", false);
  public get numberLessThan() {
    return this._numberLessThan;
  }
  public putNumberLessThan(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan[] | cdktf.IResolvable) {
    this._numberLessThan.internalValue = value;
  }
  public resetNumberLessThan() {
    this._numberLessThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberLessThanInput() {
    return this._numberLessThan.internalValue;
  }

  // number_less_than_or_equals - computed: false, optional: true, required: false
  private _numberLessThanOrEquals = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList(this, "number_less_than_or_equals", false);
  public get numberLessThanOrEquals() {
    return this._numberLessThanOrEquals;
  }
  public putNumberLessThanOrEquals(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | cdktf.IResolvable) {
    this._numberLessThanOrEquals.internalValue = value;
  }
  public resetNumberLessThanOrEquals() {
    this._numberLessThanOrEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberLessThanOrEqualsInput() {
    return this._numberLessThanOrEquals.internalValue;
  }

  // number_not_in - computed: false, optional: true, required: false
  private _numberNotIn = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList(this, "number_not_in", false);
  public get numberNotIn() {
    return this._numberNotIn;
  }
  public putNumberNotIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn[] | cdktf.IResolvable) {
    this._numberNotIn.internalValue = value;
  }
  public resetNumberNotIn() {
    this._numberNotIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberNotInInput() {
    return this._numberNotIn.internalValue;
  }

  // number_not_in_range - computed: false, optional: true, required: false
  private _numberNotInRange = new EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList(this, "number_not_in_range", false);
  public get numberNotInRange() {
    return this._numberNotInRange;
  }
  public putNumberNotInRange(value: EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange[] | cdktf.IResolvable) {
    this._numberNotInRange.internalValue = value;
  }
  public resetNumberNotInRange() {
    this._numberNotInRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberNotInRangeInput() {
    return this._numberNotInRange.internalValue;
  }

  // string_begins_with - computed: false, optional: true, required: false
  private _stringBeginsWith = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList(this, "string_begins_with", false);
  public get stringBeginsWith() {
    return this._stringBeginsWith;
  }
  public putStringBeginsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith[] | cdktf.IResolvable) {
    this._stringBeginsWith.internalValue = value;
  }
  public resetStringBeginsWith() {
    this._stringBeginsWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringBeginsWithInput() {
    return this._stringBeginsWith.internalValue;
  }

  // string_contains - computed: false, optional: true, required: false
  private _stringContains = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList(this, "string_contains", false);
  public get stringContains() {
    return this._stringContains;
  }
  public putStringContains(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains[] | cdktf.IResolvable) {
    this._stringContains.internalValue = value;
  }
  public resetStringContains() {
    this._stringContains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringContainsInput() {
    return this._stringContains.internalValue;
  }

  // string_ends_with - computed: false, optional: true, required: false
  private _stringEndsWith = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList(this, "string_ends_with", false);
  public get stringEndsWith() {
    return this._stringEndsWith;
  }
  public putStringEndsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith[] | cdktf.IResolvable) {
    this._stringEndsWith.internalValue = value;
  }
  public resetStringEndsWith() {
    this._stringEndsWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEndsWithInput() {
    return this._stringEndsWith.internalValue;
  }

  // string_in - computed: false, optional: true, required: false
  private _stringIn = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList(this, "string_in", false);
  public get stringIn() {
    return this._stringIn;
  }
  public putStringIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn[] | cdktf.IResolvable) {
    this._stringIn.internalValue = value;
  }
  public resetStringIn() {
    this._stringIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInInput() {
    return this._stringIn.internalValue;
  }

  // string_not_begins_with - computed: false, optional: true, required: false
  private _stringNotBeginsWith = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList(this, "string_not_begins_with", false);
  public get stringNotBeginsWith() {
    return this._stringNotBeginsWith;
  }
  public putStringNotBeginsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith[] | cdktf.IResolvable) {
    this._stringNotBeginsWith.internalValue = value;
  }
  public resetStringNotBeginsWith() {
    this._stringNotBeginsWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotBeginsWithInput() {
    return this._stringNotBeginsWith.internalValue;
  }

  // string_not_contains - computed: false, optional: true, required: false
  private _stringNotContains = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList(this, "string_not_contains", false);
  public get stringNotContains() {
    return this._stringNotContains;
  }
  public putStringNotContains(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains[] | cdktf.IResolvable) {
    this._stringNotContains.internalValue = value;
  }
  public resetStringNotContains() {
    this._stringNotContains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotContainsInput() {
    return this._stringNotContains.internalValue;
  }

  // string_not_ends_with - computed: false, optional: true, required: false
  private _stringNotEndsWith = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList(this, "string_not_ends_with", false);
  public get stringNotEndsWith() {
    return this._stringNotEndsWith;
  }
  public putStringNotEndsWith(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith[] | cdktf.IResolvable) {
    this._stringNotEndsWith.internalValue = value;
  }
  public resetStringNotEndsWith() {
    this._stringNotEndsWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEndsWithInput() {
    return this._stringNotEndsWith.internalValue;
  }

  // string_not_in - computed: false, optional: true, required: false
  private _stringNotIn = new EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList(this, "string_not_in", false);
  public get stringNotIn() {
    return this._stringNotIn;
  }
  public putStringNotIn(value: EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn[] | cdktf.IResolvable) {
    this._stringNotIn.internalValue = value;
  }
  public resetStringNotIn() {
    this._stringNotIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotInInput() {
    return this._stringNotIn.internalValue;
  }
}
export interface EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#function_id EventgridSystemTopicEventSubscription#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
}

export function eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference | EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_id: cdktf.stringToTerraform(struct!.functionId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
  }
}


export function eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference | EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_events_per_batch: {
      value: cdktf.numberToHclTerraform(struct!.maxEventsPerBatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_batch_size_in_kilobytes: {
      value: cdktf.numberToHclTerraform(struct!.preferredBatchSizeInKilobytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint | undefined {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridSystemTopicEventSubscriptionDeadLetterIdentityToTerraform(struct?: EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference | EventgridSystemTopicEventSubscriptionDeadLetterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}


export function eventgridSystemTopicEventSubscriptionDeadLetterIdentityToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference | EventgridSystemTopicEventSubscriptionDeadLetterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionDeadLetterIdentity | undefined {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridSystemTopicEventSubscriptionDeliveryIdentityToTerraform(struct?: EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference | EventgridSystemTopicEventSubscriptionDeliveryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}


export function eventgridSystemTopicEventSubscriptionDeliveryIdentityToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference | EventgridSystemTopicEventSubscriptionDeliveryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionDeliveryIdentity | undefined {
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
export interface EventgridSystemTopicEventSubscriptionDeliveryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#header_name EventgridSystemTopicEventSubscription#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#secret EventgridSystemTopicEventSubscription#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#source_field EventgridSystemTopicEventSubscription#source_field}
  */
  readonly sourceField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}
  */
  readonly value?: string;
}

export function eventgridSystemTopicEventSubscriptionDeliveryPropertyToTerraform(struct?: EventgridSystemTopicEventSubscriptionDeliveryProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function eventgridSystemTopicEventSubscriptionDeliveryPropertyToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionDeliveryProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.booleanToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionDeliveryProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridSystemTopicEventSubscriptionDeliveryProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._secret = undefined;
      this._sourceField = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._secret = value.secret;
      this._sourceField = value.sourceField;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: boolean | cdktf.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // source_field - computed: false, optional: true, required: false
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  public resetSourceField() {
    this._sourceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventgridSystemTopicEventSubscriptionDeliveryPropertyList extends cdktf.ComplexList {
  public internalValue? : EventgridSystemTopicEventSubscriptionDeliveryProperty[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference {
    return new EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridSystemTopicEventSubscriptionRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#event_time_to_live EventgridSystemTopicEventSubscription#event_time_to_live}
  */
  readonly eventTimeToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#max_delivery_attempts EventgridSystemTopicEventSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts: number;
}

export function eventgridSystemTopicEventSubscriptionRetryPolicyToTerraform(struct?: EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference | EventgridSystemTopicEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_time_to_live: cdktf.numberToTerraform(struct!.eventTimeToLive),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}


export function eventgridSystemTopicEventSubscriptionRetryPolicyToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference | EventgridSystemTopicEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.eventTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_delivery_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxDeliveryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionRetryPolicy | undefined {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#storage_blob_container_name EventgridSystemTopicEventSubscription#storage_blob_container_name}
  */
  readonly storageBlobContainerName: string;
}

export function eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_blob_container_name: cdktf.stringToTerraform(struct!.storageBlobContainerName),
  }
}


export function eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_blob_container_name: {
      value: cdktf.stringToHclTerraform(struct!.storageBlobContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination | undefined {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#queue_message_time_to_live_in_seconds EventgridSystemTopicEventSubscription#queue_message_time_to_live_in_seconds}
  */
  readonly queueMessageTimeToLiveInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#queue_name EventgridSystemTopicEventSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function eventgridSystemTopicEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference | EventgridSystemTopicEventSubscriptionStorageQueueEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_message_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.queueMessageTimeToLiveInSeconds),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}


export function eventgridSystemTopicEventSubscriptionStorageQueueEndpointToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference | EventgridSystemTopicEventSubscriptionStorageQueueEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_message_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.queueMessageTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionStorageQueueEndpoint | undefined {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#case_sensitive EventgridSystemTopicEventSubscription#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#subject_begins_with EventgridSystemTopicEventSubscription#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#subject_ends_with EventgridSystemTopicEventSubscription#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
}

export function eventgridSystemTopicEventSubscriptionSubjectFilterToTerraform(struct?: EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference | EventgridSystemTopicEventSubscriptionSubjectFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    subject_begins_with: cdktf.stringToTerraform(struct!.subjectBeginsWith),
    subject_ends_with: cdktf.stringToTerraform(struct!.subjectEndsWith),
  }
}


export function eventgridSystemTopicEventSubscriptionSubjectFilterToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference | EventgridSystemTopicEventSubscriptionSubjectFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject_begins_with: {
      value: cdktf.stringToHclTerraform(struct!.subjectBeginsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.subjectEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionSubjectFilter | undefined {
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
    return this.getBooleanAttribute('case_sensitive');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#create EventgridSystemTopicEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#delete EventgridSystemTopicEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#read EventgridSystemTopicEventSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#update EventgridSystemTopicEventSubscription#update}
  */
  readonly update?: string;
}

export function eventgridSystemTopicEventSubscriptionTimeoutsToTerraform(struct?: EventgridSystemTopicEventSubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function eventgridSystemTopicEventSubscriptionTimeoutsToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EventgridSystemTopicEventSubscriptionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#active_directory_app_id_or_uri EventgridSystemTopicEventSubscription#active_directory_app_id_or_uri}
  */
  readonly activeDirectoryAppIdOrUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#active_directory_tenant_id EventgridSystemTopicEventSubscription#active_directory_tenant_id}
  */
  readonly activeDirectoryTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#url EventgridSystemTopicEventSubscription#url}
  */
  readonly url: string;
}

export function eventgridSystemTopicEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference | EventgridSystemTopicEventSubscriptionWebhookEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function eventgridSystemTopicEventSubscriptionWebhookEndpointToHclTerraform(struct?: EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference | EventgridSystemTopicEventSubscriptionWebhookEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_app_id_or_uri: {
      value: cdktf.stringToHclTerraform(struct!.activeDirectoryAppIdOrUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_directory_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.activeDirectoryTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_events_per_batch: {
      value: cdktf.numberToHclTerraform(struct!.maxEventsPerBatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_batch_size_in_kilobytes: {
      value: cdktf.numberToHclTerraform(struct!.preferredBatchSizeInKilobytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridSystemTopicEventSubscriptionWebhookEndpoint | undefined {
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

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription azurerm_eventgrid_system_topic_event_subscription}
*/
export class EventgridSystemTopicEventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_eventgrid_system_topic_event_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventgridSystemTopicEventSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventgridSystemTopicEventSubscription to import
  * @param importFromId The id of the existing EventgridSystemTopicEventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventgridSystemTopicEventSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_eventgrid_system_topic_event_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_system_topic_event_subscription azurerm_eventgrid_system_topic_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridSystemTopicEventSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridSystemTopicEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_system_topic_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedFilteringOnArraysEnabled = config.advancedFilteringOnArraysEnabled;
    this._eventDeliverySchema = config.eventDeliverySchema;
    this._eventhubEndpointId = config.eventhubEndpointId;
    this._expirationTimeUtc = config.expirationTimeUtc;
    this._hybridConnectionEndpointId = config.hybridConnectionEndpointId;
    this._id = config.id;
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
    this._deliveryProperty.internalValue = config.deliveryProperty;
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
    return this.getBooleanAttribute('advanced_filtering_on_arrays_enabled');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _advancedFilter = new EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference(this, "advanced_filter");
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
  private _azureFunctionEndpoint = new EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference(this, "azure_function_endpoint");
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
  private _deadLetterIdentity = new EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference(this, "dead_letter_identity");
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
  private _deliveryIdentity = new EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference(this, "delivery_identity");
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

  // delivery_property - computed: false, optional: true, required: false
  private _deliveryProperty = new EventgridSystemTopicEventSubscriptionDeliveryPropertyList(this, "delivery_property", false);
  public get deliveryProperty() {
    return this._deliveryProperty;
  }
  public putDeliveryProperty(value: EventgridSystemTopicEventSubscriptionDeliveryProperty[] | cdktf.IResolvable) {
    this._deliveryProperty.internalValue = value;
  }
  public resetDeliveryProperty() {
    this._deliveryProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPropertyInput() {
    return this._deliveryProperty.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference(this, "retry_policy");
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
  private _storageBlobDeadLetterDestination = new EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(this, "storage_blob_dead_letter_destination");
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
  private _storageQueueEndpoint = new EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference(this, "storage_queue_endpoint");
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
  private _subjectFilter = new EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference(this, "subject_filter");
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
  private _timeouts = new EventgridSystemTopicEventSubscriptionTimeoutsOutputReference(this, "timeouts");
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
  private _webhookEndpoint = new EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference(this, "webhook_endpoint");
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
      id: cdktf.stringToTerraform(this._id),
      included_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedEventTypes),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_bus_queue_endpoint_id: cdktf.stringToTerraform(this._serviceBusQueueEndpointId),
      service_bus_topic_endpoint_id: cdktf.stringToTerraform(this._serviceBusTopicEndpointId),
      system_topic: cdktf.stringToTerraform(this._systemTopic),
      advanced_filter: eventgridSystemTopicEventSubscriptionAdvancedFilterToTerraform(this._advancedFilter.internalValue),
      azure_function_endpoint: eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToTerraform(this._azureFunctionEndpoint.internalValue),
      dead_letter_identity: eventgridSystemTopicEventSubscriptionDeadLetterIdentityToTerraform(this._deadLetterIdentity.internalValue),
      delivery_identity: eventgridSystemTopicEventSubscriptionDeliveryIdentityToTerraform(this._deliveryIdentity.internalValue),
      delivery_property: cdktf.listMapper(eventgridSystemTopicEventSubscriptionDeliveryPropertyToTerraform, true)(this._deliveryProperty.internalValue),
      retry_policy: eventgridSystemTopicEventSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      storage_blob_dead_letter_destination: eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(this._storageBlobDeadLetterDestination.internalValue),
      storage_queue_endpoint: eventgridSystemTopicEventSubscriptionStorageQueueEndpointToTerraform(this._storageQueueEndpoint.internalValue),
      subject_filter: eventgridSystemTopicEventSubscriptionSubjectFilterToTerraform(this._subjectFilter.internalValue),
      timeouts: eventgridSystemTopicEventSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
      webhook_endpoint: eventgridSystemTopicEventSubscriptionWebhookEndpointToTerraform(this._webhookEndpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_filtering_on_arrays_enabled: {
        value: cdktf.booleanToHclTerraform(this._advancedFilteringOnArraysEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_delivery_schema: {
        value: cdktf.stringToHclTerraform(this._eventDeliverySchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._eventhubEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_time_utc: {
        value: cdktf.stringToHclTerraform(this._expirationTimeUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hybrid_connection_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._hybridConnectionEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedEventTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_bus_queue_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._serviceBusQueueEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_bus_topic_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._serviceBusTopicEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_topic: {
        value: cdktf.stringToHclTerraform(this._systemTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_filter: {
        value: eventgridSystemTopicEventSubscriptionAdvancedFilterToHclTerraform(this._advancedFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionAdvancedFilterList",
      },
      azure_function_endpoint: {
        value: eventgridSystemTopicEventSubscriptionAzureFunctionEndpointToHclTerraform(this._azureFunctionEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionAzureFunctionEndpointList",
      },
      dead_letter_identity: {
        value: eventgridSystemTopicEventSubscriptionDeadLetterIdentityToHclTerraform(this._deadLetterIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionDeadLetterIdentityList",
      },
      delivery_identity: {
        value: eventgridSystemTopicEventSubscriptionDeliveryIdentityToHclTerraform(this._deliveryIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionDeliveryIdentityList",
      },
      delivery_property: {
        value: cdktf.listMapperHcl(eventgridSystemTopicEventSubscriptionDeliveryPropertyToHclTerraform, true)(this._deliveryProperty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionDeliveryPropertyList",
      },
      retry_policy: {
        value: eventgridSystemTopicEventSubscriptionRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionRetryPolicyList",
      },
      storage_blob_dead_letter_destination: {
        value: eventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationToHclTerraform(this._storageBlobDeadLetterDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationList",
      },
      storage_queue_endpoint: {
        value: eventgridSystemTopicEventSubscriptionStorageQueueEndpointToHclTerraform(this._storageQueueEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionStorageQueueEndpointList",
      },
      subject_filter: {
        value: eventgridSystemTopicEventSubscriptionSubjectFilterToHclTerraform(this._subjectFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionSubjectFilterList",
      },
      timeouts: {
        value: eventgridSystemTopicEventSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventgridSystemTopicEventSubscriptionTimeouts",
      },
      webhook_endpoint: {
        value: eventgridSystemTopicEventSubscriptionWebhookEndpointToHclTerraform(this._webhookEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridSystemTopicEventSubscriptionWebhookEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
