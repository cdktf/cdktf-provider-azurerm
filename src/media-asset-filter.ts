// https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaAssetFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#asset_id MediaAssetFilter#asset_id}
  */
  readonly assetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}
  */
  readonly firstQualityBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#name MediaAssetFilter#name}
  */
  readonly name: string;
  /**
  * presentation_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#presentation_time_range MediaAssetFilter#presentation_time_range}
  */
  readonly presentationTimeRange?: MediaAssetFilterPresentationTimeRange;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#timeouts MediaAssetFilter#timeouts}
  */
  readonly timeouts?: MediaAssetFilterTimeouts;
  /**
  * track_selection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#track_selection MediaAssetFilter#track_selection}
  */
  readonly trackSelection?: MediaAssetFilterTrackSelection[];
}
export interface MediaAssetFilterPresentationTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#end_in_units MediaAssetFilter#end_in_units}
  */
  readonly endInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#force_end MediaAssetFilter#force_end}
  */
  readonly forceEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}
  */
  readonly liveBackoffInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}
  */
  readonly presentationWindowInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#start_in_units MediaAssetFilter#start_in_units}
  */
  readonly startInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}
  */
  readonly unitTimescaleInMiliseconds?: number;
}

function mediaAssetFilterPresentationTimeRangeToTerraform(struct?: MediaAssetFilterPresentationTimeRangeOutputReference | MediaAssetFilterPresentationTimeRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_in_units: cdktf.numberToTerraform(struct!.endInUnits),
    force_end: cdktf.booleanToTerraform(struct!.forceEnd),
    live_backoff_in_units: cdktf.numberToTerraform(struct!.liveBackoffInUnits),
    presentation_window_in_units: cdktf.numberToTerraform(struct!.presentationWindowInUnits),
    start_in_units: cdktf.numberToTerraform(struct!.startInUnits),
    unit_timescale_in_miliseconds: cdktf.numberToTerraform(struct!.unitTimescaleInMiliseconds),
  }
}

export class MediaAssetFilterPresentationTimeRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end_in_units - computed: false, optional: true, required: false
  private _endInUnits?: number | undefined; 
  public get endInUnits() {
    return this.getNumberAttribute('end_in_units');
  }
  public set endInUnits(value: number | undefined) {
    this._endInUnits = value;
  }
  public resetEndInUnits() {
    this._endInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInUnitsInput() {
    return this._endInUnits
  }

  // force_end - computed: false, optional: true, required: false
  private _forceEnd?: boolean | cdktf.IResolvable | undefined; 
  public get forceEnd() {
    return this.getBooleanAttribute('force_end') as any;
  }
  public set forceEnd(value: boolean | cdktf.IResolvable | undefined) {
    this._forceEnd = value;
  }
  public resetForceEnd() {
    this._forceEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceEndInput() {
    return this._forceEnd
  }

  // live_backoff_in_units - computed: false, optional: true, required: false
  private _liveBackoffInUnits?: number | undefined; 
  public get liveBackoffInUnits() {
    return this.getNumberAttribute('live_backoff_in_units');
  }
  public set liveBackoffInUnits(value: number | undefined) {
    this._liveBackoffInUnits = value;
  }
  public resetLiveBackoffInUnits() {
    this._liveBackoffInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveBackoffInUnitsInput() {
    return this._liveBackoffInUnits
  }

  // presentation_window_in_units - computed: false, optional: true, required: false
  private _presentationWindowInUnits?: number | undefined; 
  public get presentationWindowInUnits() {
    return this.getNumberAttribute('presentation_window_in_units');
  }
  public set presentationWindowInUnits(value: number | undefined) {
    this._presentationWindowInUnits = value;
  }
  public resetPresentationWindowInUnits() {
    this._presentationWindowInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentationWindowInUnitsInput() {
    return this._presentationWindowInUnits
  }

  // start_in_units - computed: false, optional: true, required: false
  private _startInUnits?: number | undefined; 
  public get startInUnits() {
    return this.getNumberAttribute('start_in_units');
  }
  public set startInUnits(value: number | undefined) {
    this._startInUnits = value;
  }
  public resetStartInUnits() {
    this._startInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInUnitsInput() {
    return this._startInUnits
  }

  // unit_timescale_in_miliseconds - computed: false, optional: true, required: false
  private _unitTimescaleInMiliseconds?: number | undefined; 
  public get unitTimescaleInMiliseconds() {
    return this.getNumberAttribute('unit_timescale_in_miliseconds');
  }
  public set unitTimescaleInMiliseconds(value: number | undefined) {
    this._unitTimescaleInMiliseconds = value;
  }
  public resetUnitTimescaleInMiliseconds() {
    this._unitTimescaleInMiliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTimescaleInMilisecondsInput() {
    return this._unitTimescaleInMiliseconds
  }
}
export interface MediaAssetFilterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#create MediaAssetFilter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#delete MediaAssetFilter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#read MediaAssetFilter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#update MediaAssetFilter#update}
  */
  readonly update?: string;
}

function mediaAssetFilterTimeoutsToTerraform(struct?: MediaAssetFilterTimeoutsOutputReference | MediaAssetFilterTimeouts): any {
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

export class MediaAssetFilterTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface MediaAssetFilterTrackSelectionCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#operation MediaAssetFilter#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#property MediaAssetFilter#property}
  */
  readonly property?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#value MediaAssetFilter#value}
  */
  readonly value?: string;
}

function mediaAssetFilterTrackSelectionConditionToTerraform(struct?: MediaAssetFilterTrackSelectionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    property: cdktf.stringToTerraform(struct!.property),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface MediaAssetFilterTrackSelection {
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html#condition MediaAssetFilter#condition}
  */
  readonly condition: MediaAssetFilterTrackSelectionCondition[];
}

function mediaAssetFilterTrackSelectionToTerraform(struct?: MediaAssetFilterTrackSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(mediaAssetFilterTrackSelectionConditionToTerraform)(struct!.condition),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html azurerm_media_asset_filter}
*/
export class MediaAssetFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_asset_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html azurerm_media_asset_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaAssetFilterConfig
  */
  public constructor(scope: Construct, id: string, config: MediaAssetFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_asset_filter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assetId = config.assetId;
    this._firstQualityBitrate = config.firstQualityBitrate;
    this._name = config.name;
    this._presentationTimeRange = config.presentationTimeRange;
    this._timeouts = config.timeouts;
    this._trackSelection = config.trackSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_id - computed: false, optional: false, required: true
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId
  }

  // first_quality_bitrate - computed: false, optional: true, required: false
  private _firstQualityBitrate?: number | undefined; 
  public get firstQualityBitrate() {
    return this.getNumberAttribute('first_quality_bitrate');
  }
  public set firstQualityBitrate(value: number | undefined) {
    this._firstQualityBitrate = value;
  }
  public resetFirstQualityBitrate() {
    this._firstQualityBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstQualityBitrateInput() {
    return this._firstQualityBitrate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // presentation_time_range - computed: false, optional: true, required: false
  private _presentationTimeRange?: MediaAssetFilterPresentationTimeRange | undefined; 
  private __presentationTimeRangeOutput = new MediaAssetFilterPresentationTimeRangeOutputReference(this as any, "presentation_time_range", true);
  public get presentationTimeRange() {
    return this.__presentationTimeRangeOutput;
  }
  public putPresentationTimeRange(value: MediaAssetFilterPresentationTimeRange | undefined) {
    this._presentationTimeRange = value;
  }
  public resetPresentationTimeRange() {
    this._presentationTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentationTimeRangeInput() {
    return this._presentationTimeRange
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaAssetFilterTimeouts | undefined; 
  private __timeoutsOutput = new MediaAssetFilterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaAssetFilterTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // track_selection - computed: false, optional: true, required: false
  private _trackSelection?: MediaAssetFilterTrackSelection[] | undefined; 
  public get trackSelection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('track_selection') as any;
  }
  public set trackSelection(value: MediaAssetFilterTrackSelection[] | undefined) {
    this._trackSelection = value;
  }
  public resetTrackSelection() {
    this._trackSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackSelectionInput() {
    return this._trackSelection
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_id: cdktf.stringToTerraform(this._assetId),
      first_quality_bitrate: cdktf.numberToTerraform(this._firstQualityBitrate),
      name: cdktf.stringToTerraform(this._name),
      presentation_time_range: mediaAssetFilterPresentationTimeRangeToTerraform(this._presentationTimeRange),
      timeouts: mediaAssetFilterTimeoutsToTerraform(this._timeouts),
      track_selection: cdktf.listMapper(mediaAssetFilterTrackSelectionToTerraform)(this._trackSelection),
    };
  }
}
