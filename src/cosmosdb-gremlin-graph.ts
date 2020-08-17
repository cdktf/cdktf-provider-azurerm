// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CosmosdbGremlinGraphConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly databaseName: string;
  readonly name: string;
  readonly partitionKeyPath?: string;
  readonly resourceGroupName: string;
  readonly throughput?: number;
  /** conflict_resolution_policy block */
  readonly conflictResolutionPolicy: CosmosdbGremlinGraphConflictResolutionPolicy[];
  /** index_policy block */
  readonly indexPolicy: CosmosdbGremlinGraphIndexPolicy[];
  /** timeouts block */
  readonly timeouts?: CosmosdbGremlinGraphTimeouts;
  /** unique_key block */
  readonly uniqueKey?: CosmosdbGremlinGraphUniqueKey[];
}
export interface CosmosdbGremlinGraphConflictResolutionPolicy {
  readonly conflictResolutionPath?: string;
  readonly conflictResolutionProcedure?: string;
  readonly mode: string;
}
export interface CosmosdbGremlinGraphIndexPolicy {
  readonly automatic?: boolean;
  readonly excludedPaths?: string[];
  readonly includedPaths?: string[];
  readonly indexingMode: string;
}
export interface CosmosdbGremlinGraphTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface CosmosdbGremlinGraphUniqueKey {
  readonly paths: string[];
}

// Resource

export class CosmosdbGremlinGraph extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._name = config.name;
    this._partitionKeyPath = config.partitionKeyPath;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
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
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // partition_key_path - computed: false, optional: true, required: false
  private _partitionKeyPath?: string;
  public get partitionKeyPath() {
    return this._partitionKeyPath;
  }
  public set partitionKeyPath(value: string | undefined) {
    this._partitionKeyPath = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number;
  public get throughput() {
    return this._throughput ?? this.getNumberAttribute('throughput');
  }
  public set throughput(value: number | undefined) {
    this._throughput = value;
  }

  // conflict_resolution_policy - computed: false, optional: false, required: true
  private _conflictResolutionPolicy: CosmosdbGremlinGraphConflictResolutionPolicy[];
  public get conflictResolutionPolicy() {
    return this._conflictResolutionPolicy;
  }
  public set conflictResolutionPolicy(value: CosmosdbGremlinGraphConflictResolutionPolicy[]) {
    this._conflictResolutionPolicy = value;
  }

  // index_policy - computed: false, optional: false, required: true
  private _indexPolicy: CosmosdbGremlinGraphIndexPolicy[];
  public get indexPolicy() {
    return this._indexPolicy;
  }
  public set indexPolicy(value: CosmosdbGremlinGraphIndexPolicy[]) {
    this._indexPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbGremlinGraphTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CosmosdbGremlinGraphTimeouts | undefined) {
    this._timeouts = value;
  }

  // unique_key - computed: false, optional: true, required: false
  private _uniqueKey?: CosmosdbGremlinGraphUniqueKey[];
  public get uniqueKey() {
    return this._uniqueKey;
  }
  public set uniqueKey(value: CosmosdbGremlinGraphUniqueKey[] | undefined) {
    this._uniqueKey = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      database_name: this._databaseName,
      name: this._name,
      partition_key_path: this._partitionKeyPath,
      resource_group_name: this._resourceGroupName,
      throughput: this._throughput,
      conflict_resolution_policy: this._conflictResolutionPolicy,
      index_policy: this._indexPolicy,
      timeouts: this._timeouts,
      unique_key: this._uniqueKey,
    };
  }
}
