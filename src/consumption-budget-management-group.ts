// https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetManagementGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#amount ConsumptionBudgetManagementGroup#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#etag ConsumptionBudgetManagementGroup#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#management_group_id ConsumptionBudgetManagementGroup#management_group_id}
  */
  readonly managementGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#name ConsumptionBudgetManagementGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#time_grain ConsumptionBudgetManagementGroup#time_grain}
  */
  readonly timeGrain?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#filter ConsumptionBudgetManagementGroup#filter}
  */
  readonly filter?: ConsumptionBudgetManagementGroupFilter;
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#notification ConsumptionBudgetManagementGroup#notification}
  */
  readonly notification: ConsumptionBudgetManagementGroupNotification[];
  /**
  * time_period block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#time_period ConsumptionBudgetManagementGroup#time_period}
  */
  readonly timePeriod: ConsumptionBudgetManagementGroupTimePeriod;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#timeouts ConsumptionBudgetManagementGroup#timeouts}
  */
  readonly timeouts?: ConsumptionBudgetManagementGroupTimeouts;
}
export interface ConsumptionBudgetManagementGroupFilterDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#name ConsumptionBudgetManagementGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#operator ConsumptionBudgetManagementGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#values ConsumptionBudgetManagementGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetManagementGroupFilterDimensionToTerraform(struct?: ConsumptionBudgetManagementGroupFilterDimension): any {
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

export interface ConsumptionBudgetManagementGroupFilterNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#name ConsumptionBudgetManagementGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#operator ConsumptionBudgetManagementGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#values ConsumptionBudgetManagementGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetManagementGroupFilterNotDimensionToTerraform(struct?: ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference | ConsumptionBudgetManagementGroupFilterNotDimension): any {
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

export class ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetManagementGroupFilterNotDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
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

  public set internalValue(value: ConsumptionBudgetManagementGroupFilterNotDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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
export interface ConsumptionBudgetManagementGroupFilterNotTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#name ConsumptionBudgetManagementGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#operator ConsumptionBudgetManagementGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#values ConsumptionBudgetManagementGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetManagementGroupFilterNotTagToTerraform(struct?: ConsumptionBudgetManagementGroupFilterNotTagOutputReference | ConsumptionBudgetManagementGroupFilterNotTag): any {
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

export class ConsumptionBudgetManagementGroupFilterNotTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetManagementGroupFilterNotTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
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

  public set internalValue(value: ConsumptionBudgetManagementGroupFilterNotTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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
export interface ConsumptionBudgetManagementGroupFilterNot {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#dimension ConsumptionBudgetManagementGroup#dimension}
  */
  readonly dimension?: ConsumptionBudgetManagementGroupFilterNotDimension;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#tag ConsumptionBudgetManagementGroup#tag}
  */
  readonly tag?: ConsumptionBudgetManagementGroupFilterNotTag;
}

export function consumptionBudgetManagementGroupFilterNotToTerraform(struct?: ConsumptionBudgetManagementGroupFilterNotOutputReference | ConsumptionBudgetManagementGroupFilterNot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: consumptionBudgetManagementGroupFilterNotDimensionToTerraform(struct!.dimension),
    tag: consumptionBudgetManagementGroupFilterNotTagToTerraform(struct!.tag),
  }
}

export class ConsumptionBudgetManagementGroupFilterNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetManagementGroupFilterNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tag?.internalValue) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetManagementGroupFilterNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
      this._tag.internalValue = value.tag;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference(this as any, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ConsumptionBudgetManagementGroupFilterNotDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ConsumptionBudgetManagementGroupFilterNotTagOutputReference(this as any, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ConsumptionBudgetManagementGroupFilterNotTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface ConsumptionBudgetManagementGroupFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#name ConsumptionBudgetManagementGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#operator ConsumptionBudgetManagementGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#values ConsumptionBudgetManagementGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetManagementGroupFilterTagToTerraform(struct?: ConsumptionBudgetManagementGroupFilterTag): any {
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

export interface ConsumptionBudgetManagementGroupFilter {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#dimension ConsumptionBudgetManagementGroup#dimension}
  */
  readonly dimension?: ConsumptionBudgetManagementGroupFilterDimension[];
  /**
  * not block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#not ConsumptionBudgetManagementGroup#not}
  */
  readonly not?: ConsumptionBudgetManagementGroupFilterNot;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#tag ConsumptionBudgetManagementGroup#tag}
  */
  readonly tag?: ConsumptionBudgetManagementGroupFilterTag[];
}

export function consumptionBudgetManagementGroupFilterToTerraform(struct?: ConsumptionBudgetManagementGroupFilterOutputReference | ConsumptionBudgetManagementGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(consumptionBudgetManagementGroupFilterDimensionToTerraform)(struct!.dimension),
    not: consumptionBudgetManagementGroupFilterNotToTerraform(struct!.not),
    tag: cdktf.listMapper(consumptionBudgetManagementGroupFilterTagToTerraform)(struct!.tag),
  }
}

export class ConsumptionBudgetManagementGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetManagementGroupFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._not?.internalValue) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._tag) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetManagementGroupFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension = undefined;
      this._not.internalValue = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension = value.dimension;
      this._not.internalValue = value.not;
      this._tag = value.tag;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: ConsumptionBudgetManagementGroupFilterDimension[]; 
  public get dimension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }
  public set dimension(value: ConsumptionBudgetManagementGroupFilterDimension[]) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // not - computed: false, optional: true, required: false
  private _not = new ConsumptionBudgetManagementGroupFilterNotOutputReference(this as any, "not", true);
  public get not() {
    return this._not;
  }
  public putNot(value: ConsumptionBudgetManagementGroupFilterNot) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: ConsumptionBudgetManagementGroupFilterTag[]; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: ConsumptionBudgetManagementGroupFilterTag[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface ConsumptionBudgetManagementGroupNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#contact_emails ConsumptionBudgetManagementGroup#contact_emails}
  */
  readonly contactEmails: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#enabled ConsumptionBudgetManagementGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#operator ConsumptionBudgetManagementGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#threshold ConsumptionBudgetManagementGroup#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#threshold_type ConsumptionBudgetManagementGroup#threshold_type}
  */
  readonly thresholdType?: string;
}

