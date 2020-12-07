// https://www.terraform.io/docs/providers/azurerm/r/network_interface_application_security_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceApplicationSecurityGroupAssociationConfig extends cdktf.TerraformMetaArguments {
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

function networkInterfaceApplicationSecurityGroupAssociationTimeoutsToTerraform(struct?: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetworkInterfaceApplicationSecurityGroupAssociation extends cdktf.TerraformResource {

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
    return this.getStringAttribute('application_security_group_id');
  }
  public set applicationSecurityGroupId(value: string) {
    this._applicationSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupIdInput() {
    return this._applicationSecurityGroupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts ) {
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
      application_security_group_id: cdktf.stringToTerraform(this._applicationSecurityGroupId),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      timeouts: networkInterfaceApplicationSecurityGroupAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
