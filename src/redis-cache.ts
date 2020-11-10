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
