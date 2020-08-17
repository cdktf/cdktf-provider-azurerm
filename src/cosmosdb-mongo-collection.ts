// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CosmosdbMongoCollectionConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly databaseName: string;
  readonly defaultTtlSeconds?: number;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly shardKey?: string;
  readonly throughput?: number;
  /** timeouts block */
  readonly timeouts?: CosmosdbMongoCollectionTimeouts;
}
export interface CosmosdbMongoCollectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class CosmosdbMongoCollection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._databaseName = config.databaseName;
    this._defaultTtlSeconds = config.defaultTtlSeconds;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._shardKey = config.shardKey;
    this._throughput = config.throughput;
    this._timeouts = config.timeouts;
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

  // default_ttl_seconds - computed: false, optional: true, required: false
  private _defaultTtlSeconds?: number;
  public get defaultTtlSeconds() {
    return this._defaultTtlSeconds;
  }
  public set defaultTtlSeconds(value: number | undefined) {
    this._defaultTtlSeconds = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // shard_key - computed: false, optional: true, required: false
  private _shardKey?: string;
  public get shardKey() {
    return this._shardKey;
  }
  public set shardKey(value: string | undefined) {
    this._shardKey = value;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number;
  public get throughput() {
    return this._throughput ?? this.getNumberAttribute('throughput');
  }
  public set throughput(value: number | undefined) {
    this._throughput = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbMongoCollectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CosmosdbMongoCollectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      database_name: this._databaseName,
      default_ttl_seconds: this._defaultTtlSeconds,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      shard_key: this._shardKey,
      throughput: this._throughput,
      timeouts: this._timeouts,
    };
  }
}
