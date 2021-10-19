// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}
  */
  readonly accessKeyMetadataWritesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}
  */
  readonly analyticalStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}
  */
  readonly enableAutomaticFailover?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#enable_free_tier CosmosdbAccount#enable_free_tier}
  */
  readonly enableFreeTier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}
  */
  readonly enableMultipleWriteLocations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#ip_range_filter CosmosdbAccount#ip_range_filter}
  */
  readonly ipRangeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}
  */
  readonly isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#key_vault_key_id CosmosdbAccount#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#kind CosmosdbAccount#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}
  */
  readonly localAuthenticationDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#location CosmosdbAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#mongo_server_version CosmosdbAccount#mongo_server_version}
  */
  readonly mongoServerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#name CosmosdbAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}
  */
  readonly networkAclBypassForAzureServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}
  */
  readonly networkAclBypassIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#offer_type CosmosdbAccount#offer_type}
  */
  readonly offerType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#resource_group_name CosmosdbAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#tags CosmosdbAccount#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#backup CosmosdbAccount#backup}
  */
  readonly backup?: CosmosdbAccountBackup;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#capabilities CosmosdbAccount#capabilities}
  */
  readonly capabilities?: CosmosdbAccountCapabilities[];
  /**
  * consistency_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#consistency_policy CosmosdbAccount#consistency_policy}
  */
  readonly consistencyPolicy: CosmosdbAccountConsistencyPolicy;
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#cors_rule CosmosdbAccount#cors_rule}
  */
  readonly corsRule?: CosmosdbAccountCorsRule;
  /**
  * geo_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#geo_location CosmosdbAccount#geo_location}
  */
  readonly geoLocation: CosmosdbAccountGeoLocation[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#identity CosmosdbAccount#identity}
  */
  readonly identity?: CosmosdbAccountIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#timeouts CosmosdbAccount#timeouts}
  */
  readonly timeouts?: CosmosdbAccountTimeouts;
  /**
  * virtual_network_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#virtual_network_rule CosmosdbAccount#virtual_network_rule}
  */
  readonly virtualNetworkRule?: CosmosdbAccountVirtualNetworkRule[];
}
export interface CosmosdbAccountBackup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#interval_in_minutes CosmosdbAccount#interval_in_minutes}
  */
  readonly intervalInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#retention_in_hours CosmosdbAccount#retention_in_hours}
  */
  readonly retentionInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#type CosmosdbAccount#type}
  */
  readonly type: string;
}

function cosmosdbAccountBackupToTerraform(struct?: CosmosdbAccountBackupOutputReference | CosmosdbAccountBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_in_minutes: cdktf.numberToTerraform(struct!.intervalInMinutes),
    retention_in_hours: cdktf.numberToTerraform(struct!.retentionInHours),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CosmosdbAccountBackupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // interval_in_minutes - computed: true, optional: true, required: false
  private _intervalInMinutes?: number | undefined; 
  public get intervalInMinutes() {
    return this.getNumberAttribute('interval_in_minutes');
  }
  public set intervalInMinutes(value: number | undefined) {
    this._intervalInMinutes = value;
  }
  public resetIntervalInMinutes() {
    this._intervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInMinutesInput() {
    return this._intervalInMinutes
  }

  // retention_in_hours - computed: true, optional: true, required: false
  private _retentionInHours?: number | undefined; 
  public get retentionInHours() {
    return this.getNumberAttribute('retention_in_hours');
  }
  public set retentionInHours(value: number | undefined) {
    this._retentionInHours = value;
  }
  public resetRetentionInHours() {
    this._retentionInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInHoursInput() {
    return this._retentionInHours
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
    return this._type
  }
}
export interface CosmosdbAccountCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#name CosmosdbAccount#name}
  */
  readonly name: string;
}

function cosmosdbAccountCapabilitiesToTerraform(struct?: CosmosdbAccountCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CosmosdbAccountConsistencyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#consistency_level CosmosdbAccount#consistency_level}
  */
  readonly consistencyLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}
  */
  readonly maxIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}
  */
  readonly maxStalenessPrefix?: number;
}

