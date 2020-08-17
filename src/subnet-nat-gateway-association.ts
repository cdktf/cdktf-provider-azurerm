// https://www.terraform.io/docs/providers/azurerm/r/subnet_nat_gateway_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SubnetNatGatewayAssociationConfig extends TerraformMetaArguments {
  readonly natGatewayId: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: SubnetNatGatewayAssociationTimeouts;
}
export interface SubnetNatGatewayAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SubnetNatGatewayAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetNatGatewayAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet_nat_gateway_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._natGatewayId = config.natGatewayId;
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

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId: string;
  public get natGatewayId() {
    return this._natGatewayId;
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
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
  private _timeouts?: SubnetNatGatewayAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SubnetNatGatewayAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      nat_gateway_id: this._natGatewayId,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
