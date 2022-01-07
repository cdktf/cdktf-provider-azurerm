// https://www.terraform.io/docs/providers/azurerm/r/iothub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#endpoint Iothub#endpoint}
  */
  readonly endpoint?: IothubEndpoint[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#enrichment Iothub#enrichment}
  */
  readonly enrichment?: IothubEnrichment[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#event_hub_partition_count Iothub#event_hub_partition_count}
  */
  readonly eventHubPartitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#event_hub_retention_in_days Iothub#event_hub_retention_in_days}
  */
  readonly eventHubRetentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#location Iothub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#min_tls_version Iothub#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#name Iothub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#public_network_access_enabled Iothub#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#resource_group_name Iothub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#route Iothub#route}
  */
  readonly route?: IothubRoute[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#tags Iothub#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * cloud_to_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#cloud_to_device Iothub#cloud_to_device}
  */
  readonly cloudToDevice?: IothubCloudToDevice;
  /**
  * fallback_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#fallback_route Iothub#fallback_route}
  */
  readonly fallbackRoute?: IothubFallbackRoute;
  /**
  * file_upload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#file_upload Iothub#file_upload}
  */
  readonly fileUpload?: IothubFileUpload;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#identity Iothub#identity}
  */
  readonly identity?: IothubIdentity;
  /**
  * ip_filter_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#ip_filter_rule Iothub#ip_filter_rule}
  */
  readonly ipFilterRule?: IothubIpFilterRule[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#sku Iothub#sku}
  */
  readonly sku: IothubSku;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#timeouts Iothub#timeouts}
  */
  readonly timeouts?: IothubTimeouts;
}
export interface IothubEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#batch_frequency_in_seconds Iothub#batch_frequency_in_seconds}
  */
  readonly batchFrequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#connection_string Iothub#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#container_name Iothub#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#encoding Iothub#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#file_name_format Iothub#file_name_format}
  */
  readonly fileNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#max_chunk_size_in_bytes Iothub#max_chunk_size_in_bytes}
  */
  readonly maxChunkSizeInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#name Iothub#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#resource_group_name Iothub#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#type Iothub#type}
  */
  readonly type?: string;
}

export function iothubEndpointToTerraform(struct?: IothubEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_frequency_in_seconds: struct!.batchFrequencyInSeconds === undefined ? null : cdktf.numberToTerraform(struct!.batchFrequencyInSeconds),
    connection_string: struct!.connectionString === undefined ? null : cdktf.stringToTerraform(struct!.connectionString),
    container_name: struct!.containerName === undefined ? null : cdktf.stringToTerraform(struct!.containerName),
    encoding: struct!.encoding === undefined ? null : cdktf.stringToTerraform(struct!.encoding),
    file_name_format: struct!.fileNameFormat === undefined ? null : cdktf.stringToTerraform(struct!.fileNameFormat),
    max_chunk_size_in_bytes: struct!.maxChunkSizeInBytes === undefined ? null : cdktf.numberToTerraform(struct!.maxChunkSizeInBytes),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    resource_group_name: struct!.resourceGroupName === undefined ? null : cdktf.stringToTerraform(struct!.resourceGroupName),
    type: struct!.type === undefined ? null : cdktf.stringToTerraform(struct!.type),
  }
}

export interface IothubEnrichment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#endpoint_names Iothub#endpoint_names}
  */
  readonly endpointNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#key Iothub#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#value Iothub#value}
  */
  readonly value?: string;
}

export function iothubEnrichmentToTerraform(struct?: IothubEnrichment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_names: struct!.endpointNames === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.endpointNames),
    key: struct!.key === undefined ? null : cdktf.stringToTerraform(struct!.key),
    value: struct!.value === undefined ? null : cdktf.stringToTerraform(struct!.value),
  }
}

export interface IothubRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#condition Iothub#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#enabled Iothub#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#endpoint_names Iothub#endpoint_names}
  */
  readonly endpointNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#name Iothub#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#source Iothub#source}
  */
  readonly source?: string;
}

export function iothubRouteToTerraform(struct?: IothubRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: struct!.condition === undefined ? null : cdktf.stringToTerraform(struct!.condition),
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
    endpoint_names: struct!.endpointNames === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.endpointNames),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    source: struct!.source === undefined ? null : cdktf.stringToTerraform(struct!.source),
  }
}

