// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}
  */
  readonly advancedFilteringOnArraysEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}
  */
  readonly eventDeliverySchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}
  */
  readonly eventhubEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}
  */
  readonly expirationTimeUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}
  */
  readonly hybridConnectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}
  */
  readonly includedEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}
  */
  readonly serviceBusQueueEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}
  */
  readonly serviceBusTopicEndpointId?: string;
  /**
  * advanced_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#advanced_filter EventgridEventSubscription#advanced_filter}
  */
  readonly advancedFilter?: EventgridEventSubscriptionAdvancedFilter;
  /**
  * azure_function_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}
  */
  readonly azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint;
  /**
  * dead_letter_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#dead_letter_identity EventgridEventSubscription#dead_letter_identity}
  */
  readonly deadLetterIdentity?: EventgridEventSubscriptionDeadLetterIdentity;
  /**
  * delivery_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#delivery_identity EventgridEventSubscription#delivery_identity}
  */
  readonly deliveryIdentity?: EventgridEventSubscriptionDeliveryIdentity;
  /**
  * delivery_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#delivery_property EventgridEventSubscription#delivery_property}
  */
  readonly deliveryProperty?: EventgridEventSubscriptionDeliveryProperty[] | cdktf.IResolvable;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#retry_policy EventgridEventSubscription#retry_policy}
  */
  readonly retryPolicy?: EventgridEventSubscriptionRetryPolicy;
  /**
  * storage_blob_dead_letter_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}
  */
  readonly storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination;
  /**
  * storage_queue_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}
  */
  readonly storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint;
  /**
  * subject_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#subject_filter EventgridEventSubscription#subject_filter}
  */
  readonly subjectFilter?: EventgridEventSubscriptionSubjectFilter;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#timeouts EventgridEventSubscription#timeouts}
  */
  readonly timeouts?: EventgridEventSubscriptionTimeouts;
  /**
  * webhook_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#webhook_endpoint EventgridEventSubscription#webhook_endpoint}
  */
  readonly webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint;
}
export interface EventgridEventSubscriptionAdvancedFilterBoolEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function eventgridEventSubscriptionAdvancedFilterBoolEqualsToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterBoolEquals | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterBoolEqualsList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterBoolEquals[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterIsNotNull {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function eventgridEventSubscriptionAdvancedFilterIsNotNullToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterIsNotNull | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterIsNotNullList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterIsNotNull[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

export function eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberInToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberInOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberIn | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberInList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberIn[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberInOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberInRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[][] | cdktf.IResolvable;
}

export function eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberInRangeToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberInRange | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberInRangeList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberInRange[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberLessThan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberLessThanToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberLessThan | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberLessThanList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberLessThan[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

export function eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberNotIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

export function eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberNotInToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberNotIn | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberNotInList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberNotIn[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterNumberNotInRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: number[][] | cdktf.IResolvable;
}

export function eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterNumberNotInRange | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterNumberNotInRange[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringBeginsWithToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringBeginsWith | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringBeginsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringBeginsWith[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringContains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringContainsToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringContains | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringContainsList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringContains[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringEndsWithToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringEndsWith | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringEndsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringEndsWith[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringInToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringInOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringIn | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringInList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringIn[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringInOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringNotContains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringNotContainsToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringNotContains | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotContainsList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringNotContains[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringNotEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilterStringNotIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

export function eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function eventgridEventSubscriptionAdvancedFilterStringNotInToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilterStringNotIn | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionAdvancedFilterStringNotInList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionAdvancedFilterStringNotIn[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference {
    return new EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionAdvancedFilter {
  /**
  * bool_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#bool_equals EventgridEventSubscription#bool_equals}
  */
  readonly boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[] | cdktf.IResolvable;
  /**
  * is_not_null block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#is_not_null EventgridEventSubscription#is_not_null}
  */
  readonly isNotNull?: EventgridEventSubscriptionAdvancedFilterIsNotNull[] | cdktf.IResolvable;
  /**
  * is_null_or_undefined block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}
  */
  readonly isNullOrUndefined?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[] | cdktf.IResolvable;
  /**
  * number_greater_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_greater_than EventgridEventSubscription#number_greater_than}
  */
  readonly numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[] | cdktf.IResolvable;
  /**
  * number_greater_than_or_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}
  */
  readonly numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | cdktf.IResolvable;
  /**
  * number_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_in EventgridEventSubscription#number_in}
  */
  readonly numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[] | cdktf.IResolvable;
  /**
  * number_in_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_in_range EventgridEventSubscription#number_in_range}
  */
  readonly numberInRange?: EventgridEventSubscriptionAdvancedFilterNumberInRange[] | cdktf.IResolvable;
  /**
  * number_less_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_less_than EventgridEventSubscription#number_less_than}
  */
  readonly numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[] | cdktf.IResolvable;
  /**
  * number_less_than_or_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}
  */
  readonly numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | cdktf.IResolvable;
  /**
  * number_not_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_not_in EventgridEventSubscription#number_not_in}
  */
  readonly numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[] | cdktf.IResolvable;
  /**
  * number_not_in_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#number_not_in_range EventgridEventSubscription#number_not_in_range}
  */
  readonly numberNotInRange?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[] | cdktf.IResolvable;
  /**
  * string_begins_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_begins_with EventgridEventSubscription#string_begins_with}
  */
  readonly stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[] | cdktf.IResolvable;
  /**
  * string_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_contains EventgridEventSubscription#string_contains}
  */
  readonly stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[] | cdktf.IResolvable;
  /**
  * string_ends_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_ends_with EventgridEventSubscription#string_ends_with}
  */
  readonly stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[] | cdktf.IResolvable;
  /**
  * string_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_in EventgridEventSubscription#string_in}
  */
  readonly stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[] | cdktf.IResolvable;
  /**
  * string_not_begins_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_not_begins_with EventgridEventSubscription#string_not_begins_with}
  */
  readonly stringNotBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[] | cdktf.IResolvable;
  /**
  * string_not_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_not_contains EventgridEventSubscription#string_not_contains}
  */
  readonly stringNotContains?: EventgridEventSubscriptionAdvancedFilterStringNotContains[] | cdktf.IResolvable;
  /**
  * string_not_ends_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_not_ends_with EventgridEventSubscription#string_not_ends_with}
  */
  readonly stringNotEndsWith?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[] | cdktf.IResolvable;
  /**
  * string_not_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#string_not_in EventgridEventSubscription#string_not_in}
  */
  readonly stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[] | cdktf.IResolvable;
}

export function eventgridEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterOutputReference | EventgridEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform, true)(struct!.boolEquals),
    is_not_null: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform, true)(struct!.isNotNull),
    is_null_or_undefined: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform, true)(struct!.isNullOrUndefined),
    number_greater_than: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform, true)(struct!.numberGreaterThan),
    number_greater_than_or_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform, true)(struct!.numberGreaterThanOrEquals),
    number_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberInToTerraform, true)(struct!.numberIn),
    number_in_range: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform, true)(struct!.numberInRange),
    number_less_than: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform, true)(struct!.numberLessThan),
    number_less_than_or_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform, true)(struct!.numberLessThanOrEquals),
    number_not_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform, true)(struct!.numberNotIn),
    number_not_in_range: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform, true)(struct!.numberNotInRange),
    string_begins_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform, true)(struct!.stringBeginsWith),
    string_contains: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform, true)(struct!.stringContains),
    string_ends_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform, true)(struct!.stringEndsWith),
    string_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringInToTerraform, true)(struct!.stringIn),
    string_not_begins_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform, true)(struct!.stringNotBeginsWith),
    string_not_contains: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform, true)(struct!.stringNotContains),
    string_not_ends_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform, true)(struct!.stringNotEndsWith),
    string_not_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform, true)(struct!.stringNotIn),
  }
}


