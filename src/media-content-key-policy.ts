// https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaContentKeyPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly mediaServicesAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** policy_option block */
  readonly policyOption: MediaContentKeyPolicyPolicyOption[];
  /** timeouts block */
  readonly timeouts?: MediaContentKeyPolicyTimeouts;
}
export interface MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration {
  readonly playbackDurationSeconds?: number;
  readonly storageDurationSeconds?: number;
}

function mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    playback_duration_seconds: cdktf.numberToTerraform(struct!.playbackDurationSeconds),
    storage_duration_seconds: cdktf.numberToTerraform(struct!.storageDurationSeconds),
  }
}

export interface MediaContentKeyPolicyPolicyOptionFairplayConfiguration {
  readonly ask?: string;
  readonly pfx?: string;
  readonly pfxPassword?: string;
  readonly rentalAndLeaseKeyType?: string;
  readonly rentalDurationSeconds?: number;
  /** offline_rental_configuration block */
  readonly offlineRentalConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration[];
}

function mediaContentKeyPolicyPolicyOptionFairplayConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ask: cdktf.stringToTerraform(struct!.ask),
    pfx: cdktf.stringToTerraform(struct!.pfx),
    pfx_password: cdktf.stringToTerraform(struct!.pfxPassword),
    rental_and_lease_key_type: cdktf.stringToTerraform(struct!.rentalAndLeaseKeyType),
    rental_duration_seconds: cdktf.numberToTerraform(struct!.rentalDurationSeconds),
    offline_rental_configuration: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationToTerraform)(struct!.offlineRentalConfiguration),
  }
}

export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight {
  readonly agcAndColorStripeRestriction?: number;
  readonly allowPassingVideoContentToUnknownOutput?: string;
  readonly analogVideoOpl?: number;
  readonly compressedDigitalAudioOpl?: number;
  readonly digitalVideoOnlyContentRestriction?: boolean;
  readonly firstPlayExpiration?: string;
  readonly imageConstraintForAnalogComponentVideoRestriction?: boolean;
  readonly imageConstraintForAnalogComputerMonitorRestriction?: boolean;
  readonly scmsRestriction?: number;
  readonly uncompressedDigitalAudioOpl?: number;
  readonly uncompressedDigitalVideoOpl?: number;
}

function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense {
  readonly allowTestDevices?: boolean;
  readonly beginDate?: string;
  readonly contentKeyLocationFromHeaderEnabled?: boolean;
  readonly contentKeyLocationFromKeyId?: string;
  readonly contentType?: string;
  readonly expirationDate?: string;
  readonly gracePeriod?: string;
  readonly licenseType?: string;
  readonly relativeBeginDate?: string;
  readonly relativeExpirationDate?: string;
  /** play_right block */
  readonly playRight?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight[];
}

function mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseToTerraform(struct?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    play_right: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightToTerraform)(struct!.playRight),
  }
}

export interface MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim {
  readonly type?: string;
  readonly value?: string;
}

function mediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface MediaContentKeyPolicyPolicyOptionTokenRestriction {
  readonly audience?: string;
  readonly issuer?: string;
  readonly openIdConnectDiscoveryDocument?: string;
  readonly primaryRsaTokenKeyExponent?: string;
  readonly primaryRsaTokenKeyModulus?: string;
  readonly primarySymmetricTokenKey?: string;
  readonly primaryX509TokenKeyRaw?: string;
  readonly tokenType?: string;
  /** required_claim block */
  readonly requiredClaim?: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[];
}

function mediaContentKeyPolicyPolicyOptionTokenRestrictionToTerraform(struct?: MediaContentKeyPolicyPolicyOptionTokenRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface MediaContentKeyPolicyPolicyOption {
  readonly clearKeyConfigurationEnabled?: boolean;
  readonly name: string;
  readonly openRestrictionEnabled?: boolean;
  readonly widevineConfigurationTemplate?: string;
  /** fairplay_configuration block */
  readonly fairplayConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfiguration[];
  /** playready_configuration_license block */
  readonly playreadyConfigurationLicense?: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[];
  /** token_restriction block */
  readonly tokenRestriction?: MediaContentKeyPolicyPolicyOptionTokenRestriction[];
}

function mediaContentKeyPolicyPolicyOptionToTerraform(struct?: MediaContentKeyPolicyPolicyOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_key_configuration_enabled: cdktf.booleanToTerraform(struct!.clearKeyConfigurationEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    open_restriction_enabled: cdktf.booleanToTerraform(struct!.openRestrictionEnabled),
    widevine_configuration_template: cdktf.stringToTerraform(struct!.widevineConfigurationTemplate),
    fairplay_configuration: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionFairplayConfigurationToTerraform)(struct!.fairplayConfiguration),
    playready_configuration_license: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseToTerraform)(struct!.playreadyConfigurationLicense),
    token_restriction: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionTokenRestrictionToTerraform)(struct!.tokenRestriction),
  }
}

export interface MediaContentKeyPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mediaContentKeyPolicyTimeoutsToTerraform(struct?: MediaContentKeyPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MediaContentKeyPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // policy_option - computed: false, optional: false, required: true
  private _policyOption: MediaContentKeyPolicyPolicyOption[];
  public get policyOption() {
    return this.interpolationForAttribute('policy_option') as any;
  }
  public set policyOption(value: MediaContentKeyPolicyPolicyOption[]) {
    this._policyOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionInput() {
    return this._policyOption
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaContentKeyPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaContentKeyPolicyTimeouts ) {
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
      policy_option: cdktf.listMapper(mediaContentKeyPolicyPolicyOptionToTerraform)(this._policyOption),
      timeouts: mediaContentKeyPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
