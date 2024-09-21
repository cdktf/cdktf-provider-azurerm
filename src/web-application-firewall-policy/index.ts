// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebApplicationFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#custom_rules WebApplicationFirewallPolicy#custom_rules}
  */
  readonly customRules?: WebApplicationFirewallPolicyCustomRules[] | cdktf.IResolvable;
  /**
  * managed_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#managed_rules WebApplicationFirewallPolicy#managed_rules}
  */
  readonly managedRules: WebApplicationFirewallPolicyManagedRules;
  /**
  * policy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#policy_settings WebApplicationFirewallPolicy#policy_settings}
  */
  readonly policySettings?: WebApplicationFirewallPolicyPolicySettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#timeouts WebApplicationFirewallPolicy#timeouts}
  */
  readonly timeouts?: WebApplicationFirewallPolicyTimeouts;
}
export interface WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}
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


export function webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToHclTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
      this._variableName = value.variableName;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}

export class WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference {
    return new WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyCustomRulesMatchConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}
  */
  readonly negationCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}
  */
  readonly transforms?: string[];
  /**
  * match_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#match_variables WebApplicationFirewallPolicy#match_variables}
  */
  readonly matchVariables: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyCustomRulesMatchConditionsToTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negation_condition: cdktf.booleanToTerraform(struct!.negationCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
    match_variables: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToTerraform, true)(struct!.matchVariables),
  }
}


export function webApplicationFirewallPolicyCustomRulesMatchConditionsToHclTerraform(struct?: WebApplicationFirewallPolicyCustomRulesMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negation_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negationCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_variables: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesToHclTerraform, true)(struct!.matchVariables),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyCustomRulesMatchConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negationCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negationCondition = this._negationCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._matchVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariables = this._matchVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyCustomRulesMatchConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negationCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._matchVariables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negationCondition = value.negationCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._matchVariables.internalValue = value.matchVariables;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negation_condition - computed: false, optional: true, required: false
  private _negationCondition?: boolean | cdktf.IResolvable; 
  public get negationCondition() {
    return this.getBooleanAttribute('negation_condition');
  }
  public set negationCondition(value: boolean | cdktf.IResolvable) {
    this._negationCondition = value;
  }
  public resetNegationCondition() {
    this._negationCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationConditionInput() {
    return this._negationCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // match_variables - computed: false, optional: false, required: true
  private _matchVariables = new WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList(this, "match_variables", false);
  public get matchVariables() {
    return this._matchVariables;
  }
  public putMatchVariables(value: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables[] | cdktf.IResolvable) {
    this._matchVariables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVariablesInput() {
    return this._matchVariables.internalValue;
  }
}

export class WebApplicationFirewallPolicyCustomRulesMatchConditionsList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyCustomRulesMatchConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference {
    return new WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#group_rate_limit_by WebApplicationFirewallPolicy#group_rate_limit_by}
  */
  readonly groupRateLimitBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rate_limit_duration WebApplicationFirewallPolicy#rate_limit_duration}
  */
  readonly rateLimitDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rate_limit_threshold WebApplicationFirewallPolicy#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}
  */
  readonly ruleType: string;
  /**
  * match_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#match_conditions WebApplicationFirewallPolicy#match_conditions}
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
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_rate_limit_by: cdktf.stringToTerraform(struct!.groupRateLimitBy),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rate_limit_duration: cdktf.stringToTerraform(struct!.rateLimitDuration),
    rate_limit_threshold: cdktf.numberToTerraform(struct!.rateLimitThreshold),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    match_conditions: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesMatchConditionsToTerraform, true)(struct!.matchConditions),
  }
}


export function webApplicationFirewallPolicyCustomRulesToHclTerraform(struct?: WebApplicationFirewallPolicyCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_rate_limit_by: {
      value: cdktf.stringToHclTerraform(struct!.groupRateLimitBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_duration: {
      value: cdktf.stringToHclTerraform(struct!.rateLimitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_conditions: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyCustomRulesMatchConditionsToHclTerraform, true)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyCustomRulesMatchConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyCustomRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyCustomRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupRateLimitBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRateLimitBy = this._groupRateLimitBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rateLimitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDuration = this._rateLimitDuration;
    }
    if (this._rateLimitThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitThreshold = this._rateLimitThreshold;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyCustomRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._groupRateLimitBy = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._rateLimitDuration = undefined;
      this._rateLimitThreshold = undefined;
      this._ruleType = undefined;
      this._matchConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._groupRateLimitBy = value.groupRateLimitBy;
      this._name = value.name;
      this._priority = value.priority;
      this._rateLimitDuration = value.rateLimitDuration;
      this._rateLimitThreshold = value.rateLimitThreshold;
      this._ruleType = value.ruleType;
      this._matchConditions.internalValue = value.matchConditions;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // group_rate_limit_by - computed: false, optional: true, required: false
  private _groupRateLimitBy?: string; 
  public get groupRateLimitBy() {
    return this.getStringAttribute('group_rate_limit_by');
  }
  public set groupRateLimitBy(value: string) {
    this._groupRateLimitBy = value;
  }
  public resetGroupRateLimitBy() {
    this._groupRateLimitBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRateLimitByInput() {
    return this._groupRateLimitBy;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rate_limit_duration - computed: false, optional: true, required: false
  private _rateLimitDuration?: string; 
  public get rateLimitDuration() {
    return this.getStringAttribute('rate_limit_duration');
  }
  public set rateLimitDuration(value: string) {
    this._rateLimitDuration = value;
  }
  public resetRateLimitDuration() {
    this._rateLimitDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDurationInput() {
    return this._rateLimitDuration;
  }

  // rate_limit_threshold - computed: false, optional: true, required: false
  private _rateLimitThreshold?: number; 
  public get rateLimitThreshold() {
    return this.getNumberAttribute('rate_limit_threshold');
  }
  public set rateLimitThreshold(value: number) {
    this._rateLimitThreshold = value;
  }
  public resetRateLimitThreshold() {
    this._rateLimitThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitThresholdInput() {
    return this._rateLimitThreshold;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // match_conditions - computed: false, optional: false, required: true
  private _matchConditions = new WebApplicationFirewallPolicyCustomRulesMatchConditionsList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: WebApplicationFirewallPolicyCustomRulesMatchConditions[] | cdktf.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }
}

export class WebApplicationFirewallPolicyCustomRulesList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyCustomRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyCustomRulesOutputReference {
    return new WebApplicationFirewallPolicyCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}
  */
  readonly excludedRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}
  */
  readonly ruleGroupName: string;
}

export function webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedRules),
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
  }
}


