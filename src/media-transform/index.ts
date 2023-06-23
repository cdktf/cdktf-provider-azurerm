/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#description MediaTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#id MediaTransform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#name MediaTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * output block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#output MediaTransform#output}
  */
  readonly output?: MediaTransformOutput[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#timeouts MediaTransform#timeouts}
  */
  readonly timeouts?: MediaTransformTimeouts;
}
export interface MediaTransformOutputAudioAnalyzerPreset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}
  */
  readonly audioAnalysisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}
  */
  readonly audioLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#experimental_options MediaTransform#experimental_options}
  */
  readonly experimentalOptions?: { [key: string]: string };
}

export function mediaTransformOutputAudioAnalyzerPresetToTerraform(struct?: MediaTransformOutputAudioAnalyzerPresetOutputReference | MediaTransformOutputAudioAnalyzerPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_analysis_mode: cdktf.stringToTerraform(struct!.audioAnalysisMode),
    audio_language: cdktf.stringToTerraform(struct!.audioLanguage),
    experimental_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.experimentalOptions),
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
    if (this._experimentalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalOptions = this._experimentalOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputAudioAnalyzerPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioAnalysisMode = undefined;
      this._audioLanguage = undefined;
      this._experimentalOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioAnalysisMode = value.audioAnalysisMode;
      this._audioLanguage = value.audioLanguage;
      this._experimentalOptions = value.experimentalOptions;
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

  // experimental_options - computed: false, optional: true, required: false
  private _experimentalOptions?: { [key: string]: string }; 
  public get experimentalOptions() {
    return this.getStringMapAttribute('experimental_options');
  }
  public set experimentalOptions(value: { [key: string]: string }) {
    this._experimentalOptions = value;
  }
  public resetExperimentalOptions() {
    this._experimentalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalOptionsInput() {
    return this._experimentalOptions;
  }
}
export interface MediaTransformOutputBuiltinPresetPresetConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#complexity MediaTransform#complexity}
  */
  readonly complexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#interleave_output MediaTransform#interleave_output}
  */
  readonly interleaveOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#key_frame_interval_in_seconds MediaTransform#key_frame_interval_in_seconds}
  */
  readonly keyFrameIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#max_bitrate_bps MediaTransform#max_bitrate_bps}
  */
  readonly maxBitrateBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#max_height MediaTransform#max_height}
  */
  readonly maxHeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#max_layers MediaTransform#max_layers}
  */
  readonly maxLayers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#min_bitrate_bps MediaTransform#min_bitrate_bps}
  */
  readonly minBitrateBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#min_height MediaTransform#min_height}
  */
  readonly minHeight?: number;
}

export function mediaTransformOutputBuiltinPresetPresetConfigurationToTerraform(struct?: MediaTransformOutputBuiltinPresetPresetConfigurationOutputReference | MediaTransformOutputBuiltinPresetPresetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: cdktf.stringToTerraform(struct!.complexity),
    interleave_output: cdktf.stringToTerraform(struct!.interleaveOutput),
    key_frame_interval_in_seconds: cdktf.numberToTerraform(struct!.keyFrameIntervalInSeconds),
    max_bitrate_bps: cdktf.numberToTerraform(struct!.maxBitrateBps),
    max_height: cdktf.numberToTerraform(struct!.maxHeight),
    max_layers: cdktf.numberToTerraform(struct!.maxLayers),
    min_bitrate_bps: cdktf.numberToTerraform(struct!.minBitrateBps),
    min_height: cdktf.numberToTerraform(struct!.minHeight),
  }
}

export class MediaTransformOutputBuiltinPresetPresetConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputBuiltinPresetPresetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._interleaveOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.interleaveOutput = this._interleaveOutput;
    }
    if (this._keyFrameIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameIntervalInSeconds = this._keyFrameIntervalInSeconds;
    }
    if (this._maxBitrateBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrateBps = this._maxBitrateBps;
    }
    if (this._maxHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeight = this._maxHeight;
    }
    if (this._maxLayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLayers = this._maxLayers;
    }
    if (this._minBitrateBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBitrateBps = this._minBitrateBps;
    }
    if (this._minHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHeight = this._minHeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputBuiltinPresetPresetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complexity = undefined;
      this._interleaveOutput = undefined;
      this._keyFrameIntervalInSeconds = undefined;
      this._maxBitrateBps = undefined;
      this._maxHeight = undefined;
      this._maxLayers = undefined;
      this._minBitrateBps = undefined;
      this._minHeight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complexity = value.complexity;
      this._interleaveOutput = value.interleaveOutput;
      this._keyFrameIntervalInSeconds = value.keyFrameIntervalInSeconds;
      this._maxBitrateBps = value.maxBitrateBps;
      this._maxHeight = value.maxHeight;
      this._maxLayers = value.maxLayers;
      this._minBitrateBps = value.minBitrateBps;
      this._minHeight = value.minHeight;
    }
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // interleave_output - computed: false, optional: true, required: false
  private _interleaveOutput?: string; 
  public get interleaveOutput() {
    return this.getStringAttribute('interleave_output');
  }
  public set interleaveOutput(value: string) {
    this._interleaveOutput = value;
  }
  public resetInterleaveOutput() {
    this._interleaveOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interleaveOutputInput() {
    return this._interleaveOutput;
  }

  // key_frame_interval_in_seconds - computed: false, optional: true, required: false
  private _keyFrameIntervalInSeconds?: number; 
  public get keyFrameIntervalInSeconds() {
    return this.getNumberAttribute('key_frame_interval_in_seconds');
  }
  public set keyFrameIntervalInSeconds(value: number) {
    this._keyFrameIntervalInSeconds = value;
  }
  public resetKeyFrameIntervalInSeconds() {
    this._keyFrameIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalInSecondsInput() {
    return this._keyFrameIntervalInSeconds;
  }

  // max_bitrate_bps - computed: false, optional: true, required: false
  private _maxBitrateBps?: number; 
  public get maxBitrateBps() {
    return this.getNumberAttribute('max_bitrate_bps');
  }
  public set maxBitrateBps(value: number) {
    this._maxBitrateBps = value;
  }
  public resetMaxBitrateBps() {
    this._maxBitrateBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateBpsInput() {
    return this._maxBitrateBps;
  }

  // max_height - computed: false, optional: true, required: false
  private _maxHeight?: number; 
  public get maxHeight() {
    return this.getNumberAttribute('max_height');
  }
  public set maxHeight(value: number) {
    this._maxHeight = value;
  }
  public resetMaxHeight() {
    this._maxHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeightInput() {
    return this._maxHeight;
  }

  // max_layers - computed: false, optional: true, required: false
  private _maxLayers?: number; 
  public get maxLayers() {
    return this.getNumberAttribute('max_layers');
  }
  public set maxLayers(value: number) {
    this._maxLayers = value;
  }
  public resetMaxLayers() {
    this._maxLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLayersInput() {
    return this._maxLayers;
  }

  // min_bitrate_bps - computed: false, optional: true, required: false
  private _minBitrateBps?: number; 
  public get minBitrateBps() {
    return this.getNumberAttribute('min_bitrate_bps');
  }
  public set minBitrateBps(value: number) {
    this._minBitrateBps = value;
  }
  public resetMinBitrateBps() {
    this._minBitrateBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBitrateBpsInput() {
    return this._minBitrateBps;
  }

  // min_height - computed: false, optional: true, required: false
  private _minHeight?: number; 
  public get minHeight() {
    return this.getNumberAttribute('min_height');
  }
  public set minHeight(value: number) {
    this._minHeight = value;
  }
  public resetMinHeight() {
    this._minHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHeightInput() {
    return this._minHeight;
  }
}
export interface MediaTransformOutputBuiltinPreset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#preset_name MediaTransform#preset_name}
  */
  readonly presetName: string;
  /**
  * preset_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#preset_configuration MediaTransform#preset_configuration}
  */
  readonly presetConfiguration?: MediaTransformOutputBuiltinPresetPresetConfiguration;
}

export function mediaTransformOutputBuiltinPresetToTerraform(struct?: MediaTransformOutputBuiltinPresetOutputReference | MediaTransformOutputBuiltinPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preset_name: cdktf.stringToTerraform(struct!.presetName),
    preset_configuration: mediaTransformOutputBuiltinPresetPresetConfigurationToTerraform(struct!.presetConfiguration),
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
    if (this._presetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetConfiguration = this._presetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputBuiltinPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._presetName = undefined;
      this._presetConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._presetName = value.presetName;
      this._presetConfiguration.internalValue = value.presetConfiguration;
    }
  }

  // preset_name - computed: false, optional: false, required: true
  private _presetName?: string; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string) {
    this._presetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName;
  }

  // preset_configuration - computed: false, optional: true, required: false
  private _presetConfiguration = new MediaTransformOutputBuiltinPresetPresetConfigurationOutputReference(this, "preset_configuration");
  public get presetConfiguration() {
    return this._presetConfiguration;
  }
  public putPresetConfiguration(value: MediaTransformOutputBuiltinPresetPresetConfiguration) {
    this._presetConfiguration.internalValue = value;
  }
  public resetPresetConfiguration() {
    this._presetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetConfigurationInput() {
    return this._presetConfiguration.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetCodecAacAudio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#bitrate MediaTransform#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#channels MediaTransform#channels}
  */
  readonly channels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#profile MediaTransform#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sampling_rate MediaTransform#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function mediaTransformOutputCustomPresetCodecAacAudioToTerraform(struct?: MediaTransformOutputCustomPresetCodecAacAudioOutputReference | MediaTransformOutputCustomPresetCodecAacAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    channels: cdktf.numberToTerraform(struct!.channels),
    label: cdktf.stringToTerraform(struct!.label),
    profile: cdktf.stringToTerraform(struct!.profile),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}

export class MediaTransformOutputCustomPresetCodecAacAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecAacAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecAacAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._channels = undefined;
      this._label = undefined;
      this._profile = undefined;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._channels = value.channels;
      this._label = value.label;
      this._profile = value.profile;
      this._samplingRate = value.samplingRate;
    }
  }

  // bitrate - computed: false, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number; 
  public get channels() {
    return this.getNumberAttribute('channels');
  }
  public set channels(value: number) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface MediaTransformOutputCustomPresetCodecCopyAudio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
}

export function mediaTransformOutputCustomPresetCodecCopyAudioToTerraform(struct?: MediaTransformOutputCustomPresetCodecCopyAudioOutputReference | MediaTransformOutputCustomPresetCodecCopyAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
  }
}

export class MediaTransformOutputCustomPresetCodecCopyAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecCopyAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecCopyAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface MediaTransformOutputCustomPresetCodecCopyVideo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
}

export function mediaTransformOutputCustomPresetCodecCopyVideoToTerraform(struct?: MediaTransformOutputCustomPresetCodecCopyVideoOutputReference | MediaTransformOutputCustomPresetCodecCopyVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
  }
}

