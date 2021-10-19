// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionRuleSuppressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#description MonitorActionRuleSuppression#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#enabled MonitorActionRuleSuppression#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#name MonitorActionRuleSuppression#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#resource_group_name MonitorActionRuleSuppression#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#tags MonitorActionRuleSuppression#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#condition MonitorActionRuleSuppression#condition}
  */
  readonly condition?: MonitorActionRuleSuppressionCondition;
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#scope MonitorActionRuleSuppression#scope}
  */
  readonly scope?: MonitorActionRuleSuppressionScope;
  /**
  * suppression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#suppression MonitorActionRuleSuppression#suppression}
  */
  readonly suppression: MonitorActionRuleSuppressionSuppression;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#timeouts MonitorActionRuleSuppression#timeouts}
  */
  readonly timeouts?: MonitorActionRuleSuppressionTimeouts;
}
export interface MonitorActionRuleSuppressionConditionAlertContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionAlertContextToTerraform(struct?: MonitorActionRuleSuppressionConditionAlertContextOutputReference | MonitorActionRuleSuppressionConditionAlertContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionAlertContextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionConditionAlertRuleId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionAlertRuleIdToTerraform(struct?: MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference | MonitorActionRuleSuppressionConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionConditionDescription {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionDescriptionToTerraform(struct?: MonitorActionRuleSuppressionConditionDescriptionOutputReference | MonitorActionRuleSuppressionConditionDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionDescriptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionConditionMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionMonitorToTerraform(struct?: MonitorActionRuleSuppressionConditionMonitorOutputReference | MonitorActionRuleSuppressionConditionMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionMonitorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionConditionMonitorService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionMonitorServiceToTerraform(struct?: MonitorActionRuleSuppressionConditionMonitorServiceOutputReference | MonitorActionRuleSuppressionConditionMonitorService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionMonitorServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionConditionSeverity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionSeverityToTerraform(struct?: MonitorActionRuleSuppressionConditionSeverityOutputReference | MonitorActionRuleSuppressionConditionSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionSeverityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionConditionTargetResourceType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#operator MonitorActionRuleSuppression#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#values MonitorActionRuleSuppression#values}
  */
  readonly values: string[];
}

function monitorActionRuleSuppressionConditionTargetResourceTypeToTerraform(struct?: MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference | MonitorActionRuleSuppressionConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._operator
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface MonitorActionRuleSuppressionCondition {
  /**
  * alert_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#alert_context MonitorActionRuleSuppression#alert_context}
  */
  readonly alertContext?: MonitorActionRuleSuppressionConditionAlertContext;
  /**
  * alert_rule_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#alert_rule_id MonitorActionRuleSuppression#alert_rule_id}
  */
  readonly alertRuleId?: MonitorActionRuleSuppressionConditionAlertRuleId;
  /**
  * description block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#description MonitorActionRuleSuppression#description}
  */
  readonly description?: MonitorActionRuleSuppressionConditionDescription;
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#monitor MonitorActionRuleSuppression#monitor}
  */
  readonly monitor?: MonitorActionRuleSuppressionConditionMonitor;
  /**
  * monitor_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#monitor_service MonitorActionRuleSuppression#monitor_service}
  */
  readonly monitorService?: MonitorActionRuleSuppressionConditionMonitorService;
  /**
  * severity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#severity MonitorActionRuleSuppression#severity}
  */
  readonly severity?: MonitorActionRuleSuppressionConditionSeverity;
  /**
  * target_resource_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#target_resource_type MonitorActionRuleSuppression#target_resource_type}
  */
  readonly targetResourceType?: MonitorActionRuleSuppressionConditionTargetResourceType;
}

function monitorActionRuleSuppressionConditionToTerraform(struct?: MonitorActionRuleSuppressionConditionOutputReference | MonitorActionRuleSuppressionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_context: monitorActionRuleSuppressionConditionAlertContextToTerraform(struct!.alertContext),
    alert_rule_id: monitorActionRuleSuppressionConditionAlertRuleIdToTerraform(struct!.alertRuleId),
    description: monitorActionRuleSuppressionConditionDescriptionToTerraform(struct!.description),
    monitor: monitorActionRuleSuppressionConditionMonitorToTerraform(struct!.monitor),
    monitor_service: monitorActionRuleSuppressionConditionMonitorServiceToTerraform(struct!.monitorService),
    severity: monitorActionRuleSuppressionConditionSeverityToTerraform(struct!.severity),
    target_resource_type: monitorActionRuleSuppressionConditionTargetResourceTypeToTerraform(struct!.targetResourceType),
  }
}

export class MonitorActionRuleSuppressionConditionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // alert_context - computed: false, optional: true, required: false
  private _alertContext?: MonitorActionRuleSuppressionConditionAlertContext | undefined; 
  private __alertContextOutput = new MonitorActionRuleSuppressionConditionAlertContextOutputReference(this as any, "alert_context", true);
  public get alertContext() {
    return this.__alertContextOutput;
  }
  public putAlertContext(value: MonitorActionRuleSuppressionConditionAlertContext | undefined) {
    this._alertContext = value;
  }
  public resetAlertContext() {
    this._alertContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertContextInput() {
    return this._alertContext
  }

  // alert_rule_id - computed: false, optional: true, required: false
  private _alertRuleId?: MonitorActionRuleSuppressionConditionAlertRuleId | undefined; 
  private __alertRuleIdOutput = new MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference(this as any, "alert_rule_id", true);
  public get alertRuleId() {
    return this.__alertRuleIdOutput;
  }
  public putAlertRuleId(value: MonitorActionRuleSuppressionConditionAlertRuleId | undefined) {
    this._alertRuleId = value;
  }
  public resetAlertRuleId() {
    this._alertRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleIdInput() {
    return this._alertRuleId
  }

  // description - computed: false, optional: true, required: false
  private _description?: MonitorActionRuleSuppressionConditionDescription | undefined; 
  private __descriptionOutput = new MonitorActionRuleSuppressionConditionDescriptionOutputReference(this as any, "description", true);
  public get description() {
    return this.__descriptionOutput;
  }
  public putDescription(value: MonitorActionRuleSuppressionConditionDescription | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: MonitorActionRuleSuppressionConditionMonitor | undefined; 
  private __monitorOutput = new MonitorActionRuleSuppressionConditionMonitorOutputReference(this as any, "monitor", true);
  public get monitor() {
    return this.__monitorOutput;
  }
  public putMonitor(value: MonitorActionRuleSuppressionConditionMonitor | undefined) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // monitor_service - computed: false, optional: true, required: false
  private _monitorService?: MonitorActionRuleSuppressionConditionMonitorService | undefined; 
  private __monitorServiceOutput = new MonitorActionRuleSuppressionConditionMonitorServiceOutputReference(this as any, "monitor_service", true);
  public get monitorService() {
    return this.__monitorServiceOutput;
  }
  public putMonitorService(value: MonitorActionRuleSuppressionConditionMonitorService | undefined) {
    this._monitorService = value;
  }
  public resetMonitorService() {
    this._monitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorServiceInput() {
    return this._monitorService
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: MonitorActionRuleSuppressionConditionSeverity | undefined; 
  private __severityOutput = new MonitorActionRuleSuppressionConditionSeverityOutputReference(this as any, "severity", true);
  public get severity() {
    return this.__severityOutput;
  }
  public putSeverity(value: MonitorActionRuleSuppressionConditionSeverity | undefined) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType?: MonitorActionRuleSuppressionConditionTargetResourceType | undefined; 
  private __targetResourceTypeOutput = new MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference(this as any, "target_resource_type", true);
  public get targetResourceType() {
    return this.__targetResourceTypeOutput;
  }
  public putTargetResourceType(value: MonitorActionRuleSuppressionConditionTargetResourceType | undefined) {
    this._targetResourceType = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType
  }
}
export interface MonitorActionRuleSuppressionScope {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#resource_ids MonitorActionRuleSuppression#resource_ids}
  */
  readonly resourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#type MonitorActionRuleSuppression#type}
  */
  readonly type: string;
}

function monitorActionRuleSuppressionScopeToTerraform(struct?: MonitorActionRuleSuppressionScopeOutputReference | MonitorActionRuleSuppressionScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MonitorActionRuleSuppressionScopeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_ids - computed: false, optional: false, required: true
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface MonitorActionRuleSuppressionSuppressionSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#end_date_utc MonitorActionRuleSuppression#end_date_utc}
  */
  readonly endDateUtc: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#recurrence_monthly MonitorActionRuleSuppression#recurrence_monthly}
  */
  readonly recurrenceMonthly?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#recurrence_weekly MonitorActionRuleSuppression#recurrence_weekly}
  */
  readonly recurrenceWeekly?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#start_date_utc MonitorActionRuleSuppression#start_date_utc}
  */
  readonly startDateUtc: string;
}

function monitorActionRuleSuppressionSuppressionScheduleToTerraform(struct?: MonitorActionRuleSuppressionSuppressionScheduleOutputReference | MonitorActionRuleSuppressionSuppressionSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_utc: cdktf.stringToTerraform(struct!.endDateUtc),
    recurrence_monthly: cdktf.listMapper(cdktf.numberToTerraform)(struct!.recurrenceMonthly),
    recurrence_weekly: cdktf.listMapper(cdktf.stringToTerraform)(struct!.recurrenceWeekly),
    start_date_utc: cdktf.stringToTerraform(struct!.startDateUtc),
  }
}

export class MonitorActionRuleSuppressionSuppressionScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end_date_utc - computed: false, optional: false, required: true
  private _endDateUtc?: string; 
  public get endDateUtc() {
    return this.getStringAttribute('end_date_utc');
  }
  public set endDateUtc(value: string) {
    this._endDateUtc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateUtcInput() {
    return this._endDateUtc
  }

  // recurrence_monthly - computed: false, optional: true, required: false
  private _recurrenceMonthly?: number[] | undefined; 
  public get recurrenceMonthly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('recurrence_monthly') as any;
  }
  public set recurrenceMonthly(value: number[] | undefined) {
    this._recurrenceMonthly = value;
  }
  public resetRecurrenceMonthly() {
    this._recurrenceMonthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceMonthlyInput() {
    return this._recurrenceMonthly
  }

  // recurrence_weekly - computed: false, optional: true, required: false
  private _recurrenceWeekly?: string[] | undefined; 
  public get recurrenceWeekly() {
    return this.getListAttribute('recurrence_weekly');
  }
  public set recurrenceWeekly(value: string[] | undefined) {
    this._recurrenceWeekly = value;
  }
  public resetRecurrenceWeekly() {
    this._recurrenceWeekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceWeeklyInput() {
    return this._recurrenceWeekly
  }

  // start_date_utc - computed: false, optional: false, required: true
  private _startDateUtc?: string; 
  public get startDateUtc() {
    return this.getStringAttribute('start_date_utc');
  }
  public set startDateUtc(value: string) {
    this._startDateUtc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateUtcInput() {
    return this._startDateUtc
  }
}
export interface MonitorActionRuleSuppressionSuppression {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#recurrence_type MonitorActionRuleSuppression#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#schedule MonitorActionRuleSuppression#schedule}
  */
  readonly schedule?: MonitorActionRuleSuppressionSuppressionSchedule;
}

function monitorActionRuleSuppressionSuppressionToTerraform(struct?: MonitorActionRuleSuppressionSuppressionOutputReference | MonitorActionRuleSuppressionSuppression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    schedule: monitorActionRuleSuppressionSuppressionScheduleToTerraform(struct!.schedule),
  }
}

export class MonitorActionRuleSuppressionSuppressionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: MonitorActionRuleSuppressionSuppressionSchedule | undefined; 
  private __scheduleOutput = new MonitorActionRuleSuppressionSuppressionScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this.__scheduleOutput;
  }
  public putSchedule(value: MonitorActionRuleSuppressionSuppressionSchedule | undefined) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }
}
export interface MonitorActionRuleSuppressionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#create MonitorActionRuleSuppression#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#delete MonitorActionRuleSuppression#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#read MonitorActionRuleSuppression#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html#update MonitorActionRuleSuppression#update}
  */
  readonly update?: string;
}

function monitorActionRuleSuppressionTimeoutsToTerraform(struct?: MonitorActionRuleSuppressionTimeoutsOutputReference | MonitorActionRuleSuppressionTimeouts): any {
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

export class MonitorActionRuleSuppressionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html azurerm_monitor_action_rule_suppression}
*/
export class MonitorActionRuleSuppression extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_action_rule_suppression";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html azurerm_monitor_action_rule_suppression} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActionRuleSuppressionConfig
  */
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _condition?: MonitorActionRuleSuppressionCondition | undefined; 
  private __conditionOutput = new MonitorActionRuleSuppressionConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this.__conditionOutput;
  }
  public putCondition(value: MonitorActionRuleSuppressionCondition | undefined) {
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
  private _scope?: MonitorActionRuleSuppressionScope | undefined; 
  private __scopeOutput = new MonitorActionRuleSuppressionScopeOutputReference(this as any, "scope", true);
  public get scope() {
    return this.__scopeOutput;
  }
  public putScope(value: MonitorActionRuleSuppressionScope | undefined) {
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
  private _suppression?: MonitorActionRuleSuppressionSuppression; 
  private __suppressionOutput = new MonitorActionRuleSuppressionSuppressionOutputReference(this as any, "suppression", true);
  public get suppression() {
    return this.__suppressionOutput;
  }
  public putSuppression(value: MonitorActionRuleSuppressionSuppression) {
    this._suppression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionInput() {
    return this._suppression
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActionRuleSuppressionTimeouts | undefined; 
  private __timeoutsOutput = new MonitorActionRuleSuppressionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitorActionRuleSuppressionTimeouts | undefined) {
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
      condition: monitorActionRuleSuppressionConditionToTerraform(this._condition),
      scope: monitorActionRuleSuppressionScopeToTerraform(this._scope),
      suppression: monitorActionRuleSuppressionSuppressionToTerraform(this._suppression),
      timeouts: monitorActionRuleSuppressionTimeoutsToTerraform(this._timeouts),
    };
  }
}
