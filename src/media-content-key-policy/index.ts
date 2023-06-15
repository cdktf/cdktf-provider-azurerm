/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaContentKeyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * policy_option block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}
  */
  readonly policyOption: MediaContentKeyPolicyPolicyOption[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}
  */
  readonly timeouts?: MediaContentKeyPolicyTimeouts;
}
export interface MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}
  */
  readonly playbackDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}
  */
  readonly storageDurationSeconds?: number;
}

export function mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference | MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playbackDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.playbackDurationSeconds = this._playbackDurationSeconds;
    }
    if (this._storageDurationSeconds !== undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}
  */
  readonly ask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}
  */
  readonly pfx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}
  */
  readonly pfxPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}
  */
  readonly rentalAndLeaseKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}
  */
  readonly rentalDurationSeconds?: number;
  /**
  * offline_rental_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}
  */
  readonly offlineRentalConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration;
}

export function mediaContentKeyPolicyPolicyOptionFairplayConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference | MediaContentKeyPolicyPolicyOptionFairplayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionFairplayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ask = this._ask;
    }
    if (this._pfx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfx = this._pfx;
    }
    if (this._pfxPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfxPassword = this._pfxPassword;
    }
    if (this._rentalAndLeaseKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rentalAndLeaseKeyType = this._rentalAndLeaseKeyType;
    }
    if (this._rentalDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rentalDurationSeconds = this._rentalDurationSeconds;
    }
    if (this._offlineRentalConfiguration?.internalValue !== undefined) {
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
  private _offlineRentalConfiguration = new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference(this, "offline_rental_configuration");
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
export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}
  */
  readonly bestEffortEnforced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}
  */
  readonly controlBits: number;
}

export function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    best_effort_enforced: cdktf.booleanToTerraform(struct!.bestEffortEnforced),
    control_bits: cdktf.numberToTerraform(struct!.controlBits),
  }
}

export class MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bestEffortEnforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.bestEffortEnforced = this._bestEffortEnforced;
    }
    if (this._controlBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlBits = this._controlBits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bestEffortEnforced = undefined;
      this._controlBits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bestEffortEnforced = value.bestEffortEnforced;
      this._controlBits = value.controlBits;
    }
  }

  // best_effort_enforced - computed: false, optional: true, required: false
  private _bestEffortEnforced?: boolean | cdktf.IResolvable; 
  public get bestEffortEnforced() {
    return this.getBooleanAttribute('best_effort_enforced');
  }
  public set bestEffortEnforced(value: boolean | cdktf.IResolvable) {
    this._bestEffortEnforced = value;
  }
  public resetBestEffortEnforced() {
    this._bestEffortEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestEffortEnforcedInput() {
    return this._bestEffortEnforced;
  }

  // control_bits - computed: false, optional: false, required: true
  private _controlBits?: number; 
  public get controlBits() {
    return this.getNumberAttribute('control_bits');
  }
  public set controlBits(value: number) {
    this._controlBits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlBitsInput() {
    return this._controlBits;
  }
}
export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}
  */
  readonly agcAndColorStripeRestriction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}
  */
  readonly allowPassingVideoContentToUnknownOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}
  */
  readonly analogVideoOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}
  */
  readonly compressedDigitalAudioOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}
  */
  readonly compressedDigitalVideoOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}
  */
  readonly digitalVideoOnlyContentRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}
  */
  readonly firstPlayExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}
  */
  readonly imageConstraintForAnalogComponentVideoRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}
  */
  readonly imageConstraintForAnalogComputerMonitorRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}
  */
  readonly scmsRestriction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}
  */
  readonly uncompressedDigitalAudioOpl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}
  */
  readonly uncompressedDigitalVideoOpl?: number;
  /**
  * explicit_analog_television_output_restriction block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#explicit_analog_television_output_restriction MediaContentKeyPolicy#explicit_analog_television_output_restriction}
  */
  readonly explicitAnalogTelevisionOutputRestriction?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction;
}

