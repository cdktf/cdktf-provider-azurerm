// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermRouteTableConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermRouteTableTimeouts;
}
export class DataAzurermRouteTableRoute extends ComplexComputedList {

  // address_prefix - computed: true, optional: false, required: true
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_hop_in_ip_address - computed: true, optional: false, required: true
  public get nextHopInIpAddress() {
    return this.getStringAttribute('next_hop_in_ip_address');
  }

  // next_hop_type - computed: true, optional: false, required: true
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
}
export interface DataAzurermRouteTableTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermRouteTable extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermRouteTableConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
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

  // route - computed: true, optional: false, required: true
  public route(index: string) {
    return new DataAzurermRouteTableRoute(this, 'route', index);
  }

  // subnets - computed: true, optional: false, required: true
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermRouteTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermRouteTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
