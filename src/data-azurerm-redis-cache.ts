// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermRedisCacheConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: DataAzurermRedisCacheTimeouts;
}
export class DataAzurermRedisCachePatchSchedule extends ComplexComputedList {

  // day_of_week - computed: true, optional: false, required: true
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // start_hour_utc - computed: true, optional: false, required: true
  public get startHourUtc() {
    return this.getNumberAttribute('start_hour_utc');
  }
}
export class DataAzurermRedisCacheRedisConfiguration extends ComplexComputedList {

  // aof_backup_enabled - computed: true, optional: false, required: true
  public get aofBackupEnabled() {
    return this.getBooleanAttribute('aof_backup_enabled');
  }

  // aof_storage_connection_string_0 - computed: true, optional: false, required: true
  public get aofStorageConnectionString0() {
    return this.getStringAttribute('aof_storage_connection_string_0');
  }

  // aof_storage_connection_string_1 - computed: true, optional: false, required: true
  public get aofStorageConnectionString1() {
    return this.getStringAttribute('aof_storage_connection_string_1');
  }

  // enable_authentication - computed: true, optional: false, required: true
  public get enableAuthentication() {
    return this.getBooleanAttribute('enable_authentication');
  }

  // maxclients - computed: true, optional: false, required: true
  public get maxclients() {
    return this.getNumberAttribute('maxclients');
  }

  // maxfragmentationmemory_reserved - computed: true, optional: false, required: true
  public get maxfragmentationmemoryReserved() {
    return this.getNumberAttribute('maxfragmentationmemory_reserved');
  }

  // maxmemory_delta - computed: true, optional: false, required: true
  public get maxmemoryDelta() {
    return this.getNumberAttribute('maxmemory_delta');
  }

  // maxmemory_policy - computed: true, optional: false, required: true
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }

  // maxmemory_reserved - computed: true, optional: false, required: true
  public get maxmemoryReserved() {
    return this.getNumberAttribute('maxmemory_reserved');
  }

  // notify_keyspace_events - computed: true, optional: false, required: true
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }

  // rdb_backup_enabled - computed: true, optional: false, required: true
  public get rdbBackupEnabled() {
    return this.getBooleanAttribute('rdb_backup_enabled');
  }

  // rdb_backup_frequency - computed: true, optional: false, required: true
  public get rdbBackupFrequency() {
    return this.getNumberAttribute('rdb_backup_frequency');
  }

  // rdb_backup_max_snapshot_count - computed: true, optional: false, required: true
  public get rdbBackupMaxSnapshotCount() {
    return this.getNumberAttribute('rdb_backup_max_snapshot_count');
  }

  // rdb_storage_connection_string - computed: true, optional: false, required: true
  public get rdbStorageConnectionString() {
    return this.getStringAttribute('rdb_storage_connection_string');
  }
}
export interface DataAzurermRedisCacheTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermRedisCache extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermRedisCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // enable_non_ssl_port - computed: true, optional: false, required: true
  public get enableNonSslPort() {
    return this.getBooleanAttribute('enable_non_ssl_port');
  }

  // family - computed: true, optional: false, required: true
  public get family() {
    return this.getStringAttribute('family');
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // minimum_tls_version - computed: true, optional: false, required: true
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // patch_schedule - computed: true, optional: false, required: true
  public patchSchedule(index: string) {
    return new DataAzurermRedisCachePatchSchedule(this, 'patch_schedule', index);
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // private_static_ip_address - computed: true, optional: false, required: true
  public get privateStaticIpAddress() {
    return this.getStringAttribute('private_static_ip_address');
  }

  // redis_configuration - computed: true, optional: false, required: true
  public redisConfiguration(index: string) {
    return new DataAzurermRedisCacheRedisConfiguration(this, 'redis_configuration', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // shard_count - computed: true, optional: false, required: true
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // sku_name - computed: true, optional: false, required: true
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // ssl_port - computed: true, optional: false, required: true
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones ?? this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermRedisCacheTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermRedisCacheTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
