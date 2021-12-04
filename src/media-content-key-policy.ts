// https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaContentKeyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#description MediaContentKeyPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#media_services_account_name MediaContentKeyPolicy#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#name MediaContentKeyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#resource_group_name MediaContentKeyPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * policy_option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#policy_option MediaContentKeyPolicy#policy_option}
  */
  readonly policyOption: MediaContentKeyPolicyPolicyOption[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#timeouts MediaContentKeyPolicy#timeouts}
  */
  readonly timeouts?: MediaContentKeyPolicyTimeouts;
}
export interface MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}
  */
  readonly playbackDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}
  */
  readonly storageDurationSeconds?: number;
}

export function mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference | MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    playback_duration_seconds: cdktf.numberToTerraform(struct!.playbackDurationSeconds),
    storage_duration_seconds: cdktf.numberToTerraform(struct!.storageDurationSeconds),
  }
}

export class MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playbackDurationSeconds) {
      hasAnyValues = true;
      internalValueResult.playbackDurationSeconds = this._playbackDurationSeconds;
    }
    if (this._storageDurationSeconds) {
      hasAnyValues = true;
      internalValueResult.storageDurationSeconds = this._storageDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playbackDurationSeconds = undefined;
      this._storageDurationSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playbackDurationSeconds = value.playbackDurationSeconds;
      this._storageDurationSeconds = value.storageDurationSeconds;
    }
  }

  // playback_duration_seconds - computed: false, optional: true, required: false
  private _playbackDurationSeconds?: number; 
  public get playbackDurationSeconds() {
    return this.getNumberAttribute('playback_duration_seconds');
  }
  public set playbackDurationSeconds(value: number) {
    this._playbackDurationSeconds = value;
  }
  public resetPlaybackDurationSeconds() {
    this._playbackDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackDurationSecondsInput() {
    return this._playbackDurationSeconds;
  }

  // storage_duration_seconds - computed: false, optional: true, required: false
  private _storageDurationSeconds?: number; 
  public get storageDurationSeconds() {
    return this.getNumberAttribute('storage_duration_seconds');
  }
  public set storageDurationSeconds(value: number) {
    this._storageDurationSeconds = value;
  }
  public resetStorageDurationSeconds() {
    this._storageDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDurationSecondsInput() {
    return this._storageDurationSeconds;
  }
}
export interface MediaContentKeyPolicyPolicyOptionFairplayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#ask MediaContentKeyPolicy#ask}
  */
  readonly ask?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#pfx MediaContentKeyPolicy#pfx}
  */
  readonly pfx?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#pfx_password MediaContentKeyPolicy#pfx_password}
  */
  readonly pfxPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}
  */
  readonly rentalAndLeaseKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}
  */
  readonly rentalDurationSeconds?: number;
  /**
  * offline_rental_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}
  */
  readonly offlineRentalConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration;
}

export function mediaContentKeyPolicyPolicyOptionFairplayConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference | MediaContentKeyPolicyPolicyOptionFairplayConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ask: cdktf.stringToTerraform(struct!.ask),
    pfx: cdktf.stringToTerraform(struct!.pfx),
    pfx_password: cdktf.stringToTerraform(struct!.pfxPassword),
    rental_and_lease_key_type: cdktf.stringToTerraform(struct!.rentalAndLeaseKeyType),
    rental_duration_seconds: cdktf.numberToTerraform(struct!.rentalDurationSeconds),
    offline_rental_configuration: mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationToTerraform(struct!.offlineRentalConfiguration),
  }
}

