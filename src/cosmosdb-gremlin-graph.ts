// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbGremlinGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#account_name CosmosdbGremlinGraph#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#database_name CosmosdbGremlinGraph#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#default_ttl CosmosdbGremlinGraph#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#name CosmosdbGremlinGraph#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#partition_key_path CosmosdbGremlinGraph#partition_key_path}
  */
  readonly partitionKeyPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#partition_key_version CosmosdbGremlinGraph#partition_key_version}
  */
  readonly partitionKeyVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#resource_group_name CosmosdbGremlinGraph#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#throughput CosmosdbGremlinGraph#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#autoscale_settings CosmosdbGremlinGraph#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbGremlinGraphAutoscaleSettings;
  /**
  * conflict_resolution_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#conflict_resolution_policy CosmosdbGremlinGraph#conflict_resolution_policy}
  */
  readonly conflictResolutionPolicy?: CosmosdbGremlinGraphConflictResolutionPolicy;
  /**
  * index_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#index_policy CosmosdbGremlinGraph#index_policy}
  */
  readonly indexPolicy?: CosmosdbGremlinGraphIndexPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#timeouts CosmosdbGremlinGraph#timeouts}
  */
  readonly timeouts?: CosmosdbGremlinGraphTimeouts;
  /**
  * unique_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#unique_key CosmosdbGremlinGraph#unique_key}
  */
  readonly uniqueKey?: CosmosdbGremlinGraphUniqueKey[];
}
export interface CosmosdbGremlinGraphAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#max_throughput CosmosdbGremlinGraph#max_throughput}
  */
  readonly maxThroughput?: number;
}

export function cosmosdbGremlinGraphAutoscaleSettingsToTerraform(struct?: CosmosdbGremlinGraphAutoscaleSettingsOutputReference | CosmosdbGremlinGraphAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export class CosmosdbGremlinGraphAutoscaleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}
  */
  readonly conflictResolutionPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}
  */
  readonly conflictResolutionProcedure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#mode CosmosdbGremlinGraph#mode}
  */
  readonly mode: string;
}

export function cosmosdbGremlinGraphConflictResolutionPolicyToTerraform(struct?: CosmosdbGremlinGraphConflictResolutionPolicyOutputReference | CosmosdbGremlinGraphConflictResolutionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_resolution_path: cdktf.stringToTerraform(struct!.conflictResolutionPath),
    conflict_resolution_procedure: cdktf.stringToTerraform(struct!.conflictResolutionProcedure),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class CosmosdbGremlinGraphConflictResolutionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#order CosmosdbGremlinGraph#order}
  */
  readonly order: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#path CosmosdbGremlinGraph#path}
  */
  readonly path: string;
}

export function cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbGremlinGraphIndexPolicyCompositeIndex {
  /**
  * index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#index CosmosdbGremlinGraph#index}
  */
  readonly index: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[];
}

export function cosmosdbGremlinGraphIndexPolicyCompositeIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToTerraform)(struct!.index),
  }
}

export interface CosmosdbGremlinGraphIndexPolicySpatialIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#path CosmosdbGremlinGraph#path}
  */
  readonly path: string;
}

export function cosmosdbGremlinGraphIndexPolicySpatialIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicySpatialIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbGremlinGraphIndexPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#automatic CosmosdbGremlinGraph#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#excluded_paths CosmosdbGremlinGraph#excluded_paths}
  */
  readonly excludedPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#included_paths CosmosdbGremlinGraph#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#indexing_mode CosmosdbGremlinGraph#indexing_mode}
  */
  readonly indexingMode: string;
  /**
  * composite_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#composite_index CosmosdbGremlinGraph#composite_index}
  */
  readonly compositeIndex?: CosmosdbGremlinGraphIndexPolicyCompositeIndex[];
  /**
  * spatial_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#spatial_index CosmosdbGremlinGraph#spatial_index}
  */
  readonly spatialIndex?: CosmosdbGremlinGraphIndexPolicySpatialIndex[];
}

export function cosmosdbGremlinGraphIndexPolicyToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyOutputReference | CosmosdbGremlinGraphIndexPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    excluded_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedPaths),
    included_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPaths),
    indexing_mode: cdktf.stringToTerraform(struct!.indexingMode),
    composite_index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicyCompositeIndexToTerraform)(struct!.compositeIndex),
    spatial_index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicySpatialIndexToTerraform)(struct!.spatialIndex),
  }
}

export class CosmosdbGremlinGraphIndexPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._compositeIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeIndex = this._compositeIndex;
    }
    if (this._spatialIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.spatialIndex = this._spatialIndex;
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
      this._compositeIndex = undefined;
      this._spatialIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic = value.automatic;
      this._excludedPaths = value.excludedPaths;
      this._includedPaths = value.includedPaths;
      this._indexingMode = value.indexingMode;
      this._compositeIndex = value.compositeIndex;
      this._spatialIndex = value.spatialIndex;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic') as any;
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
    return this.getListAttribute('excluded_paths');
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
    return this.getListAttribute('included_paths');
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
  private _compositeIndex?: CosmosdbGremlinGraphIndexPolicyCompositeIndex[]; 
  public get compositeIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('composite_index') as any;
  }
  public set compositeIndex(value: CosmosdbGremlinGraphIndexPolicyCompositeIndex[]) {
    this._compositeIndex = value;
  }
  public resetCompositeIndex() {
    this._compositeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeIndexInput() {
    return this._compositeIndex;
  }

  // spatial_index - computed: false, optional: true, required: false
  private _spatialIndex?: CosmosdbGremlinGraphIndexPolicySpatialIndex[]; 
  public get spatialIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spatial_index') as any;
  }
  public set spatialIndex(value: CosmosdbGremlinGraphIndexPolicySpatialIndex[]) {
    this._spatialIndex = value;
  }
  public resetSpatialIndex() {
    this._spatialIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spatialIndexInput() {
    return this._spatialIndex;
  }
}
export interface CosmosdbGremlinGraphTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#create CosmosdbGremlinGraph#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#delete CosmosdbGremlinGraph#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#read CosmosdbGremlinGraph#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#update CosmosdbGremlinGraph#update}
  */
  readonly update?: string;
}

export function cosmosdbGremlinGraphTimeoutsToTerraform(struct?: CosmosdbGremlinGraphTimeoutsOutputReference | CosmosdbGremlinGraphTimeouts): any {
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

export class CosmosdbGremlinGraphTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CosmosdbGremlinGraphTimeouts | undefined {
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

  public set internalValue(value: CosmosdbGremlinGraphTimeouts | undefined) {
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
export interface CosmosdbGremlinGraphUniqueKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#paths CosmosdbGremlinGraph#paths}
  */
  readonly paths: string[];
}

export function cosmosdbGremlinGraphUniqueKeyToTerraform(struct?: CosmosdbGremlinGraphUniqueKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html azurerm_cosmosdb_gremlin_graph}
*/
export class CosmosdbGremlinGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cosmosdb_gremlin_graph";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html azurerm_cosmosdb_gremlin_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbGremlinGraphConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbGremlinGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_gremlin_graph',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._databaseName = config.databaseName;
    this._defaultTtl = config.defaultTtl;
    this._name = config.name;
    this._partitionKeyPath = config.partitionKeyPath;
    this._partitionKeyVersion = config.partitionKeyVersion;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._autoscaleSettings.internalValue = config.autoscaleSettings;
    this._conflictResolutionPolicy.internalValue = config.conflictResolutionPolicy;
    this._indexPolicy.internalValue = config.indexPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._uniqueKey = config.uniqueKey;
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

  // default_ttl - computed: true, optional: true, required: false
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
  private _autoscaleSettings = new CosmosdbGremlinGraphAutoscaleSettingsOutputReference(this as any, "autoscale_settings", true);
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
  private _conflictResolutionPolicy = new CosmosdbGremlinGraphConflictResolutionPolicyOutputReference(this as any, "conflict_resolution_policy", true);
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
  private _indexPolicy = new CosmosdbGremlinGraphIndexPolicyOutputReference(this as any, "index_policy", true);
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
  private _timeouts = new CosmosdbGremlinGraphTimeoutsOutputReference(this as any, "timeouts", true);
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
  private _uniqueKey?: CosmosdbGremlinGraphUniqueKey[]; 
  public get uniqueKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unique_key') as any;
  }
  public set uniqueKey(value: CosmosdbGremlinGraphUniqueKey[]) {
    this._uniqueKey = value;
  }
  public resetUniqueKey() {
    this._uniqueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      name: cdktf.stringToTerraform(this._name),
      partition_key_path: cdktf.stringToTerraform(this._partitionKeyPath),
      partition_key_version: cdktf.numberToTerraform(this._partitionKeyVersion),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cosmosdbGremlinGraphAutoscaleSettingsToTerraform(this._autoscaleSettings.internalValue),
      conflict_resolution_policy: cosmosdbGremlinGraphConflictResolutionPolicyToTerraform(this._conflictResolutionPolicy.internalValue),
      index_policy: cosmosdbGremlinGraphIndexPolicyToTerraform(this._indexPolicy.internalValue),
      timeouts: cosmosdbGremlinGraphTimeoutsToTerraform(this._timeouts.internalValue),
      unique_key: cdktf.listMapper(cosmosdbGremlinGraphUniqueKeyToTerraform)(this._uniqueKey),
    };
  }
}
