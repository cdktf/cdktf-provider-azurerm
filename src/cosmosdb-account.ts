// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CosmosdbAccountConfig extends TerraformMetaArguments {
  readonly enableAutomaticFailover?: boolean;
  readonly enableMultipleWriteLocations?: boolean;
  readonly ipRangeFilter?: string;
  readonly isVirtualNetworkFilterEnabled?: boolean;
  readonly kind?: string;
  readonly location: string;
  readonly name: string;
  readonly offerType: string;
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
export interface CosmosdbAccountConsistencyPolicy {
  readonly consistencyLevel: string;
  readonly maxIntervalInSeconds?: number;
  readonly maxStalenessPrefix?: number;
}
export interface CosmosdbAccountGeoLocation {
  readonly failoverPriority: number;
  readonly location: string;
  readonly prefix?: string;
}
export interface CosmosdbAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface CosmosdbAccountVirtualNetworkRule {
  readonly id: string;
}

// Resource

export class CosmosdbAccount extends TerraformResource {

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
    this._enableAutomaticFailover = config.enableAutomaticFailover;
    this._enableMultipleWriteLocations = config.enableMultipleWriteLocations;
    this._ipRangeFilter = config.ipRangeFilter;
    this._isVirtualNetworkFilterEnabled = config.isVirtualNetworkFilterEnabled;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._offerType = config.offerType;
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

  // primary_master_key - computed: true, optional: false, required: false
  public get primaryMasterKey() {
    return this.getStringAttribute('primary_master_key');
  }

  // primary_readonly_master_key - computed: true, optional: false, required: false
  public get primaryReadonlyMasterKey() {
    return this.getStringAttribute('primary_readonly_master_key');
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

  // secondary_master_key - computed: true, optional: false, required: false
  public get secondaryMasterKey() {
    return this.getStringAttribute('secondary_master_key');
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
      enable_automatic_failover: this._enableAutomaticFailover,
      enable_multiple_write_locations: this._enableMultipleWriteLocations,
      ip_range_filter: this._ipRangeFilter,
      is_virtual_network_filter_enabled: this._isVirtualNetworkFilterEnabled,
      kind: this._kind,
      location: this._location,
      name: this._name,
      offer_type: this._offerType,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      capabilities: this._capabilities,
      consistency_policy: this._consistencyPolicy,
      geo_location: this._geoLocation,
      timeouts: this._timeouts,
      virtual_network_rule: this._virtualNetworkRule,
    };
  }
}
