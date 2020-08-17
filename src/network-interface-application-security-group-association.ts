// https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_security_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkInterfaceApplicationSecurityGroupAssociationConfig extends TerraformMetaArguments {
  readonly applicationSecurityGroupId: string;
  readonly networkInterfaceId: string;
  /** timeouts block */
  readonly timeouts?: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts;
}
export interface NetworkInterfaceApplicationSecurityGroupAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkInterfaceApplicationSecurityGroupAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceApplicationSecurityGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_application_security_group_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationSecurityGroupId = config.applicationSecurityGroupId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_security_group_id - computed: false, optional: false, required: true
  private _applicationSecurityGroupId: string;
  public get applicationSecurityGroupId() {
    return this._applicationSecurityGroupId;
  }
  public set applicationSecurityGroupId(value: string) {
    this._applicationSecurityGroupId = value;
  }

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_security_group_id: this._applicationSecurityGroupId,
      network_interface_id: this._networkInterfaceId,
      timeouts: this._timeouts,
    };
  }
}
