// https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermRedisCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html#name DataAzurermRedisCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html#resource_group_name DataAzurermRedisCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html#timeouts DataAzurermRedisCache#timeouts}
  */
  readonly timeouts?: DataAzurermRedisCacheTimeouts;
}
export class DataAzurermRedisCachePatchSchedule extends cdktf.ComplexComputedList {

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // maintenance_window - computed: true, optional: false, required: false
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }

  // start_hour_utc - computed: true, optional: false, required: false
  public get startHourUtc() {
    return this.getNumberAttribute('start_hour_utc');
  }
}
export class DataAzurermRedisCacheRedisConfiguration extends cdktf.ComplexComputedList {

  // aof_backup_enabled - computed: true, optional: false, required: false
  public get aofBackupEnabled() {
    return this.getBooleanAttribute('aof_backup_enabled') as any;
  }

  // aof_storage_connection_string_0 - computed: true, optional: false, required: false
  public get aofStorageConnectionString0() {
    return this.getStringAttribute('aof_storage_connection_string_0');
  }

  // aof_storage_connection_string_1 - computed: true, optional: false, required: false
  public get aofStorageConnectionString1() {
    return this.getStringAttribute('aof_storage_connection_string_1');
  }

  // enable_authentication - computed: true, optional: false, required: false
  public get enableAuthentication() {
    return this.getBooleanAttribute('enable_authentication') as any;
  }

  // maxclients - computed: true, optional: false, required: false
  public get maxclients() {
    return this.getNumberAttribute('maxclients');
  }

  // maxfragmentationmemory_reserved - computed: true, optional: false, required: false
  public get maxfragmentationmemoryReserved() {
    return this.getNumberAttribute('maxfragmentationmemory_reserved');
  }

  // maxmemory_delta - computed: true, optional: false, required: false
  public get maxmemoryDelta() {
    return this.getNumberAttribute('maxmemory_delta');
  }

  // maxmemory_policy - computed: true, optional: false, required: false
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }

  // maxmemory_reserved - computed: true, optional: false, required: false
  public get maxmemoryReserved() {
    return this.getNumberAttribute('maxmemory_reserved');
  }

  // notify_keyspace_events - computed: true, optional: false, required: false
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }

  // rdb_backup_enabled - computed: true, optional: false, required: false
  public get rdbBackupEnabled() {
    return this.getBooleanAttribute('rdb_backup_enabled') as any;
  }

  // rdb_backup_frequency - computed: true, optional: false, required: false
  public get rdbBackupFrequency() {
    return this.getNumberAttribute('rdb_backup_frequency');
  }

  // rdb_backup_max_snapshot_count - computed: true, optional: false, required: false
  public get rdbBackupMaxSnapshotCount() {
    return this.getNumberAttribute('rdb_backup_max_snapshot_count');
  }

  // rdb_storage_connection_string - computed: true, optional: false, required: false
  public get rdbStorageConnectionString() {
    return this.getStringAttribute('rdb_storage_connection_string');
  }
}
export interface DataAzurermRedisCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html#read DataAzurermRedisCache#read}
  */
  readonly read?: string;
}

function dataAzurermRedisCacheTimeoutsToTerraform(struct?: DataAzurermRedisCacheTimeoutsOutputReference | DataAzurermRedisCacheTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermRedisCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html azurerm_redis_cache}
*/
export class DataAzurermRedisCache extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_redis_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/redis_cache.html azurerm_redis_cache} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermRedisCacheConfig
  */
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // enable_non_ssl_port - computed: true, optional: false, required: false
  public get enableNonSslPort() {
    return this.getBooleanAttribute('enable_non_ssl_port') as any;
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // minimum_tls_version - computed: true, optional: false, required: false
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
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

  // patch_schedule - computed: true, optional: false, required: false
  public patchSchedule(index: string) {
    return new DataAzurermRedisCachePatchSchedule(this, 'patch_schedule', index);
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

  // private_static_ip_address - computed: true, optional: false, required: false
  public get privateStaticIpAddress() {
    return this.getStringAttribute('private_static_ip_address');
  }

  // redis_configuration - computed: true, optional: false, required: false
  public redisConfiguration(index: string) {
    return new DataAzurermRedisCacheRedisConfiguration(this, 'redis_configuration', index);
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

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // ssl_port - computed: true, optional: false, required: false
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermRedisCacheTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermRedisCacheTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermRedisCacheTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermRedisCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
