// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}
  */
  readonly timeGrain?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#filter ConsumptionBudgetResourceGroup#filter}
  */
  readonly filter?: ConsumptionBudgetResourceGroupFilter;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#notification ConsumptionBudgetResourceGroup#notification}
  */
  readonly notification: ConsumptionBudgetResourceGroupNotification[] | cdktf.IResolvable;
  /**
  * time_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#time_period ConsumptionBudgetResourceGroup#time_period}
  */
  readonly timePeriod: ConsumptionBudgetResourceGroupTimePeriod;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#timeouts ConsumptionBudgetResourceGroup#timeouts}
  */
  readonly timeouts?: ConsumptionBudgetResourceGroupTimeouts;
}
export interface ConsumptionBudgetResourceGroupFilterDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetResourceGroupFilterDimensionToTerraform(struct?: ConsumptionBudgetResourceGroupFilterDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function consumptionBudgetResourceGroupFilterDimensionToHclTerraform(struct?: ConsumptionBudgetResourceGroupFilterDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetResourceGroupFilterDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilterDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupFilterDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ConsumptionBudgetResourceGroupFilterDimensionList extends cdktf.ComplexList {
  public internalValue? : ConsumptionBudgetResourceGroupFilterDimension[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsumptionBudgetResourceGroupFilterDimensionOutputReference {
    return new ConsumptionBudgetResourceGroupFilterDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionBudgetResourceGroupFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}
  */
  readonly values: string[];
}

export function consumptionBudgetResourceGroupFilterTagToTerraform(struct?: ConsumptionBudgetResourceGroupFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function consumptionBudgetResourceGroupFilterTagToHclTerraform(struct?: ConsumptionBudgetResourceGroupFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetResourceGroupFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilterTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupFilterTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ConsumptionBudgetResourceGroupFilterTagList extends cdktf.ComplexList {
  public internalValue? : ConsumptionBudgetResourceGroupFilterTag[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsumptionBudgetResourceGroupFilterTagOutputReference {
    return new ConsumptionBudgetResourceGroupFilterTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionBudgetResourceGroupFilter {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}
  */
  readonly dimension?: ConsumptionBudgetResourceGroupFilterDimension[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}
  */
  readonly tag?: ConsumptionBudgetResourceGroupFilterTag[] | cdktf.IResolvable;
}

export function consumptionBudgetResourceGroupFilterToTerraform(struct?: ConsumptionBudgetResourceGroupFilterOutputReference | ConsumptionBudgetResourceGroupFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(consumptionBudgetResourceGroupFilterDimensionToTerraform, true)(struct!.dimension),
    tag: cdktf.listMapper(consumptionBudgetResourceGroupFilterTagToTerraform, true)(struct!.tag),
  }
}


export function consumptionBudgetResourceGroupFilterToHclTerraform(struct?: ConsumptionBudgetResourceGroupFilterOutputReference | ConsumptionBudgetResourceGroupFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(consumptionBudgetResourceGroupFilterDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "ConsumptionBudgetResourceGroupFilterDimensionList",
    },
    tag: {
      value: cdktf.listMapperHcl(consumptionBudgetResourceGroupFilterTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "ConsumptionBudgetResourceGroupFilterTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetResourceGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupFilter | undefined) {
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
  private _dimension = new ConsumptionBudgetResourceGroupFilterDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ConsumptionBudgetResourceGroupFilterDimension[] | cdktf.IResolvable) {
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
  private _tag = new ConsumptionBudgetResourceGroupFilterTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ConsumptionBudgetResourceGroupFilterTag[] | cdktf.IResolvable) {
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
export interface ConsumptionBudgetResourceGroupNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}
  */
  readonly contactEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}
  */
  readonly contactRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}
  */
  readonly thresholdType?: string;
}

export function consumptionBudgetResourceGroupNotificationToTerraform(struct?: ConsumptionBudgetResourceGroupNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contactEmails),
    contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contactGroups),
    contact_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contactRoles),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}


export function consumptionBudgetResourceGroupNotificationToHclTerraform(struct?: ConsumptionBudgetResourceGroupNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contactEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    contact_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contactGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    contact_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contactRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetResourceGroupNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactEmails = this._contactEmails;
    }
    if (this._contactGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroups = this._contactGroups;
    }
    if (this._contactRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactRoles = this._contactRoles;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactEmails = undefined;
      this._contactGroups = undefined;
      this._contactRoles = undefined;
      this._enabled = undefined;
      this._operator = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactEmails = value.contactEmails;
      this._contactGroups = value.contactGroups;
      this._contactRoles = value.contactRoles;
      this._enabled = value.enabled;
      this._operator = value.operator;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // contact_emails - computed: false, optional: true, required: false
  private _contactEmails?: string[]; 
  public get contactEmails() {
    return this.getListAttribute('contact_emails');
  }
  public set contactEmails(value: string[]) {
    this._contactEmails = value;
  }
  public resetContactEmails() {
    this._contactEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailsInput() {
    return this._contactEmails;
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // contact_roles - computed: false, optional: true, required: false
  private _contactRoles?: string[]; 
  public get contactRoles() {
    return this.getListAttribute('contact_roles');
  }
  public set contactRoles(value: string[]) {
    this._contactRoles = value;
  }
  public resetContactRoles() {
    this._contactRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactRolesInput() {
    return this._contactRoles;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}

export class ConsumptionBudgetResourceGroupNotificationList extends cdktf.ComplexList {
  public internalValue? : ConsumptionBudgetResourceGroupNotification[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsumptionBudgetResourceGroupNotificationOutputReference {
    return new ConsumptionBudgetResourceGroupNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionBudgetResourceGroupTimePeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}
  */
  readonly startDate: string;
}

export function consumptionBudgetResourceGroupTimePeriodToTerraform(struct?: ConsumptionBudgetResourceGroupTimePeriodOutputReference | ConsumptionBudgetResourceGroupTimePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function consumptionBudgetResourceGroupTimePeriodToHclTerraform(struct?: ConsumptionBudgetResourceGroupTimePeriodOutputReference | ConsumptionBudgetResourceGroupTimePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetResourceGroupTimePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupTimePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupTimePeriod | undefined) {
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
export interface ConsumptionBudgetResourceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}
  */
  readonly update?: string;
}

export function consumptionBudgetResourceGroupTimeoutsToTerraform(struct?: ConsumptionBudgetResourceGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function consumptionBudgetResourceGroupTimeoutsToHclTerraform(struct?: ConsumptionBudgetResourceGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsumptionBudgetResourceGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetResourceGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}
*/
export class ConsumptionBudgetResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_consumption_budget_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumptionBudgetResourceGroup to import
  * @param importFromId The id of the existing ConsumptionBudgetResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumptionBudgetResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_consumption_budget_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/consumption_budget_resource_group azurerm_consumption_budget_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumptionBudgetResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumptionBudgetResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_consumption_budget_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amount = config.amount;
    this._etag = config.etag;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
    this._timeGrain = config.timeGrain;
    this._filter.internalValue = config.filter;
    this._notification.internalValue = config.notification;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _filter = new ConsumptionBudgetResourceGroupFilterOutputReference(this, "filter");
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
  private _notification = new ConsumptionBudgetResourceGroupNotificationList(this, "notification", true);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: ConsumptionBudgetResourceGroupNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod = new ConsumptionBudgetResourceGroupTimePeriodOutputReference(this, "time_period");
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
  private _timeouts = new ConsumptionBudgetResourceGroupTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      time_grain: cdktf.stringToTerraform(this._timeGrain),
      filter: consumptionBudgetResourceGroupFilterToTerraform(this._filter.internalValue),
      notification: cdktf.listMapper(consumptionBudgetResourceGroupNotificationToTerraform, true)(this._notification.internalValue),
      time_period: consumptionBudgetResourceGroupTimePeriodToTerraform(this._timePeriod.internalValue),
      timeouts: consumptionBudgetResourceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_grain: {
        value: cdktf.stringToHclTerraform(this._timeGrain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: consumptionBudgetResourceGroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsumptionBudgetResourceGroupFilterList",
      },
      notification: {
        value: cdktf.listMapperHcl(consumptionBudgetResourceGroupNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConsumptionBudgetResourceGroupNotificationList",
      },
      time_period: {
        value: consumptionBudgetResourceGroupTimePeriodToHclTerraform(this._timePeriod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsumptionBudgetResourceGroupTimePeriodList",
      },
      timeouts: {
        value: consumptionBudgetResourceGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsumptionBudgetResourceGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
