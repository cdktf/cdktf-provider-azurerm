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

function dataLakeStoreFirewallRuleTimeoutsToTerraform(struct?: DataLakeStoreFirewallRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _accountName: string;
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
  private _endIpAddress: string;
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
  private _name: string;
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
  private _resourceGroupName: string;
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
  private _startIpAddress: string;
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
  private _timeouts?: DataLakeStoreFirewallRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLakeStoreFirewallRuleTimeouts ) {
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
