// https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorMetricAlertConfig extends cdktf.TerraformMetaArguments {
  readonly autoMitigate?: boolean;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly frequency?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scopes: string[];
  readonly severity?: number;
  readonly tags?: { [key: string]: string };
  /** The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. */
  readonly targetResourceLocation?: string;
  /** The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. */
  readonly targetResourceType?: string;
  readonly windowSize?: string;
  /** action block */
  readonly action?: MonitorMetricAlertAction[];
  /** application_insights_web_test_location_availability_criteria block */
  readonly applicationInsightsWebTestLocationAvailabilityCriteria?: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria[];
  /** criteria block */
  readonly criteria?: MonitorMetricAlertCriteria[];
  /** dynamic_criteria block */
  readonly dynamicCriteria?: MonitorMetricAlertDynamicCriteria[];
  /** timeouts block */
  readonly timeouts?: MonitorMetricAlertTimeouts;
}
export interface MonitorMetricAlertAction {
  readonly actionGroupId: string;
  readonly webhookProperties?: { [key: string]: string };
}

function monitorMetricAlertActionToTerraform(struct?: MonitorMetricAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_group_id: cdktf.stringToTerraform(struct!.actionGroupId),
    webhook_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.webhookProperties),
  }
}

export interface MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria {
  readonly componentId: string;
  readonly failedLocationCount: number;
  readonly webTestId: string;
}

function monitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaToTerraform(struct?: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_id: cdktf.stringToTerraform(struct!.componentId),
    failed_location_count: cdktf.numberToTerraform(struct!.failedLocationCount),
    web_test_id: cdktf.stringToTerraform(struct!.webTestId),
  }
}

export interface MonitorMetricAlertCriteriaDimension {
  readonly name: string;
  readonly operator: string;
  readonly values: string[];
}

function monitorMetricAlertCriteriaDimensionToTerraform(struct?: MonitorMetricAlertCriteriaDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorMetricAlertCriteria {
  readonly aggregation: string;
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly operator: string;
  readonly skipMetricValidation?: boolean;
  readonly threshold: number;
  /** dimension block */
  readonly dimension?: MonitorMetricAlertCriteriaDimension[];
}

function monitorMetricAlertCriteriaToTerraform(struct?: MonitorMetricAlertCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    skip_metric_validation: cdktf.booleanToTerraform(struct!.skipMetricValidation),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    dimension: cdktf.listMapper(monitorMetricAlertCriteriaDimensionToTerraform)(struct!.dimension),
  }
}

export interface MonitorMetricAlertDynamicCriteriaDimension {
  readonly name: string;
  readonly operator: string;
  readonly values: string[];
}

function monitorMetricAlertDynamicCriteriaDimensionToTerraform(struct?: MonitorMetricAlertDynamicCriteriaDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorMetricAlertDynamicCriteria {
  readonly aggregation: string;
  readonly alertSensitivity: string;
  readonly evaluationFailureCount?: number;
  readonly evaluationTotalCount?: number;
  readonly ignoreDataBefore?: string;
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly operator: string;
  readonly skipMetricValidation?: boolean;
  /** dimension block */
  readonly dimension?: MonitorMetricAlertDynamicCriteriaDimension[];
}

function monitorMetricAlertDynamicCriteriaToTerraform(struct?: MonitorMetricAlertDynamicCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    alert_sensitivity: cdktf.stringToTerraform(struct!.alertSensitivity),
    evaluation_failure_count: cdktf.numberToTerraform(struct!.evaluationFailureCount),
    evaluation_total_count: cdktf.numberToTerraform(struct!.evaluationTotalCount),
    ignore_data_before: cdktf.stringToTerraform(struct!.ignoreDataBefore),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    skip_metric_validation: cdktf.booleanToTerraform(struct!.skipMetricValidation),
    dimension: cdktf.listMapper(monitorMetricAlertDynamicCriteriaDimensionToTerraform)(struct!.dimension),
  }
}

