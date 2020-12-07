// https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActivityLogAlertConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scopes: string[];
  readonly tags?: { [key: string]: string };
  /** action block */
  readonly action?: MonitorActivityLogAlertAction[];
  /** criteria block */
  readonly criteria: MonitorActivityLogAlertCriteria[];
  /** timeouts block */
  readonly timeouts?: MonitorActivityLogAlertTimeouts;
}
export interface MonitorActivityLogAlertAction {
  readonly actionGroupId: string;
  readonly webhookProperties?: { [key: string]: string };
}

function monitorActivityLogAlertActionToTerraform(struct?: MonitorActivityLogAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_group_id: cdktf.stringToTerraform(struct!.actionGroupId),
    webhook_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.webhookProperties),
  }
}

export interface MonitorActivityLogAlertCriteria {
  readonly caller?: string;
  readonly category: string;
  readonly level?: string;
  readonly operationName?: string;
  readonly recommendationCategory?: string;
  readonly recommendationImpact?: string;
  readonly recommendationType?: string;
  readonly resourceGroup?: string;
  readonly resourceId?: string;
  readonly resourceProvider?: string;
  readonly resourceType?: string;
  readonly status?: string;
  readonly subStatus?: string;
}

function monitorActivityLogAlertCriteriaToTerraform(struct?: MonitorActivityLogAlertCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caller: cdktf.stringToTerraform(struct!.caller),
    category: cdktf.stringToTerraform(struct!.category),
    level: cdktf.stringToTerraform(struct!.level),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    recommendation_category: cdktf.stringToTerraform(struct!.recommendationCategory),
    recommendation_impact: cdktf.stringToTerraform(struct!.recommendationImpact),
    recommendation_type: cdktf.stringToTerraform(struct!.recommendationType),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_provider: cdktf.stringToTerraform(struct!.resourceProvider),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    status: cdktf.stringToTerraform(struct!.status),
    sub_status: cdktf.stringToTerraform(struct!.subStatus),
  }
}

export interface MonitorActivityLogAlertTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorActivityLogAlertTimeoutsToTerraform(struct?: MonitorActivityLogAlertTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitorActivityLogAlert extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorActivityLogAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_activity_log_alert',
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
    this._scopes = config.scopes;
    this._tags = config.tags;
    this._action = config.action;
    this._criteria = config.criteria;
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

  // action - computed: false, optional: true, required: false
  private _action?: MonitorActivityLogAlertAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: MonitorActivityLogAlertAction[] ) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria: MonitorActivityLogAlertCriteria[];
  public get criteria() {
    return this.interpolationForAttribute('criteria') as any;
  }
  public set criteria(value: MonitorActivityLogAlertCriteria[]) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActivityLogAlertTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorActivityLogAlertTimeouts ) {
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
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      action: cdktf.listMapper(monitorActivityLogAlertActionToTerraform)(this._action),
      criteria: cdktf.listMapper(monitorActivityLogAlertCriteriaToTerraform)(this._criteria),
      timeouts: monitorActivityLogAlertTimeoutsToTerraform(this._timeouts),
    };
  }
}
