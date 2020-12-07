// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionRuleSuppressionConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** condition block */
  readonly condition?: MonitorActionRuleSuppressionCondition[];
  /** scope block */
  readonly scope?: MonitorActionRuleSuppressionScope[];
  /** suppression block */
  readonly suppression: MonitorActionRuleSuppressionSuppression[];
  /** timeouts block */
  readonly timeouts?: MonitorActionRuleSuppressionTimeouts;
}
export interface MonitorActionRuleSuppressionConditionAlertContext {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionAlertContextToTerraform(struct?: MonitorActionRuleSuppressionConditionAlertContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionConditionAlertRuleId {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionAlertRuleIdToTerraform(struct?: MonitorActionRuleSuppressionConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionConditionDescription {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionDescriptionToTerraform(struct?: MonitorActionRuleSuppressionConditionDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionConditionMonitor {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionMonitorToTerraform(struct?: MonitorActionRuleSuppressionConditionMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionConditionMonitorService {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionMonitorServiceToTerraform(struct?: MonitorActionRuleSuppressionConditionMonitorService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionConditionSeverity {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionSeverityToTerraform(struct?: MonitorActionRuleSuppressionConditionSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionConditionTargetResourceType {
  readonly operator: string;
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionTargetResourceTypeToTerraform(struct?: MonitorActionRuleSuppressionConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorActionRuleSuppressionCondition {
  /** alert_context block */
  readonly alertContext?: MonitorActionRuleSuppressionConditionAlertContext[];
  /** alert_rule_id block */
  readonly alertRuleId?: MonitorActionRuleSuppressionConditionAlertRuleId[];
  /** description block */
  readonly description?: MonitorActionRuleSuppressionConditionDescription[];
  /** monitor block */
  readonly monitor?: MonitorActionRuleSuppressionConditionMonitor[];
  /** monitor_service block */
  readonly monitorService?: MonitorActionRuleSuppressionConditionMonitorService[];
  /** severity block */
  readonly severity?: MonitorActionRuleSuppressionConditionSeverity[];
  /** target_resource_type block */
  readonly targetResourceType?: MonitorActionRuleSuppressionConditionTargetResourceType[];
}

function monitorActionRuleSuppressionConditionToTerraform(struct?: MonitorActionRuleSuppressionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alert_context: cdktf.listMapper(monitorActionRuleSuppressionConditionAlertContextToTerraform)(struct!.alertContext),
    alert_rule_id: cdktf.listMapper(monitorActionRuleSuppressionConditionAlertRuleIdToTerraform)(struct!.alertRuleId),
    description: cdktf.listMapper(monitorActionRuleSuppressionConditionDescriptionToTerraform)(struct!.description),
    monitor: cdktf.listMapper(monitorActionRuleSuppressionConditionMonitorToTerraform)(struct!.monitor),
    monitor_service: cdktf.listMapper(monitorActionRuleSuppressionConditionMonitorServiceToTerraform)(struct!.monitorService),
    severity: cdktf.listMapper(monitorActionRuleSuppressionConditionSeverityToTerraform)(struct!.severity),
    target_resource_type: cdktf.listMapper(monitorActionRuleSuppressionConditionTargetResourceTypeToTerraform)(struct!.targetResourceType),
  }
}

export interface MonitorActionRuleSuppressionScope {
  readonly resourceIds: string[];
  readonly type: string;
}

function monitorActionRuleSuppressionScopeToTerraform(struct?: MonitorActionRuleSuppressionScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface MonitorActionRuleSuppressionSuppressionSchedule {
  readonly endDateUtc: string;
  readonly recurrenceMonthly?: number[];
  readonly recurrenceWeekly?: string[];
  readonly startDateUtc: string;
}

function monitorActionRuleSuppressionSuppressionScheduleToTerraform(struct?: MonitorActionRuleSuppressionSuppressionSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_date_utc: cdktf.stringToTerraform(struct!.endDateUtc),
    recurrence_monthly: cdktf.listMapper(cdktf.numberToTerraform)(struct!.recurrenceMonthly),
    recurrence_weekly: cdktf.listMapper(cdktf.stringToTerraform)(struct!.recurrenceWeekly),
    start_date_utc: cdktf.stringToTerraform(struct!.startDateUtc),
  }
}

export interface MonitorActionRuleSuppressionSuppression {
  readonly recurrenceType: string;
  /** schedule block */
  readonly schedule?: MonitorActionRuleSuppressionSuppressionSchedule[];
}

function monitorActionRuleSuppressionSuppressionToTerraform(struct?: MonitorActionRuleSuppressionSuppression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    schedule: cdktf.listMapper(monitorActionRuleSuppressionSuppressionScheduleToTerraform)(struct!.schedule),
  }
}

export interface MonitorActionRuleSuppressionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorActionRuleSuppressionTimeoutsToTerraform(struct?: MonitorActionRuleSuppressionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitorActionRuleSuppression extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorActionRuleSuppressionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_action_rule_suppression',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._condition = config.condition;
    this._scope = config.scope;
    this._suppression = config.suppression;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _condition?: MonitorActionRuleSuppressionCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: MonitorActionRuleSuppressionCondition[] ) {
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
  private _scope?: MonitorActionRuleSuppressionScope[];
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: MonitorActionRuleSuppressionScope[] ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // suppression - computed: false, optional: false, required: true
  private _suppression: MonitorActionRuleSuppressionSuppression[];
  public get suppression() {
    return this.interpolationForAttribute('suppression') as any;
  }
  public set suppression(value: MonitorActionRuleSuppressionSuppression[]) {
    this._suppression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionInput() {
    return this._suppression
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActionRuleSuppressionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorActionRuleSuppressionTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      condition: cdktf.listMapper(monitorActionRuleSuppressionConditionToTerraform)(this._condition),
      scope: cdktf.listMapper(monitorActionRuleSuppressionScopeToTerraform)(this._scope),
      suppression: cdktf.listMapper(monitorActionRuleSuppressionSuppressionToTerraform)(this._suppression),
      timeouts: monitorActionRuleSuppressionTimeoutsToTerraform(this._timeouts),
    };
  }
}
