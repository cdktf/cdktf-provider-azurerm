// https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlVirtualNetworkRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#ignore_missing_vnet_service_endpoint PostgresqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#name PostgresqlVirtualNetworkRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#resource_group_name PostgresqlVirtualNetworkRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#server_name PostgresqlVirtualNetworkRule#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#subnet_id PostgresqlVirtualNetworkRule#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#timeouts PostgresqlVirtualNetworkRule#timeouts}
  */
  readonly timeouts?: PostgresqlVirtualNetworkRuleTimeouts;
}
export interface PostgresqlVirtualNetworkRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#create PostgresqlVirtualNetworkRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#delete PostgresqlVirtualNetworkRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#read PostgresqlVirtualNetworkRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html#update PostgresqlVirtualNetworkRule#update}
  */
  readonly update?: string;
}

function postgresqlVirtualNetworkRuleTimeoutsToTerraform(struct?: PostgresqlVirtualNetworkRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html azurerm_postgresql_virtual_network_rule}
*/
export class PostgresqlVirtualNetworkRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_postgresql_virtual_network_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_virtual_network_rule.html azurerm_postgresql_virtual_network_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlVirtualNetworkRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlVirtualNetworkRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_virtual_network_rule',
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
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
  private _timeouts?: PostgresqlVirtualNetworkRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PostgresqlVirtualNetworkRuleTimeouts ) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: postgresqlVirtualNetworkRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