export interface MonitorMetricAlertTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorMetricAlertTimeoutsToTerraform(struct?: MonitorMetricAlertTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitorMetricAlert extends cdktf.TerraformResource {

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
    this._targetResourceLocation = config.targetResourceLocation;
    this._targetResourceType = config.targetResourceType;
    this._windowSize = config.windowSize;
    this._action = config.action;
    this._applicationInsightsWebTestLocationAvailabilityCriteria = config.applicationInsightsWebTestLocationAvailabilityCriteria;
    this._criteria = config.criteria;
    this._dynamicCriteria = config.dynamicCriteria;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_mitigate - computed: false, optional: true, required: false
  private _autoMitigate?: boolean;
  public get autoMitigate() {
    return this.getBooleanAttribute('auto_mitigate');
  }
  public set autoMitigate(value: boolean ) {
    this._autoMitigate = value;
  }
  public resetAutoMitigate() {
    this._autoMitigate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMitigateInput() {
    return this._autoMitigate
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string ) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
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

  // severity - computed: false, optional: true, required: false
  private _severity?: number;
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number ) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
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

  // target_resource_location - computed: true, optional: true, required: false
  private _targetResourceLocation?: string;
  public get targetResourceLocation() {
    return this.getStringAttribute('target_resource_location');
  }
  public set targetResourceLocation(value: string) {
    this._targetResourceLocation = value;
  }
  public resetTargetResourceLocation() {
    this._targetResourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceLocationInput() {
    return this._targetResourceLocation
  }

  // target_resource_type - computed: true, optional: true, required: false
  private _targetResourceType?: string;
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string;
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string ) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize
  }

  // action - computed: false, optional: true, required: false
  private _action?: MonitorMetricAlertAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: MonitorMetricAlertAction[] ) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // application_insights_web_test_location_availability_criteria - computed: false, optional: true, required: false
  private _applicationInsightsWebTestLocationAvailabilityCriteria?: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria[];
  public get applicationInsightsWebTestLocationAvailabilityCriteria() {
    return this.interpolationForAttribute('application_insights_web_test_location_availability_criteria') as any;
  }
  public set applicationInsightsWebTestLocationAvailabilityCriteria(value: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria[] ) {
    this._applicationInsightsWebTestLocationAvailabilityCriteria = value;
  }
  public resetApplicationInsightsWebTestLocationAvailabilityCriteria() {
    this._applicationInsightsWebTestLocationAvailabilityCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsWebTestLocationAvailabilityCriteriaInput() {
    return this._applicationInsightsWebTestLocationAvailabilityCriteria
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: MonitorMetricAlertCriteria[];
  public get criteria() {
    return this.interpolationForAttribute('criteria') as any;
  }
  public set criteria(value: MonitorMetricAlertCriteria[] ) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria
  }

  // dynamic_criteria - computed: false, optional: true, required: false
  private _dynamicCriteria?: MonitorMetricAlertDynamicCriteria[];
  public get dynamicCriteria() {
    return this.interpolationForAttribute('dynamic_criteria') as any;
  }
  public set dynamicCriteria(value: MonitorMetricAlertDynamicCriteria[] ) {
    this._dynamicCriteria = value;
  }
  public resetDynamicCriteria() {
    this._dynamicCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicCriteriaInput() {
    return this._dynamicCriteria
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorMetricAlertTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorMetricAlertTimeouts ) {
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
      auto_mitigate: cdktf.booleanToTerraform(this._autoMitigate),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      severity: cdktf.numberToTerraform(this._severity),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_resource_location: cdktf.stringToTerraform(this._targetResourceLocation),
      target_resource_type: cdktf.stringToTerraform(this._targetResourceType),
      window_size: cdktf.stringToTerraform(this._windowSize),
      action: cdktf.listMapper(monitorMetricAlertActionToTerraform)(this._action),
      application_insights_web_test_location_availability_criteria: cdktf.listMapper(monitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaToTerraform)(this._applicationInsightsWebTestLocationAvailabilityCriteria),
      criteria: cdktf.listMapper(monitorMetricAlertCriteriaToTerraform)(this._criteria),
      dynamic_criteria: cdktf.listMapper(monitorMetricAlertDynamicCriteriaToTerraform)(this._dynamicCriteria),
      timeouts: monitorMetricAlertTimeoutsToTerraform(this._timeouts),
    };
  }
}
