// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorRulesEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#enabled FrontdoorRulesEngine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#frontdoor_name FrontdoorRulesEngine#frontdoor_name}
  */
  readonly frontdoorName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#name FrontdoorRulesEngine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#resource_group_name FrontdoorRulesEngine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#rule FrontdoorRulesEngine#rule}
  */
  readonly rule?: FrontdoorRulesEngineRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#timeouts FrontdoorRulesEngine#timeouts}
  */
  readonly timeouts?: FrontdoorRulesEngineTimeouts;
}
export interface FrontdoorRulesEngineRuleActionRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#header_action_type FrontdoorRulesEngine#header_action_type}
  */
  readonly headerActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#header_name FrontdoorRulesEngine#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#value FrontdoorRulesEngine#value}
  */
  readonly value?: string;
}

function frontdoorRulesEngineRuleActionRequestHeaderToTerraform(struct?: FrontdoorRulesEngineRuleActionRequestHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#header_action_type FrontdoorRulesEngine#header_action_type}
  */
  readonly headerActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#header_name FrontdoorRulesEngine#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#value FrontdoorRulesEngine#value}
  */
  readonly value?: string;
}

function frontdoorRulesEngineRuleActionResponseHeaderToTerraform(struct?: FrontdoorRulesEngineRuleActionResponseHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#request_header FrontdoorRulesEngine#request_header}
  */
  readonly requestHeader?: FrontdoorRulesEngineRuleActionRequestHeader[];
  /**
  * response_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#response_header FrontdoorRulesEngine#response_header}
  */
  readonly responseHeader?: FrontdoorRulesEngineRuleActionResponseHeader[];
}

function frontdoorRulesEngineRuleActionToTerraform(struct?: FrontdoorRulesEngineRuleActionOutputReference | FrontdoorRulesEngineRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header: cdktf.listMapper(frontdoorRulesEngineRuleActionRequestHeaderToTerraform)(struct!.requestHeader),
    response_header: cdktf.listMapper(frontdoorRulesEngineRuleActionResponseHeaderToTerraform)(struct!.responseHeader),
  }
}

export class FrontdoorRulesEngineRuleActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader?: FrontdoorRulesEngineRuleActionRequestHeader[] | undefined; 
  public get requestHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_header') as any;
  }
  public set requestHeader(value: FrontdoorRulesEngineRuleActionRequestHeader[] | undefined) {
    this._requestHeader = value;
  }
  public resetRequestHeader() {
    this._requestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader?: FrontdoorRulesEngineRuleActionResponseHeader[] | undefined; 
  public get responseHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_header') as any;
  }
  public set responseHeader(value: FrontdoorRulesEngineRuleActionResponseHeader[] | undefined) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader
  }
}
export interface FrontdoorRulesEngineRuleMatchCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#negate_condition FrontdoorRulesEngine#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#operator FrontdoorRulesEngine#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#selector FrontdoorRulesEngine#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#transform FrontdoorRulesEngine#transform}
  */
  readonly transform?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#value FrontdoorRulesEngine#value}
  */
  readonly value?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#variable FrontdoorRulesEngine#variable}
  */
  readonly variable?: string;
}

function frontdoorRulesEngineRuleMatchConditionToTerraform(struct?: FrontdoorRulesEngineRuleMatchCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#name FrontdoorRulesEngine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#priority FrontdoorRulesEngine#priority}
  */
  readonly priority: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#action FrontdoorRulesEngine#action}
  */
  readonly action?: FrontdoorRulesEngineRuleAction;
  /**
  * match_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#match_condition FrontdoorRulesEngine#match_condition}
  */
  readonly matchCondition?: FrontdoorRulesEngineRuleMatchCondition[];
}

function frontdoorRulesEngineRuleToTerraform(struct?: FrontdoorRulesEngineRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#create FrontdoorRulesEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#delete FrontdoorRulesEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#read FrontdoorRulesEngine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#update FrontdoorRulesEngine#update}
  */
  readonly update?: string;
}

function frontdoorRulesEngineTimeoutsToTerraform(struct?: FrontdoorRulesEngineTimeoutsOutputReference | FrontdoorRulesEngineTimeouts): any {
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

export class FrontdoorRulesEngineTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html azurerm_frontdoor_rules_engine}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html azurerm_frontdoor_rules_engine} Resource
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._frontdoorName
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
    return this._name
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

  // rule - computed: false, optional: true, required: false
  private _rule?: FrontdoorRulesEngineRule[] | undefined; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: FrontdoorRulesEngineRule[] | undefined) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorRulesEngineTimeouts | undefined; 
  private __timeoutsOutput = new FrontdoorRulesEngineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FrontdoorRulesEngineTimeouts | undefined) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      frontdoor_name: cdktf.stringToTerraform(this._frontdoorName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rule: cdktf.listMapper(frontdoorRulesEngineRuleToTerraform)(this._rule),
      timeouts: frontdoorRulesEngineTimeoutsToTerraform(this._timeouts),
    };
  }
}