export class IothubSharedAccessPolicy extends cdktf.ComplexComputedList {

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
}
export interface IothubCloudToDeviceFeedback {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#lock_duration Iothub#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#max_delivery_count Iothub#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#time_to_live Iothub#time_to_live}
  */
  readonly timeToLive?: string;
}

export function iothubCloudToDeviceFeedbackToTerraform(struct?: IothubCloudToDeviceFeedback): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lock_duration: cdktf.stringToTerraform(struct!.lockDuration),
    max_delivery_count: cdktf.numberToTerraform(struct!.maxDeliveryCount),
    time_to_live: cdktf.stringToTerraform(struct!.timeToLive),
  }
}

export interface IothubCloudToDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#default_ttl Iothub#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#max_delivery_count Iothub#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * feedback block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#feedback Iothub#feedback}
  */
  readonly feedback?: IothubCloudToDeviceFeedback[];
}

export function iothubCloudToDeviceToTerraform(struct?: IothubCloudToDeviceOutputReference | IothubCloudToDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: cdktf.stringToTerraform(struct!.defaultTtl),
    max_delivery_count: cdktf.numberToTerraform(struct!.maxDeliveryCount),
    feedback: cdktf.listMapper(iothubCloudToDeviceFeedbackToTerraform)(struct!.feedback),
  }
}

export class IothubCloudToDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubCloudToDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._maxDeliveryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryCount = this._maxDeliveryCount;
    }
    if (this._feedback !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedback = this._feedback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubCloudToDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl = undefined;
      this._maxDeliveryCount = undefined;
      this._feedback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTtl = value.defaultTtl;
      this._maxDeliveryCount = value.maxDeliveryCount;
      this._feedback = value.feedback;
    }
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // feedback - computed: false, optional: true, required: false
  private _feedback?: IothubCloudToDeviceFeedback[]; 
  public get feedback() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('feedback') as any;
  }
  public set feedback(value: IothubCloudToDeviceFeedback[]) {
    this._feedback = value;
  }
  public resetFeedback() {
    this._feedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackInput() {
    return this._feedback;
  }
}
export interface IothubFallbackRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#condition Iothub#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#enabled Iothub#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#endpoint_names Iothub#endpoint_names}
  */
  readonly endpointNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#source Iothub#source}
  */
  readonly source?: string;
}

export function iothubFallbackRouteToTerraform(struct?: IothubFallbackRouteOutputReference | IothubFallbackRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.endpointNames),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class IothubFallbackRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubFallbackRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointNames = this._endpointNames;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubFallbackRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._enabled = undefined;
      this._endpointNames = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._endpointNames = value.endpointNames;
      this._source = value.source;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_names - computed: true, optional: true, required: false
  private _endpointNames?: string[]; 
  public get endpointNames() {
    return this.getListAttribute('endpoint_names');
  }
  public set endpointNames(value: string[]) {
    this._endpointNames = value;
  }
  public resetEndpointNames() {
    this._endpointNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNamesInput() {
    return this._endpointNames;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface IothubFileUpload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#connection_string Iothub#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#container_name Iothub#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#default_ttl Iothub#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#lock_duration Iothub#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#max_delivery_count Iothub#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#notifications Iothub#notifications}
  */
  readonly notifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#sas_ttl Iothub#sas_ttl}
  */
  readonly sasTtl?: string;
}

export function iothubFileUploadToTerraform(struct?: IothubFileUploadOutputReference | IothubFileUpload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    default_ttl: cdktf.stringToTerraform(struct!.defaultTtl),
    lock_duration: cdktf.stringToTerraform(struct!.lockDuration),
    max_delivery_count: cdktf.numberToTerraform(struct!.maxDeliveryCount),
    notifications: cdktf.booleanToTerraform(struct!.notifications),
    sas_ttl: cdktf.stringToTerraform(struct!.sasTtl),
  }
}

