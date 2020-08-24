// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_cosmosdb_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermCosmosdbAccountConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermCosmosdbAccountTimeouts;
}
export class DataAzurermCosmosdbAccountCapabilities extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermCosmosdbAccountConsistencyPolicy extends ComplexComputedList {

  // consistency_level - computed: true, optional: false, required: true
  public get consistencyLevel() {
    return this.getStringAttribute('consistency_level');
  }

  // max_interval_in_seconds - computed: true, optional: false, required: true
  public get maxIntervalInSeconds() {
    return this.getNumberAttribute('max_interval_in_seconds');
  }

  // max_staleness_prefix - computed: true, optional: false, required: true
  public get maxStalenessPrefix() {
    return this.getNumberAttribute('max_staleness_prefix');
  }
}
export class DataAzurermCosmosdbAccountGeoLocation extends ComplexComputedList {

  // failover_priority - computed: true, optional: false, required: true
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }
}
export class DataAzurermCosmosdbAccountVirtualNetworkRule extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAzurermCosmosdbAccountTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermCosmosdbAccount extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermCosmosdbAccountConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: true
  public capabilities(index: string) {
    return new DataAzurermCosmosdbAccountCapabilities(this, 'capabilities', index);
  }

  // consistency_policy - computed: true, optional: false, required: true
  public consistencyPolicy(index: string) {
    return new DataAzurermCosmosdbAccountConsistencyPolicy(this, 'consistency_policy', index);
  }

  // enable_automatic_failover - computed: true, optional: false, required: true
  public get enableAutomaticFailover() {
    return this.getBooleanAttribute('enable_automatic_failover');
  }

  // enable_multiple_write_locations - computed: true, optional: false, required: true
  public get enableMultipleWriteLocations() {
    return this.getBooleanAttribute('enable_multiple_write_locations');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // geo_location - computed: true, optional: false, required: true
  public geoLocation(index: string) {
    return new DataAzurermCosmosdbAccountGeoLocation(this, 'geo_location', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_range_filter - computed: true, optional: false, required: true
  public get ipRangeFilter() {
    return this.getStringAttribute('ip_range_filter');
  }

  // is_virtual_network_filter_enabled - computed: true, optional: false, required: true
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // offer_type - computed: true, optional: false, required: true
  public get offerType() {
    return this.getStringAttribute('offer_type');
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

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // virtual_network_rule - computed: true, optional: false, required: true
  public virtualNetworkRule(index: string) {
    return new DataAzurermCosmosdbAccountVirtualNetworkRule(this, 'virtual_network_rule', index);
  }

  // write_endpoints - computed: true, optional: false, required: true
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermCosmosdbAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermCosmosdbAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