export class MediaTransformOutputCustomPresetCodecCopyVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecCopyVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecCopyVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface MediaTransformOutputCustomPresetCodecDdAudio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#bitrate MediaTransform#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#channels MediaTransform#channels}
  */
  readonly channels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sampling_rate MediaTransform#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function mediaTransformOutputCustomPresetCodecDdAudioToTerraform(struct?: MediaTransformOutputCustomPresetCodecDdAudioOutputReference | MediaTransformOutputCustomPresetCodecDdAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    channels: cdktf.numberToTerraform(struct!.channels),
    label: cdktf.stringToTerraform(struct!.label),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}

export class MediaTransformOutputCustomPresetCodecDdAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecDdAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecDdAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._channels = undefined;
      this._label = undefined;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._channels = value.channels;
      this._label = value.label;
      this._samplingRate = value.samplingRate;
    }
  }

  // bitrate - computed: false, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number; 
  public get channels() {
    return this.getNumberAttribute('channels');
  }
  public set channels(value: number) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface MediaTransformOutputCustomPresetCodecH264VideoLayer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#adaptive_b_frame_enabled MediaTransform#adaptive_b_frame_enabled}
  */
  readonly adaptiveBFrameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#b_frames MediaTransform#b_frames}
  */
  readonly bFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#bitrate MediaTransform#bitrate}
  */
  readonly bitrate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#buffer_window MediaTransform#buffer_window}
  */
  readonly bufferWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#crf MediaTransform#crf}
  */
  readonly crf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#entropy_mode MediaTransform#entropy_mode}
  */
  readonly entropyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#frame_rate MediaTransform#frame_rate}
  */
  readonly frameRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#level MediaTransform#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#max_bitrate MediaTransform#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#profile MediaTransform#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#reference_frames MediaTransform#reference_frames}
  */
  readonly referenceFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#slices MediaTransform#slices}
  */
  readonly slices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetCodecH264VideoLayerToTerraform(struct?: MediaTransformOutputCustomPresetCodecH264VideoLayer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_b_frame_enabled: cdktf.booleanToTerraform(struct!.adaptiveBFrameEnabled),
    b_frames: cdktf.numberToTerraform(struct!.bFrames),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    buffer_window: cdktf.stringToTerraform(struct!.bufferWindow),
    crf: cdktf.numberToTerraform(struct!.crf),
    entropy_mode: cdktf.stringToTerraform(struct!.entropyMode),
    frame_rate: cdktf.stringToTerraform(struct!.frameRate),
    height: cdktf.stringToTerraform(struct!.height),
    label: cdktf.stringToTerraform(struct!.label),
    level: cdktf.stringToTerraform(struct!.level),
    max_bitrate: cdktf.numberToTerraform(struct!.maxBitrate),
    profile: cdktf.stringToTerraform(struct!.profile),
    reference_frames: cdktf.numberToTerraform(struct!.referenceFrames),
    slices: cdktf.numberToTerraform(struct!.slices),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetCodecH264VideoLayerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetCodecH264VideoLayer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveBFrameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveBFrameEnabled = this._adaptiveBFrameEnabled;
    }
    if (this._bFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.bFrames = this._bFrames;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bufferWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferWindow = this._bufferWindow;
    }
    if (this._crf !== undefined) {
      hasAnyValues = true;
      internalValueResult.crf = this._crf;
    }
    if (this._entropyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.entropyMode = this._entropyMode;
    }
    if (this._frameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameRate = this._frameRate;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._maxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrate = this._maxBitrate;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._referenceFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceFrames = this._referenceFrames;
    }
    if (this._slices !== undefined) {
      hasAnyValues = true;
      internalValueResult.slices = this._slices;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecH264VideoLayer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptiveBFrameEnabled = undefined;
      this._bFrames = undefined;
      this._bitrate = undefined;
      this._bufferWindow = undefined;
      this._crf = undefined;
      this._entropyMode = undefined;
      this._frameRate = undefined;
      this._height = undefined;
      this._label = undefined;
      this._level = undefined;
      this._maxBitrate = undefined;
      this._profile = undefined;
      this._referenceFrames = undefined;
      this._slices = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptiveBFrameEnabled = value.adaptiveBFrameEnabled;
      this._bFrames = value.bFrames;
      this._bitrate = value.bitrate;
      this._bufferWindow = value.bufferWindow;
      this._crf = value.crf;
      this._entropyMode = value.entropyMode;
      this._frameRate = value.frameRate;
      this._height = value.height;
      this._label = value.label;
      this._level = value.level;
      this._maxBitrate = value.maxBitrate;
      this._profile = value.profile;
      this._referenceFrames = value.referenceFrames;
      this._slices = value.slices;
      this._width = value.width;
    }
  }

  // adaptive_b_frame_enabled - computed: false, optional: true, required: false
  private _adaptiveBFrameEnabled?: boolean | cdktf.IResolvable; 
  public get adaptiveBFrameEnabled() {
    return this.getBooleanAttribute('adaptive_b_frame_enabled');
  }
  public set adaptiveBFrameEnabled(value: boolean | cdktf.IResolvable) {
    this._adaptiveBFrameEnabled = value;
  }
  public resetAdaptiveBFrameEnabled() {
    this._adaptiveBFrameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveBFrameEnabledInput() {
    return this._adaptiveBFrameEnabled;
  }

  // b_frames - computed: true, optional: true, required: false
  private _bFrames?: number; 
  public get bFrames() {
    return this.getNumberAttribute('b_frames');
  }
  public set bFrames(value: number) {
    this._bFrames = value;
  }
  public resetBFrames() {
    this._bFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bFramesInput() {
    return this._bFrames;
  }

  // bitrate - computed: false, optional: false, required: true
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // buffer_window - computed: false, optional: true, required: false
  private _bufferWindow?: string; 
  public get bufferWindow() {
    return this.getStringAttribute('buffer_window');
  }
  public set bufferWindow(value: string) {
    this._bufferWindow = value;
  }
  public resetBufferWindow() {
    this._bufferWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferWindowInput() {
    return this._bufferWindow;
  }

  // crf - computed: false, optional: true, required: false
  private _crf?: number; 
  public get crf() {
    return this.getNumberAttribute('crf');
  }
  public set crf(value: number) {
    this._crf = value;
  }
  public resetCrf() {
    this._crf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crfInput() {
    return this._crf;
  }

  // entropy_mode - computed: true, optional: true, required: false
  private _entropyMode?: string; 
  public get entropyMode() {
    return this.getStringAttribute('entropy_mode');
  }
  public set entropyMode(value: string) {
    this._entropyMode = value;
  }
  public resetEntropyMode() {
    this._entropyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entropyModeInput() {
    return this._entropyMode;
  }

  // frame_rate - computed: false, optional: true, required: false
  private _frameRate?: string; 
  public get frameRate() {
    return this.getStringAttribute('frame_rate');
  }
  public set frameRate(value: string) {
    this._frameRate = value;
  }
  public resetFrameRate() {
    this._frameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameRateInput() {
    return this._frameRate;
  }

  // height - computed: true, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // max_bitrate - computed: true, optional: true, required: false
  private _maxBitrate?: number; 
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // reference_frames - computed: true, optional: true, required: false
  private _referenceFrames?: number; 
  public get referenceFrames() {
    return this.getNumberAttribute('reference_frames');
  }
  public set referenceFrames(value: number) {
    this._referenceFrames = value;
  }
  public resetReferenceFrames() {
    this._referenceFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceFramesInput() {
    return this._referenceFrames;
  }

  // slices - computed: true, optional: true, required: false
  private _slices?: number; 
  public get slices() {
    return this.getNumberAttribute('slices');
  }
  public set slices(value: number) {
    this._slices = value;
  }
  public resetSlices() {
    this._slices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slicesInput() {
    return this._slices;
  }

  // width - computed: true, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class MediaTransformOutputCustomPresetCodecH264VideoLayerList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetCodecH264VideoLayer[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetCodecH264VideoLayerOutputReference {
    return new MediaTransformOutputCustomPresetCodecH264VideoLayerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetCodecH264Video {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#complexity MediaTransform#complexity}
  */
  readonly complexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#key_frame_interval MediaTransform#key_frame_interval}
  */
  readonly keyFrameInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#rate_control_mode MediaTransform#rate_control_mode}
  */
  readonly rateControlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#scene_change_detection_enabled MediaTransform#scene_change_detection_enabled}
  */
  readonly sceneChangeDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#stretch_mode MediaTransform#stretch_mode}
  */
  readonly stretchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sync_mode MediaTransform#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * layer block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#layer MediaTransform#layer}
  */
  readonly layer?: MediaTransformOutputCustomPresetCodecH264VideoLayer[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetCodecH264VideoToTerraform(struct?: MediaTransformOutputCustomPresetCodecH264VideoOutputReference | MediaTransformOutputCustomPresetCodecH264Video): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: cdktf.stringToTerraform(struct!.complexity),
    key_frame_interval: cdktf.stringToTerraform(struct!.keyFrameInterval),
    label: cdktf.stringToTerraform(struct!.label),
    rate_control_mode: cdktf.stringToTerraform(struct!.rateControlMode),
    scene_change_detection_enabled: cdktf.booleanToTerraform(struct!.sceneChangeDetectionEnabled),
    stretch_mode: cdktf.stringToTerraform(struct!.stretchMode),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    layer: cdktf.listMapper(mediaTransformOutputCustomPresetCodecH264VideoLayerToTerraform, true)(struct!.layer),
  }
}

export class MediaTransformOutputCustomPresetCodecH264VideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecH264Video | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._keyFrameInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameInterval = this._keyFrameInterval;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._rateControlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateControlMode = this._rateControlMode;
    }
    if (this._sceneChangeDetectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sceneChangeDetectionEnabled = this._sceneChangeDetectionEnabled;
    }
    if (this._stretchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchMode = this._stretchMode;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._layer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecH264Video | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complexity = undefined;
      this._keyFrameInterval = undefined;
      this._label = undefined;
      this._rateControlMode = undefined;
      this._sceneChangeDetectionEnabled = undefined;
      this._stretchMode = undefined;
      this._syncMode = undefined;
      this._layer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complexity = value.complexity;
      this._keyFrameInterval = value.keyFrameInterval;
      this._label = value.label;
      this._rateControlMode = value.rateControlMode;
      this._sceneChangeDetectionEnabled = value.sceneChangeDetectionEnabled;
      this._stretchMode = value.stretchMode;
      this._syncMode = value.syncMode;
      this._layer.internalValue = value.layer;
    }
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // key_frame_interval - computed: false, optional: true, required: false
  private _keyFrameInterval?: string; 
  public get keyFrameInterval() {
    return this.getStringAttribute('key_frame_interval');
  }
  public set keyFrameInterval(value: string) {
    this._keyFrameInterval = value;
  }
  public resetKeyFrameInterval() {
    this._keyFrameInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalInput() {
    return this._keyFrameInterval;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // rate_control_mode - computed: false, optional: true, required: false
  private _rateControlMode?: string; 
  public get rateControlMode() {
    return this.getStringAttribute('rate_control_mode');
  }
  public set rateControlMode(value: string) {
    this._rateControlMode = value;
  }
  public resetRateControlMode() {
    this._rateControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateControlModeInput() {
    return this._rateControlMode;
  }

  // scene_change_detection_enabled - computed: false, optional: true, required: false
  private _sceneChangeDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get sceneChangeDetectionEnabled() {
    return this.getBooleanAttribute('scene_change_detection_enabled');
  }
  public set sceneChangeDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._sceneChangeDetectionEnabled = value;
  }
  public resetSceneChangeDetectionEnabled() {
    this._sceneChangeDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneChangeDetectionEnabledInput() {
    return this._sceneChangeDetectionEnabled;
  }

  // stretch_mode - computed: false, optional: true, required: false
  private _stretchMode?: string; 
  public get stretchMode() {
    return this.getStringAttribute('stretch_mode');
  }
  public set stretchMode(value: string) {
    this._stretchMode = value;
  }
  public resetStretchMode() {
    this._stretchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchModeInput() {
    return this._stretchMode;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // layer - computed: false, optional: true, required: false
  private _layer = new MediaTransformOutputCustomPresetCodecH264VideoLayerList(this, "layer", false);
  public get layer() {
    return this._layer;
  }
  public putLayer(value: MediaTransformOutputCustomPresetCodecH264VideoLayer[] | cdktf.IResolvable) {
    this._layer.internalValue = value;
  }
  public resetLayer() {
    this._layer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetCodecH265VideoLayer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#adaptive_b_frame_enabled MediaTransform#adaptive_b_frame_enabled}
  */
  readonly adaptiveBFrameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#b_frames MediaTransform#b_frames}
  */
  readonly bFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#bitrate MediaTransform#bitrate}
  */
  readonly bitrate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#buffer_window MediaTransform#buffer_window}
  */
  readonly bufferWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#crf MediaTransform#crf}
  */
  readonly crf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#frame_rate MediaTransform#frame_rate}
  */
  readonly frameRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#level MediaTransform#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#max_bitrate MediaTransform#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#profile MediaTransform#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#reference_frames MediaTransform#reference_frames}
  */
  readonly referenceFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#slices MediaTransform#slices}
  */
  readonly slices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetCodecH265VideoLayerToTerraform(struct?: MediaTransformOutputCustomPresetCodecH265VideoLayer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_b_frame_enabled: cdktf.booleanToTerraform(struct!.adaptiveBFrameEnabled),
    b_frames: cdktf.numberToTerraform(struct!.bFrames),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    buffer_window: cdktf.stringToTerraform(struct!.bufferWindow),
    crf: cdktf.numberToTerraform(struct!.crf),
    frame_rate: cdktf.stringToTerraform(struct!.frameRate),
    height: cdktf.stringToTerraform(struct!.height),
    label: cdktf.stringToTerraform(struct!.label),
    level: cdktf.stringToTerraform(struct!.level),
    max_bitrate: cdktf.numberToTerraform(struct!.maxBitrate),
    profile: cdktf.stringToTerraform(struct!.profile),
    reference_frames: cdktf.numberToTerraform(struct!.referenceFrames),
    slices: cdktf.numberToTerraform(struct!.slices),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetCodecH265VideoLayerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetCodecH265VideoLayer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveBFrameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveBFrameEnabled = this._adaptiveBFrameEnabled;
    }
    if (this._bFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.bFrames = this._bFrames;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bufferWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferWindow = this._bufferWindow;
    }
    if (this._crf !== undefined) {
      hasAnyValues = true;
      internalValueResult.crf = this._crf;
    }
    if (this._frameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameRate = this._frameRate;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._maxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrate = this._maxBitrate;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._referenceFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceFrames = this._referenceFrames;
    }
    if (this._slices !== undefined) {
      hasAnyValues = true;
      internalValueResult.slices = this._slices;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecH265VideoLayer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptiveBFrameEnabled = undefined;
      this._bFrames = undefined;
      this._bitrate = undefined;
      this._bufferWindow = undefined;
      this._crf = undefined;
      this._frameRate = undefined;
      this._height = undefined;
      this._label = undefined;
      this._level = undefined;
      this._maxBitrate = undefined;
      this._profile = undefined;
      this._referenceFrames = undefined;
      this._slices = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptiveBFrameEnabled = value.adaptiveBFrameEnabled;
      this._bFrames = value.bFrames;
      this._bitrate = value.bitrate;
      this._bufferWindow = value.bufferWindow;
      this._crf = value.crf;
      this._frameRate = value.frameRate;
      this._height = value.height;
      this._label = value.label;
      this._level = value.level;
      this._maxBitrate = value.maxBitrate;
      this._profile = value.profile;
      this._referenceFrames = value.referenceFrames;
      this._slices = value.slices;
      this._width = value.width;
    }
  }

  // adaptive_b_frame_enabled - computed: false, optional: true, required: false
  private _adaptiveBFrameEnabled?: boolean | cdktf.IResolvable; 
  public get adaptiveBFrameEnabled() {
    return this.getBooleanAttribute('adaptive_b_frame_enabled');
  }
  public set adaptiveBFrameEnabled(value: boolean | cdktf.IResolvable) {
    this._adaptiveBFrameEnabled = value;
  }
  public resetAdaptiveBFrameEnabled() {
    this._adaptiveBFrameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveBFrameEnabledInput() {
    return this._adaptiveBFrameEnabled;
  }

  // b_frames - computed: true, optional: true, required: false
  private _bFrames?: number; 
  public get bFrames() {
    return this.getNumberAttribute('b_frames');
  }
  public set bFrames(value: number) {
    this._bFrames = value;
  }
  public resetBFrames() {
    this._bFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bFramesInput() {
    return this._bFrames;
  }

  // bitrate - computed: false, optional: false, required: true
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // buffer_window - computed: false, optional: true, required: false
  private _bufferWindow?: string; 
  public get bufferWindow() {
    return this.getStringAttribute('buffer_window');
  }
  public set bufferWindow(value: string) {
    this._bufferWindow = value;
  }
  public resetBufferWindow() {
    this._bufferWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferWindowInput() {
    return this._bufferWindow;
  }

  // crf - computed: false, optional: true, required: false
  private _crf?: number; 
  public get crf() {
    return this.getNumberAttribute('crf');
  }
  public set crf(value: number) {
    this._crf = value;
  }
  public resetCrf() {
    this._crf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crfInput() {
    return this._crf;
  }

  // frame_rate - computed: false, optional: true, required: false
  private _frameRate?: string; 
  public get frameRate() {
    return this.getStringAttribute('frame_rate');
  }
  public set frameRate(value: string) {
    this._frameRate = value;
  }
  public resetFrameRate() {
    this._frameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameRateInput() {
    return this._frameRate;
  }

  // height - computed: true, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // max_bitrate - computed: true, optional: true, required: false
  private _maxBitrate?: number; 
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // reference_frames - computed: true, optional: true, required: false
  private _referenceFrames?: number; 
  public get referenceFrames() {
    return this.getNumberAttribute('reference_frames');
  }
  public set referenceFrames(value: number) {
    this._referenceFrames = value;
  }
  public resetReferenceFrames() {
    this._referenceFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceFramesInput() {
    return this._referenceFrames;
  }

  // slices - computed: true, optional: true, required: false
  private _slices?: number; 
  public get slices() {
    return this.getNumberAttribute('slices');
  }
  public set slices(value: number) {
    this._slices = value;
  }
  public resetSlices() {
    this._slices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slicesInput() {
    return this._slices;
  }

  // width - computed: true, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class MediaTransformOutputCustomPresetCodecH265VideoLayerList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetCodecH265VideoLayer[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetCodecH265VideoLayerOutputReference {
    return new MediaTransformOutputCustomPresetCodecH265VideoLayerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetCodecH265Video {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#complexity MediaTransform#complexity}
  */
  readonly complexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#key_frame_interval MediaTransform#key_frame_interval}
  */
  readonly keyFrameInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#scene_change_detection_enabled MediaTransform#scene_change_detection_enabled}
  */
  readonly sceneChangeDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#stretch_mode MediaTransform#stretch_mode}
  */
  readonly stretchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sync_mode MediaTransform#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * layer block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#layer MediaTransform#layer}
  */
  readonly layer?: MediaTransformOutputCustomPresetCodecH265VideoLayer[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetCodecH265VideoToTerraform(struct?: MediaTransformOutputCustomPresetCodecH265VideoOutputReference | MediaTransformOutputCustomPresetCodecH265Video): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: cdktf.stringToTerraform(struct!.complexity),
    key_frame_interval: cdktf.stringToTerraform(struct!.keyFrameInterval),
    label: cdktf.stringToTerraform(struct!.label),
    scene_change_detection_enabled: cdktf.booleanToTerraform(struct!.sceneChangeDetectionEnabled),
    stretch_mode: cdktf.stringToTerraform(struct!.stretchMode),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    layer: cdktf.listMapper(mediaTransformOutputCustomPresetCodecH265VideoLayerToTerraform, true)(struct!.layer),
  }
}

export class MediaTransformOutputCustomPresetCodecH265VideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecH265Video | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._keyFrameInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameInterval = this._keyFrameInterval;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._sceneChangeDetectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sceneChangeDetectionEnabled = this._sceneChangeDetectionEnabled;
    }
    if (this._stretchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchMode = this._stretchMode;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._layer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecH265Video | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complexity = undefined;
      this._keyFrameInterval = undefined;
      this._label = undefined;
      this._sceneChangeDetectionEnabled = undefined;
      this._stretchMode = undefined;
      this._syncMode = undefined;
      this._layer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complexity = value.complexity;
      this._keyFrameInterval = value.keyFrameInterval;
      this._label = value.label;
      this._sceneChangeDetectionEnabled = value.sceneChangeDetectionEnabled;
      this._stretchMode = value.stretchMode;
      this._syncMode = value.syncMode;
      this._layer.internalValue = value.layer;
    }
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // key_frame_interval - computed: false, optional: true, required: false
  private _keyFrameInterval?: string; 
  public get keyFrameInterval() {
    return this.getStringAttribute('key_frame_interval');
  }
  public set keyFrameInterval(value: string) {
    this._keyFrameInterval = value;
  }
  public resetKeyFrameInterval() {
    this._keyFrameInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalInput() {
    return this._keyFrameInterval;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // scene_change_detection_enabled - computed: false, optional: true, required: false
  private _sceneChangeDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get sceneChangeDetectionEnabled() {
    return this.getBooleanAttribute('scene_change_detection_enabled');
  }
  public set sceneChangeDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._sceneChangeDetectionEnabled = value;
  }
  public resetSceneChangeDetectionEnabled() {
    this._sceneChangeDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneChangeDetectionEnabledInput() {
    return this._sceneChangeDetectionEnabled;
  }

  // stretch_mode - computed: false, optional: true, required: false
  private _stretchMode?: string; 
  public get stretchMode() {
    return this.getStringAttribute('stretch_mode');
  }
  public set stretchMode(value: string) {
    this._stretchMode = value;
  }
  public resetStretchMode() {
    this._stretchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchModeInput() {
    return this._stretchMode;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // layer - computed: false, optional: true, required: false
  private _layer = new MediaTransformOutputCustomPresetCodecH265VideoLayerList(this, "layer", false);
  public get layer() {
    return this._layer;
  }
  public putLayer(value: MediaTransformOutputCustomPresetCodecH265VideoLayer[] | cdktf.IResolvable) {
    this._layer.internalValue = value;
  }
  public resetLayer() {
    this._layer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetCodecJpgImageLayer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#quality MediaTransform#quality}
  */
  readonly quality?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetCodecJpgImageLayerToTerraform(struct?: MediaTransformOutputCustomPresetCodecJpgImageLayer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    label: cdktf.stringToTerraform(struct!.label),
    quality: cdktf.numberToTerraform(struct!.quality),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetCodecJpgImageLayerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetCodecJpgImageLayer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.quality = this._quality;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecJpgImageLayer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._label = undefined;
      this._quality = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._label = value.label;
      this._quality = value.quality;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // quality - computed: false, optional: true, required: false
  private _quality?: number; 
  public get quality() {
    return this.getNumberAttribute('quality');
  }
  public set quality(value: number) {
    this._quality = value;
  }
  public resetQuality() {
    this._quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class MediaTransformOutputCustomPresetCodecJpgImageLayerList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetCodecJpgImageLayer[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetCodecJpgImageLayerOutputReference {
    return new MediaTransformOutputCustomPresetCodecJpgImageLayerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetCodecJpgImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#key_frame_interval MediaTransform#key_frame_interval}
  */
  readonly keyFrameInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#range MediaTransform#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sprite_column MediaTransform#sprite_column}
  */
  readonly spriteColumn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#start MediaTransform#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#step MediaTransform#step}
  */
  readonly step?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#stretch_mode MediaTransform#stretch_mode}
  */
  readonly stretchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sync_mode MediaTransform#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * layer block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#layer MediaTransform#layer}
  */
  readonly layer?: MediaTransformOutputCustomPresetCodecJpgImageLayer[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetCodecJpgImageToTerraform(struct?: MediaTransformOutputCustomPresetCodecJpgImageOutputReference | MediaTransformOutputCustomPresetCodecJpgImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_frame_interval: cdktf.stringToTerraform(struct!.keyFrameInterval),
    label: cdktf.stringToTerraform(struct!.label),
    range: cdktf.stringToTerraform(struct!.range),
    sprite_column: cdktf.numberToTerraform(struct!.spriteColumn),
    start: cdktf.stringToTerraform(struct!.start),
    step: cdktf.stringToTerraform(struct!.step),
    stretch_mode: cdktf.stringToTerraform(struct!.stretchMode),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    layer: cdktf.listMapper(mediaTransformOutputCustomPresetCodecJpgImageLayerToTerraform, true)(struct!.layer),
  }
}

export class MediaTransformOutputCustomPresetCodecJpgImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecJpgImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyFrameInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameInterval = this._keyFrameInterval;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._spriteColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.spriteColumn = this._spriteColumn;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    if (this._stretchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchMode = this._stretchMode;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._layer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecJpgImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyFrameInterval = undefined;
      this._label = undefined;
      this._range = undefined;
      this._spriteColumn = undefined;
      this._start = undefined;
      this._step = undefined;
      this._stretchMode = undefined;
      this._syncMode = undefined;
      this._layer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyFrameInterval = value.keyFrameInterval;
      this._label = value.label;
      this._range = value.range;
      this._spriteColumn = value.spriteColumn;
      this._start = value.start;
      this._step = value.step;
      this._stretchMode = value.stretchMode;
      this._syncMode = value.syncMode;
      this._layer.internalValue = value.layer;
    }
  }

  // key_frame_interval - computed: false, optional: true, required: false
  private _keyFrameInterval?: string; 
  public get keyFrameInterval() {
    return this.getStringAttribute('key_frame_interval');
  }
  public set keyFrameInterval(value: string) {
    this._keyFrameInterval = value;
  }
  public resetKeyFrameInterval() {
    this._keyFrameInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalInput() {
    return this._keyFrameInterval;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // sprite_column - computed: false, optional: true, required: false
  private _spriteColumn?: number; 
  public get spriteColumn() {
    return this.getNumberAttribute('sprite_column');
  }
  public set spriteColumn(value: number) {
    this._spriteColumn = value;
  }
  public resetSpriteColumn() {
    this._spriteColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spriteColumnInput() {
    return this._spriteColumn;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // step - computed: false, optional: true, required: false
  private _step?: string; 
  public get step() {
    return this.getStringAttribute('step');
  }
  public set step(value: string) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }

  // stretch_mode - computed: false, optional: true, required: false
  private _stretchMode?: string; 
  public get stretchMode() {
    return this.getStringAttribute('stretch_mode');
  }
  public set stretchMode(value: string) {
    this._stretchMode = value;
  }
  public resetStretchMode() {
    this._stretchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchModeInput() {
    return this._stretchMode;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // layer - computed: false, optional: true, required: false
  private _layer = new MediaTransformOutputCustomPresetCodecJpgImageLayerList(this, "layer", false);
  public get layer() {
    return this._layer;
  }
  public putLayer(value: MediaTransformOutputCustomPresetCodecJpgImageLayer[] | cdktf.IResolvable) {
    this._layer.internalValue = value;
  }
  public resetLayer() {
    this._layer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetCodecPngImageLayer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetCodecPngImageLayerToTerraform(struct?: MediaTransformOutputCustomPresetCodecPngImageLayer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    label: cdktf.stringToTerraform(struct!.label),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetCodecPngImageLayerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetCodecPngImageLayer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecPngImageLayer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._label = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._label = value.label;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class MediaTransformOutputCustomPresetCodecPngImageLayerList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetCodecPngImageLayer[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetCodecPngImageLayerOutputReference {
    return new MediaTransformOutputCustomPresetCodecPngImageLayerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetCodecPngImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#key_frame_interval MediaTransform#key_frame_interval}
  */
  readonly keyFrameInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#label MediaTransform#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#range MediaTransform#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#start MediaTransform#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#step MediaTransform#step}
  */
  readonly step?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#stretch_mode MediaTransform#stretch_mode}
  */
  readonly stretchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#sync_mode MediaTransform#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * layer block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#layer MediaTransform#layer}
  */
  readonly layer?: MediaTransformOutputCustomPresetCodecPngImageLayer[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetCodecPngImageToTerraform(struct?: MediaTransformOutputCustomPresetCodecPngImageOutputReference | MediaTransformOutputCustomPresetCodecPngImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_frame_interval: cdktf.stringToTerraform(struct!.keyFrameInterval),
    label: cdktf.stringToTerraform(struct!.label),
    range: cdktf.stringToTerraform(struct!.range),
    start: cdktf.stringToTerraform(struct!.start),
    step: cdktf.stringToTerraform(struct!.step),
    stretch_mode: cdktf.stringToTerraform(struct!.stretchMode),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    layer: cdktf.listMapper(mediaTransformOutputCustomPresetCodecPngImageLayerToTerraform, true)(struct!.layer),
  }
}

export class MediaTransformOutputCustomPresetCodecPngImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetCodecPngImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyFrameInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameInterval = this._keyFrameInterval;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    if (this._stretchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchMode = this._stretchMode;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._layer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodecPngImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyFrameInterval = undefined;
      this._label = undefined;
      this._range = undefined;
      this._start = undefined;
      this._step = undefined;
      this._stretchMode = undefined;
      this._syncMode = undefined;
      this._layer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyFrameInterval = value.keyFrameInterval;
      this._label = value.label;
      this._range = value.range;
      this._start = value.start;
      this._step = value.step;
      this._stretchMode = value.stretchMode;
      this._syncMode = value.syncMode;
      this._layer.internalValue = value.layer;
    }
  }

  // key_frame_interval - computed: false, optional: true, required: false
  private _keyFrameInterval?: string; 
  public get keyFrameInterval() {
    return this.getStringAttribute('key_frame_interval');
  }
  public set keyFrameInterval(value: string) {
    this._keyFrameInterval = value;
  }
  public resetKeyFrameInterval() {
    this._keyFrameInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalInput() {
    return this._keyFrameInterval;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // step - computed: false, optional: true, required: false
  private _step?: string; 
  public get step() {
    return this.getStringAttribute('step');
  }
  public set step(value: string) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }

  // stretch_mode - computed: false, optional: true, required: false
  private _stretchMode?: string; 
  public get stretchMode() {
    return this.getStringAttribute('stretch_mode');
  }
  public set stretchMode(value: string) {
    this._stretchMode = value;
  }
  public resetStretchMode() {
    this._stretchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchModeInput() {
    return this._stretchMode;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // layer - computed: false, optional: true, required: false
  private _layer = new MediaTransformOutputCustomPresetCodecPngImageLayerList(this, "layer", false);
  public get layer() {
    return this._layer;
  }
  public putLayer(value: MediaTransformOutputCustomPresetCodecPngImageLayer[] | cdktf.IResolvable) {
    this._layer.internalValue = value;
  }
  public resetLayer() {
    this._layer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetCodec {
  /**
  * aac_audio block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#aac_audio MediaTransform#aac_audio}
  */
  readonly aacAudio?: MediaTransformOutputCustomPresetCodecAacAudio;
  /**
  * copy_audio block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#copy_audio MediaTransform#copy_audio}
  */
  readonly copyAudio?: MediaTransformOutputCustomPresetCodecCopyAudio;
  /**
  * copy_video block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#copy_video MediaTransform#copy_video}
  */
  readonly copyVideo?: MediaTransformOutputCustomPresetCodecCopyVideo;
  /**
  * dd_audio block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#dd_audio MediaTransform#dd_audio}
  */
  readonly ddAudio?: MediaTransformOutputCustomPresetCodecDdAudio;
  /**
  * h264_video block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#h264_video MediaTransform#h264_video}
  */
  readonly h264Video?: MediaTransformOutputCustomPresetCodecH264Video;
  /**
  * h265_video block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#h265_video MediaTransform#h265_video}
  */
  readonly h265Video?: MediaTransformOutputCustomPresetCodecH265Video;
  /**
  * jpg_image block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#jpg_image MediaTransform#jpg_image}
  */
  readonly jpgImage?: MediaTransformOutputCustomPresetCodecJpgImage;
  /**
  * png_image block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#png_image MediaTransform#png_image}
  */
  readonly pngImage?: MediaTransformOutputCustomPresetCodecPngImage;
}

export function mediaTransformOutputCustomPresetCodecToTerraform(struct?: MediaTransformOutputCustomPresetCodec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aac_audio: mediaTransformOutputCustomPresetCodecAacAudioToTerraform(struct!.aacAudio),
    copy_audio: mediaTransformOutputCustomPresetCodecCopyAudioToTerraform(struct!.copyAudio),
    copy_video: mediaTransformOutputCustomPresetCodecCopyVideoToTerraform(struct!.copyVideo),
    dd_audio: mediaTransformOutputCustomPresetCodecDdAudioToTerraform(struct!.ddAudio),
    h264_video: mediaTransformOutputCustomPresetCodecH264VideoToTerraform(struct!.h264Video),
    h265_video: mediaTransformOutputCustomPresetCodecH265VideoToTerraform(struct!.h265Video),
    jpg_image: mediaTransformOutputCustomPresetCodecJpgImageToTerraform(struct!.jpgImage),
    png_image: mediaTransformOutputCustomPresetCodecPngImageToTerraform(struct!.pngImage),
  }
}

export class MediaTransformOutputCustomPresetCodecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetCodec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aacAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aacAudio = this._aacAudio?.internalValue;
    }
    if (this._copyAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyAudio = this._copyAudio?.internalValue;
    }
    if (this._copyVideo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyVideo = this._copyVideo?.internalValue;
    }
    if (this._ddAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddAudio = this._ddAudio?.internalValue;
    }
    if (this._h264Video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.h264Video = this._h264Video?.internalValue;
    }
    if (this._h265Video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.h265Video = this._h265Video?.internalValue;
    }
    if (this._jpgImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpgImage = this._jpgImage?.internalValue;
    }
    if (this._pngImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pngImage = this._pngImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetCodec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aacAudio.internalValue = undefined;
      this._copyAudio.internalValue = undefined;
      this._copyVideo.internalValue = undefined;
      this._ddAudio.internalValue = undefined;
      this._h264Video.internalValue = undefined;
      this._h265Video.internalValue = undefined;
      this._jpgImage.internalValue = undefined;
      this._pngImage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aacAudio.internalValue = value.aacAudio;
      this._copyAudio.internalValue = value.copyAudio;
      this._copyVideo.internalValue = value.copyVideo;
      this._ddAudio.internalValue = value.ddAudio;
      this._h264Video.internalValue = value.h264Video;
      this._h265Video.internalValue = value.h265Video;
      this._jpgImage.internalValue = value.jpgImage;
      this._pngImage.internalValue = value.pngImage;
    }
  }

  // aac_audio - computed: false, optional: true, required: false
  private _aacAudio = new MediaTransformOutputCustomPresetCodecAacAudioOutputReference(this, "aac_audio");
  public get aacAudio() {
    return this._aacAudio;
  }
  public putAacAudio(value: MediaTransformOutputCustomPresetCodecAacAudio) {
    this._aacAudio.internalValue = value;
  }
  public resetAacAudio() {
    this._aacAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aacAudioInput() {
    return this._aacAudio.internalValue;
  }

  // copy_audio - computed: false, optional: true, required: false
  private _copyAudio = new MediaTransformOutputCustomPresetCodecCopyAudioOutputReference(this, "copy_audio");
  public get copyAudio() {
    return this._copyAudio;
  }
  public putCopyAudio(value: MediaTransformOutputCustomPresetCodecCopyAudio) {
    this._copyAudio.internalValue = value;
  }
  public resetCopyAudio() {
    this._copyAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyAudioInput() {
    return this._copyAudio.internalValue;
  }

  // copy_video - computed: false, optional: true, required: false
  private _copyVideo = new MediaTransformOutputCustomPresetCodecCopyVideoOutputReference(this, "copy_video");
  public get copyVideo() {
    return this._copyVideo;
  }
  public putCopyVideo(value: MediaTransformOutputCustomPresetCodecCopyVideo) {
    this._copyVideo.internalValue = value;
  }
  public resetCopyVideo() {
    this._copyVideo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyVideoInput() {
    return this._copyVideo.internalValue;
  }

  // dd_audio - computed: false, optional: true, required: false
  private _ddAudio = new MediaTransformOutputCustomPresetCodecDdAudioOutputReference(this, "dd_audio");
  public get ddAudio() {
    return this._ddAudio;
  }
  public putDdAudio(value: MediaTransformOutputCustomPresetCodecDdAudio) {
    this._ddAudio.internalValue = value;
  }
  public resetDdAudio() {
    this._ddAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddAudioInput() {
    return this._ddAudio.internalValue;
  }

  // h264_video - computed: false, optional: true, required: false
  private _h264Video = new MediaTransformOutputCustomPresetCodecH264VideoOutputReference(this, "h264_video");
  public get h264Video() {
    return this._h264Video;
  }
  public putH264Video(value: MediaTransformOutputCustomPresetCodecH264Video) {
    this._h264Video.internalValue = value;
  }
  public resetH264Video() {
    this._h264Video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h264VideoInput() {
    return this._h264Video.internalValue;
  }

  // h265_video - computed: false, optional: true, required: false
  private _h265Video = new MediaTransformOutputCustomPresetCodecH265VideoOutputReference(this, "h265_video");
  public get h265Video() {
    return this._h265Video;
  }
  public putH265Video(value: MediaTransformOutputCustomPresetCodecH265Video) {
    this._h265Video.internalValue = value;
  }
  public resetH265Video() {
    this._h265Video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h265VideoInput() {
    return this._h265Video.internalValue;
  }

  // jpg_image - computed: false, optional: true, required: false
  private _jpgImage = new MediaTransformOutputCustomPresetCodecJpgImageOutputReference(this, "jpg_image");
  public get jpgImage() {
    return this._jpgImage;
  }
  public putJpgImage(value: MediaTransformOutputCustomPresetCodecJpgImage) {
    this._jpgImage.internalValue = value;
  }
  public resetJpgImage() {
    this._jpgImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpgImageInput() {
    return this._jpgImage.internalValue;
  }

  // png_image - computed: false, optional: true, required: false
  private _pngImage = new MediaTransformOutputCustomPresetCodecPngImageOutputReference(this, "png_image");
  public get pngImage() {
    return this._pngImage;
  }
  public putPngImage(value: MediaTransformOutputCustomPresetCodecPngImage) {
    this._pngImage.internalValue = value;
  }
  public resetPngImage() {
    this._pngImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngImageInput() {
    return this._pngImage.internalValue;
  }
}

export class MediaTransformOutputCustomPresetCodecList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetCodec[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetCodecOutputReference {
    return new MediaTransformOutputCustomPresetCodecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetFilterCropRectangle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#left MediaTransform#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#top MediaTransform#top}
  */
  readonly top?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetFilterCropRectangleToTerraform(struct?: MediaTransformOutputCustomPresetFilterCropRectangleOutputReference | MediaTransformOutputCustomPresetFilterCropRectangle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    left: cdktf.stringToTerraform(struct!.left),
    top: cdktf.stringToTerraform(struct!.top),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetFilterCropRectangleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterCropRectangle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterCropRectangle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._left = undefined;
      this._top = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._left = value.left;
      this._top = value.top;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface MediaTransformOutputCustomPresetFilterDeinterlace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#mode MediaTransform#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#parity MediaTransform#parity}
  */
  readonly parity?: string;
}

export function mediaTransformOutputCustomPresetFilterDeinterlaceToTerraform(struct?: MediaTransformOutputCustomPresetFilterDeinterlaceOutputReference | MediaTransformOutputCustomPresetFilterDeinterlace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    parity: cdktf.stringToTerraform(struct!.parity),
  }
}

export class MediaTransformOutputCustomPresetFilterDeinterlaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterDeinterlace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._parity !== undefined) {
      hasAnyValues = true;
      internalValueResult.parity = this._parity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterDeinterlace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._parity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._parity = value.parity;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // parity - computed: false, optional: true, required: false
  private _parity?: string; 
  public get parity() {
    return this.getStringAttribute('parity');
  }
  public set parity(value: string) {
    this._parity = value;
  }
  public resetParity() {
    this._parity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityInput() {
    return this._parity;
  }
}
export interface MediaTransformOutputCustomPresetFilterFadeIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#duration MediaTransform#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_color MediaTransform#fade_color}
  */
  readonly fadeColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#start MediaTransform#start}
  */
  readonly start?: string;
}

export function mediaTransformOutputCustomPresetFilterFadeInToTerraform(struct?: MediaTransformOutputCustomPresetFilterFadeInOutputReference | MediaTransformOutputCustomPresetFilterFadeIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    fade_color: cdktf.stringToTerraform(struct!.fadeColor),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export class MediaTransformOutputCustomPresetFilterFadeInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterFadeIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fadeColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeColor = this._fadeColor;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterFadeIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._fadeColor = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._fadeColor = value.fadeColor;
      this._start = value.start;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // fade_color - computed: false, optional: false, required: true
  private _fadeColor?: string; 
  public get fadeColor() {
    return this.getStringAttribute('fade_color');
  }
  public set fadeColor(value: string) {
    this._fadeColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeColorInput() {
    return this._fadeColor;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface MediaTransformOutputCustomPresetFilterFadeOut {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#duration MediaTransform#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_color MediaTransform#fade_color}
  */
  readonly fadeColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#start MediaTransform#start}
  */
  readonly start?: string;
}

export function mediaTransformOutputCustomPresetFilterFadeOutToTerraform(struct?: MediaTransformOutputCustomPresetFilterFadeOutOutputReference | MediaTransformOutputCustomPresetFilterFadeOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    fade_color: cdktf.stringToTerraform(struct!.fadeColor),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export class MediaTransformOutputCustomPresetFilterFadeOutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterFadeOut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fadeColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeColor = this._fadeColor;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterFadeOut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._fadeColor = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._fadeColor = value.fadeColor;
      this._start = value.start;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // fade_color - computed: false, optional: false, required: true
  private _fadeColor?: string; 
  public get fadeColor() {
    return this.getStringAttribute('fade_color');
  }
  public set fadeColor(value: string) {
    this._fadeColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeColorInput() {
    return this._fadeColor;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface MediaTransformOutputCustomPresetFilterOverlayAudio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_gain_level MediaTransform#audio_gain_level}
  */
  readonly audioGainLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#end MediaTransform#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_in_duration MediaTransform#fade_in_duration}
  */
  readonly fadeInDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_out_duration MediaTransform#fade_out_duration}
  */
  readonly fadeOutDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#input_label MediaTransform#input_label}
  */
  readonly inputLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#start MediaTransform#start}
  */
  readonly start?: string;
}

export function mediaTransformOutputCustomPresetFilterOverlayAudioToTerraform(struct?: MediaTransformOutputCustomPresetFilterOverlayAudioOutputReference | MediaTransformOutputCustomPresetFilterOverlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_gain_level: cdktf.numberToTerraform(struct!.audioGainLevel),
    end: cdktf.stringToTerraform(struct!.end),
    fade_in_duration: cdktf.stringToTerraform(struct!.fadeInDuration),
    fade_out_duration: cdktf.stringToTerraform(struct!.fadeOutDuration),
    input_label: cdktf.stringToTerraform(struct!.inputLabel),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export class MediaTransformOutputCustomPresetFilterOverlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterOverlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioGainLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioGainLevel = this._audioGainLevel;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._fadeInDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeInDuration = this._fadeInDuration;
    }
    if (this._fadeOutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeOutDuration = this._fadeOutDuration;
    }
    if (this._inputLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLabel = this._inputLabel;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterOverlayAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioGainLevel = undefined;
      this._end = undefined;
      this._fadeInDuration = undefined;
      this._fadeOutDuration = undefined;
      this._inputLabel = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioGainLevel = value.audioGainLevel;
      this._end = value.end;
      this._fadeInDuration = value.fadeInDuration;
      this._fadeOutDuration = value.fadeOutDuration;
      this._inputLabel = value.inputLabel;
      this._start = value.start;
    }
  }

  // audio_gain_level - computed: false, optional: true, required: false
  private _audioGainLevel?: number; 
  public get audioGainLevel() {
    return this.getNumberAttribute('audio_gain_level');
  }
  public set audioGainLevel(value: number) {
    this._audioGainLevel = value;
  }
  public resetAudioGainLevel() {
    this._audioGainLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioGainLevelInput() {
    return this._audioGainLevel;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // fade_in_duration - computed: false, optional: true, required: false
  private _fadeInDuration?: string; 
  public get fadeInDuration() {
    return this.getStringAttribute('fade_in_duration');
  }
  public set fadeInDuration(value: string) {
    this._fadeInDuration = value;
  }
  public resetFadeInDuration() {
    this._fadeInDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeInDurationInput() {
    return this._fadeInDuration;
  }

  // fade_out_duration - computed: false, optional: true, required: false
  private _fadeOutDuration?: string; 
  public get fadeOutDuration() {
    return this.getStringAttribute('fade_out_duration');
  }
  public set fadeOutDuration(value: string) {
    this._fadeOutDuration = value;
  }
  public resetFadeOutDuration() {
    this._fadeOutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeOutDurationInput() {
    return this._fadeOutDuration;
  }

  // input_label - computed: false, optional: false, required: true
  private _inputLabel?: string; 
  public get inputLabel() {
    return this.getStringAttribute('input_label');
  }
  public set inputLabel(value: string) {
    this._inputLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLabelInput() {
    return this._inputLabel;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#left MediaTransform#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#top MediaTransform#top}
  */
  readonly top?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetFilterOverlayVideoCropRectangleToTerraform(struct?: MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangleOutputReference | MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    left: cdktf.stringToTerraform(struct!.left),
    top: cdktf.stringToTerraform(struct!.top),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._left = undefined;
      this._top = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._left = value.left;
      this._top = value.top;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface MediaTransformOutputCustomPresetFilterOverlayVideoPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#height MediaTransform#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#left MediaTransform#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#top MediaTransform#top}
  */
  readonly top?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#width MediaTransform#width}
  */
  readonly width?: string;
}

export function mediaTransformOutputCustomPresetFilterOverlayVideoPositionToTerraform(struct?: MediaTransformOutputCustomPresetFilterOverlayVideoPositionOutputReference | MediaTransformOutputCustomPresetFilterOverlayVideoPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    left: cdktf.stringToTerraform(struct!.left),
    top: cdktf.stringToTerraform(struct!.top),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class MediaTransformOutputCustomPresetFilterOverlayVideoPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterOverlayVideoPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterOverlayVideoPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._left = undefined;
      this._top = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._left = value.left;
      this._top = value.top;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface MediaTransformOutputCustomPresetFilterOverlayVideo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_gain_level MediaTransform#audio_gain_level}
  */
  readonly audioGainLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#end MediaTransform#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_in_duration MediaTransform#fade_in_duration}
  */
  readonly fadeInDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_out_duration MediaTransform#fade_out_duration}
  */
  readonly fadeOutDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#input_label MediaTransform#input_label}
  */
  readonly inputLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#opacity MediaTransform#opacity}
  */
  readonly opacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#start MediaTransform#start}
  */
  readonly start?: string;
  /**
  * crop_rectangle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#crop_rectangle MediaTransform#crop_rectangle}
  */
  readonly cropRectangle?: MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangle;
  /**
  * position block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#position MediaTransform#position}
  */
  readonly position?: MediaTransformOutputCustomPresetFilterOverlayVideoPosition;
}

export function mediaTransformOutputCustomPresetFilterOverlayVideoToTerraform(struct?: MediaTransformOutputCustomPresetFilterOverlayVideoOutputReference | MediaTransformOutputCustomPresetFilterOverlayVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_gain_level: cdktf.numberToTerraform(struct!.audioGainLevel),
    end: cdktf.stringToTerraform(struct!.end),
    fade_in_duration: cdktf.stringToTerraform(struct!.fadeInDuration),
    fade_out_duration: cdktf.stringToTerraform(struct!.fadeOutDuration),
    input_label: cdktf.stringToTerraform(struct!.inputLabel),
    opacity: cdktf.numberToTerraform(struct!.opacity),
    start: cdktf.stringToTerraform(struct!.start),
    crop_rectangle: mediaTransformOutputCustomPresetFilterOverlayVideoCropRectangleToTerraform(struct!.cropRectangle),
    position: mediaTransformOutputCustomPresetFilterOverlayVideoPositionToTerraform(struct!.position),
  }
}

export class MediaTransformOutputCustomPresetFilterOverlayVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilterOverlayVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioGainLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioGainLevel = this._audioGainLevel;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._fadeInDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeInDuration = this._fadeInDuration;
    }
    if (this._fadeOutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeOutDuration = this._fadeOutDuration;
    }
    if (this._inputLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLabel = this._inputLabel;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._cropRectangle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cropRectangle = this._cropRectangle?.internalValue;
    }
    if (this._position?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterOverlayVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioGainLevel = undefined;
      this._end = undefined;
      this._fadeInDuration = undefined;
      this._fadeOutDuration = undefined;
      this._inputLabel = undefined;
      this._opacity = undefined;
      this._start = undefined;
      this._cropRectangle.internalValue = undefined;
      this._position.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioGainLevel = value.audioGainLevel;
      this._end = value.end;
      this._fadeInDuration = value.fadeInDuration;
      this._fadeOutDuration = value.fadeOutDuration;
      this._inputLabel = value.inputLabel;
      this._opacity = value.opacity;
      this._start = value.start;
      this._cropRectangle.internalValue = value.cropRectangle;
      this._position.internalValue = value.position;
    }
  }

  // audio_gain_level - computed: false, optional: true, required: false
  private _audioGainLevel?: number; 
  public get audioGainLevel() {
    return this.getNumberAttribute('audio_gain_level');
  }
  public set audioGainLevel(value: number) {
    this._audioGainLevel = value;
  }
  public resetAudioGainLevel() {
    this._audioGainLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioGainLevelInput() {
    return this._audioGainLevel;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // fade_in_duration - computed: false, optional: true, required: false
  private _fadeInDuration?: string; 
  public get fadeInDuration() {
    return this.getStringAttribute('fade_in_duration');
  }
  public set fadeInDuration(value: string) {
    this._fadeInDuration = value;
  }
  public resetFadeInDuration() {
    this._fadeInDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeInDurationInput() {
    return this._fadeInDuration;
  }

  // fade_out_duration - computed: false, optional: true, required: false
  private _fadeOutDuration?: string; 
  public get fadeOutDuration() {
    return this.getStringAttribute('fade_out_duration');
  }
  public set fadeOutDuration(value: string) {
    this._fadeOutDuration = value;
  }
  public resetFadeOutDuration() {
    this._fadeOutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeOutDurationInput() {
    return this._fadeOutDuration;
  }

  // input_label - computed: false, optional: false, required: true
  private _inputLabel?: string; 
  public get inputLabel() {
    return this.getStringAttribute('input_label');
  }
  public set inputLabel(value: string) {
    this._inputLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLabelInput() {
    return this._inputLabel;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // crop_rectangle - computed: false, optional: true, required: false
  private _cropRectangle = new MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangleOutputReference(this, "crop_rectangle");
  public get cropRectangle() {
    return this._cropRectangle;
  }
  public putCropRectangle(value: MediaTransformOutputCustomPresetFilterOverlayVideoCropRectangle) {
    this._cropRectangle.internalValue = value;
  }
  public resetCropRectangle() {
    this._cropRectangle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cropRectangleInput() {
    return this._cropRectangle.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new MediaTransformOutputCustomPresetFilterOverlayVideoPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: MediaTransformOutputCustomPresetFilterOverlayVideoPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetFilterOverlay {
  /**
  * audio block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio MediaTransform#audio}
  */
  readonly audio?: MediaTransformOutputCustomPresetFilterOverlayAudio;
  /**
  * video block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#video MediaTransform#video}
  */
  readonly video?: MediaTransformOutputCustomPresetFilterOverlayVideo;
}

export function mediaTransformOutputCustomPresetFilterOverlayToTerraform(struct?: MediaTransformOutputCustomPresetFilterOverlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio: mediaTransformOutputCustomPresetFilterOverlayAudioToTerraform(struct!.audio),
    video: mediaTransformOutputCustomPresetFilterOverlayVideoToTerraform(struct!.video),
  }
}

export class MediaTransformOutputCustomPresetFilterOverlayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetFilterOverlay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilterOverlay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audio.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audio.internalValue = value.audio;
      this._video.internalValue = value.video;
    }
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new MediaTransformOutputCustomPresetFilterOverlayAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: MediaTransformOutputCustomPresetFilterOverlayAudio) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new MediaTransformOutputCustomPresetFilterOverlayVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: MediaTransformOutputCustomPresetFilterOverlayVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class MediaTransformOutputCustomPresetFilterOverlayList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetFilterOverlay[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetFilterOverlayOutputReference {
    return new MediaTransformOutputCustomPresetFilterOverlayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#rotation MediaTransform#rotation}
  */
  readonly rotation?: string;
  /**
  * crop_rectangle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#crop_rectangle MediaTransform#crop_rectangle}
  */
  readonly cropRectangle?: MediaTransformOutputCustomPresetFilterCropRectangle;
  /**
  * deinterlace block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#deinterlace MediaTransform#deinterlace}
  */
  readonly deinterlace?: MediaTransformOutputCustomPresetFilterDeinterlace;
  /**
  * fade_in block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_in MediaTransform#fade_in}
  */
  readonly fadeIn?: MediaTransformOutputCustomPresetFilterFadeIn;
  /**
  * fade_out block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#fade_out MediaTransform#fade_out}
  */
  readonly fadeOut?: MediaTransformOutputCustomPresetFilterFadeOut;
  /**
  * overlay block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#overlay MediaTransform#overlay}
  */
  readonly overlay?: MediaTransformOutputCustomPresetFilterOverlay[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetFilterToTerraform(struct?: MediaTransformOutputCustomPresetFilterOutputReference | MediaTransformOutputCustomPresetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rotation: cdktf.stringToTerraform(struct!.rotation),
    crop_rectangle: mediaTransformOutputCustomPresetFilterCropRectangleToTerraform(struct!.cropRectangle),
    deinterlace: mediaTransformOutputCustomPresetFilterDeinterlaceToTerraform(struct!.deinterlace),
    fade_in: mediaTransformOutputCustomPresetFilterFadeInToTerraform(struct!.fadeIn),
    fade_out: mediaTransformOutputCustomPresetFilterFadeOutToTerraform(struct!.fadeOut),
    overlay: cdktf.listMapper(mediaTransformOutputCustomPresetFilterOverlayToTerraform, true)(struct!.overlay),
  }
}

export class MediaTransformOutputCustomPresetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotation = this._rotation;
    }
    if (this._cropRectangle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cropRectangle = this._cropRectangle?.internalValue;
    }
    if (this._deinterlace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deinterlace = this._deinterlace?.internalValue;
    }
    if (this._fadeIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeIn = this._fadeIn?.internalValue;
    }
    if (this._fadeOut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeOut = this._fadeOut?.internalValue;
    }
    if (this._overlay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlay = this._overlay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rotation = undefined;
      this._cropRectangle.internalValue = undefined;
      this._deinterlace.internalValue = undefined;
      this._fadeIn.internalValue = undefined;
      this._fadeOut.internalValue = undefined;
      this._overlay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rotation = value.rotation;
      this._cropRectangle.internalValue = value.cropRectangle;
      this._deinterlace.internalValue = value.deinterlace;
      this._fadeIn.internalValue = value.fadeIn;
      this._fadeOut.internalValue = value.fadeOut;
      this._overlay.internalValue = value.overlay;
    }
  }

  // rotation - computed: false, optional: true, required: false
  private _rotation?: string; 
  public get rotation() {
    return this.getStringAttribute('rotation');
  }
  public set rotation(value: string) {
    this._rotation = value;
  }
  public resetRotation() {
    this._rotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation;
  }

  // crop_rectangle - computed: false, optional: true, required: false
  private _cropRectangle = new MediaTransformOutputCustomPresetFilterCropRectangleOutputReference(this, "crop_rectangle");
  public get cropRectangle() {
    return this._cropRectangle;
  }
  public putCropRectangle(value: MediaTransformOutputCustomPresetFilterCropRectangle) {
    this._cropRectangle.internalValue = value;
  }
  public resetCropRectangle() {
    this._cropRectangle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cropRectangleInput() {
    return this._cropRectangle.internalValue;
  }

  // deinterlace - computed: false, optional: true, required: false
  private _deinterlace = new MediaTransformOutputCustomPresetFilterDeinterlaceOutputReference(this, "deinterlace");
  public get deinterlace() {
    return this._deinterlace;
  }
  public putDeinterlace(value: MediaTransformOutputCustomPresetFilterDeinterlace) {
    this._deinterlace.internalValue = value;
  }
  public resetDeinterlace() {
    this._deinterlace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deinterlaceInput() {
    return this._deinterlace.internalValue;
  }

  // fade_in - computed: false, optional: true, required: false
  private _fadeIn = new MediaTransformOutputCustomPresetFilterFadeInOutputReference(this, "fade_in");
  public get fadeIn() {
    return this._fadeIn;
  }
  public putFadeIn(value: MediaTransformOutputCustomPresetFilterFadeIn) {
    this._fadeIn.internalValue = value;
  }
  public resetFadeIn() {
    this._fadeIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeInInput() {
    return this._fadeIn.internalValue;
  }

  // fade_out - computed: false, optional: true, required: false
  private _fadeOut = new MediaTransformOutputCustomPresetFilterFadeOutOutputReference(this, "fade_out");
  public get fadeOut() {
    return this._fadeOut;
  }
  public putFadeOut(value: MediaTransformOutputCustomPresetFilterFadeOut) {
    this._fadeOut.internalValue = value;
  }
  public resetFadeOut() {
    this._fadeOut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeOutInput() {
    return this._fadeOut.internalValue;
  }

  // overlay - computed: false, optional: true, required: false
  private _overlay = new MediaTransformOutputCustomPresetFilterOverlayList(this, "overlay", false);
  public get overlay() {
    return this._overlay;
  }
  public putOverlay(value: MediaTransformOutputCustomPresetFilterOverlay[] | cdktf.IResolvable) {
    this._overlay.internalValue = value;
  }
  public resetOverlay() {
    this._overlay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayInput() {
    return this._overlay.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetFormatJpg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#filename_pattern MediaTransform#filename_pattern}
  */
  readonly filenamePattern: string;
}

export function mediaTransformOutputCustomPresetFormatJpgToTerraform(struct?: MediaTransformOutputCustomPresetFormatJpgOutputReference | MediaTransformOutputCustomPresetFormatJpg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename_pattern: cdktf.stringToTerraform(struct!.filenamePattern),
  }
}

export class MediaTransformOutputCustomPresetFormatJpgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFormatJpg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filenamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePattern = this._filenamePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormatJpg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filenamePattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filenamePattern = value.filenamePattern;
    }
  }

  // filename_pattern - computed: false, optional: false, required: true
  private _filenamePattern?: string; 
  public get filenamePattern() {
    return this.getStringAttribute('filename_pattern');
  }
  public set filenamePattern(value: string) {
    this._filenamePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePatternInput() {
    return this._filenamePattern;
  }
}
export interface MediaTransformOutputCustomPresetFormatMp4OutputFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#labels MediaTransform#labels}
  */
  readonly labels: string[];
}

export function mediaTransformOutputCustomPresetFormatMp4OutputFileToTerraform(struct?: MediaTransformOutputCustomPresetFormatMp4OutputFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
  }
}

export class MediaTransformOutputCustomPresetFormatMp4OutputFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetFormatMp4OutputFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormatMp4OutputFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class MediaTransformOutputCustomPresetFormatMp4OutputFileList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetFormatMp4OutputFile[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetFormatMp4OutputFileOutputReference {
    return new MediaTransformOutputCustomPresetFormatMp4OutputFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetFormatMp4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#filename_pattern MediaTransform#filename_pattern}
  */
  readonly filenamePattern: string;
  /**
  * output_file block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#output_file MediaTransform#output_file}
  */
  readonly outputFile?: MediaTransformOutputCustomPresetFormatMp4OutputFile[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetFormatMp4ToTerraform(struct?: MediaTransformOutputCustomPresetFormatMp4OutputReference | MediaTransformOutputCustomPresetFormatMp4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename_pattern: cdktf.stringToTerraform(struct!.filenamePattern),
    output_file: cdktf.listMapper(mediaTransformOutputCustomPresetFormatMp4OutputFileToTerraform, true)(struct!.outputFile),
  }
}

export class MediaTransformOutputCustomPresetFormatMp4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFormatMp4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filenamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePattern = this._filenamePattern;
    }
    if (this._outputFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFile = this._outputFile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormatMp4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filenamePattern = undefined;
      this._outputFile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filenamePattern = value.filenamePattern;
      this._outputFile.internalValue = value.outputFile;
    }
  }

  // filename_pattern - computed: false, optional: false, required: true
  private _filenamePattern?: string; 
  public get filenamePattern() {
    return this.getStringAttribute('filename_pattern');
  }
  public set filenamePattern(value: string) {
    this._filenamePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePatternInput() {
    return this._filenamePattern;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile = new MediaTransformOutputCustomPresetFormatMp4OutputFileList(this, "output_file", false);
  public get outputFile() {
    return this._outputFile;
  }
  public putOutputFile(value: MediaTransformOutputCustomPresetFormatMp4OutputFile[] | cdktf.IResolvable) {
    this._outputFile.internalValue = value;
  }
  public resetOutputFile() {
    this._outputFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetFormatPng {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#filename_pattern MediaTransform#filename_pattern}
  */
  readonly filenamePattern: string;
}

export function mediaTransformOutputCustomPresetFormatPngToTerraform(struct?: MediaTransformOutputCustomPresetFormatPngOutputReference | MediaTransformOutputCustomPresetFormatPng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename_pattern: cdktf.stringToTerraform(struct!.filenamePattern),
  }
}

export class MediaTransformOutputCustomPresetFormatPngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFormatPng | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filenamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePattern = this._filenamePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormatPng | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filenamePattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filenamePattern = value.filenamePattern;
    }
  }

  // filename_pattern - computed: false, optional: false, required: true
  private _filenamePattern?: string; 
  public get filenamePattern() {
    return this.getStringAttribute('filename_pattern');
  }
  public set filenamePattern(value: string) {
    this._filenamePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePatternInput() {
    return this._filenamePattern;
  }
}
export interface MediaTransformOutputCustomPresetFormatTransportStreamOutputFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#labels MediaTransform#labels}
  */
  readonly labels: string[];
}

export function mediaTransformOutputCustomPresetFormatTransportStreamOutputFileToTerraform(struct?: MediaTransformOutputCustomPresetFormatTransportStreamOutputFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
  }
}

export class MediaTransformOutputCustomPresetFormatTransportStreamOutputFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetFormatTransportStreamOutputFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormatTransportStreamOutputFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class MediaTransformOutputCustomPresetFormatTransportStreamOutputFileList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetFormatTransportStreamOutputFile[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetFormatTransportStreamOutputFileOutputReference {
    return new MediaTransformOutputCustomPresetFormatTransportStreamOutputFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPresetFormatTransportStream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#filename_pattern MediaTransform#filename_pattern}
  */
  readonly filenamePattern: string;
  /**
  * output_file block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#output_file MediaTransform#output_file}
  */
  readonly outputFile?: MediaTransformOutputCustomPresetFormatTransportStreamOutputFile[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetFormatTransportStreamToTerraform(struct?: MediaTransformOutputCustomPresetFormatTransportStreamOutputReference | MediaTransformOutputCustomPresetFormatTransportStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename_pattern: cdktf.stringToTerraform(struct!.filenamePattern),
    output_file: cdktf.listMapper(mediaTransformOutputCustomPresetFormatTransportStreamOutputFileToTerraform, true)(struct!.outputFile),
  }
}

export class MediaTransformOutputCustomPresetFormatTransportStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPresetFormatTransportStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filenamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePattern = this._filenamePattern;
    }
    if (this._outputFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFile = this._outputFile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormatTransportStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filenamePattern = undefined;
      this._outputFile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filenamePattern = value.filenamePattern;
      this._outputFile.internalValue = value.outputFile;
    }
  }

  // filename_pattern - computed: false, optional: false, required: true
  private _filenamePattern?: string; 
  public get filenamePattern() {
    return this.getStringAttribute('filename_pattern');
  }
  public set filenamePattern(value: string) {
    this._filenamePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePatternInput() {
    return this._filenamePattern;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile = new MediaTransformOutputCustomPresetFormatTransportStreamOutputFileList(this, "output_file", false);
  public get outputFile() {
    return this._outputFile;
  }
  public putOutputFile(value: MediaTransformOutputCustomPresetFormatTransportStreamOutputFile[] | cdktf.IResolvable) {
    this._outputFile.internalValue = value;
  }
  public resetOutputFile() {
    this._outputFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile.internalValue;
  }
}
export interface MediaTransformOutputCustomPresetFormat {
  /**
  * jpg block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#jpg MediaTransform#jpg}
  */
  readonly jpg?: MediaTransformOutputCustomPresetFormatJpg;
  /**
  * mp4 block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#mp4 MediaTransform#mp4}
  */
  readonly mp4?: MediaTransformOutputCustomPresetFormatMp4;
  /**
  * png block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#png MediaTransform#png}
  */
  readonly png?: MediaTransformOutputCustomPresetFormatPng;
  /**
  * transport_stream block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#transport_stream MediaTransform#transport_stream}
  */
  readonly transportStream?: MediaTransformOutputCustomPresetFormatTransportStream;
}

export function mediaTransformOutputCustomPresetFormatToTerraform(struct?: MediaTransformOutputCustomPresetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jpg: mediaTransformOutputCustomPresetFormatJpgToTerraform(struct!.jpg),
    mp4: mediaTransformOutputCustomPresetFormatMp4ToTerraform(struct!.mp4),
    png: mediaTransformOutputCustomPresetFormatPngToTerraform(struct!.png),
    transport_stream: mediaTransformOutputCustomPresetFormatTransportStreamToTerraform(struct!.transportStream),
  }
}

export class MediaTransformOutputCustomPresetFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaTransformOutputCustomPresetFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jpg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpg = this._jpg?.internalValue;
    }
    if (this._mp4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mp4 = this._mp4?.internalValue;
    }
    if (this._png?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.png = this._png?.internalValue;
    }
    if (this._transportStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStream = this._transportStream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPresetFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jpg.internalValue = undefined;
      this._mp4.internalValue = undefined;
      this._png.internalValue = undefined;
      this._transportStream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jpg.internalValue = value.jpg;
      this._mp4.internalValue = value.mp4;
      this._png.internalValue = value.png;
      this._transportStream.internalValue = value.transportStream;
    }
  }

  // jpg - computed: false, optional: true, required: false
  private _jpg = new MediaTransformOutputCustomPresetFormatJpgOutputReference(this, "jpg");
  public get jpg() {
    return this._jpg;
  }
  public putJpg(value: MediaTransformOutputCustomPresetFormatJpg) {
    this._jpg.internalValue = value;
  }
  public resetJpg() {
    this._jpg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpgInput() {
    return this._jpg.internalValue;
  }

  // mp4 - computed: false, optional: true, required: false
  private _mp4 = new MediaTransformOutputCustomPresetFormatMp4OutputReference(this, "mp4");
  public get mp4() {
    return this._mp4;
  }
  public putMp4(value: MediaTransformOutputCustomPresetFormatMp4) {
    this._mp4.internalValue = value;
  }
  public resetMp4() {
    this._mp4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4Input() {
    return this._mp4.internalValue;
  }

  // png - computed: false, optional: true, required: false
  private _png = new MediaTransformOutputCustomPresetFormatPngOutputReference(this, "png");
  public get png() {
    return this._png;
  }
  public putPng(value: MediaTransformOutputCustomPresetFormatPng) {
    this._png.internalValue = value;
  }
  public resetPng() {
    this._png.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngInput() {
    return this._png.internalValue;
  }

  // transport_stream - computed: false, optional: true, required: false
  private _transportStream = new MediaTransformOutputCustomPresetFormatTransportStreamOutputReference(this, "transport_stream");
  public get transportStream() {
    return this._transportStream;
  }
  public putTransportStream(value: MediaTransformOutputCustomPresetFormatTransportStream) {
    this._transportStream.internalValue = value;
  }
  public resetTransportStream() {
    this._transportStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamInput() {
    return this._transportStream.internalValue;
  }
}

export class MediaTransformOutputCustomPresetFormatList extends cdktf.ComplexList {
  public internalValue? : MediaTransformOutputCustomPresetFormat[] | cdktf.IResolvable

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
  public get(index: number): MediaTransformOutputCustomPresetFormatOutputReference {
    return new MediaTransformOutputCustomPresetFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaTransformOutputCustomPreset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#experimental_options MediaTransform#experimental_options}
  */
  readonly experimentalOptions?: { [key: string]: string };
  /**
  * codec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#codec MediaTransform#codec}
  */
  readonly codec: MediaTransformOutputCustomPresetCodec[] | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#filter MediaTransform#filter}
  */
  readonly filter?: MediaTransformOutputCustomPresetFilter;
  /**
  * format block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#format MediaTransform#format}
  */
  readonly format: MediaTransformOutputCustomPresetFormat[] | cdktf.IResolvable;
}

export function mediaTransformOutputCustomPresetToTerraform(struct?: MediaTransformOutputCustomPresetOutputReference | MediaTransformOutputCustomPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    experimental_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.experimentalOptions),
    codec: cdktf.listMapper(mediaTransformOutputCustomPresetCodecToTerraform, true)(struct!.codec),
    filter: mediaTransformOutputCustomPresetFilterToTerraform(struct!.filter),
    format: cdktf.listMapper(mediaTransformOutputCustomPresetFormatToTerraform, true)(struct!.format),
  }
}

export class MediaTransformOutputCustomPresetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaTransformOutputCustomPreset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalOptions = this._experimentalOptions;
    }
    if (this._codec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputCustomPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._experimentalOptions = undefined;
      this._codec.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._format.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._experimentalOptions = value.experimentalOptions;
      this._codec.internalValue = value.codec;
      this._filter.internalValue = value.filter;
      this._format.internalValue = value.format;
    }
  }

  // experimental_options - computed: false, optional: true, required: false
  private _experimentalOptions?: { [key: string]: string }; 
  public get experimentalOptions() {
    return this.getStringMapAttribute('experimental_options');
  }
  public set experimentalOptions(value: { [key: string]: string }) {
    this._experimentalOptions = value;
  }
  public resetExperimentalOptions() {
    this._experimentalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalOptionsInput() {
    return this._experimentalOptions;
  }

  // codec - computed: false, optional: false, required: true
  private _codec = new MediaTransformOutputCustomPresetCodecList(this, "codec", false);
  public get codec() {
    return this._codec;
  }
  public putCodec(value: MediaTransformOutputCustomPresetCodec[] | cdktf.IResolvable) {
    this._codec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new MediaTransformOutputCustomPresetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MediaTransformOutputCustomPresetFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // format - computed: false, optional: false, required: true
  private _format = new MediaTransformOutputCustomPresetFormatList(this, "format", false);
  public get format() {
    return this._format;
  }
  public putFormat(value: MediaTransformOutputCustomPresetFormat[] | cdktf.IResolvable) {
    this._format.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}
export interface MediaTransformOutputFaceDetectorPreset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#analysis_resolution MediaTransform#analysis_resolution}
  */
  readonly analysisResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#blur_type MediaTransform#blur_type}
  */
  readonly blurType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#experimental_options MediaTransform#experimental_options}
  */
  readonly experimentalOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#face_redactor_mode MediaTransform#face_redactor_mode}
  */
  readonly faceRedactorMode?: string;
}

export function mediaTransformOutputFaceDetectorPresetToTerraform(struct?: MediaTransformOutputFaceDetectorPresetOutputReference | MediaTransformOutputFaceDetectorPreset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis_resolution: cdktf.stringToTerraform(struct!.analysisResolution),
    blur_type: cdktf.stringToTerraform(struct!.blurType),
    experimental_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.experimentalOptions),
    face_redactor_mode: cdktf.stringToTerraform(struct!.faceRedactorMode),
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
    if (this._blurType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blurType = this._blurType;
    }
    if (this._experimentalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalOptions = this._experimentalOptions;
    }
    if (this._faceRedactorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceRedactorMode = this._faceRedactorMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaTransformOutputFaceDetectorPreset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analysisResolution = undefined;
      this._blurType = undefined;
      this._experimentalOptions = undefined;
      this._faceRedactorMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysisResolution = value.analysisResolution;
      this._blurType = value.blurType;
      this._experimentalOptions = value.experimentalOptions;
      this._faceRedactorMode = value.faceRedactorMode;
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

  // blur_type - computed: false, optional: true, required: false
  private _blurType?: string; 
  public get blurType() {
    return this.getStringAttribute('blur_type');
  }
  public set blurType(value: string) {
    this._blurType = value;
  }
  public resetBlurType() {
    this._blurType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blurTypeInput() {
    return this._blurType;
  }

  // experimental_options - computed: false, optional: true, required: false
  private _experimentalOptions?: { [key: string]: string }; 
  public get experimentalOptions() {
    return this.getStringMapAttribute('experimental_options');
  }
  public set experimentalOptions(value: { [key: string]: string }) {
    this._experimentalOptions = value;
  }
  public resetExperimentalOptions() {
    this._experimentalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalOptionsInput() {
    return this._experimentalOptions;
  }

  // face_redactor_mode - computed: false, optional: true, required: false
  private _faceRedactorMode?: string; 
  public get faceRedactorMode() {
    return this.getStringAttribute('face_redactor_mode');
  }
  public set faceRedactorMode(value: string) {
    this._faceRedactorMode = value;
  }
  public resetFaceRedactorMode() {
    this._faceRedactorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceRedactorModeInput() {
    return this._faceRedactorMode;
  }
}
export interface MediaTransformOutputVideoAnalyzerPreset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}
  */
  readonly audioAnalysisMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}
  */
  readonly audioLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#experimental_options MediaTransform#experimental_options}
  */
  readonly experimentalOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#insights_type MediaTransform#insights_type}
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
    experimental_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.experimentalOptions),
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
    if (this._experimentalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalOptions = this._experimentalOptions;
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
      this._experimentalOptions = undefined;
      this._insightsType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioAnalysisMode = value.audioAnalysisMode;
      this._audioLanguage = value.audioLanguage;
      this._experimentalOptions = value.experimentalOptions;
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

  // experimental_options - computed: false, optional: true, required: false
  private _experimentalOptions?: { [key: string]: string }; 
  public get experimentalOptions() {
    return this.getStringMapAttribute('experimental_options');
  }
  public set experimentalOptions(value: { [key: string]: string }) {
    this._experimentalOptions = value;
  }
  public resetExperimentalOptions() {
    this._experimentalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalOptionsInput() {
    return this._experimentalOptions;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#on_error_action MediaTransform#on_error_action}
  */
  readonly onErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#relative_priority MediaTransform#relative_priority}
  */
  readonly relativePriority?: string;
  /**
  * audio_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#audio_analyzer_preset MediaTransform#audio_analyzer_preset}
  */
  readonly audioAnalyzerPreset?: MediaTransformOutputAudioAnalyzerPreset;
  /**
  * builtin_preset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#builtin_preset MediaTransform#builtin_preset}
  */
  readonly builtinPreset?: MediaTransformOutputBuiltinPreset;
  /**
  * custom_preset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#custom_preset MediaTransform#custom_preset}
  */
  readonly customPreset?: MediaTransformOutputCustomPreset;
  /**
  * face_detector_preset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#face_detector_preset MediaTransform#face_detector_preset}
  */
  readonly faceDetectorPreset?: MediaTransformOutputFaceDetectorPreset;
  /**
  * video_analyzer_preset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#video_analyzer_preset MediaTransform#video_analyzer_preset}
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
    custom_preset: mediaTransformOutputCustomPresetToTerraform(struct!.customPreset),
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
    if (this._customPreset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPreset = this._customPreset?.internalValue;
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
      this._customPreset.internalValue = undefined;
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
      this._customPreset.internalValue = value.customPreset;
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

  // custom_preset - computed: false, optional: true, required: false
  private _customPreset = new MediaTransformOutputCustomPresetOutputReference(this, "custom_preset");
  public get customPreset() {
    return this._customPreset;
  }
  public putCustomPreset(value: MediaTransformOutputCustomPreset) {
    this._customPreset.internalValue = value;
  }
  public resetCustomPreset() {
    this._customPreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPresetInput() {
    return this._customPreset.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#create MediaTransform#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#delete MediaTransform#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#read MediaTransform#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform#update MediaTransform#update}
  */
  readonly update?: string;
}

export function mediaTransformTimeoutsToTerraform(struct?: MediaTransformTimeouts | cdktf.IResolvable): any {
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
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform azurerm_media_transform}
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
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/media_transform azurerm_media_transform} Resource
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
        providerVersion: '3.62.0',
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
