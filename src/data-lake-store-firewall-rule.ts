// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLakeStoreFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#account_name DataLakeStoreFirewallRule#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#end_ip_address DataLakeStoreFirewallRule#end_ip_address}
  */
  readonly endIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#name DataLakeStoreFirewallRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#resource_group_name DataLakeStoreFirewallRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#start_ip_address DataLakeStoreFirewallRule#start_ip_address}
  */
  readonly startIpAddress: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#timeouts DataLakeStoreFirewallRule#timeouts}
  */
  readonly timeouts?: DataLakeStoreFirewallRuleTimeouts;
}
export interface DataLakeStoreFirewallRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#create DataLakeStoreFirewallRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#delete DataLakeStoreFirewallRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#read DataLakeStoreFirewallRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html#update DataLakeStoreFirewallRule#update}
  */
  readonly update?: string;
}

function dataLakeStoreFirewallRuleTimeoutsToTerraform(struct?: DataLakeStoreFirewallRuleTimeoutsOutputReference | DataLakeStoreFirewallRuleTimeouts): any {
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

export class DataLakeStoreFirewallRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html azurerm_data_lake_store_firewall_rule}
*/
export class DataLakeStoreFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_lake_store_firewall_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html azurerm_data_lake_store_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLakeStoreFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataLakeStoreFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_lake_store_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._endIpAddress = config.endIpAddress;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._startIpAddress = config.startIpAddress;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // end_ip_address - computed: false, optional: false, required: true
  private _endIpAddress?: string; 
  public get endIpAddress() {
    return this.getStringAttribute('end_ip_address');
  }
  public set endIpAddress(value: string) {
    this._endIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpAddressInput() {
    return this._endIpAddress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // start_ip_address - computed: false, optional: false, required: true
  private _startIpAddress?: string; 
  public get startIpAddress() {
    return this.getStringAttribute('start_ip_address');
  }
  public set startIpAddress(value: string) {
    this._startIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpAddressInput() {
    return this._startIpAddress
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreFirewallRuleTimeouts | undefined; 
  private __timeoutsOutput = new DataLakeStoreFirewallRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataLakeStoreFirewallRuleTimeouts | undefined) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      end_ip_address: cdktf.stringToTerraform(this._endIpAddress),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_ip_address: cdktf.stringToTerraform(this._startIpAddress),
      timeouts: dataLakeStoreFirewallRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