export function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agc_and_color_stripe_restriction: cdktf.numberToTerraform(struct!.agcAndColorStripeRestriction),
    allow_passing_video_content_to_unknown_output: cdktf.stringToTerraform(struct!.allowPassingVideoContentToUnknownOutput),
    analog_video_opl: cdktf.numberToTerraform(struct!.analogVideoOpl),
    compressed_digital_audio_opl: cdktf.numberToTerraform(struct!.compressedDigitalAudioOpl),
    compressed_digital_video_opl: cdktf.numberToTerraform(struct!.compressedDigitalVideoOpl),
    digital_video_only_content_restriction: cdktf.booleanToTerraform(struct!.digitalVideoOnlyContentRestriction),
    first_play_expiration: cdktf.stringToTerraform(struct!.firstPlayExpiration),
    image_constraint_for_analog_component_video_restriction: cdktf.booleanToTerraform(struct!.imageConstraintForAnalogComponentVideoRestriction),
    image_constraint_for_analog_computer_monitor_restriction: cdktf.booleanToTerraform(struct!.imageConstraintForAnalogComputerMonitorRestriction),
    scms_restriction: cdktf.numberToTerraform(struct!.scmsRestriction),
    uncompressed_digital_audio_opl: cdktf.numberToTerraform(struct!.uncompressedDigitalAudioOpl),
    uncompressed_digital_video_opl: cdktf.numberToTerraform(struct!.uncompressedDigitalVideoOpl),
    explicit_analog_television_output_restriction: mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionToTerraform(struct!.explicitAnalogTelevisionOutputRestriction),
  }
}

