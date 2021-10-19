// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbSqlContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#account_name CosmosdbSqlContainer#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}
  */
  readonly analyticalStorageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#database_name CosmosdbSqlContainer#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#default_ttl CosmosdbSqlContainer#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#name CosmosdbSqlContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#partition_key_path CosmosdbSqlContainer#partition_key_path}
  */
  readonly partitionKeyPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#partition_key_version CosmosdbSqlContainer#partition_key_version}
  */
  readonly partitionKeyVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#resource_group_name CosmosdbSqlContainer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#throughput CosmosdbSqlContainer#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#autoscale_settings CosmosdbSqlContainer#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbSqlContainerAutoscaleSettings;
  /**
  * conflict_resolution_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#conflict_resolution_policy CosmosdbSqlContainer#conflict_resolution_policy}
  */
  readonly conflictResolutionPolicy?: CosmosdbSqlContainerConflictResolutionPolicy;
  /**
  * indexing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#indexing_policy CosmosdbSqlContainer#indexing_policy}
  */
  readonly indexingPolicy?: CosmosdbSqlContainerIndexingPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#timeouts CosmosdbSqlContainer#timeouts}
  */
  readonly timeouts?: CosmosdbSqlContainerTimeouts;
  /**
  * unique_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#unique_key CosmosdbSqlContainer#unique_key}
  */
  readonly uniqueKey?: CosmosdbSqlContainerUniqueKey[];
}
export interface CosmosdbSqlContainerAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#max_throughput CosmosdbSqlContainer#max_throughput}
  */
  readonly maxThroughput?: number;
}

function cosmosdbSqlContainerAutoscaleSettingsToTerraform(struct?: CosmosdbSqlContainerAutoscaleSettingsOutputReference | CosmosdbSqlContainerAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export class CosmosdbSqlContainerAutoscaleSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_throughput - computed: true, optional: true, required: false
  private _maxThroughput?: number | undefined; 
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number | undefined) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput
  }
}
export interface CosmosdbSqlContainerConflictResolutionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#conflict_resolution_path CosmosdbSqlContainer#conflict_resolution_path}
  */
  readonly conflictResolutionPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#conflict_resolution_procedure CosmosdbSqlContainer#conflict_resolution_procedure}
  */
  readonly conflictResolutionProcedure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#mode CosmosdbSqlContainer#mode}
  */
  readonly mode: string;
}

function cosmosdbSqlContainerConflictResolutionPolicyToTerraform(struct?: CosmosdbSqlContainerConflictResolutionPolicyOutputReference | CosmosdbSqlContainerConflictResolutionPolicy): any {
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

export class CosmosdbSqlContainerConflictResolutionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // conflict_resolution_path - computed: false, optional: true, required: false
  private _conflictResolutionPath?: string | undefined; 
  public get conflictResolutionPath() {
    return this.getStringAttribute('conflict_resolution_path');
  }
  public set conflictResolutionPath(value: string | undefined) {
    this._conflictResolutionPath = value;
  }
  public resetConflictResolutionPath() {
    this._conflictResolutionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPathInput() {
    return this._conflictResolutionPath
  }

  // conflict_resolution_procedure - computed: false, optional: true, required: false
  private _conflictResolutionProcedure?: string | undefined; 
  public get conflictResolutionProcedure() {
    return this.getStringAttribute('conflict_resolution_procedure');
  }
  public set conflictResolutionProcedure(value: string | undefined) {
    this._conflictResolutionProcedure = value;
  }
  public resetConflictResolutionProcedure() {
    this._conflictResolutionProcedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionProcedureInput() {
    return this._conflictResolutionProcedure
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
    return this._mode
  }
}
export interface CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#order CosmosdbSqlContainer#order}
  */
  readonly order: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyCompositeIndex {
  /**
  * index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#index CosmosdbSqlContainer#index}
  */
  readonly index: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex[];
}

function cosmosdbSqlContainerIndexingPolicyCompositeIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToTerraform)(struct!.index),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyExcludedPath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicyExcludedPathToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyExcludedPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyIncludedPath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicyIncludedPathToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyIncludedPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicySpatialIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicySpatialIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicySpatialIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#indexing_mode CosmosdbSqlContainer#indexing_mode}
  */
  readonly indexingMode?: string;
  /**
  * composite_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#composite_index CosmosdbSqlContainer#composite_index}
  */
  readonly compositeIndex?: CosmosdbSqlContainerIndexingPolicyCompositeIndex[];
  /**
  * excluded_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#excluded_path CosmosdbSqlContainer#excluded_path}
  */
  readonly excludedPath?: CosmosdbSqlContainerIndexingPolicyExcludedPath[];
  /**
  * included_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#included_path CosmosdbSqlContainer#included_path}
  */
  readonly includedPath?: CosmosdbSqlContainerIndexingPolicyIncludedPath[];
  /**
  * spatial_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#spatial_index CosmosdbSqlContainer#spatial_index}
  */
  readonly spatialIndex?: CosmosdbSqlContainerIndexingPolicySpatialIndex[];
}

function cosmosdbSqlContainerIndexingPolicyToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyOutputReference | CosmosdbSqlContainerIndexingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indexing_mode: cdktf.stringToTerraform(struct!.indexingMode),
    composite_index: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyCompositeIndexToTerraform)(struct!.compositeIndex),
    excluded_path: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyExcludedPathToTerraform)(struct!.excludedPath),
    included_path: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyIncludedPathToTerraform)(struct!.includedPath),
    spatial_index: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicySpatialIndexToTerraform)(struct!.spatialIndex),
  }
}

export class CosmosdbSqlContainerIndexingPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // indexing_mode - computed: false, optional: true, required: false
  private _indexingMode?: string | undefined; 
  public get indexingMode() {
    return this.getStringAttribute('indexing_mode');
  }
  public set indexingMode(value: string | undefined) {
    this._indexingMode = value;
  }
  public resetIndexingMode() {
    this._indexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingModeInput() {
    return this._indexingMode
  }

  // composite_index - computed: false, optional: true, required: false
  private _compositeIndex?: CosmosdbSqlContainerIndexingPolicyCompositeIndex[] | undefined; 
  public get compositeIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('composite_index') as any;
  }
  public set compositeIndex(value: CosmosdbSqlContainerIndexingPolicyCompositeIndex[] | undefined) {
    this._compositeIndex = value;
  }
  public resetCompositeIndex() {
    this._compositeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeIndexInput() {
    return this._compositeIndex
  }

  // excluded_path - computed: false, optional: true, required: false
  private _excludedPath?: CosmosdbSqlContainerIndexingPolicyExcludedPath[] | undefined; 
  public get excludedPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('excluded_path') as any;
  }
  public set excludedPath(value: CosmosdbSqlContainerIndexingPolicyExcludedPath[] | undefined) {
    this._excludedPath = value;
  }
  public resetExcludedPath() {
    this._excludedPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPathInput() {
    return this._excludedPath
  }

  // included_path - computed: false, optional: true, required: false
  private _includedPath?: CosmosdbSqlContainerIndexingPolicyIncludedPath[] | undefined; 
  public get includedPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('included_path') as any;
  }
  public set includedPath(value: CosmosdbSqlContainerIndexingPolicyIncludedPath[] | undefined) {
    this._includedPath = value;
  }
  public resetIncludedPath() {
    this._includedPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathInput() {
    return this._includedPath
  }

  // spatial_index - computed: false, optional: true, required: false
  private _spatialIndex?: CosmosdbSqlContainerIndexingPolicySpatialIndex[] | undefined; 
  public get spatialIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spatial_index') as any;
  }
  public set spatialIndex(value: CosmosdbSqlContainerIndexingPolicySpatialIndex[] | undefined) {
    this._spatialIndex = value;
  }
  public resetSpatialIndex() {
    this._spatialIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spatialIndexInput() {
    return this._spatialIndex
  }
}
export interface CosmosdbSqlContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#create CosmosdbSqlContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#delete CosmosdbSqlContainer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#read CosmosdbSqlContainer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#update CosmosdbSqlContainer#update}
  */
  readonly update?: string;
}

function cosmosdbSqlContainerTimeoutsToTerraform(struct?: CosmosdbSqlContainerTimeoutsOutputReference | CosmosdbSqlContainerTimeouts): any {
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

export class CosmosdbSqlContainerTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface CosmosdbSqlContainerUniqueKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html#paths CosmosdbSqlContainer#paths}
  */
  readonly paths: string[];
}

