// https://www.terraform.io/docs/providers/azurerm/r/media_transform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#description MediaTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#id MediaTransform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#media_services_account_name MediaTransform#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#name MediaTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#resource_group_name MediaTransform#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#output MediaTransform#output}
  */
  readonly output?: MediaTransformOutput[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#timeouts MediaTransform#timeouts}
  */
  readonly timeouts?: MediaTransformTimeouts;
}
export interface MediaTransformOutputAudioAnalyzerPreset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}
  */
  readonly audioAnalysisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_language MediaTransform#audio_language}
  */
  readonly audioLanguage?: string;
}

export function mediaTransformOutputAudioAnalyzerPresetToTerraform(struct?: MediaTransformOutputAudioAnalyzerPresetOutputReference | MediaTransformOutputAudioAnalyzerPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#preset_name MediaTransform#preset_name}
  */
  readonly presetName?: string;
}

export function mediaTransformOutputBuiltinPresetToTerraform(struct?: MediaTransformOutputBuiltinPresetOutputReference | MediaTransformOutputBuiltinPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#analysis_resolution MediaTransform#analysis_resolution}
  */
  readonly analysisResolution?: string;
}

export function mediaTransformOutputFaceDetectorPresetToTerraform(struct?: MediaTransformOutputFaceDetectorPresetOutputReference | MediaTransformOutputFaceDetectorPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}
  */
  readonly audioAnalysisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_language MediaTransform#audio_language}
  */
  readonly audioLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#insights_type MediaTransform#insights_type}
  */
  readonly insightsType?: string;
}

export function mediaTransformOutputVideoAnalyzerPresetToTerraform(struct?: MediaTransformOutputVideoAnalyzerPresetOutputReference | MediaTransformOutputVideoAnalyzerPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#on_error_action MediaTransform#on_error_action}
  */
  readonly onErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#relative_priority MediaTransform#relative_priority}
  */
  readonly relativePriority?: string;
  /**
  * audio_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analyzer_preset MediaTransform#audio_analyzer_preset}
  */
  readonly audioAnalyzerPreset?: MediaTransformOutputAudioAnalyzerPreset;
  /**
  * builtin_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#builtin_preset MediaTransform#builtin_preset}
  */
  readonly builtinPreset?: MediaTransformOutputBuiltinPreset;
  /**
  * face_detector_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#face_detector_preset MediaTransform#face_detector_preset}
  */
  readonly faceDetectorPreset?: MediaTransformOutputFaceDetectorPreset;
  /**
  * video_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#video_analyzer_preset MediaTransform#video_analyzer_preset}
  */
  readonly videoAnalyzerPreset?: MediaTransformOutputVideoAnalyzerPreset;
}

