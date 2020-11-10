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
