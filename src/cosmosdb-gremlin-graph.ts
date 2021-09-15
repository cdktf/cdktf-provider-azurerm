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
  readonly autoscaleSettings?: CosmosdbGremlinGraphAutoscaleSettings[];
  /**
  * conflict_resolution_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#conflict_resolution_policy CosmosdbGremlinGraph#conflict_resolution_policy}
  */
  readonly conflictResolutionPolicy?: CosmosdbGremlinGraphConflictResolutionPolicy[];
  /**
  * index_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#index_policy CosmosdbGremlinGraph#index_policy}
  */
  readonly indexPolicy?: CosmosdbGremlinGraphIndexPolicy[];
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

function cosmosdbGremlinGraphAutoscaleSettingsToTerraform(struct?: CosmosdbGremlinGraphAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
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

function cosmosdbGremlinGraphConflictResolutionPolicyToTerraform(struct?: CosmosdbGremlinGraphConflictResolutionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    conflict_resolution_path: cdktf.stringToTerraform(struct!.conflictResolutionPath),
    conflict_resolution_procedure: cdktf.stringToTerraform(struct!.conflictResolutionProcedure),
    mode: cdktf.stringToTerraform(struct!.mode),
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

function cosmosdbGremlinGraphIndexPolicyCompositeIndexIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function cosmosdbGremlinGraphIndexPolicyCompositeIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicyCompositeIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function cosmosdbGremlinGraphIndexPolicySpatialIndexToTerraform(struct?: CosmosdbGremlinGraphIndexPolicySpatialIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function cosmosdbGremlinGraphIndexPolicyToTerraform(struct?: CosmosdbGremlinGraphIndexPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    excluded_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedPaths),
    included_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPaths),
    indexing_mode: cdktf.stringToTerraform(struct!.indexingMode),
    composite_index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicyCompositeIndexToTerraform)(struct!.compositeIndex),
    spatial_index: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicySpatialIndexToTerraform)(struct!.spatialIndex),
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

function cosmosdbGremlinGraphTimeoutsToTerraform(struct?: CosmosdbGremlinGraphTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface CosmosdbGremlinGraphUniqueKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html#paths CosmosdbGremlinGraph#paths}
  */
  readonly paths: string[];
}

function cosmosdbGremlinGraphUniqueKeyToTerraform(struct?: CosmosdbGremlinGraphUniqueKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    this._autoscaleSettings = config.autoscaleSettings;
    this._conflictResolutionPolicy = config.conflictResolutionPolicy;
    this._indexPolicy = config.indexPolicy;
    this._timeouts = config.timeouts;
    this._uniqueKey = config.uniqueKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
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

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
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
    return this._defaultTtl
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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
  private _partitionKeyPath: string;
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
  private _partitionKeyVersion?: number;
  public get partitionKeyVersion() {
    return this.getNumberAttribute('partition_key_version');
  }
  public set partitionKeyVersion(value: number ) {
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
  private _resourceGroupName: string;
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
    return this._throughput
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings?: CosmosdbGremlinGraphAutoscaleSettings[];
  public get autoscaleSettings() {
    return this.interpolationForAttribute('autoscale_settings') as any;
  }
  public set autoscaleSettings(value: CosmosdbGremlinGraphAutoscaleSettings[] ) {
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
  private _conflictResolutionPolicy?: CosmosdbGremlinGraphConflictResolutionPolicy[];
  public get conflictResolutionPolicy() {
    return this.interpolationForAttribute('conflict_resolution_policy') as any;
  }
  public set conflictResolutionPolicy(value: CosmosdbGremlinGraphConflictResolutionPolicy[] ) {
    this._conflictResolutionPolicy = value;
  }
  public resetConflictResolutionPolicy() {
    this._conflictResolutionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPolicyInput() {
    return this._conflictResolutionPolicy
  }

  // index_policy - computed: false, optional: true, required: false
  private _indexPolicy?: CosmosdbGremlinGraphIndexPolicy[];
  public get indexPolicy() {
    return this.interpolationForAttribute('index_policy') as any;
  }
  public set indexPolicy(value: CosmosdbGremlinGraphIndexPolicy[] ) {
    this._indexPolicy = value;
  }
  public resetIndexPolicy() {
    this._indexPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPolicyInput() {
    return this._indexPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbGremlinGraphTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbGremlinGraphTimeouts ) {
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
  private _uniqueKey?: CosmosdbGremlinGraphUniqueKey[];
  public get uniqueKey() {
    return this.interpolationForAttribute('unique_key') as any;
  }
  public set uniqueKey(value: CosmosdbGremlinGraphUniqueKey[] ) {
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
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      name: cdktf.stringToTerraform(this._name),
      partition_key_path: cdktf.stringToTerraform(this._partitionKeyPath),
      partition_key_version: cdktf.numberToTerraform(this._partitionKeyVersion),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cdktf.listMapper(cosmosdbGremlinGraphAutoscaleSettingsToTerraform)(this._autoscaleSettings),
      conflict_resolution_policy: cdktf.listMapper(cosmosdbGremlinGraphConflictResolutionPolicyToTerraform)(this._conflictResolutionPolicy),
      index_policy: cdktf.listMapper(cosmosdbGremlinGraphIndexPolicyToTerraform)(this._indexPolicy),
      timeouts: cosmosdbGremlinGraphTimeoutsToTerraform(this._timeouts),
      unique_key: cdktf.listMapper(cosmosdbGremlinGraphUniqueKeyToTerraform)(this._uniqueKey),
    };
  }
}
