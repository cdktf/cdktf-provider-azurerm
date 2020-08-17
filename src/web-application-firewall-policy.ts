// https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WebApplicationFirewallPolicyConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** custom_rules block */
  readonly customRules?: WebApplicationFirewallPolicyCustomRules[];
  /** policy_settings block */
  readonly policySettings?: WebApplicationFirewallPolicyPolicySettings[];
  /** timeouts block */
  readonly timeouts?: WebApplicationFirewallPolicyTimeouts;
}
export interface WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables {
  readonly selector?: string;
  readonly variableName: string;
}
export interface WebApplicationFirewallPolicyCustomRulesMatchConditions {
  readonly matchValues: string[];
  readonly negationCondition?: boolean;
  readonly operator: string;
  /** match_variables block */
  readonly matchVariables: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables[];
}
export interface WebApplicationFirewallPolicyCustomRules {
  readonly action: string;
  readonly name?: string;
  readonly priority: number;
  readonly ruleType: string;
  /** match_conditions block */
  readonly matchConditions: WebApplicationFirewallPolicyCustomRulesMatchConditions[];
}
export interface WebApplicationFirewallPolicyPolicySettings {
  readonly enabled?: boolean;
  readonly mode?: string;
}
export interface WebApplicationFirewallPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class WebApplicationFirewallPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WebApplicationFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_application_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._customRules = config.customRules;
    this._policySettings = config.policySettings;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules?: WebApplicationFirewallPolicyCustomRules[];
  public get customRules() {
    return this._customRules;
  }
  public set customRules(value: WebApplicationFirewallPolicyCustomRules[] | undefined) {
    this._customRules = value;
  }

  // policy_settings - computed: false, optional: true, required: false
  private _policySettings?: WebApplicationFirewallPolicyPolicySettings[];
  public get policySettings() {
    return this._policySettings;
  }
  public set policySettings(value: WebApplicationFirewallPolicyPolicySettings[] | undefined) {
    this._policySettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WebApplicationFirewallPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WebApplicationFirewallPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      custom_rules: this._customRules,
      policy_settings: this._policySettings,
      timeouts: this._timeouts,
    };
  }
}
