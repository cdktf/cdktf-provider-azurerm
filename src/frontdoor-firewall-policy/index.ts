// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}
  */
  readonly customBlockResponseBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}
  */
  readonly customBlockResponseStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#custom_rule FrontdoorFirewallPolicy#custom_rule}
  */
  readonly customRule?: FrontdoorFirewallPolicyCustomRule[] | cdktf.IResolvable;
  /**
  * managed_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#managed_rule FrontdoorFirewallPolicy#managed_rule}
  */
  readonly managedRule?: FrontdoorFirewallPolicyManagedRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#timeouts FrontdoorFirewallPolicy#timeouts}
  */
  readonly timeouts?: FrontdoorFirewallPolicyTimeouts;
}
export interface FrontdoorFirewallPolicyCustomRuleMatchCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}
  */
  readonly negationCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}
  */
  readonly transforms?: string[];
}

export function frontdoorFirewallPolicyCustomRuleMatchConditionToTerraform(struct?: FrontdoorFirewallPolicyCustomRuleMatchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    negation_condition: cdktf.booleanToTerraform(struct!.negationCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function frontdoorFirewallPolicyCustomRuleMatchConditionToHclTerraform(struct?: FrontdoorFirewallPolicyCustomRuleMatchCondition | cdktf.IResolvable): any {
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
    match_variable: {
      value: cdktf.stringToHclTerraform(struct!.matchVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyCustomRuleMatchCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._negationCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negationCondition = this._negationCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyCustomRuleMatchCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._matchVariable = undefined;
      this._negationCondition = undefined;
      this._operator = undefined;
      this._selector = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._matchVariable = value.matchVariable;
      this._negationCondition = value.negationCondition;
      this._operator = value.operator;
      this._selector = value.selector;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return this.getListAttribute('transforms');
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
}

export class FrontdoorFirewallPolicyCustomRuleMatchConditionList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyCustomRuleMatchCondition[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference {
    return new FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyCustomRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}
  */
  readonly rateLimitDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * match_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#match_condition FrontdoorFirewallPolicy#match_condition}
  */
  readonly matchCondition?: FrontdoorFirewallPolicyCustomRuleMatchCondition[] | cdktf.IResolvable;
}

export function frontdoorFirewallPolicyCustomRuleToTerraform(struct?: FrontdoorFirewallPolicyCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rate_limit_duration_in_minutes: cdktf.numberToTerraform(struct!.rateLimitDurationInMinutes),
    rate_limit_threshold: cdktf.numberToTerraform(struct!.rateLimitThreshold),
    type: cdktf.stringToTerraform(struct!.type),
    match_condition: cdktf.listMapper(frontdoorFirewallPolicyCustomRuleMatchConditionToTerraform, true)(struct!.matchCondition),
  }
}


export function frontdoorFirewallPolicyCustomRuleToHclTerraform(struct?: FrontdoorFirewallPolicyCustomRule | cdktf.IResolvable): any {
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
    rate_limit_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_condition: {
      value: cdktf.listMapperHcl(frontdoorFirewallPolicyCustomRuleMatchConditionToHclTerraform, true)(struct!.matchCondition),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorFirewallPolicyCustomRuleMatchConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyCustomRule | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rateLimitDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDurationInMinutes = this._rateLimitDurationInMinutes;
    }
    if (this._rateLimitThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitThreshold = this._rateLimitThreshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._matchCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCondition = this._matchCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._rateLimitDurationInMinutes = undefined;
      this._rateLimitThreshold = undefined;
      this._type = undefined;
      this._matchCondition.internalValue = undefined;
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
      this._name = value.name;
      this._priority = value.priority;
      this._rateLimitDurationInMinutes = value.rateLimitDurationInMinutes;
      this._rateLimitThreshold = value.rateLimitThreshold;
      this._type = value.type;
      this._matchCondition.internalValue = value.matchCondition;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rate_limit_duration_in_minutes - computed: false, optional: true, required: false
  private _rateLimitDurationInMinutes?: number; 
  public get rateLimitDurationInMinutes() {
    return this.getNumberAttribute('rate_limit_duration_in_minutes');
  }
  public set rateLimitDurationInMinutes(value: number) {
    this._rateLimitDurationInMinutes = value;
  }
  public resetRateLimitDurationInMinutes() {
    this._rateLimitDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDurationInMinutesInput() {
    return this._rateLimitDurationInMinutes;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // match_condition - computed: false, optional: true, required: false
  private _matchCondition = new FrontdoorFirewallPolicyCustomRuleMatchConditionList(this, "match_condition", false);
  public get matchCondition() {
    return this._matchCondition;
  }
  public putMatchCondition(value: FrontdoorFirewallPolicyCustomRuleMatchCondition[] | cdktf.IResolvable) {
    this._matchCondition.internalValue = value;
  }
  public resetMatchCondition() {
    this._matchCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition.internalValue;
  }
}

export class FrontdoorFirewallPolicyCustomRuleList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyCustomRule[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyCustomRuleOutputReference {
    return new FrontdoorFirewallPolicyCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyManagedRuleExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector: string;
}

export function frontdoorFirewallPolicyManagedRuleExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function frontdoorFirewallPolicyManagedRuleExclusionToHclTerraform(struct?: FrontdoorFirewallPolicyManagedRuleExclusion | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyManagedRuleExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyManagedRuleExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyManagedRuleExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchVariable = undefined;
      this._operator = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchVariable = value.matchVariable;
      this._operator = value.operator;
      this._selector = value.selector;
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
}

export class FrontdoorFirewallPolicyManagedRuleExclusionList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyManagedRuleExclusion[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyManagedRuleExclusionOutputReference {
    return new FrontdoorFirewallPolicyManagedRuleExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyManagedRuleOverrideExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector: string;
}

export function frontdoorFirewallPolicyManagedRuleOverrideExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function frontdoorFirewallPolicyManagedRuleOverrideExclusionToHclTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyManagedRuleOverrideExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyManagedRuleOverrideExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchVariable = undefined;
      this._operator = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchVariable = value.matchVariable;
      this._operator = value.operator;
      this._selector = value.selector;
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
}

export class FrontdoorFirewallPolicyManagedRuleOverrideExclusionList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyManagedRuleOverrideExclusion[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference {
    return new FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector: string;
}

export function frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToHclTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchVariable = undefined;
      this._operator = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchVariable = value.matchVariable;
      this._operator = value.operator;
      this._selector = value.selector;
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
}

export class FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference {
    return new FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyManagedRuleOverrideRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}
  */
  readonly ruleId: string;
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}
  */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[] | cdktf.IResolvable;
}

export function frontdoorFirewallPolicyManagedRuleOverrideRuleToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function frontdoorFirewallPolicyManagedRuleOverrideRuleToHclTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRule | cdktf.IResolvable): any {
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
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion: {
      value: cdktf.listMapperHcl(frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyManagedRuleOverrideRule | cdktf.IResolvable | undefined {
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
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyManagedRuleOverrideRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._ruleId = undefined;
      this._exclusion.internalValue = undefined;
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
      this._ruleId = value.ruleId;
      this._exclusion.internalValue = value.exclusion;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}

export class FrontdoorFirewallPolicyManagedRuleOverrideRuleList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyManagedRuleOverrideRule[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference {
    return new FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyManagedRuleOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}
  */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#rule FrontdoorFirewallPolicy#rule}
  */
  readonly rule?: FrontdoorFirewallPolicyManagedRuleOverrideRule[] | cdktf.IResolvable;
}

export function frontdoorFirewallPolicyManagedRuleOverrideToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideExclusionToTerraform, true)(struct!.exclusion),
    rule: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideRuleToTerraform, true)(struct!.rule),
  }
}


export function frontdoorFirewallPolicyManagedRuleOverrideToHclTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverride | cdktf.IResolvable): any {
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
    exclusion: {
      value: cdktf.listMapperHcl(frontdoorFirewallPolicyManagedRuleOverrideExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorFirewallPolicyManagedRuleOverrideExclusionList",
    },
    rule: {
      value: cdktf.listMapperHcl(frontdoorFirewallPolicyManagedRuleOverrideRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorFirewallPolicyManagedRuleOverrideRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyManagedRuleOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyManagedRuleOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupName = this._ruleGroupName;
    }
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyManagedRuleOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleGroupName = undefined;
      this._exclusion.internalValue = undefined;
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
      this._exclusion.internalValue = value.exclusion;
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

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new FrontdoorFirewallPolicyManagedRuleOverrideExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: FrontdoorFirewallPolicyManagedRuleOverrideExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new FrontdoorFirewallPolicyManagedRuleOverrideRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FrontdoorFirewallPolicyManagedRuleOverrideRule[] | cdktf.IResolvable) {
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

export class FrontdoorFirewallPolicyManagedRuleOverrideList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyManagedRuleOverride[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideOutputReference {
    return new FrontdoorFirewallPolicyManagedRuleOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyManagedRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}
  */
  readonly version: string;
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}
  */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleExclusion[] | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#override FrontdoorFirewallPolicy#override}
  */
  readonly override?: FrontdoorFirewallPolicyManagedRuleOverride[] | cdktf.IResolvable;
}

export function frontdoorFirewallPolicyManagedRuleToTerraform(struct?: FrontdoorFirewallPolicyManagedRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleExclusionToTerraform, true)(struct!.exclusion),
    override: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideToTerraform, true)(struct!.override),
  }
}


export function frontdoorFirewallPolicyManagedRuleToHclTerraform(struct?: FrontdoorFirewallPolicyManagedRule | cdktf.IResolvable): any {
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
    exclusion: {
      value: cdktf.listMapperHcl(frontdoorFirewallPolicyManagedRuleExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorFirewallPolicyManagedRuleExclusionList",
    },
    override: {
      value: cdktf.listMapperHcl(frontdoorFirewallPolicyManagedRuleOverrideToHclTerraform, true)(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorFirewallPolicyManagedRuleOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFirewallPolicyManagedRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFirewallPolicyManagedRule | cdktf.IResolvable | undefined {
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
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFirewallPolicyManagedRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._version = undefined;
      this._exclusion.internalValue = undefined;
      this._override.internalValue = undefined;
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
      this._exclusion.internalValue = value.exclusion;
      this._override.internalValue = value.override;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new FrontdoorFirewallPolicyManagedRuleExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: FrontdoorFirewallPolicyManagedRuleExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new FrontdoorFirewallPolicyManagedRuleOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: FrontdoorFirewallPolicyManagedRuleOverride[] | cdktf.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class FrontdoorFirewallPolicyManagedRuleList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFirewallPolicyManagedRule[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFirewallPolicyManagedRuleOutputReference {
    return new FrontdoorFirewallPolicyManagedRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}
  */
  readonly update?: string;
}

export function frontdoorFirewallPolicyTimeoutsToTerraform(struct?: FrontdoorFirewallPolicyTimeouts | cdktf.IResolvable): any {
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


export function frontdoorFirewallPolicyTimeoutsToHclTerraform(struct?: FrontdoorFirewallPolicyTimeouts | cdktf.IResolvable): any {
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

export class FrontdoorFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FrontdoorFirewallPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrontdoorFirewallPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy azurerm_frontdoor_firewall_policy}
*/
export class FrontdoorFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_frontdoor_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrontdoorFirewallPolicy to import
  * @param importFromId The id of the existing FrontdoorFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrontdoorFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_frontdoor_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_firewall_policy azurerm_frontdoor_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_firewall_policy',
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
    this._customBlockResponseBody = config.customBlockResponseBody;
    this._customBlockResponseStatusCode = config.customBlockResponseStatusCode;
    this._enabled = config.enabled;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._customRule.internalValue = config.customRule;
    this._managedRule.internalValue = config.managedRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_block_response_body - computed: false, optional: true, required: false
  private _customBlockResponseBody?: string; 
  public get customBlockResponseBody() {
    return this.getStringAttribute('custom_block_response_body');
  }
  public set customBlockResponseBody(value: string) {
    this._customBlockResponseBody = value;
  }
  public resetCustomBlockResponseBody() {
    this._customBlockResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseBodyInput() {
    return this._customBlockResponseBody;
  }

  // custom_block_response_status_code - computed: false, optional: true, required: false
  private _customBlockResponseStatusCode?: number; 
  public get customBlockResponseStatusCode() {
    return this.getNumberAttribute('custom_block_response_status_code');
  }
  public set customBlockResponseStatusCode(value: number) {
    this._customBlockResponseStatusCode = value;
  }
  public resetCustomBlockResponseStatusCode() {
    this._customBlockResponseStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseStatusCodeInput() {
    return this._customBlockResponseStatusCode;
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

  // frontend_endpoint_ids - computed: true, optional: false, required: false
  public get frontendEndpointIds() {
    return this.getListAttribute('frontend_endpoint_ids');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
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

  // custom_rule - computed: false, optional: true, required: false
  private _customRule = new FrontdoorFirewallPolicyCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }
  public putCustomRule(value: FrontdoorFirewallPolicyCustomRule[] | cdktf.IResolvable) {
    this._customRule.internalValue = value;
  }
  public resetCustomRule() {
    this._customRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule.internalValue;
  }

  // managed_rule - computed: false, optional: true, required: false
  private _managedRule = new FrontdoorFirewallPolicyManagedRuleList(this, "managed_rule", false);
  public get managedRule() {
    return this._managedRule;
  }
  public putManagedRule(value: FrontdoorFirewallPolicyManagedRule[] | cdktf.IResolvable) {
    this._managedRule.internalValue = value;
  }
  public resetManagedRule() {
    this._managedRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleInput() {
    return this._managedRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FrontdoorFirewallPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FrontdoorFirewallPolicyTimeouts) {
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
      custom_block_response_body: cdktf.stringToTerraform(this._customBlockResponseBody),
      custom_block_response_status_code: cdktf.numberToTerraform(this._customBlockResponseStatusCode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      custom_rule: cdktf.listMapper(frontdoorFirewallPolicyCustomRuleToTerraform, true)(this._customRule.internalValue),
      managed_rule: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleToTerraform, true)(this._managedRule.internalValue),
      timeouts: frontdoorFirewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_block_response_body: {
        value: cdktf.stringToHclTerraform(this._customBlockResponseBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_block_response_status_code: {
        value: cdktf.numberToHclTerraform(this._customBlockResponseStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
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
      custom_rule: {
        value: cdktf.listMapperHcl(frontdoorFirewallPolicyCustomRuleToHclTerraform, true)(this._customRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorFirewallPolicyCustomRuleList",
      },
      managed_rule: {
        value: cdktf.listMapperHcl(frontdoorFirewallPolicyManagedRuleToHclTerraform, true)(this._managedRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorFirewallPolicyManagedRuleList",
      },
      timeouts: {
        value: frontdoorFirewallPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FrontdoorFirewallPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
