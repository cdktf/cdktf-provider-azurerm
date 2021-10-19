// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsReferenceDataSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}
  */
  readonly dataStringComparisonBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#location IotTimeSeriesInsightsReferenceDataSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#name IotTimeSeriesInsightsReferenceDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#tags IotTimeSeriesInsightsReferenceDataSet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}
  */
  readonly timeSeriesInsightsEnvironmentId: string;
  /**
  * key_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#key_property IotTimeSeriesInsightsReferenceDataSet#key_property}
  */
  readonly keyProperty: IotTimeSeriesInsightsReferenceDataSetKeyProperty[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#timeouts IotTimeSeriesInsightsReferenceDataSet#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsReferenceDataSetTimeouts;
}
export interface IotTimeSeriesInsightsReferenceDataSetKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#name IotTimeSeriesInsightsReferenceDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#type IotTimeSeriesInsightsReferenceDataSet#type}
  */
  readonly type: string;
}

function iotTimeSeriesInsightsReferenceDataSetKeyPropertyToTerraform(struct?: IotTimeSeriesInsightsReferenceDataSetKeyProperty): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTimeSeriesInsightsReferenceDataSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#create IotTimeSeriesInsightsReferenceDataSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#delete IotTimeSeriesInsightsReferenceDataSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#read IotTimeSeriesInsightsReferenceDataSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html#update IotTimeSeriesInsightsReferenceDataSet#update}
  */
  readonly update?: string;
}

function iotTimeSeriesInsightsReferenceDataSetTimeoutsToTerraform(struct?: IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference | IotTimeSeriesInsightsReferenceDataSetTimeouts): any {
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

export class IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html azurerm_iot_time_series_insights_reference_data_set}
*/
export class IotTimeSeriesInsightsReferenceDataSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iot_time_series_insights_reference_data_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html azurerm_iot_time_series_insights_reference_data_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsReferenceDataSetConfig
  */
  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsReferenceDataSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_reference_data_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataStringComparisonBehavior = config.dataStringComparisonBehavior;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
    this._timeSeriesInsightsEnvironmentId = config.timeSeriesInsightsEnvironmentId;
    this._keyProperty = config.keyProperty;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_string_comparison_behavior - computed: false, optional: true, required: false
  private _dataStringComparisonBehavior?: string | undefined; 
  public get dataStringComparisonBehavior() {
    return this.getStringAttribute('data_string_comparison_behavior');
  }
  public set dataStringComparisonBehavior(value: string | undefined) {
    this._dataStringComparisonBehavior = value;
  }
  public resetDataStringComparisonBehavior() {
    this._dataStringComparisonBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStringComparisonBehaviorInput() {
    return this._dataStringComparisonBehavior
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

  // time_series_insights_environment_id - computed: false, optional: false, required: true
  private _timeSeriesInsightsEnvironmentId?: string; 
  public get timeSeriesInsightsEnvironmentId() {
    return this.getStringAttribute('time_series_insights_environment_id');
  }
  public set timeSeriesInsightsEnvironmentId(value: string) {
    this._timeSeriesInsightsEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInsightsEnvironmentIdInput() {
    return this._timeSeriesInsightsEnvironmentId
  }

  // key_property - computed: false, optional: false, required: true
  private _keyProperty?: IotTimeSeriesInsightsReferenceDataSetKeyProperty[]; 
  public get keyProperty() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('key_property') as any;
  }
  public set keyProperty(value: IotTimeSeriesInsightsReferenceDataSetKeyProperty[]) {
    this._keyProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPropertyInput() {
    return this._keyProperty
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsReferenceDataSetTimeouts | undefined; 
  private __timeoutsOutput = new IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IotTimeSeriesInsightsReferenceDataSetTimeouts | undefined) {
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
      data_string_comparison_behavior: cdktf.stringToTerraform(this._dataStringComparisonBehavior),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      time_series_insights_environment_id: cdktf.stringToTerraform(this._timeSeriesInsightsEnvironmentId),
      key_property: cdktf.listMapper(iotTimeSeriesInsightsReferenceDataSetKeyPropertyToTerraform)(this._keyProperty),
      timeouts: iotTimeSeriesInsightsReferenceDataSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
