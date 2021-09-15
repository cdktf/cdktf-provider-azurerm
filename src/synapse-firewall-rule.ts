// https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#end_ip_address SynapseFirewallRule#end_ip_address}
  */
  readonly endIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#name SynapseFirewallRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#start_ip_address SynapseFirewallRule#start_ip_address}
  */
  readonly startIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#synapse_workspace_id SynapseFirewallRule#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#timeouts SynapseFirewallRule#timeouts}
  */
  readonly timeouts?: SynapseFirewallRuleTimeouts;
}
export interface SynapseFirewallRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#create SynapseFirewallRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#delete SynapseFirewallRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#read SynapseFirewallRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html#update SynapseFirewallRule#update}
  */
  readonly update?: string;
}

function synapseFirewallRuleTimeoutsToTerraform(struct?: SynapseFirewallRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html azurerm_synapse_firewall_rule}
*/
export class SynapseFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_firewall_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html azurerm_synapse_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_firewall_rule',
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
    this._startIpAddress = config.startIpAddress;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId: string;
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseFirewallRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseFirewallRuleTimeouts ) {
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
      end_ip_address: cdktf.stringToTerraform(this._endIpAddress),
      name: cdktf.stringToTerraform(this._name),
      start_ip_address: cdktf.stringToTerraform(this._startIpAddress),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      timeouts: synapseFirewallRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
