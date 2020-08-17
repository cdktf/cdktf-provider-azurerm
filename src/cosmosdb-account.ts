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

  // connection_strings - computed: true, optional: false, required: true
  public get connectionStrings() {
    return this.getListAttribute('connection_strings');
  }

  // enable_automatic_failover - computed: false, optional: true, required: false
  private _enableAutomaticFailover?: boolean;
  public get enableAutomaticFailover() {
    return this._enableAutomaticFailover;
  }
  public set enableAutomaticFailover(value: boolean | undefined) {
    this._enableAutomaticFailover = value;
  }

  // enable_multiple_write_locations - computed: false, optional: true, required: false
  private _enableMultipleWriteLocations?: boolean;
  public get enableMultipleWriteLocations() {
    return this._enableMultipleWriteLocations;
  }
  public set enableMultipleWriteLocations(value: boolean | undefined) {
    this._enableMultipleWriteLocations = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_range_filter - computed: false, optional: true, required: false
  private _ipRangeFilter?: string;
  public get ipRangeFilter() {
    return this._ipRangeFilter;
  }
  public set ipRangeFilter(value: string | undefined) {
    this._ipRangeFilter = value;
  }

  // is_virtual_network_filter_enabled - computed: false, optional: true, required: false
  private _isVirtualNetworkFilterEnabled?: boolean;
  public get isVirtualNetworkFilterEnabled() {
    return this._isVirtualNetworkFilterEnabled;
  }
  public set isVirtualNetworkFilterEnabled(value: boolean | undefined) {
    this._isVirtualNetworkFilterEnabled = value;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // offer_type - computed: false, optional: false, required: true
  private _offerType: string;
  public get offerType() {
    return this._offerType;
  }
  public set offerType(value: string) {
    this._offerType = value;
  }

  // primary_master_key - computed: true, optional: false, required: true
  public get primaryMasterKey() {
    return this.getStringAttribute('primary_master_key');
  }

  // primary_readonly_master_key - computed: true, optional: false, required: true
  public get primaryReadonlyMasterKey() {
    return this.getStringAttribute('primary_readonly_master_key');
  }

  // read_endpoints - computed: true, optional: false, required: true
  public get readEndpoints() {
    return this.getListAttribute('read_endpoints');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_master_key - computed: true, optional: false, required: true
  public get secondaryMasterKey() {
    return this.getStringAttribute('secondary_master_key');
  }

  // secondary_readonly_master_key - computed: true, optional: false, required: true
  public get secondaryReadonlyMasterKey() {
    return this.getStringAttribute('secondary_readonly_master_key');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // write_endpoints - computed: true, optional: false, required: true
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: CosmosdbAccountCapabilities[];
  public get capabilities() {
    return this._capabilities;
  }
  public set capabilities(value: CosmosdbAccountCapabilities[] | undefined) {
    this._capabilities = value;
  }

  // consistency_policy - computed: false, optional: false, required: true
  private _consistencyPolicy: CosmosdbAccountConsistencyPolicy[];
  public get consistencyPolicy() {
    return this._consistencyPolicy;
  }
  public set consistencyPolicy(value: CosmosdbAccountConsistencyPolicy[]) {
    this._consistencyPolicy = value;
  }

  // geo_location - computed: false, optional: false, required: true
  private _geoLocation: CosmosdbAccountGeoLocation[];
  public get geoLocation() {
    return this._geoLocation;
  }
  public set geoLocation(value: CosmosdbAccountGeoLocation[]) {
    this._geoLocation = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CosmosdbAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // virtual_network_rule - computed: false, optional: true, required: false
  private _virtualNetworkRule?: CosmosdbAccountVirtualNetworkRule[];
  public get virtualNetworkRule() {
    return this._virtualNetworkRule;
  }
  public set virtualNetworkRule(value: CosmosdbAccountVirtualNetworkRule[] | undefined) {
    this._virtualNetworkRule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
