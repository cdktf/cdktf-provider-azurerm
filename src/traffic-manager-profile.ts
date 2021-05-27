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
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#traffic_routing_method TrafficManagerProfile#traffic_routing_method}
  */
  readonly trafficRoutingMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}
  */
  readonly trafficViewEnabled?: boolean;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#dns_config TrafficManagerProfile#dns_config}
  */
  readonly dnsConfig: TrafficManagerProfileDnsConfig[];
  /**
  * monitor_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html#monitor_config TrafficManagerProfile#monitor_config}
  */
  readonly monitorConfig: TrafficManagerProfileMonitorConfig[];
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

function trafficManagerProfileDnsConfigToTerraform(struct?: TrafficManagerProfileDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    relative_name: cdktf.stringToTerraform(struct!.relativeName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
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

function trafficManagerProfileMonitorConfigCustomHeaderToTerraform(struct?: TrafficManagerProfileMonitorConfigCustomHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function trafficManagerProfileMonitorConfigToTerraform(struct?: TrafficManagerProfileMonitorConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function trafficManagerProfileTimeoutsToTerraform(struct?: TrafficManagerProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html azurerm_traffic_manager_profile}
*/
export class TrafficManagerProfile extends cdktf.TerraformResource {

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
    this._dnsConfig = config.dnsConfig;
    this._monitorConfig = config.monitorConfig;
    this._timeouts = config.timeouts;
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
  public set maxReturn(value: number ) {
    this._maxReturn = value;
  }
  public resetMaxReturn() {
    this._maxReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReturnInput() {
    return this._maxReturn
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
    return this._profileStatus
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // traffic_routing_method - computed: false, optional: false, required: true
  private _trafficRoutingMethod: string;
  public get trafficRoutingMethod() {
    return this.getStringAttribute('traffic_routing_method');
  }
  public set trafficRoutingMethod(value: string) {
    this._trafficRoutingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingMethodInput() {
    return this._trafficRoutingMethod
  }

  // traffic_view_enabled - computed: false, optional: true, required: false
  private _trafficViewEnabled?: boolean;
  public get trafficViewEnabled() {
    return this.getBooleanAttribute('traffic_view_enabled');
  }
  public set trafficViewEnabled(value: boolean ) {
    this._trafficViewEnabled = value;
  }
  public resetTrafficViewEnabled() {
    this._trafficViewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficViewEnabledInput() {
    return this._trafficViewEnabled
  }

  // dns_config - computed: false, optional: false, required: true
  private _dnsConfig: TrafficManagerProfileDnsConfig[];
  public get dnsConfig() {
    return this.interpolationForAttribute('dns_config') as any;
  }
  public set dnsConfig(value: TrafficManagerProfileDnsConfig[]) {
    this._dnsConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig
  }

  // monitor_config - computed: false, optional: false, required: true
  private _monitorConfig: TrafficManagerProfileMonitorConfig[];
  public get monitorConfig() {
    return this.interpolationForAttribute('monitor_config') as any;
  }
  public set monitorConfig(value: TrafficManagerProfileMonitorConfig[]) {
    this._monitorConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConfigInput() {
    return this._monitorConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TrafficManagerProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TrafficManagerProfileTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      dns_config: cdktf.listMapper(trafficManagerProfileDnsConfigToTerraform)(this._dnsConfig),
      monitor_config: cdktf.listMapper(trafficManagerProfileMonitorConfigToTerraform)(this._monitorConfig),
      timeouts: trafficManagerProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
