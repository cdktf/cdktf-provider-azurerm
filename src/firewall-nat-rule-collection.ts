// https://www.terraform.io/docs/providers/azurerm/r/firewall_nat_rule_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FirewallNatRuleCollectionConfig extends TerraformMetaArguments {
  readonly action: string;
  readonly azureFirewallName: string;
  readonly name: string;
  readonly priority: number;
  readonly resourceGroupName: string;
  /** rule block */
  readonly rule: FirewallNatRuleCollectionRule[];
  /** timeouts block */
  readonly timeouts?: FirewallNatRuleCollectionTimeouts;
}
export interface FirewallNatRuleCollectionRule {
  readonly description?: string;
  readonly destinationAddresses: string[];
  readonly destinationPorts: string[];
  readonly name: string;
  readonly protocols: string[];
  readonly sourceAddresses?: string[];
  readonly sourceIpGroups?: string[];
  readonly translatedAddress: string;
  readonly translatedPort: string;
}
export interface FirewallNatRuleCollectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class FirewallNatRuleCollection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirewallNatRuleCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_nat_rule_collection',
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
  private _rule: FirewallNatRuleCollectionRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: FirewallNatRuleCollectionRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallNatRuleCollectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallNatRuleCollectionTimeouts ) {
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
      action: this._action,
      azure_firewall_name: this._azureFirewallName,
      name: this._name,
      priority: this._priority,
      resource_group_name: this._resourceGroupName,
      rule: this._rule,
      timeouts: this._timeouts,
    };
  }
}
