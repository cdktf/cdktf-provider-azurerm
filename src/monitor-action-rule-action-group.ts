// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionRuleActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#action_group_id MonitorActionRuleActionGroup#action_group_id}
  */
  readonly actionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#description MonitorActionRuleActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#enabled MonitorActionRuleActionGroup#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#name MonitorActionRuleActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#resource_group_name MonitorActionRuleActionGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#tags MonitorActionRuleActionGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#condition MonitorActionRuleActionGroup#condition}
  */
  readonly condition?: MonitorActionRuleActionGroupCondition[];
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#scope MonitorActionRuleActionGroup#scope}
  */
  readonly scope?: MonitorActionRuleActionGroupScope[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#timeouts MonitorActionRuleActionGroup#timeouts}
  */
  readonly timeouts?: MonitorActionRuleActionGroupTimeouts;
}
export interface MonitorActionRuleActionGroupConditionAlertContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#values MonitorActionRuleActionGroup#values}
  */
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
  /**
  * alert_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#alert_context MonitorActionRuleActionGroup#alert_context}
  */
  readonly alertContext?: MonitorActionRuleActionGroupConditionAlertContext[];
  /**
  * alert_rule_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}
  */
  readonly alertRuleId?: MonitorActionRuleActionGroupConditionAlertRuleId[];
  /**
  * description block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#description MonitorActionRuleActionGroup#description}
  */
  readonly description?: MonitorActionRuleActionGroupConditionDescription[];
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#monitor MonitorActionRuleActionGroup#monitor}
  */
  readonly monitor?: MonitorActionRuleActionGroupConditionMonitor[];
  /**
  * monitor_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#monitor_service MonitorActionRuleActionGroup#monitor_service}
  */
  readonly monitorService?: MonitorActionRuleActionGroupConditionMonitorService[];
  /**
  * severity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#severity MonitorActionRuleActionGroup#severity}
  */
  readonly severity?: MonitorActionRuleActionGroupConditionSeverity[];
  /**
  * target_resource_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#target_resource_type MonitorActionRuleActionGroup#target_resource_type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#resource_ids MonitorActionRuleActionGroup#resource_ids}
  */
  readonly resourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#type MonitorActionRuleActionGroup#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#create MonitorActionRuleActionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#delete MonitorActionRuleActionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#read MonitorActionRuleActionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#update MonitorActionRuleActionGroup#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html azurerm_monitor_action_rule_action_group}
*/
export class MonitorActionRuleActionGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html azurerm_monitor_action_rule_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActionRuleActionGroupConfig
  */
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
