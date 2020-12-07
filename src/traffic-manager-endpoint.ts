// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficManagerEndpointConfig extends cdktf.TerraformMetaArguments {
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

function trafficManagerEndpointCustomHeaderToTerraform(struct?: TrafficManagerEndpointCustomHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface TrafficManagerEndpointSubnet {
  readonly first: string;
  readonly last?: string;
  readonly scope?: number;
}

function trafficManagerEndpointSubnetToTerraform(struct?: TrafficManagerEndpointSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    first: cdktf.stringToTerraform(struct!.first),
    last: cdktf.stringToTerraform(struct!.last),
    scope: cdktf.numberToTerraform(struct!.scope),
  }
}

export interface TrafficManagerEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function trafficManagerEndpointTimeoutsToTerraform(struct?: TrafficManagerEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class TrafficManagerEndpoint extends cdktf.TerraformResource {

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
    return this.getStringAttribute('endpoint_location');
  }
  public set endpointLocation(value: string) {
    this._endpointLocation = value;
  }
  public resetEndpointLocation() {
    this._endpointLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointLocationInput() {
    return this._endpointLocation
  }

  // endpoint_monitor_status - computed: true, optional: false, required: false
  public get endpointMonitorStatus() {
    return this.getStringAttribute('endpoint_monitor_status');
  }

  // endpoint_status - computed: true, optional: true, required: false
  private _endpointStatus?: string;
  public get endpointStatus() {
    return this.getStringAttribute('endpoint_status');
  }
  public set endpointStatus(value: string) {
    this._endpointStatus = value;
  }
  public resetEndpointStatus() {
    this._endpointStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointStatusInput() {
    return this._endpointStatus
  }

  // geo_mappings - computed: false, optional: true, required: false
  private _geoMappings?: string[];
  public get geoMappings() {
    return this.getListAttribute('geo_mappings');
  }
  public set geoMappings(value: string[] ) {
    this._geoMappings = value;
  }
  public resetGeoMappings() {
    this._geoMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMappingsInput() {
    return this._geoMappings
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_child_endpoints - computed: false, optional: true, required: false
  private _minChildEndpoints?: number;
  public get minChildEndpoints() {
    return this.getNumberAttribute('min_child_endpoints');
  }
  public set minChildEndpoints(value: number ) {
    this._minChildEndpoints = value;
  }
  public resetMinChildEndpoints() {
    this._minChildEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minChildEndpointsInput() {
    return this._minChildEndpoints
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName
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

  // target - computed: true, optional: true, required: false
  private _target?: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string;
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string ) {
    this._targetResourceId = value;
  }
  public resetTargetResourceId() {
    this._targetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number;
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: TrafficManagerEndpointCustomHeader[];
  public get customHeader() {
    return this.interpolationForAttribute('custom_header') as any;
  }
  public set customHeader(value: TrafficManagerEndpointCustomHeader[] ) {
    this._customHeader = value;
  }
  public resetCustomHeader() {
    this._customHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: TrafficManagerEndpointSubnet[];
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }
  public set subnet(value: TrafficManagerEndpointSubnet[] ) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TrafficManagerEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TrafficManagerEndpointTimeouts ) {
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
      endpoint_location: cdktf.stringToTerraform(this._endpointLocation),
      endpoint_status: cdktf.stringToTerraform(this._endpointStatus),
      geo_mappings: cdktf.listMapper(cdktf.stringToTerraform)(this._geoMappings),
      min_child_endpoints: cdktf.numberToTerraform(this._minChildEndpoints),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      profile_name: cdktf.stringToTerraform(this._profileName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      target: cdktf.stringToTerraform(this._target),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      type: cdktf.stringToTerraform(this._type),
      weight: cdktf.numberToTerraform(this._weight),
      custom_header: cdktf.listMapper(trafficManagerEndpointCustomHeaderToTerraform)(this._customHeader),
      subnet: cdktf.listMapper(trafficManagerEndpointSubnetToTerraform)(this._subnet),
      timeouts: trafficManagerEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