export class MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agcAndColorStripeRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.agcAndColorStripeRestriction = this._agcAndColorStripeRestriction;
    }
    if (this._allowPassingVideoContentToUnknownOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPassingVideoContentToUnknownOutput = this._allowPassingVideoContentToUnknownOutput;
    }
    if (this._analogVideoOpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.analogVideoOpl = this._analogVideoOpl;
    }
    if (this._compressedDigitalAudioOpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressedDigitalAudioOpl = this._compressedDigitalAudioOpl;
    }
    if (this._compressedDigitalVideoOpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressedDigitalVideoOpl = this._compressedDigitalVideoOpl;
    }
    if (this._digitalVideoOnlyContentRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalVideoOnlyContentRestriction = this._digitalVideoOnlyContentRestriction;
    }
    if (this._firstPlayExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstPlayExpiration = this._firstPlayExpiration;
    }
    if (this._imageConstraintForAnalogComponentVideoRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConstraintForAnalogComponentVideoRestriction = this._imageConstraintForAnalogComponentVideoRestriction;
    }
    if (this._imageConstraintForAnalogComputerMonitorRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConstraintForAnalogComputerMonitorRestriction = this._imageConstraintForAnalogComputerMonitorRestriction;
    }
    if (this._scmsRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmsRestriction = this._scmsRestriction;
    }
    if (this._uncompressedDigitalAudioOpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedDigitalAudioOpl = this._uncompressedDigitalAudioOpl;
    }
    if (this._uncompressedDigitalVideoOpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedDigitalVideoOpl = this._uncompressedDigitalVideoOpl;
    }
    if (this._explicitAnalogTelevisionOutputRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitAnalogTelevisionOutputRestriction = this._explicitAnalogTelevisionOutputRestriction?.internalValue;
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
      this._compressedDigitalVideoOpl = undefined;
      this._digitalVideoOnlyContentRestriction = undefined;
      this._firstPlayExpiration = undefined;
      this._imageConstraintForAnalogComponentVideoRestriction = undefined;
      this._imageConstraintForAnalogComputerMonitorRestriction = undefined;
      this._scmsRestriction = undefined;
      this._uncompressedDigitalAudioOpl = undefined;
      this._uncompressedDigitalVideoOpl = undefined;
      this._explicitAnalogTelevisionOutputRestriction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agcAndColorStripeRestriction = value.agcAndColorStripeRestriction;
      this._allowPassingVideoContentToUnknownOutput = value.allowPassingVideoContentToUnknownOutput;
      this._analogVideoOpl = value.analogVideoOpl;
      this._compressedDigitalAudioOpl = value.compressedDigitalAudioOpl;
      this._compressedDigitalVideoOpl = value.compressedDigitalVideoOpl;
      this._digitalVideoOnlyContentRestriction = value.digitalVideoOnlyContentRestriction;
      this._firstPlayExpiration = value.firstPlayExpiration;
      this._imageConstraintForAnalogComponentVideoRestriction = value.imageConstraintForAnalogComponentVideoRestriction;
      this._imageConstraintForAnalogComputerMonitorRestriction = value.imageConstraintForAnalogComputerMonitorRestriction;
      this._scmsRestriction = value.scmsRestriction;
      this._uncompressedDigitalAudioOpl = value.uncompressedDigitalAudioOpl;
      this._uncompressedDigitalVideoOpl = value.uncompressedDigitalVideoOpl;
      this._explicitAnalogTelevisionOutputRestriction.internalValue = value.explicitAnalogTelevisionOutputRestriction;
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

  // compressed_digital_video_opl - computed: false, optional: true, required: false
  private _compressedDigitalVideoOpl?: number; 
  public get compressedDigitalVideoOpl() {
    return this.getNumberAttribute('compressed_digital_video_opl');
  }
  public set compressedDigitalVideoOpl(value: number) {
    this._compressedDigitalVideoOpl = value;
  }
  public resetCompressedDigitalVideoOpl() {
    this._compressedDigitalVideoOpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedDigitalVideoOplInput() {
    return this._compressedDigitalVideoOpl;
  }

  // digital_video_only_content_restriction - computed: false, optional: true, required: false
  private _digitalVideoOnlyContentRestriction?: boolean | cdktf.IResolvable; 
  public get digitalVideoOnlyContentRestriction() {
    return this.getBooleanAttribute('digital_video_only_content_restriction');
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
    return this.getBooleanAttribute('image_constraint_for_analog_component_video_restriction');
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
    return this.getBooleanAttribute('image_constraint_for_analog_computer_monitor_restriction');
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

  // explicit_analog_television_output_restriction - computed: false, optional: true, required: false
  private _explicitAnalogTelevisionOutputRestriction = new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference(this, "explicit_analog_television_output_restriction");
  public get explicitAnalogTelevisionOutputRestriction() {
    return this._explicitAnalogTelevisionOutputRestriction;
  }
  public putExplicitAnalogTelevisionOutputRestriction(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction) {
    this._explicitAnalogTelevisionOutputRestriction.internalValue = value;
  }
  public resetExplicitAnalogTelevisionOutputRestriction() {
    this._explicitAnalogTelevisionOutputRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAnalogTelevisionOutputRestrictionInput() {
    return this._explicitAnalogTelevisionOutputRestriction.internalValue;
  }
}
export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}
  */
  readonly allowTestDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}
  */
  readonly beginDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}
  */
  readonly contentKeyLocationFromHeaderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}
  */
  readonly contentKeyLocationFromKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}
  */
  readonly relativeBeginDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}
  */
  readonly relativeExpirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}
  */
  readonly securityLevel?: string;
  /**
  * play_right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#play_right MediaContentKeyPolicy#play_right}
  */
  readonly playRight?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight;
}

export function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    play_right: mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightToTerraform(struct!.playRight),
  }
}

