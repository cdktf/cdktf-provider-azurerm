// https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAutomationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#name SentinelAutomationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * action_incident block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}
  */
  readonly actionIncident?: SentinelAutomationRuleActionIncident[] | cdktf.IResolvable;
  /**
  * action_playbook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}
  */
  readonly actionPlaybook?: SentinelAutomationRuleActionPlaybook[] | cdktf.IResolvable;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#condition SentinelAutomationRule#condition}
  */
  readonly condition?: SentinelAutomationRuleCondition[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}
  */
  readonly timeouts?: SentinelAutomationRuleTimeouts;
}
export interface SentinelAutomationRuleActionIncident {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#classification SentinelAutomationRule#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}
  */
  readonly classificationComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#labels SentinelAutomationRule#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#severity SentinelAutomationRule#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#status SentinelAutomationRule#status}
  */
  readonly status?: string;
}

export function sentinelAutomationRuleActionIncidentToTerraform(struct?: SentinelAutomationRuleActionIncident | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    classification_comment: cdktf.stringToTerraform(struct!.classificationComment),
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
    order: cdktf.numberToTerraform(struct!.order),
    owner_id: cdktf.stringToTerraform(struct!.ownerId),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface SentinelAutomationRuleActionPlaybook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}
  */
  readonly logicAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}
  */
  readonly tenantId?: string;
}

export function sentinelAutomationRuleActionPlaybookToTerraform(struct?: SentinelAutomationRuleActionPlaybook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic_app_id: cdktf.stringToTerraform(struct!.logicAppId),
    order: cdktf.numberToTerraform(struct!.order),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface SentinelAutomationRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#operator SentinelAutomationRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#property SentinelAutomationRule#property}
  */
  readonly property: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#values SentinelAutomationRule#values}
  */
  readonly values: string[];
}

export function sentinelAutomationRuleConditionToTerraform(struct?: SentinelAutomationRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SentinelAutomationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#create SentinelAutomationRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#delete SentinelAutomationRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#read SentinelAutomationRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule#update SentinelAutomationRule#update}
  */
  readonly update?: string;
}

export function sentinelAutomationRuleTimeoutsToTerraform(struct?: SentinelAutomationRuleTimeoutsOutputReference | SentinelAutomationRuleTimeouts | cdktf.IResolvable): any {
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

export class SentinelAutomationRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAutomationRuleTimeouts | undefined {
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

  public set internalValue(value: SentinelAutomationRuleTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule azurerm_sentinel_automation_rule}
*/
export class SentinelAutomationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_automation_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_automation_rule azurerm_sentinel_automation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAutomationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelAutomationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_automation_rule',
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
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._expiration = config.expiration;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._order = config.order;
    this._actionIncident = config.actionIncident;
    this._actionPlaybook = config.actionPlaybook;
    this._condition = config.condition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // action_incident - computed: false, optional: true, required: false
  private _actionIncident?: SentinelAutomationRuleActionIncident[] | cdktf.IResolvable; 
  public get actionIncident() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action_incident');
  }
  public set actionIncident(value: SentinelAutomationRuleActionIncident[] | cdktf.IResolvable) {
    this._actionIncident = value;
  }
  public resetActionIncident() {
    this._actionIncident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIncidentInput() {
    return this._actionIncident;
  }

  // action_playbook - computed: false, optional: true, required: false
  private _actionPlaybook?: SentinelAutomationRuleActionPlaybook[] | cdktf.IResolvable; 
  public get actionPlaybook() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action_playbook');
  }
  public set actionPlaybook(value: SentinelAutomationRuleActionPlaybook[] | cdktf.IResolvable) {
    this._actionPlaybook = value;
  }
  public resetActionPlaybook() {
    this._actionPlaybook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPlaybookInput() {
    return this._actionPlaybook;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: SentinelAutomationRuleCondition[] | cdktf.IResolvable; 
  public get condition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('condition');
  }
  public set condition(value: SentinelAutomationRuleCondition[] | cdktf.IResolvable) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelAutomationRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelAutomationRuleTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration: cdktf.stringToTerraform(this._expiration),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      action_incident: cdktf.listMapper(sentinelAutomationRuleActionIncidentToTerraform)(this._actionIncident),
      action_playbook: cdktf.listMapper(sentinelAutomationRuleActionPlaybookToTerraform)(this._actionPlaybook),
      condition: cdktf.listMapper(sentinelAutomationRuleConditionToTerraform)(this._condition),
      timeouts: sentinelAutomationRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
