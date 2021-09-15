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

function mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationToTerraform(struct?: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    playback_duration_seconds: cdktf.numberToTerraform(struct!.playbackDurationSeconds),
    storage_duration_seconds: cdktf.numberToTerraform(struct!.storageDurationSeconds),
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#type MediaContentKeyPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_content_key_policy.html#value MediaContentKeyPolicy#value}
  */
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
  readonly fairplayConfiguration?: MediaContentKeyPolicyPolicyOptionFairplayConfiguration[];
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

function mediaContentKeyPolicyTimeoutsToTerraform(struct?: MediaContentKeyPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