export class MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTestDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTestDevices = this._allowTestDevices;
    }
    if (this._beginDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginDate = this._beginDate;
    }
    if (this._contentKeyLocationFromHeaderEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentKeyLocationFromHeaderEnabled = this._contentKeyLocationFromHeaderEnabled;
    }
    if (this._contentKeyLocationFromKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentKeyLocationFromKeyId = this._contentKeyLocationFromKeyId;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._relativeBeginDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeBeginDate = this._relativeBeginDate;
    }
    if (this._relativeExpirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeExpirationDate = this._relativeExpirationDate;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._playRight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playRight = this._playRight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowTestDevices = undefined;
      this._beginDate = undefined;
      this._contentKeyLocationFromHeaderEnabled = undefined;
      this._contentKeyLocationFromKeyId = undefined;
      this._contentType = undefined;
      this._expirationDate = undefined;
      this._gracePeriod = undefined;
      this._licenseType = undefined;
      this._relativeBeginDate = undefined;
      this._relativeExpirationDate = undefined;
      this._securityLevel = undefined;
      this._playRight.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowTestDevices = value.allowTestDevices;
      this._beginDate = value.beginDate;
      this._contentKeyLocationFromHeaderEnabled = value.contentKeyLocationFromHeaderEnabled;
      this._contentKeyLocationFromKeyId = value.contentKeyLocationFromKeyId;
      this._contentType = value.contentType;
      this._expirationDate = value.expirationDate;
      this._gracePeriod = value.gracePeriod;
      this._licenseType = value.licenseType;
      this._relativeBeginDate = value.relativeBeginDate;
      this._relativeExpirationDate = value.relativeExpirationDate;
      this._securityLevel = value.securityLevel;
      this._playRight.internalValue = value.playRight;
    }
  }

  // allow_test_devices - computed: false, optional: true, required: false
  private _allowTestDevices?: boolean | cdktf.IResolvable; 
  public get allowTestDevices() {
    return this.getBooleanAttribute('allow_test_devices');
  }
  public set allowTestDevices(value: boolean | cdktf.IResolvable) {
    this._allowTestDevices = value;
  }
  public resetAllowTestDevices() {
    this._allowTestDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTestDevicesInput() {
    return this._allowTestDevices;
  }

  // begin_date - computed: false, optional: true, required: false
  private _beginDate?: string; 
  public get beginDate() {
    return this.getStringAttribute('begin_date');
  }
  public set beginDate(value: string) {
    this._beginDate = value;
  }
  public resetBeginDate() {
    this._beginDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginDateInput() {
    return this._beginDate;
  }

  // content_key_location_from_header_enabled - computed: false, optional: true, required: false
  private _contentKeyLocationFromHeaderEnabled?: boolean | cdktf.IResolvable; 
  public get contentKeyLocationFromHeaderEnabled() {
    return this.getBooleanAttribute('content_key_location_from_header_enabled');
  }
  public set contentKeyLocationFromHeaderEnabled(value: boolean | cdktf.IResolvable) {
    this._contentKeyLocationFromHeaderEnabled = value;
  }
  public resetContentKeyLocationFromHeaderEnabled() {
    this._contentKeyLocationFromHeaderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentKeyLocationFromHeaderEnabledInput() {
    return this._contentKeyLocationFromHeaderEnabled;
  }

  // content_key_location_from_key_id - computed: false, optional: true, required: false
  private _contentKeyLocationFromKeyId?: string; 
  public get contentKeyLocationFromKeyId() {
    return this.getStringAttribute('content_key_location_from_key_id');
  }
  public set contentKeyLocationFromKeyId(value: string) {
    this._contentKeyLocationFromKeyId = value;
  }
  public resetContentKeyLocationFromKeyId() {
    this._contentKeyLocationFromKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentKeyLocationFromKeyIdInput() {
    return this._contentKeyLocationFromKeyId;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // relative_begin_date - computed: false, optional: true, required: false
  private _relativeBeginDate?: string; 
  public get relativeBeginDate() {
    return this.getStringAttribute('relative_begin_date');
  }
  public set relativeBeginDate(value: string) {
    this._relativeBeginDate = value;
  }
  public resetRelativeBeginDate() {
    this._relativeBeginDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeBeginDateInput() {
    return this._relativeBeginDate;
  }

  // relative_expiration_date - computed: false, optional: true, required: false
  private _relativeExpirationDate?: string; 
  public get relativeExpirationDate() {
    return this.getStringAttribute('relative_expiration_date');
  }
  public set relativeExpirationDate(value: string) {
    this._relativeExpirationDate = value;
  }
  public resetRelativeExpirationDate() {
    this._relativeExpirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeExpirationDateInput() {
    return this._relativeExpirationDate;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // play_right - computed: false, optional: true, required: false
  private _playRight = new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference(this, "play_right");
  public get playRight() {
    return this._playRight;
  }
  public putPlayRight(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight) {
    this._playRight.internalValue = value;
  }
  public resetPlayRight() {
    this._playRight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playRightInput() {
    return this._playRight.internalValue;
  }
}

export class MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList extends cdktf.ComplexList {
  public internalValue? : MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[] | cdktf.IResolvable

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
  public get(index: number): MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference {
    return new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}
  */
  readonly rsaTokenKeyExponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}
  */
  readonly rsaTokenKeyModulus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}
  */
  readonly symmetricTokenKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}
  */
  readonly x509TokenKeyRaw?: string;
}

export function mediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa_token_key_exponent: cdktf.stringToTerraform(struct!.rsaTokenKeyExponent),
    rsa_token_key_modulus: cdktf.stringToTerraform(struct!.rsaTokenKeyModulus),
    symmetric_token_key: cdktf.stringToTerraform(struct!.symmetricTokenKey),
    x509_token_key_raw: cdktf.stringToTerraform(struct!.x509TokenKeyRaw),
  }
}

export class MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsaTokenKeyExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaTokenKeyExponent = this._rsaTokenKeyExponent;
    }
    if (this._rsaTokenKeyModulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaTokenKeyModulus = this._rsaTokenKeyModulus;
    }
    if (this._symmetricTokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricTokenKey = this._symmetricTokenKey;
    }
    if (this._x509TokenKeyRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509TokenKeyRaw = this._x509TokenKeyRaw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rsaTokenKeyExponent = undefined;
      this._rsaTokenKeyModulus = undefined;
      this._symmetricTokenKey = undefined;
      this._x509TokenKeyRaw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rsaTokenKeyExponent = value.rsaTokenKeyExponent;
      this._rsaTokenKeyModulus = value.rsaTokenKeyModulus;
      this._symmetricTokenKey = value.symmetricTokenKey;
      this._x509TokenKeyRaw = value.x509TokenKeyRaw;
    }
  }

  // rsa_token_key_exponent - computed: false, optional: true, required: false
  private _rsaTokenKeyExponent?: string; 
  public get rsaTokenKeyExponent() {
    return this.getStringAttribute('rsa_token_key_exponent');
  }
  public set rsaTokenKeyExponent(value: string) {
    this._rsaTokenKeyExponent = value;
  }
  public resetRsaTokenKeyExponent() {
    this._rsaTokenKeyExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTokenKeyExponentInput() {
    return this._rsaTokenKeyExponent;
  }

  // rsa_token_key_modulus - computed: false, optional: true, required: false
  private _rsaTokenKeyModulus?: string; 
  public get rsaTokenKeyModulus() {
    return this.getStringAttribute('rsa_token_key_modulus');
  }
  public set rsaTokenKeyModulus(value: string) {
    this._rsaTokenKeyModulus = value;
  }
  public resetRsaTokenKeyModulus() {
    this._rsaTokenKeyModulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTokenKeyModulusInput() {
    return this._rsaTokenKeyModulus;
  }

  // symmetric_token_key - computed: false, optional: true, required: false
  private _symmetricTokenKey?: string; 
  public get symmetricTokenKey() {
    return this.getStringAttribute('symmetric_token_key');
  }
  public set symmetricTokenKey(value: string) {
    this._symmetricTokenKey = value;
  }
  public resetSymmetricTokenKey() {
    this._symmetricTokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricTokenKeyInput() {
    return this._symmetricTokenKey;
  }

  // x509_token_key_raw - computed: false, optional: true, required: false
  private _x509TokenKeyRaw?: string; 
  public get x509TokenKeyRaw() {
    return this.getStringAttribute('x509_token_key_raw');
  }
  public set x509TokenKeyRaw(value: string) {
    this._x509TokenKeyRaw = value;
  }
  public resetX509TokenKeyRaw() {
    this._x509TokenKeyRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509TokenKeyRawInput() {
    return this._x509TokenKeyRaw;
  }
}

export class MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList extends cdktf.ComplexList {
  public internalValue? : MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[] | cdktf.IResolvable

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
  public get(index: number): MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference {
    return new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}
  */
  readonly value?: string;
}

export function mediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList extends cdktf.ComplexList {
  public internalValue? : MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[] | cdktf.IResolvable

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
  public get(index: number): MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference {
    return new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaContentKeyPolicyPolicyOptionTokenRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}
  */
  readonly openIdConnectDiscoveryDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}
  */
  readonly primaryRsaTokenKeyExponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}
  */
  readonly primaryRsaTokenKeyModulus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}
  */
  readonly primarySymmetricTokenKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}
  */
  readonly primaryX509TokenKeyRaw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}
  */
  readonly tokenType?: string;
  /**
  * alternate_key block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#alternate_key MediaContentKeyPolicy#alternate_key}
  */
  readonly alternateKey?: MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[] | cdktf.IResolvable;
  /**
  * required_claim block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#required_claim MediaContentKeyPolicy#required_claim}
  */
  readonly requiredClaim?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[] | cdktf.IResolvable;
}

