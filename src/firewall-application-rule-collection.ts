// https://www.terraform.io/docs/providers/azurerm/r/firewall_application_rule_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FirewallApplicationRuleCollectionConfig extends TerraformMetaArguments {
  readonly action: string;
  readonly azureFirewallName: string;
  readonly name: string;
  readonly priority: number;
  readonly resourceGroupName: string;
  /** rule block */
  readonly rule: FirewallApplicationRuleCollectionRule[];
  /** timeouts block */
  readonly timeouts?: FirewallApplicationRuleCollectionTimeouts;
}
export interface FirewallApplicationRuleCollectionRuleProtocol {
  readonly port?: number;
  readonly type: string;
}
export interface FirewallApplicationRuleCollectionRule {
  readonly description?: string;
  readonly fqdnTags?: string[];
  readonly name: string;
  readonly sourceAddresses: string[];
  readonly targetFqdns?: string[];
  /** protocol block */
  readonly protocol?: FirewallApplicationRuleCollectionRuleProtocol[];
}
export interface FirewallApplicationRuleCollectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class FirewallApplicationRuleCollection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirewallApplicationRuleCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_application_rule_collection',
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
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // azure_firewall_name - computed: false, optional: false, required: true
  private _azureFirewallName: string;
  public get azureFirewallName() {
    return this._azureFirewallName;
  }
  public set azureFirewallName(value: string) {
    this._azureFirewallName = value;
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

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // rule - computed: false, optional: false, required: true
  private _rule: FirewallApplicationRuleCollectionRule[];
  public get rule() {
    return this._rule;
  }
  public set rule(value: FirewallApplicationRuleCollectionRule[]) {
    this._rule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallApplicationRuleCollectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FirewallApplicationRuleCollectionTimeouts | undefined) {
    this._timeouts = value;
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
