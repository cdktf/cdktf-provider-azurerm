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
  readonly presentationTimeRange?: MediaAssetFilterPresentationTimeRange[];
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
  readonly forceEnd?: boolean;
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

function mediaAssetFilterPresentationTimeRangeToTerraform(struct?: MediaAssetFilterPresentationTimeRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_in_units: cdktf.numberToTerraform(struct!.endInUnits),
    force_end: cdktf.booleanToTerraform(struct!.forceEnd),
    live_backoff_in_units: cdktf.numberToTerraform(struct!.liveBackoffInUnits),
    presentation_window_in_units: cdktf.numberToTerraform(struct!.presentationWindowInUnits),
    start_in_units: cdktf.numberToTerraform(struct!.startInUnits),
    unit_timescale_in_miliseconds: cdktf.numberToTerraform(struct!.unitTimescaleInMiliseconds),
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

function mediaAssetFilterTimeoutsToTerraform(struct?: MediaAssetFilterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  return {
    condition: cdktf.listMapper(mediaAssetFilterTrackSelectionConditionToTerraform)(struct!.condition),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html azurerm_media_asset_filter}
*/
export class MediaAssetFilter extends cdktf.TerraformResource {

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
  private _assetId: string;
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
  private _firstQualityBitrate?: number;
  public get firstQualityBitrate() {
    return this.getNumberAttribute('first_quality_bitrate');
  }
  public set firstQualityBitrate(value: number ) {
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

  // presentation_time_range - computed: false, optional: true, required: false
  private _presentationTimeRange?: MediaAssetFilterPresentationTimeRange[];
  public get presentationTimeRange() {
    return this.interpolationForAttribute('presentation_time_range') as any;
  }
  public set presentationTimeRange(value: MediaAssetFilterPresentationTimeRange[] ) {
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
  private _timeouts?: MediaAssetFilterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaAssetFilterTimeouts ) {
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
  private _trackSelection?: MediaAssetFilterTrackSelection[];
  public get trackSelection() {
    return this.interpolationForAttribute('track_selection') as any;
  }
  public set trackSelection(value: MediaAssetFilterTrackSelection[] ) {
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
      presentation_time_range: cdktf.listMapper(mediaAssetFilterPresentationTimeRangeToTerraform)(this._presentationTimeRange),
      timeouts: mediaAssetFilterTimeoutsToTerraform(this._timeouts),
      track_selection: cdktf.listMapper(mediaAssetFilterTrackSelectionToTerraform)(this._trackSelection),
    };
  }
}