export class IothubFileUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubFileUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._lockDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockDuration = this._lockDuration;
    }
    if (this._maxDeliveryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryCount = this._maxDeliveryCount;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._sasTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasTtl = this._sasTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubFileUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._containerName = undefined;
      this._defaultTtl = undefined;
      this._lockDuration = undefined;
      this._maxDeliveryCount = undefined;
      this._notifications = undefined;
      this._sasTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
      this._containerName = value.containerName;
      this._defaultTtl = value.defaultTtl;
      this._lockDuration = value.lockDuration;
      this._maxDeliveryCount = value.maxDeliveryCount;
      this._notifications = value.notifications;
      this._sasTtl = value.sasTtl;
    }
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration?: string; 
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: boolean | cdktf.IResolvable; 
  public get notifications() {
    return this.getBooleanAttribute('notifications') as any;
  }
  public set notifications(value: boolean | cdktf.IResolvable) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // sas_ttl - computed: true, optional: true, required: false
  private _sasTtl?: string; 
  public get sasTtl() {
    return this.getStringAttribute('sas_ttl');
  }
  public set sasTtl(value: string) {
    this._sasTtl = value;
  }
  public resetSasTtl() {
    this._sasTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTtlInput() {
    return this._sasTtl;
  }
}
export interface IothubIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#identity_ids Iothub#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#type Iothub#type}
  */
  readonly type: string;
}

export function iothubIdentityToTerraform(struct?: IothubIdentityOutputReference | IothubIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class IothubIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
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
}
export interface IothubIpFilterRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#action Iothub#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#ip_mask Iothub#ip_mask}
  */
  readonly ipMask: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#name Iothub#name}
  */
  readonly name: string;
}

export function iothubIpFilterRuleToTerraform(struct?: IothubIpFilterRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface IothubSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#capacity Iothub#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#name Iothub#name}
  */
  readonly name: string;
}

export function iothubSkuToTerraform(struct?: IothubSkuOutputReference | IothubSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class IothubSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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
}
export interface IothubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#create Iothub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#delete Iothub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#read Iothub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html#update Iothub#update}
  */
  readonly update?: string;
}

