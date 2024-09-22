// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnFrontdoorOriginGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}
  */
  readonly cdnFrontdoorProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}
  */
  readonly restoreTrafficTimeToHealedOrNewEndpointInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}
  */
  readonly sessionAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * health_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}
  */
  readonly healthProbe?: CdnFrontdoorOriginGroupHealthProbe;
  /**
  * load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}
  */
  readonly loadBalancing: CdnFrontdoorOriginGroupLoadBalancing;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}
  */
  readonly timeouts?: CdnFrontdoorOriginGroupTimeouts;
}
export interface CdnFrontdoorOriginGroupHealthProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}
  */
  readonly intervalInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}
  */
  readonly requestType?: string;
}

export function cdnFrontdoorOriginGroupHealthProbeToTerraform(struct?: CdnFrontdoorOriginGroupHealthProbeOutputReference | CdnFrontdoorOriginGroupHealthProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_type: cdktf.stringToTerraform(struct!.requestType),
  }
}


export function cdnFrontdoorOriginGroupHealthProbeToHclTerraform(struct?: CdnFrontdoorOriginGroupHealthProbeOutputReference | CdnFrontdoorOriginGroupHealthProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorOriginGroupHealthProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorOriginGroupHealthProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorOriginGroupHealthProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalInSeconds = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._requestType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalInSeconds = value.intervalInSeconds;
      this._path = value.path;
      this._protocol = value.protocol;
      this._requestType = value.requestType;
    }
  }

  // interval_in_seconds - computed: false, optional: false, required: true
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // request_type - computed: false, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }
}
export interface CdnFrontdoorOriginGroupLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}
  */
  readonly additionalLatencyInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}
  */
  readonly sampleSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}
  */
  readonly successfulSamplesRequired?: number;
}

export function cdnFrontdoorOriginGroupLoadBalancingToTerraform(struct?: CdnFrontdoorOriginGroupLoadBalancingOutputReference | CdnFrontdoorOriginGroupLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_latency_in_milliseconds: cdktf.numberToTerraform(struct!.additionalLatencyInMilliseconds),
    sample_size: cdktf.numberToTerraform(struct!.sampleSize),
    successful_samples_required: cdktf.numberToTerraform(struct!.successfulSamplesRequired),
  }
}