export class MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionFairplayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ask) {
      hasAnyValues = true;
      internalValueResult.ask = this._ask;
    }
    if (this._pfx) {
      hasAnyValues = true;
      internalValueResult.pfx = this._pfx;
    }
    if (this._pfxPassword) {
      hasAnyValues = true;
      internalValueResult.pfxPassword = this._pfxPassword;
    }
    if (this._rentalAndLeaseKeyType) {
      hasAnyValues = true;
      internalValueResult.rentalAndLeaseKeyType = this._rentalAndLeaseKeyType;
    }
    if (this._rentalDurationSeconds) {
      hasAnyValues = true;
      internalValueResult.rentalDurationSeconds = this._rentalDurationSeconds;
    }
    if (this._offlineRentalConfiguration?.internalValue) {
      hasAnyValues = true;
      internalValueResult.offlineRentalConfiguration = this._offlineRentalConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionFairplayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ask = undefined;
      this._pfx = undefined;
      this._pfxPassword = undefined;
      this._rentalAndLeaseKeyType = undefined;
      this._rentalDurationSeconds = undefined;
      this._offlineRentalConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ask = value.ask;
      this._pfx = value.pfx;
      this._pfxPassword = value.pfxPassword;
      this._rentalAndLeaseKeyType = value.rentalAndLeaseKeyType;
      this._rentalDurationSeconds = value.rentalDurationSeconds;
      this._offlineRentalConfiguration.internalValue = value.offlineRentalConfiguration;
    }
  }

  // ask - computed: false, optional: true, required: false
  private _ask?: string; 
  public get ask() {
    return this.getStringAttribute('ask');
  }
  public set ask(value: string) {
    this._ask = value;
  }
  public resetAsk() {
    this._ask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askInput() {
    return this._ask;
  }

  // pfx - computed: false, optional: true, required: false
  private _pfx?: string; 
  public get pfx() {
    return this.getStringAttribute('pfx');
  }
  public set pfx(value: string) {
    this._pfx = value;
  }
  public resetPfx() {
    this._pfx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxInput() {
    return this._pfx;
  }

  // pfx_password - computed: false, optional: true, required: false
  private _pfxPassword?: string; 
  public get pfxPassword() {
    return this.getStringAttribute('pfx_password');
  }
  public set pfxPassword(value: string) {
    this._pfxPassword = value;
  }
  public resetPfxPassword() {
    this._pfxPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordInput() {
    return this._pfxPassword;
  }

  // rental_and_lease_key_type - computed: false, optional: true, required: false
  private _rentalAndLeaseKeyType?: string; 
  public get rentalAndLeaseKeyType() {
    return this.getStringAttribute('rental_and_lease_key_type');
  }
  public set rentalAndLeaseKeyType(value: string) {
    this._rentalAndLeaseKeyType = value;
  }
  public resetRentalAndLeaseKeyType() {
    this._rentalAndLeaseKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rentalAndLeaseKeyTypeInput() {
    return this._rentalAndLeaseKeyType;
  }

  // rental_duration_seconds - computed: false, optional: true, required: false
  private _rentalDurationSeconds?: number; 
  public get rentalDurationSeconds() {
    return this.getNumberAttribute('rental_duration_seconds');
  }
  public set rentalDurationSeconds(value: number) {
    this._rentalDurationSeconds = value;
  }
  public resetRentalDurationSeconds() {
    this._rentalDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rentalDurationSecondsInput() {
    return this._rentalDurationSeconds;
  }

  // offline_rental_configuration - computed: false, optional: true, required: false
  private _offlineRentalConfiguration = new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference(this as any, "offline_rental_configuration", true);
  public get offlineRentalConfiguration() {
    return this._offlineRentalConfiguration;
  }
  public putOfflineRentalConfiguration(value: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration) {
    this._offlineRentalConfiguration.internalValue = value;
  }
  public resetOfflineRentalConfiguration() {
    this._offlineRentalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineRentalConfigurationInput() {
    return this._offlineRentalConfiguration.internalValue;
  }
}
export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}
  */
  readonly agcAndColorStripeRestriction?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}
  */
  readonly allowPassingVideoContentToUnknownOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#analog_video_opl MediaContentKeyPolicy#analog_video_opl}
  */
  readonly analogVideoOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}
  */
  readonly compressedDigitalAudioOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}
  */
  readonly digitalVideoOnlyContentRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#first_play_expiration MediaContentKeyPolicy#first_play_expiration}
  */
  readonly firstPlayExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}
  */
  readonly imageConstraintForAnalogComponentVideoRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}
  */
  readonly imageConstraintForAnalogComputerMonitorRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#scms_restriction MediaContentKeyPolicy#scms_restriction}
  */
  readonly scmsRestriction?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}
  */
  readonly uncompressedDigitalAudioOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}
  */
  readonly uncompressedDigitalVideoOpl?: number;
}

