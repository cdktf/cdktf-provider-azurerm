// https://www.terraform.io/docs/providers/azurerm/r/media_asset_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaAssetFilterConfig extends cdktf.TerraformMetaArguments {
  readonly assetId: string;
  readonly firstQualityBitrate?: number;
  readonly name: string;
  /** presentation_time_range block */
  readonly presentationTimeRange?: MediaAssetFilterPresentationTimeRange[];
  /** timeouts block */
  readonly timeouts?: MediaAssetFilterTimeouts;
  /** track_selection block */
  readonly trackSelection?: MediaAssetFilterTrackSelection[];
}
export interface MediaAssetFilterPresentationTimeRange {
  readonly endInUnits?: number;
  readonly forceEnd?: boolean;
  readonly liveBackoffInUnits?: number;
  readonly presentationWindowInUnits?: number;
  readonly startInUnits?: number;
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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
  readonly operation?: string;
  readonly property?: string;
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
  /** condition block */
  readonly condition?: MediaAssetFilterTrackSelectionCondition[];
}

function mediaAssetFilterTrackSelectionToTerraform(struct?: MediaAssetFilterTrackSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.listMapper(mediaAssetFilterTrackSelectionConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class MediaAssetFilter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
