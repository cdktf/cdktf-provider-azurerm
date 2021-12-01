// https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorMetricAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#auto_mitigate MonitorMetricAlert#auto_mitigate}
  */
  readonly autoMitigate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#description MonitorMetricAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#enabled MonitorMetricAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#frequency MonitorMetricAlert#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#name MonitorMetricAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#resource_group_name MonitorMetricAlert#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#scopes MonitorMetricAlert#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#severity MonitorMetricAlert#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#tags MonitorMetricAlert#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#target_resource_location MonitorMetricAlert#target_resource_location}
  */
  readonly targetResourceLocation?: string;
  /**
  * The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#target_resource_type MonitorMetricAlert#target_resource_type}
  */
  readonly targetResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#window_size MonitorMetricAlert#window_size}
  */
  readonly windowSize?: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#action MonitorMetricAlert#action}
  */
  readonly action?: MonitorMetricAlertAction[];
  /**
  * application_insights_web_test_location_availability_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#application_insights_web_test_location_availability_criteria MonitorMetricAlert#application_insights_web_test_location_availability_criteria}
  */
  readonly applicationInsightsWebTestLocationAvailabilityCriteria?: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria;
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#criteria MonitorMetricAlert#criteria}
  */
  readonly criteria?: MonitorMetricAlertCriteria[];
  /**
  * dynamic_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#dynamic_criteria MonitorMetricAlert#dynamic_criteria}
  */
  readonly dynamicCriteria?: MonitorMetricAlertDynamicCriteria;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#timeouts MonitorMetricAlert#timeouts}
  */
  readonly timeouts?: MonitorMetricAlertTimeouts;
}
export interface MonitorMetricAlertAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#action_group_id MonitorMetricAlert#action_group_id}
  */
  readonly actionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#webhook_properties MonitorMetricAlert#webhook_properties}
  */
  readonly webhookProperties?: { [key: string]: string } | cdktf.IResolvable;
}

export function monitorMetricAlertActionToTerraform(struct?: MonitorMetricAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_group_id: cdktf.stringToTerraform(struct!.actionGroupId),
    webhook_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.webhookProperties),
  }
}

export interface MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#component_id MonitorMetricAlert#component_id}
  */
  readonly componentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#failed_location_count MonitorMetricAlert#failed_location_count}
  */
  readonly failedLocationCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#web_test_id MonitorMetricAlert#web_test_id}
  */
  readonly webTestId: string;
}

export function monitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaToTerraform(struct?: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference | MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_id: cdktf.stringToTerraform(struct!.componentId),
    failed_location_count: cdktf.numberToTerraform(struct!.failedLocationCount),
    web_test_id: cdktf.stringToTerraform(struct!.webTestId),
  }
}

export class MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._componentId) {
      hasAnyValues = true;
      internalValueResult.componentId = this._componentId;
    }
    if (this._failedLocationCount) {
      hasAnyValues = true;
      internalValueResult.failedLocationCount = this._failedLocationCount;
    }
    if (this._webTestId) {
      hasAnyValues = true;
      internalValueResult.webTestId = this._webTestId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria | undefined) {
    if (value === undefined) {
      this._componentId = undefined;
      this._failedLocationCount = undefined;
      this._webTestId = undefined;
    }
    else {
      this._componentId = value.componentId;
      this._failedLocationCount = value.failedLocationCount;
      this._webTestId = value.webTestId;
    }
  }

  // component_id - computed: false, optional: false, required: true
  private _componentId?: string; 
  public get componentId() {
    return this.getStringAttribute('component_id');
  }
  public set componentId(value: string) {
    this._componentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId;
  }

  // failed_location_count - computed: false, optional: false, required: true
  private _failedLocationCount?: number; 
  public get failedLocationCount() {
    return this.getNumberAttribute('failed_location_count');
  }
  public set failedLocationCount(value: number) {
    this._failedLocationCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLocationCountInput() {
    return this._failedLocationCount;
  }

  // web_test_id - computed: false, optional: false, required: true
  private _webTestId?: string; 
  public get webTestId() {
    return this.getStringAttribute('web_test_id');
  }
  public set webTestId(value: string) {
    this._webTestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webTestIdInput() {
    return this._webTestId;
  }
}
export interface MonitorMetricAlertCriteriaDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#name MonitorMetricAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#operator MonitorMetricAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#values MonitorMetricAlert#values}
  */
  readonly values: string[];
}

export function monitorMetricAlertCriteriaDimensionToTerraform(struct?: MonitorMetricAlertCriteriaDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorMetricAlertCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#aggregation MonitorMetricAlert#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#metric_name MonitorMetricAlert#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#metric_namespace MonitorMetricAlert#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#operator MonitorMetricAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#skip_metric_validation MonitorMetricAlert#skip_metric_validation}
  */
  readonly skipMetricValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#threshold MonitorMetricAlert#threshold}
  */
  readonly threshold: number;
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#dimension MonitorMetricAlert#dimension}
  */
  readonly dimension?: MonitorMetricAlertCriteriaDimension[];
}

