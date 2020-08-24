// https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkInterfaceSecurityGroupAssociationConfig extends TerraformMetaArguments {
  readonly networkInterfaceId: string;
  readonly networkSecurityGroupId: string;
  /** timeouts block */
  readonly timeouts?: NetworkInterfaceSecurityGroupAssociationTimeouts;
}
export interface NetworkInterfaceSecurityGroupAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkInterfaceSecurityGroupAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceSecurityGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_security_group_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkInterfaceId = config.networkInterfaceId;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
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

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this._networkSecurityGroupId;
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceSecurityGroupAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkInterfaceSecurityGroupAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_interface_id: this._networkInterfaceId,
      network_security_group_id: this._networkSecurityGroupId,
      timeouts: this._timeouts,
    };
  }
}
