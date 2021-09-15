// https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlVirtualNetworkRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#ignore_missing_vnet_service_endpoint MssqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#name MssqlVirtualNetworkRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#server_id MssqlVirtualNetworkRule#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#subnet_id MssqlVirtualNetworkRule#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#timeouts MssqlVirtualNetworkRule#timeouts}
  */
  readonly timeouts?: MssqlVirtualNetworkRuleTimeouts;
}
export interface MssqlVirtualNetworkRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#create MssqlVirtualNetworkRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#delete MssqlVirtualNetworkRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#read MssqlVirtualNetworkRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html#update MssqlVirtualNetworkRule#update}
  */
  readonly update?: string;
}

function mssqlVirtualNetworkRuleTimeoutsToTerraform(struct?: MssqlVirtualNetworkRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html azurerm_mssql_virtual_network_rule}
*/
export class MssqlVirtualNetworkRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_virtual_network_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_network_rule.html azurerm_mssql_virtual_network_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlVirtualNetworkRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlVirtualNetworkRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_virtual_network_rule',
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
    this._serverId = config.serverId;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing_vnet_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  public get ignoreMissingVnetServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_vnet_service_endpoint');
  }
  public set ignoreMissingVnetServiceEndpoint(value: boolean | cdktf.IResolvable ) {
    this._ignoreMissingVnetServiceEndpoint = value;
  }
  public resetIgnoreMissingVnetServiceEndpoint() {
    this._ignoreMissingVnetServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingVnetServiceEndpointInput() {
    return this._ignoreMissingVnetServiceEndpoint
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

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlVirtualNetworkRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlVirtualNetworkRuleTimeouts ) {
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
      ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(this._ignoreMissingVnetServiceEndpoint),
      name: cdktf.stringToTerraform(this._name),
      server_id: cdktf.stringToTerraform(this._serverId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: mssqlVirtualNetworkRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
