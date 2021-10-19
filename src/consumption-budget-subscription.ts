// https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#amount ConsumptionBudgetSubscription#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#etag ConsumptionBudgetSubscription#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#name ConsumptionBudgetSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#subscription_id ConsumptionBudgetSubscription#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#time_grain ConsumptionBudgetSubscription#time_grain}
  */
  readonly timeGrain?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#filter ConsumptionBudgetSubscription#filter}
  */
  readonly filter?: ConsumptionBudgetSubscriptionFilter;
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#notification ConsumptionBudgetSubscription#notification}
  */
  readonly notification: ConsumptionBudgetSubscriptionNotification[];
  /**
  * time_period block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#time_period ConsumptionBudgetSubscription#time_period}
  */
  readonly timePeriod: ConsumptionBudgetSubscriptionTimePeriod;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#timeouts ConsumptionBudgetSubscription#timeouts}
  */
  readonly timeouts?: ConsumptionBudgetSubscriptionTimeouts;
}
export interface ConsumptionBudgetSubscriptionFilterDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#name ConsumptionBudgetSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#operator ConsumptionBudgetSubscription#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#values ConsumptionBudgetSubscription#values}
  */
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterDimensionToTerraform(struct?: ConsumptionBudgetSubscriptionFilterDimension): any {
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

export interface ConsumptionBudgetSubscriptionFilterNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#name ConsumptionBudgetSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#operator ConsumptionBudgetSubscription#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#values ConsumptionBudgetSubscription#values}
  */
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterNotDimensionToTerraform(struct?: ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference | ConsumptionBudgetSubscriptionFilterNotDimension): any {
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

export class ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string | undefined; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string | undefined) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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
export interface ConsumptionBudgetSubscriptionFilterNotTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#name ConsumptionBudgetSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#operator ConsumptionBudgetSubscription#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#values ConsumptionBudgetSubscription#values}
  */
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterNotTagToTerraform(struct?: ConsumptionBudgetSubscriptionFilterNotTagOutputReference | ConsumptionBudgetSubscriptionFilterNotTag): any {
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

export class ConsumptionBudgetSubscriptionFilterNotTagOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string | undefined; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string | undefined) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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
export interface ConsumptionBudgetSubscriptionFilterNot {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#dimension ConsumptionBudgetSubscription#dimension}
  */
  readonly dimension?: ConsumptionBudgetSubscriptionFilterNotDimension;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#tag ConsumptionBudgetSubscription#tag}
  */
  readonly tag?: ConsumptionBudgetSubscriptionFilterNotTag;
}

function consumptionBudgetSubscriptionFilterNotToTerraform(struct?: ConsumptionBudgetSubscriptionFilterNotOutputReference | ConsumptionBudgetSubscriptionFilterNot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: consumptionBudgetSubscriptionFilterNotDimensionToTerraform(struct!.dimension),
    tag: consumptionBudgetSubscriptionFilterNotTagToTerraform(struct!.tag),
  }
}

export class ConsumptionBudgetSubscriptionFilterNotOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: ConsumptionBudgetSubscriptionFilterNotDimension | undefined; 
  private __dimensionOutput = new ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference(this as any, "dimension", true);
  public get dimension() {
    return this.__dimensionOutput;
  }
  public putDimension(value: ConsumptionBudgetSubscriptionFilterNotDimension | undefined) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: ConsumptionBudgetSubscriptionFilterNotTag | undefined; 
  private __tagOutput = new ConsumptionBudgetSubscriptionFilterNotTagOutputReference(this as any, "tag", true);
  public get tag() {
    return this.__tagOutput;
  }
  public putTag(value: ConsumptionBudgetSubscriptionFilterNotTag | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }
}
export interface ConsumptionBudgetSubscriptionFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#name ConsumptionBudgetSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#operator ConsumptionBudgetSubscription#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#values ConsumptionBudgetSubscription#values}
  */
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterTagToTerraform(struct?: ConsumptionBudgetSubscriptionFilterTag): any {
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

export interface ConsumptionBudgetSubscriptionFilter {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#dimension ConsumptionBudgetSubscription#dimension}
  */
  readonly dimension?: ConsumptionBudgetSubscriptionFilterDimension[];
  /**
  * not block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#not ConsumptionBudgetSubscription#not}
  */
  readonly not?: ConsumptionBudgetSubscriptionFilterNot;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#tag ConsumptionBudgetSubscription#tag}
  */
  readonly tag?: ConsumptionBudgetSubscriptionFilterTag[];
}

function consumptionBudgetSubscriptionFilterToTerraform(struct?: ConsumptionBudgetSubscriptionFilterOutputReference | ConsumptionBudgetSubscriptionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(consumptionBudgetSubscriptionFilterDimensionToTerraform)(struct!.dimension),
    not: consumptionBudgetSubscriptionFilterNotToTerraform(struct!.not),
    tag: cdktf.listMapper(consumptionBudgetSubscriptionFilterTagToTerraform)(struct!.tag),
  }
}

export class ConsumptionBudgetSubscriptionFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: ConsumptionBudgetSubscriptionFilterDimension[] | undefined; 
  public get dimension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }
  public set dimension(value: ConsumptionBudgetSubscriptionFilterDimension[] | undefined) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension
  }

  // not - computed: false, optional: true, required: false
  private _not?: ConsumptionBudgetSubscriptionFilterNot | undefined; 
  private __notOutput = new ConsumptionBudgetSubscriptionFilterNotOutputReference(this as any, "not", true);
  public get not() {
    return this.__notOutput;
  }
  public putNot(value: ConsumptionBudgetSubscriptionFilterNot | undefined) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: ConsumptionBudgetSubscriptionFilterTag[] | undefined; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: ConsumptionBudgetSubscriptionFilterTag[] | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }
}
export interface ConsumptionBudgetSubscriptionNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#contact_emails ConsumptionBudgetSubscription#contact_emails}
  */
  readonly contactEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#contact_groups ConsumptionBudgetSubscription#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#contact_roles ConsumptionBudgetSubscription#contact_roles}
  */
  readonly contactRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#enabled ConsumptionBudgetSubscription#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#operator ConsumptionBudgetSubscription#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#threshold ConsumptionBudgetSubscription#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#threshold_type ConsumptionBudgetSubscription#threshold_type}
  */
  readonly thresholdType?: string;
}

function consumptionBudgetSubscriptionNotificationToTerraform(struct?: ConsumptionBudgetSubscriptionNotification): any {
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

export interface ConsumptionBudgetSubscriptionTimePeriod {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#end_date ConsumptionBudgetSubscription#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#start_date ConsumptionBudgetSubscription#start_date}
  */
  readonly startDate: string;
}

function consumptionBudgetSubscriptionTimePeriodToTerraform(struct?: ConsumptionBudgetSubscriptionTimePeriodOutputReference | ConsumptionBudgetSubscriptionTimePeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}

export class ConsumptionBudgetSubscriptionTimePeriodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string | undefined; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string | undefined) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate
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
    return this._startDate
  }
}
export interface ConsumptionBudgetSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#create ConsumptionBudgetSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#delete ConsumptionBudgetSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#read ConsumptionBudgetSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html#update ConsumptionBudgetSubscription#update}
  */
  readonly update?: string;
}

function consumptionBudgetSubscriptionTimeoutsToTerraform(struct?: ConsumptionBudgetSubscriptionTimeoutsOutputReference | ConsumptionBudgetSubscriptionTimeouts): any {
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

export class ConsumptionBudgetSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html azurerm_consumption_budget_subscription}
*/
export class ConsumptionBudgetSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_consumption_budget_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html azurerm_consumption_budget_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumptionBudgetSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumptionBudgetSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_consumption_budget_subscription',
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
    this._subscriptionId = config.subscriptionId;
    this._timeGrain = config.timeGrain;
    this._filter = config.filter;
    this._notification = config.notification;
    this._timePeriod = config.timePeriod;
    this._timeouts = config.timeouts;
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
    return this._amount
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string | undefined; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string | undefined) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // time_grain - computed: false, optional: true, required: false
  private _timeGrain?: string | undefined; 
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }
  public set timeGrain(value: string | undefined) {
    this._timeGrain = value;
  }
  public resetTimeGrain() {
    this._timeGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGrainInput() {
    return this._timeGrain
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: ConsumptionBudgetSubscriptionFilter | undefined; 
  private __filterOutput = new ConsumptionBudgetSubscriptionFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this.__filterOutput;
  }
  public putFilter(value: ConsumptionBudgetSubscriptionFilter | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // notification - computed: false, optional: false, required: true
  private _notification?: ConsumptionBudgetSubscriptionNotification[]; 
  public get notification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: ConsumptionBudgetSubscriptionNotification[]) {
    this._notification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod?: ConsumptionBudgetSubscriptionTimePeriod; 
  private __timePeriodOutput = new ConsumptionBudgetSubscriptionTimePeriodOutputReference(this as any, "time_period", true);
  public get timePeriod() {
    return this.__timePeriodOutput;
  }
  public putTimePeriod(value: ConsumptionBudgetSubscriptionTimePeriod) {
    this._timePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConsumptionBudgetSubscriptionTimeouts | undefined; 
  private __timeoutsOutput = new ConsumptionBudgetSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ConsumptionBudgetSubscriptionTimeouts | undefined) {
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
      amount: cdktf.numberToTerraform(this._amount),
      etag: cdktf.stringToTerraform(this._etag),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_grain: cdktf.stringToTerraform(this._timeGrain),
      filter: consumptionBudgetSubscriptionFilterToTerraform(this._filter),
      notification: cdktf.listMapper(consumptionBudgetSubscriptionNotificationToTerraform)(this._notification),
      time_period: consumptionBudgetSubscriptionTimePeriodToTerraform(this._timePeriod),
      timeouts: consumptionBudgetSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
