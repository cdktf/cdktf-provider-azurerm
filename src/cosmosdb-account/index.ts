// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}
  */
  readonly accessKeyMetadataWritesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}
  */
  readonly analyticalStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#create_mode CosmosdbAccount#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}
  */
  readonly defaultIdentityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}
  */
  readonly enableAutomaticFailover?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}
  */
  readonly enableFreeTier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}
  */
  readonly enableMultipleWriteLocations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#id CosmosdbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}
  */
  readonly ipRangeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}
  */
  readonly isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#kind CosmosdbAccount#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}
  */
  readonly localAuthenticationDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#location CosmosdbAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}
  */
  readonly mongoServerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#name CosmosdbAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}
  */
  readonly networkAclBypassForAzureServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}
  */
  readonly networkAclBypassIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#offer_type CosmosdbAccount#offer_type}
  */
  readonly offerType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#tags CosmosdbAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * analytical_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#analytical_storage CosmosdbAccount#analytical_storage}
  */
  readonly analyticalStorage?: CosmosdbAccountAnalyticalStorage;
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#backup CosmosdbAccount#backup}
  */
  readonly backup?: CosmosdbAccountBackup;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#capabilities CosmosdbAccount#capabilities}
  */
  readonly capabilities?: CosmosdbAccountCapabilities[] | cdktf.IResolvable;
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#capacity CosmosdbAccount#capacity}
  */
  readonly capacity?: CosmosdbAccountCapacity;
  /**
  * consistency_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#consistency_policy CosmosdbAccount#consistency_policy}
  */
  readonly consistencyPolicy: CosmosdbAccountConsistencyPolicy;
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#cors_rule CosmosdbAccount#cors_rule}
  */
  readonly corsRule?: CosmosdbAccountCorsRule;
  /**
  * geo_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#geo_location CosmosdbAccount#geo_location}
  */
  readonly geoLocation: CosmosdbAccountGeoLocation[] | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#identity CosmosdbAccount#identity}
  */
  readonly identity?: CosmosdbAccountIdentity;
  /**
  * restore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#restore CosmosdbAccount#restore}
  */
  readonly restore?: CosmosdbAccountRestore;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#timeouts CosmosdbAccount#timeouts}
  */
  readonly timeouts?: CosmosdbAccountTimeouts;
  /**
  * virtual_network_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#virtual_network_rule CosmosdbAccount#virtual_network_rule}
  */
  readonly virtualNetworkRule?: CosmosdbAccountVirtualNetworkRule[] | cdktf.IResolvable;
}
export interface CosmosdbAccountAnalyticalStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#schema_type CosmosdbAccount#schema_type}
  */
  readonly schemaType: string;
}

export function cosmosdbAccountAnalyticalStorageToTerraform(struct?: CosmosdbAccountAnalyticalStorageOutputReference | CosmosdbAccountAnalyticalStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
  }
}

export class CosmosdbAccountAnalyticalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountAnalyticalStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountAnalyticalStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaType = value.schemaType;
    }
  }

  // schema_type - computed: false, optional: false, required: true
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }
}
export interface CosmosdbAccountBackup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}
  */
  readonly intervalInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}
  */
  readonly retentionInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}
  */
  readonly storageRedundancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#type CosmosdbAccount#type}
  */
  readonly type: string;
}

