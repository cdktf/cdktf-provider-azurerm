// https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceNatRuleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}
  */
  readonly ipConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}
  */
  readonly natRuleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#timeouts NetworkInterfaceNatRuleAssociation#timeouts}
  */
  readonly timeouts?: NetworkInterfaceNatRuleAssociationTimeouts;
}
export interface NetworkInterfaceNatRuleAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#create NetworkInterfaceNatRuleAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#delete NetworkInterfaceNatRuleAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#read NetworkInterfaceNatRuleAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html#update NetworkInterfaceNatRuleAssociation#update}
  */
  readonly update?: string;
}

function networkInterfaceNatRuleAssociationTimeoutsToTerraform(struct?: NetworkInterfaceNatRuleAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html azurerm_network_interface_nat_rule_association}
*/
export class NetworkInterfaceNatRuleAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html azurerm_network_interface_nat_rule_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceNatRuleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceNatRuleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_nat_rule_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipConfigurationName = config.ipConfigurationName;
    this._natRuleId = config.natRuleId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_configuration_name - computed: false, optional: false, required: true
  private _ipConfigurationName: string;
  public get ipConfigurationName() {
    return this.getStringAttribute('ip_configuration_name');
  }
  public set ipConfigurationName(value: string) {
    this._ipConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationNameInput() {
    return this._ipConfigurationName
  }

  // nat_rule_id - computed: false, optional: false, required: true
  private _natRuleId: string;
  public get natRuleId() {
    return this.getStringAttribute('nat_rule_id');
  }
  public set natRuleId(value: string) {
    this._natRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natRuleIdInput() {
    return this._natRuleId
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
  private _timeouts?: NetworkInterfaceNatRuleAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkInterfaceNatRuleAssociationTimeouts ) {
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
      ip_configuration_name: cdktf.stringToTerraform(this._ipConfigurationName),
      nat_rule_id: cdktf.stringToTerraform(this._natRuleId),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      timeouts: networkInterfaceNatRuleAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
