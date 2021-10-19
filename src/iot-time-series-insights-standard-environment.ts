// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsStandardEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#data_retention_time IotTimeSeriesInsightsStandardEnvironment#data_retention_time}
  */
  readonly dataRetentionTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#location IotTimeSeriesInsightsStandardEnvironment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#name IotTimeSeriesInsightsStandardEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#partition_key IotTimeSeriesInsightsStandardEnvironment#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#resource_group_name IotTimeSeriesInsightsStandardEnvironment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#sku_name IotTimeSeriesInsightsStandardEnvironment#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#storage_limit_exceeded_behavior IotTimeSeriesInsightsStandardEnvironment#storage_limit_exceeded_behavior}
  */
  readonly storageLimitExceededBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#tags IotTimeSeriesInsightsStandardEnvironment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#timeouts IotTimeSeriesInsightsStandardEnvironment#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsStandardEnvironmentTimeouts;
}
export interface IotTimeSeriesInsightsStandardEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#create IotTimeSeriesInsightsStandardEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#delete IotTimeSeriesInsightsStandardEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#read IotTimeSeriesInsightsStandardEnvironment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html#update IotTimeSeriesInsightsStandardEnvironment#update}
  */
  readonly update?: string;
}

function iotTimeSeriesInsightsStandardEnvironmentTimeoutsToTerraform(struct?: IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference | IotTimeSeriesInsightsStandardEnvironmentTimeouts): any {
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

export class IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html azurerm_iot_time_series_insights_standard_environment}
*/
export class IotTimeSeriesInsightsStandardEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iot_time_series_insights_standard_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment.html azurerm_iot_time_series_insights_standard_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsStandardEnvironmentConfig
  */
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
  private _dataRetentionTime?: string; 
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

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string | undefined; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string | undefined) {
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
    return this._skuName
  }

  // storage_limit_exceeded_behavior - computed: false, optional: true, required: false
  private _storageLimitExceededBehavior?: string | undefined; 
  public get storageLimitExceededBehavior() {
    return this.getStringAttribute('storage_limit_exceeded_behavior');
  }
  public set storageLimitExceededBehavior(value: string | undefined) {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsStandardEnvironmentTimeouts | undefined; 
  private __timeoutsOutput = new IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IotTimeSeriesInsightsStandardEnvironmentTimeouts | undefined) {
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