export function cosmosdbAccountBackupToTerraform(struct?: CosmosdbAccountBackupOutputReference | CosmosdbAccountBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_in_minutes: cdktf.numberToTerraform(struct!.intervalInMinutes),
    retention_in_hours: cdktf.numberToTerraform(struct!.retentionInHours),
    storage_redundancy: cdktf.stringToTerraform(struct!.storageRedundancy),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CosmosdbAccountBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInMinutes = this._intervalInMinutes;
    }
    if (this._retentionInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInHours = this._retentionInHours;
    }
    if (this._storageRedundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRedundancy = this._storageRedundancy;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalInMinutes = undefined;
      this._retentionInHours = undefined;
      this._storageRedundancy = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalInMinutes = value.intervalInMinutes;
      this._retentionInHours = value.retentionInHours;
      this._storageRedundancy = value.storageRedundancy;
      this._type = value.type;
    }
  }

  // interval_in_minutes - computed: true, optional: true, required: false
  private _intervalInMinutes?: number; 
  public get intervalInMinutes() {
    return this.getNumberAttribute('interval_in_minutes');
  }
  public set intervalInMinutes(value: number) {
    this._intervalInMinutes = value;
  }
  public resetIntervalInMinutes() {
    this._intervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInMinutesInput() {
    return this._intervalInMinutes;
  }

  // retention_in_hours - computed: true, optional: true, required: false
  private _retentionInHours?: number; 
  public get retentionInHours() {
    return this.getNumberAttribute('retention_in_hours');
  }
  public set retentionInHours(value: number) {
    this._retentionInHours = value;
  }
  public resetRetentionInHours() {
    this._retentionInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInHoursInput() {
    return this._retentionInHours;
  }

  // storage_redundancy - computed: true, optional: true, required: false
  private _storageRedundancy?: string; 
  public get storageRedundancy() {
    return this.getStringAttribute('storage_redundancy');
  }
  public set storageRedundancy(value: string) {
    this._storageRedundancy = value;
  }
  public resetStorageRedundancy() {
    this._storageRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRedundancyInput() {
    return this._storageRedundancy;
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
export interface CosmosdbAccountCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#name CosmosdbAccount#name}
  */
  readonly name: string;
}

export function cosmosdbAccountCapabilitiesToTerraform(struct?: CosmosdbAccountCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CosmosdbAccountCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbAccountCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class CosmosdbAccountCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : CosmosdbAccountCapabilities[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbAccountCapabilitiesOutputReference {
    return new CosmosdbAccountCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbAccountCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}
  */
  readonly totalThroughputLimit: number;
}

export function cosmosdbAccountCapacityToTerraform(struct?: CosmosdbAccountCapacityOutputReference | CosmosdbAccountCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_throughput_limit: cdktf.numberToTerraform(struct!.totalThroughputLimit),
  }
}

export class CosmosdbAccountCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalThroughputLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalThroughputLimit = this._totalThroughputLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalThroughputLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalThroughputLimit = value.totalThroughputLimit;
    }
  }

  // total_throughput_limit - computed: false, optional: false, required: true
  private _totalThroughputLimit?: number; 
  public get totalThroughputLimit() {
    return this.getNumberAttribute('total_throughput_limit');
  }
  public set totalThroughputLimit(value: number) {
    this._totalThroughputLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalThroughputLimitInput() {
    return this._totalThroughputLimit;
  }
}
export interface CosmosdbAccountConsistencyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}
  */
  readonly consistencyLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}
  */
  readonly maxIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}
  */
  readonly maxStalenessPrefix?: number;
}

export function cosmosdbAccountConsistencyPolicyToTerraform(struct?: CosmosdbAccountConsistencyPolicyOutputReference | CosmosdbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistency_level: cdktf.stringToTerraform(struct!.consistencyLevel),
    max_interval_in_seconds: cdktf.numberToTerraform(struct!.maxIntervalInSeconds),
    max_staleness_prefix: cdktf.numberToTerraform(struct!.maxStalenessPrefix),
  }
}

export class CosmosdbAccountConsistencyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountConsistencyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistencyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistencyLevel = this._consistencyLevel;
    }
    if (this._maxIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIntervalInSeconds = this._maxIntervalInSeconds;
    }
    if (this._maxStalenessPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStalenessPrefix = this._maxStalenessPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountConsistencyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consistencyLevel = undefined;
      this._maxIntervalInSeconds = undefined;
      this._maxStalenessPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consistencyLevel = value.consistencyLevel;
      this._maxIntervalInSeconds = value.maxIntervalInSeconds;
      this._maxStalenessPrefix = value.maxStalenessPrefix;
    }
  }

  // consistency_level - computed: false, optional: false, required: true
  private _consistencyLevel?: string; 
  public get consistencyLevel() {
    return this.getStringAttribute('consistency_level');
  }
  public set consistencyLevel(value: string) {
    this._consistencyLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyLevelInput() {
    return this._consistencyLevel;
  }

  // max_interval_in_seconds - computed: true, optional: true, required: false
  private _maxIntervalInSeconds?: number; 
  public get maxIntervalInSeconds() {
    return this.getNumberAttribute('max_interval_in_seconds');
  }
  public set maxIntervalInSeconds(value: number) {
    this._maxIntervalInSeconds = value;
  }
  public resetMaxIntervalInSeconds() {
    this._maxIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInSecondsInput() {
    return this._maxIntervalInSeconds;
  }

  // max_staleness_prefix - computed: true, optional: true, required: false
  private _maxStalenessPrefix?: number; 
  public get maxStalenessPrefix() {
    return this.getNumberAttribute('max_staleness_prefix');
  }
  public set maxStalenessPrefix(value: number) {
    this._maxStalenessPrefix = value;
  }
  public resetMaxStalenessPrefix() {
    this._maxStalenessPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStalenessPrefixInput() {
    return this._maxStalenessPrefix;
  }
}
export interface CosmosdbAccountCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function cosmosdbAccountCorsRuleToTerraform(struct?: CosmosdbAccountCorsRuleOutputReference | CosmosdbAccountCorsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export class CosmosdbAccountCorsRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountCorsRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountCorsRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: false, optional: false, required: true
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_in_seconds - computed: false, optional: false, required: true
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}
export interface CosmosdbAccountGeoLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}
  */
  readonly failoverPriority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#location CosmosdbAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
}

export function cosmosdbAccountGeoLocationToTerraform(struct?: CosmosdbAccountGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_priority: cdktf.numberToTerraform(struct!.failoverPriority),
    location: cdktf.stringToTerraform(struct!.location),
    zone_redundant: cdktf.booleanToTerraform(struct!.zoneRedundant),
  }
}

export class CosmosdbAccountGeoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbAccountGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._zoneRedundant !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneRedundant = this._zoneRedundant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverPriority = undefined;
      this._location = undefined;
      this._zoneRedundant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverPriority = value.failoverPriority;
      this._location = value.location;
      this._zoneRedundant = value.zoneRedundant;
    }
  }

  // failover_priority - computed: false, optional: false, required: true
  private _failoverPriority?: number; 
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }
  public set failoverPriority(value: number) {
    this._failoverPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }

  // id - computed: true, optional: false, required: false
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
    return this._location;
  }

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean | cdktf.IResolvable; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant;
  }
}

