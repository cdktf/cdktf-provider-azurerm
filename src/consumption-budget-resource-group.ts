// https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#amount ConsumptionBudgetResourceGroup#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#etag ConsumptionBudgetResourceGroup#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#time_grain ConsumptionBudgetResourceGroup#time_grain}
  */
  readonly timeGrain?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#filter ConsumptionBudgetResourceGroup#filter}
  */
  readonly filter?: ConsumptionBudgetResourceGroupFilter;
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#notification ConsumptionBudgetResourceGroup#notification}
  */
  readonly notification: ConsumptionBudgetResourceGroupNotification[];
  /**
  * time_period block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#time_period ConsumptionBudgetResourceGroup#time_period}
  */
  readonly timePeriod: ConsumptionBudgetResourceGroupTimePeriod;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#timeouts ConsumptionBudgetResourceGroup#timeouts}
  */
  readonly timeouts?: ConsumptionBudgetResourceGroupTimeouts;
}
export interface ConsumptionBudgetResourceGroupFilterDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#values ConsumptionBudgetResourceGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetResourceGroupFilterDimensionToTerraform(struct?: ConsumptionBudgetResourceGroupFilterDimension): any {
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

export interface ConsumptionBudgetResourceGroupFilterNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#values ConsumptionBudgetResourceGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetResourceGroupFilterNotDimensionToTerraform(struct?: ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference | ConsumptionBudgetResourceGroupFilterNotDimension): any {
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

export class ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilterNotDimension | undefined {
    let hasAnyValues = false;
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

  public set internalValue(value: ConsumptionBudgetResourceGroupFilterNotDimension | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
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
export interface ConsumptionBudgetResourceGroupFilterNotTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#values ConsumptionBudgetResourceGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetResourceGroupFilterNotTagToTerraform(struct?: ConsumptionBudgetResourceGroupFilterNotTagOutputReference | ConsumptionBudgetResourceGroupFilterNotTag): any {
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

export class ConsumptionBudgetResourceGroupFilterNotTagOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilterNotTag | undefined {
    let hasAnyValues = false;
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

  public set internalValue(value: ConsumptionBudgetResourceGroupFilterNotTag | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
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
export interface ConsumptionBudgetResourceGroupFilterNot {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#dimension ConsumptionBudgetResourceGroup#dimension}
  */
  readonly dimension?: ConsumptionBudgetResourceGroupFilterNotDimension;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#tag ConsumptionBudgetResourceGroup#tag}
  */
  readonly tag?: ConsumptionBudgetResourceGroupFilterNotTag;
}

export function consumptionBudgetResourceGroupFilterNotToTerraform(struct?: ConsumptionBudgetResourceGroupFilterNotOutputReference | ConsumptionBudgetResourceGroupFilterNot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: consumptionBudgetResourceGroupFilterNotDimensionToTerraform(struct!.dimension),
    tag: consumptionBudgetResourceGroupFilterNotTagToTerraform(struct!.tag),
  }
}

export class ConsumptionBudgetResourceGroupFilterNotOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilterNot | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dimension) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tag) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupFilterNot | undefined) {
    if (value === undefined) {
      this._dimension.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this._dimension.internalValue = value.dimension;
      this._tag.internalValue = value.tag;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference(this as any, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ConsumptionBudgetResourceGroupFilterNotDimension) {
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
  private _tag = new ConsumptionBudgetResourceGroupFilterNotTagOutputReference(this as any, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ConsumptionBudgetResourceGroupFilterNotTag) {
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
export interface ConsumptionBudgetResourceGroupFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#values ConsumptionBudgetResourceGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetResourceGroupFilterTagToTerraform(struct?: ConsumptionBudgetResourceGroupFilterTag): any {
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

export interface ConsumptionBudgetResourceGroupFilter {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#dimension ConsumptionBudgetResourceGroup#dimension}
  */
  readonly dimension?: ConsumptionBudgetResourceGroupFilterDimension[];
  /**
  * not block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#not ConsumptionBudgetResourceGroup#not}
  */
  readonly not?: ConsumptionBudgetResourceGroupFilterNot;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#tag ConsumptionBudgetResourceGroup#tag}
  */
  readonly tag?: ConsumptionBudgetResourceGroupFilterTag[];
}

export function consumptionBudgetResourceGroupFilterToTerraform(struct?: ConsumptionBudgetResourceGroupFilterOutputReference | ConsumptionBudgetResourceGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(consumptionBudgetResourceGroupFilterDimensionToTerraform)(struct!.dimension),
    not: consumptionBudgetResourceGroupFilterNotToTerraform(struct!.not),
    tag: cdktf.listMapper(consumptionBudgetResourceGroupFilterTagToTerraform)(struct!.tag),
  }
}

export class ConsumptionBudgetResourceGroupFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilter | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dimension) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._not) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._tag) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupFilter | undefined) {
    if (value === undefined) {
      this._dimension = undefined;
      this._not.internalValue = undefined;
      this._tag = undefined;
    }
    else {
      this._dimension = value.dimension;
      this._not.internalValue = value.not;
      this._tag = value.tag;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: ConsumptionBudgetResourceGroupFilterDimension[]; 
  public get dimension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }
  public set dimension(value: ConsumptionBudgetResourceGroupFilterDimension[]) {
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
  private _not = new ConsumptionBudgetResourceGroupFilterNotOutputReference(this as any, "not", true);
  public get not() {
    return this._not;
  }
  public putNot(value: ConsumptionBudgetResourceGroupFilterNot) {
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
  private _tag?: ConsumptionBudgetResourceGroupFilterTag[]; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: ConsumptionBudgetResourceGroupFilterTag[]) {
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
export interface ConsumptionBudgetResourceGroupNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#contact_emails ConsumptionBudgetResourceGroup#contact_emails}
  */
  readonly contactEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#contact_groups ConsumptionBudgetResourceGroup#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#contact_roles ConsumptionBudgetResourceGroup#contact_roles}
  */
  readonly contactRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#enabled ConsumptionBudgetResourceGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#threshold ConsumptionBudgetResourceGroup#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#threshold_type ConsumptionBudgetResourceGroup#threshold_type}
  */
  readonly thresholdType?: string;
}

export function consumptionBudgetResourceGroupNotificationToTerraform(struct?: ConsumptionBudgetResourceGroupNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactEmails),
    contact_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactGroups),
    contact_roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactRoles),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export interface ConsumptionBudgetResourceGroupTimePeriod {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#end_date ConsumptionBudgetResourceGroup#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#start_date ConsumptionBudgetResourceGroup#start_date}
  */
  readonly startDate: string;
}

