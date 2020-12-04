// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_gen2_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsGen2EnvironmentConfig extends TerraformMetaArguments {
  readonly idProperties: string[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly tags?: { [key: string]: string };
  readonly warmStoreDataRetentionTime?: string;
  /** storage block */
  readonly storage: IotTimeSeriesInsightsGen2EnvironmentStorage[];
  /** timeouts block */
  readonly timeouts?: IotTimeSeriesInsightsGen2EnvironmentTimeouts;
}
export interface IotTimeSeriesInsightsGen2EnvironmentStorage {
  readonly key: string;
  readonly name: string;
}
export interface IotTimeSeriesInsightsGen2EnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IotTimeSeriesInsightsGen2Environment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsGen2EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_gen2_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._idProperties = config.idProperties;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._warmStoreDataRetentionTime = config.warmStoreDataRetentionTime;
    this._storage = config.storage;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_properties - computed: false, optional: false, required: true
  private _idProperties: string[];
  public get idProperties() {
    return this.getListAttribute('id_properties');
  }
  public set idProperties(value: string[]) {
    this._idProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idPropertiesInput() {
    return this._idProperties
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
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

  // warm_store_data_retention_time - computed: false, optional: true, required: false
  private _warmStoreDataRetentionTime?: string;
  public get warmStoreDataRetentionTime() {
    return this.getStringAttribute('warm_store_data_retention_time');
  }
  public set warmStoreDataRetentionTime(value: string ) {
    this._warmStoreDataRetentionTime = value;
  }
  public resetWarmStoreDataRetentionTime() {
    this._warmStoreDataRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStoreDataRetentionTimeInput() {
    return this._warmStoreDataRetentionTime
  }

  // storage - computed: false, optional: false, required: true
  private _storage: IotTimeSeriesInsightsGen2EnvironmentStorage[];
  public get storage() {
    return this.interpolationForAttribute('storage') as any;
  }
  public set storage(value: IotTimeSeriesInsightsGen2EnvironmentStorage[]) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsGen2EnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotTimeSeriesInsightsGen2EnvironmentTimeouts ) {
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
      id_properties: this._idProperties,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      tags: this._tags,
      warm_store_data_retention_time: this._warmStoreDataRetentionTime,
      storage: this._storage,
      timeouts: this._timeouts,
    };
  }
}