export function webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRules = this._excludedRules;
    }
    if (this._ruleGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupName = this._ruleGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedRules = undefined;
      this._ruleGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedRules = value.excludedRules;
      this._ruleGroupName = value.ruleGroupName;
    }
  }

  // excluded_rules - computed: false, optional: true, required: false
  private _excludedRules?: string[]; 
  public get excludedRules() {
    return this.getListAttribute('excluded_rules');
  }
  public set excludedRules(value: string[]) {
    this._excludedRules = value;
  }
  public resetExcludedRules() {
    this._excludedRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRulesInput() {
    return this._excludedRules;
  }

  // rule_group_name - computed: false, optional: false, required: true
  private _ruleGroupName?: string; 
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }
  public set ruleGroupName(value: string) {
    this._ruleGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupNameInput() {
    return this._ruleGroupName;
  }
}

export class WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference {
    return new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}
  */
  readonly version?: string;
  /**
  * rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule_group WebApplicationFirewallPolicy#rule_group}
  */
  readonly ruleGroup?: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference | WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    rule_group: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupToTerraform, true)(struct!.ruleGroup),
  }
}


export function webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference | WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_group: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupToHclTerraform, true)(struct!.ruleGroup),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._ruleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroup = this._ruleGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
      this._ruleGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
      this._ruleGroup.internalValue = value.ruleGroup;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList(this, "rule_group", false);
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup[] | cdktf.IResolvable) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }
}
export interface WebApplicationFirewallPolicyManagedRulesExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}
  */
  readonly selectorMatchOperator: string;
  /**
  * excluded_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#excluded_rule_set WebApplicationFirewallPolicy#excluded_rule_set}
  */
  readonly excludedRuleSet?: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet;
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
    excluded_rule_set: webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetToTerraform(struct!.excludedRuleSet),
  }
}


