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

export function monitorActionRuleSuppressionConditionAlertContextToTerraform(struct?: MonitorActionRuleSuppressionConditionAlertContextOutputReference | MonitorActionRuleSuppressionConditionAlertContext): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionAlertContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionAlertContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionAlertRuleIdToTerraform(struct?: MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference | MonitorActionRuleSuppressionConditionAlertRuleId): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionAlertRuleId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionAlertRuleId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionDescriptionToTerraform(struct?: MonitorActionRuleSuppressionConditionDescriptionOutputReference | MonitorActionRuleSuppressionConditionDescription): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionMonitorToTerraform(struct?: MonitorActionRuleSuppressionConditionMonitorOutputReference | MonitorActionRuleSuppressionConditionMonitor): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionMonitorServiceToTerraform(struct?: MonitorActionRuleSuppressionConditionMonitorServiceOutputReference | MonitorActionRuleSuppressionConditionMonitorService): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionMonitorService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionMonitorService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionSeverityToTerraform(struct?: MonitorActionRuleSuppressionConditionSeverityOutputReference | MonitorActionRuleSuppressionConditionSeverity): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionTargetResourceTypeToTerraform(struct?: MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference | MonitorActionRuleSuppressionConditionTargetResourceType): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionConditionTargetResourceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionConditionTargetResourceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._values;
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