export function monitorMetricAlertCriteriaToTerraform(struct?: MonitorMetricAlertCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#name MonitorMetricAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#operator MonitorMetricAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#values MonitorMetricAlert#values}
  */
  readonly values: string[];
}

export function monitorMetricAlertDynamicCriteriaDimensionToTerraform(struct?: MonitorMetricAlertDynamicCriteriaDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorMetricAlertDynamicCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#aggregation MonitorMetricAlert#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#alert_sensitivity MonitorMetricAlert#alert_sensitivity}
  */
  readonly alertSensitivity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#evaluation_failure_count MonitorMetricAlert#evaluation_failure_count}
  */
  readonly evaluationFailureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#evaluation_total_count MonitorMetricAlert#evaluation_total_count}
  */
  readonly evaluationTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#ignore_data_before MonitorMetricAlert#ignore_data_before}
  */
  readonly ignoreDataBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#metric_name MonitorMetricAlert#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#metric_namespace MonitorMetricAlert#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#operator MonitorMetricAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#skip_metric_validation MonitorMetricAlert#skip_metric_validation}
  */
  readonly skipMetricValidation?: boolean | cdktf.IResolvable;
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#dimension MonitorMetricAlert#dimension}
  */
  readonly dimension?: MonitorMetricAlertDynamicCriteriaDimension[];
}

