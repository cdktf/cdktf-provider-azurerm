/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaLiveEventOutputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}
  */
  readonly archiveWindowDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}
  */
  readonly assetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}
  */
  readonly hlsFragmentsPerTsSegment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}
  */
  readonly liveEventId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}
  */
  readonly manifestName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}
  */
  readonly outputSnapTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}
  */
  readonly rewindWindowDuration?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#timeouts MediaLiveEventOutput#timeouts}
  */
  readonly timeouts?: MediaLiveEventOutputTimeouts;
}
export interface MediaLiveEventOutputTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}
  */
  readonly read?: string;
}

export function mediaLiveEventOutputTimeoutsToTerraform(struct?: MediaLiveEventOutputTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class MediaLiveEventOutputTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaLiveEventOutputTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaLiveEventOutputTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output azurerm_media_live_event_output}
*/
export class MediaLiveEventOutput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_live_event_output";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaLiveEventOutput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaLiveEventOutput to import
  * @param importFromId The id of the existing MediaLiveEventOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaLiveEventOutput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_media_live_event_output", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_live_event_output azurerm_media_live_event_output} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaLiveEventOutputConfig
  */
  public constructor(scope: Construct, id: string, config: MediaLiveEventOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_live_event_output',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.82.0',
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
    this._archiveWindowDuration = config.archiveWindowDuration;
    this._assetName = config.assetName;
    this._description = config.description;
    this._hlsFragmentsPerTsSegment = config.hlsFragmentsPerTsSegment;
    this._id = config.id;
    this._liveEventId = config.liveEventId;
    this._manifestName = config.manifestName;
    this._name = config.name;
    this._outputSnapTimeInSeconds = config.outputSnapTimeInSeconds;
    this._rewindWindowDuration = config.rewindWindowDuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_window_duration - computed: false, optional: false, required: true
  private _archiveWindowDuration?: string; 
  public get archiveWindowDuration() {
    return this.getStringAttribute('archive_window_duration');
  }
  public set archiveWindowDuration(value: string) {
    this._archiveWindowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveWindowDurationInput() {
    return this._archiveWindowDuration;
  }

  // asset_name - computed: false, optional: false, required: true
  private _assetName?: string; 
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }
  public set assetName(value: string) {
    this._assetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNameInput() {
    return this._assetName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hls_fragments_per_ts_segment - computed: false, optional: true, required: false
  private _hlsFragmentsPerTsSegment?: number; 
  public get hlsFragmentsPerTsSegment() {
    return this.getNumberAttribute('hls_fragments_per_ts_segment');
  }
  public set hlsFragmentsPerTsSegment(value: number) {
    this._hlsFragmentsPerTsSegment = value;
  }
  public resetHlsFragmentsPerTsSegment() {
    this._hlsFragmentsPerTsSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsFragmentsPerTsSegmentInput() {
    return this._hlsFragmentsPerTsSegment;
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

  // live_event_id - computed: false, optional: false, required: true
  private _liveEventId?: string; 
  public get liveEventId() {
    return this.getStringAttribute('live_event_id');
  }
  public set liveEventId(value: string) {
    this._liveEventId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get liveEventIdInput() {
    return this._liveEventId;
  }

  // manifest_name - computed: true, optional: true, required: false
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  public resetManifestName() {
    this._manifestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
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

  // output_snap_time_in_seconds - computed: false, optional: true, required: false
  private _outputSnapTimeInSeconds?: number; 
  public get outputSnapTimeInSeconds() {
    return this.getNumberAttribute('output_snap_time_in_seconds');
  }
  public set outputSnapTimeInSeconds(value: number) {
    this._outputSnapTimeInSeconds = value;
  }
  public resetOutputSnapTimeInSeconds() {
    this._outputSnapTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSnapTimeInSecondsInput() {
    return this._outputSnapTimeInSeconds;
  }

  // rewind_window_duration - computed: false, optional: true, required: false
  private _rewindWindowDuration?: string; 
  public get rewindWindowDuration() {
    return this.getStringAttribute('rewind_window_duration');
  }
  public set rewindWindowDuration(value: string) {
    this._rewindWindowDuration = value;
  }
  public resetRewindWindowDuration() {
    this._rewindWindowDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewindWindowDurationInput() {
    return this._rewindWindowDuration;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaLiveEventOutputTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaLiveEventOutputTimeouts) {
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
      archive_window_duration: cdktf.stringToTerraform(this._archiveWindowDuration),
      asset_name: cdktf.stringToTerraform(this._assetName),
      description: cdktf.stringToTerraform(this._description),
      hls_fragments_per_ts_segment: cdktf.numberToTerraform(this._hlsFragmentsPerTsSegment),
      id: cdktf.stringToTerraform(this._id),
      live_event_id: cdktf.stringToTerraform(this._liveEventId),
      manifest_name: cdktf.stringToTerraform(this._manifestName),
      name: cdktf.stringToTerraform(this._name),
      output_snap_time_in_seconds: cdktf.numberToTerraform(this._outputSnapTimeInSeconds),
      rewind_window_duration: cdktf.stringToTerraform(this._rewindWindowDuration),
      timeouts: mediaLiveEventOutputTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
