// https://www.terraform.io/docs/providers/azurerm/r/route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RouteConfig extends TerraformMetaArguments {
  readonly addressPrefix: string;
  readonly name: string;
  readonly nextHopInIpAddress?: string;
  readonly nextHopType: string;
  readonly resourceGroupName: string;
  readonly routeTableName: string;
  /** timeouts block */
  readonly timeouts?: RouteTimeouts;
}
export interface RouteTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Route extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_route',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressPrefix = config.addressPrefix;
    this._name = config.name;
    this._nextHopInIpAddress = config.nextHopInIpAddress;
    this._nextHopType = config.nextHopType;
    this._resourceGroupName = config.resourceGroupName;
    this._routeTableName = config.routeTableName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: false, optional: false, required: true
  private _addressPrefix: string;
  public get addressPrefix() {
    return this._addressPrefix;
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
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

  // next_hop_in_ip_address - computed: false, optional: true, required: false
  private _nextHopInIpAddress?: string;
  public get nextHopInIpAddress() {
    return this._nextHopInIpAddress;
  }
  public set nextHopInIpAddress(value: string | undefined) {
    this._nextHopInIpAddress = value;
  }

  // next_hop_type - computed: false, optional: false, required: true
  private _nextHopType: string;
  public get nextHopType() {
    return this._nextHopType;
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // route_table_name - computed: false, optional: false, required: true
  private _routeTableName: string;
  public get routeTableName() {
    return this._routeTableName;
  }
  public set routeTableName(value: string) {
    this._routeTableName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RouteTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RouteTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_prefix: this._addressPrefix,
      name: this._name,
      next_hop_in_ip_address: this._nextHopInIpAddress,
      next_hop_type: this._nextHopType,
      resource_group_name: this._resourceGroupName,
      route_table_name: this._routeTableName,
      timeouts: this._timeouts,
    };
  }
}
