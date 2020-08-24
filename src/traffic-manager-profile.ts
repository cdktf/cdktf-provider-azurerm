// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TrafficManagerProfileConfig extends TerraformMetaArguments {
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
export interface TrafficManagerProfileMonitorConfig {
  readonly expectedStatusCodeRanges?: string[];
  readonly intervalInSeconds?: number;
  readonly path?: string;
  readonly port: number;
  readonly protocol: string;
  readonly timeoutInSeconds?: number;
  readonly toleratedNumberOfFailures?: number;
}
export interface TrafficManagerProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class TrafficManagerProfile extends TerraformResource {

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

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // profile_status - computed: true, optional: true, required: false
  private _profileStatus?: string;
  public get profileStatus() {
    return this._profileStatus ?? this.getStringAttribute('profile_status');
  }
  public set profileStatus(value: string | undefined) {
    this._profileStatus = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // traffic_routing_method - computed: false, optional: false, required: true
  private _trafficRoutingMethod: string;
  public get trafficRoutingMethod() {
    return this._trafficRoutingMethod;
  }
  public set trafficRoutingMethod(value: string) {
    this._trafficRoutingMethod = value;
  }

  // dns_config - computed: false, optional: false, required: true
  private _dnsConfig: TrafficManagerProfileDnsConfig[];
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public set dnsConfig(value: TrafficManagerProfileDnsConfig[]) {
    this._dnsConfig = value;
  }

  // monitor_config - computed: false, optional: false, required: true
  private _monitorConfig: TrafficManagerProfileMonitorConfig[];
  public get monitorConfig() {
    return this._monitorConfig;
  }
  public set monitorConfig(value: TrafficManagerProfileMonitorConfig[]) {
    this._monitorConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TrafficManagerProfileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: TrafficManagerProfileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      profile_status: this._profileStatus,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      traffic_routing_method: this._trafficRoutingMethod,
      dns_config: this._dnsConfig,
      monitor_config: this._monitorConfig,
      timeouts: this._timeouts,
    };
  }
}