export function consumptionBudgetResourceGroupTimePeriodToTerraform(struct?: ConsumptionBudgetResourceGroupTimePeriodOutputReference | ConsumptionBudgetResourceGroupTimePeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}

export class ConsumptionBudgetResourceGroupTimePeriodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupTimePeriod | undefined {
    let hasAnyValues = false;
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

  public set internalValue(value: ConsumptionBudgetResourceGroupTimePeriod | undefined) {
    if (value === undefined) {
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else {
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
export interface ConsumptionBudgetResourceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#create ConsumptionBudgetResourceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#delete ConsumptionBudgetResourceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#read ConsumptionBudgetResourceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html#update ConsumptionBudgetResourceGroup#update}
  */
  readonly update?: string;
}

export function consumptionBudgetResourceGroupTimeoutsToTerraform(struct?: ConsumptionBudgetResourceGroupTimeoutsOutputReference | ConsumptionBudgetResourceGroupTimeouts): any {
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

export class ConsumptionBudgetResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupTimeouts | undefined {
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

  public set internalValue(value: ConsumptionBudgetResourceGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html azurerm_consumption_budget_resource_group}
*/
export class ConsumptionBudgetResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_consumption_budget_resource_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html azurerm_consumption_budget_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumptionBudgetResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumptionBudgetResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_consumption_budget_resource_group',
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
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
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

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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
  private _filter = new ConsumptionBudgetResourceGroupFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ConsumptionBudgetResourceGroupFilter) {
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
  private _notification?: ConsumptionBudgetResourceGroupNotification[]; 
  public get notification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: ConsumptionBudgetResourceGroupNotification[]) {
    this._notification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod = new ConsumptionBudgetResourceGroupTimePeriodOutputReference(this as any, "time_period", true);
  public get timePeriod() {
    return this._timePeriod;
  }
  public putTimePeriod(value: ConsumptionBudgetResourceGroupTimePeriod) {
    this._timePeriod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConsumptionBudgetResourceGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConsumptionBudgetResourceGroupTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      time_grain: cdktf.stringToTerraform(this._timeGrain),
      filter: consumptionBudgetResourceGroupFilterToTerraform(this._filter.internalValue),
      notification: cdktf.listMapper(consumptionBudgetResourceGroupNotificationToTerraform)(this._notification),
      time_period: consumptionBudgetResourceGroupTimePeriodToTerraform(this._timePeriod.internalValue),
      timeouts: consumptionBudgetResourceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
