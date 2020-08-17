// https://www.terraform.io/docs/providers/azurerm/r/route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RouteTableConfig extends TerraformMetaArguments {
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
export interface RouteTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RouteTable extends TerraformResource {

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
    return this._disableBgpRoutePropagation;
  }
  public set disableBgpRoutePropagation(value: boolean | undefined) {
    this._disableBgpRoutePropagation = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // route - computed: true, optional: true, required: false
  private _route?: RouteTableRoute[]
  public get route(): RouteTableRoute[] | undefined {
    return this._route; // Getting the computed value is not yet implemented
  }
  public set route(value: RouteTableRoute[] | undefined) {
    this._route = value;
  }

  // subnets - computed: true, optional: false, required: true
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RouteTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RouteTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_bgp_route_propagation: this._disableBgpRoutePropagation,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      route: this._route,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
