// https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaLiveEventOutputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#archive_window_duration MediaLiveEventOutput#archive_window_duration}
  */
  readonly archiveWindowDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#asset_name MediaLiveEventOutput#asset_name}
  */
  readonly assetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#description MediaLiveEventOutput#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}
  */
  readonly hlsFragmentsPerTsSegment?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#live_event_id MediaLiveEventOutput#live_event_id}
  */
  readonly liveEventId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#manifest_name MediaLiveEventOutput#manifest_name}
  */
  readonly manifestName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#name MediaLiveEventOutput#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}
  */
  readonly outputSnapTimeInSeconds?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#timeouts MediaLiveEventOutput#timeouts}
  */
  readonly timeouts?: MediaLiveEventOutputTimeouts;
}
export interface MediaLiveEventOutputTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#create MediaLiveEventOutput#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#delete MediaLiveEventOutput#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#read MediaLiveEventOutput#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html#update MediaLiveEventOutput#update}
  */
  readonly update?: string;
}

function mediaLiveEventOutputTimeoutsToTerraform(struct?: MediaLiveEventOutputTimeoutsOutputReference | MediaLiveEventOutputTimeouts): any {
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

export class MediaLiveEventOutputTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html azurerm_media_live_event_output}
*/
export class MediaLiveEventOutput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_live_event_output";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event_output.html azurerm_media_live_event_output} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaLiveEventOutputConfig
  */
  public constructor(scope: Construct, id: string, config: MediaLiveEventOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_live_event_output',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._archiveWindowDuration = config.archiveWindowDuration;
    this._assetName = config.assetName;
    this._description = config.description;
    this._hlsFragmentsPerTsSegment = config.hlsFragmentsPerTsSegment;
    this._liveEventId = config.liveEventId;
    this._manifestName = config.manifestName;
    this._name = config.name;
    this._outputSnapTimeInSeconds = config.outputSnapTimeInSeconds;
    this._timeouts = config.timeouts;
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
    return this._archiveWindowDuration
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
    return this._assetName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // hls_fragments_per_ts_segment - computed: false, optional: true, required: false
  private _hlsFragmentsPerTsSegment?: number | undefined; 
  public get hlsFragmentsPerTsSegment() {
    return this.getNumberAttribute('hls_fragments_per_ts_segment');
  }
  public set hlsFragmentsPerTsSegment(value: number | undefined) {
    this._hlsFragmentsPerTsSegment = value;
  }
  public resetHlsFragmentsPerTsSegment() {
    this._hlsFragmentsPerTsSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsFragmentsPerTsSegmentInput() {
    return this._hlsFragmentsPerTsSegment
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._liveEventId
  }

  // manifest_name - computed: true, optional: true, required: false
  private _manifestName?: string | undefined; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string | undefined) {
    this._manifestName = value;
  }
  public resetManifestName() {
    this._manifestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName
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

  // output_snap_time_in_seconds - computed: false, optional: true, required: false
  private _outputSnapTimeInSeconds?: number | undefined; 
  public get outputSnapTimeInSeconds() {
    return this.getNumberAttribute('output_snap_time_in_seconds');
  }
  public set outputSnapTimeInSeconds(value: number | undefined) {
    this._outputSnapTimeInSeconds = value;
  }
  public resetOutputSnapTimeInSeconds() {
    this._outputSnapTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSnapTimeInSecondsInput() {
    return this._outputSnapTimeInSeconds
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaLiveEventOutputTimeouts | undefined; 
  private __timeoutsOutput = new MediaLiveEventOutputTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaLiveEventOutputTimeouts | undefined) {
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
      archive_window_duration: cdktf.stringToTerraform(this._archiveWindowDuration),
      asset_name: cdktf.stringToTerraform(this._assetName),
      description: cdktf.stringToTerraform(this._description),
      hls_fragments_per_ts_segment: cdktf.numberToTerraform(this._hlsFragmentsPerTsSegment),
      live_event_id: cdktf.stringToTerraform(this._liveEventId),
      manifest_name: cdktf.stringToTerraform(this._manifestName),
      name: cdktf.stringToTerraform(this._name),
      output_snap_time_in_seconds: cdktf.numberToTerraform(this._outputSnapTimeInSeconds),
      timeouts: mediaLiveEventOutputTimeoutsToTerraform(this._timeouts),
    };
  }
}
