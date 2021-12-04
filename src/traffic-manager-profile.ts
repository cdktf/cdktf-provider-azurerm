// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficManagerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#max_return TrafficManagerProfile#max_return}
  */
  readonly maxReturn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#name TrafficManagerProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#profile_status TrafficManagerProfile#profile_status}
  */
  readonly profileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#resource_group_name TrafficManagerProfile#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#tags TrafficManagerProfile#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#traffic_routing_method TrafficManagerProfile#traffic_routing_method}
  */
  readonly trafficRoutingMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}
  */
  readonly trafficViewEnabled?: boolean | cdktf.IResolvable;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#dns_config TrafficManagerProfile#dns_config}
  */
  readonly dnsConfig: TrafficManagerProfileDnsConfig;
  /**
  * monitor_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#monitor_config TrafficManagerProfile#monitor_config}
  */
  readonly monitorConfig: TrafficManagerProfileMonitorConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#timeouts TrafficManagerProfile#timeouts}
  */
  readonly timeouts?: TrafficManagerProfileTimeouts;
}
export interface TrafficManagerProfileDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#relative_name TrafficManagerProfile#relative_name}
  */
  readonly relativeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#ttl TrafficManagerProfile#ttl}
  */
  readonly ttl: number;
}

export function trafficManagerProfileDnsConfigToTerraform(struct?: TrafficManagerProfileDnsConfigOutputReference | TrafficManagerProfileDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_name: cdktf.stringToTerraform(struct!.relativeName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class TrafficManagerProfileDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TrafficManagerProfileDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeName) {
      hasAnyValues = true;
      internalValueResult.relativeName = this._relativeName;
    }
    if (this._ttl) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerProfileDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeName = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeName = value.relativeName;
      this._ttl = value.ttl;
    }
  }

  // relative_name - computed: false, optional: false, required: true
  private _relativeName?: string; 
  public get relativeName() {
    return this.getStringAttribute('relative_name');
  }
  public set relativeName(value: string) {
    this._relativeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeNameInput() {
    return this._relativeName;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface TrafficManagerProfileMonitorConfigCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#name TrafficManagerProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#value TrafficManagerProfile#value}
  */
  readonly value: string;
}

export function trafficManagerProfileMonitorConfigCustomHeaderToTerraform(struct?: TrafficManagerProfileMonitorConfigCustomHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface TrafficManagerProfileMonitorConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#expected_status_code_ranges TrafficManagerProfile#expected_status_code_ranges}
  */
  readonly expectedStatusCodeRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#interval_in_seconds TrafficManagerProfile#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#path TrafficManagerProfile#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#port TrafficManagerProfile#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#protocol TrafficManagerProfile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#timeout_in_seconds TrafficManagerProfile#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#tolerated_number_of_failures TrafficManagerProfile#tolerated_number_of_failures}
  */
  readonly toleratedNumberOfFailures?: number;
  /**
  * custom_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#custom_header TrafficManagerProfile#custom_header}
  */
  readonly customHeader?: TrafficManagerProfileMonitorConfigCustomHeader[];
}

export function trafficManagerProfileMonitorConfigToTerraform(struct?: TrafficManagerProfileMonitorConfigOutputReference | TrafficManagerProfileMonitorConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status_code_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.expectedStatusCodeRanges),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    tolerated_number_of_failures: cdktf.numberToTerraform(struct!.toleratedNumberOfFailures),
    custom_header: cdktf.listMapper(trafficManagerProfileMonitorConfigCustomHeaderToTerraform)(struct!.customHeader),
  }
}

export class TrafficManagerProfileMonitorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TrafficManagerProfileMonitorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatusCodeRanges) {
      hasAnyValues = true;
      internalValueResult.expectedStatusCodeRanges = this._expectedStatusCodeRanges;
    }
    if (this._intervalInSeconds) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutInSeconds) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._toleratedNumberOfFailures) {
      hasAnyValues = true;
      internalValueResult.toleratedNumberOfFailures = this._toleratedNumberOfFailures;
    }
    if (this._customHeader) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerProfileMonitorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedStatusCodeRanges = undefined;
      this._intervalInSeconds = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutInSeconds = undefined;
      this._toleratedNumberOfFailures = undefined;
      this._customHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedStatusCodeRanges = value.expectedStatusCodeRanges;
      this._intervalInSeconds = value.intervalInSeconds;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._toleratedNumberOfFailures = value.toleratedNumberOfFailures;
      this._customHeader = value.customHeader;
    }
  }

  // expected_status_code_ranges - computed: false, optional: true, required: false
  private _expectedStatusCodeRanges?: string[]; 
  public get expectedStatusCodeRanges() {
    return this.getListAttribute('expected_status_code_ranges');
  }
  public set expectedStatusCodeRanges(value: string[]) {
    this._expectedStatusCodeRanges = value;
  }
  public resetExpectedStatusCodeRanges() {
    this._expectedStatusCodeRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodeRangesInput() {
    return this._expectedStatusCodeRanges;
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // tolerated_number_of_failures - computed: false, optional: true, required: false
  private _toleratedNumberOfFailures?: number; 
  public get toleratedNumberOfFailures() {
    return this.getNumberAttribute('tolerated_number_of_failures');
  }
  public set toleratedNumberOfFailures(value: number) {
    this._toleratedNumberOfFailures = value;
  }
  public resetToleratedNumberOfFailures() {
    this._toleratedNumberOfFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedNumberOfFailuresInput() {
    return this._toleratedNumberOfFailures;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: TrafficManagerProfileMonitorConfigCustomHeader[]; 
  public get customHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_header') as any;
  }
  public set customHeader(value: TrafficManagerProfileMonitorConfigCustomHeader[]) {
    this._customHeader = value;
  }
  public resetCustomHeader() {
    this._customHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader;
  }
}
export interface TrafficManagerProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#create TrafficManagerProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#delete TrafficManagerProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#read TrafficManagerProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#update TrafficManagerProfile#update}
  */
  readonly update?: string;
}

export function trafficManagerProfileTimeoutsToTerraform(struct?: TrafficManagerProfileTimeoutsOutputReference | TrafficManagerProfileTimeouts): any {
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

export class TrafficManagerProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TrafficManagerProfileTimeouts | undefined {
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

  public set internalValue(value: TrafficManagerProfileTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html azurerm_traffic_manager_profile}
*/
export class TrafficManagerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_traffic_manager_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html azurerm_traffic_manager_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficManagerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficManagerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._maxReturn = config.maxReturn;
    this._name = config.name;
    this._profileStatus = config.profileStatus;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._trafficRoutingMethod = config.trafficRoutingMethod;
    this._trafficViewEnabled = config.trafficViewEnabled;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._monitorConfig.internalValue = config.monitorConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_return - computed: false, optional: true, required: false
  private _maxReturn?: number; 
  public get maxReturn() {
    return this.getNumberAttribute('max_return');
  }
  public set maxReturn(value: number) {
    this._maxReturn = value;
  }
  public resetMaxReturn() {
    this._maxReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReturnInput() {
    return this._maxReturn;
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

  // profile_status - computed: true, optional: true, required: false
  private _profileStatus?: string; 
  public get profileStatus() {
    return this.getStringAttribute('profile_status');
  }
  public set profileStatus(value: string) {
    this._profileStatus = value;
  }
  public resetProfileStatus() {
    this._profileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileStatusInput() {
    return this._profileStatus;
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

  // traffic_routing_method - computed: false, optional: false, required: true
  private _trafficRoutingMethod?: string; 
  public get trafficRoutingMethod() {
    return this.getStringAttribute('traffic_routing_method');
  }
  public set trafficRoutingMethod(value: string) {
    this._trafficRoutingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingMethodInput() {
    return this._trafficRoutingMethod;
  }

  // traffic_view_enabled - computed: false, optional: true, required: false
  private _trafficViewEnabled?: boolean | cdktf.IResolvable; 
  public get trafficViewEnabled() {
    return this.getBooleanAttribute('traffic_view_enabled') as any;
  }
  public set trafficViewEnabled(value: boolean | cdktf.IResolvable) {
    this._trafficViewEnabled = value;
  }
  public resetTrafficViewEnabled() {
    this._trafficViewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficViewEnabledInput() {
    return this._trafficViewEnabled;
  }

  // dns_config - computed: false, optional: false, required: true
  private _dnsConfig = new TrafficManagerProfileDnsConfigOutputReference(this as any, "dns_config", true);
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: TrafficManagerProfileDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // monitor_config - computed: false, optional: false, required: true
  private _monitorConfig = new TrafficManagerProfileMonitorConfigOutputReference(this as any, "monitor_config", true);
  public get monitorConfig() {
    return this._monitorConfig;
  }
  public putMonitorConfig(value: TrafficManagerProfileMonitorConfig) {
    this._monitorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConfigInput() {
    return this._monitorConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TrafficManagerProfileTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrafficManagerProfileTimeouts) {
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
      max_return: cdktf.numberToTerraform(this._maxReturn),
      name: cdktf.stringToTerraform(this._name),
      profile_status: cdktf.stringToTerraform(this._profileStatus),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      traffic_routing_method: cdktf.stringToTerraform(this._trafficRoutingMethod),
      traffic_view_enabled: cdktf.booleanToTerraform(this._trafficViewEnabled),
      dns_config: trafficManagerProfileDnsConfigToTerraform(this._dnsConfig.internalValue),
      monitor_config: trafficManagerProfileMonitorConfigToTerraform(this._monitorConfig.internalValue),
      timeouts: trafficManagerProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