export function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agc_and_color_stripe_restriction: cdktf.numberToTerraform(struct!.agcAndColorStripeRestriction),
    allow_passing_video_content_to_unknown_output: cdktf.stringToTerraform(struct!.allowPassingVideoContentToUnknownOutput),
    analog_video_opl: cdktf.numberToTerraform(struct!.analogVideoOpl),
    compressed_digital_audio_opl: cdktf.numberToTerraform(struct!.compressedDigitalAudioOpl),
    digital_video_only_content_restriction: cdktf.booleanToTerraform(struct!.digitalVideoOnlyContentRestriction),
    first_play_expiration: cdktf.stringToTerraform(struct!.firstPlayExpiration),
    image_constraint_for_analog_component_video_restriction: cdktf.booleanToTerraform(struct!.imageConstraintForAnalogComponentVideoRestriction),
    image_constraint_for_analog_computer_monitor_restriction: cdktf.booleanToTerraform(struct!.imageConstraintForAnalogComputerMonitorRestriction),
    scms_restriction: cdktf.numberToTerraform(struct!.scmsRestriction),
    uncompressed_digital_audio_opl: cdktf.numberToTerraform(struct!.uncompressedDigitalAudioOpl),
    uncompressed_digital_video_opl: cdktf.numberToTerraform(struct!.uncompressedDigitalVideoOpl),
  }
}

