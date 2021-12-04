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

export function mediaAssetFilterPresentationTimeRangeToTerraform(struct?: MediaAssetFilterPresentationTimeRangeOutputReference | MediaAssetFilterPresentationTimeRange): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaAssetFilterPresentationTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInUnits) {
      hasAnyValues = true;
      internalValueResult.endInUnits = this._endInUnits;
    }
    if (this._forceEnd) {
      hasAnyValues = true;
      internalValueResult.forceEnd = this._forceEnd;
    }
    if (this._liveBackoffInUnits) {
      hasAnyValues = true;
      internalValueResult.liveBackoffInUnits = this._liveBackoffInUnits;
    }
    if (this._presentationWindowInUnits) {
      hasAnyValues = true;
      internalValueResult.presentationWindowInUnits = this._presentationWindowInUnits;
    }
    if (this._startInUnits) {
      hasAnyValues = true;
      internalValueResult.startInUnits = this._startInUnits;
    }
    if (this._unitTimescaleInMiliseconds) {
      hasAnyValues = true;
      internalValueResult.unitTimescaleInMiliseconds = this._unitTimescaleInMiliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaAssetFilterPresentationTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endInUnits = undefined;
      this._forceEnd = undefined;
      this._liveBackoffInUnits = undefined;
      this._presentationWindowInUnits = undefined;
      this._startInUnits = undefined;
      this._unitTimescaleInMiliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endInUnits = value.endInUnits;
      this._forceEnd = value.forceEnd;
      this._liveBackoffInUnits = value.liveBackoffInUnits;
      this._presentationWindowInUnits = value.presentationWindowInUnits;
      this._startInUnits = value.startInUnits;
      this._unitTimescaleInMiliseconds = value.unitTimescaleInMiliseconds;
    }
  }

  // end_in_units - computed: false, optional: true, required: false
  private _endInUnits?: number; 
  public get endInUnits() {
    return this.getNumberAttribute('end_in_units');
  }
  public set endInUnits(value: number) {
    this._endInUnits = value;
  }
  public resetEndInUnits() {
    this._endInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInUnitsInput() {
    return this._endInUnits;
  }

  // force_end - computed: false, optional: true, required: false
  private _forceEnd?: boolean | cdktf.IResolvable; 
  public get forceEnd() {
    return this.getBooleanAttribute('force_end') as any;
  }
  public set forceEnd(value: boolean | cdktf.IResolvable) {
    this._forceEnd = value;
  }
  public resetForceEnd() {
    this._forceEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceEndInput() {
    return this._forceEnd;
  }

  // live_backoff_in_units - computed: false, optional: true, required: false
  private _liveBackoffInUnits?: number; 
  public get liveBackoffInUnits() {
    return this.getNumberAttribute('live_backoff_in_units');
  }
  public set liveBackoffInUnits(value: number) {
    this._liveBackoffInUnits = value;
  }
  public resetLiveBackoffInUnits() {
    this._liveBackoffInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveBackoffInUnitsInput() {
    return this._liveBackoffInUnits;
  }

  // presentation_window_in_units - computed: false, optional: true, required: false
  private _presentationWindowInUnits?: number; 
  public get presentationWindowInUnits() {
    return this.getNumberAttribute('presentation_window_in_units');
  }
  public set presentationWindowInUnits(value: number) {
    this._presentationWindowInUnits = value;
  }
  public resetPresentationWindowInUnits() {
    this._presentationWindowInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentationWindowInUnitsInput() {
    return this._presentationWindowInUnits;
  }

  // start_in_units - computed: false, optional: true, required: false
  private _startInUnits?: number; 
  public get startInUnits() {
    return this.getNumberAttribute('start_in_units');
  }
  public set startInUnits(value: number) {
    this._startInUnits = value;
  }
  public resetStartInUnits() {
    this._startInUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInUnitsInput() {
    return this._startInUnits;
  }

  // unit_timescale_in_miliseconds - computed: false, optional: true, required: false
  private _unitTimescaleInMiliseconds?: number; 
  public get unitTimescaleInMiliseconds() {
    return this.getNumberAttribute('unit_timescale_in_miliseconds');
  }
  public set unitTimescaleInMiliseconds(value: number) {
    this._unitTimescaleInMiliseconds = value;
  }
  public resetUnitTimescaleInMiliseconds() {
    this._unitTimescaleInMiliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTimescaleInMilisecondsInput() {
    return this._unitTimescaleInMiliseconds;
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

export function mediaAssetFilterTimeoutsToTerraform(struct?: MediaAssetFilterTimeoutsOutputReference | MediaAssetFilterTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaAssetFilterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaAssetFilterTimeouts | undefined) {
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

export function mediaAssetFilterTrackSelectionConditionToTerraform(struct?: MediaAssetFilterTrackSelectionCondition): any {
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

export function mediaAssetFilterTrackSelectionToTerraform(struct?: MediaAssetFilterTrackSelection): any {
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
    this._presentationTimeRange.internalValue = config.presentationTimeRange;
    this._timeouts.internalValue = config.timeouts;
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
    return this._assetId;
  }

  // first_quality_bitrate - computed: false, optional: true, required: false
  private _firstQualityBitrate?: number; 
  public get firstQualityBitrate() {
    return this.getNumberAttribute('first_quality_bitrate');
  }
  public set firstQualityBitrate(value: number) {
    this._firstQualityBitrate = value;
  }
  public resetFirstQualityBitrate() {
    this._firstQualityBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstQualityBitrateInput() {
    return this._firstQualityBitrate;
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
    return this._name;
  }

  // presentation_time_range - computed: false, optional: true, required: false
  private _presentationTimeRange = new MediaAssetFilterPresentationTimeRangeOutputReference(this as any, "presentation_time_range", true);
  public get presentationTimeRange() {
    return this._presentationTimeRange;
  }
  public putPresentationTimeRange(value: MediaAssetFilterPresentationTimeRange) {
    this._presentationTimeRange.internalValue = value;
  }
  public resetPresentationTimeRange() {
    this._presentationTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentationTimeRangeInput() {
    return this._presentationTimeRange.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaAssetFilterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaAssetFilterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // track_selection - computed: false, optional: true, required: false
  private _trackSelection?: MediaAssetFilterTrackSelection[]; 
  public get trackSelection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('track_selection') as any;
  }
  public set trackSelection(value: MediaAssetFilterTrackSelection[]) {
    this._trackSelection = value;
  }
  public resetTrackSelection() {
    this._trackSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackSelectionInput() {
    return this._trackSelection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_id: cdktf.stringToTerraform(this._assetId),
      first_quality_bitrate: cdktf.numberToTerraform(this._firstQualityBitrate),
      name: cdktf.stringToTerraform(this._name),
      presentation_time_range: mediaAssetFilterPresentationTimeRangeToTerraform(this._presentationTimeRange.internalValue),
      timeouts: mediaAssetFilterTimeoutsToTerraform(this._timeouts.internalValue),
      track_selection: cdktf.listMapper(mediaAssetFilterTrackSelectionToTerraform)(this._trackSelection),
    };
  }
}