export function monitorMetricAlertDynamicCriteriaToTerraform(struct?: MonitorMetricAlertDynamicCriteriaOutputReference | MonitorMetricAlertDynamicCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class MonitorMetricAlertDynamicCriteriaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorMetricAlertDynamicCriteria | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._aggregation) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._alertSensitivity) {
      hasAnyValues = true;
      internalValueResult.alertSensitivity = this._alertSensitivity;
    }
    if (this._evaluationFailureCount) {
      hasAnyValues = true;
      internalValueResult.evaluationFailureCount = this._evaluationFailureCount;
    }
    if (this._evaluationTotalCount) {
      hasAnyValues = true;
      internalValueResult.evaluationTotalCount = this._evaluationTotalCount;
    }
    if (this._ignoreDataBefore) {
      hasAnyValues = true;
      internalValueResult.ignoreDataBefore = this._ignoreDataBefore;
    }
    if (this._metricName) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._skipMetricValidation) {
      hasAnyValues = true;
      internalValueResult.skipMetricValidation = this._skipMetricValidation;
    }
    if (this._dimension) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMetricAlertDynamicCriteria | undefined) {
    if (value === undefined) {
      this._aggregation = undefined;
      this._alertSensitivity = undefined;
      this._evaluationFailureCount = undefined;
      this._evaluationTotalCount = undefined;
      this._ignoreDataBefore = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._operator = undefined;
      this._skipMetricValidation = undefined;
      this._dimension = undefined;
    }
    else {
      this._aggregation = value.aggregation;
      this._alertSensitivity = value.alertSensitivity;
      this._evaluationFailureCount = value.evaluationFailureCount;
      this._evaluationTotalCount = value.evaluationTotalCount;
      this._ignoreDataBefore = value.ignoreDataBefore;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._operator = value.operator;
      this._skipMetricValidation = value.skipMetricValidation;
      this._dimension = value.dimension;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // alert_sensitivity - computed: false, optional: false, required: true
  private _alertSensitivity?: string; 
  public get alertSensitivity() {
    return this.getStringAttribute('alert_sensitivity');
  }
  public set alertSensitivity(value: string) {
    this._alertSensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSensitivityInput() {
    return this._alertSensitivity;
  }

  // evaluation_failure_count - computed: false, optional: true, required: false
  private _evaluationFailureCount?: number; 
  public get evaluationFailureCount() {
    return this.getNumberAttribute('evaluation_failure_count');
  }
  public set evaluationFailureCount(value: number) {
    this._evaluationFailureCount = value;
  }
  public resetEvaluationFailureCount() {
    this._evaluationFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFailureCountInput() {
    return this._evaluationFailureCount;
  }

  // evaluation_total_count - computed: false, optional: true, required: false
  private _evaluationTotalCount?: number; 
  public get evaluationTotalCount() {
    return this.getNumberAttribute('evaluation_total_count');
  }
  public set evaluationTotalCount(value: number) {
    this._evaluationTotalCount = value;
  }
  public resetEvaluationTotalCount() {
    this._evaluationTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationTotalCountInput() {
    return this._evaluationTotalCount;
  }

  // ignore_data_before - computed: false, optional: true, required: false
  private _ignoreDataBefore?: string; 
  public get ignoreDataBefore() {
    return this.getStringAttribute('ignore_data_before');
  }
  public set ignoreDataBefore(value: string) {
    this._ignoreDataBefore = value;
  }
  public resetIgnoreDataBefore() {
    this._ignoreDataBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDataBeforeInput() {
    return this._ignoreDataBefore;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: false, required: true
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // skip_metric_validation - computed: false, optional: true, required: false
  private _skipMetricValidation?: boolean | cdktf.IResolvable; 
  public get skipMetricValidation() {
    return this.getBooleanAttribute('skip_metric_validation') as any;
  }
  public set skipMetricValidation(value: boolean | cdktf.IResolvable) {
    this._skipMetricValidation = value;
  }
  public resetSkipMetricValidation() {
    this._skipMetricValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetricValidationInput() {
    return this._skipMetricValidation;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: MonitorMetricAlertDynamicCriteriaDimension[]; 
  public get dimension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }
  public set dimension(value: MonitorMetricAlertDynamicCriteriaDimension[]) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }
}
export interface MonitorMetricAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#create MonitorMetricAlert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#delete MonitorMetricAlert#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#read MonitorMetricAlert#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html#update MonitorMetricAlert#update}
  */
  readonly update?: string;
}

export function monitorMetricAlertTimeoutsToTerraform(struct?: MonitorMetricAlertTimeoutsOutputReference | MonitorMetricAlertTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class MonitorMetricAlertTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorMetricAlertTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMetricAlertTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html azurerm_monitor_metric_alert}
*/
export class MonitorMetricAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_metric_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_metric_alert.html azurerm_monitor_metric_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorMetricAlertConfig
  */
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
    this._applicationInsightsWebTestLocationAvailabilityCriteria.internalValue = config.applicationInsightsWebTestLocationAvailabilityCriteria;
    this._criteria = config.criteria;
    this._dynamicCriteria.internalValue = config.dynamicCriteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_mitigate - computed: false, optional: true, required: false
  private _autoMitigate?: boolean | cdktf.IResolvable; 
  public get autoMitigate() {
    return this.getBooleanAttribute('auto_mitigate') as any;
  }
  public set autoMitigate(value: boolean | cdktf.IResolvable) {
    this._autoMitigate = value;
  }
  public resetAutoMitigate() {
    this._autoMitigate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMitigateInput() {
    return this._autoMitigate;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
    return this._targetResourceLocation;
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
    return this._targetResourceType;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // action - computed: false, optional: true, required: false
  private _action?: MonitorMetricAlertAction[]; 
  public get action() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: MonitorMetricAlertAction[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application_insights_web_test_location_availability_criteria - computed: false, optional: true, required: false
  private _applicationInsightsWebTestLocationAvailabilityCriteria = new MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference(this as any, "application_insights_web_test_location_availability_criteria", true);
  public get applicationInsightsWebTestLocationAvailabilityCriteria() {
    return this._applicationInsightsWebTestLocationAvailabilityCriteria;
  }
  public putApplicationInsightsWebTestLocationAvailabilityCriteria(value: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria) {
    this._applicationInsightsWebTestLocationAvailabilityCriteria.internalValue = value;
  }
  public resetApplicationInsightsWebTestLocationAvailabilityCriteria() {
    this._applicationInsightsWebTestLocationAvailabilityCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsWebTestLocationAvailabilityCriteriaInput() {
    return this._applicationInsightsWebTestLocationAvailabilityCriteria.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: MonitorMetricAlertCriteria[]; 
  public get criteria() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('criteria') as any;
  }
  public set criteria(value: MonitorMetricAlertCriteria[]) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // dynamic_criteria - computed: false, optional: true, required: false
  private _dynamicCriteria = new MonitorMetricAlertDynamicCriteriaOutputReference(this as any, "dynamic_criteria", true);
  public get dynamicCriteria() {
    return this._dynamicCriteria;
  }
  public putDynamicCriteria(value: MonitorMetricAlertDynamicCriteria) {
    this._dynamicCriteria.internalValue = value;
  }
  public resetDynamicCriteria() {
    this._dynamicCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicCriteriaInput() {
    return this._dynamicCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorMetricAlertTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorMetricAlertTimeouts) {
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
      application_insights_web_test_location_availability_criteria: monitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaToTerraform(this._applicationInsightsWebTestLocationAvailabilityCriteria.internalValue),
      criteria: cdktf.listMapper(monitorMetricAlertCriteriaToTerraform)(this._criteria),
      dynamic_criteria: monitorMetricAlertDynamicCriteriaToTerraform(this._dynamicCriteria.internalValue),
      timeouts: monitorMetricAlertTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