export class MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agcAndColorStripeRestriction) {
      hasAnyValues = true;
      internalValueResult.agcAndColorStripeRestriction = this._agcAndColorStripeRestriction;
    }
    if (this._allowPassingVideoContentToUnknownOutput) {
      hasAnyValues = true;
      internalValueResult.allowPassingVideoContentToUnknownOutput = this._allowPassingVideoContentToUnknownOutput;
    }
    if (this._analogVideoOpl) {
      hasAnyValues = true;
      internalValueResult.analogVideoOpl = this._analogVideoOpl;
    }
    if (this._compressedDigitalAudioOpl) {
      hasAnyValues = true;
      internalValueResult.compressedDigitalAudioOpl = this._compressedDigitalAudioOpl;
    }
    if (this._digitalVideoOnlyContentRestriction) {
      hasAnyValues = true;
      internalValueResult.digitalVideoOnlyContentRestriction = this._digitalVideoOnlyContentRestriction;
    }
    if (this._firstPlayExpiration) {
      hasAnyValues = true;
      internalValueResult.firstPlayExpiration = this._firstPlayExpiration;
    }
    if (this._imageConstraintForAnalogComponentVideoRestriction) {
      hasAnyValues = true;
      internalValueResult.imageConstraintForAnalogComponentVideoRestriction = this._imageConstraintForAnalogComponentVideoRestriction;
    }
    if (this._imageConstraintForAnalogComputerMonitorRestriction) {
      hasAnyValues = true;
      internalValueResult.imageConstraintForAnalogComputerMonitorRestriction = this._imageConstraintForAnalogComputerMonitorRestriction;
    }
    if (this._scmsRestriction) {
      hasAnyValues = true;
      internalValueResult.scmsRestriction = this._scmsRestriction;
    }
    if (this._uncompressedDigitalAudioOpl) {
      hasAnyValues = true;
      internalValueResult.uncompressedDigitalAudioOpl = this._uncompressedDigitalAudioOpl;
    }
    if (this._uncompressedDigitalVideoOpl) {
      hasAnyValues = true;
      internalValueResult.uncompressedDigitalVideoOpl = this._uncompressedDigitalVideoOpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agcAndColorStripeRestriction = undefined;
      this._allowPassingVideoContentToUnknownOutput = undefined;
      this._analogVideoOpl = undefined;
      this._compressedDigitalAudioOpl = undefined;
      this._digitalVideoOnlyContentRestriction = undefined;
      this._firstPlayExpiration = undefined;
      this._imageConstraintForAnalogComponentVideoRestriction = undefined;
      this._imageConstraintForAnalogComputerMonitorRestriction = undefined;
      this._scmsRestriction = undefined;
      this._uncompressedDigitalAudioOpl = undefined;
      this._uncompressedDigitalVideoOpl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agcAndColorStripeRestriction = value.agcAndColorStripeRestriction;
      this._allowPassingVideoContentToUnknownOutput = value.allowPassingVideoContentToUnknownOutput;
      this._analogVideoOpl = value.analogVideoOpl;
      this._compressedDigitalAudioOpl = value.compressedDigitalAudioOpl;
      this._digitalVideoOnlyContentRestriction = value.digitalVideoOnlyContentRestriction;
      this._firstPlayExpiration = value.firstPlayExpiration;
      this._imageConstraintForAnalogComponentVideoRestriction = value.imageConstraintForAnalogComponentVideoRestriction;
      this._imageConstraintForAnalogComputerMonitorRestriction = value.imageConstraintForAnalogComputerMonitorRestriction;
      this._scmsRestriction = value.scmsRestriction;
      this._uncompressedDigitalAudioOpl = value.uncompressedDigitalAudioOpl;
      this._uncompressedDigitalVideoOpl = value.uncompressedDigitalVideoOpl;
    }
  }

  // agc_and_color_stripe_restriction - computed: false, optional: true, required: false
  private _agcAndColorStripeRestriction?: number; 
  public get agcAndColorStripeRestriction() {
    return this.getNumberAttribute('agc_and_color_stripe_restriction');
  }
  public set agcAndColorStripeRestriction(value: number) {
    this._agcAndColorStripeRestriction = value;
  }
  public resetAgcAndColorStripeRestriction() {
    this._agcAndColorStripeRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agcAndColorStripeRestrictionInput() {
    return this._agcAndColorStripeRestriction;
  }

  // allow_passing_video_content_to_unknown_output - computed: false, optional: true, required: false
  private _allowPassingVideoContentToUnknownOutput?: string; 
  public get allowPassingVideoContentToUnknownOutput() {
    return this.getStringAttribute('allow_passing_video_content_to_unknown_output');
  }
  public set allowPassingVideoContentToUnknownOutput(value: string) {
    this._allowPassingVideoContentToUnknownOutput = value;
  }
  public resetAllowPassingVideoContentToUnknownOutput() {
    this._allowPassingVideoContentToUnknownOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPassingVideoContentToUnknownOutputInput() {
    return this._allowPassingVideoContentToUnknownOutput;
  }

  // analog_video_opl - computed: false, optional: true, required: false
  private _analogVideoOpl?: number; 
  public get analogVideoOpl() {
    return this.getNumberAttribute('analog_video_opl');
  }
  public set analogVideoOpl(value: number) {
    this._analogVideoOpl = value;
  }
  public resetAnalogVideoOpl() {
    this._analogVideoOpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analogVideoOplInput() {
    return this._analogVideoOpl;
  }

  // compressed_digital_audio_opl - computed: false, optional: true, required: false
  private _compressedDigitalAudioOpl?: number; 
  public get compressedDigitalAudioOpl() {
    return this.getNumberAttribute('compressed_digital_audio_opl');
  }
  public set compressedDigitalAudioOpl(value: number) {
    this._compressedDigitalAudioOpl = value;
  }
  public resetCompressedDigitalAudioOpl() {
    this._compressedDigitalAudioOpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedDigitalAudioOplInput() {
    return this._compressedDigitalAudioOpl;
  }

  // digital_video_only_content_restriction - computed: false, optional: true, required: false
  private _digitalVideoOnlyContentRestriction?: boolean | cdktf.IResolvable; 
  public get digitalVideoOnlyContentRestriction() {
    return this.getBooleanAttribute('digital_video_only_content_restriction') as any;
  }
  public set digitalVideoOnlyContentRestriction(value: boolean | cdktf.IResolvable) {
    this._digitalVideoOnlyContentRestriction = value;
  }
  public resetDigitalVideoOnlyContentRestriction() {
    this._digitalVideoOnlyContentRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalVideoOnlyContentRestrictionInput() {
    return this._digitalVideoOnlyContentRestriction;
  }

  // first_play_expiration - computed: false, optional: true, required: false
  private _firstPlayExpiration?: string; 
  public get firstPlayExpiration() {
    return this.getStringAttribute('first_play_expiration');
  }
  public set firstPlayExpiration(value: string) {
    this._firstPlayExpiration = value;
  }
  public resetFirstPlayExpiration() {
    this._firstPlayExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstPlayExpirationInput() {
    return this._firstPlayExpiration;
  }

  // image_constraint_for_analog_component_video_restriction - computed: false, optional: true, required: false
  private _imageConstraintForAnalogComponentVideoRestriction?: boolean | cdktf.IResolvable; 
  public get imageConstraintForAnalogComponentVideoRestriction() {
    return this.getBooleanAttribute('image_constraint_for_analog_component_video_restriction') as any;
  }
  public set imageConstraintForAnalogComponentVideoRestriction(value: boolean | cdktf.IResolvable) {
    this._imageConstraintForAnalogComponentVideoRestriction = value;
  }
  public resetImageConstraintForAnalogComponentVideoRestriction() {
    this._imageConstraintForAnalogComponentVideoRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConstraintForAnalogComponentVideoRestrictionInput() {
    return this._imageConstraintForAnalogComponentVideoRestriction;
  }

  // image_constraint_for_analog_computer_monitor_restriction - computed: false, optional: true, required: false
  private _imageConstraintForAnalogComputerMonitorRestriction?: boolean | cdktf.IResolvable; 
  public get imageConstraintForAnalogComputerMonitorRestriction() {
    return this.getBooleanAttribute('image_constraint_for_analog_computer_monitor_restriction') as any;
  }
  public set imageConstraintForAnalogComputerMonitorRestriction(value: boolean | cdktf.IResolvable) {
    this._imageConstraintForAnalogComputerMonitorRestriction = value;
  }
  public resetImageConstraintForAnalogComputerMonitorRestriction() {
    this._imageConstraintForAnalogComputerMonitorRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConstraintForAnalogComputerMonitorRestrictionInput() {
    return this._imageConstraintForAnalogComputerMonitorRestriction;
  }

  // scms_restriction - computed: false, optional: true, required: false
  private _scmsRestriction?: number; 
  public get scmsRestriction() {
    return this.getNumberAttribute('scms_restriction');
  }
  public set scmsRestriction(value: number) {
    this._scmsRestriction = value;
  }
  public resetScmsRestriction() {
    this._scmsRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmsRestrictionInput() {
    return this._scmsRestriction;
  }

  // uncompressed_digital_audio_opl - computed: false, optional: true, required: false
  private _uncompressedDigitalAudioOpl?: number; 
  public get uncompressedDigitalAudioOpl() {
    return this.getNumberAttribute('uncompressed_digital_audio_opl');
  }
  public set uncompressedDigitalAudioOpl(value: number) {
    this._uncompressedDigitalAudioOpl = value;
  }
  public resetUncompressedDigitalAudioOpl() {
    this._uncompressedDigitalAudioOpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedDigitalAudioOplInput() {
    return this._uncompressedDigitalAudioOpl;
  }

  // uncompressed_digital_video_opl - computed: false, optional: true, required: false
  private _uncompressedDigitalVideoOpl?: number; 
  public get uncompressedDigitalVideoOpl() {
    return this.getNumberAttribute('uncompressed_digital_video_opl');
  }
  public set uncompressedDigitalVideoOpl(value: number) {
    this._uncompressedDigitalVideoOpl = value;
  }
  public resetUncompressedDigitalVideoOpl() {
    this._uncompressedDigitalVideoOpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedDigitalVideoOplInput() {
    return this._uncompressedDigitalVideoOpl;
  }
}
export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#allow_test_devices MediaContentKeyPolicy#allow_test_devices}
  */
  readonly allowTestDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#begin_date MediaContentKeyPolicy#begin_date}
  */
  readonly beginDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}
  */
  readonly contentKeyLocationFromHeaderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}
  */
  readonly contentKeyLocationFromKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#content_type MediaContentKeyPolicy#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#expiration_date MediaContentKeyPolicy#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#grace_period MediaContentKeyPolicy#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#license_type MediaContentKeyPolicy#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#relative_begin_date MediaContentKeyPolicy#relative_begin_date}
  */
  readonly relativeBeginDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}
  */
  readonly relativeExpirationDate?: string;
  /**
  * play_right block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#play_right MediaContentKeyPolicy#play_right}
  */
  readonly playRight?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight;
}

export function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_test_devices: cdktf.booleanToTerraform(struct!.allowTestDevices),
    begin_date: cdktf.stringToTerraform(struct!.beginDate),
    content_key_location_from_header_enabled: cdktf.booleanToTerraform(struct!.contentKeyLocationFromHeaderEnabled),
    content_key_location_from_key_id: cdktf.stringToTerraform(struct!.contentKeyLocationFromKeyId),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    expiration_date: cdktf.stringToTerraform(struct!.expirationDate),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    relative_begin_date: cdktf.stringToTerraform(struct!.relativeBeginDate),
    relative_expiration_date: cdktf.stringToTerraform(struct!.relativeExpirationDate),
    play_right: mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightToTerraform(struct!.playRight),
  }
}

export interface MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#type MediaContentKeyPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#value MediaContentKeyPolicy#value}
  */
  readonly value?: string;
}

export function mediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface MediaContentKeyPolicyPolicyOptionTokenRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#audience MediaContentKeyPolicy#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#issuer MediaContentKeyPolicy#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}
  */
  readonly openIdConnectDiscoveryDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}
  */
  readonly primaryRsaTokenKeyExponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}
  */
  readonly primaryRsaTokenKeyModulus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}
  */
  readonly primarySymmetricTokenKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}
  */
  readonly primaryX509TokenKeyRaw?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#token_type MediaContentKeyPolicy#token_type}
  */
  readonly tokenType?: string;
  /**
  * required_claim block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#required_claim MediaContentKeyPolicy#required_claim}
  */
  readonly requiredClaim?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[];
}