export function eventgridEventSubscriptionAdvancedFilterToHclTerraform(struct?: EventgridEventSubscriptionAdvancedFilterOutputReference | EventgridEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_equals: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterBoolEqualsToHclTerraform, true)(struct!.boolEquals),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterBoolEqualsList",
    },
    is_not_null: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterIsNotNullToHclTerraform, true)(struct!.isNotNull),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterIsNotNullList",
    },
    is_null_or_undefined: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToHclTerraform, true)(struct!.isNullOrUndefined),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList",
    },
    number_greater_than: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToHclTerraform, true)(struct!.numberGreaterThan),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList",
    },
    number_greater_than_or_equals: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToHclTerraform, true)(struct!.numberGreaterThanOrEquals),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList",
    },
    number_in: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberInToHclTerraform, true)(struct!.numberIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberInList",
    },
    number_in_range: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberInRangeToHclTerraform, true)(struct!.numberInRange),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberInRangeList",
    },
    number_less_than: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberLessThanToHclTerraform, true)(struct!.numberLessThan),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberLessThanList",
    },
    number_less_than_or_equals: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToHclTerraform, true)(struct!.numberLessThanOrEquals),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList",
    },
    number_not_in: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberNotInToHclTerraform, true)(struct!.numberNotIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberNotInList",
    },
    number_not_in_range: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToHclTerraform, true)(struct!.numberNotInRange),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList",
    },
    string_begins_with: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringBeginsWithToHclTerraform, true)(struct!.stringBeginsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringBeginsWithList",
    },
    string_contains: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringContainsToHclTerraform, true)(struct!.stringContains),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringContainsList",
    },
    string_ends_with: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringEndsWithToHclTerraform, true)(struct!.stringEndsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringEndsWithList",
    },
    string_in: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringInToHclTerraform, true)(struct!.stringIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringInList",
    },
    string_not_begins_with: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToHclTerraform, true)(struct!.stringNotBeginsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList",
    },
    string_not_contains: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringNotContainsToHclTerraform, true)(struct!.stringNotContains),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringNotContainsList",
    },
    string_not_ends_with: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToHclTerraform, true)(struct!.stringNotEndsWith),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList",
    },
    string_not_in: {
      value: cdktf.listMapperHcl(eventgridEventSubscriptionAdvancedFilterStringNotInToHclTerraform, true)(struct!.stringNotIn),
      isBlock: true,
      type: "list",
      storageClassType: "EventgridEventSubscriptionAdvancedFilterStringNotInList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridEventSubscriptionAdvancedFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventgridEventSubscriptionAdvancedFilter | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionAdvancedFilter | undefined) {
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
  private _boolEquals = new EventgridEventSubscriptionAdvancedFilterBoolEqualsList(this, "bool_equals", false);
  public get boolEquals() {
    return this._boolEquals;
  }
  public putBoolEquals(value: EventgridEventSubscriptionAdvancedFilterBoolEquals[] | cdktf.IResolvable) {
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
  private _isNotNull = new EventgridEventSubscriptionAdvancedFilterIsNotNullList(this, "is_not_null", false);
  public get isNotNull() {
    return this._isNotNull;
  }
  public putIsNotNull(value: EventgridEventSubscriptionAdvancedFilterIsNotNull[] | cdktf.IResolvable) {
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
  private _isNullOrUndefined = new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList(this, "is_null_or_undefined", false);
  public get isNullOrUndefined() {
    return this._isNullOrUndefined;
  }
  public putIsNullOrUndefined(value: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[] | cdktf.IResolvable) {
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
  private _numberGreaterThan = new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList(this, "number_greater_than", false);
  public get numberGreaterThan() {
    return this._numberGreaterThan;
  }
  public putNumberGreaterThan(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[] | cdktf.IResolvable) {
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
  private _numberGreaterThanOrEquals = new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList(this, "number_greater_than_or_equals", false);
  public get numberGreaterThanOrEquals() {
    return this._numberGreaterThanOrEquals;
  }
  public putNumberGreaterThanOrEquals(value: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[] | cdktf.IResolvable) {
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
  private _numberIn = new EventgridEventSubscriptionAdvancedFilterNumberInList(this, "number_in", false);
  public get numberIn() {
    return this._numberIn;
  }
  public putNumberIn(value: EventgridEventSubscriptionAdvancedFilterNumberIn[] | cdktf.IResolvable) {
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
  private _numberInRange = new EventgridEventSubscriptionAdvancedFilterNumberInRangeList(this, "number_in_range", false);
  public get numberInRange() {
    return this._numberInRange;
  }
  public putNumberInRange(value: EventgridEventSubscriptionAdvancedFilterNumberInRange[] | cdktf.IResolvable) {
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
  private _numberLessThan = new EventgridEventSubscriptionAdvancedFilterNumberLessThanList(this, "number_less_than", false);
  public get numberLessThan() {
    return this._numberLessThan;
  }
  public putNumberLessThan(value: EventgridEventSubscriptionAdvancedFilterNumberLessThan[] | cdktf.IResolvable) {
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
  private _numberLessThanOrEquals = new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList(this, "number_less_than_or_equals", false);
  public get numberLessThanOrEquals() {
    return this._numberLessThanOrEquals;
  }
  public putNumberLessThanOrEquals(value: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[] | cdktf.IResolvable) {
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
  private _numberNotIn = new EventgridEventSubscriptionAdvancedFilterNumberNotInList(this, "number_not_in", false);
  public get numberNotIn() {
    return this._numberNotIn;
  }
  public putNumberNotIn(value: EventgridEventSubscriptionAdvancedFilterNumberNotIn[] | cdktf.IResolvable) {
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
  private _numberNotInRange = new EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList(this, "number_not_in_range", false);
  public get numberNotInRange() {
    return this._numberNotInRange;
  }
  public putNumberNotInRange(value: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[] | cdktf.IResolvable) {
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
  private _stringBeginsWith = new EventgridEventSubscriptionAdvancedFilterStringBeginsWithList(this, "string_begins_with", false);
  public get stringBeginsWith() {
    return this._stringBeginsWith;
  }
  public putStringBeginsWith(value: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[] | cdktf.IResolvable) {
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
  private _stringContains = new EventgridEventSubscriptionAdvancedFilterStringContainsList(this, "string_contains", false);
  public get stringContains() {
    return this._stringContains;
  }
  public putStringContains(value: EventgridEventSubscriptionAdvancedFilterStringContains[] | cdktf.IResolvable) {
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
  private _stringEndsWith = new EventgridEventSubscriptionAdvancedFilterStringEndsWithList(this, "string_ends_with", false);
  public get stringEndsWith() {
    return this._stringEndsWith;
  }
  public putStringEndsWith(value: EventgridEventSubscriptionAdvancedFilterStringEndsWith[] | cdktf.IResolvable) {
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
  private _stringIn = new EventgridEventSubscriptionAdvancedFilterStringInList(this, "string_in", false);
  public get stringIn() {
    return this._stringIn;
  }
  public putStringIn(value: EventgridEventSubscriptionAdvancedFilterStringIn[] | cdktf.IResolvable) {
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
  private _stringNotBeginsWith = new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList(this, "string_not_begins_with", false);
  public get stringNotBeginsWith() {
    return this._stringNotBeginsWith;
  }
  public putStringNotBeginsWith(value: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[] | cdktf.IResolvable) {
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
  private _stringNotContains = new EventgridEventSubscriptionAdvancedFilterStringNotContainsList(this, "string_not_contains", false);
  public get stringNotContains() {
    return this._stringNotContains;
  }
  public putStringNotContains(value: EventgridEventSubscriptionAdvancedFilterStringNotContains[] | cdktf.IResolvable) {
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
  private _stringNotEndsWith = new EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList(this, "string_not_ends_with", false);
  public get stringNotEndsWith() {
    return this._stringNotEndsWith;
  }
  public putStringNotEndsWith(value: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[] | cdktf.IResolvable) {
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
  private _stringNotIn = new EventgridEventSubscriptionAdvancedFilterStringNotInList(this, "string_not_in", false);
  public get stringNotIn() {
    return this._stringNotIn;
  }
  public putStringNotIn(value: EventgridEventSubscriptionAdvancedFilterStringNotIn[] | cdktf.IResolvable) {
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
export interface EventgridEventSubscriptionAzureFunctionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
}

export function eventgridEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridEventSubscriptionAzureFunctionEndpointOutputReference | EventgridEventSubscriptionAzureFunctionEndpoint): any {
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


export function eventgridEventSubscriptionAzureFunctionEndpointToHclTerraform(struct?: EventgridEventSubscriptionAzureFunctionEndpointOutputReference | EventgridEventSubscriptionAzureFunctionEndpoint): any {
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

export class EventgridEventSubscriptionAzureFunctionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridEventSubscriptionDeadLetterIdentityToTerraform(struct?: EventgridEventSubscriptionDeadLetterIdentityOutputReference | EventgridEventSubscriptionDeadLetterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}


export function eventgridEventSubscriptionDeadLetterIdentityToHclTerraform(struct?: EventgridEventSubscriptionDeadLetterIdentityOutputReference | EventgridEventSubscriptionDeadLetterIdentity): any {
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

export class EventgridEventSubscriptionDeadLetterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
}

export function eventgridEventSubscriptionDeliveryIdentityToTerraform(struct?: EventgridEventSubscriptionDeliveryIdentityOutputReference | EventgridEventSubscriptionDeliveryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
  }
}


export function eventgridEventSubscriptionDeliveryIdentityToHclTerraform(struct?: EventgridEventSubscriptionDeliveryIdentityOutputReference | EventgridEventSubscriptionDeliveryIdentity): any {
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

export class EventgridEventSubscriptionDeliveryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}
  */
  readonly sourceField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}
  */
  readonly value?: string;
}

export function eventgridEventSubscriptionDeliveryPropertyToTerraform(struct?: EventgridEventSubscriptionDeliveryProperty | cdktf.IResolvable): any {
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


export function eventgridEventSubscriptionDeliveryPropertyToHclTerraform(struct?: EventgridEventSubscriptionDeliveryProperty | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionDeliveryPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventgridEventSubscriptionDeliveryProperty | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionDeliveryProperty | cdktf.IResolvable | undefined) {
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

export class EventgridEventSubscriptionDeliveryPropertyList extends cdktf.ComplexList {
  public internalValue? : EventgridEventSubscriptionDeliveryProperty[] | cdktf.IResolvable

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
  public get(index: number): EventgridEventSubscriptionDeliveryPropertyOutputReference {
    return new EventgridEventSubscriptionDeliveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridEventSubscriptionRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}
  */
  readonly eventTimeToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts: number;
}

export function eventgridEventSubscriptionRetryPolicyToTerraform(struct?: EventgridEventSubscriptionRetryPolicyOutputReference | EventgridEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_time_to_live: cdktf.numberToTerraform(struct!.eventTimeToLive),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}


export function eventgridEventSubscriptionRetryPolicyToHclTerraform(struct?: EventgridEventSubscriptionRetryPolicyOutputReference | EventgridEventSubscriptionRetryPolicy): any {
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

export class EventgridEventSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}
  */
  readonly storageBlobContainerName: string;
}

export function eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_blob_container_name: cdktf.stringToTerraform(struct!.storageBlobContainerName),
  }
}


export function eventgridEventSubscriptionStorageBlobDeadLetterDestinationToHclTerraform(struct?: EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference | EventgridEventSubscriptionStorageBlobDeadLetterDestination): any {
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

export class EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}
  */
  readonly queueMessageTimeToLiveInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function eventgridEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridEventSubscriptionStorageQueueEndpointOutputReference | EventgridEventSubscriptionStorageQueueEndpoint): any {
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


export function eventgridEventSubscriptionStorageQueueEndpointToHclTerraform(struct?: EventgridEventSubscriptionStorageQueueEndpointOutputReference | EventgridEventSubscriptionStorageQueueEndpoint): any {
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

export class EventgridEventSubscriptionStorageQueueEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
}

export function eventgridEventSubscriptionSubjectFilterToTerraform(struct?: EventgridEventSubscriptionSubjectFilterOutputReference | EventgridEventSubscriptionSubjectFilter): any {
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


export function eventgridEventSubscriptionSubjectFilterToHclTerraform(struct?: EventgridEventSubscriptionSubjectFilterOutputReference | EventgridEventSubscriptionSubjectFilter): any {
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

export class EventgridEventSubscriptionSubjectFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
export interface EventgridEventSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}
  */
  readonly update?: string;
}

export function eventgridEventSubscriptionTimeoutsToTerraform(struct?: EventgridEventSubscriptionTimeouts | cdktf.IResolvable): any {
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


export function eventgridEventSubscriptionTimeoutsToHclTerraform(struct?: EventgridEventSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class EventgridEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventgridEventSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridEventSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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
export interface EventgridEventSubscriptionWebhookEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}
  */
  readonly activeDirectoryAppIdOrUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}
  */
  readonly activeDirectoryTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}
  */
  readonly url: string;
}

export function eventgridEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridEventSubscriptionWebhookEndpointOutputReference | EventgridEventSubscriptionWebhookEndpoint): any {
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


export function eventgridEventSubscriptionWebhookEndpointToHclTerraform(struct?: EventgridEventSubscriptionWebhookEndpointOutputReference | EventgridEventSubscriptionWebhookEndpoint): any {
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

export class EventgridEventSubscriptionWebhookEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription azurerm_eventgrid_event_subscription}
*/
export class EventgridEventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_eventgrid_event_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventgridEventSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventgridEventSubscription to import
  * @param importFromId The id of the existing EventgridEventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventgridEventSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_eventgrid_event_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/eventgrid_event_subscription azurerm_eventgrid_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridEventSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_event_subscription',
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
    this._scope = config.scope;
    this._serviceBusQueueEndpointId = config.serviceBusQueueEndpointId;
    this._serviceBusTopicEndpointId = config.serviceBusTopicEndpointId;
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

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter = new EventgridEventSubscriptionAdvancedFilterOutputReference(this, "advanced_filter");
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
  private _azureFunctionEndpoint = new EventgridEventSubscriptionAzureFunctionEndpointOutputReference(this, "azure_function_endpoint");
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
  private _deadLetterIdentity = new EventgridEventSubscriptionDeadLetterIdentityOutputReference(this, "dead_letter_identity");
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
  private _deliveryIdentity = new EventgridEventSubscriptionDeliveryIdentityOutputReference(this, "delivery_identity");
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
  private _deliveryProperty = new EventgridEventSubscriptionDeliveryPropertyList(this, "delivery_property", false);
  public get deliveryProperty() {
    return this._deliveryProperty;
  }
  public putDeliveryProperty(value: EventgridEventSubscriptionDeliveryProperty[] | cdktf.IResolvable) {
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
  private _retryPolicy = new EventgridEventSubscriptionRetryPolicyOutputReference(this, "retry_policy");
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
  private _storageBlobDeadLetterDestination = new EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(this, "storage_blob_dead_letter_destination");
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
  private _storageQueueEndpoint = new EventgridEventSubscriptionStorageQueueEndpointOutputReference(this, "storage_queue_endpoint");
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
  private _subjectFilter = new EventgridEventSubscriptionSubjectFilterOutputReference(this, "subject_filter");
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
  private _timeouts = new EventgridEventSubscriptionTimeoutsOutputReference(this, "timeouts");
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
  private _webhookEndpoint = new EventgridEventSubscriptionWebhookEndpointOutputReference(this, "webhook_endpoint");
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
      id: cdktf.stringToTerraform(this._id),
      included_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedEventTypes),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      service_bus_queue_endpoint_id: cdktf.stringToTerraform(this._serviceBusQueueEndpointId),
      service_bus_topic_endpoint_id: cdktf.stringToTerraform(this._serviceBusTopicEndpointId),
      advanced_filter: eventgridEventSubscriptionAdvancedFilterToTerraform(this._advancedFilter.internalValue),
      azure_function_endpoint: eventgridEventSubscriptionAzureFunctionEndpointToTerraform(this._azureFunctionEndpoint.internalValue),
      dead_letter_identity: eventgridEventSubscriptionDeadLetterIdentityToTerraform(this._deadLetterIdentity.internalValue),
      delivery_identity: eventgridEventSubscriptionDeliveryIdentityToTerraform(this._deliveryIdentity.internalValue),
      delivery_property: cdktf.listMapper(eventgridEventSubscriptionDeliveryPropertyToTerraform, true)(this._deliveryProperty.internalValue),
      retry_policy: eventgridEventSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      storage_blob_dead_letter_destination: eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(this._storageBlobDeadLetterDestination.internalValue),
      storage_queue_endpoint: eventgridEventSubscriptionStorageQueueEndpointToTerraform(this._storageQueueEndpoint.internalValue),
      subject_filter: eventgridEventSubscriptionSubjectFilterToTerraform(this._subjectFilter.internalValue),
      timeouts: eventgridEventSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
      webhook_endpoint: eventgridEventSubscriptionWebhookEndpointToTerraform(this._webhookEndpoint.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
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
      advanced_filter: {
        value: eventgridEventSubscriptionAdvancedFilterToHclTerraform(this._advancedFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionAdvancedFilterList",
      },
      azure_function_endpoint: {
        value: eventgridEventSubscriptionAzureFunctionEndpointToHclTerraform(this._azureFunctionEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionAzureFunctionEndpointList",
      },
      dead_letter_identity: {
        value: eventgridEventSubscriptionDeadLetterIdentityToHclTerraform(this._deadLetterIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionDeadLetterIdentityList",
      },
      delivery_identity: {
        value: eventgridEventSubscriptionDeliveryIdentityToHclTerraform(this._deliveryIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionDeliveryIdentityList",
      },
      delivery_property: {
        value: cdktf.listMapperHcl(eventgridEventSubscriptionDeliveryPropertyToHclTerraform, true)(this._deliveryProperty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionDeliveryPropertyList",
      },
      retry_policy: {
        value: eventgridEventSubscriptionRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionRetryPolicyList",
      },
      storage_blob_dead_letter_destination: {
        value: eventgridEventSubscriptionStorageBlobDeadLetterDestinationToHclTerraform(this._storageBlobDeadLetterDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionStorageBlobDeadLetterDestinationList",
      },
      storage_queue_endpoint: {
        value: eventgridEventSubscriptionStorageQueueEndpointToHclTerraform(this._storageQueueEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionStorageQueueEndpointList",
      },
      subject_filter: {
        value: eventgridEventSubscriptionSubjectFilterToHclTerraform(this._subjectFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionSubjectFilterList",
      },
      timeouts: {
        value: eventgridEventSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventgridEventSubscriptionTimeouts",
      },
      webhook_endpoint: {
        value: eventgridEventSubscriptionWebhookEndpointToHclTerraform(this._webhookEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridEventSubscriptionWebhookEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
