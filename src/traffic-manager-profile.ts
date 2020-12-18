// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficManagerProfileConfig extends cdktf.TerraformMetaArguments {
  readonly maxReturn?: number;
  readonly name: string;
  readonly profileStatus?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly trafficRoutingMethod: string;
  /** dns_config block */
  readonly dnsConfig: TrafficManagerProfileDnsConfig[];
  /** monitor_config block */
  readonly monitorConfig: TrafficManagerProfileMonitorConfig[];
  /** timeouts block */
  readonly timeouts?: TrafficManagerProfileTimeouts;
}
export interface TrafficManagerProfileDnsConfig {
  readonly relativeName: string;
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
  readonly name: string;
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
  readonly expectedStatusCodeRanges?: string[];
  readonly intervalInSeconds?: number;
  readonly path?: string;
  readonly port: number;
  readonly protocol: string;
  readonly timeoutInSeconds?: number;
  readonly toleratedNumberOfFailures?: number;
  /** custom_header block */
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class TrafficManagerProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      dns_config: cdktf.listMapper(trafficManagerProfileDnsConfigToTerraform)(this._dnsConfig),
      monitor_config: cdktf.listMapper(trafficManagerProfileMonitorConfigToTerraform)(this._monitorConfig),
      timeouts: trafficManagerProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
