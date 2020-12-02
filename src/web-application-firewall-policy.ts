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
  /** managed_rules block */
  readonly managedRules: WebApplicationFirewallPolicyManagedRules[];
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
  readonly transforms?: string[];
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
export interface WebApplicationFirewallPolicyManagedRulesExclusion {
  readonly matchVariable: string;
  readonly selector: string;
  readonly selectorMatchOperator: string;
}
export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride {
  readonly disabledRules: string[];
  readonly ruleGroupName: string;
}
export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSet {
  readonly type?: string;
  readonly version: string;
  /** rule_group_override block */
  readonly ruleGroupOverride?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride[];
}
export interface WebApplicationFirewallPolicyManagedRules {
  /** exclusion block */
  readonly exclusion?: WebApplicationFirewallPolicyManagedRulesExclusion[];
  /** managed_rule_set block */
  readonly managedRuleSet: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[];
}
export interface WebApplicationFirewallPolicyPolicySettings {
  readonly enabled?: boolean;
  readonly fileUploadLimitInMb?: number;
  readonly maxRequestBodySizeInKb?: number;
  readonly mode?: string;
  readonly requestBodyCheck?: boolean;
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
    this._managedRules = config.managedRules;
    this._policySettings = config.policySettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules?: WebApplicationFirewallPolicyCustomRules[];
  public get customRules() {
    return this.interpolationForAttribute('custom_rules') as any;
  }
  public set customRules(value: WebApplicationFirewallPolicyCustomRules[] ) {
    this._customRules = value;
  }
  public resetCustomRules() {
    this._customRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules
  }

  // managed_rules - computed: false, optional: false, required: true
  private _managedRules: WebApplicationFirewallPolicyManagedRules[];
  public get managedRules() {
    return this.interpolationForAttribute('managed_rules') as any;
  }
  public set managedRules(value: WebApplicationFirewallPolicyManagedRules[]) {
    this._managedRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesInput() {
    return this._managedRules
  }

  // policy_settings - computed: false, optional: true, required: false
  private _policySettings?: WebApplicationFirewallPolicyPolicySettings[];
  public get policySettings() {
    return this.interpolationForAttribute('policy_settings') as any;
  }
  public set policySettings(value: WebApplicationFirewallPolicyPolicySettings[] ) {
    this._policySettings = value;
  }
  public resetPolicySettings() {
    this._policySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySettingsInput() {
    return this._policySettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WebApplicationFirewallPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: WebApplicationFirewallPolicyTimeouts ) {
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
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      custom_rules: this._customRules,
      managed_rules: this._managedRules,
      policy_settings: this._policySettings,
      timeouts: this._timeouts,
    };
  }
}
