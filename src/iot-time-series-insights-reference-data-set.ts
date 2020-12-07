// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_reference_data_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsReferenceDataSetConfig extends cdktf.TerraformMetaArguments {
  readonly dataStringComparisonBehavior?: string;
  readonly location: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly timeSeriesInsightsEnvironmentId: string;
  /** key_property block */
  readonly keyProperty: IotTimeSeriesInsightsReferenceDataSetKeyProperty[];
  /** timeouts block */
  readonly timeouts?: IotTimeSeriesInsightsReferenceDataSetTimeouts;
}
export interface IotTimeSeriesInsightsReferenceDataSetKeyProperty {
  readonly name: string;
  readonly type: string;
}

function iotTimeSeriesInsightsReferenceDataSetKeyPropertyToTerraform(struct?: IotTimeSeriesInsightsReferenceDataSetKeyProperty): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTimeSeriesInsightsReferenceDataSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iotTimeSeriesInsightsReferenceDataSetTimeoutsToTerraform(struct?: IotTimeSeriesInsightsReferenceDataSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IotTimeSeriesInsightsReferenceDataSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _dataStringComparisonBehavior?: string;
  public get dataStringComparisonBehavior() {
    return this.getStringAttribute('data_string_comparison_behavior');
  }
  public set dataStringComparisonBehavior(value: string ) {
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

  // time_series_insights_environment_id - computed: false, optional: false, required: true
  private _timeSeriesInsightsEnvironmentId: string;
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
  private _keyProperty: IotTimeSeriesInsightsReferenceDataSetKeyProperty[];
  public get keyProperty() {
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
  private _timeouts?: IotTimeSeriesInsightsReferenceDataSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotTimeSeriesInsightsReferenceDataSetTimeouts ) {
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
