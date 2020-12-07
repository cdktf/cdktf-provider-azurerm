// https://www.terraform.io/docs/providers/azurerm/r/route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteTableConfig extends cdktf.TerraformMetaArguments {
  readonly disableBgpRoutePropagation?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly route?: RouteTableRoute[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: RouteTableTimeouts;
}
export interface RouteTableRoute {
  readonly addressPrefix?: string;
  readonly name?: string;
  readonly nextHopInIpAddress?: string;
  readonly nextHopType?: string;
}

function routeTableRouteToTerraform(struct?: RouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefix: cdktf.stringToTerraform(struct!.addressPrefix),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_in_ip_address: cdktf.stringToTerraform(struct!.nextHopInIpAddress),
    next_hop_type: cdktf.stringToTerraform(struct!.nextHopType),
  }
}

export interface RouteTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function routeTableTimeoutsToTerraform(struct?: RouteTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RouteTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_route_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disableBgpRoutePropagation = config.disableBgpRoutePropagation;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._route = config.route;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_bgp_route_propagation - computed: false, optional: true, required: false
  private _disableBgpRoutePropagation?: boolean;
  public get disableBgpRoutePropagation() {
    return this.getBooleanAttribute('disable_bgp_route_propagation');
  }
  public set disableBgpRoutePropagation(value: boolean ) {
    this._disableBgpRoutePropagation = value;
  }
  public resetDisableBgpRoutePropagation() {
    this._disableBgpRoutePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBgpRoutePropagationInput() {
    return this._disableBgpRoutePropagation
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // route - computed: true, optional: true, required: false
  private _route?: RouteTableRoute[]
  public get route(): RouteTableRoute[] {
    return this.interpolationForAttribute('route') as any; // Getting the computed value is not yet implemented
  }
  public set route(value: RouteTableRoute[]) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RouteTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RouteTableTimeouts ) {
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
      disable_bgp_route_propagation: cdktf.booleanToTerraform(this._disableBgpRoutePropagation),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route: cdktf.listMapper(routeTableRouteToTerraform)(this._route),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: routeTableTimeoutsToTerraform(this._timeouts),
    };
  }
}
