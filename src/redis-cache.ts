// https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisCacheConfig extends cdktf.TerraformMetaArguments {
  readonly capacity: number;
  readonly enableNonSslPort?: boolean;
  readonly family: string;
  readonly location: string;
  readonly minimumTlsVersion?: string;
  readonly name: string;
  readonly privateStaticIpAddress?: string;
  readonly publicNetworkAccessEnabled?: boolean;
  readonly replicasPerMaster?: number;
  readonly resourceGroupName: string;
  readonly shardCount?: number;
  readonly skuName: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** patch_schedule block */
  readonly patchSchedule?: RedisCachePatchSchedule[];
  /** redis_configuration block */
  readonly redisConfiguration?: RedisCacheRedisConfiguration[];
  /** timeouts block */
  readonly timeouts?: RedisCacheTimeouts;
}
export interface RedisCachePatchSchedule {
  readonly dayOfWeek: string;
  readonly startHourUtc?: number;
}

function redisCachePatchScheduleToTerraform(struct?: RedisCachePatchSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    start_hour_utc: cdktf.numberToTerraform(struct!.startHourUtc),
  }
}

export interface RedisCacheRedisConfiguration {
  readonly aofBackupEnabled?: boolean;
  readonly aofStorageConnectionString0?: string;
  readonly aofStorageConnectionString1?: string;
  readonly enableAuthentication?: boolean;
  readonly maxfragmentationmemoryReserved?: number;
  readonly maxmemoryDelta?: number;
  readonly maxmemoryPolicy?: string;
  readonly maxmemoryReserved?: number;
  readonly notifyKeyspaceEvents?: string;
  readonly rdbBackupEnabled?: boolean;
  readonly rdbBackupFrequency?: number;
  readonly rdbBackupMaxSnapshotCount?: number;
  readonly rdbStorageConnectionString?: string;
}

function redisCacheRedisConfigurationToTerraform(struct?: RedisCacheRedisConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aof_backup_enabled: cdktf.booleanToTerraform(struct!.aofBackupEnabled),
    aof_storage_connection_string_0: cdktf.stringToTerraform(struct!.aofStorageConnectionString0),
    aof_storage_connection_string_1: cdktf.stringToTerraform(struct!.aofStorageConnectionString1),
    enable_authentication: cdktf.booleanToTerraform(struct!.enableAuthentication),
    maxfragmentationmemory_reserved: cdktf.numberToTerraform(struct!.maxfragmentationmemoryReserved),
    maxmemory_delta: cdktf.numberToTerraform(struct!.maxmemoryDelta),
    maxmemory_policy: cdktf.stringToTerraform(struct!.maxmemoryPolicy),
    maxmemory_reserved: cdktf.numberToTerraform(struct!.maxmemoryReserved),
    notify_keyspace_events: cdktf.stringToTerraform(struct!.notifyKeyspaceEvents),
    rdb_backup_enabled: cdktf.booleanToTerraform(struct!.rdbBackupEnabled),
    rdb_backup_frequency: cdktf.numberToTerraform(struct!.rdbBackupFrequency),
    rdb_backup_max_snapshot_count: cdktf.numberToTerraform(struct!.rdbBackupMaxSnapshotCount),
    rdb_storage_connection_string: cdktf.stringToTerraform(struct!.rdbStorageConnectionString),
  }
}

export interface RedisCacheTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function redisCacheTimeoutsToTerraform(struct?: RedisCacheTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RedisCache extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedisCacheConfig) {
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
    this._capacity = config.capacity;
    this._enableNonSslPort = config.enableNonSslPort;
    this._family = config.family;
    this._location = config.location;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._privateStaticIpAddress = config.privateStaticIpAddress;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._replicasPerMaster = config.replicasPerMaster;
    this._resourceGroupName = config.resourceGroupName;
    this._shardCount = config.shardCount;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._zones = config.zones;
    this._patchSchedule = config.patchSchedule;
    this._redisConfiguration = config.redisConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: false, required: true
  private _capacity: number;
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
  }

  // enable_non_ssl_port - computed: false, optional: true, required: false
  private _enableNonSslPort?: boolean;
  public get enableNonSslPort() {
    return this.getBooleanAttribute('enable_non_ssl_port');
  }
  public set enableNonSslPort(value: boolean ) {
    this._enableNonSslPort = value;
  }
  public resetEnableNonSslPort() {
    this._enableNonSslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNonSslPortInput() {
    return this._enableNonSslPort
  }

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string;
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string ) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // private_static_ip_address - computed: true, optional: true, required: false
  private _privateStaticIpAddress?: string;
  public get privateStaticIpAddress() {
    return this.getStringAttribute('private_static_ip_address');
  }
  public set privateStaticIpAddress(value: string) {
    this._privateStaticIpAddress = value;
  }
  public resetPrivateStaticIpAddress() {
    this._privateStaticIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateStaticIpAddressInput() {
    return this._privateStaticIpAddress
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // replicas_per_master - computed: false, optional: true, required: false
  private _replicasPerMaster?: number;
  public get replicasPerMaster() {
    return this.getNumberAttribute('replicas_per_master');
  }
  public set replicasPerMaster(value: number ) {
    this._replicasPerMaster = value;
  }
  public resetReplicasPerMaster() {
    this._replicasPerMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerMasterInput() {
    return this._replicasPerMaster
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // shard_count - computed: false, optional: true, required: false
  private _shardCount?: number;
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number ) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // ssl_port - computed: true, optional: false, required: false
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string ) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // patch_schedule - computed: false, optional: true, required: false
  private _patchSchedule?: RedisCachePatchSchedule[];
  public get patchSchedule() {
    return this.interpolationForAttribute('patch_schedule') as any;
  }
  public set patchSchedule(value: RedisCachePatchSchedule[] ) {
    this._patchSchedule = value;
  }
  public resetPatchSchedule() {
    this._patchSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchScheduleInput() {
    return this._patchSchedule
  }

  // redis_configuration - computed: false, optional: true, required: false
  private _redisConfiguration?: RedisCacheRedisConfiguration[];
  public get redisConfiguration() {
    return this.interpolationForAttribute('redis_configuration') as any;
  }
  public set redisConfiguration(value: RedisCacheRedisConfiguration[] ) {
    this._redisConfiguration = value;
  }
  public resetRedisConfiguration() {
    this._redisConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisConfigurationInput() {
    return this._redisConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisCacheTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RedisCacheTimeouts ) {
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
      capacity: cdktf.numberToTerraform(this._capacity),
      enable_non_ssl_port: cdktf.booleanToTerraform(this._enableNonSslPort),
      family: cdktf.stringToTerraform(this._family),
      location: cdktf.stringToTerraform(this._location),
      minimum_tls_version: cdktf.stringToTerraform(this._minimumTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      private_static_ip_address: cdktf.stringToTerraform(this._privateStaticIpAddress),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      replicas_per_master: cdktf.numberToTerraform(this._replicasPerMaster),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      patch_schedule: cdktf.listMapper(redisCachePatchScheduleToTerraform)(this._patchSchedule),
      redis_configuration: cdktf.listMapper(redisCacheRedisConfigurationToTerraform)(this._redisConfiguration),
      timeouts: redisCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
