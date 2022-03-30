// https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebApplicationFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * custom_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#custom_rules WebApplicationFirewallPolicy#custom_rules}
  */
  readonly customRules?: WebApplicationFirewallPolicyCustomRules[] | cdktf.IResolvable;
  /**
  * managed_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#managed_rules WebApplicationFirewallPolicy#managed_rules}
  */
  readonly managedRules: WebApplicationFirewallPolicyManagedRules;
  /**
  * policy_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#policy_settings WebApplicationFirewallPolicy#policy_settings}
  */
  readonly policySettings?: WebApplicationFirewallPolicyPolicySettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#timeouts WebApplicationFirewallPolicy#timeouts}
  */
  readonly timeouts?: WebApplicationFirewallPolicyTimeouts;
}
export interface WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}
  */
  readonly variableName: string;
}

export function webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export interface WebApplicationFirewallPolicyCustomRulesMatchConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}
  */
  readonly negationCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}
  */
  readonly transforms?: string[];
  /**
  * match_variables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#match_variables WebApplicationFirewallPolicy#match_variables}
  */
  readonly matchVariables: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyCustomRulesMatchConditionsToTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negation_condition: cdktf.booleanToTerraform(struct!.negationCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
    match_variables: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToTerraform)(struct!.matchVariables),
  }
}

export interface WebApplicationFirewallPolicyCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}
  */
  readonly ruleType: string;
  /**
  * match_conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#match_conditions WebApplicationFirewallPolicy#match_conditions}
  */
  readonly matchConditions: WebApplicationFirewallPolicyCustomRulesMatchConditions[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyCustomRulesToTerraform(struct?: WebApplicationFirewallPolicyCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    match_conditions: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesMatchConditionsToTerraform)(struct!.matchConditions),
  }
}

export interface WebApplicationFirewallPolicyManagedRulesExclusion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}
  */
  readonly selectorMatchOperator: string;
}

export function webApplicationFirewallPolicyManagedRulesExclusionToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    selector: cdktf.stringToTerraform(struct!.selector),
    selector_match_operator: cdktf.stringToTerraform(struct!.selectorMatchOperator),
  }
}

export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#disabled_rules WebApplicationFirewallPolicy#disabled_rules}
  */
  readonly disabledRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}
  */
  readonly ruleGroupName: string;
}

export function webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledRules),
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
  }
}

export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}
  */
  readonly version: string;
  /**
  * rule_group_override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#rule_group_override WebApplicationFirewallPolicy#rule_group_override}
  */
  readonly ruleGroupOverride?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyManagedRulesManagedRuleSetToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    rule_group_override: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToTerraform)(struct!.ruleGroupOverride),
  }
}

export interface WebApplicationFirewallPolicyManagedRules {
  /**
  * exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#exclusion WebApplicationFirewallPolicy#exclusion}
  */
  readonly exclusion?: WebApplicationFirewallPolicyManagedRulesExclusion[] | cdktf.IResolvable;
  /**
  * managed_rule_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#managed_rule_set WebApplicationFirewallPolicy#managed_rule_set}
  */
  readonly managedRuleSet: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyManagedRulesToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesOutputReference | WebApplicationFirewallPolicyManagedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesExclusionToTerraform)(struct!.exclusion),
    managed_rule_set: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetToTerraform)(struct!.managedRuleSet),
  }
}

export class WebApplicationFirewallPolicyManagedRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    if (this._managedRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleSet = this._managedRuleSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion = undefined;
      this._managedRuleSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion = value.exclusion;
      this._managedRuleSet = value.managedRuleSet;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: WebApplicationFirewallPolicyManagedRulesExclusion[] | cdktf.IResolvable; 
  public get exclusion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclusion');
  }
  public set exclusion(value: WebApplicationFirewallPolicyManagedRulesExclusion[] | cdktf.IResolvable) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // managed_rule_set - computed: false, optional: false, required: true
  private _managedRuleSet?: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[] | cdktf.IResolvable; 
  public get managedRuleSet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('managed_rule_set');
  }
  public set managedRuleSet(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[] | cdktf.IResolvable) {
    this._managedRuleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleSetInput() {
    return this._managedRuleSet;
  }
}
export interface WebApplicationFirewallPolicyPolicySettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}
  */
  readonly fileUploadLimitInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}
  */
  readonly maxRequestBodySizeInKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}
  */
  readonly requestBodyCheck?: boolean | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyPolicySettingsToTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsOutputReference | WebApplicationFirewallPolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    file_upload_limit_in_mb: cdktf.numberToTerraform(struct!.fileUploadLimitInMb),
    max_request_body_size_in_kb: cdktf.numberToTerraform(struct!.maxRequestBodySizeInKb),
    mode: cdktf.stringToTerraform(struct!.mode),
    request_body_check: cdktf.booleanToTerraform(struct!.requestBodyCheck),
  }
}

export class WebApplicationFirewallPolicyPolicySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationFirewallPolicyPolicySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fileUploadLimitInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUploadLimitInMb = this._fileUploadLimitInMb;
    }
    if (this._maxRequestBodySizeInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySizeInKb = this._maxRequestBodySizeInKb;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._requestBodyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyCheck = this._requestBodyCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyPolicySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fileUploadLimitInMb = undefined;
      this._maxRequestBodySizeInKb = undefined;
      this._mode = undefined;
      this._requestBodyCheck = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fileUploadLimitInMb = value.fileUploadLimitInMb;
      this._maxRequestBodySizeInKb = value.maxRequestBodySizeInKb;
      this._mode = value.mode;
      this._requestBodyCheck = value.requestBodyCheck;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // file_upload_limit_in_mb - computed: false, optional: true, required: false
  private _fileUploadLimitInMb?: number; 
  public get fileUploadLimitInMb() {
    return this.getNumberAttribute('file_upload_limit_in_mb');
  }
  public set fileUploadLimitInMb(value: number) {
    this._fileUploadLimitInMb = value;
  }
  public resetFileUploadLimitInMb() {
    this._fileUploadLimitInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadLimitInMbInput() {
    return this._fileUploadLimitInMb;
  }

  // max_request_body_size_in_kb - computed: false, optional: true, required: false
  private _maxRequestBodySizeInKb?: number; 
  public get maxRequestBodySizeInKb() {
    return this.getNumberAttribute('max_request_body_size_in_kb');
  }
  public set maxRequestBodySizeInKb(value: number) {
    this._maxRequestBodySizeInKb = value;
  }
  public resetMaxRequestBodySizeInKb() {
    this._maxRequestBodySizeInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodySizeInKbInput() {
    return this._maxRequestBodySizeInKb;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // request_body_check - computed: false, optional: true, required: false
  private _requestBodyCheck?: boolean | cdktf.IResolvable; 
  public get requestBodyCheck() {
    return this.getBooleanAttribute('request_body_check');
  }
  public set requestBodyCheck(value: boolean | cdktf.IResolvable) {
    this._requestBodyCheck = value;
  }
  public resetRequestBodyCheck() {
    this._requestBodyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyCheckInput() {
    return this._requestBodyCheck;
  }
}
export interface WebApplicationFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}
  */
  readonly update?: string;
}

export function webApplicationFirewallPolicyTimeoutsToTerraform(struct?: WebApplicationFirewallPolicyTimeoutsOutputReference | WebApplicationFirewallPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class WebApplicationFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationFirewallPolicyTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy azurerm_web_application_firewall_policy}
*/
export class WebApplicationFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_application_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/web_application_firewall_policy azurerm_web_application_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebApplicationFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WebApplicationFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_application_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
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
    this._managedRules.internalValue = config.managedRules;
    this._policySettings.internalValue = config.policySettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_listener_ids - computed: true, optional: false, required: false
  public get httpListenerIds() {
    return this.getListAttribute('http_listener_ids');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path_based_rule_ids - computed: true, optional: false, required: false
  public get pathBasedRuleIds() {
    return this.getListAttribute('path_based_rule_ids');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules?: WebApplicationFirewallPolicyCustomRules[] | cdktf.IResolvable; 
  public get customRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_rules');
  }
  public set customRules(value: WebApplicationFirewallPolicyCustomRules[] | cdktf.IResolvable) {
    this._customRules = value;
  }
  public resetCustomRules() {
    this._customRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules;
  }

  // managed_rules - computed: false, optional: false, required: true
  private _managedRules = new WebApplicationFirewallPolicyManagedRulesOutputReference(this, "managed_rules");
  public get managedRules() {
    return this._managedRules;
  }
  public putManagedRules(value: WebApplicationFirewallPolicyManagedRules) {
    this._managedRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesInput() {
    return this._managedRules.internalValue;
  }

  // policy_settings - computed: false, optional: true, required: false
  private _policySettings = new WebApplicationFirewallPolicyPolicySettingsOutputReference(this, "policy_settings");
  public get policySettings() {
    return this._policySettings;
  }
  public putPolicySettings(value: WebApplicationFirewallPolicyPolicySettings) {
    this._policySettings.internalValue = value;
  }
  public resetPolicySettings() {
    this._policySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySettingsInput() {
    return this._policySettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebApplicationFirewallPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebApplicationFirewallPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      custom_rules: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesToTerraform)(this._customRules),
      managed_rules: webApplicationFirewallPolicyManagedRulesToTerraform(this._managedRules.internalValue),
      policy_settings: webApplicationFirewallPolicyPolicySettingsToTerraform(this._policySettings.internalValue),
      timeouts: webApplicationFirewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
