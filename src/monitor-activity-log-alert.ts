// https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorActivityLogAlertConfig extends TerraformMetaArguments {
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
export interface MonitorActivityLogAlertCriteria {
  readonly caller?: string;
  readonly category: string;
  readonly level?: string;
  readonly operationName?: string;
  readonly resourceGroup?: string;
  readonly resourceId?: string;
  readonly resourceProvider?: string;
  readonly resourceType?: string;
  readonly status?: string;
  readonly subStatus?: string;
}
export interface MonitorActivityLogAlertTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorActivityLogAlert extends TerraformResource {

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
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes: string[];
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // action - computed: false, optional: true, required: false
  private _action?: MonitorActivityLogAlertAction[];
  public get action() {
    return this._action;
  }
  public set action(value: MonitorActivityLogAlertAction[] | undefined) {
    this._action = value;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria: MonitorActivityLogAlertCriteria[];
  public get criteria() {
    return this._criteria;
  }
  public set criteria(value: MonitorActivityLogAlertCriteria[]) {
    this._criteria = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActivityLogAlertTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitorActivityLogAlertTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      enabled: this._enabled,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      scopes: this._scopes,
      tags: this._tags,
      action: this._action,
      criteria: this._criteria,
      timeouts: this._timeouts,
    };
  }
}