export function consumptionBudgetManagementGroupNotificationToTerraform(struct?: ConsumptionBudgetManagementGroupNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactEmails),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export interface ConsumptionBudgetManagementGroupTimePeriod {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#end_date ConsumptionBudgetManagementGroup#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#start_date ConsumptionBudgetManagementGroup#start_date}
  */
  readonly startDate: string;
}

export function consumptionBudgetManagementGroupTimePeriodToTerraform(struct?: ConsumptionBudgetManagementGroupTimePeriodOutputReference | ConsumptionBudgetManagementGroupTimePeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}

export class ConsumptionBudgetManagementGroupTimePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetManagementGroupTimePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetManagementGroupTimePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface ConsumptionBudgetManagementGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#create ConsumptionBudgetManagementGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#delete ConsumptionBudgetManagementGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#read ConsumptionBudgetManagementGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html#update ConsumptionBudgetManagementGroup#update}
  */
  readonly update?: string;
}

export function consumptionBudgetManagementGroupTimeoutsToTerraform(struct?: ConsumptionBudgetManagementGroupTimeoutsOutputReference | ConsumptionBudgetManagementGroupTimeouts): any {
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

export class ConsumptionBudgetManagementGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetManagementGroupTimeouts | undefined {
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

  public set internalValue(value: ConsumptionBudgetManagementGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html azurerm_consumption_budget_management_group}
*/
export class ConsumptionBudgetManagementGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_consumption_budget_management_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_management_group.html azurerm_consumption_budget_management_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumptionBudgetManagementGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumptionBudgetManagementGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_consumption_budget_management_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amount = config.amount;
    this._etag = config.etag;
    this._managementGroupId = config.managementGroupId;
    this._name = config.name;
    this._timeGrain = config.timeGrain;
    this._filter.internalValue = config.filter;
    this._notification = config.notification;
    this._timePeriod.internalValue = config.timePeriod;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_group_id - computed: false, optional: false, required: true
  private _managementGroupId?: string; 
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId;
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

  // time_grain - computed: false, optional: true, required: false
  private _timeGrain?: string; 
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }
  public set timeGrain(value: string) {
    this._timeGrain = value;
  }
  public resetTimeGrain() {
    this._timeGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGrainInput() {
    return this._timeGrain;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ConsumptionBudgetManagementGroupFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ConsumptionBudgetManagementGroupFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // notification - computed: false, optional: false, required: true
  private _notification?: ConsumptionBudgetManagementGroupNotification[]; 
  public get notification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: ConsumptionBudgetManagementGroupNotification[]) {
    this._notification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod = new ConsumptionBudgetManagementGroupTimePeriodOutputReference(this as any, "time_period", true);
  public get timePeriod() {
    return this._timePeriod;
  }
  public putTimePeriod(value: ConsumptionBudgetManagementGroupTimePeriod) {
    this._timePeriod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConsumptionBudgetManagementGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConsumptionBudgetManagementGroupTimeouts) {
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
      amount: cdktf.numberToTerraform(this._amount),
      etag: cdktf.stringToTerraform(this._etag),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      name: cdktf.stringToTerraform(this._name),
      time_grain: cdktf.stringToTerraform(this._timeGrain),
      filter: consumptionBudgetManagementGroupFilterToTerraform(this._filter.internalValue),
      notification: cdktf.listMapper(consumptionBudgetManagementGroupNotificationToTerraform)(this._notification),
      time_period: consumptionBudgetManagementGroupTimePeriodToTerraform(this._timePeriod.internalValue),
      timeouts: consumptionBudgetManagementGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
