// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbAccountConfig extends cdktf.TerraformMetaArguments {
  readonly analyticalStorageEnabled?: boolean;
  readonly enableAutomaticFailover?: boolean;
  readonly enableFreeTier?: boolean;
  readonly enableMultipleWriteLocations?: boolean;
  readonly ipRangeFilter?: string;
  readonly isVirtualNetworkFilterEnabled?: boolean;
  readonly keyVaultKeyId?: string;
  readonly kind?: string;
  readonly location: string;
  readonly name: string;
  readonly offerType: string;
  readonly publicNetworkAccessEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** capabilities block */
  readonly capabilities?: CosmosdbAccountCapabilities[];
  /** consistency_policy block */
  readonly consistencyPolicy: CosmosdbAccountConsistencyPolicy[];
  /** geo_location block */
  readonly geoLocation: CosmosdbAccountGeoLocation[];
  /** timeouts block */
  readonly timeouts?: CosmosdbAccountTimeouts;
  /** virtual_network_rule block */
  readonly virtualNetworkRule?: CosmosdbAccountVirtualNetworkRule[];
}
export interface CosmosdbAccountCapabilities {
  readonly name: string;
}

function cosmosdbAccountCapabilitiesToTerraform(struct?: CosmosdbAccountCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CosmosdbAccountConsistencyPolicy {
  readonly consistencyLevel: string;
  readonly maxIntervalInSeconds?: number;
  readonly maxStalenessPrefix?: number;
}

function cosmosdbAccountConsistencyPolicyToTerraform(struct?: CosmosdbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consistency_level: cdktf.stringToTerraform(struct!.consistencyLevel),
    max_interval_in_seconds: cdktf.numberToTerraform(struct!.maxIntervalInSeconds),
    max_staleness_prefix: cdktf.numberToTerraform(struct!.maxStalenessPrefix),
  }
}

export interface CosmosdbAccountGeoLocation {
  readonly failoverPriority: number;
  readonly location: string;
  readonly prefix?: string;
  readonly zoneRedundant?: boolean;
}

function cosmosdbAccountGeoLocationToTerraform(struct?: CosmosdbAccountGeoLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failover_priority: cdktf.numberToTerraform(struct!.failoverPriority),
    location: cdktf.stringToTerraform(struct!.location),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    zone_redundant: cdktf.booleanToTerraform(struct!.zoneRedundant),
  }
}

export interface CosmosdbAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cosmosdbAccountTimeoutsToTerraform(struct?: CosmosdbAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface CosmosdbAccountVirtualNetworkRule {
  readonly id: string;
  readonly ignoreMissingVnetServiceEndpoint?: boolean;
}

function cosmosdbAccountVirtualNetworkRuleToTerraform(struct?: CosmosdbAccountVirtualNetworkRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
  }
}


// Resource

