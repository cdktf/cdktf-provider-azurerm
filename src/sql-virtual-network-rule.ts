// https://www.terraform.io/docs/providers/azurerm/r/sql_virtual_network_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlVirtualNetworkRuleConfig extends TerraformMetaArguments {
  readonly ignoreMissingVnetServiceEndpoint?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: SqlVirtualNetworkRuleTimeouts;
}
export interface SqlVirtualNetworkRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SqlVirtualNetworkRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlVirtualNetworkRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_virtual_network_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ignoreMissingVnetServiceEndpoint = config.ignoreMissingVnetServiceEndpoint;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._subnetId = config.subnetId;
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

  // ignore_missing_vnet_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingVnetServiceEndpoint?: boolean;
  public get ignoreMissingVnetServiceEndpoint() {
    return this._ignoreMissingVnetServiceEndpoint;
  }
  public set ignoreMissingVnetServiceEndpoint(value: boolean | undefined) {
    this._ignoreMissingVnetServiceEndpoint = value;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlVirtualNetworkRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlVirtualNetworkRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_missing_vnet_service_endpoint: this._ignoreMissingVnetServiceEndpoint,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
