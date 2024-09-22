// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermRedisCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache#id DataAzurermRedisCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache#name DataAzurermRedisCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache#resource_group_name DataAzurermRedisCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache#timeouts DataAzurermRedisCache#timeouts}
  */
  readonly timeouts?: DataAzurermRedisCacheTimeouts;
}
export interface DataAzurermRedisCachePatchSchedule {
}

export function dataAzurermRedisCachePatchScheduleToTerraform(struct?: DataAzurermRedisCachePatchSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermRedisCachePatchScheduleToHclTerraform(struct?: DataAzurermRedisCachePatchSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRedisCachePatchScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRedisCachePatchSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRedisCachePatchSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAzurermRedisCachePatchScheduleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermRedisCachePatchScheduleOutputReference {
    return new DataAzurermRedisCachePatchScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRedisCacheRedisConfiguration {
}

export function dataAzurermRedisCacheRedisConfigurationToTerraform(struct?: DataAzurermRedisCacheRedisConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermRedisCacheRedisConfigurationToHclTerraform(struct?: DataAzurermRedisCacheRedisConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRedisCacheRedisConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRedisCacheRedisConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRedisCacheRedisConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_authentication_enabled - computed: true, optional: false, required: false
  public get activeDirectoryAuthenticationEnabled() {
    return this.getBooleanAttribute('active_directory_authentication_enabled');
  }

  // aof_backup_enabled - computed: true, optional: false, required: false
  public get aofBackupEnabled() {
    return this.getBooleanAttribute('aof_backup_enabled');
  }

  // aof_storage_connection_string_0 - computed: true, optional: false, required: false
  public get aofStorageConnectionString0() {
    return this.getStringAttribute('aof_storage_connection_string_0');
  }

  // aof_storage_connection_string_1 - computed: true, optional: false, required: false
  public get aofStorageConnectionString1() {
    return this.getStringAttribute('aof_storage_connection_string_1');
  }

  // authentication_enabled - computed: true, optional: false, required: false
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }

  // data_persistence_authentication_method - computed: true, optional: false, required: false
  public get dataPersistenceAuthenticationMethod() {
    return this.getStringAttribute('data_persistence_authentication_method');
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
    return this.getBooleanAttribute('rdb_backup_enabled');
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

  // storage_account_subscription_id - computed: true, optional: false, required: false
  public get storageAccountSubscriptionId() {
    return this.getStringAttribute('storage_account_subscription_id');
  }
}

export class DataAzurermRedisCacheRedisConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermRedisCacheRedisConfigurationOutputReference {
    return new DataAzurermRedisCacheRedisConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRedisCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache#read DataAzurermRedisCache#read}
  */
  readonly read?: string;
}

export function dataAzurermRedisCacheTimeoutsToTerraform(struct?: DataAzurermRedisCacheTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermRedisCacheTimeoutsToHclTerraform(struct?: DataAzurermRedisCacheTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermRedisCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermRedisCacheTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRedisCacheTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache azurerm_redis_cache}
*/
export class DataAzurermRedisCache extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_redis_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermRedisCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermRedisCache to import
  * @param importFromId The id of the existing DataAzurermRedisCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermRedisCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_redis_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/redis_cache azurerm_redis_cache} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermRedisCacheConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermRedisCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_keys_authentication_enabled - computed: true, optional: false, required: false
  public get accessKeysAuthenticationEnabled() {
    return this.getBooleanAttribute('access_keys_authentication_enabled');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // non_ssl_port_enabled - computed: true, optional: false, required: false
  public get nonSslPortEnabled() {
    return this.getBooleanAttribute('non_ssl_port_enabled');
  }

  // patch_schedule - computed: true, optional: false, required: false
  private _patchSchedule = new DataAzurermRedisCachePatchScheduleList(this, "patch_schedule", false);
  public get patchSchedule() {
    return this._patchSchedule;
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
  private _redisConfiguration = new DataAzurermRedisCacheRedisConfigurationList(this, "redis_configuration", false);
  public get redisConfiguration() {
    return this._redisConfiguration;
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
    return this._resourceGroupName;
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
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermRedisCacheTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermRedisCacheTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermRedisCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermRedisCacheTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermRedisCacheTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
