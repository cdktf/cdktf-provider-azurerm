// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbGremlinGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#analytical_storage_ttl CosmosdbGremlinGraph#analytical_storage_ttl}
  */
  readonly analyticalStorageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}
  */
  readonly partitionKeyPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}
  */
  readonly partitionKeyVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#autoscale_settings CosmosdbGremlinGraph#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbGremlinGraphAutoscaleSettings;
  /**
  * conflict_resolution_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_policy CosmosdbGremlinGraph#conflict_resolution_policy}
  */
  readonly conflictResolutionPolicy?: CosmosdbGremlinGraphConflictResolutionPolicy;
  /**
  * index_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#index_policy CosmosdbGremlinGraph#index_policy}
  */
  readonly indexPolicy?: CosmosdbGremlinGraphIndexPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#timeouts CosmosdbGremlinGraph#timeouts}
  */
  readonly timeouts?: CosmosdbGremlinGraphTimeouts;
  /**
  * unique_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#unique_key CosmosdbGremlinGraph#unique_key}
  */
  readonly uniqueKey?: CosmosdbGremlinGraphUniqueKey[] | cdktf.IResolvable;
}
export interface CosmosdbGremlinGraphAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}
  */
  readonly maxThroughput?: number;
}

export function cosmosdbGremlinGraphAutoscaleSettingsToTerraform(struct?: CosmosdbGremlinGraphAutoscaleSettingsOutputReference | CosmosdbGremlinGraphAutoscaleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}


export function cosmosdbGremlinGraphAutoscaleSettingsToHclTerraform(struct?: CosmosdbGremlinGraphAutoscaleSettingsOutputReference | CosmosdbGremlinGraphAutoscaleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_throughput: {
      value: cdktf.numberToHclTerraform(struct!.maxThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphAutoscaleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbGremlinGraphAutoscaleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThroughput = this._maxThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphAutoscaleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxThroughput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxThroughput = value.maxThroughput;
    }
  }

  // max_throughput - computed: true, optional: true, required: false
  private _maxThroughput?: number; 
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput;
  }
}
export interface CosmosdbGremlinGraphConflictResolutionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}
  */
  readonly conflictResolutionPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}
  */
  readonly conflictResolutionProcedure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}
  */
  readonly mode: string;
}

export function cosmosdbGremlinGraphConflictResolutionPolicyToTerraform(struct?: CosmosdbGremlinGraphConflictResolutionPolicyOutputReference | CosmosdbGremlinGraphConflictResolutionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_resolution_path: cdktf.stringToTerraform(struct!.conflictResolutionPath),
    conflict_resolution_procedure: cdktf.stringToTerraform(struct!.conflictResolutionProcedure),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function cosmosdbGremlinGraphConflictResolutionPolicyToHclTerraform(struct?: CosmosdbGremlinGraphConflictResolutionPolicyOutputReference | CosmosdbGremlinGraphConflictResolutionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conflict_resolution_path: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolutionPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflict_resolution_procedure: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolutionProcedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphConflictResolutionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbGremlinGraphConflictResolutionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolutionPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolutionPath = this._conflictResolutionPath;
    }
    if (this._conflictResolutionProcedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolutionProcedure = this._conflictResolutionProcedure;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphConflictResolutionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictResolutionPath = undefined;
      this._conflictResolutionProcedure = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictResolutionPath = value.conflictResolutionPath;
      this._conflictResolutionProcedure = value.conflictResolutionProcedure;
      this._mode = value.mode;
    }
  }

  // conflict_resolution_path - computed: false, optional: true, required: false
  private _conflictResolutionPath?: string; 
  public get conflictResolutionPath() {
    return this.getStringAttribute('conflict_resolution_path');
  }
  public set conflictResolutionPath(value: string) {
    this._conflictResolutionPath = value;
  }
  public resetConflictResolutionPath() {
    this._conflictResolutionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPathInput() {
    return this._conflictResolutionPath;
  }

  // conflict_resolution_procedure - computed: false, optional: true, required: false
  private _conflictResolutionProcedure?: string; 
  public get conflictResolutionProcedure() {
    return this.getStringAttribute('conflict_resolution_procedure');
  }
  public set conflictResolutionProcedure(value: string) {
    this._conflictResolutionProcedure = value;
  }
  public resetConflictResolutionProcedure() {
    this._conflictResolutionProcedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionProcedureInput() {
    return this._conflictResolutionProcedure;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}
  */
  readonly order: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}
  */
  readonly path: string;
}

