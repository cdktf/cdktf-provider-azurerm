// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsStandardEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#data_retention_time IotTimeSeriesInsightsStandardEnvironment#data_retention_time}
  */
  readonly dataRetentionTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#id IotTimeSeriesInsightsStandardEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#location IotTimeSeriesInsightsStandardEnvironment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#name IotTimeSeriesInsightsStandardEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#partition_key IotTimeSeriesInsightsStandardEnvironment#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#resource_group_name IotTimeSeriesInsightsStandardEnvironment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#sku_name IotTimeSeriesInsightsStandardEnvironment#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#storage_limit_exceeded_behavior IotTimeSeriesInsightsStandardEnvironment#storage_limit_exceeded_behavior}
  */
  readonly storageLimitExceededBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#tags IotTimeSeriesInsightsStandardEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#timeouts IotTimeSeriesInsightsStandardEnvironment#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsStandardEnvironmentTimeouts;
}
export interface IotTimeSeriesInsightsStandardEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#create IotTimeSeriesInsightsStandardEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#delete IotTimeSeriesInsightsStandardEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#read IotTimeSeriesInsightsStandardEnvironment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment#update IotTimeSeriesInsightsStandardEnvironment#update}
  */
  readonly update?: string;
}

export function iotTimeSeriesInsightsStandardEnvironmentTimeoutsToTerraform(struct?: IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference | IotTimeSeriesInsightsStandardEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTimeSeriesInsightsStandardEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotTimeSeriesInsightsStandardEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment azurerm_iot_time_series_insights_standard_environment}
*/
export class IotTimeSeriesInsightsStandardEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iot_time_series_insights_standard_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_standard_environment azurerm_iot_time_series_insights_standard_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsStandardEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsStandardEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_standard_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.15.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRetentionTime = config.dataRetentionTime;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._partitionKey = config.partitionKey;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageLimitExceededBehavior = config.storageLimitExceededBehavior;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
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
    return this._dataRetentionTime;
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

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
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

  // storage_limit_exceeded_behavior - computed: false, optional: true, required: false
  private _storageLimitExceededBehavior?: string; 
  public get storageLimitExceededBehavior() {
    return this.getStringAttribute('storage_limit_exceeded_behavior');
  }
  public set storageLimitExceededBehavior(value: string) {
    this._storageLimitExceededBehavior = value;
  }
  public resetStorageLimitExceededBehavior() {
    this._storageLimitExceededBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitExceededBehaviorInput() {
    return this._storageLimitExceededBehavior;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotTimeSeriesInsightsStandardEnvironmentTimeouts) {
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
      data_retention_time: cdktf.stringToTerraform(this._dataRetentionTime),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      partition_key: cdktf.stringToTerraform(this._partitionKey),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_limit_exceeded_behavior: cdktf.stringToTerraform(this._storageLimitExceededBehavior),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: iotTimeSeriesInsightsStandardEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
