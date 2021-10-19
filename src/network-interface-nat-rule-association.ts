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

function networkInterfaceNatRuleAssociationTimeoutsToTerraform(struct?: NetworkInterfaceNatRuleAssociationTimeoutsOutputReference | NetworkInterfaceNatRuleAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class NetworkInterfaceNatRuleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_interface_nat_rule_association.html azurerm_network_interface_nat_rule_association}
*/
export class NetworkInterfaceNatRuleAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_interface_nat_rule_association";

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
  private _ipConfigurationName?: string; 
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
  private _natRuleId?: string; 
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
  private _networkInterfaceId?: string; 
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
  private _timeouts?: NetworkInterfaceNatRuleAssociationTimeouts | undefined; 
  private __timeoutsOutput = new NetworkInterfaceNatRuleAssociationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkInterfaceNatRuleAssociationTimeouts | undefined) {
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
