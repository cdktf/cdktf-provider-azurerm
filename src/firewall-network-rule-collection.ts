// https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallNetworkRuleCollectionConfig extends cdktf.TerraformMetaArguments {
  readonly action: string;
  readonly azureFirewallName: string;
  readonly name: string;
  readonly priority: number;
  readonly resourceGroupName: string;
  /** rule block */
  readonly rule: FirewallNetworkRuleCollectionRule[];
  /** timeouts block */
  readonly timeouts?: FirewallNetworkRuleCollectionTimeouts;
}
export interface FirewallNetworkRuleCollectionRule {
  readonly description?: string;
  readonly destinationAddresses?: string[];
  readonly destinationFqdns?: string[];
  readonly destinationIpGroups?: string[];
  readonly destinationPorts: string[];
  readonly name: string;
  readonly protocols: string[];
  readonly sourceAddresses?: string[];
  readonly sourceIpGroups?: string[];
}

function firewallNetworkRuleCollectionRuleToTerraform(struct?: FirewallNetworkRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdns),
    destination_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationIpGroups),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
  }
}

export interface FirewallNetworkRuleCollectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function firewallNetworkRuleCollectionTimeoutsToTerraform(struct?: FirewallNetworkRuleCollectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FirewallNetworkRuleCollection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirewallNetworkRuleCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_network_rule_collection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._azureFirewallName = config.azureFirewallName;
    this._name = config.name;
    this._priority = config.priority;
    this._resourceGroupName = config.resourceGroupName;
    this._rule = config.rule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // azure_firewall_name - computed: false, optional: false, required: true
  private _azureFirewallName: string;
  public get azureFirewallName() {
    return this.getStringAttribute('azure_firewall_name');
  }
  public set azureFirewallName(value: string) {
    this._azureFirewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFirewallNameInput() {
    return this._azureFirewallName
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

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
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

  // rule - computed: false, optional: false, required: true
  private _rule: FirewallNetworkRuleCollectionRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: FirewallNetworkRuleCollectionRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallNetworkRuleCollectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallNetworkRuleCollectionTimeouts ) {
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
      action: cdktf.stringToTerraform(this._action),
      azure_firewall_name: cdktf.stringToTerraform(this._azureFirewallName),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rule: cdktf.listMapper(firewallNetworkRuleCollectionRuleToTerraform)(this._rule),
      timeouts: firewallNetworkRuleCollectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
