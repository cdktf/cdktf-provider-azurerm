// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupCostManagementViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}
  */
  readonly accumulated: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}
  */
  readonly chartType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}
  */
  readonly reportType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}
  */
  readonly timeframe: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#dataset ResourceGroupCostManagementView#dataset}
  */
  readonly dataset: ResourceGroupCostManagementViewDataset;
  /**
  * kpi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#kpi ResourceGroupCostManagementView#kpi}
  */
  readonly kpi?: ResourceGroupCostManagementViewKpi[] | cdktf.IResolvable;
  /**
  * pivot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#pivot ResourceGroupCostManagementView#pivot}
  */
  readonly pivot?: ResourceGroupCostManagementViewPivot[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#timeouts ResourceGroupCostManagementView#timeouts}
  */
  readonly timeouts?: ResourceGroupCostManagementViewTimeouts;
}
export interface ResourceGroupCostManagementViewDatasetAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}
  */
  readonly name: string;
}

export function resourceGroupCostManagementViewDatasetAggregationToTerraform(struct?: ResourceGroupCostManagementViewDatasetAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function resourceGroupCostManagementViewDatasetAggregationToHclTerraform(struct?: ResourceGroupCostManagementViewDatasetAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupCostManagementViewDatasetAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceGroupCostManagementViewDatasetAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupCostManagementViewDatasetAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._name = value.name;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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
}

export class ResourceGroupCostManagementViewDatasetAggregationList extends cdktf.ComplexList {
  public internalValue? : ResourceGroupCostManagementViewDatasetAggregation[] | cdktf.IResolvable

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
  public get(index: number): ResourceGroupCostManagementViewDatasetAggregationOutputReference {
    return new ResourceGroupCostManagementViewDatasetAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupCostManagementViewDatasetGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}
  */
  readonly type: string;
}

export function resourceGroupCostManagementViewDatasetGroupingToTerraform(struct?: ResourceGroupCostManagementViewDatasetGrouping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceGroupCostManagementViewDatasetGroupingToHclTerraform(struct?: ResourceGroupCostManagementViewDatasetGrouping | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupCostManagementViewDatasetGroupingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceGroupCostManagementViewDatasetGrouping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupCostManagementViewDatasetGrouping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

export class ResourceGroupCostManagementViewDatasetGroupingList extends cdktf.ComplexList {
  public internalValue? : ResourceGroupCostManagementViewDatasetGrouping[] | cdktf.IResolvable

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
  public get(index: number): ResourceGroupCostManagementViewDatasetGroupingOutputReference {
    return new ResourceGroupCostManagementViewDatasetGroupingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupCostManagementViewDatasetSorting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}
  */
  readonly name: string;
}

export function resourceGroupCostManagementViewDatasetSortingToTerraform(struct?: ResourceGroupCostManagementViewDatasetSorting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function resourceGroupCostManagementViewDatasetSortingToHclTerraform(struct?: ResourceGroupCostManagementViewDatasetSorting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupCostManagementViewDatasetSortingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceGroupCostManagementViewDatasetSorting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupCostManagementViewDatasetSorting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
}

export class ResourceGroupCostManagementViewDatasetSortingList extends cdktf.ComplexList {
  public internalValue? : ResourceGroupCostManagementViewDatasetSorting[] | cdktf.IResolvable

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
  public get(index: number): ResourceGroupCostManagementViewDatasetSortingOutputReference {
    return new ResourceGroupCostManagementViewDatasetSortingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupCostManagementViewDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}
  */
  readonly granularity: string;
  /**
  * aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#aggregation ResourceGroupCostManagementView#aggregation}
  */
  readonly aggregation: ResourceGroupCostManagementViewDatasetAggregation[] | cdktf.IResolvable;
  /**
  * grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#grouping ResourceGroupCostManagementView#grouping}
  */
  readonly grouping?: ResourceGroupCostManagementViewDatasetGrouping[] | cdktf.IResolvable;
  /**
  * sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#sorting ResourceGroupCostManagementView#sorting}
  */
  readonly sorting?: ResourceGroupCostManagementViewDatasetSorting[] | cdktf.IResolvable;
}

export function resourceGroupCostManagementViewDatasetToTerraform(struct?: ResourceGroupCostManagementViewDatasetOutputReference | ResourceGroupCostManagementViewDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularity: cdktf.stringToTerraform(struct!.granularity),
    aggregation: cdktf.listMapper(resourceGroupCostManagementViewDatasetAggregationToTerraform, true)(struct!.aggregation),
    grouping: cdktf.listMapper(resourceGroupCostManagementViewDatasetGroupingToTerraform, true)(struct!.grouping),
    sorting: cdktf.listMapper(resourceGroupCostManagementViewDatasetSortingToTerraform, true)(struct!.sorting),
  }
}


export function resourceGroupCostManagementViewDatasetToHclTerraform(struct?: ResourceGroupCostManagementViewDatasetOutputReference | ResourceGroupCostManagementViewDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    granularity: {
      value: cdktf.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation: {
      value: cdktf.listMapperHcl(resourceGroupCostManagementViewDatasetAggregationToHclTerraform, true)(struct!.aggregation),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceGroupCostManagementViewDatasetAggregationList",
    },
    grouping: {
      value: cdktf.listMapperHcl(resourceGroupCostManagementViewDatasetGroupingToHclTerraform, true)(struct!.grouping),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceGroupCostManagementViewDatasetGroupingList",
    },
    sorting: {
      value: cdktf.listMapperHcl(resourceGroupCostManagementViewDatasetSortingToHclTerraform, true)(struct!.sorting),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceGroupCostManagementViewDatasetSortingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupCostManagementViewDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceGroupCostManagementViewDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._aggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation?.internalValue;
    }
    if (this._grouping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grouping = this._grouping?.internalValue;
    }
    if (this._sorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorting = this._sorting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupCostManagementViewDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._granularity = undefined;
      this._aggregation.internalValue = undefined;
      this._grouping.internalValue = undefined;
      this._sorting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._granularity = value.granularity;
      this._aggregation.internalValue = value.aggregation;
      this._grouping.internalValue = value.grouping;
      this._sorting.internalValue = value.sorting;
    }
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation = new ResourceGroupCostManagementViewDatasetAggregationList(this, "aggregation", true);
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: ResourceGroupCostManagementViewDatasetAggregation[] | cdktf.IResolvable) {
    this._aggregation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation.internalValue;
  }

  // grouping - computed: false, optional: true, required: false
  private _grouping = new ResourceGroupCostManagementViewDatasetGroupingList(this, "grouping", false);
  public get grouping() {
    return this._grouping;
  }
  public putGrouping(value: ResourceGroupCostManagementViewDatasetGrouping[] | cdktf.IResolvable) {
    this._grouping.internalValue = value;
  }
  public resetGrouping() {
    this._grouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping.internalValue;
  }

  // sorting - computed: false, optional: true, required: false
  private _sorting = new ResourceGroupCostManagementViewDatasetSortingList(this, "sorting", false);
  public get sorting() {
    return this._sorting;
  }
  public putSorting(value: ResourceGroupCostManagementViewDatasetSorting[] | cdktf.IResolvable) {
    this._sorting.internalValue = value;
  }
  public resetSorting() {
    this._sorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingInput() {
    return this._sorting.internalValue;
  }
}
export interface ResourceGroupCostManagementViewKpi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}
  */
  readonly type: string;
}

export function resourceGroupCostManagementViewKpiToTerraform(struct?: ResourceGroupCostManagementViewKpi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceGroupCostManagementViewKpiToHclTerraform(struct?: ResourceGroupCostManagementViewKpi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupCostManagementViewKpiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceGroupCostManagementViewKpi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupCostManagementViewKpi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class ResourceGroupCostManagementViewKpiList extends cdktf.ComplexList {
  public internalValue? : ResourceGroupCostManagementViewKpi[] | cdktf.IResolvable

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
  public get(index: number): ResourceGroupCostManagementViewKpiOutputReference {
    return new ResourceGroupCostManagementViewKpiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupCostManagementViewPivot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}
  */
  readonly type: string;
}

export function resourceGroupCostManagementViewPivotToTerraform(struct?: ResourceGroupCostManagementViewPivot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceGroupCostManagementViewPivotToHclTerraform(struct?: ResourceGroupCostManagementViewPivot | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupCostManagementViewPivotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceGroupCostManagementViewPivot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupCostManagementViewPivot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

export class ResourceGroupCostManagementViewPivotList extends cdktf.ComplexList {
  public internalValue? : ResourceGroupCostManagementViewPivot[] | cdktf.IResolvable

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
  public get(index: number): ResourceGroupCostManagementViewPivotOutputReference {
    return new ResourceGroupCostManagementViewPivotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupCostManagementViewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}
  */
  readonly update?: string;
}

export function resourceGroupCostManagementViewTimeoutsToTerraform(struct?: ResourceGroupCostManagementViewTimeouts | cdktf.IResolvable): any {
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


export function resourceGroupCostManagementViewTimeoutsToHclTerraform(struct?: ResourceGroupCostManagementViewTimeouts | cdktf.IResolvable): any {
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

export class ResourceGroupCostManagementViewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceGroupCostManagementViewTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceGroupCostManagementViewTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view azurerm_resource_group_cost_management_view}
*/
export class ResourceGroupCostManagementView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_resource_group_cost_management_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceGroupCostManagementView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceGroupCostManagementView to import
  * @param importFromId The id of the existing ResourceGroupCostManagementView that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceGroupCostManagementView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_resource_group_cost_management_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_group_cost_management_view azurerm_resource_group_cost_management_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupCostManagementViewConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupCostManagementViewConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_cost_management_view',
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
    this._accumulated = config.accumulated;
    this._chartType = config.chartType;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._reportType = config.reportType;
    this._resourceGroupId = config.resourceGroupId;
    this._timeframe = config.timeframe;
    this._dataset.internalValue = config.dataset;
    this._kpi.internalValue = config.kpi;
    this._pivot.internalValue = config.pivot;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accumulated - computed: false, optional: false, required: true
  private _accumulated?: boolean | cdktf.IResolvable; 
  public get accumulated() {
    return this.getBooleanAttribute('accumulated');
  }
  public set accumulated(value: boolean | cdktf.IResolvable) {
    this._accumulated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accumulatedInput() {
    return this._accumulated;
  }

  // chart_type - computed: false, optional: false, required: true
  private _chartType?: string; 
  public get chartType() {
    return this.getStringAttribute('chart_type');
  }
  public set chartType(value: string) {
    this._chartType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTypeInput() {
    return this._chartType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // report_type - computed: false, optional: false, required: true
  private _reportType?: string; 
  public get reportType() {
    return this.getStringAttribute('report_type');
  }
  public set reportType(value: string) {
    this._reportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTypeInput() {
    return this._reportType;
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

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset = new ResourceGroupCostManagementViewDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: ResourceGroupCostManagementViewDataset) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // kpi - computed: false, optional: true, required: false
  private _kpi = new ResourceGroupCostManagementViewKpiList(this, "kpi", false);
  public get kpi() {
    return this._kpi;
  }
  public putKpi(value: ResourceGroupCostManagementViewKpi[] | cdktf.IResolvable) {
    this._kpi.internalValue = value;
  }
  public resetKpi() {
    this._kpi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpiInput() {
    return this._kpi.internalValue;
  }

  // pivot - computed: false, optional: true, required: false
  private _pivot = new ResourceGroupCostManagementViewPivotList(this, "pivot", false);
  public get pivot() {
    return this._pivot;
  }
  public putPivot(value: ResourceGroupCostManagementViewPivot[] | cdktf.IResolvable) {
    this._pivot.internalValue = value;
  }
  public resetPivot() {
    this._pivot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotInput() {
    return this._pivot.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceGroupCostManagementViewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceGroupCostManagementViewTimeouts) {
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
      accumulated: cdktf.booleanToTerraform(this._accumulated),
      chart_type: cdktf.stringToTerraform(this._chartType),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      report_type: cdktf.stringToTerraform(this._reportType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      timeframe: cdktf.stringToTerraform(this._timeframe),
      dataset: resourceGroupCostManagementViewDatasetToTerraform(this._dataset.internalValue),
      kpi: cdktf.listMapper(resourceGroupCostManagementViewKpiToTerraform, true)(this._kpi.internalValue),
      pivot: cdktf.listMapper(resourceGroupCostManagementViewPivotToTerraform, true)(this._pivot.internalValue),
      timeouts: resourceGroupCostManagementViewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accumulated: {
        value: cdktf.booleanToHclTerraform(this._accumulated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chart_type: {
        value: cdktf.stringToHclTerraform(this._chartType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      report_type: {
        value: cdktf.stringToHclTerraform(this._reportType),
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
      timeframe: {
        value: cdktf.stringToHclTerraform(this._timeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: resourceGroupCostManagementViewDatasetToHclTerraform(this._dataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupCostManagementViewDatasetList",
      },
      kpi: {
        value: cdktf.listMapperHcl(resourceGroupCostManagementViewKpiToHclTerraform, true)(this._kpi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupCostManagementViewKpiList",
      },
      pivot: {
        value: cdktf.listMapperHcl(resourceGroupCostManagementViewPivotToHclTerraform, true)(this._pivot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupCostManagementViewPivotList",
      },
      timeouts: {
        value: resourceGroupCostManagementViewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceGroupCostManagementViewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
