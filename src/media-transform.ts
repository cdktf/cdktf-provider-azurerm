// https://www.terraform.io/docs/providers/azurerm/r/media_transform.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaTransformConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly mediaServicesAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** output block */
  readonly output?: MediaTransformOutput[];
  /** timeouts block */
  readonly timeouts?: MediaTransformTimeouts;
}
export interface MediaTransformOutputAudioAnalyzerPreset {
  readonly audioAnalysisMode?: string;
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
  readonly presetName?: string;
}

function mediaTransformOutputBuiltinPresetToTerraform(struct?: MediaTransformOutputBuiltinPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preset_name: cdktf.stringToTerraform(struct!.presetName),
  }
}

export interface MediaTransformOutputFaceDetectorPreset {
  readonly analysisResolution?: string;
}

function mediaTransformOutputFaceDetectorPresetToTerraform(struct?: MediaTransformOutputFaceDetectorPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    analysis_resolution: cdktf.stringToTerraform(struct!.analysisResolution),
  }
}

export interface MediaTransformOutputVideoAnalyzerPreset {
  readonly audioAnalysisMode?: string;
  readonly audioLanguage?: string;
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
  readonly onErrorAction?: string;
  readonly relativePriority?: string;
  /** audio_analyzer_preset block */
  readonly audioAnalyzerPreset?: MediaTransformOutputAudioAnalyzerPreset[];
  /** builtin_preset block */
  readonly builtinPreset?: MediaTransformOutputBuiltinPreset[];
  /** face_detector_preset block */
  readonly faceDetectorPreset?: MediaTransformOutputFaceDetectorPreset[];
  /** video_analyzer_preset block */
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class MediaTransform extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
