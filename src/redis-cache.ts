// https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedisCacheConfig extends TerraformMetaArguments {
  readonly capacity: number;
  readonly enableNonSslPort?: boolean;
  readonly family: string;
  readonly location: string;
  readonly minimumTlsVersion?: string;
  readonly name: string;
  readonly privateStaticIpAddress?: string;
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
export interface RedisCacheTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RedisCache extends TerraformResource {

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
    return this._capacity;
  }
  public set capacity(value: number) {
    this._capacity = value;
  }

  // enable_non_ssl_port - computed: false, optional: true, required: false
  private _enableNonSslPort?: boolean;
  public get enableNonSslPort() {
    return this._enableNonSslPort;
  }
  public set enableNonSslPort(value: boolean | undefined) {
    this._enableNonSslPort = value;
  }

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this._family;
  }
  public set family(value: string) {
    this._family = value;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string;
  public get minimumTlsVersion() {
    return this._minimumTlsVersion;
  }
  public set minimumTlsVersion(value: string | undefined) {
    this._minimumTlsVersion = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // private_static_ip_address - computed: true, optional: true, required: false
  private _privateStaticIpAddress?: string;
  public get privateStaticIpAddress() {
    return this._privateStaticIpAddress ?? this.getStringAttribute('private_static_ip_address');
  }
  public set privateStaticIpAddress(value: string | undefined) {
    this._privateStaticIpAddress = value;
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

  // shard_count - computed: false, optional: true, required: false
  private _shardCount?: number;
  public get shardCount() {
    return this._shardCount;
  }
  public set shardCount(value: number | undefined) {
    this._shardCount = value;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string) {
    this._skuName = value;
  }

  // ssl_port - computed: true, optional: false, required: true
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // patch_schedule - computed: false, optional: true, required: false
  private _patchSchedule?: RedisCachePatchSchedule[];
  public get patchSchedule() {
    return this._patchSchedule;
  }
  public set patchSchedule(value: RedisCachePatchSchedule[] | undefined) {
    this._patchSchedule = value;
  }

  // redis_configuration - computed: false, optional: true, required: false
  private _redisConfiguration?: RedisCacheRedisConfiguration[];
  public get redisConfiguration() {
    return this._redisConfiguration;
  }
  public set redisConfiguration(value: RedisCacheRedisConfiguration[] | undefined) {
    this._redisConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisCacheTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RedisCacheTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: this._capacity,
      enable_non_ssl_port: this._enableNonSslPort,
      family: this._family,
      location: this._location,
      minimum_tls_version: this._minimumTlsVersion,
      name: this._name,
      private_static_ip_address: this._privateStaticIpAddress,
      resource_group_name: this._resourceGroupName,
      shard_count: this._shardCount,
      sku_name: this._skuName,
      subnet_id: this._subnetId,
      tags: this._tags,
      zones: this._zones,
      patch_schedule: this._patchSchedule,
      redis_configuration: this._redisConfiguration,
      timeouts: this._timeouts,
    };
  }
}
