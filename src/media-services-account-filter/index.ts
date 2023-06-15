/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaServicesAccountFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}
  */
  readonly firstQualityBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * presentation_time_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#presentation_time_range MediaServicesAccountFilter#presentation_time_range}
  */
  readonly presentationTimeRange?: MediaServicesAccountFilterPresentationTimeRange;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#timeouts MediaServicesAccountFilter#timeouts}
  */
  readonly timeouts?: MediaServicesAccountFilterTimeouts;
  /**
  * track_selection block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#track_selection MediaServicesAccountFilter#track_selection}
  */
  readonly trackSelection?: MediaServicesAccountFilterTrackSelection[] | cdktf.IResolvable;
}
export interface MediaServicesAccountFilterPresentationTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}
  */
  readonly endInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}
  */
  readonly forceEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}
  */
  readonly liveBackoffInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}
  */
  readonly presentationWindowInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}
  */
  readonly startInUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}
  */
  readonly unitTimescaleInMilliseconds: number;
}

export function mediaServicesAccountFilterPresentationTimeRangeToTerraform(struct?: MediaServicesAccountFilterPresentationTimeRangeOutputReference | MediaServicesAccountFilterPresentationTimeRange): any {
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
    unit_timescale_in_milliseconds: cdktf.numberToTerraform(struct!.unitTimescaleInMilliseconds),
  }
}

export class MediaServicesAccountFilterPresentationTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesAccountFilterPresentationTimeRange | undefined {
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
    if (this._unitTimescaleInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitTimescaleInMilliseconds = this._unitTimescaleInMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesAccountFilterPresentationTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endInUnits = undefined;
      this._forceEnd = undefined;
      this._liveBackoffInUnits = undefined;
      this._presentationWindowInUnits = undefined;
      this._startInUnits = undefined;
      this._unitTimescaleInMilliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endInUnits = value.endInUnits;
      this._forceEnd = value.forceEnd;
      this._liveBackoffInUnits = value.liveBackoffInUnits;
      this._presentationWindowInUnits = value.presentationWindowInUnits;
      this._startInUnits = value.startInUnits;
      this._unitTimescaleInMilliseconds = value.unitTimescaleInMilliseconds;
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

  // unit_timescale_in_milliseconds - computed: false, optional: false, required: true
  private _unitTimescaleInMilliseconds?: number; 
  public get unitTimescaleInMilliseconds() {
    return this.getNumberAttribute('unit_timescale_in_milliseconds');
  }
  public set unitTimescaleInMilliseconds(value: number) {
    this._unitTimescaleInMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTimescaleInMillisecondsInput() {
    return this._unitTimescaleInMilliseconds;
  }
}
export interface MediaServicesAccountFilterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}
  */
  readonly update?: string;
}

export function mediaServicesAccountFilterTimeoutsToTerraform(struct?: MediaServicesAccountFilterTimeouts | cdktf.IResolvable): any {
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

export class MediaServicesAccountFilterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaServicesAccountFilterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaServicesAccountFilterTimeouts | cdktf.IResolvable | undefined) {
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
export interface MediaServicesAccountFilterTrackSelectionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}
  */
  readonly property: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}
  */
  readonly value: string;
}

export function mediaServicesAccountFilterTrackSelectionConditionToTerraform(struct?: MediaServicesAccountFilterTrackSelectionCondition | cdktf.IResolvable): any {
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

export class MediaServicesAccountFilterTrackSelectionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaServicesAccountFilterTrackSelectionCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaServicesAccountFilterTrackSelectionCondition | cdktf.IResolvable | undefined) {
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

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MediaServicesAccountFilterTrackSelectionConditionList extends cdktf.ComplexList {
  public internalValue? : MediaServicesAccountFilterTrackSelectionCondition[] | cdktf.IResolvable

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
  public get(index: number): MediaServicesAccountFilterTrackSelectionConditionOutputReference {
    return new MediaServicesAccountFilterTrackSelectionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaServicesAccountFilterTrackSelection {
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter#condition MediaServicesAccountFilter#condition}
  */
  readonly condition: MediaServicesAccountFilterTrackSelectionCondition[] | cdktf.IResolvable;
}

export function mediaServicesAccountFilterTrackSelectionToTerraform(struct?: MediaServicesAccountFilterTrackSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(mediaServicesAccountFilterTrackSelectionConditionToTerraform, true)(struct!.condition),
  }
}

export class MediaServicesAccountFilterTrackSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaServicesAccountFilterTrackSelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaServicesAccountFilterTrackSelection | cdktf.IResolvable | undefined) {
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
  private _condition = new MediaServicesAccountFilterTrackSelectionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MediaServicesAccountFilterTrackSelectionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class MediaServicesAccountFilterTrackSelectionList extends cdktf.ComplexList {
  public internalValue? : MediaServicesAccountFilterTrackSelection[] | cdktf.IResolvable

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
  public get(index: number): MediaServicesAccountFilterTrackSelectionOutputReference {
    return new MediaServicesAccountFilterTrackSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter azurerm_media_services_account_filter}
*/
export class MediaServicesAccountFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_services_account_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_services_account_filter azurerm_media_services_account_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaServicesAccountFilterConfig
  */
  public constructor(scope: Construct, id: string, config: MediaServicesAccountFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_services_account_filter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.61.0',
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
    this._firstQualityBitrate = config.firstQualityBitrate;
    this._id = config.id;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._presentationTimeRange.internalValue = config.presentationTimeRange;
    this._timeouts.internalValue = config.timeouts;
    this._trackSelection.internalValue = config.trackSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // media_services_account_name - computed: false, optional: false, required: true
  private _mediaServicesAccountName?: string; 
  public get mediaServicesAccountName() {
    return this.getStringAttribute('media_services_account_name');
  }
  public set mediaServicesAccountName(value: string) {
    this._mediaServicesAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaServicesAccountNameInput() {
    return this._mediaServicesAccountName;
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

  // presentation_time_range - computed: false, optional: true, required: false
  private _presentationTimeRange = new MediaServicesAccountFilterPresentationTimeRangeOutputReference(this, "presentation_time_range");
  public get presentationTimeRange() {
    return this._presentationTimeRange;
  }
  public putPresentationTimeRange(value: MediaServicesAccountFilterPresentationTimeRange) {
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
  private _timeouts = new MediaServicesAccountFilterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaServicesAccountFilterTimeouts) {
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
  private _trackSelection = new MediaServicesAccountFilterTrackSelectionList(this, "track_selection", false);
  public get trackSelection() {
    return this._trackSelection;
  }
  public putTrackSelection(value: MediaServicesAccountFilterTrackSelection[] | cdktf.IResolvable) {
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
      first_quality_bitrate: cdktf.numberToTerraform(this._firstQualityBitrate),
      id: cdktf.stringToTerraform(this._id),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      presentation_time_range: mediaServicesAccountFilterPresentationTimeRangeToTerraform(this._presentationTimeRange.internalValue),
      timeouts: mediaServicesAccountFilterTimeoutsToTerraform(this._timeouts.internalValue),
      track_selection: cdktf.listMapper(mediaServicesAccountFilterTrackSelectionToTerraform, true)(this._trackSelection.internalValue),
    };
  }
}
