// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_gremlin_graph.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbGremlinGraphConfig extends cdktf.TerraformMetaArguments {
  readonly accountName: string;
  readonly databaseName: string;
  readonly defaultTtl?: number;
  readonly name: string;
  readonly partitionKeyPath?: string;
  readonly resourceGroupName: string;
  readonly throughput?: number;
  /** autoscale_settings block */
  readonly autoscaleSettings?: CosmosdbGremlinGraphAutoscaleSettings[];
  /** conflict_resolution_policy block */
  readonly conflictResolutionPolicy: CosmosdbGremlinGraphConflictResolutionPolicy[];
  /** index_policy block */
  readonly indexPolicy: CosmosdbGremlinGraphIndexPolicy[];
  /** timeouts block */
  readonly timeouts?: CosmosdbGremlinGraphTimeouts;
  /** unique_key block */
  readonly uniqueKey?: CosmosdbGremlinGraphUniqueKey[];
}
export interface CosmosdbGremlinGraphAutoscaleSettings {
  readonly maxThroughput?: number;
}

function cosmosdbGremlinGraphAutoscaleSettingsToTerraform(struct?: CosmosdbGremlinGraphAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export interface CosmosdbGremlinGraphConflictResolutionPolicy {
  readonly conflictResolutionPath?: string;
  readonly conflictResolutionProcedure?: string;
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

export interface CosmosdbGremlinGraphIndexPolicy {
  readonly automatic?: boolean;
  readonly excludedPaths?: string[];
  readonly includedPaths?: string[];
  readonly indexingMode: string;
}

function cosmosdbGremlinGraphIndexPolicyToTerraform(struct?: CosmosdbGremlinGraphIndexPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    excluded_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedPaths),
    included_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPaths),
    indexing_mode: cdktf.stringToTerraform(struct!.indexingMode),
  }
}

export interface CosmosdbGremlinGraphTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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
  readonly paths: string[];
}

function cosmosdbGremlinGraphUniqueKeyToTerraform(struct?: CosmosdbGremlinGraphUniqueKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
  }
}


// Resource

export class CosmosdbGremlinGraph extends cdktf.TerraformResource {

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
    this._defaultTtl = config.defaultTtl;
    this._name = config.name;
    this._partitionKeyPath = config.partitionKeyPath;
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

  // partition_key_path - computed: false, optional: true, required: false
  private _partitionKeyPath?: string;
  public get partitionKeyPath() {
    return this.getStringAttribute('partition_key_path');
  }
  public set partitionKeyPath(value: string ) {
    this._partitionKeyPath = value;
  }
  public resetPartitionKeyPath() {
    this._partitionKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyPathInput() {
    return this._partitionKeyPath
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

  // conflict_resolution_policy - computed: false, optional: false, required: true
  private _conflictResolutionPolicy: CosmosdbGremlinGraphConflictResolutionPolicy[];
  public get conflictResolutionPolicy() {
    return this.interpolationForAttribute('conflict_resolution_policy') as any;
  }
  public set conflictResolutionPolicy(value: CosmosdbGremlinGraphConflictResolutionPolicy[]) {
    this._conflictResolutionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPolicyInput() {
    return this._conflictResolutionPolicy
  }

  // index_policy - computed: false, optional: false, required: true
  private _indexPolicy: CosmosdbGremlinGraphIndexPolicy[];
  public get indexPolicy() {
    return this.interpolationForAttribute('index_policy') as any;
  }
  public set indexPolicy(value: CosmosdbGremlinGraphIndexPolicy[]) {
    this._indexPolicy = value;
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