export class CosmosdbAccountGeoLocationList extends cdktf.ComplexList {
  public internalValue? : CosmosdbAccountGeoLocation[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbAccountGeoLocationOutputReference {
    return new CosmosdbAccountGeoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#type CosmosdbAccount#type}
  */
  readonly type: string;
}

export function cosmosdbAccountIdentityToTerraform(struct?: CosmosdbAccountIdentityOutputReference | CosmosdbAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CosmosdbAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountIdentity | undefined {
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

  public set internalValue(value: CosmosdbAccountIdentity | undefined) {
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
export interface CosmosdbAccountRestoreDatabase {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#collection_names CosmosdbAccount#collection_names}
  */
  readonly collectionNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#name CosmosdbAccount#name}
  */
  readonly name: string;
}

export function cosmosdbAccountRestoreDatabaseToTerraform(struct?: CosmosdbAccountRestoreDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collectionNames),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CosmosdbAccountRestoreDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbAccountRestoreDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionNames = this._collectionNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountRestoreDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionNames = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionNames = value.collectionNames;
      this._name = value.name;
    }
  }

  // collection_names - computed: false, optional: true, required: false
  private _collectionNames?: string[]; 
  public get collectionNames() {
    return cdktf.Fn.tolist(this.getListAttribute('collection_names'));
  }
  public set collectionNames(value: string[]) {
    this._collectionNames = value;
  }
  public resetCollectionNames() {
    this._collectionNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNamesInput() {
    return this._collectionNames;
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
}

export class CosmosdbAccountRestoreDatabaseList extends cdktf.ComplexList {
  public internalValue? : CosmosdbAccountRestoreDatabase[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbAccountRestoreDatabaseOutputReference {
    return new CosmosdbAccountRestoreDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbAccountRestore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}
  */
  readonly restoreTimestampInUtc: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}
  */
  readonly sourceCosmosdbAccountId: string;
  /**
  * database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#database CosmosdbAccount#database}
  */
  readonly database?: CosmosdbAccountRestoreDatabase[] | cdktf.IResolvable;
}

export function cosmosdbAccountRestoreToTerraform(struct?: CosmosdbAccountRestoreOutputReference | CosmosdbAccountRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restore_timestamp_in_utc: cdktf.stringToTerraform(struct!.restoreTimestampInUtc),
    source_cosmosdb_account_id: cdktf.stringToTerraform(struct!.sourceCosmosdbAccountId),
    database: cdktf.listMapper(cosmosdbAccountRestoreDatabaseToTerraform, true)(struct!.database),
  }
}

export class CosmosdbAccountRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restoreTimestampInUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreTimestampInUtc = this._restoreTimestampInUtc;
    }
    if (this._sourceCosmosdbAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCosmosdbAccountId = this._sourceCosmosdbAccountId;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restoreTimestampInUtc = undefined;
      this._sourceCosmosdbAccountId = undefined;
      this._database.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restoreTimestampInUtc = value.restoreTimestampInUtc;
      this._sourceCosmosdbAccountId = value.sourceCosmosdbAccountId;
      this._database.internalValue = value.database;
    }
  }

  // restore_timestamp_in_utc - computed: false, optional: false, required: true
  private _restoreTimestampInUtc?: string; 
  public get restoreTimestampInUtc() {
    return this.getStringAttribute('restore_timestamp_in_utc');
  }
  public set restoreTimestampInUtc(value: string) {
    this._restoreTimestampInUtc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimestampInUtcInput() {
    return this._restoreTimestampInUtc;
  }

  // source_cosmosdb_account_id - computed: false, optional: false, required: true
  private _sourceCosmosdbAccountId?: string; 
  public get sourceCosmosdbAccountId() {
    return this.getStringAttribute('source_cosmosdb_account_id');
  }
  public set sourceCosmosdbAccountId(value: string) {
    this._sourceCosmosdbAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCosmosdbAccountIdInput() {
    return this._sourceCosmosdbAccountId;
  }

  // database - computed: false, optional: true, required: false
  private _database = new CosmosdbAccountRestoreDatabaseList(this, "database", true);
  public get database() {
    return this._database;
  }
  public putDatabase(value: CosmosdbAccountRestoreDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }
}
export interface CosmosdbAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#create CosmosdbAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#delete CosmosdbAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#read CosmosdbAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#update CosmosdbAccount#update}
  */
  readonly update?: string;
}

export function cosmosdbAccountTimeoutsToTerraform(struct?: CosmosdbAccountTimeoutsOutputReference | CosmosdbAccountTimeouts | cdktf.IResolvable): any {
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

export class CosmosdbAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CosmosdbAccountTimeouts | cdktf.IResolvable | undefined) {
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
export interface CosmosdbAccountVirtualNetworkRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#id CosmosdbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
}

export function cosmosdbAccountVirtualNetworkRuleToTerraform(struct?: CosmosdbAccountVirtualNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
  }
}

export class CosmosdbAccountVirtualNetworkRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosmosdbAccountVirtualNetworkRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreMissingVnetServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingVnetServiceEndpoint = this._ignoreMissingVnetServiceEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbAccountVirtualNetworkRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ignoreMissingVnetServiceEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ignoreMissingVnetServiceEndpoint = value.ignoreMissingVnetServiceEndpoint;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_missing_vnet_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable; 
  public get ignoreMissingVnetServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_vnet_service_endpoint');
  }
  public set ignoreMissingVnetServiceEndpoint(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingVnetServiceEndpoint = value;
  }
  public resetIgnoreMissingVnetServiceEndpoint() {
    this._ignoreMissingVnetServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingVnetServiceEndpointInput() {
    return this._ignoreMissingVnetServiceEndpoint;
  }
}

export class CosmosdbAccountVirtualNetworkRuleList extends cdktf.ComplexList {
  public internalValue? : CosmosdbAccountVirtualNetworkRule[] | cdktf.IResolvable

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
  public get(index: number): CosmosdbAccountVirtualNetworkRuleOutputReference {
    return new CosmosdbAccountVirtualNetworkRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account azurerm_cosmosdb_account}
*/
export class CosmosdbAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cosmosdb_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account azurerm_cosmosdb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.47.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyMetadataWritesEnabled = config.accessKeyMetadataWritesEnabled;
    this._analyticalStorageEnabled = config.analyticalStorageEnabled;
    this._createMode = config.createMode;
    this._defaultIdentityType = config.defaultIdentityType;
    this._enableAutomaticFailover = config.enableAutomaticFailover;
    this._enableFreeTier = config.enableFreeTier;
    this._enableMultipleWriteLocations = config.enableMultipleWriteLocations;
    this._id = config.id;
    this._ipRangeFilter = config.ipRangeFilter;
    this._isVirtualNetworkFilterEnabled = config.isVirtualNetworkFilterEnabled;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._kind = config.kind;
    this._localAuthenticationDisabled = config.localAuthenticationDisabled;
    this._location = config.location;
    this._mongoServerVersion = config.mongoServerVersion;
    this._name = config.name;
    this._networkAclBypassForAzureServices = config.networkAclBypassForAzureServices;
    this._networkAclBypassIds = config.networkAclBypassIds;
    this._offerType = config.offerType;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._analyticalStorage.internalValue = config.analyticalStorage;
    this._backup.internalValue = config.backup;
    this._capabilities.internalValue = config.capabilities;
    this._capacity.internalValue = config.capacity;
    this._consistencyPolicy.internalValue = config.consistencyPolicy;
    this._corsRule.internalValue = config.corsRule;
    this._geoLocation.internalValue = config.geoLocation;
    this._identity.internalValue = config.identity;
    this._restore.internalValue = config.restore;
    this._timeouts.internalValue = config.timeouts;
    this._virtualNetworkRule.internalValue = config.virtualNetworkRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_metadata_writes_enabled - computed: false, optional: true, required: false
  private _accessKeyMetadataWritesEnabled?: boolean | cdktf.IResolvable; 
  public get accessKeyMetadataWritesEnabled() {
    return this.getBooleanAttribute('access_key_metadata_writes_enabled');
  }
  public set accessKeyMetadataWritesEnabled(value: boolean | cdktf.IResolvable) {
    this._accessKeyMetadataWritesEnabled = value;
  }
  public resetAccessKeyMetadataWritesEnabled() {
    this._accessKeyMetadataWritesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyMetadataWritesEnabledInput() {
    return this._accessKeyMetadataWritesEnabled;
  }

  // analytical_storage_enabled - computed: false, optional: true, required: false
  private _analyticalStorageEnabled?: boolean | cdktf.IResolvable; 
  public get analyticalStorageEnabled() {
    return this.getBooleanAttribute('analytical_storage_enabled');
  }
  public set analyticalStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._analyticalStorageEnabled = value;
  }
  public resetAnalyticalStorageEnabled() {
    this._analyticalStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageEnabledInput() {
    return this._analyticalStorageEnabled;
  }

  // connection_strings - computed: true, optional: false, required: false
  public get connectionStrings() {
    return this.getListAttribute('connection_strings');
  }

  // create_mode - computed: true, optional: true, required: false
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // default_identity_type - computed: true, optional: true, required: false
  private _defaultIdentityType?: string; 
  public get defaultIdentityType() {
    return this.getStringAttribute('default_identity_type');
  }
  public set defaultIdentityType(value: string) {
    this._defaultIdentityType = value;
  }
  public resetDefaultIdentityType() {
    this._defaultIdentityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIdentityTypeInput() {
    return this._defaultIdentityType;
  }

  // enable_automatic_failover - computed: false, optional: true, required: false
  private _enableAutomaticFailover?: boolean | cdktf.IResolvable; 
  public get enableAutomaticFailover() {
    return this.getBooleanAttribute('enable_automatic_failover');
  }
  public set enableAutomaticFailover(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticFailover = value;
  }
  public resetEnableAutomaticFailover() {
    this._enableAutomaticFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticFailoverInput() {
    return this._enableAutomaticFailover;
  }

  // enable_free_tier - computed: false, optional: true, required: false
  private _enableFreeTier?: boolean | cdktf.IResolvable; 
  public get enableFreeTier() {
    return this.getBooleanAttribute('enable_free_tier');
  }
  public set enableFreeTier(value: boolean | cdktf.IResolvable) {
    this._enableFreeTier = value;
  }
  public resetEnableFreeTier() {
    this._enableFreeTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFreeTierInput() {
    return this._enableFreeTier;
  }

  // enable_multiple_write_locations - computed: false, optional: true, required: false
  private _enableMultipleWriteLocations?: boolean | cdktf.IResolvable; 
  public get enableMultipleWriteLocations() {
    return this.getBooleanAttribute('enable_multiple_write_locations');
  }
  public set enableMultipleWriteLocations(value: boolean | cdktf.IResolvable) {
    this._enableMultipleWriteLocations = value;
  }
  public resetEnableMultipleWriteLocations() {
    this._enableMultipleWriteLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleWriteLocationsInput() {
    return this._enableMultipleWriteLocations;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // ip_range_filter - computed: false, optional: true, required: false
  private _ipRangeFilter?: string; 
  public get ipRangeFilter() {
    return this.getStringAttribute('ip_range_filter');
  }
  public set ipRangeFilter(value: string) {
    this._ipRangeFilter = value;
  }
  public resetIpRangeFilter() {
    this._ipRangeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeFilterInput() {
    return this._ipRangeFilter;
  }

  // is_virtual_network_filter_enabled - computed: false, optional: true, required: false
  private _isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable; 
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }
  public set isVirtualNetworkFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._isVirtualNetworkFilterEnabled = value;
  }
  public resetIsVirtualNetworkFilterEnabled() {
    this._isVirtualNetworkFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVirtualNetworkFilterEnabledInput() {
    return this._isVirtualNetworkFilterEnabled;
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // local_authentication_disabled - computed: false, optional: true, required: false
  private _localAuthenticationDisabled?: boolean | cdktf.IResolvable; 
  public get localAuthenticationDisabled() {
    return this.getBooleanAttribute('local_authentication_disabled');
  }
  public set localAuthenticationDisabled(value: boolean | cdktf.IResolvable) {
    this._localAuthenticationDisabled = value;
  }
  public resetLocalAuthenticationDisabled() {
    this._localAuthenticationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationDisabledInput() {
    return this._localAuthenticationDisabled;
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

  // mongo_server_version - computed: true, optional: true, required: false
  private _mongoServerVersion?: string; 
  public get mongoServerVersion() {
    return this.getStringAttribute('mongo_server_version');
  }
  public set mongoServerVersion(value: string) {
    this._mongoServerVersion = value;
  }
  public resetMongoServerVersion() {
    this._mongoServerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoServerVersionInput() {
    return this._mongoServerVersion;
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

  // network_acl_bypass_for_azure_services - computed: false, optional: true, required: false
  private _networkAclBypassForAzureServices?: boolean | cdktf.IResolvable; 
  public get networkAclBypassForAzureServices() {
    return this.getBooleanAttribute('network_acl_bypass_for_azure_services');
  }
  public set networkAclBypassForAzureServices(value: boolean | cdktf.IResolvable) {
    this._networkAclBypassForAzureServices = value;
  }
  public resetNetworkAclBypassForAzureServices() {
    this._networkAclBypassForAzureServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclBypassForAzureServicesInput() {
    return this._networkAclBypassForAzureServices;
  }

  // network_acl_bypass_ids - computed: false, optional: true, required: false
  private _networkAclBypassIds?: string[]; 
  public get networkAclBypassIds() {
    return this.getListAttribute('network_acl_bypass_ids');
  }
  public set networkAclBypassIds(value: string[]) {
    this._networkAclBypassIds = value;
  }
  public resetNetworkAclBypassIds() {
    this._networkAclBypassIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclBypassIdsInput() {
    return this._networkAclBypassIds;
  }

  // offer_type - computed: false, optional: false, required: true
  private _offerType?: string; 
  public get offerType() {
    return this.getStringAttribute('offer_type');
  }
  public set offerType(value: string) {
    this._offerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerTypeInput() {
    return this._offerType;
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // primary_readonly_key - computed: true, optional: false, required: false
  public get primaryReadonlyKey() {
    return this.getStringAttribute('primary_readonly_key');
  }

  // primary_readonly_sql_connection_string - computed: true, optional: false, required: false
  public get primaryReadonlySqlConnectionString() {
    return this.getStringAttribute('primary_readonly_sql_connection_string');
  }

  // primary_sql_connection_string - computed: true, optional: false, required: false
  public get primarySqlConnectionString() {
    return this.getStringAttribute('primary_sql_connection_string');
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

  // read_endpoints - computed: true, optional: false, required: false
  public get readEndpoints() {
    return this.getListAttribute('read_endpoints');
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

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // secondary_readonly_key - computed: true, optional: false, required: false
  public get secondaryReadonlyKey() {
    return this.getStringAttribute('secondary_readonly_key');
  }

  // secondary_readonly_sql_connection_string - computed: true, optional: false, required: false
  public get secondaryReadonlySqlConnectionString() {
    return this.getStringAttribute('secondary_readonly_sql_connection_string');
  }

  // secondary_sql_connection_string - computed: true, optional: false, required: false
  public get secondarySqlConnectionString() {
    return this.getStringAttribute('secondary_sql_connection_string');
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

  // write_endpoints - computed: true, optional: false, required: false
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // analytical_storage - computed: false, optional: true, required: false
  private _analyticalStorage = new CosmosdbAccountAnalyticalStorageOutputReference(this, "analytical_storage");
  public get analyticalStorage() {
    return this._analyticalStorage;
  }
  public putAnalyticalStorage(value: CosmosdbAccountAnalyticalStorage) {
    this._analyticalStorage.internalValue = value;
  }
  public resetAnalyticalStorage() {
    this._analyticalStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageInput() {
    return this._analyticalStorage.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new CosmosdbAccountBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: CosmosdbAccountBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new CosmosdbAccountCapabilitiesList(this, "capabilities", true);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: CosmosdbAccountCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new CosmosdbAccountCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: CosmosdbAccountCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // consistency_policy - computed: false, optional: false, required: true
  private _consistencyPolicy = new CosmosdbAccountConsistencyPolicyOutputReference(this, "consistency_policy");
  public get consistencyPolicy() {
    return this._consistencyPolicy;
  }
  public putConsistencyPolicy(value: CosmosdbAccountConsistencyPolicy) {
    this._consistencyPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyPolicyInput() {
    return this._consistencyPolicy.internalValue;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new CosmosdbAccountCorsRuleOutputReference(this, "cors_rule");
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: CosmosdbAccountCorsRule) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // geo_location - computed: false, optional: false, required: true
  private _geoLocation = new CosmosdbAccountGeoLocationList(this, "geo_location", true);
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: CosmosdbAccountGeoLocation[] | cdktf.IResolvable) {
    this._geoLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new CosmosdbAccountIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: CosmosdbAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new CosmosdbAccountRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: CosmosdbAccountRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_network_rule - computed: false, optional: true, required: false
  private _virtualNetworkRule = new CosmosdbAccountVirtualNetworkRuleList(this, "virtual_network_rule", true);
  public get virtualNetworkRule() {
    return this._virtualNetworkRule;
  }
  public putVirtualNetworkRule(value: CosmosdbAccountVirtualNetworkRule[] | cdktf.IResolvable) {
    this._virtualNetworkRule.internalValue = value;
  }
  public resetVirtualNetworkRule() {
    this._virtualNetworkRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRuleInput() {
    return this._virtualNetworkRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_metadata_writes_enabled: cdktf.booleanToTerraform(this._accessKeyMetadataWritesEnabled),
      analytical_storage_enabled: cdktf.booleanToTerraform(this._analyticalStorageEnabled),
      create_mode: cdktf.stringToTerraform(this._createMode),
      default_identity_type: cdktf.stringToTerraform(this._defaultIdentityType),
      enable_automatic_failover: cdktf.booleanToTerraform(this._enableAutomaticFailover),
      enable_free_tier: cdktf.booleanToTerraform(this._enableFreeTier),
      enable_multiple_write_locations: cdktf.booleanToTerraform(this._enableMultipleWriteLocations),
      id: cdktf.stringToTerraform(this._id),
      ip_range_filter: cdktf.stringToTerraform(this._ipRangeFilter),
      is_virtual_network_filter_enabled: cdktf.booleanToTerraform(this._isVirtualNetworkFilterEnabled),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      kind: cdktf.stringToTerraform(this._kind),
      local_authentication_disabled: cdktf.booleanToTerraform(this._localAuthenticationDisabled),
      location: cdktf.stringToTerraform(this._location),
      mongo_server_version: cdktf.stringToTerraform(this._mongoServerVersion),
      name: cdktf.stringToTerraform(this._name),
      network_acl_bypass_for_azure_services: cdktf.booleanToTerraform(this._networkAclBypassForAzureServices),
      network_acl_bypass_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkAclBypassIds),
      offer_type: cdktf.stringToTerraform(this._offerType),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      analytical_storage: cosmosdbAccountAnalyticalStorageToTerraform(this._analyticalStorage.internalValue),
      backup: cosmosdbAccountBackupToTerraform(this._backup.internalValue),
      capabilities: cdktf.listMapper(cosmosdbAccountCapabilitiesToTerraform, true)(this._capabilities.internalValue),
      capacity: cosmosdbAccountCapacityToTerraform(this._capacity.internalValue),
      consistency_policy: cosmosdbAccountConsistencyPolicyToTerraform(this._consistencyPolicy.internalValue),
      cors_rule: cosmosdbAccountCorsRuleToTerraform(this._corsRule.internalValue),
      geo_location: cdktf.listMapper(cosmosdbAccountGeoLocationToTerraform, true)(this._geoLocation.internalValue),
      identity: cosmosdbAccountIdentityToTerraform(this._identity.internalValue),
      restore: cosmosdbAccountRestoreToTerraform(this._restore.internalValue),
      timeouts: cosmosdbAccountTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_network_rule: cdktf.listMapper(cosmosdbAccountVirtualNetworkRuleToTerraform, true)(this._virtualNetworkRule.internalValue),
    };
  }
}
