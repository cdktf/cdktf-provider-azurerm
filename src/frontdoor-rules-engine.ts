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

function frontdoorRulesEngineRuleActionToTerraform(struct?: FrontdoorRulesEngineRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_header: cdktf.listMapper(frontdoorRulesEngineRuleActionRequestHeaderToTerraform)(struct!.requestHeader),
    response_header: cdktf.listMapper(frontdoorRulesEngineRuleActionResponseHeaderToTerraform)(struct!.responseHeader),
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
  readonly action?: FrontdoorRulesEngineRuleAction[];
  /**
  * match_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_rules_engine.html#match_condition FrontdoorRulesEngine#match_condition}
  */
  readonly matchCondition?: FrontdoorRulesEngineRuleMatchCondition[];
}

function frontdoorRulesEngineRuleToTerraform(struct?: FrontdoorRulesEngineRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: cdktf.listMapper(frontdoorRulesEngineRuleActionToTerraform)(struct!.action),
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

function frontdoorRulesEngineTimeoutsToTerraform(struct?: FrontdoorRulesEngineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
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
  private _frontdoorName: string;
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

  // rule - computed: false, optional: true, required: false
  private _rule?: FrontdoorRulesEngineRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: FrontdoorRulesEngineRule[] ) {
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
  private _timeouts?: FrontdoorRulesEngineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FrontdoorRulesEngineTimeouts ) {
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