export function webApplicationFirewallPolicyManagedRulesExclusionToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_variable: {
      value: cdktf.stringToHclTerraform(struct!.matchVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector_match_operator: {
      value: cdktf.stringToHclTerraform(struct!.selectorMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_rule_set: {
      value: webApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetToHclTerraform(struct!.excludedRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyManagedRulesExclusionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRulesExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._selectorMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorMatchOperator = this._selectorMatchOperator;
    }
    if (this._excludedRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRuleSet = this._excludedRuleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRulesExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchVariable = undefined;
      this._selector = undefined;
      this._selectorMatchOperator = undefined;
      this._excludedRuleSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchVariable = value.matchVariable;
      this._selector = value.selector;
      this._selectorMatchOperator = value.selectorMatchOperator;
      this._excludedRuleSet.internalValue = value.excludedRuleSet;
    }
  }

  // match_variable - computed: false, optional: false, required: true
  private _matchVariable?: string; 
  public get matchVariable() {
    return this.getStringAttribute('match_variable');
  }
  public set matchVariable(value: string) {
    this._matchVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVariableInput() {
    return this._matchVariable;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // selector_match_operator - computed: false, optional: false, required: true
  private _selectorMatchOperator?: string; 
  public get selectorMatchOperator() {
    return this.getStringAttribute('selector_match_operator');
  }
  public set selectorMatchOperator(value: string) {
    this._selectorMatchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorMatchOperatorInput() {
    return this._selectorMatchOperator;
  }

  // excluded_rule_set - computed: false, optional: true, required: false
  private _excludedRuleSet = new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference(this, "excluded_rule_set");
  public get excludedRuleSet() {
    return this._excludedRuleSet;
  }
  public putExcludedRuleSet(value: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet) {
    this._excludedRuleSet.internalValue = value;
  }
  public resetExcludedRuleSet() {
    this._excludedRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRuleSetInput() {
    return this._excludedRuleSet.internalValue;
  }
}

export class WebApplicationFirewallPolicyManagedRulesExclusionList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyManagedRulesExclusion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyManagedRulesExclusionOutputReference {
    return new WebApplicationFirewallPolicyManagedRulesExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._id = value.id;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference {
    return new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}
  */
  readonly rule?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
    rule: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleToTerraform, true)(struct!.rule),
  }
}


export function webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupName = this._ruleGroupName;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleGroupName = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleGroupName = value.ruleGroupName;
      this._rule.internalValue = value.rule;
    }
  }

  // rule_group_name - computed: false, optional: false, required: true
  private _ruleGroupName?: string; 
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }
  public set ruleGroupName(value: string) {
    this._ruleGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupNameInput() {
    return this._ruleGroupName;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference {
    return new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyManagedRulesManagedRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}
  */
  readonly version: string;
  /**
  * rule_group_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule_group_override WebApplicationFirewallPolicy#rule_group_override}
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
    rule_group_override: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToTerraform, true)(struct!.ruleGroupOverride),
  }
}


export function webApplicationFirewallPolicyManagedRulesManagedRuleSetToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesManagedRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_group_override: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideToHclTerraform, true)(struct!.ruleGroupOverride),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyManagedRulesManagedRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._ruleGroupOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupOverride = this._ruleGroupOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._version = undefined;
      this._ruleGroupOverride.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._version = value.version;
      this._ruleGroupOverride.internalValue = value.ruleGroupOverride;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // rule_group_override - computed: false, optional: true, required: false
  private _ruleGroupOverride = new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList(this, "rule_group_override", false);
  public get ruleGroupOverride() {
    return this._ruleGroupOverride;
  }
  public putRuleGroupOverride(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride[] | cdktf.IResolvable) {
    this._ruleGroupOverride.internalValue = value;
  }
  public resetRuleGroupOverride() {
    this._ruleGroupOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupOverrideInput() {
    return this._ruleGroupOverride.internalValue;
  }
}

export class WebApplicationFirewallPolicyManagedRulesManagedRuleSetList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyManagedRulesManagedRuleSet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference {
    return new WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyManagedRules {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#exclusion WebApplicationFirewallPolicy#exclusion}
  */
  readonly exclusion?: WebApplicationFirewallPolicyManagedRulesExclusion[] | cdktf.IResolvable;
  /**
  * managed_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#managed_rule_set WebApplicationFirewallPolicy#managed_rule_set}
  */
  readonly managedRuleSet: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyManagedRulesToTerraform(struct?: WebApplicationFirewallPolicyManagedRulesOutputReference | WebApplicationFirewallPolicyManagedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesExclusionToTerraform, true)(struct!.exclusion),
    managed_rule_set: cdktf.listMapper(webApplicationFirewallPolicyManagedRulesManagedRuleSetToTerraform, true)(struct!.managedRuleSet),
  }
}


export function webApplicationFirewallPolicyManagedRulesToHclTerraform(struct?: WebApplicationFirewallPolicyManagedRulesOutputReference | WebApplicationFirewallPolicyManagedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyManagedRulesExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyManagedRulesExclusionList",
    },
    managed_rule_set: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyManagedRulesManagedRuleSetToHclTerraform, true)(struct!.managedRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyManagedRulesManagedRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    if (this._managedRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleSet = this._managedRuleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyManagedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
      this._managedRuleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
      this._managedRuleSet.internalValue = value.managedRuleSet;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new WebApplicationFirewallPolicyManagedRulesExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: WebApplicationFirewallPolicyManagedRulesExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }

  // managed_rule_set - computed: false, optional: false, required: true
  private _managedRuleSet = new WebApplicationFirewallPolicyManagedRulesManagedRuleSetList(this, "managed_rule_set", false);
  public get managedRuleSet() {
    return this._managedRuleSet;
  }
  public putManagedRuleSet(value: WebApplicationFirewallPolicyManagedRulesManagedRuleSet[] | cdktf.IResolvable) {
    this._managedRuleSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleSetInput() {
    return this._managedRuleSet.internalValue;
  }
}
export interface WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}
  */
  readonly selectorMatchOperator?: string;
}

