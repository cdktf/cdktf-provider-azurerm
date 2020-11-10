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
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // next_hop_in_ip_address - computed: false, optional: true, required: false
  private _nextHopInIpAddress?: string;
  public get nextHopInIpAddress() {
    return this.getStringAttribute('next_hop_in_ip_address');
  }
  public set nextHopInIpAddress(value: string ) {
    this._nextHopInIpAddress = value;
  }
  public resetNextHopInIpAddress() {
    this._nextHopInIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInIpAddressInput() {
    return this._nextHopInIpAddress
  }

  // next_hop_type - computed: false, optional: false, required: true
  private _nextHopType: string;
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType
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

  // route_table_name - computed: false, optional: false, required: true
  private _routeTableName: string;
  public get routeTableName() {
    return this.getStringAttribute('route_table_name');
  }
  public set routeTableName(value: string) {
    this._routeTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableNameInput() {
    return this._routeTableName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RouteTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RouteTimeouts ) {
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
