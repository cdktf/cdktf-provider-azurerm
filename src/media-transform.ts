// https://www.terraform.io/docs/providers/azurerm/r/media_transform.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#description MediaTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#media_services_account_name MediaTransform#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#name MediaTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#resource_group_name MediaTransform#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#output MediaTransform#output}
  */
  readonly output?: MediaTransformOutput[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#timeouts MediaTransform#timeouts}
  */
  readonly timeouts?: MediaTransformTimeouts;
}
export interface MediaTransformOutputAudioAnalyzerPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#audio_analysis_mode MediaTransform#audio_analysis_mode}
  */
  readonly audioAnalysisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#audio_language MediaTransform#audio_language}
  */
  readonly audioLanguage?: string;
}

function mediaTransformOutputAudioAnalyzerPresetToTerraform(struct?: MediaTransformOutputAudioAnalyzerPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audio_analysis_mode: cdktf.stringToTerraform(struct!.audioAnalysisMode),
    audio_language: cdktf.stringToTerraform(struct!.audioLanguage),
  }
}

export interface MediaTransformOutputBuiltinPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#preset_name MediaTransform#preset_name}
  */
  readonly presetName?: string;
}

function mediaTransformOutputBuiltinPresetToTerraform(struct?: MediaTransformOutputBuiltinPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preset_name: cdktf.stringToTerraform(struct!.presetName),
  }
}

export interface MediaTransformOutputFaceDetectorPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#analysis_resolution MediaTransform#analysis_resolution}
  */
  readonly analysisResolution?: string;
}

function mediaTransformOutputFaceDetectorPresetToTerraform(struct?: MediaTransformOutputFaceDetectorPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    analysis_resolution: cdktf.stringToTerraform(struct!.analysisResolution),
  }
}

export interface MediaTransformOutputVideoAnalyzerPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#audio_analysis_mode MediaTransform#audio_analysis_mode}
  */
  readonly audioAnalysisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#audio_language MediaTransform#audio_language}
  */
  readonly audioLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#insights_type MediaTransform#insights_type}
  */
  readonly insightsType?: string;
}

function mediaTransformOutputVideoAnalyzerPresetToTerraform(struct?: MediaTransformOutputVideoAnalyzerPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audio_analysis_mode: cdktf.stringToTerraform(struct!.audioAnalysisMode),
    audio_language: cdktf.stringToTerraform(struct!.audioLanguage),
    insights_type: cdktf.stringToTerraform(struct!.insightsType),
  }
}

export interface MediaTransformOutput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#on_error_action MediaTransform#on_error_action}
  */
  readonly onErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#relative_priority MediaTransform#relative_priority}
  */
  readonly relativePriority?: string;
  /**
  * audio_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#audio_analyzer_preset MediaTransform#audio_analyzer_preset}
  */
  readonly audioAnalyzerPreset?: MediaTransformOutputAudioAnalyzerPreset[];
  /**
  * builtin_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#builtin_preset MediaTransform#builtin_preset}
  */
  readonly builtinPreset?: MediaTransformOutputBuiltinPreset[];
  /**
  * face_detector_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#face_detector_preset MediaTransform#face_detector_preset}
  */
  readonly faceDetectorPreset?: MediaTransformOutputFaceDetectorPreset[];
  /**
  * video_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#video_analyzer_preset MediaTransform#video_analyzer_preset}
  */
  readonly videoAnalyzerPreset?: MediaTransformOutputVideoAnalyzerPreset[];
}

function mediaTransformOutputToTerraform(struct?: MediaTransformOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_error_action: cdktf.stringToTerraform(struct!.onErrorAction),
    relative_priority: cdktf.stringToTerraform(struct!.relativePriority),
    audio_analyzer_preset: cdktf.listMapper(mediaTransformOutputAudioAnalyzerPresetToTerraform)(struct!.audioAnalyzerPreset),
    builtin_preset: cdktf.listMapper(mediaTransformOutputBuiltinPresetToTerraform)(struct!.builtinPreset),
    face_detector_preset: cdktf.listMapper(mediaTransformOutputFaceDetectorPresetToTerraform)(struct!.faceDetectorPreset),
    video_analyzer_preset: cdktf.listMapper(mediaTransformOutputVideoAnalyzerPresetToTerraform)(struct!.videoAnalyzerPreset),
  }
}

export interface MediaTransformTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#create MediaTransform#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#delete MediaTransform#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#read MediaTransform#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#update MediaTransform#update}
  */
  readonly update?: string;
}

function mediaTransformTimeoutsToTerraform(struct?: MediaTransformTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html azurerm_media_transform}
*/
export class MediaTransform extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html azurerm_media_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaTransformConfig
  */
  public constructor(scope: Construct, id: string, config: MediaTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_transform',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._output = config.output;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // media_services_account_name - computed: false, optional: false, required: true
  private _mediaServicesAccountName: string;
  public get mediaServicesAccountName() {
    return this.getStringAttribute('media_services_account_name');
  }
  public set mediaServicesAccountName(value: string) {
    this._mediaServicesAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaServicesAccountNameInput() {
    return this._mediaServicesAccountName
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // output - computed: false, optional: true, required: false
  private _output?: MediaTransformOutput[];
  public get output() {
    return this.interpolationForAttribute('output') as any;
  }
  public set output(value: MediaTransformOutput[] ) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaTransformTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaTransformTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      output: cdktf.listMapper(mediaTransformOutputToTerraform)(this._output),
      timeouts: mediaTransformTimeoutsToTerraform(this._timeouts),
    };
  }
}
