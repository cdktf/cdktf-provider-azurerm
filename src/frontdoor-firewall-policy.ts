// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FrontdoorFirewallPolicyConfig extends TerraformMetaArguments {
  readonly customBlockResponseBody?: string;
  readonly customBlockResponseStatusCode?: number;
  readonly enabled?: boolean;
  readonly mode?: string;
  readonly name: string;
  readonly redirectUrl?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** custom_rule block */
  readonly customRule?: FrontdoorFirewallPolicyCustomRule[];
  /** managed_rule block */
  readonly managedRule?: FrontdoorFirewallPolicyManagedRule[];
  /** timeouts block */
  readonly timeouts?: FrontdoorFirewallPolicyTimeouts;
}
export interface FrontdoorFirewallPolicyCustomRuleMatchCondition {
  readonly matchValues: string[];
  readonly matchVariable: string;
  readonly negationCondition?: boolean;
  readonly operator: string;
  readonly selector?: string;
  readonly transforms?: string[];
}
export interface FrontdoorFirewallPolicyCustomRule {
  readonly action: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly priority?: number;
  readonly rateLimitDurationInMinutes?: number;
  readonly rateLimitThreshold?: number;
  readonly type: string;
  /** match_condition block */
  readonly matchCondition?: FrontdoorFirewallPolicyCustomRuleMatchCondition[];
}
export interface FrontdoorFirewallPolicyManagedRuleExclusion {
  readonly matchVariable: string;
  readonly operator: string;
  readonly selector: string;
}
export interface FrontdoorFirewallPolicyManagedRuleOverrideExclusion {
  readonly matchVariable: string;
  readonly operator: string;
  readonly selector: string;
}
export interface FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion {
  readonly matchVariable: string;
  readonly operator: string;
  readonly selector: string;
}
export interface FrontdoorFirewallPolicyManagedRuleOverrideRule {
  readonly action: string;
  readonly enabled?: boolean;
  readonly ruleId: string;
  /** exclusion block */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
}
export interface FrontdoorFirewallPolicyManagedRuleOverride {
  readonly ruleGroupName: string;
  /** exclusion block */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
  /** rule block */
  readonly rule?: FrontdoorFirewallPolicyManagedRuleOverrideRule[];
}
export interface FrontdoorFirewallPolicyManagedRule {
  readonly type: string;
  readonly version: string;
  /** exclusion block */
  readonly exclusion?: FrontdoorFirewallPolicyManagedRuleExclusion[];
  /** override block */
  readonly override?: FrontdoorFirewallPolicyManagedRuleOverride[];
}
export interface FrontdoorFirewallPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class FrontdoorFirewallPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _customBlockResponseBody?: string;
  public get customBlockResponseBody() {
    return this._customBlockResponseBody;
  }
  public set customBlockResponseBody(value: string | undefined) {
    this._customBlockResponseBody = value;
  }

  // custom_block_response_status_code - computed: false, optional: true, required: false
  private _customBlockResponseStatusCode?: number;
  public get customBlockResponseStatusCode() {
    return this._customBlockResponseStatusCode;
  }
  public set customBlockResponseStatusCode(value: number | undefined) {
    this._customBlockResponseStatusCode = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // frontend_endpoint_ids - computed: true, optional: false, required: true
  public get frontendEndpointIds() {
    return this.getListAttribute('frontend_endpoint_ids');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this._mode;
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string;
  public get redirectUrl() {
    return this._redirectUrl;
  }
  public set redirectUrl(value: string | undefined) {
    this._redirectUrl = value;
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

  // custom_rule - computed: false, optional: true, required: false
  private _customRule?: FrontdoorFirewallPolicyCustomRule[];
  public get customRule() {
    return this._customRule;
  }
  public set customRule(value: FrontdoorFirewallPolicyCustomRule[] | undefined) {
    this._customRule = value;
  }

  // managed_rule - computed: false, optional: true, required: false
  private _managedRule?: FrontdoorFirewallPolicyManagedRule[];
  public get managedRule() {
    return this._managedRule;
  }
  public set managedRule(value: FrontdoorFirewallPolicyManagedRule[] | undefined) {
    this._managedRule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorFirewallPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FrontdoorFirewallPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_block_response_body: this._customBlockResponseBody,
      custom_block_response_status_code: this._customBlockResponseStatusCode,
      enabled: this._enabled,
      mode: this._mode,
      name: this._name,
      redirect_url: this._redirectUrl,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      custom_rule: this._customRule,
      managed_rule: this._managedRule,
      timeouts: this._timeouts,
    };
  }
}
