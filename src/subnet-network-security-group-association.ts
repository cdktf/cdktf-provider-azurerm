// https://www.terraform.io/docs/providers/azurerm/r/subnet_network_security_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SubnetNetworkSecurityGroupAssociationConfig extends TerraformMetaArguments {
  readonly networkSecurityGroupId: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: SubnetNetworkSecurityGroupAssociationTimeouts;
}
export interface SubnetNetworkSecurityGroupAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SubnetNetworkSecurityGroupAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetNetworkSecurityGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet_network_security_group_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkSecurityGroupId = config.networkSecurityGroupId;
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

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this._networkSecurityGroupId;
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
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
  private _timeouts?: SubnetNetworkSecurityGroupAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SubnetNetworkSecurityGroupAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      network_security_group_id: this._networkSecurityGroupId,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
