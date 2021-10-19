// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}
  */
  readonly customBlockResponseBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}
  */
  readonly customBlockResponseStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#enabled FrontdoorFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#mode FrontdoorFirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#name FrontdoorFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#redirect_url FrontdoorFirewallPolicy#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#resource_group_name FrontdoorFirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#tags FrontdoorFirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * custom_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#custom_rule FrontdoorFirewallPolicy#custom_rule}
  */
  readonly customRule?: FrontdoorFirewallPolicyCustomRule[];
  /**
  * managed_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#managed_rule FrontdoorFirewallPolicy#managed_rule}
  */
  readonly managedRule?: FrontdoorFirewallPolicyManagedRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#timeouts FrontdoorFirewallPolicy#timeouts}
  */
  readonly timeouts?: FrontdoorFirewallPolicyTimeouts;
}
export interface FrontdoorFirewallPolicyCustomRuleMatchCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#match_values FrontdoorFirewallPolicy#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#negation_condition FrontdoorFirewallPolicy#negation_condition}
  */
  readonly negationCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#transforms FrontdoorFirewallPolicy#transforms}
  */
  readonly transforms?: string[];
}

function frontdoorFirewallPolicyCustomRuleMatchConditionToTerraform(struct?: FrontdoorFirewallPolicyCustomRuleMatchCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    negation_condition: cdktf.booleanToTerraform(struct!.negationCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface FrontdoorFirewallPolicyCustomRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#action FrontdoorFirewallPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#enabled FrontdoorFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#name FrontdoorFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#priority FrontdoorFirewallPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}
  */
  readonly rateLimitDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#type FrontdoorFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * match_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#match_condition FrontdoorFirewallPolicy#match_condition}
  */
  readonly matchCondition?: FrontdoorFirewallPolicyCustomRuleMatchCondition[];
}

function frontdoorFirewallPolicyCustomRuleToTerraform(struct?: FrontdoorFirewallPolicyCustomRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    match_condition: cdktf.listMapper(frontdoorFirewallPolicyCustomRuleMatchConditionToTerraform)(struct!.matchCondition),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleExclusion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector: string;
}

function frontdoorFirewallPolicyManagedRuleExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverrideExclusion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector: string;
}

function frontdoorFirewallPolicyManagedRuleOverrideExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#match_variable FrontdoorFirewallPolicy#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#operator FrontdoorFirewallPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#selector FrontdoorFirewallPolicy#selector}
  */
  readonly selector: string;
}

function frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverrideRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#action FrontdoorFirewallPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#enabled FrontdoorFirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#rule_id FrontdoorFirewallPolicy#rule_id}
  */
  readonly ruleId: string;
  /**
  * exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#exclusion FrontdoorFirewallPolicy#exclusion}
  */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
}

function frontdoorFirewallPolicyManagedRuleOverrideRuleToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverrideRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideRuleExclusionToTerraform)(struct!.exclusion),
  }
}

export interface FrontdoorFirewallPolicyManagedRuleOverride {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#rule_group_name FrontdoorFirewallPolicy#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#exclusion FrontdoorFirewallPolicy#exclusion}
  */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#rule FrontdoorFirewallPolicy#rule}
  */
  readonly rule?: FrontdoorFirewallPolicyManagedRuleOverrideRule[];
}

function frontdoorFirewallPolicyManagedRuleOverrideToTerraform(struct?: FrontdoorFirewallPolicyManagedRuleOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideExclusionToTerraform)(struct!.exclusion),
    rule: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideRuleToTerraform)(struct!.rule),
  }
}

export interface FrontdoorFirewallPolicyManagedRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#type FrontdoorFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#version FrontdoorFirewallPolicy#version}
  */
  readonly version: string;
  /**
  * exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#exclusion FrontdoorFirewallPolicy#exclusion}
  */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleExclusion[];
  /**
  * override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#override FrontdoorFirewallPolicy#override}
  */
  readonly override?: FrontdoorFirewallPolicyManagedRuleOverride[];
}

function frontdoorFirewallPolicyManagedRuleToTerraform(struct?: FrontdoorFirewallPolicyManagedRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    exclusion: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleExclusionToTerraform)(struct!.exclusion),
    override: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleOverrideToTerraform)(struct!.override),
  }
}

export interface FrontdoorFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#create FrontdoorFirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#delete FrontdoorFirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#read FrontdoorFirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html#update FrontdoorFirewallPolicy#update}
  */
  readonly update?: string;
}

function frontdoorFirewallPolicyTimeoutsToTerraform(struct?: FrontdoorFirewallPolicyTimeoutsOutputReference | FrontdoorFirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class FrontdoorFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html azurerm_frontdoor_firewall_policy}
*/
export class FrontdoorFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_frontdoor_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html azurerm_frontdoor_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customBlockResponseBody = config.customBlockResponseBody;
    this._customBlockResponseStatusCode = config.customBlockResponseStatusCode;
    this._enabled = config.enabled;
    this._mode = config.mode;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._customRule = config.customRule;
    this._managedRule = config.managedRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_block_response_body - computed: false, optional: true, required: false
  private _customBlockResponseBody?: string | undefined; 
  public get customBlockResponseBody() {
    return this.getStringAttribute('custom_block_response_body');
  }
  public set customBlockResponseBody(value: string | undefined) {
    this._customBlockResponseBody = value;
  }
  public resetCustomBlockResponseBody() {
    this._customBlockResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseBodyInput() {
    return this._customBlockResponseBody
  }

  // custom_block_response_status_code - computed: false, optional: true, required: false
  private _customBlockResponseStatusCode?: number | undefined; 
  public get customBlockResponseStatusCode() {
    return this.getNumberAttribute('custom_block_response_status_code');
  }
  public set customBlockResponseStatusCode(value: number | undefined) {
    this._customBlockResponseStatusCode = value;
  }
  public resetCustomBlockResponseStatusCode() {
    this._customBlockResponseStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseStatusCodeInput() {
    return this._customBlockResponseStatusCode
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // frontend_endpoint_ids - computed: true, optional: false, required: false
  public get frontendEndpointIds() {
    return this.getListAttribute('frontend_endpoint_ids');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
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
    return this._name
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string | undefined; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string | undefined) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl
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
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule?: FrontdoorFirewallPolicyCustomRule[] | undefined; 
  public get customRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_rule') as any;
  }
  public set customRule(value: FrontdoorFirewallPolicyCustomRule[] | undefined) {
    this._customRule = value;
  }
  public resetCustomRule() {
    this._customRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule
  }

  // managed_rule - computed: false, optional: true, required: false
  private _managedRule?: FrontdoorFirewallPolicyManagedRule[] | undefined; 
  public get managedRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('managed_rule') as any;
  }
  public set managedRule(value: FrontdoorFirewallPolicyManagedRule[] | undefined) {
    this._managedRule = value;
  }
  public resetManagedRule() {
    this._managedRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleInput() {
    return this._managedRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorFirewallPolicyTimeouts | undefined; 
  private __timeoutsOutput = new FrontdoorFirewallPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FrontdoorFirewallPolicyTimeouts | undefined) {
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
      custom_block_response_body: cdktf.stringToTerraform(this._customBlockResponseBody),
      custom_block_response_status_code: cdktf.numberToTerraform(this._customBlockResponseStatusCode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      custom_rule: cdktf.listMapper(frontdoorFirewallPolicyCustomRuleToTerraform)(this._customRule),
      managed_rule: cdktf.listMapper(frontdoorFirewallPolicyManagedRuleToTerraform)(this._managedRule),
      timeouts: frontdoorFirewallPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
