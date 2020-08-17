// https://www.terraform.io/docs/providers/azurerm/r/mysql_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MysqlFirewallRuleConfig extends TerraformMetaArguments {
  readonly endIpAddress: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly startIpAddress: string;
  /** timeouts block */
  readonly timeouts?: MysqlFirewallRuleTimeouts;
}
export interface MysqlFirewallRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MysqlFirewallRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MysqlFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mysql_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endIpAddress = config.endIpAddress;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._startIpAddress = config.startIpAddress;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
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
  private _timeouts?: MysqlFirewallRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MysqlFirewallRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      end_ip_address: this._endIpAddress,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      start_ip_address: this._startIpAddress,
      timeouts: this._timeouts,
    };
  }
}