export function cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToHclTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._path = value.path;
    }
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList extends cdktf.ComplexList {
  public internalValue? : CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference {
    return new CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbGremlinGraphIndexPolicyCompositeIndex {
  /**
  * index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#index CosmosdbGremlinGraph#index}
  */
  readonly index: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] | cdktf.IResolvable;
}

export function cosmosdbGremlinGraphIndexPolicyCompositeIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToTerraform, true)(struct!.index),
  }
}


export function cosmosdbGremlinGraphIndexPolicyCompositeIndexToHclTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.listMapperHcl(cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToHclTerraform, true)(struct!.index),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbGremlinGraphIndexPolicyCompositeIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphIndexPolicyCompositeIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index.internalValue = value.index;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index = new CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList(this, "index", false);
  public get index() {
    return this._index;
  }
  public putIndex(value: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] | cdktf.IResolvable) {
    this._index.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index.internalValue;
  }
}

export class CosmosdbGremlinGraphIndexPolicyCompositeIndexList extends cdktf.ComplexList {
  public internalValue? : CosmosdbGremlinGraphIndexPolicyCompositeIndex[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference {
    return new CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbGremlinGraphIndexPolicySpatialIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}
  */
  readonly path: string;
}

export function cosmosdbGremlinGraphIndexPolicySpatialIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicySpatialIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cosmosdbGremlinGraphIndexPolicySpatialIndexToHclTerraform(struct?: CosmosdbGremlinGraphIndexPolicySpatialIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbGremlinGraphIndexPolicySpatialIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphIndexPolicySpatialIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
}

export class CosmosdbGremlinGraphIndexPolicySpatialIndexList extends cdktf.ComplexList {
  public internalValue? : CosmosdbGremlinGraphIndexPolicySpatialIndex[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference {
    return new CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbGremlinGraphIndexPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}
  */
  readonly excludedPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}
  */
  readonly indexingMode: string;
  /**
  * composite_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#composite_index CosmosdbGremlinGraph#composite_index}
  */
  readonly compositeIndex?: CosmosdbGremlinGraphIndexPolicyCompositeIndex[] | cdktf.IResolvable;
  /**
  * spatial_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#spatial_index CosmosdbGremlinGraph#spatial_index}
  */
  readonly spatialIndex?: CosmosdbGremlinGraphIndexPolicySpatialIndex[] | cdktf.IResolvable;
}

export function cosmosdbGremlinGraphIndexPolicyToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyOutputReference | CosmosdbGremlinGraphIndexPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    excluded_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPaths),
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    indexing_mode: cdktf.stringToTerraform(struct!.indexingMode),
    composite_index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicyCompositeIndexToTerraform, true)(struct!.compositeIndex),
    spatial_index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicySpatialIndexToTerraform, true)(struct!.spatialIndex),
  }
}


