// https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyRuleCollectionGroupConfig extends cdktf.TerraformMetaArguments {
  readonly firewallPolicyId: string;
  readonly name: string;
  readonly priority: number;
  /** application_rule_collection block */
  readonly applicationRuleCollection?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[];
  /** nat_rule_collection block */
  readonly natRuleCollection?: FirewallPolicyRuleCollectionGroupNatRuleCollection[];
  /** network_rule_collection block */
  readonly networkRuleCollection?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[];
  /** timeouts block */
  readonly timeouts?: FirewallPolicyRuleCollectionGroupTimeouts;
}
export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols {
  readonly port: number;
  readonly type: string;
}

function firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule {
  readonly destinationFqdnTags?: string[];
  readonly destinationFqdns?: string[];
  readonly name: string;
  readonly sourceAddresses?: string[];
  readonly sourceIpGroups?: string[];
  /** protocols block */
  readonly protocols: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[];
}

function firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_fqdn_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdnTags),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdns),
    name: cdktf.stringToTerraform(struct!.name),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
    protocols: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsToTerraform)(struct!.protocols),
  }
}

export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollection {
  readonly action: string;
  readonly name: string;
  readonly priority: number;
  /** rule block */
  readonly rule: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[];
}

function firewallPolicyRuleCollectionGroupApplicationRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleToTerraform)(struct!.rule),
  }
}

export interface FirewallPolicyRuleCollectionGroupNatRuleCollectionRule {
  readonly destinationAddress?: string;
  readonly destinationPorts?: string[];
  readonly name: string;
  readonly protocols: string[];
  readonly sourceAddresses?: string[];
  readonly sourceIpGroups?: string[];
  readonly translatedAddress: string;
  readonly translatedPort: number;
}

function firewallPolicyRuleCollectionGroupNatRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}

export interface FirewallPolicyRuleCollectionGroupNatRuleCollection {
  readonly action: string;
  readonly name: string;
  readonly priority: number;
  /** rule block */
  readonly rule: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[];
}

function firewallPolicyRuleCollectionGroupNatRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupNatRuleCollection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupNatRuleCollectionRuleToTerraform)(struct!.rule),
  }
}

export interface FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule {
  readonly destinationAddresses?: string[];
  readonly destinationFqdns?: string[];
  readonly destinationIpGroups?: string[];
  readonly destinationPorts: string[];
  readonly name: string;
  readonly protocols: string[];
  readonly sourceAddresses?: string[];
  readonly sourceIpGroups?: string[];
}

function firewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
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

export interface FirewallPolicyRuleCollectionGroupNetworkRuleCollection {
  readonly action: string;
  readonly name: string;
  readonly priority: number;
  /** rule block */
  readonly rule: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[];
}

function firewallPolicyRuleCollectionGroupNetworkRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleToTerraform)(struct!.rule),
  }
}

export interface FirewallPolicyRuleCollectionGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function firewallPolicyRuleCollectionGroupTimeoutsToTerraform(struct?: FirewallPolicyRuleCollectionGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FirewallPolicyRuleCollectionGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirewallPolicyRuleCollectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy_rule_collection_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallPolicyId = config.firewallPolicyId;
    this._name = config.name;
    this._priority = config.priority;
    this._applicationRuleCollection = config.applicationRuleCollection;
    this._natRuleCollection = config.natRuleCollection;
    this._networkRuleCollection = config.networkRuleCollection;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_policy_id - computed: false, optional: false, required: true
  private _firewallPolicyId: string;
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string) {
    this._firewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyIdInput() {
    return this._firewallPolicyId
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

  // application_rule_collection - computed: false, optional: true, required: false
  private _applicationRuleCollection?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[];
  public get applicationRuleCollection() {
    return this.interpolationForAttribute('application_rule_collection') as any;
  }
  public set applicationRuleCollection(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] ) {
    this._applicationRuleCollection = value;
  }
  public resetApplicationRuleCollection() {
    this._applicationRuleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRuleCollectionInput() {
    return this._applicationRuleCollection
  }

  // nat_rule_collection - computed: false, optional: true, required: false
  private _natRuleCollection?: FirewallPolicyRuleCollectionGroupNatRuleCollection[];
  public get natRuleCollection() {
    return this.interpolationForAttribute('nat_rule_collection') as any;
  }
  public set natRuleCollection(value: FirewallPolicyRuleCollectionGroupNatRuleCollection[] ) {
    this._natRuleCollection = value;
  }
  public resetNatRuleCollection() {
    this._natRuleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRuleCollectionInput() {
    return this._natRuleCollection
  }

  // network_rule_collection - computed: false, optional: true, required: false
  private _networkRuleCollection?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[];
  public get networkRuleCollection() {
    return this.interpolationForAttribute('network_rule_collection') as any;
  }
  public set networkRuleCollection(value: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] ) {
    this._networkRuleCollection = value;
  }
  public resetNetworkRuleCollection() {
    this._networkRuleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleCollectionInput() {
    return this._networkRuleCollection
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallPolicyRuleCollectionGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallPolicyRuleCollectionGroupTimeouts ) {
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
      firewall_policy_id: cdktf.stringToTerraform(this._firewallPolicyId),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      application_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionToTerraform)(this._applicationRuleCollection),
      nat_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupNatRuleCollectionToTerraform)(this._natRuleCollection),
      network_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupNetworkRuleCollectionToTerraform)(this._networkRuleCollection),
      timeouts: firewallPolicyRuleCollectionGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
