// https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaAssetFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}
  */
  readonly assetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}
  */
  readonly firstQualityBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}
  */
  readonly name: string;
  /**
  * presentation_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#presentation_time_range MediaAssetFilter#presentation_time_range}
  */
  readonly presentationTimeRange?: MediaAssetFilterPresentationTimeRange;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#timeouts MediaAssetFilter#timeouts}
  */
  readonly timeouts?: MediaAssetFilterTimeouts;
  /**
  * track_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#track_selection MediaAssetFilter#track_selection}
  */
  readonly trackSelection?: MediaAssetFilterTrackSelection[] | cdktf.IResolvable;
}
export interface MediaAssetFilterPresentationTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}
  */
  readonly endInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}
  */
  readonly forceEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}
  */
  readonly liveBackoffInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}
  */
  readonly presentationWindowInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}
  */
  readonly startInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}
  */
  readonly unitTimescaleInMiliseconds?: number;
}

export function mediaAssetFilterPresentationTimeRangeToTerraform(struct?: MediaAssetFilterPresentationTimeRangeOutputReference | MediaAssetFilterPresentationTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function mediaAssetFilterPresentationTimeRangeToHclTerraform(struct?: MediaAssetFilterPresentationTimeRangeOutputReference | MediaAssetFilterPresentationTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_in_units: {
      value: cdktf.numberToHclTerraform(struct!.endInUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_end: {
      value: cdktf.booleanToHclTerraform(struct!.forceEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    live_backoff_in_units: {
      value: cdktf.numberToHclTerraform(struct!.liveBackoffInUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    presentation_window_in_units: {
      value: cdktf.numberToHclTerraform(struct!.presentationWindowInUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_in_units: {
      value: cdktf.numberToHclTerraform(struct!.startInUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_timescale_in_miliseconds: {
      value: cdktf.numberToHclTerraform(struct!.unitTimescaleInMiliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaAssetFilterPresentationTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaAssetFilterPresentationTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInUnits = this._endInUnits;
    }
    if (this._forceEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceEnd = this._forceEnd;
    }
    if (this._liveBackoffInUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveBackoffInUnits = this._liveBackoffInUnits;
    }
    if (this._presentationWindowInUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentationWindowInUnits = this._presentationWindowInUnits;
    }
    if (this._startInUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInUnits = this._startInUnits;
    }
    if (this._unitTimescaleInMiliseconds !== undefined) {
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
    return this.getBooleanAttribute('force_end');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}
  */
  readonly update?: string;
}

export function mediaAssetFilterTimeoutsToTerraform(struct?: MediaAssetFilterTimeouts | cdktf.IResolvable): any {
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


export function mediaAssetFilterTimeoutsToHclTerraform(struct?: MediaAssetFilterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaAssetFilterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaAssetFilterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaAssetFilterTimeouts | cdktf.IResolvable | undefined) {
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
export interface MediaAssetFilterTrackSelectionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}
  */
  readonly property?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}
  */
  readonly value?: string;
}

export function mediaAssetFilterTrackSelectionConditionToTerraform(struct?: MediaAssetFilterTrackSelectionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    property: cdktf.stringToTerraform(struct!.property),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mediaAssetFilterTrackSelectionConditionToHclTerraform(struct?: MediaAssetFilterTrackSelectionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaAssetFilterTrackSelectionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MediaAssetFilterTrackSelectionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaAssetFilterTrackSelectionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._property = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._property = value.property;
      this._value = value.value;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MediaAssetFilterTrackSelectionConditionList extends cdktf.ComplexList {
  public internalValue? : MediaAssetFilterTrackSelectionCondition[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MediaAssetFilterTrackSelectionConditionOutputReference {
    return new MediaAssetFilterTrackSelectionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaAssetFilterTrackSelection {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#condition MediaAssetFilter#condition}
  */
  readonly condition: MediaAssetFilterTrackSelectionCondition[] | cdktf.IResolvable;
}

export function mediaAssetFilterTrackSelectionToTerraform(struct?: MediaAssetFilterTrackSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(mediaAssetFilterTrackSelectionConditionToTerraform, true)(struct!.condition),
  }
}


export function mediaAssetFilterTrackSelectionToHclTerraform(struct?: MediaAssetFilterTrackSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(mediaAssetFilterTrackSelectionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "MediaAssetFilterTrackSelectionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaAssetFilterTrackSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MediaAssetFilterTrackSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaAssetFilterTrackSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new MediaAssetFilterTrackSelectionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MediaAssetFilterTrackSelectionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class MediaAssetFilterTrackSelectionList extends cdktf.ComplexList {
  public internalValue? : MediaAssetFilterTrackSelection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MediaAssetFilterTrackSelectionOutputReference {
    return new MediaAssetFilterTrackSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter azurerm_media_asset_filter}
*/
export class MediaAssetFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_asset_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaAssetFilter to import
  * @param importFromId The id of the existing MediaAssetFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaAssetFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_media_asset_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/media_asset_filter azurerm_media_asset_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaAssetFilterConfig
  */
  public constructor(scope: Construct, id: string, config: MediaAssetFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_asset_filter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.100.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetId = config.assetId;
    this._firstQualityBitrate = config.firstQualityBitrate;
    this._id = config.id;
    this._name = config.name;
    this._presentationTimeRange.internalValue = config.presentationTimeRange;
    this._timeouts.internalValue = config.timeouts;
    this._trackSelection.internalValue = config.trackSelection;
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
  private _presentationTimeRange = new MediaAssetFilterPresentationTimeRangeOutputReference(this, "presentation_time_range");
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
  private _timeouts = new MediaAssetFilterTimeoutsOutputReference(this, "timeouts");
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
  private _trackSelection = new MediaAssetFilterTrackSelectionList(this, "track_selection", false);
  public get trackSelection() {
    return this._trackSelection;
  }
  public putTrackSelection(value: MediaAssetFilterTrackSelection[] | cdktf.IResolvable) {
    this._trackSelection.internalValue = value;
  }
  public resetTrackSelection() {
    this._trackSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackSelectionInput() {
    return this._trackSelection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_id: cdktf.stringToTerraform(this._assetId),
      first_quality_bitrate: cdktf.numberToTerraform(this._firstQualityBitrate),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      presentation_time_range: mediaAssetFilterPresentationTimeRangeToTerraform(this._presentationTimeRange.internalValue),
      timeouts: mediaAssetFilterTimeoutsToTerraform(this._timeouts.internalValue),
      track_selection: cdktf.listMapper(mediaAssetFilterTrackSelectionToTerraform, true)(this._trackSelection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_id: {
        value: cdktf.stringToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_quality_bitrate: {
        value: cdktf.numberToHclTerraform(this._firstQualityBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      presentation_time_range: {
        value: mediaAssetFilterPresentationTimeRangeToHclTerraform(this._presentationTimeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaAssetFilterPresentationTimeRangeList",
      },
      timeouts: {
        value: mediaAssetFilterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaAssetFilterTimeouts",
      },
      track_selection: {
        value: cdktf.listMapperHcl(mediaAssetFilterTrackSelectionToHclTerraform, true)(this._trackSelection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaAssetFilterTrackSelectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
