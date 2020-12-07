// https://www.terraform.io/docs/providers/azurerm/r/synapse_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  readonly endIpAddress: string;
  readonly name: string;
  readonly startIpAddress: string;
  readonly synapseWorkspaceId: string;
  /** timeouts block */
  readonly timeouts?: SynapseFirewallRuleTimeouts;
}
export interface SynapseFirewallRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class SynapseFirewallRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
