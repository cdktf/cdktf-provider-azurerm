// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}
  */
  readonly accessKeysAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#capacity RedisCache#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#family RedisCache#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#id RedisCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#location RedisCache#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#name RedisCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}
  */
  readonly nonSslPortEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}
  */
  readonly privateStaticIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}
  */
  readonly replicasPerMaster?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}
  */
  readonly replicasPerPrimary?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#tags RedisCache#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}
  */
  readonly tenantSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#zones RedisCache#zones}
  */
  readonly zones?: string[];
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#identity RedisCache#identity}
  */
  readonly identity?: RedisCacheIdentity;
  /**
  * patch_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}
  */
  readonly patchSchedule?: RedisCachePatchSchedule[] | cdktf.IResolvable;
  /**
  * redis_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}
  */
  readonly redisConfiguration?: RedisCacheRedisConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}
  */
  readonly timeouts?: RedisCacheTimeouts;
}
export interface RedisCacheIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#type RedisCache#type}
  */
  readonly type: string;
}

export function redisCacheIdentityToTerraform(struct?: RedisCacheIdentityOutputReference | RedisCacheIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function redisCacheIdentityToHclTerraform(struct?: RedisCacheIdentityOutputReference | RedisCacheIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisCacheIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisCacheIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisCacheIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface RedisCachePatchSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}
  */
  readonly startHourUtc?: number;
}

export function redisCachePatchScheduleToTerraform(struct?: RedisCachePatchSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    maintenance_window: cdktf.stringToTerraform(struct!.maintenanceWindow),
    start_hour_utc: cdktf.numberToTerraform(struct!.startHourUtc),
  }
}


export function redisCachePatchScheduleToHclTerraform(struct?: RedisCachePatchSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour_utc: {
      value: cdktf.numberToHclTerraform(struct!.startHourUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisCachePatchScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedisCachePatchSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._maintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow;
    }
    if (this._startHourUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHourUtc = this._startHourUtc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisCachePatchSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._maintenanceWindow = undefined;
      this._startHourUtc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._maintenanceWindow = value.maintenanceWindow;
      this._startHourUtc = value.startHourUtc;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }

  // start_hour_utc - computed: false, optional: true, required: false
  private _startHourUtc?: number; 
  public get startHourUtc() {
    return this.getNumberAttribute('start_hour_utc');
  }
  public set startHourUtc(value: number) {
    this._startHourUtc = value;
  }
  public resetStartHourUtc() {
    this._startHourUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourUtcInput() {
    return this._startHourUtc;
  }
}

export class RedisCachePatchScheduleList extends cdktf.ComplexList {
  public internalValue? : RedisCachePatchSchedule[] | cdktf.IResolvable

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
  public get(index: number): RedisCachePatchScheduleOutputReference {
    return new RedisCachePatchScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisCacheRedisConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}
  */
  readonly activeDirectoryAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}
  */
  readonly aofBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}
  */
  readonly aofStorageConnectionString0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}
  */
  readonly aofStorageConnectionString1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#authentication_enabled RedisCache#authentication_enabled}
  */
  readonly authenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}
  */
  readonly dataPersistenceAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}
  */
  readonly maxfragmentationmemoryReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}
  */
  readonly maxmemoryDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}
  */
  readonly maxmemoryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}
  */
  readonly maxmemoryReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}
  */
  readonly notifyKeyspaceEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}
  */
  readonly rdbBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}
  */
  readonly rdbBackupFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}
  */
  readonly rdbBackupMaxSnapshotCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}
  */
  readonly rdbStorageConnectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}
  */
  readonly storageAccountSubscriptionId?: string;
}

