// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataLakeStoreFirewallRuleConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly endIpAddress: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly startIpAddress: string;
  /** timeouts block */
  readonly timeouts?: DataLakeStoreFirewallRuleTimeouts;
}
export interface DataLakeStoreFirewallRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataLakeStoreFirewallRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // end_ip_address - computed: false, optional: false, required: true
  private _endIpAddress: string;
  public get endIpAddress() {
    return this._endIpAddress;
  }
  public set endIpAddress(value: string) {
    this._endIpAddress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // start_ip_address - computed: false, optional: false, required: true
  private _startIpAddress: string;
  public get startIpAddress() {
    return this._startIpAddress;
  }
  public set startIpAddress(value: string) {
    this._startIpAddress = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreFirewallRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataLakeStoreFirewallRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      end_ip_address: this._endIpAddress,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      start_ip_address: this._startIpAddress,
      timeouts: this._timeouts,
    };
  }
}
