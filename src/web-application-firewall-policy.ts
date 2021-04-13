// https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebApplicationFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly httpListenerIds?: string[];
  readonly location: string;
  readonly name: string;
  readonly pathBasedRuleIds?: string[];
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

function webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export interface WebApplicationFirewallPolicyCustomRulesMatchConditions {
  readonly matchValues: string[];
  readonly negationCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
  /** match_variables block */
  readonly matchVariables: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables[];
}

function webApplicationFirewallPolicyCustomRulesMatchConditionsToTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negation_condition: cdktf.booleanToTerraform(struct!.negationCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
    match_variables: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToTerraform)(struct!.matchVariables),
  }
}

export interface WebApplicationFirewallPolicyCustomRules {
  readonly action: string;
  readonly name?: string;
  readonly priority: number;
  readonly ruleType: string;
  /** match_conditions block */
  readonly matchConditions: WebApplicationFirewallPolicyCustomRulesMatchConditions[];
}

function webApplicationFirewallPolicyCustomRulesToTerraform(struct?: WebApplicationFirewallPolicyCustomRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    match_conditions: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesMatchConditionsToTerraform)(struct!.matchConditions),
  }
}

export interface WebApplicationFirewallPolicyManagedRulesExclusion {
  readonly matchVariable: string;
  readonly selector: string;
  readonly selectorMatchOperator: string;
}

function webApplicationFirewallPolicyManagedRulesExclusionToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    selector: cdktf.stringToTerraform(struct!.selector),
    selector_match_operator: cdktf.stringToTerraform(struct!.selectorMatchOperator),
  }
}

export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride {
  readonly disabledRules: string[];
  readonly ruleGroupName: string;
}

function webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledRules),
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
  }
}

export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSet {
  readonly type?: string;
  readonly version: string;
  /** rule_group_override block */
  readonly ruleGroupOverride?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride[];
}

function webApplicationFirewallPolicyManagedRulesManagedRuleSetToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    rule_group_override: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToTerraform)(struct!.ruleGroupOverride),
  }
}

export interface WebApplicationFirewallPolicyManagedRules {
  /** exclusion block */
  readonly exclusion?: WebApplicationFirewallPolicyManagedRulesExclusion[];
  /** managed_rule_set block */
  readonly managedRuleSet: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[];
}

function webApplicationFirewallPolicyManagedRulesToTerraform(struct?: WebApplicationFirewallPolicyManagedRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclusion: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesExclusionToTerraform)(struct!.exclusion),
    managed_rule_set: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetToTerraform)(struct!.managedRuleSet),
  }
}

export interface WebApplicationFirewallPolicyPolicySettings {
  readonly enabled?: boolean;
  readonly fileUploadLimitInMb?: number;
  readonly maxRequestBodySizeInKb?: number;
  readonly mode?: string;
  readonly requestBodyCheck?: boolean;
}

function webApplicationFirewallPolicyPolicySettingsToTerraform(struct?: WebApplicationFirewallPolicyPolicySettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    file_upload_limit_in_mb: cdktf.numberToTerraform(struct!.fileUploadLimitInMb),
    max_request_body_size_in_kb: cdktf.numberToTerraform(struct!.maxRequestBodySizeInKb),
    mode: cdktf.stringToTerraform(struct!.mode),
    request_body_check: cdktf.booleanToTerraform(struct!.requestBodyCheck),
  }
}

export interface WebApplicationFirewallPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function webApplicationFirewallPolicyTimeoutsToTerraform(struct?: WebApplicationFirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class WebApplicationFirewallPolicy extends cdktf.TerraformResource {

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
    this._httpListenerIds = config.httpListenerIds;
    this._location = config.location;
    this._name = config.name;
    this._pathBasedRuleIds = config.pathBasedRuleIds;
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

  // http_listener_ids - computed: false, optional: true, required: false
  private _httpListenerIds?: string[];
  public get httpListenerIds() {
    return this.getListAttribute('http_listener_ids');
  }
  public set httpListenerIds(value: string[] ) {
    this._httpListenerIds = value;
  }
  public resetHttpListenerIds() {
    this._httpListenerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenerIdsInput() {
    return this._httpListenerIds
  }

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

  // path_based_rule_ids - computed: false, optional: true, required: false
  private _pathBasedRuleIds?: string[];
  public get pathBasedRuleIds() {
    return this.getListAttribute('path_based_rule_ids');
  }
  public set pathBasedRuleIds(value: string[] ) {
    this._pathBasedRuleIds = value;
  }
  public resetPathBasedRuleIds() {
    this._pathBasedRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathBasedRuleIdsInput() {
    return this._pathBasedRuleIds
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
      http_listener_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._httpListenerIds),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      path_based_rule_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._pathBasedRuleIds),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      custom_rules: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesToTerraform)(this._customRules),
      managed_rules: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesToTerraform)(this._managedRules),
      policy_settings: cdktf.listMapper(webApplicationFirewallPolicyPolicySettingsToTerraform)(this._policySettings),
      timeouts: webApplicationFirewallPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
