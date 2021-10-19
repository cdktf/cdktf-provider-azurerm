// https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#capacity RedisCache#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#enable_non_ssl_port RedisCache#enable_non_ssl_port}
  */
  readonly enableNonSslPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#family RedisCache#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#location RedisCache#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#minimum_tls_version RedisCache#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#name RedisCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#private_static_ip_address RedisCache#private_static_ip_address}
  */
  readonly privateStaticIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#public_network_access_enabled RedisCache#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#redis_version RedisCache#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#replicas_per_master RedisCache#replicas_per_master}
  */
  readonly replicasPerMaster?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#replicas_per_primary RedisCache#replicas_per_primary}
  */
  readonly replicasPerPrimary?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#resource_group_name RedisCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#shard_count RedisCache#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#sku_name RedisCache#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#subnet_id RedisCache#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#tags RedisCache#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#tenant_settings RedisCache#tenant_settings}
  */
  readonly tenantSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#zones RedisCache#zones}
  */
  readonly zones?: string[];
  /**
  * patch_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#patch_schedule RedisCache#patch_schedule}
  */
  readonly patchSchedule?: RedisCachePatchSchedule[];
  /**
  * redis_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#redis_configuration RedisCache#redis_configuration}
  */
  readonly redisConfiguration?: RedisCacheRedisConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#timeouts RedisCache#timeouts}
  */
  readonly timeouts?: RedisCacheTimeouts;
}
export interface RedisCachePatchSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#day_of_week RedisCache#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#maintenance_window RedisCache#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#start_hour_utc RedisCache#start_hour_utc}
  */
  readonly startHourUtc?: number;
}

function redisCachePatchScheduleToTerraform(struct?: RedisCachePatchSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    maintenance_window: cdktf.stringToTerraform(struct!.maintenanceWindow),
    start_hour_utc: cdktf.numberToTerraform(struct!.startHourUtc),
  }
}

export interface RedisCacheRedisConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#aof_backup_enabled RedisCache#aof_backup_enabled}
  */
  readonly aofBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}
  */
  readonly aofStorageConnectionString0?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}
  */
  readonly aofStorageConnectionString1?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#enable_authentication RedisCache#enable_authentication}
  */
  readonly enableAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}
  */
  readonly maxfragmentationmemoryReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#maxmemory_delta RedisCache#maxmemory_delta}
  */
  readonly maxmemoryDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#maxmemory_policy RedisCache#maxmemory_policy}
  */
  readonly maxmemoryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#maxmemory_reserved RedisCache#maxmemory_reserved}
  */
  readonly maxmemoryReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#notify_keyspace_events RedisCache#notify_keyspace_events}
  */
  readonly notifyKeyspaceEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#rdb_backup_enabled RedisCache#rdb_backup_enabled}
  */
  readonly rdbBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#rdb_backup_frequency RedisCache#rdb_backup_frequency}
  */
  readonly rdbBackupFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}
  */
  readonly rdbBackupMaxSnapshotCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}
  */
  readonly rdbStorageConnectionString?: string;
}

