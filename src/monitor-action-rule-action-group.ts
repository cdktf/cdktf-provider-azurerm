// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionRuleActionGroupConfig extends cdktf.TerraformMetaArguments {
  readonly actionGroupId: string;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** condition block */
  readonly condition?: MonitorActionRuleActionGroupCondition[];
  /** scope block */
  readonly scope?: MonitorActionRuleActionGroupScope[];
  /** timeouts block */
  readonly timeouts?: MonitorActionRuleActionGroupTimeouts;
}
export interface MonitorActionRuleActionGroupConditionAlertContext {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionAlertContextToTerraform(struct?: MonitorActionRuleActionGroupConditionAlertContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupConditionAlertRuleId {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionAlertRuleIdToTerraform(struct?: MonitorActionRuleActionGroupConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupConditionDescription {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionDescriptionToTerraform(struct?: MonitorActionRuleActionGroupConditionDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupConditionMonitor {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionMonitorToTerraform(struct?: MonitorActionRuleActionGroupConditionMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupConditionMonitorService {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionMonitorServiceToTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupConditionSeverity {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionSeverityToTerraform(struct?: MonitorActionRuleActionGroupConditionSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupConditionTargetResourceType {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleActionGroupConditionTargetResourceTypeToTerraform(struct?: MonitorActionRuleActionGroupConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleActionGroupCondition {
  /** alert_context block */
  readonly alertContext?: MonitorActionRuleActionGroupConditionAlertContext[];
  /** alert_rule_id block */
  readonly alertRuleId?: MonitorActionRuleActionGroupConditionAlertRuleId[];
  /** description block */
  readonly description?: MonitorActionRuleActionGroupConditionDescription[];
  /** monitor block */
  readonly monitor?: MonitorActionRuleActionGroupConditionMonitor[];
  /** monitor_service block */
  readonly monitorService?: MonitorActionRuleActionGroupConditionMonitorService[];
  /** severity block */
  readonly severity?: MonitorActionRuleActionGroupConditionSeverity[];
  /** target_resource_type block */
  readonly targetResourceType?: MonitorActionRuleActionGroupConditionTargetResourceType[];
}

function monitorActionRuleActionGroupConditionToTerraform(struct?: MonitorActionRuleActionGroupCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alert_context: cdktf.listMapper(monitorActionRuleActionGroupConditionAlertContextToTerraform)(struct!.alertContext),
    alert_rule_id: cdktf.listMapper(monitorActionRuleActionGroupConditionAlertRuleIdToTerraform)(struct!.alertRuleId),
    description: cdktf.listMapper(monitorActionRuleActionGroupConditionDescriptionToTerraform)(struct!.description),
    monitor: cdktf.listMapper(monitorActionRuleActionGroupConditionMonitorToTerraform)(struct!.monitor),
    monitor_service: cdktf.listMapper(monitorActionRuleActionGroupConditionMonitorServiceToTerraform)(struct!.monitorService),
    severity: cdktf.listMapper(monitorActionRuleActionGroupConditionSeverityToTerraform)(struct!.severity),
    target_resource_type: cdktf.listMapper(monitorActionRuleActionGroupConditionTargetResourceTypeToTerraform)(struct!.targetResourceType),
  }
}

export interface MonitorActionRuleActionGroupScope {
  readonly resourceIds: string[];
  readonly type: string;
}

function monitorActionRuleActionGroupScopeToTerraform(struct?: MonitorActionRuleActionGroupScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface MonitorActionRuleActionGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorActionRuleActionGroupTimeoutsToTerraform(struct?: MonitorActionRuleActionGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitorActionRuleActionGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorActionRuleActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_action_rule_action_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionGroupId = config.actionGroupId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._condition = config.condition;
    this._scope = config.scope;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_group_id - computed: false, optional: false, required: true
  private _actionGroupId: string;
  public get actionGroupId() {
    return this.getStringAttribute('action_group_id');
  }
  public set actionGroupId(value: string) {
    this._actionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupIdInput() {
    return this._actionGroupId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: MonitorActionRuleActionGroupCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: MonitorActionRuleActionGroupCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: MonitorActionRuleActionGroupScope[];
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: MonitorActionRuleActionGroupScope[] ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActionRuleActionGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorActionRuleActionGroupTimeouts ) {
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
      action_group_id: cdktf.stringToTerraform(this._actionGroupId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      condition: cdktf.listMapper(monitorActionRuleActionGroupConditionToTerraform)(this._condition),
      scope: cdktf.listMapper(monitorActionRuleActionGroupScopeToTerraform)(this._scope),
      timeouts: monitorActionRuleActionGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