export function mediaContentKeyPolicyPolicyOptionTokenRestrictionToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference | MediaContentKeyPolicyPolicyOptionTokenRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    alternate_key: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyToTerraform, true)(struct!.alternateKey),
    required_claim: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimToTerraform, true)(struct!.requiredClaim),
  }
}

export class MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaContentKeyPolicyPolicyOptionTokenRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._openIdConnectDiscoveryDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectDiscoveryDocument = this._openIdConnectDiscoveryDocument;
    }
    if (this._primaryRsaTokenKeyExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryRsaTokenKeyExponent = this._primaryRsaTokenKeyExponent;
    }
    if (this._primaryRsaTokenKeyModulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryRsaTokenKeyModulus = this._primaryRsaTokenKeyModulus;
    }
    if (this._primarySymmetricTokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySymmetricTokenKey = this._primarySymmetricTokenKey;
    }
    if (this._primaryX509TokenKeyRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryX509TokenKeyRaw = this._primaryX509TokenKeyRaw;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    if (this._alternateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateKey = this._alternateKey?.internalValue;
    }
    if (this._requiredClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredClaim = this._requiredClaim?.internalValue;
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
      this._alternateKey.internalValue = undefined;
      this._requiredClaim.internalValue = undefined;
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
      this._alternateKey.internalValue = value.alternateKey;
      this._requiredClaim.internalValue = value.requiredClaim;
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

  // alternate_key - computed: false, optional: true, required: false
  private _alternateKey = new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList(this, "alternate_key", false);
  public get alternateKey() {
    return this._alternateKey;
  }
  public putAlternateKey(value: MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[] | cdktf.IResolvable) {
    this._alternateKey.internalValue = value;
  }
  public resetAlternateKey() {
    this._alternateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateKeyInput() {
    return this._alternateKey.internalValue;
  }

  // required_claim - computed: false, optional: true, required: false
  private _requiredClaim = new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList(this, "required_claim", false);
  public get requiredClaim() {
    return this._requiredClaim;
  }
  public putRequiredClaim(value: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[] | cdktf.IResolvable) {
    this._requiredClaim.internalValue = value;
  }
  public resetRequiredClaim() {
    this._requiredClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimInput() {
    return this._requiredClaim.internalValue;
  }
}
export interface MediaContentKeyPolicyPolicyOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}
  */
  readonly clearKeyConfigurationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}
  */
  readonly openRestrictionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}
  */
  readonly playreadyResponseCustomData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}
  */
  readonly widevineConfigurationTemplate?: string;
  /**
  * fairplay_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#fairplay_configuration MediaContentKeyPolicy#fairplay_configuration}
  */
  readonly fairplayConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfiguration;
  /**
  * playready_configuration_license block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#playready_configuration_license MediaContentKeyPolicy#playready_configuration_license}
  */
  readonly playreadyConfigurationLicense?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[] | cdktf.IResolvable;
  /**
  * token_restriction block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#token_restriction MediaContentKeyPolicy#token_restriction}
  */
  readonly tokenRestriction?: MediaContentKeyPolicyPolicyOptionTokenRestriction;
}