export function iothubTimeoutsToTerraform(struct?: IothubTimeoutsOutputReference | IothubTimeouts): any {
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

export class IothubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubTimeouts | undefined {
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

  public set internalValue(value: IothubTimeouts | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html azurerm_iothub}
*/
export class Iothub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iothub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iothub.html azurerm_iothub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubConfig
  */
  public constructor(scope: Construct, id: string, config: IothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpoint = config.endpoint;
    this._enrichment = config.enrichment;
    this._eventHubPartitionCount = config.eventHubPartitionCount;
    this._eventHubRetentionInDays = config.eventHubRetentionInDays;
    this._location = config.location;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._route = config.route;
    this._tags = config.tags;
    this._cloudToDevice.internalValue = config.cloudToDevice;
    this._fallbackRoute.internalValue = config.fallbackRoute;
    this._fileUpload.internalValue = config.fileUpload;
    this._identity.internalValue = config.identity;
    this._ipFilterRule = config.ipFilterRule;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: IothubEndpoint[]; 
  public get endpoint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('endpoint') as any;
  }
  public set endpoint(value: IothubEndpoint[]) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // enrichment - computed: true, optional: true, required: false
  private _enrichment?: IothubEnrichment[]; 
  public get enrichment() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('enrichment') as any;
  }
  public set enrichment(value: IothubEnrichment[]) {
    this._enrichment = value;
  }
  public resetEnrichment() {
    this._enrichment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment;
  }

  // event_hub_events_endpoint - computed: true, optional: false, required: false
  public get eventHubEventsEndpoint() {
    return this.getStringAttribute('event_hub_events_endpoint');
  }

  // event_hub_events_path - computed: true, optional: false, required: false
  public get eventHubEventsPath() {
    return this.getStringAttribute('event_hub_events_path');
  }

  // event_hub_operations_endpoint - computed: true, optional: false, required: false
  public get eventHubOperationsEndpoint() {
    return this.getStringAttribute('event_hub_operations_endpoint');
  }

  // event_hub_operations_path - computed: true, optional: false, required: false
  public get eventHubOperationsPath() {
    return this.getStringAttribute('event_hub_operations_path');
  }

  // event_hub_partition_count - computed: true, optional: true, required: false
  private _eventHubPartitionCount?: number; 
  public get eventHubPartitionCount() {
    return this.getNumberAttribute('event_hub_partition_count');
  }
  public set eventHubPartitionCount(value: number) {
    this._eventHubPartitionCount = value;
  }
  public resetEventHubPartitionCount() {
    this._eventHubPartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubPartitionCountInput() {
    return this._eventHubPartitionCount;
  }

  // event_hub_retention_in_days - computed: true, optional: true, required: false
  private _eventHubRetentionInDays?: number; 
  public get eventHubRetentionInDays() {
    return this.getNumberAttribute('event_hub_retention_in_days');
  }
  public set eventHubRetentionInDays(value: number) {
    this._eventHubRetentionInDays = value;
  }
  public resetEventHubRetentionInDays() {
    this._eventHubRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubRetentionInDaysInput() {
    return this._eventHubRetentionInDays;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // route - computed: true, optional: true, required: false
  private _route?: IothubRoute[]; 
  public get route() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('route') as any;
  }
  public set route(value: IothubRoute[]) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // shared_access_policy - computed: true, optional: false, required: false
  public sharedAccessPolicy(index: string) {
    return new IothubSharedAccessPolicy(this, 'shared_access_policy', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // cloud_to_device - computed: false, optional: true, required: false
  private _cloudToDevice = new IothubCloudToDeviceOutputReference(this as any, "cloud_to_device", true);
  public get cloudToDevice() {
    return this._cloudToDevice;
  }
  public putCloudToDevice(value: IothubCloudToDevice) {
    this._cloudToDevice.internalValue = value;
  }
  public resetCloudToDevice() {
    this._cloudToDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudToDeviceInput() {
    return this._cloudToDevice.internalValue;
  }

  // fallback_route - computed: false, optional: true, required: false
  private _fallbackRoute = new IothubFallbackRouteOutputReference(this as any, "fallback_route", true);
  public get fallbackRoute() {
    return this._fallbackRoute;
  }
  public putFallbackRoute(value: IothubFallbackRoute) {
    this._fallbackRoute.internalValue = value;
  }
  public resetFallbackRoute() {
    this._fallbackRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRouteInput() {
    return this._fallbackRoute.internalValue;
  }

  // file_upload - computed: false, optional: true, required: false
  private _fileUpload = new IothubFileUploadOutputReference(this as any, "file_upload", true);
  public get fileUpload() {
    return this._fileUpload;
  }
  public putFileUpload(value: IothubFileUpload) {
    this._fileUpload.internalValue = value;
  }
  public resetFileUpload() {
    this._fileUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadInput() {
    return this._fileUpload.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new IothubIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: IothubIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // ip_filter_rule - computed: false, optional: true, required: false
  private _ipFilterRule?: IothubIpFilterRule[]; 
  public get ipFilterRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_filter_rule') as any;
  }
  public set ipFilterRule(value: IothubIpFilterRule[]) {
    this._ipFilterRule = value;
  }
  public resetIpFilterRule() {
    this._ipFilterRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterRuleInput() {
    return this._ipFilterRule;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new IothubSkuOutputReference(this as any, "sku", true);
  public get sku() {
    return this._sku;
  }
  public putSku(value: IothubSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IothubTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IothubTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.listMapper(iothubEndpointToTerraform)(this._endpoint),
      enrichment: cdktf.listMapper(iothubEnrichmentToTerraform)(this._enrichment),
      event_hub_partition_count: cdktf.numberToTerraform(this._eventHubPartitionCount),
      event_hub_retention_in_days: cdktf.numberToTerraform(this._eventHubRetentionInDays),
      location: cdktf.stringToTerraform(this._location),
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route: cdktf.listMapper(iothubRouteToTerraform)(this._route),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      cloud_to_device: iothubCloudToDeviceToTerraform(this._cloudToDevice.internalValue),
      fallback_route: iothubFallbackRouteToTerraform(this._fallbackRoute.internalValue),
      file_upload: iothubFileUploadToTerraform(this._fileUpload.internalValue),
      identity: iothubIdentityToTerraform(this._identity.internalValue),
      ip_filter_rule: cdktf.listMapper(iothubIpFilterRuleToTerraform)(this._ipFilterRule),
      sku: iothubSkuToTerraform(this._sku.internalValue),
      timeouts: iothubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
