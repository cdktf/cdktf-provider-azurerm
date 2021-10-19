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
  readonly enabled?: boolean | cdktf.IResolvable;
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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#condition MonitorActionRuleActionGroup#condition}
  */
  readonly condition?: MonitorActionRuleActionGroupCondition;
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#scope MonitorActionRuleActionGroup#scope}
  */
  readonly scope?: MonitorActionRuleActionGroupScope;
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

function monitorActionRuleActionGroupConditionAlertContextToTerraform(struct?: MonitorActionRuleActionGroupConditionAlertContextOutputReference | MonitorActionRuleActionGroupConditionAlertContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionAlertContextOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupConditionAlertRuleIdToTerraform(struct?: MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference | MonitorActionRuleActionGroupConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupConditionDescriptionToTerraform(struct?: MonitorActionRuleActionGroupConditionDescriptionOutputReference | MonitorActionRuleActionGroupConditionDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionDescriptionOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupConditionMonitorToTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorOutputReference | MonitorActionRuleActionGroupConditionMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionMonitorOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupConditionMonitorServiceToTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorServiceOutputReference | MonitorActionRuleActionGroupConditionMonitorService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionMonitorServiceOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupConditionSeverityToTerraform(struct?: MonitorActionRuleActionGroupConditionSeverityOutputReference | MonitorActionRuleActionGroupConditionSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionSeverityOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupConditionTargetResourceTypeToTerraform(struct?: MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference | MonitorActionRuleActionGroupConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference extends cdktf.ComplexObject {
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
export interface MonitorActionRuleActionGroupCondition {
  /**
  * alert_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#alert_context MonitorActionRuleActionGroup#alert_context}
  */
  readonly alertContext?: MonitorActionRuleActionGroupConditionAlertContext;
  /**
  * alert_rule_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}
  */
  readonly alertRuleId?: MonitorActionRuleActionGroupConditionAlertRuleId;
  /**
  * description block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#description MonitorActionRuleActionGroup#description}
  */
  readonly description?: MonitorActionRuleActionGroupConditionDescription;
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#monitor MonitorActionRuleActionGroup#monitor}
  */
  readonly monitor?: MonitorActionRuleActionGroupConditionMonitor;
  /**
  * monitor_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#monitor_service MonitorActionRuleActionGroup#monitor_service}
  */
  readonly monitorService?: MonitorActionRuleActionGroupConditionMonitorService;
  /**
  * severity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#severity MonitorActionRuleActionGroup#severity}
  */
  readonly severity?: MonitorActionRuleActionGroupConditionSeverity;
  /**
  * target_resource_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html#target_resource_type MonitorActionRuleActionGroup#target_resource_type}
  */
  readonly targetResourceType?: MonitorActionRuleActionGroupConditionTargetResourceType;
}

function monitorActionRuleActionGroupConditionToTerraform(struct?: MonitorActionRuleActionGroupConditionOutputReference | MonitorActionRuleActionGroupCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_context: monitorActionRuleActionGroupConditionAlertContextToTerraform(struct!.alertContext),
    alert_rule_id: monitorActionRuleActionGroupConditionAlertRuleIdToTerraform(struct!.alertRuleId),
    description: monitorActionRuleActionGroupConditionDescriptionToTerraform(struct!.description),
    monitor: monitorActionRuleActionGroupConditionMonitorToTerraform(struct!.monitor),
    monitor_service: monitorActionRuleActionGroupConditionMonitorServiceToTerraform(struct!.monitorService),
    severity: monitorActionRuleActionGroupConditionSeverityToTerraform(struct!.severity),
    target_resource_type: monitorActionRuleActionGroupConditionTargetResourceTypeToTerraform(struct!.targetResourceType),
  }
}

export class MonitorActionRuleActionGroupConditionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // alert_context - computed: false, optional: true, required: false
  private _alertContext?: MonitorActionRuleActionGroupConditionAlertContext | undefined; 
  private __alertContextOutput = new MonitorActionRuleActionGroupConditionAlertContextOutputReference(this as any, "alert_context", true);
  public get alertContext() {
    return this.__alertContextOutput;
  }
  public putAlertContext(value: MonitorActionRuleActionGroupConditionAlertContext | undefined) {
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
  private _alertRuleId?: MonitorActionRuleActionGroupConditionAlertRuleId | undefined; 
  private __alertRuleIdOutput = new MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference(this as any, "alert_rule_id", true);
  public get alertRuleId() {
    return this.__alertRuleIdOutput;
  }
  public putAlertRuleId(value: MonitorActionRuleActionGroupConditionAlertRuleId | undefined) {
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
  private _description?: MonitorActionRuleActionGroupConditionDescription | undefined; 
  private __descriptionOutput = new MonitorActionRuleActionGroupConditionDescriptionOutputReference(this as any, "description", true);
  public get description() {
    return this.__descriptionOutput;
  }
  public putDescription(value: MonitorActionRuleActionGroupConditionDescription | undefined) {
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
  private _monitor?: MonitorActionRuleActionGroupConditionMonitor | undefined; 
  private __monitorOutput = new MonitorActionRuleActionGroupConditionMonitorOutputReference(this as any, "monitor", true);
  public get monitor() {
    return this.__monitorOutput;
  }
  public putMonitor(value: MonitorActionRuleActionGroupConditionMonitor | undefined) {
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
  private _monitorService?: MonitorActionRuleActionGroupConditionMonitorService | undefined; 
  private __monitorServiceOutput = new MonitorActionRuleActionGroupConditionMonitorServiceOutputReference(this as any, "monitor_service", true);
  public get monitorService() {
    return this.__monitorServiceOutput;
  }
  public putMonitorService(value: MonitorActionRuleActionGroupConditionMonitorService | undefined) {
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
  private _severity?: MonitorActionRuleActionGroupConditionSeverity | undefined; 
  private __severityOutput = new MonitorActionRuleActionGroupConditionSeverityOutputReference(this as any, "severity", true);
  public get severity() {
    return this.__severityOutput;
  }
  public putSeverity(value: MonitorActionRuleActionGroupConditionSeverity | undefined) {
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
  private _targetResourceType?: MonitorActionRuleActionGroupConditionTargetResourceType | undefined; 
  private __targetResourceTypeOutput = new MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference(this as any, "target_resource_type", true);
  public get targetResourceType() {
    return this.__targetResourceTypeOutput;
  }
  public putTargetResourceType(value: MonitorActionRuleActionGroupConditionTargetResourceType | undefined) {
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

function monitorActionRuleActionGroupScopeToTerraform(struct?: MonitorActionRuleActionGroupScopeOutputReference | MonitorActionRuleActionGroupScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MonitorActionRuleActionGroupScopeOutputReference extends cdktf.ComplexObject {
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

function monitorActionRuleActionGroupTimeoutsToTerraform(struct?: MonitorActionRuleActionGroupTimeoutsOutputReference | MonitorActionRuleActionGroupTimeouts): any {
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

export class MonitorActionRuleActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_action_group.html azurerm_monitor_action_rule_action_group}
*/
export class MonitorActionRuleActionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_action_rule_action_group";

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
  private _actionGroupId?: string; 
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
  private _condition?: MonitorActionRuleActionGroupCondition | undefined; 
  private __conditionOutput = new MonitorActionRuleActionGroupConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this.__conditionOutput;
  }
  public putCondition(value: MonitorActionRuleActionGroupCondition | undefined) {
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
  private _scope?: MonitorActionRuleActionGroupScope | undefined; 
  private __scopeOutput = new MonitorActionRuleActionGroupScopeOutputReference(this as any, "scope", true);
  public get scope() {
    return this.__scopeOutput;
  }
  public putScope(value: MonitorActionRuleActionGroupScope | undefined) {
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
  private _timeouts?: MonitorActionRuleActionGroupTimeouts | undefined; 
  private __timeoutsOutput = new MonitorActionRuleActionGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitorActionRuleActionGroupTimeouts | undefined) {
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
      condition: monitorActionRuleActionGroupConditionToTerraform(this._condition),
      scope: monitorActionRuleActionGroupScopeToTerraform(this._scope),
      timeouts: monitorActionRuleActionGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
