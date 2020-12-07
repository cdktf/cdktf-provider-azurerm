// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsStandardEnvironmentConfig extends cdktf.TerraformMetaArguments {
  readonly dataRetentionTime: string;
  readonly location: string;
  readonly name: string;
  readonly partitionKey?: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly storageLimitExceededBehavior?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: IotTimeSeriesInsightsStandardEnvironmentTimeouts;
}
export interface IotTimeSeriesInsightsStandardEnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iotTimeSeriesInsightsStandardEnvironmentTimeoutsToTerraform(struct?: IotTimeSeriesInsightsStandardEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IotTimeSeriesInsightsStandardEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsStandardEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_standard_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRetentionTime = config.dataRetentionTime;
    this._location = config.location;
    this._name = config.name;
    this._partitionKey = config.partitionKey;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageLimitExceededBehavior = config.storageLimitExceededBehavior;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_retention_time - computed: false, optional: false, required: true
  private _dataRetentionTime: string;
  public get dataRetentionTime() {
    return this.getStringAttribute('data_retention_time');
  }
  public set dataRetentionTime(value: string) {
    this._dataRetentionTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInput() {
    return this._dataRetentionTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string;
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string ) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey
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

  // storage_limit_exceeded_behavior - computed: false, optional: true, required: false
  private _storageLimitExceededBehavior?: string;
  public get storageLimitExceededBehavior() {
    return this.getStringAttribute('storage_limit_exceeded_behavior');
  }
  public set storageLimitExceededBehavior(value: string ) {
    this._storageLimitExceededBehavior = value;
  }
  public resetStorageLimitExceededBehavior() {
    this._storageLimitExceededBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitExceededBehaviorInput() {
    return this._storageLimitExceededBehavior
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsStandardEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotTimeSeriesInsightsStandardEnvironmentTimeouts ) {
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
      data_retention_time: cdktf.stringToTerraform(this._dataRetentionTime),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      partition_key: cdktf.stringToTerraform(this._partitionKey),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_limit_exceeded_behavior: cdktf.stringToTerraform(this._storageLimitExceededBehavior),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: iotTimeSeriesInsightsStandardEnvironmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