function redisCacheRedisConfigurationToTerraform(struct?: RedisCacheRedisConfigurationOutputReference | RedisCacheRedisConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class RedisCacheRedisConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aof_backup_enabled - computed: false, optional: true, required: false
  private _aofBackupEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get aofBackupEnabled() {
    return this.getBooleanAttribute('aof_backup_enabled') as any;
  }
  public set aofBackupEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._aofBackupEnabled = value;
  }
  public resetAofBackupEnabled() {
    this._aofBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofBackupEnabledInput() {
    return this._aofBackupEnabled
  }

  // aof_storage_connection_string_0 - computed: false, optional: true, required: false
  private _aofStorageConnectionString0?: string | undefined; 
  public get aofStorageConnectionString0() {
    return this.getStringAttribute('aof_storage_connection_string_0');
  }
  public set aofStorageConnectionString0(value: string | undefined) {
    this._aofStorageConnectionString0 = value;
  }
  public resetAofStorageConnectionString0() {
    this._aofStorageConnectionString0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofStorageConnectionString0Input() {
    return this._aofStorageConnectionString0
  }

  // aof_storage_connection_string_1 - computed: false, optional: true, required: false
  private _aofStorageConnectionString1?: string | undefined; 
  public get aofStorageConnectionString1() {
    return this.getStringAttribute('aof_storage_connection_string_1');
  }
  public set aofStorageConnectionString1(value: string | undefined) {
    this._aofStorageConnectionString1 = value;
  }
  public resetAofStorageConnectionString1() {
    this._aofStorageConnectionString1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofStorageConnectionString1Input() {
    return this._aofStorageConnectionString1
  }

  // enable_authentication - computed: false, optional: true, required: false
  private _enableAuthentication?: boolean | cdktf.IResolvable | undefined; 
  public get enableAuthentication() {
    return this.getBooleanAttribute('enable_authentication') as any;
  }
  public set enableAuthentication(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAuthentication = value;
  }
  public resetEnableAuthentication() {
    this._enableAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthenticationInput() {
    return this._enableAuthentication
  }

  // maxfragmentationmemory_reserved - computed: true, optional: true, required: false
  private _maxfragmentationmemoryReserved?: number | undefined; 
  public get maxfragmentationmemoryReserved() {
    return this.getNumberAttribute('maxfragmentationmemory_reserved');
  }
  public set maxfragmentationmemoryReserved(value: number | undefined) {
    this._maxfragmentationmemoryReserved = value;
  }
  public resetMaxfragmentationmemoryReserved() {
    this._maxfragmentationmemoryReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxfragmentationmemoryReservedInput() {
    return this._maxfragmentationmemoryReserved
  }

  // maxmemory_delta - computed: true, optional: true, required: false
  private _maxmemoryDelta?: number | undefined; 
  public get maxmemoryDelta() {
    return this.getNumberAttribute('maxmemory_delta');
  }
  public set maxmemoryDelta(value: number | undefined) {
    this._maxmemoryDelta = value;
  }
  public resetMaxmemoryDelta() {
    this._maxmemoryDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryDeltaInput() {
    return this._maxmemoryDelta
  }

  // maxmemory_policy - computed: false, optional: true, required: false
  private _maxmemoryPolicy?: string | undefined; 
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }
  public set maxmemoryPolicy(value: string | undefined) {
    this._maxmemoryPolicy = value;
  }
  public resetMaxmemoryPolicy() {
    this._maxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryPolicyInput() {
    return this._maxmemoryPolicy
  }

  // maxmemory_reserved - computed: true, optional: true, required: false
  private _maxmemoryReserved?: number | undefined; 
  public get maxmemoryReserved() {
    return this.getNumberAttribute('maxmemory_reserved');
  }
  public set maxmemoryReserved(value: number | undefined) {
    this._maxmemoryReserved = value;
  }
  public resetMaxmemoryReserved() {
    this._maxmemoryReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryReservedInput() {
    return this._maxmemoryReserved
  }

  // notify_keyspace_events - computed: false, optional: true, required: false
  private _notifyKeyspaceEvents?: string | undefined; 
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }
  public set notifyKeyspaceEvents(value: string | undefined) {
    this._notifyKeyspaceEvents = value;
  }
  public resetNotifyKeyspaceEvents() {
    this._notifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyKeyspaceEventsInput() {
    return this._notifyKeyspaceEvents
  }

  // rdb_backup_enabled - computed: false, optional: true, required: false
  private _rdbBackupEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get rdbBackupEnabled() {
    return this.getBooleanAttribute('rdb_backup_enabled') as any;
  }
  public set rdbBackupEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._rdbBackupEnabled = value;
  }
  public resetRdbBackupEnabled() {
    this._rdbBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbBackupEnabledInput() {
    return this._rdbBackupEnabled
  }

  // rdb_backup_frequency - computed: false, optional: true, required: false
  private _rdbBackupFrequency?: number | undefined; 
  public get rdbBackupFrequency() {
    return this.getNumberAttribute('rdb_backup_frequency');
  }
  public set rdbBackupFrequency(value: number | undefined) {
    this._rdbBackupFrequency = value;
  }
  public resetRdbBackupFrequency() {
    this._rdbBackupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbBackupFrequencyInput() {
    return this._rdbBackupFrequency
  }

  // rdb_backup_max_snapshot_count - computed: false, optional: true, required: false
  private _rdbBackupMaxSnapshotCount?: number | undefined; 
  public get rdbBackupMaxSnapshotCount() {
    return this.getNumberAttribute('rdb_backup_max_snapshot_count');
  }
  public set rdbBackupMaxSnapshotCount(value: number | undefined) {
    this._rdbBackupMaxSnapshotCount = value;
  }
  public resetRdbBackupMaxSnapshotCount() {
    this._rdbBackupMaxSnapshotCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbBackupMaxSnapshotCountInput() {
    return this._rdbBackupMaxSnapshotCount
  }

  // rdb_storage_connection_string - computed: false, optional: true, required: false
  private _rdbStorageConnectionString?: string | undefined; 
  public get rdbStorageConnectionString() {
    return this.getStringAttribute('rdb_storage_connection_string');
  }
  public set rdbStorageConnectionString(value: string | undefined) {
    this._rdbStorageConnectionString = value;
  }
  public resetRdbStorageConnectionString() {
    this._rdbStorageConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbStorageConnectionStringInput() {
    return this._rdbStorageConnectionString
  }
}
export interface RedisCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#create RedisCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#delete RedisCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#read RedisCache#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html#update RedisCache#update}
  */
  readonly update?: string;
}

function redisCacheTimeoutsToTerraform(struct?: RedisCacheTimeoutsOutputReference | RedisCacheTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class RedisCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html azurerm_redis_cache}
*/
export class RedisCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_redis_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/redis_cache.html azurerm_redis_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisCacheConfig
  */
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
    this._redisVersion = config.redisVersion;
    this._replicasPerMaster = config.replicasPerMaster;
    this._replicasPerPrimary = config.replicasPerPrimary;
    this._resourceGroupName = config.resourceGroupName;
    this._shardCount = config.shardCount;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tenantSettings = config.tenantSettings;
    this._zones = config.zones;
    this._patchSchedule = config.patchSchedule;
    this._redisConfiguration = config.redisConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
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
  private _enableNonSslPort?: boolean | cdktf.IResolvable | undefined; 
  public get enableNonSslPort() {
    return this.getBooleanAttribute('enable_non_ssl_port') as any;
  }
  public set enableNonSslPort(value: boolean | cdktf.IResolvable | undefined) {
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
  private _family?: string; 
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
  private _location?: string; 
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
  private _minimumTlsVersion?: string | undefined; 
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string | undefined) {
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
  private _name?: string; 
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
  private _privateStaticIpAddress?: string | undefined; 
  public get privateStaticIpAddress() {
    return this.getStringAttribute('private_static_ip_address');
  }
  public set privateStaticIpAddress(value: string | undefined) {
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
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // redis_version - computed: true, optional: true, required: false
  private _redisVersion?: string | undefined; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string | undefined) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion
  }

  // replicas_per_master - computed: true, optional: true, required: false
  private _replicasPerMaster?: number | undefined; 
  public get replicasPerMaster() {
    return this.getNumberAttribute('replicas_per_master');
  }
  public set replicasPerMaster(value: number | undefined) {
    this._replicasPerMaster = value;
  }
  public resetReplicasPerMaster() {
    this._replicasPerMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerMasterInput() {
    return this._replicasPerMaster
  }

  // replicas_per_primary - computed: true, optional: true, required: false
  private _replicasPerPrimary?: number | undefined; 
  public get replicasPerPrimary() {
    return this.getNumberAttribute('replicas_per_primary');
  }
  public set replicasPerPrimary(value: number | undefined) {
    this._replicasPerPrimary = value;
  }
  public resetReplicasPerPrimary() {
    this._replicasPerPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerPrimaryInput() {
    return this._replicasPerPrimary
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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
  private _shardCount?: number | undefined; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number | undefined) {
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
  private _skuName?: string; 
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
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tenant_settings - computed: false, optional: true, required: false
  private _tenantSettings?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tenantSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tenant_settings') as any;
  }
  public set tenantSettings(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tenantSettings = value;
  }
  public resetTenantSettings() {
    this._tenantSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantSettingsInput() {
    return this._tenantSettings
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
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
  private _patchSchedule?: RedisCachePatchSchedule[] | undefined; 
  public get patchSchedule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('patch_schedule') as any;
  }
  public set patchSchedule(value: RedisCachePatchSchedule[] | undefined) {
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
  private _redisConfiguration?: RedisCacheRedisConfiguration | undefined; 
  private __redisConfigurationOutput = new RedisCacheRedisConfigurationOutputReference(this as any, "redis_configuration", true);
  public get redisConfiguration() {
    return this.__redisConfigurationOutput;
  }
  public putRedisConfiguration(value: RedisCacheRedisConfiguration | undefined) {
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
  private _timeouts?: RedisCacheTimeouts | undefined; 
  private __timeoutsOutput = new RedisCacheTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RedisCacheTimeouts | undefined) {
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
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      replicas_per_master: cdktf.numberToTerraform(this._replicasPerMaster),
      replicas_per_primary: cdktf.numberToTerraform(this._replicasPerPrimary),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._tenantSettings),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      patch_schedule: cdktf.listMapper(redisCachePatchScheduleToTerraform)(this._patchSchedule),
      redis_configuration: redisCacheRedisConfigurationToTerraform(this._redisConfiguration),
      timeouts: redisCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