export function mediaContentKeyPolicyPolicyOptionTokenRestrictionToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference | MediaContentKeyPolicyPolicyOptionTokenRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    open_id_connect_discovery_document: cdktf.stringToTerraform(struct!.openIdConnectDiscoveryDocument),
    primary_rsa_token_key_exponent: cdktf.stringToTerraform(struct!.primaryRsaTokenKeyExponent),
    primary_rsa_token_key_modulus: cdktf.stringToTerraform(struct!.primaryRsaTokenKeyModulus),
    primary_symmetric_token_key: cdktf.stringToTerraform(struct!.primarySymmetricTokenKey),
    primary_x509_token_key_raw: cdktf.stringToTerraform(struct!.primaryX509TokenKeyRaw),
    token_type: cdktf.stringToTerraform(struct!.tokenType),
    required_claim: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimToTerraform)(struct!.requiredClaim),
  }
}

export class MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionTokenRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._openIdConnectDiscoveryDocument) {
      hasAnyValues = true;
      internalValueResult.openIdConnectDiscoveryDocument = this._openIdConnectDiscoveryDocument;
    }
    if (this._primaryRsaTokenKeyExponent) {
      hasAnyValues = true;
      internalValueResult.primaryRsaTokenKeyExponent = this._primaryRsaTokenKeyExponent;
    }
    if (this._primaryRsaTokenKeyModulus) {
      hasAnyValues = true;
      internalValueResult.primaryRsaTokenKeyModulus = this._primaryRsaTokenKeyModulus;
    }
    if (this._primarySymmetricTokenKey) {
      hasAnyValues = true;
      internalValueResult.primarySymmetricTokenKey = this._primarySymmetricTokenKey;
    }
    if (this._primaryX509TokenKeyRaw) {
      hasAnyValues = true;
      internalValueResult.primaryX509TokenKeyRaw = this._primaryX509TokenKeyRaw;
    }
    if (this._tokenType) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    if (this._requiredClaim) {
      hasAnyValues = true;
      internalValueResult.requiredClaim = this._requiredClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionTokenRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._openIdConnectDiscoveryDocument = undefined;
      this._primaryRsaTokenKeyExponent = undefined;
      this._primaryRsaTokenKeyModulus = undefined;
      this._primarySymmetricTokenKey = undefined;
      this._primaryX509TokenKeyRaw = undefined;
      this._tokenType = undefined;
      this._requiredClaim = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._openIdConnectDiscoveryDocument = value.openIdConnectDiscoveryDocument;
      this._primaryRsaTokenKeyExponent = value.primaryRsaTokenKeyExponent;
      this._primaryRsaTokenKeyModulus = value.primaryRsaTokenKeyModulus;
      this._primarySymmetricTokenKey = value.primarySymmetricTokenKey;
      this._primaryX509TokenKeyRaw = value.primaryX509TokenKeyRaw;
      this._tokenType = value.tokenType;
      this._requiredClaim = value.requiredClaim;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // open_id_connect_discovery_document - computed: false, optional: true, required: false
  private _openIdConnectDiscoveryDocument?: string; 
  public get openIdConnectDiscoveryDocument() {
    return this.getStringAttribute('open_id_connect_discovery_document');
  }
  public set openIdConnectDiscoveryDocument(value: string) {
    this._openIdConnectDiscoveryDocument = value;
  }
  public resetOpenIdConnectDiscoveryDocument() {
    this._openIdConnectDiscoveryDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectDiscoveryDocumentInput() {
    return this._openIdConnectDiscoveryDocument;
  }

  // primary_rsa_token_key_exponent - computed: false, optional: true, required: false
  private _primaryRsaTokenKeyExponent?: string; 
  public get primaryRsaTokenKeyExponent() {
    return this.getStringAttribute('primary_rsa_token_key_exponent');
  }
  public set primaryRsaTokenKeyExponent(value: string) {
    this._primaryRsaTokenKeyExponent = value;
  }
  public resetPrimaryRsaTokenKeyExponent() {
    this._primaryRsaTokenKeyExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRsaTokenKeyExponentInput() {
    return this._primaryRsaTokenKeyExponent;
  }

  // primary_rsa_token_key_modulus - computed: false, optional: true, required: false
  private _primaryRsaTokenKeyModulus?: string; 
  public get primaryRsaTokenKeyModulus() {
    return this.getStringAttribute('primary_rsa_token_key_modulus');
  }
  public set primaryRsaTokenKeyModulus(value: string) {
    this._primaryRsaTokenKeyModulus = value;
  }
  public resetPrimaryRsaTokenKeyModulus() {
    this._primaryRsaTokenKeyModulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRsaTokenKeyModulusInput() {
    return this._primaryRsaTokenKeyModulus;
  }

  // primary_symmetric_token_key - computed: false, optional: true, required: false
  private _primarySymmetricTokenKey?: string; 
  public get primarySymmetricTokenKey() {
    return this.getStringAttribute('primary_symmetric_token_key');
  }
  public set primarySymmetricTokenKey(value: string) {
    this._primarySymmetricTokenKey = value;
  }
  public resetPrimarySymmetricTokenKey() {
    this._primarySymmetricTokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySymmetricTokenKeyInput() {
    return this._primarySymmetricTokenKey;
  }

  // primary_x509_token_key_raw - computed: false, optional: true, required: false
  private _primaryX509TokenKeyRaw?: string; 
  public get primaryX509TokenKeyRaw() {
    return this.getStringAttribute('primary_x509_token_key_raw');
  }
  public set primaryX509TokenKeyRaw(value: string) {
    this._primaryX509TokenKeyRaw = value;
  }
  public resetPrimaryX509TokenKeyRaw() {
    this._primaryX509TokenKeyRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryX509TokenKeyRawInput() {
    return this._primaryX509TokenKeyRaw;
  }

  // token_type - computed: false, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // required_claim - computed: false, optional: true, required: false
  private _requiredClaim?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[]; 
  public get requiredClaim() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_claim') as any;
  }
  public set requiredClaim(value: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[]) {
    this._requiredClaim = value;
  }
  public resetRequiredClaim() {
    this._requiredClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimInput() {
    return this._requiredClaim;
  }
}
export interface MediaContentKeyPolicyPolicyOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}
  */
  readonly clearKeyConfigurationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#name MediaContentKeyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}
  */
  readonly openRestrictionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}
  */
  readonly widevineConfigurationTemplate?: string;
  /**
  * fairplay_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#fairplay_configuration MediaContentKeyPolicy#fairplay_configuration}
  */
  readonly fairplayConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfiguration;
  /**
  * playready_configuration_license block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#playready_configuration_license MediaContentKeyPolicy#playready_configuration_license}
  */
  readonly playreadyConfigurationLicense?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[];
  /**
  * token_restriction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#token_restriction MediaContentKeyPolicy#token_restriction}
  */
  readonly tokenRestriction?: MediaContentKeyPolicyPolicyOptionTokenRestriction;
}

export function mediaContentKeyPolicyPolicyOptionToTerraform(struct?: MediaContentKeyPolicyPolicyOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_key_configuration_enabled: cdktf.booleanToTerraform(struct!.clearKeyConfigurationEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    open_restriction_enabled: cdktf.booleanToTerraform(struct!.openRestrictionEnabled),
    widevine_configuration_template: cdktf.stringToTerraform(struct!.widevineConfigurationTemplate),
    fairplay_configuration: mediaContentKeyPolicyPolicyOptionFairplayConfigurationToTerraform(struct!.fairplayConfiguration),
    playready_configuration_license: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseToTerraform)(struct!.playreadyConfigurationLicense),
    token_restriction: mediaContentKeyPolicyPolicyOptionTokenRestrictionToTerraform(struct!.tokenRestriction),
  }
}

export interface MediaContentKeyPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#create MediaContentKeyPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#delete MediaContentKeyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#read MediaContentKeyPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#update MediaContentKeyPolicy#update}
  */
  readonly update?: string;
}

export function mediaContentKeyPolicyTimeoutsToTerraform(struct?: MediaContentKeyPolicyTimeoutsOutputReference | MediaContentKeyPolicyTimeouts): any {
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

export class MediaContentKeyPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaContentKeyPolicyTimeouts | undefined {
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

  public set internalValue(value: MediaContentKeyPolicyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html azurerm_media_content_key_policy}
*/
export class MediaContentKeyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_content_key_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html azurerm_media_content_key_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaContentKeyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MediaContentKeyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_content_key_policy',
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
    this._policyOption = config.policyOption;
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

  // policy_option - computed: false, optional: false, required: true
  private _policyOption?: MediaContentKeyPolicyPolicyOption[]; 
  public get policyOption() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_option') as any;
  }
  public set policyOption(value: MediaContentKeyPolicyPolicyOption[]) {
    this._policyOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionInput() {
    return this._policyOption;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaContentKeyPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaContentKeyPolicyTimeouts) {
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
      policy_option: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionToTerraform)(this._policyOption),
      timeouts: mediaContentKeyPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
