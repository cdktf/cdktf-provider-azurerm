// https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorMetricAlertConfig extends TerraformMetaArguments {
  readonly autoMitigate?: boolean;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly frequency?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scopes: string[];
  readonly severity?: number;
  readonly tags?: { [key: string]: string };
  readonly windowSize?: string;
  /** action block */
  readonly action?: MonitorMetricAlertAction[];
  /** criteria block */
  readonly criteria: MonitorMetricAlertCriteria[];
  /** timeouts block */
  readonly timeouts?: MonitorMetricAlertTimeouts;
}
export interface MonitorMetricAlertAction {
  readonly actionGroupId: string;
  readonly webhookProperties?: { [key: string]: string };
}
export interface MonitorMetricAlertCriteriaDimension {
  readonly name: string;
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorMetricAlertCriteria {
  readonly aggregation: string;
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly operator: string;
  readonly threshold: number;
  /** dimension block */
  readonly dimension?: MonitorMetricAlertCriteriaDimension[];
}
export interface MonitorMetricAlertTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorMetricAlert extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorMetricAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_metric_alert',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoMitigate = config.autoMitigate;
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._severity = config.severity;
    this._tags = config.tags;
    this._windowSize = config.windowSize;
    this._action = config.action;
    this._criteria = config.criteria;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_mitigate - computed: false, optional: true, required: false
  private _autoMitigate?: boolean;
  public get autoMitigate() {
    return this._autoMitigate;
  }
  public set autoMitigate(value: boolean | undefined) {
    this._autoMitigate = value;
  }

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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string;
  public get frequency() {
    return this._frequency;
  }
  public set frequency(value: string | undefined) {
    this._frequency = value;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: number;
  public get severity() {
    return this._severity;
  }
  public set severity(value: number | undefined) {
    this._severity = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string;
  public get windowSize() {
    return this._windowSize;
  }
  public set windowSize(value: string | undefined) {
    this._windowSize = value;
  }

  // action - computed: false, optional: true, required: false
  private _action?: MonitorMetricAlertAction[];
  public get action() {
    return this._action;
  }
  public set action(value: MonitorMetricAlertAction[] | undefined) {
    this._action = value;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria: MonitorMetricAlertCriteria[];
  public get criteria() {
    return this._criteria;
  }
  public set criteria(value: MonitorMetricAlertCriteria[]) {
    this._criteria = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorMetricAlertTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitorMetricAlertTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_mitigate: this._autoMitigate,
      description: this._description,
      enabled: this._enabled,
      frequency: this._frequency,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      scopes: this._scopes,
      severity: this._severity,
      tags: this._tags,
      window_size: this._windowSize,
      action: this._action,
      criteria: this._criteria,
      timeouts: this._timeouts,
    };
  }
}
