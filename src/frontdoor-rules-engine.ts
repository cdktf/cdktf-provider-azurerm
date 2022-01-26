// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorRulesEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}
  */
  readonly frontdoorName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#name FrontdoorRulesEngine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#rule FrontdoorRulesEngine#rule}
  */
  readonly rule?: FrontdoorRulesEngineRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#timeouts FrontdoorRulesEngine#timeouts}
  */
  readonly timeouts?: FrontdoorRulesEngineTimeouts;
}
export interface FrontdoorRulesEngineRuleActionRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}
  */
  readonly headerActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#value FrontdoorRulesEngine#value}
  */
  readonly value?: string;
}

export function frontdoorRulesEngineRuleActionRequestHeaderToTerraform(struct?: FrontdoorRulesEngineRuleActionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_action_type: cdktf.stringToTerraform(struct!.headerActionType),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrontdoorRulesEngineRuleActionResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}
  */
  readonly headerActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#value FrontdoorRulesEngine#value}
  */
  readonly value?: string;
}

export function frontdoorRulesEngineRuleActionResponseHeaderToTerraform(struct?: FrontdoorRulesEngineRuleActionResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_action_type: cdktf.stringToTerraform(struct!.headerActionType),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrontdoorRulesEngineRuleAction {
  /**
  * request_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#request_header FrontdoorRulesEngine#request_header}
  */
  readonly requestHeader?: FrontdoorRulesEngineRuleActionRequestHeader[] | cdktf.IResolvable;
  /**
  * response_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#response_header FrontdoorRulesEngine#response_header}
  */
  readonly responseHeader?: FrontdoorRulesEngineRuleActionResponseHeader[] | cdktf.IResolvable;
}

export function frontdoorRulesEngineRuleActionToTerraform(struct?: FrontdoorRulesEngineRuleActionOutputReference | FrontdoorRulesEngineRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header: cdktf.listMapper(frontdoorRulesEngineRuleActionRequestHeaderToTerraform)(struct!.requestHeader),
    response_header: cdktf.listMapper(frontdoorRulesEngineRuleActionResponseHeaderToTerraform)(struct!.responseHeader),
  }
}

export class FrontdoorRulesEngineRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FrontdoorRulesEngineRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader;
    }
    if (this._responseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorRulesEngineRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeader = undefined;
      this._responseHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeader = value.requestHeader;
      this._responseHeader = value.responseHeader;
    }
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader?: FrontdoorRulesEngineRuleActionRequestHeader[] | cdktf.IResolvable; 
  public get requestHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_header');
  }
  public set requestHeader(value: FrontdoorRulesEngineRuleActionRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader = value;
  }
  public resetRequestHeader() {
    this._requestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader?: FrontdoorRulesEngineRuleActionResponseHeader[] | cdktf.IResolvable; 
  public get responseHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_header');
  }
  public set responseHeader(value: FrontdoorRulesEngineRuleActionResponseHeader[] | cdktf.IResolvable) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader;
  }
}
export interface FrontdoorRulesEngineRuleMatchCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}
  */
  readonly transform?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#value FrontdoorRulesEngine#value}
  */
  readonly value?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}
  */
  readonly variable?: string;
}

export function frontdoorRulesEngineRuleMatchConditionToTerraform(struct?: FrontdoorRulesEngineRuleMatchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transform: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transform),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}

export interface FrontdoorRulesEngineRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#name FrontdoorRulesEngine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}
  */
  readonly priority: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#action FrontdoorRulesEngine#action}
  */
  readonly action?: FrontdoorRulesEngineRuleAction;
  /**
  * match_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#match_condition FrontdoorRulesEngine#match_condition}
  */
  readonly matchCondition?: FrontdoorRulesEngineRuleMatchCondition[] | cdktf.IResolvable;
}

export function frontdoorRulesEngineRuleToTerraform(struct?: FrontdoorRulesEngineRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: frontdoorRulesEngineRuleActionToTerraform(struct!.action),
    match_condition: cdktf.listMapper(frontdoorRulesEngineRuleMatchConditionToTerraform)(struct!.matchCondition),
  }
}

export interface FrontdoorRulesEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#create FrontdoorRulesEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#read FrontdoorRulesEngine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine#update FrontdoorRulesEngine#update}
  */
  readonly update?: string;
}

export function frontdoorRulesEngineTimeoutsToTerraform(struct?: FrontdoorRulesEngineTimeoutsOutputReference | FrontdoorRulesEngineTimeouts | cdktf.IResolvable): any {
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

export class FrontdoorRulesEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FrontdoorRulesEngineTimeouts | undefined {
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

  public set internalValue(value: FrontdoorRulesEngineTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine azurerm_frontdoor_rules_engine}
*/
export class FrontdoorRulesEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_frontdoor_rules_engine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine azurerm_frontdoor_rules_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorRulesEngineConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorRulesEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_rules_engine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._frontdoorName = config.frontdoorName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._rule = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // frontdoor_name - computed: false, optional: false, required: true
  private _frontdoorName?: string; 
  public get frontdoorName() {
    return this.getStringAttribute('frontdoor_name');
  }
  public set frontdoorName(value: string) {
    this._frontdoorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontdoorNameInput() {
    return this._frontdoorName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // rule - computed: false, optional: true, required: false
  private _rule?: FrontdoorRulesEngineRule[] | cdktf.IResolvable; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule');
  }
  public set rule(value: FrontdoorRulesEngineRule[] | cdktf.IResolvable) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FrontdoorRulesEngineTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FrontdoorRulesEngineTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      frontdoor_name: cdktf.stringToTerraform(this._frontdoorName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rule: cdktf.listMapper(frontdoorRulesEngineRuleToTerraform)(this._rule),
      timeouts: frontdoorRulesEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