export function monitorActionRuleSuppressionConditionToTerraform(struct?: MonitorActionRuleSuppressionConditionOutputReference | MonitorActionRuleSuppressionCondition): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertContext?.internalValue) {
      hasAnyValues = true;
      internalValueResult.alertContext = this._alertContext?.internalValue;
    }
    if (this._alertRuleId?.internalValue) {
      hasAnyValues = true;
      internalValueResult.alertRuleId = this._alertRuleId?.internalValue;
    }
    if (this._description?.internalValue) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._monitor?.internalValue) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._monitorService?.internalValue) {
      hasAnyValues = true;
      internalValueResult.monitorService = this._monitorService?.internalValue;
    }
    if (this._severity?.internalValue) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._targetResourceType?.internalValue) {
      hasAnyValues = true;
      internalValueResult.targetResourceType = this._targetResourceType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertContext.internalValue = undefined;
      this._alertRuleId.internalValue = undefined;
      this._description.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._monitorService.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._targetResourceType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertContext.internalValue = value.alertContext;
      this._alertRuleId.internalValue = value.alertRuleId;
      this._description.internalValue = value.description;
      this._monitor.internalValue = value.monitor;
      this._monitorService.internalValue = value.monitorService;
      this._severity.internalValue = value.severity;
      this._targetResourceType.internalValue = value.targetResourceType;
    }
  }

  // alert_context - computed: false, optional: true, required: false
  private _alertContext = new MonitorActionRuleSuppressionConditionAlertContextOutputReference(this as any, "alert_context", true);
  public get alertContext() {
    return this._alertContext;
  }
  public putAlertContext(value: MonitorActionRuleSuppressionConditionAlertContext) {
    this._alertContext.internalValue = value;
  }
  public resetAlertContext() {
    this._alertContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertContextInput() {
    return this._alertContext.internalValue;
  }

  // alert_rule_id - computed: false, optional: true, required: false
  private _alertRuleId = new MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference(this as any, "alert_rule_id", true);
  public get alertRuleId() {
    return this._alertRuleId;
  }
  public putAlertRuleId(value: MonitorActionRuleSuppressionConditionAlertRuleId) {
    this._alertRuleId.internalValue = value;
  }
  public resetAlertRuleId() {
    this._alertRuleId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleIdInput() {
    return this._alertRuleId.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new MonitorActionRuleSuppressionConditionDescriptionOutputReference(this as any, "description", true);
  public get description() {
    return this._description;
  }
  public putDescription(value: MonitorActionRuleSuppressionConditionDescription) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new MonitorActionRuleSuppressionConditionMonitorOutputReference(this as any, "monitor", true);
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: MonitorActionRuleSuppressionConditionMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // monitor_service - computed: false, optional: true, required: false
  private _monitorService = new MonitorActionRuleSuppressionConditionMonitorServiceOutputReference(this as any, "monitor_service", true);
  public get monitorService() {
    return this._monitorService;
  }
  public putMonitorService(value: MonitorActionRuleSuppressionConditionMonitorService) {
    this._monitorService.internalValue = value;
  }
  public resetMonitorService() {
    this._monitorService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorServiceInput() {
    return this._monitorService.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new MonitorActionRuleSuppressionConditionSeverityOutputReference(this as any, "severity", true);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: MonitorActionRuleSuppressionConditionSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType = new MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference(this as any, "target_resource_type", true);
  public get targetResourceType() {
    return this._targetResourceType;
  }
  public putTargetResourceType(value: MonitorActionRuleSuppressionConditionTargetResourceType) {
    this._targetResourceType.internalValue = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType.internalValue;
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

export function monitorActionRuleSuppressionScopeToTerraform(struct?: MonitorActionRuleSuppressionScopeOutputReference | MonitorActionRuleSuppressionScope): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceIds) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceIds = value.resourceIds;
      this._type = value.type;
    }
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
    return this._resourceIds;
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
    return this._type;
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

export function monitorActionRuleSuppressionSuppressionScheduleToTerraform(struct?: MonitorActionRuleSuppressionSuppressionScheduleOutputReference | MonitorActionRuleSuppressionSuppressionSchedule): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionSuppressionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDateUtc) {
      hasAnyValues = true;
      internalValueResult.endDateUtc = this._endDateUtc;
    }
    if (this._recurrenceMonthly) {
      hasAnyValues = true;
      internalValueResult.recurrenceMonthly = this._recurrenceMonthly;
    }
    if (this._recurrenceWeekly) {
      hasAnyValues = true;
      internalValueResult.recurrenceWeekly = this._recurrenceWeekly;
    }
    if (this._startDateUtc) {
      hasAnyValues = true;
      internalValueResult.startDateUtc = this._startDateUtc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionSuppressionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDateUtc = undefined;
      this._recurrenceMonthly = undefined;
      this._recurrenceWeekly = undefined;
      this._startDateUtc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDateUtc = value.endDateUtc;
      this._recurrenceMonthly = value.recurrenceMonthly;
      this._recurrenceWeekly = value.recurrenceWeekly;
      this._startDateUtc = value.startDateUtc;
    }
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
    return this._endDateUtc;
  }

  // recurrence_monthly - computed: false, optional: true, required: false
  private _recurrenceMonthly?: number[]; 
  public get recurrenceMonthly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('recurrence_monthly') as any;
  }
  public set recurrenceMonthly(value: number[]) {
    this._recurrenceMonthly = value;
  }
  public resetRecurrenceMonthly() {
    this._recurrenceMonthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceMonthlyInput() {
    return this._recurrenceMonthly;
  }

  // recurrence_weekly - computed: false, optional: true, required: false
  private _recurrenceWeekly?: string[]; 
  public get recurrenceWeekly() {
    return this.getListAttribute('recurrence_weekly');
  }
  public set recurrenceWeekly(value: string[]) {
    this._recurrenceWeekly = value;
  }
  public resetRecurrenceWeekly() {
    this._recurrenceWeekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceWeeklyInput() {
    return this._recurrenceWeekly;
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
    return this._startDateUtc;
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

export function monitorActionRuleSuppressionSuppressionToTerraform(struct?: MonitorActionRuleSuppressionSuppressionOutputReference | MonitorActionRuleSuppressionSuppression): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionSuppression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrenceType) {
      hasAnyValues = true;
      internalValueResult.recurrenceType = this._recurrenceType;
    }
    if (this._schedule?.internalValue) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleSuppressionSuppression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrenceType = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrenceType = value.recurrenceType;
      this._schedule.internalValue = value.schedule;
    }
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
    return this._recurrenceType;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new MonitorActionRuleSuppressionSuppressionScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: MonitorActionRuleSuppressionSuppressionSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
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

export function monitorActionRuleSuppressionTimeoutsToTerraform(struct?: MonitorActionRuleSuppressionTimeoutsOutputReference | MonitorActionRuleSuppressionTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActionRuleSuppressionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
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

  public set internalValue(value: MonitorActionRuleSuppressionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    this._condition.internalValue = config.condition;
    this._scope.internalValue = config.scope;
    this._suppression.internalValue = config.suppression;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // condition - computed: false, optional: true, required: false
  private _condition = new MonitorActionRuleSuppressionConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MonitorActionRuleSuppressionCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new MonitorActionRuleSuppressionScopeOutputReference(this as any, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: MonitorActionRuleSuppressionScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // suppression - computed: false, optional: false, required: true
  private _suppression = new MonitorActionRuleSuppressionSuppressionOutputReference(this as any, "suppression", true);
  public get suppression() {
    return this._suppression;
  }
  public putSuppression(value: MonitorActionRuleSuppressionSuppression) {
    this._suppression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionInput() {
    return this._suppression.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorActionRuleSuppressionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorActionRuleSuppressionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      condition: monitorActionRuleSuppressionConditionToTerraform(this._condition.internalValue),
      scope: monitorActionRuleSuppressionScopeToTerraform(this._scope.internalValue),
      suppression: monitorActionRuleSuppressionSuppressionToTerraform(this._suppression.internalValue),
      timeouts: monitorActionRuleSuppressionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