export function cosmosdbGremlinGraphIndexPolicyToHclTerraform(struct?: CosmosdbGremlinGraphIndexPolicyOutputReference | CosmosdbGremlinGraphIndexPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic: {
      value: cdktf.booleanToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    indexing_mode: {
      value: cdktf.stringToHclTerraform(struct!.indexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    composite_index: {
      value: cdktf.listMapperHcl(cosmosdbGremlinGraphIndexPolicyCompositeIndexToHclTerraform, true)(struct!.compositeIndex),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbGremlinGraphIndexPolicyCompositeIndexList",
    },
    spatial_index: {
      value: cdktf.listMapperHcl(cosmosdbGremlinGraphIndexPolicySpatialIndexToHclTerraform, true)(struct!.spatialIndex),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbGremlinGraphIndexPolicySpatialIndexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphIndexPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbGremlinGraphIndexPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._excludedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPaths = this._excludedPaths;
    }
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._indexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingMode = this._indexingMode;
    }
    if (this._compositeIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeIndex = this._compositeIndex?.internalValue;
    }
    if (this._spatialIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spatialIndex = this._spatialIndex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphIndexPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatic = undefined;
      this._excludedPaths = undefined;
      this._includedPaths = undefined;
      this._indexingMode = undefined;
      this._compositeIndex.internalValue = undefined;
      this._spatialIndex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic = value.automatic;
      this._excludedPaths = value.excludedPaths;
      this._includedPaths = value.includedPaths;
      this._indexingMode = value.indexingMode;
      this._compositeIndex.internalValue = value.compositeIndex;
      this._spatialIndex.internalValue = value.spatialIndex;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }
  public set automatic(value: boolean | cdktf.IResolvable) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // excluded_paths - computed: true, optional: true, required: false
  private _excludedPaths?: string[]; 
  public get excludedPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_paths'));
  }
  public set excludedPaths(value: string[]) {
    this._excludedPaths = value;
  }
  public resetExcludedPaths() {
    this._excludedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPathsInput() {
    return this._excludedPaths;
  }

  // included_paths - computed: true, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('included_paths'));
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // indexing_mode - computed: false, optional: false, required: true
  private _indexingMode?: string; 
  public get indexingMode() {
    return this.getStringAttribute('indexing_mode');
  }
  public set indexingMode(value: string) {
    this._indexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingModeInput() {
    return this._indexingMode;
  }

  // composite_index - computed: false, optional: true, required: false
  private _compositeIndex = new CosmosdbGremlinGraphIndexPolicyCompositeIndexList(this, "composite_index", false);
  public get compositeIndex() {
    return this._compositeIndex;
  }
  public putCompositeIndex(value: CosmosdbGremlinGraphIndexPolicyCompositeIndex[] | cdktf.IResolvable) {
    this._compositeIndex.internalValue = value;
  }
  public resetCompositeIndex() {
    this._compositeIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeIndexInput() {
    return this._compositeIndex.internalValue;
  }

  // spatial_index - computed: false, optional: true, required: false
  private _spatialIndex = new CosmosdbGremlinGraphIndexPolicySpatialIndexList(this, "spatial_index", false);
  public get spatialIndex() {
    return this._spatialIndex;
  }
  public putSpatialIndex(value: CosmosdbGremlinGraphIndexPolicySpatialIndex[] | cdktf.IResolvable) {
    this._spatialIndex.internalValue = value;
  }
  public resetSpatialIndex() {
    this._spatialIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spatialIndexInput() {
    return this._spatialIndex.internalValue;
  }
}
export interface CosmosdbGremlinGraphTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}
  */
  readonly update?: string;
}

export function cosmosdbGremlinGraphTimeoutsToTerraform(struct?: CosmosdbGremlinGraphTimeouts | cdktf.IResolvable): any {
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


export function cosmosdbGremlinGraphTimeoutsToHclTerraform(struct?: CosmosdbGremlinGraphTimeouts | cdktf.IResolvable): any {
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

export class CosmosdbGremlinGraphTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CosmosdbGremlinGraphTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CosmosdbGremlinGraphTimeouts | cdktf.IResolvable | undefined) {
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
export interface CosmosdbGremlinGraphUniqueKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}
  */
  readonly paths: string[];
}

export function cosmosdbGremlinGraphUniqueKeyToTerraform(struct?: CosmosdbGremlinGraphUniqueKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function cosmosdbGremlinGraphUniqueKeyToHclTerraform(struct?: CosmosdbGremlinGraphUniqueKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbGremlinGraphUniqueKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbGremlinGraphUniqueKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbGremlinGraphUniqueKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class CosmosdbGremlinGraphUniqueKeyList extends cdktf.ComplexList {
  public internalValue? : CosmosdbGremlinGraphUniqueKey[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbGremlinGraphUniqueKeyOutputReference {
    return new CosmosdbGremlinGraphUniqueKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph azurerm_cosmosdb_gremlin_graph}
*/
export class CosmosdbGremlinGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cosmosdb_gremlin_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosmosdbGremlinGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosmosdbGremlinGraph to import
  * @param importFromId The id of the existing CosmosdbGremlinGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosmosdbGremlinGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cosmosdb_gremlin_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_gremlin_graph azurerm_cosmosdb_gremlin_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbGremlinGraphConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbGremlinGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_gremlin_graph',
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
    this._accountName = config.accountName;
    this._analyticalStorageTtl = config.analyticalStorageTtl;
    this._databaseName = config.databaseName;
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._name = config.name;
    this._partitionKeyPath = config.partitionKeyPath;
    this._partitionKeyVersion = config.partitionKeyVersion;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._autoscaleSettings.internalValue = config.autoscaleSettings;
    this._conflictResolutionPolicy.internalValue = config.conflictResolutionPolicy;
    this._indexPolicy.internalValue = config.indexPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._uniqueKey.internalValue = config.uniqueKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // analytical_storage_ttl - computed: false, optional: true, required: false
  private _analyticalStorageTtl?: number; 
  public get analyticalStorageTtl() {
    return this.getNumberAttribute('analytical_storage_ttl');
  }
  public set analyticalStorageTtl(value: number) {
    this._analyticalStorageTtl = value;
  }
  public resetAnalyticalStorageTtl() {
    this._analyticalStorageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageTtlInput() {
    return this._analyticalStorageTtl;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // partition_key_path - computed: false, optional: false, required: true
  private _partitionKeyPath?: string; 
  public get partitionKeyPath() {
    return this.getStringAttribute('partition_key_path');
  }
  public set partitionKeyPath(value: string) {
    this._partitionKeyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyPathInput() {
    return this._partitionKeyPath;
  }

  // partition_key_version - computed: false, optional: true, required: false
  private _partitionKeyVersion?: number; 
  public get partitionKeyVersion() {
    return this.getNumberAttribute('partition_key_version');
  }
  public set partitionKeyVersion(value: number) {
    this._partitionKeyVersion = value;
  }
  public resetPartitionKeyVersion() {
    this._partitionKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyVersionInput() {
    return this._partitionKeyVersion;
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings = new CosmosdbGremlinGraphAutoscaleSettingsOutputReference(this, "autoscale_settings");
  public get autoscaleSettings() {
    return this._autoscaleSettings;
  }
  public putAutoscaleSettings(value: CosmosdbGremlinGraphAutoscaleSettings) {
    this._autoscaleSettings.internalValue = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings.internalValue;
  }

  // conflict_resolution_policy - computed: false, optional: true, required: false
  private _conflictResolutionPolicy = new CosmosdbGremlinGraphConflictResolutionPolicyOutputReference(this, "conflict_resolution_policy");
  public get conflictResolutionPolicy() {
    return this._conflictResolutionPolicy;
  }
  public putConflictResolutionPolicy(value: CosmosdbGremlinGraphConflictResolutionPolicy) {
    this._conflictResolutionPolicy.internalValue = value;
  }
  public resetConflictResolutionPolicy() {
    this._conflictResolutionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPolicyInput() {
    return this._conflictResolutionPolicy.internalValue;
  }

  // index_policy - computed: false, optional: true, required: false
  private _indexPolicy = new CosmosdbGremlinGraphIndexPolicyOutputReference(this, "index_policy");
  public get indexPolicy() {
    return this._indexPolicy;
  }
  public putIndexPolicy(value: CosmosdbGremlinGraphIndexPolicy) {
    this._indexPolicy.internalValue = value;
  }
  public resetIndexPolicy() {
    this._indexPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPolicyInput() {
    return this._indexPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbGremlinGraphTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbGremlinGraphTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unique_key - computed: false, optional: true, required: false
  private _uniqueKey = new CosmosdbGremlinGraphUniqueKeyList(this, "unique_key", true);
  public get uniqueKey() {
    return this._uniqueKey;
  }
  public putUniqueKey(value: CosmosdbGremlinGraphUniqueKey[] | cdktf.IResolvable) {
    this._uniqueKey.internalValue = value;
  }
  public resetUniqueKey() {
    this._uniqueKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      analytical_storage_ttl: cdktf.numberToTerraform(this._analyticalStorageTtl),
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition_key_path: cdktf.stringToTerraform(this._partitionKeyPath),
      partition_key_version: cdktf.numberToTerraform(this._partitionKeyVersion),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cosmosdbGremlinGraphAutoscaleSettingsToTerraform(this._autoscaleSettings.internalValue),
      conflict_resolution_policy: cosmosdbGremlinGraphConflictResolutionPolicyToTerraform(this._conflictResolutionPolicy.internalValue),
      index_policy: cosmosdbGremlinGraphIndexPolicyToTerraform(this._indexPolicy.internalValue),
      timeouts: cosmosdbGremlinGraphTimeoutsToTerraform(this._timeouts.internalValue),
      unique_key: cdktf.listMapper(cosmosdbGremlinGraphUniqueKeyToTerraform, true)(this._uniqueKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytical_storage_ttl: {
        value: cdktf.numberToHclTerraform(this._analyticalStorageTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      partition_key_path: {
        value: cdktf.stringToHclTerraform(this._partitionKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_key_version: {
        value: cdktf.numberToHclTerraform(this._partitionKeyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscale_settings: {
        value: cosmosdbGremlinGraphAutoscaleSettingsToHclTerraform(this._autoscaleSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbGremlinGraphAutoscaleSettingsList",
      },
      conflict_resolution_policy: {
        value: cosmosdbGremlinGraphConflictResolutionPolicyToHclTerraform(this._conflictResolutionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbGremlinGraphConflictResolutionPolicyList",
      },
      index_policy: {
        value: cosmosdbGremlinGraphIndexPolicyToHclTerraform(this._indexPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbGremlinGraphIndexPolicyList",
      },
      timeouts: {
        value: cosmosdbGremlinGraphTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CosmosdbGremlinGraphTimeouts",
      },
      unique_key: {
        value: cdktf.listMapperHcl(cosmosdbGremlinGraphUniqueKeyToHclTerraform, true)(this._uniqueKey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CosmosdbGremlinGraphUniqueKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
