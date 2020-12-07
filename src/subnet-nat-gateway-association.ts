// https://www.terraform.io/docs/providers/azurerm/r/subnet_nat_gateway_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetNatGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
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

function subnetNatGatewayAssociationTimeoutsToTerraform(struct?: SubnetNatGatewayAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SubnetNatGatewayAssociation extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId: string;
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetNatGatewayAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SubnetNatGatewayAssociationTimeouts ) {
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
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: subnetNatGatewayAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