export function mediaTransformOutputToTerraform(struct?: MediaTransformOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class MediaTransformOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onErrorAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.onErrorAction = this._onErrorAction;
    }
    if (this._relativePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePriority = this._relativePriority;
    }
    if (this._audioAnalyzerPreset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioAnalyzerPreset = this._audioAnalyzerPreset?.internalValue;
    }
    if (this._builtinPreset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinPreset = this._builtinPreset?.internalValue;
    }
    if (this._faceDetectorPreset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceDetectorPreset = this._faceDetectorPreset?.internalValue;
    }
    if (this._videoAnalyzerPreset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoAnalyzerPreset = this._videoAnalyzerPreset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onErrorAction = undefined;
      this._relativePriority = undefined;
      this._audioAnalyzerPreset.internalValue = undefined;
      this._builtinPreset.internalValue = undefined;
      this._faceDetectorPreset.internalValue = undefined;
      this._videoAnalyzerPreset.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onErrorAction = value.onErrorAction;
      this._relativePriority = value.relativePriority;
      this._audioAnalyzerPreset.internalValue = value.audioAnalyzerPreset;
      this._builtinPreset.internalValue = value.builtinPreset;
      this._faceDetectorPreset.internalValue = value.faceDetectorPreset;
      this._videoAnalyzerPreset.internalValue = value.videoAnalyzerPreset;
    }
  }

  // on_error_action - computed: false, optional: true, required: false
  private _onErrorAction?: string; 
  public get onErrorAction() {
    return this.getStringAttribute('on_error_action');
  }
  public set onErrorAction(value: string) {
    this._onErrorAction = value;
  }
  public resetOnErrorAction() {
    this._onErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorActionInput() {
    return this._onErrorAction;
  }

  // relative_priority - computed: false, optional: true, required: false
  private _relativePriority?: string; 
  public get relativePriority() {
    return this.getStringAttribute('relative_priority');
  }
  public set relativePriority(value: string) {
    this._relativePriority = value;
  }
  public resetRelativePriority() {
    this._relativePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePriorityInput() {
    return this._relativePriority;
  }

  // audio_analyzer_preset - computed: false, optional: true, required: false
  private _audioAnalyzerPreset = new MediaTransformOutputAudioAnalyzerPresetOutputReference(this, "audio_analyzer_preset");
  public get audioAnalyzerPreset() {
    return this._audioAnalyzerPreset;
  }
  public putAudioAnalyzerPreset(value: MediaTransformOutputAudioAnalyzerPreset) {
    this._audioAnalyzerPreset.internalValue = value;
  }
  public resetAudioAnalyzerPreset() {
    this._audioAnalyzerPreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAnalyzerPresetInput() {
    return this._audioAnalyzerPreset.internalValue;
  }

  // builtin_preset - computed: false, optional: true, required: false
  private _builtinPreset = new MediaTransformOutputBuiltinPresetOutputReference(this, "builtin_preset");
  public get builtinPreset() {
    return this._builtinPreset;
  }
  public putBuiltinPreset(value: MediaTransformOutputBuiltinPreset) {
    this._builtinPreset.internalValue = value;
  }
  public resetBuiltinPreset() {
    this._builtinPreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinPresetInput() {
    return this._builtinPreset.internalValue;
  }

  // face_detector_preset - computed: false, optional: true, required: false
  private _faceDetectorPreset = new MediaTransformOutputFaceDetectorPresetOutputReference(this, "face_detector_preset");
  public get faceDetectorPreset() {
    return this._faceDetectorPreset;
  }
  public putFaceDetectorPreset(value: MediaTransformOutputFaceDetectorPreset) {
    this._faceDetectorPreset.internalValue = value;
  }
  public resetFaceDetectorPreset() {
    this._faceDetectorPreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceDetectorPresetInput() {
    return this._faceDetectorPreset.internalValue;
  }

  // video_analyzer_preset - computed: false, optional: true, required: false
  private _videoAnalyzerPreset = new MediaTransformOutputVideoAnalyzerPresetOutputReference(this, "video_analyzer_preset");
  public get videoAnalyzerPreset() {
    return this._videoAnalyzerPreset;
  }
  public putVideoAnalyzerPreset(value: MediaTransformOutputVideoAnalyzerPreset) {
    this._videoAnalyzerPreset.internalValue = value;
  }
  public resetVideoAnalyzerPreset() {
    this._videoAnalyzerPreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoAnalyzerPresetInput() {
    return this._videoAnalyzerPreset.internalValue;
  }
}

export class MediaTransformOutputList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutput[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputOutputReference {
    return new MediaTransformOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#create MediaTransform#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#delete MediaTransform#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#read MediaTransform#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#update MediaTransform#update}
  */
  readonly update?: string;
}

export function mediaTransformTimeoutsToTerraform(struct?: MediaTransformTimeoutsOutputReference | MediaTransformTimeouts | cdktf.IResolvable): any {
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

export class MediaTransformTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaTransformTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform azurerm_media_transform}
*/
export class MediaTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_transform";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform azurerm_media_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaTransformConfig
  */
  public constructor(scope: Construct, id: string, config: MediaTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_transform',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.29.1',
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
    this._description = config.description;
    this._id = config.id;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._output.internalValue = config.output;
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

  // output - computed: false, optional: true, required: false
  private _output = new MediaTransformOutputList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: MediaTransformOutput[] | cdktf.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaTransformTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      output: cdktf.listMapper(mediaTransformOutputToTerraform, true)(this._output.internalValue),
      timeouts: mediaTransformTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