function cosmosdbAccountConsistencyPolicyToTerraform(struct?: CosmosdbAccountConsistencyPolicyOutputReference | CosmosdbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._consistencyLevel
  }

  // max_interval_in_seconds - computed: true, optional: true, required: false
  private _maxIntervalInSeconds?: number | undefined; 
  public get maxIntervalInSeconds() {
    return this.getNumberAttribute('max_interval_in_seconds');
  }
  public set maxIntervalInSeconds(value: number | undefined) {
    this._maxIntervalInSeconds = value;
  }
  public resetMaxIntervalInSeconds() {
    this._maxIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInSecondsInput() {
    return this._maxIntervalInSeconds
  }

  // max_staleness_prefix - computed: true, optional: true, required: false
  private _maxStalenessPrefix?: number | undefined; 
  public get maxStalenessPrefix() {
    return this.getNumberAttribute('max_staleness_prefix');
  }
  public set maxStalenessPrefix(value: number | undefined) {
    this._maxStalenessPrefix = value;
  }
  public resetMaxStalenessPrefix() {
    this._maxStalenessPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStalenessPrefixInput() {
    return this._maxStalenessPrefix
  }
}
export interface CosmosdbAccountCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#allowed_headers CosmosdbAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#allowed_methods CosmosdbAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#allowed_origins CosmosdbAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#exposed_headers CosmosdbAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

function cosmosdbAccountCorsRuleToTerraform(struct?: CosmosdbAccountCorsRuleOutputReference | CosmosdbAccountCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export class CosmosdbAccountCorsRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._allowedHeaders
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
    return this._allowedMethods
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
    return this._allowedOrigins
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
    return this._exposedHeaders
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
    return this._maxAgeInSeconds
  }
}
export interface CosmosdbAccountGeoLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#failover_priority CosmosdbAccount#failover_priority}
  */
  readonly failoverPriority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#location CosmosdbAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#prefix CosmosdbAccount#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#zone_redundant CosmosdbAccount#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
}

function cosmosdbAccountGeoLocationToTerraform(struct?: CosmosdbAccountGeoLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_priority: cdktf.numberToTerraform(struct!.failoverPriority),
    location: cdktf.stringToTerraform(struct!.location),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    zone_redundant: cdktf.booleanToTerraform(struct!.zoneRedundant),
  }
}

export interface CosmosdbAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#type CosmosdbAccount#type}
  */
  readonly type: string;
}

function cosmosdbAccountIdentityToTerraform(struct?: CosmosdbAccountIdentityOutputReference | CosmosdbAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CosmosdbAccountIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._type
  }
}
export interface CosmosdbAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#create CosmosdbAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#delete CosmosdbAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#read CosmosdbAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#update CosmosdbAccount#update}
  */
  readonly update?: string;
}

function cosmosdbAccountTimeoutsToTerraform(struct?: CosmosdbAccountTimeoutsOutputReference | CosmosdbAccountTimeouts): any {
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

export class CosmosdbAccountTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface CosmosdbAccountVirtualNetworkRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#id CosmosdbAccount#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
}