export function webApplicationFirewallPolicyPolicySettingsLogScrubbingRuleToTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    selector: cdktf.stringToTerraform(struct!.selector),
    selector_match_operator: cdktf.stringToTerraform(struct!.selectorMatchOperator),
  }
}


export function webApplicationFirewallPolicyPolicySettingsLogScrubbingRuleToHclTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_variable: {
      value: cdktf.stringToHclTerraform(struct!.matchVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector_match_operator: {
      value: cdktf.stringToHclTerraform(struct!.selectorMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._selectorMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorMatchOperator = this._selectorMatchOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._matchVariable = undefined;
      this._selector = undefined;
      this._selectorMatchOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._matchVariable = value.matchVariable;
      this._selector = value.selector;
      this._selectorMatchOperator = value.selectorMatchOperator;
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

  // match_variable - computed: false, optional: false, required: true
  private _matchVariable?: string; 
  public get matchVariable() {
    return this.getStringAttribute('match_variable');
  }
  public set matchVariable(value: string) {
    this._matchVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVariableInput() {
    return this._matchVariable;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // selector_match_operator - computed: false, optional: true, required: false
  private _selectorMatchOperator?: string; 
  public get selectorMatchOperator() {
    return this.getStringAttribute('selector_match_operator');
  }
  public set selectorMatchOperator(value: string) {
    this._selectorMatchOperator = value;
  }
  public resetSelectorMatchOperator() {
    this._selectorMatchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorMatchOperatorInput() {
    return this._selectorMatchOperator;
  }
}

export class WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList extends cdktf.ComplexList {
  public internalValue? : WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference {
    return new WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationFirewallPolicyPolicySettingsLogScrubbing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}
  */
  readonly rule?: WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule[] | cdktf.IResolvable;
}

export function webApplicationFirewallPolicyPolicySettingsLogScrubbingToTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference | WebApplicationFirewallPolicyPolicySettingsLogScrubbing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rule: cdktf.listMapper(webApplicationFirewallPolicyPolicySettingsLogScrubbingRuleToTerraform, true)(struct!.rule),
  }
}


export function webApplicationFirewallPolicyPolicySettingsLogScrubbingToHclTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference | WebApplicationFirewallPolicyPolicySettingsLogScrubbing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktf.listMapperHcl(webApplicationFirewallPolicyPolicySettingsLogScrubbingRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationFirewallPolicyPolicySettingsLogScrubbing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyPolicySettingsLogScrubbing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rule.internalValue = value.rule;
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

  // rule - computed: false, optional: true, required: false
  private _rule = new WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface WebApplicationFirewallPolicyPolicySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}
  */
  readonly fileUploadLimitInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#js_challenge_cookie_expiration_in_minutes WebApplicationFirewallPolicy#js_challenge_cookie_expiration_in_minutes}
  */
  readonly jsChallengeCookieExpirationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}
  */
  readonly maxRequestBodySizeInKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}
  */
  readonly requestBodyCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#request_body_enforcement WebApplicationFirewallPolicy#request_body_enforcement}
  */
  readonly requestBodyEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#request_body_inspect_limit_in_kb WebApplicationFirewallPolicy#request_body_inspect_limit_in_kb}
  */
  readonly requestBodyInspectLimitInKb?: number;
  /**
  * log_scrubbing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#log_scrubbing WebApplicationFirewallPolicy#log_scrubbing}
  */
  readonly logScrubbing?: WebApplicationFirewallPolicyPolicySettingsLogScrubbing;
}

export function webApplicationFirewallPolicyPolicySettingsToTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsOutputReference | WebApplicationFirewallPolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    file_upload_limit_in_mb: cdktf.numberToTerraform(struct!.fileUploadLimitInMb),
    js_challenge_cookie_expiration_in_minutes: cdktf.numberToTerraform(struct!.jsChallengeCookieExpirationInMinutes),
    max_request_body_size_in_kb: cdktf.numberToTerraform(struct!.maxRequestBodySizeInKb),
    mode: cdktf.stringToTerraform(struct!.mode),
    request_body_check: cdktf.booleanToTerraform(struct!.requestBodyCheck),
    request_body_enforcement: cdktf.booleanToTerraform(struct!.requestBodyEnforcement),
    request_body_inspect_limit_in_kb: cdktf.numberToTerraform(struct!.requestBodyInspectLimitInKb),
    log_scrubbing: webApplicationFirewallPolicyPolicySettingsLogScrubbingToTerraform(struct!.logScrubbing),
  }
}


