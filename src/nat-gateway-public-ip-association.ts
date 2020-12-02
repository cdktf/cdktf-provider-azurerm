// https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NatGatewayPublicIpAssociationConfig extends TerraformMetaArguments {
  readonly natGatewayId: string;
  readonly publicIpAddressId: string;
  /** timeouts block */
  readonly timeouts?: NatGatewayPublicIpAssociationTimeouts;
}
export interface NatGatewayPublicIpAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class NatGatewayPublicIpAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NatGatewayPublicIpAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway_public_ip_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._natGatewayId = config.natGatewayId;
    this._publicIpAddressId = config.publicIpAddressId;
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

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId: string;
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatGatewayPublicIpAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NatGatewayPublicIpAssociationTimeouts ) {
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
      nat_gateway_id: this._natGatewayId,
      public_ip_address_id: this._publicIpAddressId,
      timeouts: this._timeouts,
    };
  }
}