export function mediaContentKeyPolicyPolicyOptionToTerraform(struct?: MediaContentKeyPolicyPolicyOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_key_configuration_enabled: cdktf.booleanToTerraform(struct!.clearKeyConfigurationEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    open_restriction_enabled: cdktf.booleanToTerraform(struct!.openRestrictionEnabled),
    playready_response_custom_data: cdktf.stringToTerraform(struct!.playreadyResponseCustomData),
    widevine_configuration_template: cdktf.stringToTerraform(struct!.widevineConfigurationTemplate),
    fairplay_configuration: mediaContentKeyPolicyPolicyOptionFairplayConfigurationToTerraform(struct!.fairplayConfiguration),
    playready_configuration_license: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseToTerraform, true)(struct!.playreadyConfigurationLicense),
    token_restriction: mediaContentKeyPolicyPolicyOptionTokenRestrictionToTerraform(struct!.tokenRestriction),
  }
}

export class MediaContentKeyPolicyPolicyOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaContentKeyPolicyPolicyOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearKeyConfigurationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearKeyConfigurationEnabled = this._clearKeyConfigurationEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._openRestrictionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.openRestrictionEnabled = this._openRestrictionEnabled;
    }
    if (this._playreadyResponseCustomData !== undefined) {
      hasAnyValues = true;
      internalValueResult.playreadyResponseCustomData = this._playreadyResponseCustomData;
    }
    if (this._widevineConfigurationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.widevineConfigurationTemplate = this._widevineConfigurationTemplate;
    }
    if (this._fairplayConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fairplayConfiguration = this._fairplayConfiguration?.internalValue;
    }
    if (this._playreadyConfigurationLicense?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playreadyConfigurationLicense = this._playreadyConfigurationLicense?.internalValue;
    }
    if (this._tokenRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRestriction = this._tokenRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaContentKeyPolicyPolicyOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearKeyConfigurationEnabled = undefined;
      this._name = undefined;
      this._openRestrictionEnabled = undefined;
      this._playreadyResponseCustomData = undefined;
      this._widevineConfigurationTemplate = undefined;
      this._fairplayConfiguration.internalValue = undefined;
      this._playreadyConfigurationLicense.internalValue = undefined;
      this._tokenRestriction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearKeyConfigurationEnabled = value.clearKeyConfigurationEnabled;
      this._name = value.name;
      this._openRestrictionEnabled = value.openRestrictionEnabled;
      this._playreadyResponseCustomData = value.playreadyResponseCustomData;
      this._widevineConfigurationTemplate = value.widevineConfigurationTemplate;
      this._fairplayConfiguration.internalValue = value.fairplayConfiguration;
      this._playreadyConfigurationLicense.internalValue = value.playreadyConfigurationLicense;
      this._tokenRestriction.internalValue = value.tokenRestriction;
    }
  }

  // clear_key_configuration_enabled - computed: false, optional: true, required: false
  private _clearKeyConfigurationEnabled?: boolean | cdktf.IResolvable; 
  public get clearKeyConfigurationEnabled() {
    return this.getBooleanAttribute('clear_key_configuration_enabled');
  }
  public set clearKeyConfigurationEnabled(value: boolean | cdktf.IResolvable) {
    this._clearKeyConfigurationEnabled = value;
  }
  public resetClearKeyConfigurationEnabled() {
    this._clearKeyConfigurationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearKeyConfigurationEnabledInput() {
    return this._clearKeyConfigurationEnabled;
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

  // open_restriction_enabled - computed: false, optional: true, required: false
  private _openRestrictionEnabled?: boolean | cdktf.IResolvable; 
  public get openRestrictionEnabled() {
    return this.getBooleanAttribute('open_restriction_enabled');
  }
  public set openRestrictionEnabled(value: boolean | cdktf.IResolvable) {
    this._openRestrictionEnabled = value;
  }
  public resetOpenRestrictionEnabled() {
    this._openRestrictionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRestrictionEnabledInput() {
    return this._openRestrictionEnabled;
  }

  // playready_response_custom_data - computed: false, optional: true, required: false
  private _playreadyResponseCustomData?: string; 
  public get playreadyResponseCustomData() {
    return this.getStringAttribute('playready_response_custom_data');
  }
  public set playreadyResponseCustomData(value: string) {
    this._playreadyResponseCustomData = value;
  }
  public resetPlayreadyResponseCustomData() {
    this._playreadyResponseCustomData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playreadyResponseCustomDataInput() {
    return this._playreadyResponseCustomData;
  }

  // widevine_configuration_template - computed: false, optional: true, required: false
  private _widevineConfigurationTemplate?: string; 
  public get widevineConfigurationTemplate() {
    return this.getStringAttribute('widevine_configuration_template');
  }
  public set widevineConfigurationTemplate(value: string) {
    this._widevineConfigurationTemplate = value;
  }
  public resetWidevineConfigurationTemplate() {
    this._widevineConfigurationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widevineConfigurationTemplateInput() {
    return this._widevineConfigurationTemplate;
  }

  // fairplay_configuration - computed: false, optional: true, required: false
  private _fairplayConfiguration = new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference(this, "fairplay_configuration");
  public get fairplayConfiguration() {
    return this._fairplayConfiguration;
  }
  public putFairplayConfiguration(value: MediaContentKeyPolicyPolicyOptionFairplayConfiguration) {
    this._fairplayConfiguration.internalValue = value;
  }
  public resetFairplayConfiguration() {
    this._fairplayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairplayConfigurationInput() {
    return this._fairplayConfiguration.internalValue;
  }

  // playready_configuration_license - computed: false, optional: true, required: false
  private _playreadyConfigurationLicense = new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList(this, "playready_configuration_license", false);
  public get playreadyConfigurationLicense() {
    return this._playreadyConfigurationLicense;
  }
  public putPlayreadyConfigurationLicense(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[] | cdktf.IResolvable) {
    this._playreadyConfigurationLicense.internalValue = value;
  }
  public resetPlayreadyConfigurationLicense() {
    this._playreadyConfigurationLicense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playreadyConfigurationLicenseInput() {
    return this._playreadyConfigurationLicense.internalValue;
  }

  // token_restriction - computed: false, optional: true, required: false
  private _tokenRestriction = new MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference(this, "token_restriction");
  public get tokenRestriction() {
    return this._tokenRestriction;
  }
  public putTokenRestriction(value: MediaContentKeyPolicyPolicyOptionTokenRestriction) {
    this._tokenRestriction.internalValue = value;
  }
  public resetTokenRestriction() {
    this._tokenRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRestrictionInput() {
    return this._tokenRestriction.internalValue;
  }
}

export class MediaContentKeyPolicyPolicyOptionList extends cdktf.ComplexList {
  public internalValue? : MediaContentKeyPolicyPolicyOption[] | cdktf.IResolvable

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
  public get(index: number): MediaContentKeyPolicyPolicyOptionOutputReference {
    return new MediaContentKeyPolicyPolicyOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaContentKeyPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}
  */
  readonly update?: string;
}

export function mediaContentKeyPolicyTimeoutsToTerraform(struct?: MediaContentKeyPolicyTimeouts | cdktf.IResolvable): any {
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

export class MediaContentKeyPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaContentKeyPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaContentKeyPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy azurerm_media_content_key_policy}
*/
export class MediaContentKeyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_content_key_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_content_key_policy azurerm_media_content_key_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaContentKeyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MediaContentKeyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_content_key_policy',
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
    this._description = config.description;
    this._id = config.id;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._policyOption.internalValue = config.policyOption;
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

  // policy_option - computed: false, optional: false, required: true
  private _policyOption = new MediaContentKeyPolicyPolicyOptionList(this, "policy_option", true);
  public get policyOption() {
    return this._policyOption;
  }
  public putPolicyOption(value: MediaContentKeyPolicyPolicyOption[] | cdktf.IResolvable) {
    this._policyOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionInput() {
    return this._policyOption.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaContentKeyPolicyTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      policy_option: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionToTerraform, true)(this._policyOption.internalValue),
      timeouts: mediaContentKeyPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