function cosmosdbAccountVirtualNetworkRuleToTerraform(struct?: CosmosdbAccountVirtualNetworkRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html azurerm_cosmosdb_account}
*/
export class CosmosdbAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cosmosdb_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html azurerm_cosmosdb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessKeyMetadataWritesEnabled = config.accessKeyMetadataWritesEnabled;
    this._analyticalStorageEnabled = config.analyticalStorageEnabled;
    this._enableAutomaticFailover = config.enableAutomaticFailover;
    this._enableFreeTier = config.enableFreeTier;
    this._enableMultipleWriteLocations = config.enableMultipleWriteLocations;
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
    this._backup = config.backup;
    this._capabilities = config.capabilities;
    this._consistencyPolicy = config.consistencyPolicy;
    this._corsRule = config.corsRule;
    this._geoLocation = config.geoLocation;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
    this._virtualNetworkRule = config.virtualNetworkRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_metadata_writes_enabled - computed: false, optional: true, required: false
  private _accessKeyMetadataWritesEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get accessKeyMetadataWritesEnabled() {
    return this.getBooleanAttribute('access_key_metadata_writes_enabled') as any;
  }
  public set accessKeyMetadataWritesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._accessKeyMetadataWritesEnabled = value;
  }
  public resetAccessKeyMetadataWritesEnabled() {
    this._accessKeyMetadataWritesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyMetadataWritesEnabledInput() {
    return this._accessKeyMetadataWritesEnabled
  }

  // analytical_storage_enabled - computed: false, optional: true, required: false
  private _analyticalStorageEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get analyticalStorageEnabled() {
    return this.getBooleanAttribute('analytical_storage_enabled') as any;
  }
  public set analyticalStorageEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._analyticalStorageEnabled = value;
  }
  public resetAnalyticalStorageEnabled() {
    this._analyticalStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageEnabledInput() {
    return this._analyticalStorageEnabled
  }

  // connection_strings - computed: true, optional: false, required: false
  public get connectionStrings() {
    return this.getListAttribute('connection_strings');
  }

  // enable_automatic_failover - computed: false, optional: true, required: false
  private _enableAutomaticFailover?: boolean | cdktf.IResolvable | undefined; 
  public get enableAutomaticFailover() {
    return this.getBooleanAttribute('enable_automatic_failover') as any;
  }
  public set enableAutomaticFailover(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAutomaticFailover = value;
  }
  public resetEnableAutomaticFailover() {
    this._enableAutomaticFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticFailoverInput() {
    return this._enableAutomaticFailover
  }

  // enable_free_tier - computed: false, optional: true, required: false
  private _enableFreeTier?: boolean | cdktf.IResolvable | undefined; 
  public get enableFreeTier() {
    return this.getBooleanAttribute('enable_free_tier') as any;
  }
  public set enableFreeTier(value: boolean | cdktf.IResolvable | undefined) {
    this._enableFreeTier = value;
  }
  public resetEnableFreeTier() {
    this._enableFreeTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFreeTierInput() {
    return this._enableFreeTier
  }

  // enable_multiple_write_locations - computed: false, optional: true, required: false
  private _enableMultipleWriteLocations?: boolean | cdktf.IResolvable | undefined; 
  public get enableMultipleWriteLocations() {
    return this.getBooleanAttribute('enable_multiple_write_locations') as any;
  }
  public set enableMultipleWriteLocations(value: boolean | cdktf.IResolvable | undefined) {
    this._enableMultipleWriteLocations = value;
  }
  public resetEnableMultipleWriteLocations() {
    this._enableMultipleWriteLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleWriteLocationsInput() {
    return this._enableMultipleWriteLocations
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_range_filter - computed: false, optional: true, required: false
  private _ipRangeFilter?: string | undefined; 
  public get ipRangeFilter() {
    return this.getStringAttribute('ip_range_filter');
  }
  public set ipRangeFilter(value: string | undefined) {
    this._ipRangeFilter = value;
  }
  public resetIpRangeFilter() {
    this._ipRangeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeFilterInput() {
    return this._ipRangeFilter
  }

  // is_virtual_network_filter_enabled - computed: false, optional: true, required: false
  private _isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled') as any;
  }
  public set isVirtualNetworkFilterEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isVirtualNetworkFilterEnabled = value;
  }
  public resetIsVirtualNetworkFilterEnabled() {
    this._isVirtualNetworkFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVirtualNetworkFilterEnabledInput() {
    return this._isVirtualNetworkFilterEnabled
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string | undefined; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string | undefined) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string | undefined; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // local_authentication_disabled - computed: false, optional: true, required: false
  private _localAuthenticationDisabled?: boolean | cdktf.IResolvable | undefined; 
  public get localAuthenticationDisabled() {
    return this.getBooleanAttribute('local_authentication_disabled') as any;
  }
  public set localAuthenticationDisabled(value: boolean | cdktf.IResolvable | undefined) {
    this._localAuthenticationDisabled = value;
  }
  public resetLocalAuthenticationDisabled() {
    this._localAuthenticationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationDisabledInput() {
    return this._localAuthenticationDisabled
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

  // mongo_server_version - computed: true, optional: true, required: false
  private _mongoServerVersion?: string | undefined; 
  public get mongoServerVersion() {
    return this.getStringAttribute('mongo_server_version');
  }
  public set mongoServerVersion(value: string | undefined) {
    this._mongoServerVersion = value;
  }
  public resetMongoServerVersion() {
    this._mongoServerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoServerVersionInput() {
    return this._mongoServerVersion
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

  // network_acl_bypass_for_azure_services - computed: false, optional: true, required: false
  private _networkAclBypassForAzureServices?: boolean | cdktf.IResolvable | undefined; 
  public get networkAclBypassForAzureServices() {
    return this.getBooleanAttribute('network_acl_bypass_for_azure_services') as any;
  }
  public set networkAclBypassForAzureServices(value: boolean | cdktf.IResolvable | undefined) {
    this._networkAclBypassForAzureServices = value;
  }
  public resetNetworkAclBypassForAzureServices() {
    this._networkAclBypassForAzureServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclBypassForAzureServicesInput() {
    return this._networkAclBypassForAzureServices
  }

  // network_acl_bypass_ids - computed: false, optional: true, required: false
  private _networkAclBypassIds?: string[] | undefined; 
  public get networkAclBypassIds() {
    return this.getListAttribute('network_acl_bypass_ids');
  }
  public set networkAclBypassIds(value: string[] | undefined) {
    this._networkAclBypassIds = value;
  }
  public resetNetworkAclBypassIds() {
    this._networkAclBypassIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclBypassIdsInput() {
    return this._networkAclBypassIds
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
    return this._offerType
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // primary_master_key - computed: true, optional: false, required: false
  public get primaryMasterKey() {
    return this.getStringAttribute('primary_master_key');
  }

  // primary_readonly_key - computed: true, optional: false, required: false
  public get primaryReadonlyKey() {
    return this.getStringAttribute('primary_readonly_key');
  }

  // primary_readonly_master_key - computed: true, optional: false, required: false
  public get primaryReadonlyMasterKey() {
    return this.getStringAttribute('primary_readonly_master_key');
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
    return this._resourceGroupName
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // secondary_master_key - computed: true, optional: false, required: false
  public get secondaryMasterKey() {
    return this.getStringAttribute('secondary_master_key');
  }

  // secondary_readonly_key - computed: true, optional: false, required: false
  public get secondaryReadonlyKey() {
    return this.getStringAttribute('secondary_readonly_key');
  }

  // secondary_readonly_master_key - computed: true, optional: false, required: false
  public get secondaryReadonlyMasterKey() {
    return this.getStringAttribute('secondary_readonly_master_key');
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

  // write_endpoints - computed: true, optional: false, required: false
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: CosmosdbAccountBackup | undefined; 
  private __backupOutput = new CosmosdbAccountBackupOutputReference(this as any, "backup", true);
  public get backup() {
    return this.__backupOutput;
  }
  public putBackup(value: CosmosdbAccountBackup | undefined) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: CosmosdbAccountCapabilities[] | undefined; 
  public get capabilities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('capabilities') as any;
  }
  public set capabilities(value: CosmosdbAccountCapabilities[] | undefined) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
  }

  // consistency_policy - computed: false, optional: false, required: true
  private _consistencyPolicy?: CosmosdbAccountConsistencyPolicy; 
  private __consistencyPolicyOutput = new CosmosdbAccountConsistencyPolicyOutputReference(this as any, "consistency_policy", true);
  public get consistencyPolicy() {
    return this.__consistencyPolicyOutput;
  }
  public putConsistencyPolicy(value: CosmosdbAccountConsistencyPolicy) {
    this._consistencyPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyPolicyInput() {
    return this._consistencyPolicy
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: CosmosdbAccountCorsRule | undefined; 
  private __corsRuleOutput = new CosmosdbAccountCorsRuleOutputReference(this as any, "cors_rule", true);
  public get corsRule() {
    return this.__corsRuleOutput;
  }
  public putCorsRule(value: CosmosdbAccountCorsRule | undefined) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule
  }

  // geo_location - computed: false, optional: false, required: true
  private _geoLocation?: CosmosdbAccountGeoLocation[]; 
  public get geoLocation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('geo_location') as any;
  }
  public set geoLocation(value: CosmosdbAccountGeoLocation[]) {
    this._geoLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: CosmosdbAccountIdentity | undefined; 
  private __identityOutput = new CosmosdbAccountIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: CosmosdbAccountIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbAccountTimeouts | undefined; 
  private __timeoutsOutput = new CosmosdbAccountTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CosmosdbAccountTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // virtual_network_rule - computed: false, optional: true, required: false
  private _virtualNetworkRule?: CosmosdbAccountVirtualNetworkRule[] | undefined; 
  public get virtualNetworkRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('virtual_network_rule') as any;
  }
  public set virtualNetworkRule(value: CosmosdbAccountVirtualNetworkRule[] | undefined) {
    this._virtualNetworkRule = value;
  }
  public resetVirtualNetworkRule() {
    this._virtualNetworkRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRuleInput() {
    return this._virtualNetworkRule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_metadata_writes_enabled: cdktf.booleanToTerraform(this._accessKeyMetadataWritesEnabled),
      analytical_storage_enabled: cdktf.booleanToTerraform(this._analyticalStorageEnabled),
      enable_automatic_failover: cdktf.booleanToTerraform(this._enableAutomaticFailover),
      enable_free_tier: cdktf.booleanToTerraform(this._enableFreeTier),
      enable_multiple_write_locations: cdktf.booleanToTerraform(this._enableMultipleWriteLocations),
      ip_range_filter: cdktf.stringToTerraform(this._ipRangeFilter),
      is_virtual_network_filter_enabled: cdktf.booleanToTerraform(this._isVirtualNetworkFilterEnabled),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      kind: cdktf.stringToTerraform(this._kind),
      local_authentication_disabled: cdktf.booleanToTerraform(this._localAuthenticationDisabled),
      location: cdktf.stringToTerraform(this._location),
      mongo_server_version: cdktf.stringToTerraform(this._mongoServerVersion),
      name: cdktf.stringToTerraform(this._name),
      network_acl_bypass_for_azure_services: cdktf.booleanToTerraform(this._networkAclBypassForAzureServices),
      network_acl_bypass_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._networkAclBypassIds),
      offer_type: cdktf.stringToTerraform(this._offerType),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      backup: cosmosdbAccountBackupToTerraform(this._backup),
      capabilities: cdktf.listMapper(cosmosdbAccountCapabilitiesToTerraform)(this._capabilities),
      consistency_policy: cosmosdbAccountConsistencyPolicyToTerraform(this._consistencyPolicy),
      cors_rule: cosmosdbAccountCorsRuleToTerraform(this._corsRule),
      geo_location: cdktf.listMapper(cosmosdbAccountGeoLocationToTerraform)(this._geoLocation),
      identity: cosmosdbAccountIdentityToTerraform(this._identity),
      timeouts: cosmosdbAccountTimeoutsToTerraform(this._timeouts),
      virtual_network_rule: cdktf.listMapper(cosmosdbAccountVirtualNetworkRuleToTerraform)(this._virtualNetworkRule),
    };
  }
}
