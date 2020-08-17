// https://www.terraform.io/docs/providers/azurerm/r/subnet_route_table_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SubnetRouteTableAssociationConfig extends TerraformMetaArguments {
  readonly routeTableId: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: SubnetRouteTableAssociationTimeouts;
}
export interface SubnetRouteTableAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SubnetRouteTableAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._routeTableId = config.routeTableId;
    this._subnetId = config.subnetId;
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

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this._routeTableId;
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetRouteTableAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SubnetRouteTableAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      route_table_id: this._routeTableId,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
