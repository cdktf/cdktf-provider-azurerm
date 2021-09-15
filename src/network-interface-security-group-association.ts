// https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceSecurityGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#network_interface_id NetworkInterfaceSecurityGroupAssociation#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#network_security_group_id NetworkInterfaceSecurityGroupAssociation#network_security_group_id}
  */
  readonly networkSecurityGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#timeouts NetworkInterfaceSecurityGroupAssociation#timeouts}
  */
  readonly timeouts?: NetworkInterfaceSecurityGroupAssociationTimeouts;
}
export interface NetworkInterfaceSecurityGroupAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#create NetworkInterfaceSecurityGroupAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#delete NetworkInterfaceSecurityGroupAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#read NetworkInterfaceSecurityGroupAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html#update NetworkInterfaceSecurityGroupAssociation#update}
  */
  readonly update?: string;
}

function networkInterfaceSecurityGroupAssociationTimeoutsToTerraform(struct?: NetworkInterfaceSecurityGroupAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html azurerm_network_interface_security_group_association}
*/
export class NetworkInterfaceSecurityGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_interface_security_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_security_group_association.html azurerm_network_interface_security_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceSecurityGroupAssociationConfig
  */
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

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceSecurityGroupAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkInterfaceSecurityGroupAssociationTimeouts ) {
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
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      network_security_group_id: cdktf.stringToTerraform(this._networkSecurityGroupId),
      timeouts: networkInterfaceSecurityGroupAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
