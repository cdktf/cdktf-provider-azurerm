// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbMongoCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#account_name CosmosdbMongoCollection#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}
  */
  readonly analyticalStorageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#database_name CosmosdbMongoCollection#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}
  */
  readonly defaultTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#name CosmosdbMongoCollection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#resource_group_name CosmosdbMongoCollection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#shard_key CosmosdbMongoCollection#shard_key}
  */
  readonly shardKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#throughput CosmosdbMongoCollection#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#autoscale_settings CosmosdbMongoCollection#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbMongoCollectionAutoscaleSettings[];
  /**
  * index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#index CosmosdbMongoCollection#index}
  */
  readonly index?: CosmosdbMongoCollectionIndex[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#timeouts CosmosdbMongoCollection#timeouts}
  */
  readonly timeouts?: CosmosdbMongoCollectionTimeouts;
}
export class CosmosdbMongoCollectionSystemIndexes extends cdktf.ComplexComputedList {

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // unique - computed: true, optional: false, required: false
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
}
export interface CosmosdbMongoCollectionAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#max_throughput CosmosdbMongoCollection#max_throughput}
  */
  readonly maxThroughput?: number;
}

function cosmosdbMongoCollectionAutoscaleSettingsToTerraform(struct?: CosmosdbMongoCollectionAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export interface CosmosdbMongoCollectionIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#keys CosmosdbMongoCollection#keys}
  */
  readonly keys: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#unique CosmosdbMongoCollection#unique}
  */
  readonly unique?: boolean;
}

function cosmosdbMongoCollectionIndexToTerraform(struct?: CosmosdbMongoCollectionIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}

export interface CosmosdbMongoCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#create CosmosdbMongoCollection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#delete CosmosdbMongoCollection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#read CosmosdbMongoCollection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html#update CosmosdbMongoCollection#update}
  */
  readonly update?: string;
}

function cosmosdbMongoCollectionTimeoutsToTerraform(struct?: CosmosdbMongoCollectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html azurerm_cosmosdb_mongo_collection}
*/
export class CosmosdbMongoCollection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html azurerm_cosmosdb_mongo_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbMongoCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbMongoCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_mongo_collection',
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
    this._defaultTtlSeconds = config.defaultTtlSeconds;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._shardKey = config.shardKey;
    this._throughput = config.throughput;
    this._autoscaleSettings = config.autoscaleSettings;
    this._index = config.index;
    this._timeouts = config.timeouts;
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

  // analytical_storage_ttl - computed: false, optional: true, required: false
  private _analyticalStorageTtl?: number;
  public get analyticalStorageTtl() {
    return this.getNumberAttribute('analytical_storage_ttl');
  }
  public set analyticalStorageTtl(value: number ) {
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

  // default_ttl_seconds - computed: false, optional: true, required: false
  private _defaultTtlSeconds?: number;
  public get defaultTtlSeconds() {
    return this.getNumberAttribute('default_ttl_seconds');
  }
  public set defaultTtlSeconds(value: number ) {
    this._defaultTtlSeconds = value;
  }
  public resetDefaultTtlSeconds() {
    this._defaultTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlSecondsInput() {
    return this._defaultTtlSeconds
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

  // shard_key - computed: false, optional: true, required: false
  private _shardKey?: string;
  public get shardKey() {
    return this.getStringAttribute('shard_key');
  }
  public set shardKey(value: string ) {
    this._shardKey = value;
  }
  public resetShardKey() {
    this._shardKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardKeyInput() {
    return this._shardKey
  }

  // system_indexes - computed: true, optional: false, required: false
  public systemIndexes(index: string) {
    return new CosmosdbMongoCollectionSystemIndexes(this, 'system_indexes', index);
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
  private _autoscaleSettings?: CosmosdbMongoCollectionAutoscaleSettings[];
  public get autoscaleSettings() {
    return this.interpolationForAttribute('autoscale_settings') as any;
  }
  public set autoscaleSettings(value: CosmosdbMongoCollectionAutoscaleSettings[] ) {
    this._autoscaleSettings = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings
  }

  // index - computed: false, optional: true, required: false
  private _index?: CosmosdbMongoCollectionIndex[];
  public get index() {
    return this.interpolationForAttribute('index') as any;
  }
  public set index(value: CosmosdbMongoCollectionIndex[] ) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbMongoCollectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbMongoCollectionTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      analytical_storage_ttl: cdktf.numberToTerraform(this._analyticalStorageTtl),
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_ttl_seconds: cdktf.numberToTerraform(this._defaultTtlSeconds),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shard_key: cdktf.stringToTerraform(this._shardKey),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cdktf.listMapper(cosmosdbMongoCollectionAutoscaleSettingsToTerraform)(this._autoscaleSettings),
      index: cdktf.listMapper(cosmosdbMongoCollectionIndexToTerraform)(this._index),
      timeouts: cosmosdbMongoCollectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
