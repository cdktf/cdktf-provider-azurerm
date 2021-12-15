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

export function mediaTransformOutputAudioAnalyzerPresetToTerraform(struct?: MediaTransformOutputAudioAnalyzerPresetOutputReference | MediaTransformOutputAudioAnalyzerPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_analysis_mode: cdktf.stringToTerraform(struct!.audioAnalysisMode),
    audio_language: cdktf.stringToTerraform(struct!.audioLanguage),
  }
}

export class MediaTransformOutputAudioAnalyzerPresetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaTransformOutputAudioAnalyzerPreset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioAnalysisMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioAnalysisMode = this._audioAnalysisMode;
    }
    if (this._audioLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioLanguage = this._audioLanguage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputAudioAnalyzerPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioAnalysisMode = undefined;
      this._audioLanguage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioAnalysisMode = value.audioAnalysisMode;
      this._audioLanguage = value.audioLanguage;
    }
  }

  // audio_analysis_mode - computed: false, optional: true, required: false
  private _audioAnalysisMode?: string; 
  public get audioAnalysisMode() {
    return this.getStringAttribute('audio_analysis_mode');
  }
  public set audioAnalysisMode(value: string) {
    this._audioAnalysisMode = value;
  }
  public resetAudioAnalysisMode() {
    this._audioAnalysisMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAnalysisModeInput() {
    return this._audioAnalysisMode;
  }

  // audio_language - computed: false, optional: true, required: false
  private _audioLanguage?: string; 
  public get audioLanguage() {
    return this.getStringAttribute('audio_language');
  }
  public set audioLanguage(value: string) {
    this._audioLanguage = value;
  }
  public resetAudioLanguage() {
    this._audioLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioLanguageInput() {
    return this._audioLanguage;
  }
}
export interface MediaTransformOutputBuiltinPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#preset_name MediaTransform#preset_name}
  */
  readonly presetName?: string;
}

export function mediaTransformOutputBuiltinPresetToTerraform(struct?: MediaTransformOutputBuiltinPresetOutputReference | MediaTransformOutputBuiltinPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preset_name: cdktf.stringToTerraform(struct!.presetName),
  }
}

export class MediaTransformOutputBuiltinPresetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaTransformOutputBuiltinPreset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._presetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetName = this._presetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputBuiltinPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._presetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._presetName = value.presetName;
    }
  }

  // preset_name - computed: false, optional: true, required: false
  private _presetName?: string; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string) {
    this._presetName = value;
  }
  public resetPresetName() {
    this._presetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName;
  }
}
export interface MediaTransformOutputFaceDetectorPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#analysis_resolution MediaTransform#analysis_resolution}
  */
  readonly analysisResolution?: string;
}

export function mediaTransformOutputFaceDetectorPresetToTerraform(struct?: MediaTransformOutputFaceDetectorPresetOutputReference | MediaTransformOutputFaceDetectorPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis_resolution: cdktf.stringToTerraform(struct!.analysisResolution),
  }
}

export class MediaTransformOutputFaceDetectorPresetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaTransformOutputFaceDetectorPreset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysisResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisResolution = this._analysisResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputFaceDetectorPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analysisResolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysisResolution = value.analysisResolution;
    }
  }

  // analysis_resolution - computed: false, optional: true, required: false
  private _analysisResolution?: string; 
  public get analysisResolution() {
    return this.getStringAttribute('analysis_resolution');
  }
  public set analysisResolution(value: string) {
    this._analysisResolution = value;
  }
  public resetAnalysisResolution() {
    this._analysisResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisResolutionInput() {
    return this._analysisResolution;
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

export function mediaTransformOutputVideoAnalyzerPresetToTerraform(struct?: MediaTransformOutputVideoAnalyzerPresetOutputReference | MediaTransformOutputVideoAnalyzerPreset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_analysis_mode: cdktf.stringToTerraform(struct!.audioAnalysisMode),
    audio_language: cdktf.stringToTerraform(struct!.audioLanguage),
    insights_type: cdktf.stringToTerraform(struct!.insightsType),
  }
}

export class MediaTransformOutputVideoAnalyzerPresetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaTransformOutputVideoAnalyzerPreset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioAnalysisMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioAnalysisMode = this._audioAnalysisMode;
    }
    if (this._audioLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioLanguage = this._audioLanguage;
    }
    if (this._insightsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsType = this._insightsType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputVideoAnalyzerPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioAnalysisMode = undefined;
      this._audioLanguage = undefined;
      this._insightsType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioAnalysisMode = value.audioAnalysisMode;
      this._audioLanguage = value.audioLanguage;
      this._insightsType = value.insightsType;
    }
  }

  // audio_analysis_mode - computed: false, optional: true, required: false
  private _audioAnalysisMode?: string; 
  public get audioAnalysisMode() {
    return this.getStringAttribute('audio_analysis_mode');
  }
  public set audioAnalysisMode(value: string) {
    this._audioAnalysisMode = value;
  }
  public resetAudioAnalysisMode() {
    this._audioAnalysisMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAnalysisModeInput() {
    return this._audioAnalysisMode;
  }

  // audio_language - computed: false, optional: true, required: false
  private _audioLanguage?: string; 
  public get audioLanguage() {
    return this.getStringAttribute('audio_language');
  }
  public set audioLanguage(value: string) {
    this._audioLanguage = value;
  }
  public resetAudioLanguage() {
    this._audioLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioLanguageInput() {
    return this._audioLanguage;
  }

  // insights_type - computed: false, optional: true, required: false
  private _insightsType?: string; 
  public get insightsType() {
    return this.getStringAttribute('insights_type');
  }
  public set insightsType(value: string) {
    this._insightsType = value;
  }
  public resetInsightsType() {
    this._insightsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTypeInput() {
    return this._insightsType;
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
  readonly audioAnalyzerPreset?: MediaTransformOutputAudioAnalyzerPreset;
  /**
  * builtin_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#builtin_preset MediaTransform#builtin_preset}
  */
  readonly builtinPreset?: MediaTransformOutputBuiltinPreset;
  /**
  * face_detector_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#face_detector_preset MediaTransform#face_detector_preset}
  */
  readonly faceDetectorPreset?: MediaTransformOutputFaceDetectorPreset;
  /**
  * video_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html#video_analyzer_preset MediaTransform#video_analyzer_preset}
  */
  readonly videoAnalyzerPreset?: MediaTransformOutputVideoAnalyzerPreset;
}

export function mediaTransformOutputToTerraform(struct?: MediaTransformOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_error_action: cdktf.stringToTerraform(struct!.onErrorAction),
    relative_priority: cdktf.stringToTerraform(struct!.relativePriority),
    audio_analyzer_preset: mediaTransformOutputAudioAnalyzerPresetToTerraform(struct!.audioAnalyzerPreset),
    builtin_preset: mediaTransformOutputBuiltinPresetToTerraform(struct!.builtinPreset),
    face_detector_preset: mediaTransformOutputFaceDetectorPresetToTerraform(struct!.faceDetectorPreset),
    video_analyzer_preset: mediaTransformOutputVideoAnalyzerPresetToTerraform(struct!.videoAnalyzerPreset),
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

export function mediaTransformTimeoutsToTerraform(struct?: MediaTransformTimeoutsOutputReference | MediaTransformTimeouts): any {
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

export class MediaTransformTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaTransformTimeouts | undefined {
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

  public set internalValue(value: MediaTransformTimeouts | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform.html azurerm_media_transform}
*/
export class MediaTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_transform";

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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // output - computed: false, optional: true, required: false
  private _output?: MediaTransformOutput[]; 
  public get output() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('output') as any;
  }
  public set output(value: MediaTransformOutput[]) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaTransformTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaTransformTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      output: cdktf.listMapper(mediaTransformOutputToTerraform)(this._output),
      timeouts: mediaTransformTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
