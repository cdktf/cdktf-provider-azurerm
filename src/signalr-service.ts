// https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalrServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}
  */
  readonly connectivityLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#live_trace_enabled SignalrService#live_trace_enabled}
  */
  readonly liveTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#location SignalrService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#messaging_logs_enabled SignalrService#messaging_logs_enabled}
  */
  readonly messagingLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#name SignalrService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#resource_group_name SignalrService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#service_mode SignalrService#service_mode}
  */
  readonly serviceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#tags SignalrService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#cors SignalrService#cors}
  */
  readonly cors?: SignalrServiceCors[];
  /**
  * features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#features SignalrService#features}
  */
  readonly features?: SignalrServiceFeatures[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#sku SignalrService#sku}
  */
  readonly sku: SignalrServiceSku;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#timeouts SignalrService#timeouts}
  */
  readonly timeouts?: SignalrServiceTimeouts;
  /**
  * upstream_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#upstream_endpoint SignalrService#upstream_endpoint}
  */
  readonly upstreamEndpoint?: SignalrServiceUpstreamEndpoint[];
}
export interface SignalrServiceCors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#allowed_origins SignalrService#allowed_origins}
  */
  readonly allowedOrigins: string[];
}

export function signalrServiceCorsToTerraform(struct?: SignalrServiceCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
  }
}

export interface SignalrServiceFeatures {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#flag SignalrService#flag}
  */
  readonly flag: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#value SignalrService#value}
  */
  readonly value: string;
}

export function signalrServiceFeaturesToTerraform(struct?: SignalrServiceFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SignalrServiceSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#capacity SignalrService#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#name SignalrService#name}
  */
  readonly name: string;
}

export function signalrServiceSkuToTerraform(struct?: SignalrServiceSkuOutputReference | SignalrServiceSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SignalrServiceSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SignalrServiceSku | undefined {
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

  public set internalValue(value: SignalrServiceSku | undefined) {
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
export interface SignalrServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#create SignalrService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#delete SignalrService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#read SignalrService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#update SignalrService#update}
  */
  readonly update?: string;
}

export function signalrServiceTimeoutsToTerraform(struct?: SignalrServiceTimeoutsOutputReference | SignalrServiceTimeouts): any {
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

export class SignalrServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SignalrServiceTimeouts | undefined {
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

  public set internalValue(value: SignalrServiceTimeouts | undefined) {
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
export interface SignalrServiceUpstreamEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#category_pattern SignalrService#category_pattern}
  */
  readonly categoryPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#event_pattern SignalrService#event_pattern}
  */
  readonly eventPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#hub_pattern SignalrService#hub_pattern}
  */
  readonly hubPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#url_template SignalrService#url_template}
  */
  readonly urlTemplate: string;
}

export function signalrServiceUpstreamEndpointToTerraform(struct?: SignalrServiceUpstreamEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.categoryPattern),
    event_pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventPattern),
    hub_pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hubPattern),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html azurerm_signalr_service}
*/
export class SignalrService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_signalr_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html azurerm_signalr_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalrServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SignalrServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_signalr_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectivityLogsEnabled = config.connectivityLogsEnabled;
    this._liveTraceEnabled = config.liveTraceEnabled;
    this._location = config.location;
    this._messagingLogsEnabled = config.messagingLogsEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceMode = config.serviceMode;
    this._tags = config.tags;
    this._cors = config.cors;
    this._features = config.features;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
    this._upstreamEndpoint = config.upstreamEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connectivity_logs_enabled - computed: true, optional: true, required: false
  private _connectivityLogsEnabled?: boolean | cdktf.IResolvable; 
  public get connectivityLogsEnabled() {
    return this.getBooleanAttribute('connectivity_logs_enabled') as any;
  }
  public set connectivityLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._connectivityLogsEnabled = value;
  }
  public resetConnectivityLogsEnabled() {
    this._connectivityLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityLogsEnabledInput() {
    return this._connectivityLogsEnabled;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // live_trace_enabled - computed: true, optional: true, required: false
  private _liveTraceEnabled?: boolean | cdktf.IResolvable; 
  public get liveTraceEnabled() {
    return this.getBooleanAttribute('live_trace_enabled') as any;
  }
  public set liveTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._liveTraceEnabled = value;
  }
  public resetLiveTraceEnabled() {
    this._liveTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceEnabledInput() {
    return this._liveTraceEnabled;
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

  // messaging_logs_enabled - computed: true, optional: true, required: false
  private _messagingLogsEnabled?: boolean | cdktf.IResolvable; 
  public get messagingLogsEnabled() {
    return this.getBooleanAttribute('messaging_logs_enabled') as any;
  }
  public set messagingLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingLogsEnabled = value;
  }
  public resetMessagingLogsEnabled() {
    this._messagingLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingLogsEnabledInput() {
    return this._messagingLogsEnabled;
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getNumberAttribute('public_port');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // service_mode - computed: true, optional: true, required: false
  private _serviceMode?: string; 
  public get serviceMode() {
    return this.getStringAttribute('service_mode');
  }
  public set serviceMode(value: string) {
    this._serviceMode = value;
  }
  public resetServiceMode() {
    this._serviceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceModeInput() {
    return this._serviceMode;
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

  // cors - computed: false, optional: true, required: false
  private _cors?: SignalrServiceCors[]; 
  public get cors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors') as any;
  }
  public set cors(value: SignalrServiceCors[]) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // features - computed: false, optional: true, required: false
  private _features?: SignalrServiceFeatures[]; 
  public get features() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('features') as any;
  }
  public set features(value: SignalrServiceFeatures[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new SignalrServiceSkuOutputReference(this as any, "sku", true);
  public get sku() {
    return this._sku;
  }
  public putSku(value: SignalrServiceSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SignalrServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SignalrServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upstream_endpoint - computed: false, optional: true, required: false
  private _upstreamEndpoint?: SignalrServiceUpstreamEndpoint[]; 
  public get upstreamEndpoint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('upstream_endpoint') as any;
  }
  public set upstreamEndpoint(value: SignalrServiceUpstreamEndpoint[]) {
    this._upstreamEndpoint = value;
  }
  public resetUpstreamEndpoint() {
    this._upstreamEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamEndpointInput() {
    return this._upstreamEndpoint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connectivity_logs_enabled: cdktf.booleanToTerraform(this._connectivityLogsEnabled),
      live_trace_enabled: cdktf.booleanToTerraform(this._liveTraceEnabled),
      location: cdktf.stringToTerraform(this._location),
      messaging_logs_enabled: cdktf.booleanToTerraform(this._messagingLogsEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_mode: cdktf.stringToTerraform(this._serviceMode),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      cors: cdktf.listMapper(signalrServiceCorsToTerraform)(this._cors),
      features: cdktf.listMapper(signalrServiceFeaturesToTerraform)(this._features),
      sku: signalrServiceSkuToTerraform(this._sku.internalValue),
      timeouts: signalrServiceTimeoutsToTerraform(this._timeouts.internalValue),
      upstream_endpoint: cdktf.listMapper(signalrServiceUpstreamEndpointToTerraform)(this._upstreamEndpoint),
    };
  }
}
