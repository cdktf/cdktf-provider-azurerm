// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TrafficManagerEndpointConfig extends TerraformMetaArguments {
  readonly endpointLocation?: string;
  readonly endpointStatus?: string;
  readonly geoMappings?: string[];
  readonly minChildEndpoints?: number;
  readonly name: string;
  readonly priority?: number;
  readonly profileName: string;
  readonly resourceGroupName: string;
  readonly target?: string;
  readonly targetResourceId?: string;
  readonly type: string;
  readonly weight?: number;
  /** custom_header block */
  readonly customHeader?: TrafficManagerEndpointCustomHeader[];
  /** subnet block */
  readonly subnet?: TrafficManagerEndpointSubnet[];
  /** timeouts block */
  readonly timeouts?: TrafficManagerEndpointTimeouts;
}
export interface TrafficManagerEndpointCustomHeader {
  readonly name: string;
  readonly value: string;
}
export interface TrafficManagerEndpointSubnet {
  readonly first: string;
  readonly last?: string;
  readonly scope?: number;
}
export interface TrafficManagerEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class TrafficManagerEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TrafficManagerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointLocation = config.endpointLocation;
    this._endpointStatus = config.endpointStatus;
    this._geoMappings = config.geoMappings;
    this._minChildEndpoints = config.minChildEndpoints;
    this._name = config.name;
    this._priority = config.priority;
    this._profileName = config.profileName;
    this._resourceGroupName = config.resourceGroupName;
    this._target = config.target;
    this._targetResourceId = config.targetResourceId;
    this._type = config.type;
    this._weight = config.weight;
    this._customHeader = config.customHeader;
    this._subnet = config.subnet;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_location - computed: true, optional: true, required: false
  private _endpointLocation?: string;
  public get endpointLocation() {
    return this._endpointLocation ?? this.getStringAttribute('endpoint_location');
  }
  public set endpointLocation(value: string | undefined) {
    this._endpointLocation = value;
  }

  // endpoint_monitor_status - computed: true, optional: false, required: true
  public get endpointMonitorStatus() {
    return this.getStringAttribute('endpoint_monitor_status');
  }

  // endpoint_status - computed: true, optional: true, required: false
  private _endpointStatus?: string;
  public get endpointStatus() {
    return this._endpointStatus ?? this.getStringAttribute('endpoint_status');
  }
  public set endpointStatus(value: string | undefined) {
    this._endpointStatus = value;
  }

  // geo_mappings - computed: false, optional: true, required: false
  private _geoMappings?: string[];
  public get geoMappings() {
    return this._geoMappings;
  }
  public set geoMappings(value: string[] | undefined) {
    this._geoMappings = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // min_child_endpoints - computed: false, optional: true, required: false
  private _minChildEndpoints?: number;
  public get minChildEndpoints() {
    return this._minChildEndpoints;
  }
  public set minChildEndpoints(value: number | undefined) {
    this._minChildEndpoints = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this._priority ?? this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this._profileName;
  }
  public set profileName(value: string) {
    this._profileName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string;
  public get target() {
    return this._target ?? this.getStringAttribute('target');
  }
  public set target(value: string | undefined) {
    this._target = value;
  }

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string;
  public get targetResourceId() {
    return this._targetResourceId;
  }
  public set targetResourceId(value: string | undefined) {
    this._targetResourceId = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number;
  public get weight() {
    return this._weight ?? this.getNumberAttribute('weight');
  }
  public set weight(value: number | undefined) {
    this._weight = value;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: TrafficManagerEndpointCustomHeader[];
  public get customHeader() {
    return this._customHeader;
  }
  public set customHeader(value: TrafficManagerEndpointCustomHeader[] | undefined) {
    this._customHeader = value;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: TrafficManagerEndpointSubnet[];
  public get subnet() {
    return this._subnet;
  }
  public set subnet(value: TrafficManagerEndpointSubnet[] | undefined) {
    this._subnet = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TrafficManagerEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: TrafficManagerEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_location: this._endpointLocation,
      endpoint_status: this._endpointStatus,
      geo_mappings: this._geoMappings,
      min_child_endpoints: this._minChildEndpoints,
      name: this._name,
      priority: this._priority,
      profile_name: this._profileName,
      resource_group_name: this._resourceGroupName,
      target: this._target,
      target_resource_id: this._targetResourceId,
      type: this._type,
      weight: this._weight,
      custom_header: this._customHeader,
      subnet: this._subnet,
      timeouts: this._timeouts,
    };
  }
}