export function webApplicationFirewallPolicyPolicySettingsToHclTerraform(struct?: WebApplicationFirewallPolicyPolicySettingsOutputReference | WebApplicationFirewallPolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_upload_limit_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.fileUploadLimitInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    js_challenge_cookie_expiration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.jsChallengeCookieExpirationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_body_size_in_kb: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySizeInKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_body_check: {
      value: cdktf.booleanToHclTerraform(struct!.requestBodyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_body_enforcement: {
      value: cdktf.booleanToHclTerraform(struct!.requestBodyEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_body_inspect_limit_in_kb: {
      value: cdktf.numberToHclTerraform(struct!.requestBodyInspectLimitInKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_scrubbing: {
      value: webApplicationFirewallPolicyPolicySettingsLogScrubbingToHclTerraform(struct!.logScrubbing),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationFirewallPolicyPolicySettingsLogScrubbingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._jsChallengeCookieExpirationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeCookieExpirationInMinutes = this._jsChallengeCookieExpirationInMinutes;
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
    if (this._requestBodyEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyEnforcement = this._requestBodyEnforcement;
    }
    if (this._requestBodyInspectLimitInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyInspectLimitInKb = this._requestBodyInspectLimitInKb;
    }
    if (this._logScrubbing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logScrubbing = this._logScrubbing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationFirewallPolicyPolicySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fileUploadLimitInMb = undefined;
      this._jsChallengeCookieExpirationInMinutes = undefined;
      this._maxRequestBodySizeInKb = undefined;
      this._mode = undefined;
      this._requestBodyCheck = undefined;
      this._requestBodyEnforcement = undefined;
      this._requestBodyInspectLimitInKb = undefined;
      this._logScrubbing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fileUploadLimitInMb = value.fileUploadLimitInMb;
      this._jsChallengeCookieExpirationInMinutes = value.jsChallengeCookieExpirationInMinutes;
      this._maxRequestBodySizeInKb = value.maxRequestBodySizeInKb;
      this._mode = value.mode;
      this._requestBodyCheck = value.requestBodyCheck;
      this._requestBodyEnforcement = value.requestBodyEnforcement;
      this._requestBodyInspectLimitInKb = value.requestBodyInspectLimitInKb;
      this._logScrubbing.internalValue = value.logScrubbing;
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

  // js_challenge_cookie_expiration_in_minutes - computed: false, optional: true, required: false
  private _jsChallengeCookieExpirationInMinutes?: number; 
  public get jsChallengeCookieExpirationInMinutes() {
    return this.getNumberAttribute('js_challenge_cookie_expiration_in_minutes');
  }
  public set jsChallengeCookieExpirationInMinutes(value: number) {
    this._jsChallengeCookieExpirationInMinutes = value;
  }
  public resetJsChallengeCookieExpirationInMinutes() {
    this._jsChallengeCookieExpirationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeCookieExpirationInMinutesInput() {
    return this._jsChallengeCookieExpirationInMinutes;
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

  // request_body_enforcement - computed: false, optional: true, required: false
  private _requestBodyEnforcement?: boolean | cdktf.IResolvable; 
  public get requestBodyEnforcement() {
    return this.getBooleanAttribute('request_body_enforcement');
  }
  public set requestBodyEnforcement(value: boolean | cdktf.IResolvable) {
    this._requestBodyEnforcement = value;
  }
  public resetRequestBodyEnforcement() {
    this._requestBodyEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyEnforcementInput() {
    return this._requestBodyEnforcement;
  }

  // request_body_inspect_limit_in_kb - computed: false, optional: true, required: false
  private _requestBodyInspectLimitInKb?: number; 
  public get requestBodyInspectLimitInKb() {
    return this.getNumberAttribute('request_body_inspect_limit_in_kb');
  }
  public set requestBodyInspectLimitInKb(value: number) {
    this._requestBodyInspectLimitInKb = value;
  }
  public resetRequestBodyInspectLimitInKb() {
    this._requestBodyInspectLimitInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInspectLimitInKbInput() {
    return this._requestBodyInspectLimitInKb;
  }

  // log_scrubbing - computed: false, optional: true, required: false
  private _logScrubbing = new WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference(this, "log_scrubbing");
  public get logScrubbing() {
    return this._logScrubbing;
  }
  public putLogScrubbing(value: WebApplicationFirewallPolicyPolicySettingsLogScrubbing) {
    this._logScrubbing.internalValue = value;
  }
  public resetLogScrubbing() {
    this._logScrubbing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logScrubbingInput() {
    return this._logScrubbing.internalValue;
  }
}
export interface WebApplicationFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}
  */
  readonly update?: string;
}

export function webApplicationFirewallPolicyTimeoutsToTerraform(struct?: WebApplicationFirewallPolicyTimeouts | cdktf.IResolvable): any {
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


export function webApplicationFirewallPolicyTimeoutsToHclTerraform(struct?: WebApplicationFirewallPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebApplicationFirewallPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: WebApplicationFirewallPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy azurerm_web_application_firewall_policy}
*/
export class WebApplicationFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_application_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebApplicationFirewallPolicy to import
  * @param importFromId The id of the existing WebApplicationFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebApplicationFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_web_application_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_application_firewall_policy azurerm_web_application_firewall_policy} Resource
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
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._customRules.internalValue = config.customRules;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _customRules = new WebApplicationFirewallPolicyCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: WebApplicationFirewallPolicyCustomRules[] | cdktf.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      custom_rules: cdktf.listMapper(webApplicationFirewallPolicyCustomRulesToTerraform, true)(this._customRules.internalValue),
      managed_rules: webApplicationFirewallPolicyManagedRulesToTerraform(this._managedRules.internalValue),
      policy_settings: webApplicationFirewallPolicyPolicySettingsToTerraform(this._policySettings.internalValue),
      timeouts: webApplicationFirewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      custom_rules: {
        value: cdktf.listMapperHcl(webApplicationFirewallPolicyCustomRulesToHclTerraform, true)(this._customRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationFirewallPolicyCustomRulesList",
      },
      managed_rules: {
        value: webApplicationFirewallPolicyManagedRulesToHclTerraform(this._managedRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationFirewallPolicyManagedRulesList",
      },
      policy_settings: {
        value: webApplicationFirewallPolicyPolicySettingsToHclTerraform(this._policySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationFirewallPolicyPolicySettingsList",
      },
      timeouts: {
        value: webApplicationFirewallPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebApplicationFirewallPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