export function redisCacheRedisConfigurationToTerraform(struct?: RedisCacheRedisConfigurationOutputReference | RedisCacheRedisConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_authentication_enabled: cdktf.booleanToTerraform(struct!.activeDirectoryAuthenticationEnabled),
    aof_backup_enabled: cdktf.booleanToTerraform(struct!.aofBackupEnabled),
    aof_storage_connection_string_0: cdktf.stringToTerraform(struct!.aofStorageConnectionString0),
    aof_storage_connection_string_1: cdktf.stringToTerraform(struct!.aofStorageConnectionString1),
    authentication_enabled: cdktf.booleanToTerraform(struct!.authenticationEnabled),
    data_persistence_authentication_method: cdktf.stringToTerraform(struct!.dataPersistenceAuthenticationMethod),
    maxfragmentationmemory_reserved: cdktf.numberToTerraform(struct!.maxfragmentationmemoryReserved),
    maxmemory_delta: cdktf.numberToTerraform(struct!.maxmemoryDelta),
    maxmemory_policy: cdktf.stringToTerraform(struct!.maxmemoryPolicy),
    maxmemory_reserved: cdktf.numberToTerraform(struct!.maxmemoryReserved),
    notify_keyspace_events: cdktf.stringToTerraform(struct!.notifyKeyspaceEvents),
    rdb_backup_enabled: cdktf.booleanToTerraform(struct!.rdbBackupEnabled),
    rdb_backup_frequency: cdktf.numberToTerraform(struct!.rdbBackupFrequency),
    rdb_backup_max_snapshot_count: cdktf.numberToTerraform(struct!.rdbBackupMaxSnapshotCount),
    rdb_storage_connection_string: cdktf.stringToTerraform(struct!.rdbStorageConnectionString),
    storage_account_subscription_id: cdktf.stringToTerraform(struct!.storageAccountSubscriptionId),
  }
}