export class CosmosdbAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._analyticalStorageEnabled = config.analyticalStorageEnabled;
    this._enableAutomaticFailover = config.enableAutomaticFailover;
    this._enableFreeTier = config.enableFreeTier;
    this._enableMultipleWriteLocations = config.enableMultipleWriteLocations;
    this._ipRangeFilter = config.ipRangeFilter;
    this._isVirtualNetworkFilterEnabled = config.isVirtualNetworkFilterEnabled;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._offerType = config.offerType;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._capabilities = config.capabilities;
    this._consistencyPolicy = config.consistencyPolicy;
    this._geoLocation = config.geoLocation;
    this._timeouts = config.timeouts;
    this._virtualNetworkRule = config.virtualNetworkRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytical_storage_enabled - computed: false, optional: true, required: false
  private _analyticalStorageEnabled?: boolean;
  public get analyticalStorageEnabled() {
    return this.getBooleanAttribute('analytical_storage_enabled');
  }
  public set analyticalStorageEnabled(value: boolean ) {
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
  private _enableAutomaticFailover?: boolean;
  public get enableAutomaticFailover() {
    return this.getBooleanAttribute('enable_automatic_failover');
  }
  public set enableAutomaticFailover(value: boolean ) {
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
  private _enableFreeTier?: boolean;
  public get enableFreeTier() {
    return this.getBooleanAttribute('enable_free_tier');
  }
  public set enableFreeTier(value: boolean ) {
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
  private _enableMultipleWriteLocations?: boolean;
  public get enableMultipleWriteLocations() {
    return this.getBooleanAttribute('enable_multiple_write_locations');
  }
  public set enableMultipleWriteLocations(value: boolean ) {
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
  private _ipRangeFilter?: string;
  public get ipRangeFilter() {
    return this.getStringAttribute('ip_range_filter');
  }
  public set ipRangeFilter(value: string ) {
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
  private _isVirtualNetworkFilterEnabled?: boolean;
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }
  public set isVirtualNetworkFilterEnabled(value: boolean ) {
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
  private _keyVaultKeyId?: string;
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string ) {
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
  private _kind?: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string ) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // offer_type - computed: false, optional: false, required: true
  private _offerType: string;
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

  // read_endpoints - computed: true, optional: false, required: false
  public get readEndpoints() {
    return this.getListAttribute('read_endpoints');
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

  // write_endpoints - computed: true, optional: false, required: false
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: CosmosdbAccountCapabilities[];
  public get capabilities() {
    return this.interpolationForAttribute('capabilities') as any;
  }
  public set capabilities(value: CosmosdbAccountCapabilities[] ) {
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
  private _consistencyPolicy: CosmosdbAccountConsistencyPolicy[];
  public get consistencyPolicy() {
    return this.interpolationForAttribute('consistency_policy') as any;
  }
  public set consistencyPolicy(value: CosmosdbAccountConsistencyPolicy[]) {
    this._consistencyPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyPolicyInput() {
    return this._consistencyPolicy
  }

  // geo_location - computed: false, optional: false, required: true
  private _geoLocation: CosmosdbAccountGeoLocation[];
  public get geoLocation() {
    return this.interpolationForAttribute('geo_location') as any;
  }
  public set geoLocation(value: CosmosdbAccountGeoLocation[]) {
    this._geoLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbAccountTimeouts ) {
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
  private _virtualNetworkRule?: CosmosdbAccountVirtualNetworkRule[];
  public get virtualNetworkRule() {
    return this.interpolationForAttribute('virtual_network_rule') as any;
  }
  public set virtualNetworkRule(value: CosmosdbAccountVirtualNetworkRule[] ) {
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
      analytical_storage_enabled: cdktf.booleanToTerraform(this._analyticalStorageEnabled),
      enable_automatic_failover: cdktf.booleanToTerraform(this._enableAutomaticFailover),
      enable_free_tier: cdktf.booleanToTerraform(this._enableFreeTier),
      enable_multiple_write_locations: cdktf.booleanToTerraform(this._enableMultipleWriteLocations),
      ip_range_filter: cdktf.stringToTerraform(this._ipRangeFilter),
      is_virtual_network_filter_enabled: cdktf.booleanToTerraform(this._isVirtualNetworkFilterEnabled),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      offer_type: cdktf.stringToTerraform(this._offerType),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      capabilities: cdktf.listMapper(cosmosdbAccountCapabilitiesToTerraform)(this._capabilities),
      consistency_policy: cdktf.listMapper(cosmosdbAccountConsistencyPolicyToTerraform)(this._consistencyPolicy),
      geo_location: cdktf.listMapper(cosmosdbAccountGeoLocationToTerraform)(this._geoLocation),
      timeouts: cosmosdbAccountTimeoutsToTerraform(this._timeouts),
      virtual_network_rule: cdktf.listMapper(cosmosdbAccountVirtualNetworkRuleToTerraform)(this._virtualNetworkRule),
    };
  }
}