export function cdnFrontdoorOriginGroupLoadBalancingToHclTerraform(struct?: CdnFrontdoorOriginGroupLoadBalancingOutputReference | CdnFrontdoorOriginGroupLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_latency_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.additionalLatencyInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_size: {
      value: cdktf.numberToHclTerraform(struct!.sampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successful_samples_required: {
      value: cdktf.numberToHclTerraform(struct!.successfulSamplesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorOriginGroupLoadBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorOriginGroupLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLatencyInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLatencyInMilliseconds = this._additionalLatencyInMilliseconds;
    }
    if (this._sampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSize = this._sampleSize;
    }
    if (this._successfulSamplesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulSamplesRequired = this._successfulSamplesRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorOriginGroupLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalLatencyInMilliseconds = undefined;
      this._sampleSize = undefined;
      this._successfulSamplesRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalLatencyInMilliseconds = value.additionalLatencyInMilliseconds;
      this._sampleSize = value.sampleSize;
      this._successfulSamplesRequired = value.successfulSamplesRequired;
    }
  }

  // additional_latency_in_milliseconds - computed: false, optional: true, required: false
  private _additionalLatencyInMilliseconds?: number; 
  public get additionalLatencyInMilliseconds() {
    return this.getNumberAttribute('additional_latency_in_milliseconds');
  }
  public set additionalLatencyInMilliseconds(value: number) {
    this._additionalLatencyInMilliseconds = value;
  }
  public resetAdditionalLatencyInMilliseconds() {
    this._additionalLatencyInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLatencyInMillisecondsInput() {
    return this._additionalLatencyInMilliseconds;
  }

  // sample_size - computed: false, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }

  // successful_samples_required - computed: false, optional: true, required: false
  private _successfulSamplesRequired?: number; 
  public get successfulSamplesRequired() {
    return this.getNumberAttribute('successful_samples_required');
  }
  public set successfulSamplesRequired(value: number) {
    this._successfulSamplesRequired = value;
  }
  public resetSuccessfulSamplesRequired() {
    this._successfulSamplesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulSamplesRequiredInput() {
    return this._successfulSamplesRequired;
  }
}
export interface CdnFrontdoorOriginGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorOriginGroupTimeoutsToTerraform(struct?: CdnFrontdoorOriginGroupTimeouts | cdktf.IResolvable): any {
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


export function cdnFrontdoorOriginGroupTimeoutsToHclTerraform(struct?: CdnFrontdoorOriginGroupTimeouts | cdktf.IResolvable): any {
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

export class CdnFrontdoorOriginGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorOriginGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorOriginGroupTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}
*/
export class CdnFrontdoorOriginGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_origin_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorOriginGroup to import
  * @param importFromId The id of the existing CdnFrontdoorOriginGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorOriginGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_origin_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorOriginGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorOriginGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_origin_group',
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
    this._cdnFrontdoorProfileId = config.cdnFrontdoorProfileId;
    this._id = config.id;
    this._name = config.name;
    this._restoreTrafficTimeToHealedOrNewEndpointInMinutes = config.restoreTrafficTimeToHealedOrNewEndpointInMinutes;
    this._sessionAffinityEnabled = config.sessionAffinityEnabled;
    this._healthProbe.internalValue = config.healthProbe;
    this._loadBalancing.internalValue = config.loadBalancing;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_frontdoor_profile_id - computed: false, optional: false, required: true
  private _cdnFrontdoorProfileId?: string; 
  public get cdnFrontdoorProfileId() {
    return this.getStringAttribute('cdn_frontdoor_profile_id');
  }
  public set cdnFrontdoorProfileId(value: string) {
    this._cdnFrontdoorProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorProfileIdInput() {
    return this._cdnFrontdoorProfileId;
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

  // restore_traffic_time_to_healed_or_new_endpoint_in_minutes - computed: false, optional: true, required: false
  private _restoreTrafficTimeToHealedOrNewEndpointInMinutes?: number; 
  public get restoreTrafficTimeToHealedOrNewEndpointInMinutes() {
    return this.getNumberAttribute('restore_traffic_time_to_healed_or_new_endpoint_in_minutes');
  }
  public set restoreTrafficTimeToHealedOrNewEndpointInMinutes(value: number) {
    this._restoreTrafficTimeToHealedOrNewEndpointInMinutes = value;
  }
  public resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes() {
    this._restoreTrafficTimeToHealedOrNewEndpointInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTrafficTimeToHealedOrNewEndpointInMinutesInput() {
    return this._restoreTrafficTimeToHealedOrNewEndpointInMinutes;
  }

  // session_affinity_enabled - computed: false, optional: true, required: false
  private _sessionAffinityEnabled?: boolean | cdktf.IResolvable; 
  public get sessionAffinityEnabled() {
    return this.getBooleanAttribute('session_affinity_enabled');
  }
  public set sessionAffinityEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionAffinityEnabled = value;
  }
  public resetSessionAffinityEnabled() {
    this._sessionAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityEnabledInput() {
    return this._sessionAffinityEnabled;
  }

  // health_probe - computed: false, optional: true, required: false
  private _healthProbe = new CdnFrontdoorOriginGroupHealthProbeOutputReference(this, "health_probe");
  public get healthProbe() {
    return this._healthProbe;
  }
  public putHealthProbe(value: CdnFrontdoorOriginGroupHealthProbe) {
    this._healthProbe.internalValue = value;
  }
  public resetHealthProbe() {
    this._healthProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeInput() {
    return this._healthProbe.internalValue;
  }

  // load_balancing - computed: false, optional: false, required: true
  private _loadBalancing = new CdnFrontdoorOriginGroupLoadBalancingOutputReference(this, "load_balancing");
  public get loadBalancing() {
    return this._loadBalancing;
  }
  public putLoadBalancing(value: CdnFrontdoorOriginGroupLoadBalancing) {
    this._loadBalancing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorOriginGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorOriginGroupTimeouts) {
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
      cdn_frontdoor_profile_id: cdktf.stringToTerraform(this._cdnFrontdoorProfileId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      restore_traffic_time_to_healed_or_new_endpoint_in_minutes: cdktf.numberToTerraform(this._restoreTrafficTimeToHealedOrNewEndpointInMinutes),
      session_affinity_enabled: cdktf.booleanToTerraform(this._sessionAffinityEnabled),
      health_probe: cdnFrontdoorOriginGroupHealthProbeToTerraform(this._healthProbe.internalValue),
      load_balancing: cdnFrontdoorOriginGroupLoadBalancingToTerraform(this._loadBalancing.internalValue),
      timeouts: cdnFrontdoorOriginGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdn_frontdoor_profile_id: {
        value: cdktf.stringToHclTerraform(this._cdnFrontdoorProfileId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_traffic_time_to_healed_or_new_endpoint_in_minutes: {
        value: cdktf.numberToHclTerraform(this._restoreTrafficTimeToHealedOrNewEndpointInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_affinity_enabled: {
        value: cdktf.booleanToHclTerraform(this._sessionAffinityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_probe: {
        value: cdnFrontdoorOriginGroupHealthProbeToHclTerraform(this._healthProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorOriginGroupHealthProbeList",
      },
      load_balancing: {
        value: cdnFrontdoorOriginGroupLoadBalancingToHclTerraform(this._loadBalancing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorOriginGroupLoadBalancingList",
      },
      timeouts: {
        value: cdnFrontdoorOriginGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorOriginGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
