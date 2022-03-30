// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsReferenceDataSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}
  */
  readonly dataStringComparisonBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}
  */
  readonly timeSeriesInsightsEnvironmentId: string;
  /**
  * key_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#key_property IotTimeSeriesInsightsReferenceDataSet#key_property}
  */
  readonly keyProperty: IotTimeSeriesInsightsReferenceDataSetKeyProperty[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#timeouts IotTimeSeriesInsightsReferenceDataSet#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsReferenceDataSetTimeouts;
}
export interface IotTimeSeriesInsightsReferenceDataSetKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#type IotTimeSeriesInsightsReferenceDataSet#type}
  */
  readonly type: string;
}

export function iotTimeSeriesInsightsReferenceDataSetKeyPropertyToTerraform(struct?: IotTimeSeriesInsightsReferenceDataSetKeyProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#create IotTimeSeriesInsightsReferenceDataSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#delete IotTimeSeriesInsightsReferenceDataSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#read IotTimeSeriesInsightsReferenceDataSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set#update IotTimeSeriesInsightsReferenceDataSet#update}
  */
  readonly update?: string;
}

export function iotTimeSeriesInsightsReferenceDataSetTimeoutsToTerraform(struct?: IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference | IotTimeSeriesInsightsReferenceDataSetTimeouts | cdktf.IResolvable): any {
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

export class IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTimeSeriesInsightsReferenceDataSetTimeouts | undefined {
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

  public set internalValue(value: IotTimeSeriesInsightsReferenceDataSetTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set azurerm_iot_time_series_insights_reference_data_set}
*/
export class IotTimeSeriesInsightsReferenceDataSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iot_time_series_insights_reference_data_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set azurerm_iot_time_series_insights_reference_data_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsReferenceDataSetConfig
  */
  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsReferenceDataSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_reference_data_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_string_comparison_behavior - computed: false, optional: true, required: false
  private _dataStringComparisonBehavior?: string; 
  public get dataStringComparisonBehavior() {
    return this.getStringAttribute('data_string_comparison_behavior');
  }
  public set dataStringComparisonBehavior(value: string) {
    this._dataStringComparisonBehavior = value;
  }
  public resetDataStringComparisonBehavior() {
    this._dataStringComparisonBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStringComparisonBehaviorInput() {
    return this._dataStringComparisonBehavior;
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
    return this._timeSeriesInsightsEnvironmentId;
  }

  // key_property - computed: false, optional: false, required: true
  private _keyProperty?: IotTimeSeriesInsightsReferenceDataSetKeyProperty[] | cdktf.IResolvable; 
  public get keyProperty() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('key_property')));
  }
  public set keyProperty(value: IotTimeSeriesInsightsReferenceDataSetKeyProperty[] | cdktf.IResolvable) {
    this._keyProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPropertyInput() {
    return this._keyProperty;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotTimeSeriesInsightsReferenceDataSetTimeouts) {
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
      data_string_comparison_behavior: cdktf.stringToTerraform(this._dataStringComparisonBehavior),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_series_insights_environment_id: cdktf.stringToTerraform(this._timeSeriesInsightsEnvironmentId),
      key_property: cdktf.listMapper(iotTimeSeriesInsightsReferenceDataSetKeyPropertyToTerraform)(this._keyProperty),
      timeouts: iotTimeSeriesInsightsReferenceDataSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
