// https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecurityCenterAutomationConfig extends TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scopes: string[];
  /** action block */
  readonly action: SecurityCenterAutomationAction[];
  /** source block */
  readonly source: SecurityCenterAutomationSource[];
  /** timeouts block */
  readonly timeouts?: SecurityCenterAutomationTimeouts;
}
export interface SecurityCenterAutomationAction {
  readonly connectionString?: string;
  readonly resourceId: string;
  readonly triggerUrl?: string;
  readonly type: string;
}
export interface SecurityCenterAutomationSourceRuleSetRule {
  readonly expectedValue: string;
  readonly operator: string;
  readonly propertyPath: string;
  readonly propertyType: string;
}
export interface SecurityCenterAutomationSourceRuleSet {
  /** rule block */
  readonly rule: SecurityCenterAutomationSourceRuleSetRule[];
}
export interface SecurityCenterAutomationSource {
  readonly eventSource: string;
  /** rule_set block */
  readonly ruleSet?: SecurityCenterAutomationSourceRuleSet[];
}
export interface SecurityCenterAutomationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SecurityCenterAutomation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityCenterAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_automation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._action = config.action;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // scopes - computed: false, optional: false, required: true
  private _scopes: string[];
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes
  }

  // action - computed: false, optional: false, required: true
  private _action: SecurityCenterAutomationAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: SecurityCenterAutomationAction[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // source - computed: false, optional: false, required: true
  private _source: SecurityCenterAutomationSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: SecurityCenterAutomationSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAutomationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterAutomationTimeouts ) {
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
      enabled: this._enabled,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      scopes: this._scopes,
      action: this._action,
      source: this._source,
      timeouts: this._timeouts,
    };
  }
}
