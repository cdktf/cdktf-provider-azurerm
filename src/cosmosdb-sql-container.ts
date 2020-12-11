// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbSqlContainerConfig extends cdktf.TerraformMetaArguments {
  readonly accountName: string;
  readonly databaseName: string;
  readonly defaultTtl?: number;
  readonly name: string;
  readonly partitionKeyPath?: string;
  readonly partitionKeyVersion?: number;
  readonly resourceGroupName: string;
  readonly throughput?: number;
  /** autoscale_settings block */
  readonly autoscaleSettings?: CosmosdbSqlContainerAutoscaleSettings[];
  /** indexing_policy block */
  readonly indexingPolicy?: CosmosdbSqlContainerIndexingPolicy[];
  /** timeouts block */
  readonly timeouts?: CosmosdbSqlContainerTimeouts;
  /** unique_key block */
  readonly uniqueKey?: CosmosdbSqlContainerUniqueKey[];
}
export interface CosmosdbSqlContainerAutoscaleSettings {
  readonly maxThroughput?: number;
}

function cosmosdbSqlContainerAutoscaleSettingsToTerraform(struct?: CosmosdbSqlContainerAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex {
  readonly order: string;
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyCompositeIndex {
  /** index block */
  readonly index: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex[];
}

function cosmosdbSqlContainerIndexingPolicyCompositeIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToTerraform)(struct!.index),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyExcludedPath {
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicyExcludedPathToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyExcludedPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicyIncludedPath {
  readonly path: string;
}

function cosmosdbSqlContainerIndexingPolicyIncludedPathToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyIncludedPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CosmosdbSqlContainerIndexingPolicy {
  readonly indexingMode?: string;
  /** composite_index block */
  readonly compositeIndex?: CosmosdbSqlContainerIndexingPolicyCompositeIndex[];
  /** excluded_path block */
  readonly excludedPath?: CosmosdbSqlContainerIndexingPolicyExcludedPath[];
  /** included_path block */
  readonly includedPath?: CosmosdbSqlContainerIndexingPolicyIncludedPath[];
}

function cosmosdbSqlContainerIndexingPolicyToTerraform(struct?: CosmosdbSqlContainerIndexingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    indexing_mode: cdktf.stringToTerraform(struct!.indexingMode),
    composite_index: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyCompositeIndexToTerraform)(struct!.compositeIndex),
    excluded_path: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyExcludedPathToTerraform)(struct!.excludedPath),
    included_path: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyIncludedPathToTerraform)(struct!.includedPath),
  }
}

export interface CosmosdbSqlContainerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cosmosdbSqlContainerTimeoutsToTerraform(struct?: CosmosdbSqlContainerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface CosmosdbSqlContainerUniqueKey {
  readonly paths: string[];
}

function cosmosdbSqlContainerUniqueKeyToTerraform(struct?: CosmosdbSqlContainerUniqueKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
  }
}


// Resource

export class CosmosdbSqlContainer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._databaseName = config.databaseName;
    this._defaultTtl = config.defaultTtl;
    this._name = config.name;
    this._partitionKeyPath = config.partitionKeyPath;
    this._partitionKeyVersion = config.partitionKeyVersion;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._autoscaleSettings = config.autoscaleSettings;
    this._indexingPolicy = config.indexingPolicy;
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
  private _autoscaleSettings?: CosmosdbSqlContainerAutoscaleSettings[];
  public get autoscaleSettings() {
    return this.interpolationForAttribute('autoscale_settings') as any;
  }
  public set autoscaleSettings(value: CosmosdbSqlContainerAutoscaleSettings[] ) {
    this._autoscaleSettings = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings
  }

  // indexing_policy - computed: false, optional: true, required: false
  private _indexingPolicy?: CosmosdbSqlContainerIndexingPolicy[];
  public get indexingPolicy() {
    return this.interpolationForAttribute('indexing_policy') as any;
  }
  public set indexingPolicy(value: CosmosdbSqlContainerIndexingPolicy[] ) {
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
  private _timeouts?: CosmosdbSqlContainerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbSqlContainerTimeouts ) {
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
  private _uniqueKey?: CosmosdbSqlContainerUniqueKey[];
  public get uniqueKey() {
    return this.interpolationForAttribute('unique_key') as any;
  }
  public set uniqueKey(value: CosmosdbSqlContainerUniqueKey[] ) {
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
      autoscale_settings: cdktf.listMapper(cosmosdbSqlContainerAutoscaleSettingsToTerraform)(this._autoscaleSettings),
      indexing_policy: cdktf.listMapper(cosmosdbSqlContainerIndexingPolicyToTerraform)(this._indexingPolicy),
      timeouts: cosmosdbSqlContainerTimeoutsToTerraform(this._timeouts),
      unique_key: cdktf.listMapper(cosmosdbSqlContainerUniqueKeyToTerraform)(this._uniqueKey),
    };
  }
}