function cosmosdbSqlContainerUniqueKeyToTerraform(struct?: CosmosdbSqlContainerUniqueKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html azurerm_cosmosdb_sql_container}
*/
export class CosmosdbSqlContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cosmosdb_sql_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html azurerm_cosmosdb_sql_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbSqlContainerConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbSqlContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_sql_container',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._analyticalStorageTtl = config.analyticalStorageTtl;
    this._databaseName = config.databaseName;
    this._defaultTtl = config.defaultTtl;
    this._name = config.name;
    this._partitionKeyPath = config.partitionKeyPath;
    this._partitionKeyVersion = config.partitionKeyVersion;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._autoscaleSettings = config.autoscaleSettings;
    this._conflictResolutionPolicy = config.conflictResolutionPolicy;
    this._indexingPolicy = config.indexingPolicy;
    this._timeouts = config.timeouts;
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
    return this._accountName
  }

  // analytical_storage_ttl - computed: false, optional: true, required: false
  private _analyticalStorageTtl?: number | undefined; 
  public get analyticalStorageTtl() {
    return this.getNumberAttribute('analytical_storage_ttl');
  }
  public set analyticalStorageTtl(value: number | undefined) {
    this._analyticalStorageTtl = value;
  }
  public resetAnalyticalStorageTtl() {
    this._analyticalStorageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageTtlInput() {
    return this._analyticalStorageTtl
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
    return this._databaseName
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number | undefined; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number | undefined) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl
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
    return this._partitionKeyPath
  }

  // partition_key_version - computed: false, optional: true, required: false
  private _partitionKeyVersion?: number | undefined; 
  public get partitionKeyVersion() {
    return this.getNumberAttribute('partition_key_version');
  }
  public set partitionKeyVersion(value: number | undefined) {
    this._partitionKeyVersion = value;
  }
  public resetPartitionKeyVersion() {
    this._partitionKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyVersionInput() {
    return this._partitionKeyVersion
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number | undefined; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number | undefined) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings?: CosmosdbSqlContainerAutoscaleSettings | undefined; 
  private __autoscaleSettingsOutput = new CosmosdbSqlContainerAutoscaleSettingsOutputReference(this as any, "autoscale_settings", true);
  public get autoscaleSettings() {
    return this.__autoscaleSettingsOutput;
  }
  public putAutoscaleSettings(value: CosmosdbSqlContainerAutoscaleSettings | undefined) {
    this._autoscaleSettings = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings
  }

  // conflict_resolution_policy - computed: false, optional: true, required: false
  private _conflictResolutionPolicy?: CosmosdbSqlContainerConflictResolutionPolicy | undefined; 
  private __conflictResolutionPolicyOutput = new CosmosdbSqlContainerConflictResolutionPolicyOutputReference(this as any, "conflict_resolution_policy", true);
  public get conflictResolutionPolicy() {
    return this.__conflictResolutionPolicyOutput;
  }
  public putConflictResolutionPolicy(value: CosmosdbSqlContainerConflictResolutionPolicy | undefined) {
    this._conflictResolutionPolicy = value;
  }
  public resetConflictResolutionPolicy() {
    this._conflictResolutionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPolicyInput() {
    return this._conflictResolutionPolicy
  }

  // indexing_policy - computed: false, optional: true, required: false
  private _indexingPolicy?: CosmosdbSqlContainerIndexingPolicy | undefined; 
  private __indexingPolicyOutput = new CosmosdbSqlContainerIndexingPolicyOutputReference(this as any, "indexing_policy", true);
  public get indexingPolicy() {
    return this.__indexingPolicyOutput;
  }
  public putIndexingPolicy(value: CosmosdbSqlContainerIndexingPolicy | undefined) {
    this._indexingPolicy = value;
  }
  public resetIndexingPolicy() {
    this._indexingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingPolicyInput() {
    return this._indexingPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbSqlContainerTimeouts | undefined; 
  private __timeoutsOutput = new CosmosdbSqlContainerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CosmosdbSqlContainerTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // unique_key - computed: false, optional: true, required: false
  private _uniqueKey?: CosmosdbSqlContainerUniqueKey[] | undefined; 
  public get uniqueKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unique_key') as any;
  }
  public set uniqueKey(value: CosmosdbSqlContainerUniqueKey[] | undefined) {
    this._uniqueKey = value;
  }
  public resetUniqueKey() {
    this._uniqueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey
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
      name: cdktf.stringToTerraform(this._name),
      partition_key_path: cdktf.stringToTerraform(this._partitionKeyPath),
      partition_key_version: cdktf.numberToTerraform(this._partitionKeyVersion),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cosmosdbSqlContainerAutoscaleSettingsToTerraform(this._autoscaleSettings),
      conflict_resolution_policy: cosmosdbSqlContainerConflictResolutionPolicyToTerraform(this._conflictResolutionPolicy),
      indexing_policy: cosmosdbSqlContainerIndexingPolicyToTerraform(this._indexingPolicy),
      timeouts: cosmosdbSqlContainerTimeoutsToTerraform(this._timeouts),
      unique_key: cdktf.listMapper(cosmosdbSqlContainerUniqueKeyToTerraform)(this._uniqueKey),
    };
  }
}