export function redisCacheRedisConfigurationToHclTerraform(struct?: RedisCacheRedisConfigurationOutputReference | RedisCacheRedisConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_authentication_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.activeDirectoryAuthenticationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aof_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aofBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aof_storage_connection_string_0: {
      value: cdktf.stringToHclTerraform(struct!.aofStorageConnectionString0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aof_storage_connection_string_1: {
      value: cdktf.stringToHclTerraform(struct!.aofStorageConnectionString1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_persistence_authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.dataPersistenceAuthenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxfragmentationmemory_reserved: {
      value: cdktf.numberToHclTerraform(struct!.maxfragmentationmemoryReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxmemory_delta: {
      value: cdktf.numberToHclTerraform(struct!.maxmemoryDelta),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxmemory_policy: {
      value: cdktf.stringToHclTerraform(struct!.maxmemoryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxmemory_reserved: {
      value: cdktf.numberToHclTerraform(struct!.maxmemoryReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_keyspace_events: {
      value: cdktf.stringToHclTerraform(struct!.notifyKeyspaceEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdb_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rdbBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rdb_backup_frequency: {
      value: cdktf.numberToHclTerraform(struct!.rdbBackupFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdb_backup_max_snapshot_count: {
      value: cdktf.numberToHclTerraform(struct!.rdbBackupMaxSnapshotCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdb_storage_connection_string: {
      value: cdktf.stringToHclTerraform(struct!.rdbStorageConnectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisCacheRedisConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisCacheRedisConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryAuthenticationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryAuthenticationEnabled = this._activeDirectoryAuthenticationEnabled;
    }
    if (this._aofBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aofBackupEnabled = this._aofBackupEnabled;
    }
    if (this._aofStorageConnectionString0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.aofStorageConnectionString0 = this._aofStorageConnectionString0;
    }
    if (this._aofStorageConnectionString1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.aofStorageConnectionString1 = this._aofStorageConnectionString1;
    }
    if (this._authenticationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationEnabled = this._authenticationEnabled;
    }
    if (this._dataPersistenceAuthenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPersistenceAuthenticationMethod = this._dataPersistenceAuthenticationMethod;
    }
    if (this._maxfragmentationmemoryReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxfragmentationmemoryReserved = this._maxfragmentationmemoryReserved;
    }
    if (this._maxmemoryDelta !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemoryDelta = this._maxmemoryDelta;
    }
    if (this._maxmemoryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemoryPolicy = this._maxmemoryPolicy;
    }
    if (this._maxmemoryReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemoryReserved = this._maxmemoryReserved;
    }
    if (this._notifyKeyspaceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyKeyspaceEvents = this._notifyKeyspaceEvents;
    }
    if (this._rdbBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbBackupEnabled = this._rdbBackupEnabled;
    }
    if (this._rdbBackupFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbBackupFrequency = this._rdbBackupFrequency;
    }
    if (this._rdbBackupMaxSnapshotCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbBackupMaxSnapshotCount = this._rdbBackupMaxSnapshotCount;
    }
    if (this._rdbStorageConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbStorageConnectionString = this._rdbStorageConnectionString;
    }
    if (this._storageAccountSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountSubscriptionId = this._storageAccountSubscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisCacheRedisConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectoryAuthenticationEnabled = undefined;
      this._aofBackupEnabled = undefined;
      this._aofStorageConnectionString0 = undefined;
      this._aofStorageConnectionString1 = undefined;
      this._authenticationEnabled = undefined;
      this._dataPersistenceAuthenticationMethod = undefined;
      this._maxfragmentationmemoryReserved = undefined;
      this._maxmemoryDelta = undefined;
      this._maxmemoryPolicy = undefined;
      this._maxmemoryReserved = undefined;
      this._notifyKeyspaceEvents = undefined;
      this._rdbBackupEnabled = undefined;
      this._rdbBackupFrequency = undefined;
      this._rdbBackupMaxSnapshotCount = undefined;
      this._rdbStorageConnectionString = undefined;
      this._storageAccountSubscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectoryAuthenticationEnabled = value.activeDirectoryAuthenticationEnabled;
      this._aofBackupEnabled = value.aofBackupEnabled;
      this._aofStorageConnectionString0 = value.aofStorageConnectionString0;
      this._aofStorageConnectionString1 = value.aofStorageConnectionString1;
      this._authenticationEnabled = value.authenticationEnabled;
      this._dataPersistenceAuthenticationMethod = value.dataPersistenceAuthenticationMethod;
      this._maxfragmentationmemoryReserved = value.maxfragmentationmemoryReserved;
      this._maxmemoryDelta = value.maxmemoryDelta;
      this._maxmemoryPolicy = value.maxmemoryPolicy;
      this._maxmemoryReserved = value.maxmemoryReserved;
      this._notifyKeyspaceEvents = value.notifyKeyspaceEvents;
      this._rdbBackupEnabled = value.rdbBackupEnabled;
      this._rdbBackupFrequency = value.rdbBackupFrequency;
      this._rdbBackupMaxSnapshotCount = value.rdbBackupMaxSnapshotCount;
      this._rdbStorageConnectionString = value.rdbStorageConnectionString;
      this._storageAccountSubscriptionId = value.storageAccountSubscriptionId;
    }
  }

  // active_directory_authentication_enabled - computed: false, optional: true, required: false
  private _activeDirectoryAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get activeDirectoryAuthenticationEnabled() {
    return this.getBooleanAttribute('active_directory_authentication_enabled');
  }
  public set activeDirectoryAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._activeDirectoryAuthenticationEnabled = value;
  }
  public resetActiveDirectoryAuthenticationEnabled() {
    this._activeDirectoryAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAuthenticationEnabledInput() {
    return this._activeDirectoryAuthenticationEnabled;
  }

  // aof_backup_enabled - computed: false, optional: true, required: false
  private _aofBackupEnabled?: boolean | cdktf.IResolvable; 
  public get aofBackupEnabled() {
    return this.getBooleanAttribute('aof_backup_enabled');
  }
  public set aofBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._aofBackupEnabled = value;
  }
  public resetAofBackupEnabled() {
    this._aofBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofBackupEnabledInput() {
    return this._aofBackupEnabled;
  }

  // aof_storage_connection_string_0 - computed: false, optional: true, required: false
  private _aofStorageConnectionString0?: string; 
  public get aofStorageConnectionString0() {
    return this.getStringAttribute('aof_storage_connection_string_0');
  }
  public set aofStorageConnectionString0(value: string) {
    this._aofStorageConnectionString0 = value;
  }
  public resetAofStorageConnectionString0() {
    this._aofStorageConnectionString0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofStorageConnectionString0Input() {
    return this._aofStorageConnectionString0;
  }

  // aof_storage_connection_string_1 - computed: false, optional: true, required: false
  private _aofStorageConnectionString1?: string; 
  public get aofStorageConnectionString1() {
    return this.getStringAttribute('aof_storage_connection_string_1');
  }
  public set aofStorageConnectionString1(value: string) {
    this._aofStorageConnectionString1 = value;
  }
  public resetAofStorageConnectionString1() {
    this._aofStorageConnectionString1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofStorageConnectionString1Input() {
    return this._aofStorageConnectionString1;
  }

  // authentication_enabled - computed: false, optional: true, required: false
  private _authenticationEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }
  public set authenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationEnabled = value;
  }
  public resetAuthenticationEnabled() {
    this._authenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnabledInput() {
    return this._authenticationEnabled;
  }

  // data_persistence_authentication_method - computed: false, optional: true, required: false
  private _dataPersistenceAuthenticationMethod?: string; 
  public get dataPersistenceAuthenticationMethod() {
    return this.getStringAttribute('data_persistence_authentication_method');
  }
  public set dataPersistenceAuthenticationMethod(value: string) {
    this._dataPersistenceAuthenticationMethod = value;
  }
  public resetDataPersistenceAuthenticationMethod() {
    this._dataPersistenceAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPersistenceAuthenticationMethodInput() {
    return this._dataPersistenceAuthenticationMethod;
  }

  // maxclients - computed: true, optional: false, required: false
  public get maxclients() {
    return this.getNumberAttribute('maxclients');
  }

  // maxfragmentationmemory_reserved - computed: true, optional: true, required: false
  private _maxfragmentationmemoryReserved?: number; 
  public get maxfragmentationmemoryReserved() {
    return this.getNumberAttribute('maxfragmentationmemory_reserved');
  }
  public set maxfragmentationmemoryReserved(value: number) {
    this._maxfragmentationmemoryReserved = value;
  }
  public resetMaxfragmentationmemoryReserved() {
    this._maxfragmentationmemoryReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxfragmentationmemoryReservedInput() {
    return this._maxfragmentationmemoryReserved;
  }

  // maxmemory_delta - computed: true, optional: true, required: false
  private _maxmemoryDelta?: number; 
  public get maxmemoryDelta() {
    return this.getNumberAttribute('maxmemory_delta');
  }
  public set maxmemoryDelta(value: number) {
    this._maxmemoryDelta = value;
  }
  public resetMaxmemoryDelta() {
    this._maxmemoryDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryDeltaInput() {
    return this._maxmemoryDelta;
  }

  // maxmemory_policy - computed: false, optional: true, required: false
  private _maxmemoryPolicy?: string; 
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }
  public set maxmemoryPolicy(value: string) {
    this._maxmemoryPolicy = value;
  }
  public resetMaxmemoryPolicy() {
    this._maxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryPolicyInput() {
    return this._maxmemoryPolicy;
  }

  // maxmemory_reserved - computed: true, optional: true, required: false
  private _maxmemoryReserved?: number; 
  public get maxmemoryReserved() {
    return this.getNumberAttribute('maxmemory_reserved');
  }
  public set maxmemoryReserved(value: number) {
    this._maxmemoryReserved = value;
  }
  public resetMaxmemoryReserved() {
    this._maxmemoryReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryReservedInput() {
    return this._maxmemoryReserved;
  }

  // notify_keyspace_events - computed: false, optional: true, required: false
  private _notifyKeyspaceEvents?: string; 
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }
  public set notifyKeyspaceEvents(value: string) {
    this._notifyKeyspaceEvents = value;
  }
  public resetNotifyKeyspaceEvents() {
    this._notifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyKeyspaceEventsInput() {
    return this._notifyKeyspaceEvents;
  }

  // rdb_backup_enabled - computed: false, optional: true, required: false
  private _rdbBackupEnabled?: boolean | cdktf.IResolvable; 
  public get rdbBackupEnabled() {
    return this.getBooleanAttribute('rdb_backup_enabled');
  }
  public set rdbBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._rdbBackupEnabled = value;
  }
  public resetRdbBackupEnabled() {
    this._rdbBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbBackupEnabledInput() {
    return this._rdbBackupEnabled;
  }

  // rdb_backup_frequency - computed: false, optional: true, required: false
  private _rdbBackupFrequency?: number; 
  public get rdbBackupFrequency() {
    return this.getNumberAttribute('rdb_backup_frequency');
  }
  public set rdbBackupFrequency(value: number) {
    this._rdbBackupFrequency = value;
  }
  public resetRdbBackupFrequency() {
    this._rdbBackupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbBackupFrequencyInput() {
    return this._rdbBackupFrequency;
  }

  // rdb_backup_max_snapshot_count - computed: false, optional: true, required: false
  private _rdbBackupMaxSnapshotCount?: number; 
  public get rdbBackupMaxSnapshotCount() {
    return this.getNumberAttribute('rdb_backup_max_snapshot_count');
  }
  public set rdbBackupMaxSnapshotCount(value: number) {
    this._rdbBackupMaxSnapshotCount = value;
  }
  public resetRdbBackupMaxSnapshotCount() {
    this._rdbBackupMaxSnapshotCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbBackupMaxSnapshotCountInput() {
    return this._rdbBackupMaxSnapshotCount;
  }

  // rdb_storage_connection_string - computed: false, optional: true, required: false
  private _rdbStorageConnectionString?: string; 
  public get rdbStorageConnectionString() {
    return this.getStringAttribute('rdb_storage_connection_string');
  }
  public set rdbStorageConnectionString(value: string) {
    this._rdbStorageConnectionString = value;
  }
  public resetRdbStorageConnectionString() {
    this._rdbStorageConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbStorageConnectionStringInput() {
    return this._rdbStorageConnectionString;
  }

  // storage_account_subscription_id - computed: false, optional: true, required: false
  private _storageAccountSubscriptionId?: string; 
  public get storageAccountSubscriptionId() {
    return this.getStringAttribute('storage_account_subscription_id');
  }
  public set storageAccountSubscriptionId(value: string) {
    this._storageAccountSubscriptionId = value;
  }
  public resetStorageAccountSubscriptionId() {
    this._storageAccountSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountSubscriptionIdInput() {
    return this._storageAccountSubscriptionId;
  }
}
export interface RedisCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#create RedisCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#delete RedisCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#read RedisCache#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#update RedisCache#update}
  */
  readonly update?: string;
}

export function redisCacheTimeoutsToTerraform(struct?: RedisCacheTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function redisCacheTimeoutsToHclTerraform(struct?: RedisCacheTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisCacheTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisCacheTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache azurerm_redis_cache}
*/
export class RedisCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_redis_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisCache to import
  * @param importFromId The id of the existing RedisCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_redis_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_cache azurerm_redis_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisCacheConfig
  */
  public constructor(scope: Construct, id: string, config: RedisCacheConfig) {
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
    this._accessKeysAuthenticationEnabled = config.accessKeysAuthenticationEnabled;
    this._capacity = config.capacity;
    this._family = config.family;
    this._id = config.id;
    this._location = config.location;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._nonSslPortEnabled = config.nonSslPortEnabled;
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
    this._identity.internalValue = config.identity;
    this._patchSchedule.internalValue = config.patchSchedule;
    this._redisConfiguration.internalValue = config.redisConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_keys_authentication_enabled - computed: false, optional: true, required: false
  private _accessKeysAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get accessKeysAuthenticationEnabled() {
    return this.getBooleanAttribute('access_keys_authentication_enabled');
  }
  public set accessKeysAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._accessKeysAuthenticationEnabled = value;
  }
  public resetAccessKeysAuthenticationEnabled() {
    this._accessKeysAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeysAuthenticationEnabledInput() {
    return this._accessKeysAuthenticationEnabled;
  }

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
    return this._capacity;
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
    return this._family;
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
    return this._location;
  }

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string; 
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion;
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

  // non_ssl_port_enabled - computed: false, optional: true, required: false
  private _nonSslPortEnabled?: boolean | cdktf.IResolvable; 
  public get nonSslPortEnabled() {
    return this.getBooleanAttribute('non_ssl_port_enabled');
  }
  public set nonSslPortEnabled(value: boolean | cdktf.IResolvable) {
    this._nonSslPortEnabled = value;
  }
  public resetNonSslPortEnabled() {
    this._nonSslPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSslPortEnabledInput() {
    return this._nonSslPortEnabled;
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
    return this._privateStaticIpAddress;
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // redis_version - computed: false, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // replicas_per_master - computed: true, optional: true, required: false
  private _replicasPerMaster?: number; 
  public get replicasPerMaster() {
    return this.getNumberAttribute('replicas_per_master');
  }
  public set replicasPerMaster(value: number) {
    this._replicasPerMaster = value;
  }
  public resetReplicasPerMaster() {
    this._replicasPerMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerMasterInput() {
    return this._replicasPerMaster;
  }

  // replicas_per_primary - computed: true, optional: true, required: false
  private _replicasPerPrimary?: number; 
  public get replicasPerPrimary() {
    return this.getNumberAttribute('replicas_per_primary');
  }
  public set replicasPerPrimary(value: number) {
    this._replicasPerPrimary = value;
  }
  public resetReplicasPerPrimary() {
    this._replicasPerPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerPrimaryInput() {
    return this._replicasPerPrimary;
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

  // shard_count - computed: false, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
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
    return this._skuName;
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
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_settings - computed: false, optional: true, required: false
  private _tenantSettings?: { [key: string]: string }; 
  public get tenantSettings() {
    return this.getStringMapAttribute('tenant_settings');
  }
  public set tenantSettings(value: { [key: string]: string }) {
    this._tenantSettings = value;
  }
  public resetTenantSettings() {
    this._tenantSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantSettingsInput() {
    return this._tenantSettings;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new RedisCacheIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: RedisCacheIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // patch_schedule - computed: false, optional: true, required: false
  private _patchSchedule = new RedisCachePatchScheduleList(this, "patch_schedule", false);
  public get patchSchedule() {
    return this._patchSchedule;
  }
  public putPatchSchedule(value: RedisCachePatchSchedule[] | cdktf.IResolvable) {
    this._patchSchedule.internalValue = value;
  }
  public resetPatchSchedule() {
    this._patchSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchScheduleInput() {
    return this._patchSchedule.internalValue;
  }

  // redis_configuration - computed: false, optional: true, required: false
  private _redisConfiguration = new RedisCacheRedisConfigurationOutputReference(this, "redis_configuration");
  public get redisConfiguration() {
    return this._redisConfiguration;
  }
  public putRedisConfiguration(value: RedisCacheRedisConfiguration) {
    this._redisConfiguration.internalValue = value;
  }
  public resetRedisConfiguration() {
    this._redisConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisConfigurationInput() {
    return this._redisConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisCacheTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisCacheTimeouts) {
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
      access_keys_authentication_enabled: cdktf.booleanToTerraform(this._accessKeysAuthenticationEnabled),
      capacity: cdktf.numberToTerraform(this._capacity),
      family: cdktf.stringToTerraform(this._family),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      minimum_tls_version: cdktf.stringToTerraform(this._minimumTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      non_ssl_port_enabled: cdktf.booleanToTerraform(this._nonSslPortEnabled),
      private_static_ip_address: cdktf.stringToTerraform(this._privateStaticIpAddress),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      replicas_per_master: cdktf.numberToTerraform(this._replicasPerMaster),
      replicas_per_primary: cdktf.numberToTerraform(this._replicasPerPrimary),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._tenantSettings),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      identity: redisCacheIdentityToTerraform(this._identity.internalValue),
      patch_schedule: cdktf.listMapper(redisCachePatchScheduleToTerraform, true)(this._patchSchedule.internalValue),
      redis_configuration: redisCacheRedisConfigurationToTerraform(this._redisConfiguration.internalValue),
      timeouts: redisCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_keys_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._accessKeysAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_tls_version: {
        value: cdktf.stringToHclTerraform(this._minimumTlsVersion),
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
      non_ssl_port_enabled: {
        value: cdktf.booleanToHclTerraform(this._nonSslPortEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_static_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateStaticIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas_per_master: {
        value: cdktf.numberToHclTerraform(this._replicasPerMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replicas_per_primary: {
        value: cdktf.numberToHclTerraform(this._replicasPerPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tenantSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      identity: {
        value: redisCacheIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisCacheIdentityList",
      },
      patch_schedule: {
        value: cdktf.listMapperHcl(redisCachePatchScheduleToHclTerraform, true)(this._patchSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisCachePatchScheduleList",
      },
      redis_configuration: {
        value: redisCacheRedisConfigurationToHclTerraform(this._redisConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisCacheRedisConfigurationList",
      },
      timeouts: {
        value: redisCacheTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisCacheTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
