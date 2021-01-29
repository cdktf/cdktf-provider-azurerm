// https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly defaultContentKeyPolicyName?: string;
  readonly mediaServicesAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** common_encryption_cbcs block */
  readonly commonEncryptionCbcs?: MediaStreamingPolicyCommonEncryptionCbcs[];
  /** common_encryption_cenc block */
  readonly commonEncryptionCenc?: MediaStreamingPolicyCommonEncryptionCenc[];
  /** no_encryption_enabled_protocols block */
  readonly noEncryptionEnabledProtocols?: MediaStreamingPolicyNoEncryptionEnabledProtocols[];
  /** timeouts block */
  readonly timeouts?: MediaStreamingPolicyTimeouts;
}
export interface MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey {
  readonly label?: string;
  readonly policyName?: string;
}

function mediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay {
  readonly allowPersistentLicense?: boolean;
  readonly customLicenseAcquisitionUrlTemplate?: string;
}

function mediaStreamingPolicyCommonEncryptionCbcsDrmFairplayToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_persistent_license: cdktf.booleanToTerraform(struct!.allowPersistentLicense),
    custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.customLicenseAcquisitionUrlTemplate),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols {
  readonly dash?: boolean;
  readonly download?: boolean;
  readonly hls?: boolean;
  readonly smoothStreaming?: boolean;
}

function mediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dash: cdktf.booleanToTerraform(struct!.dash),
    download: cdktf.booleanToTerraform(struct!.download),
    hls: cdktf.booleanToTerraform(struct!.hls),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCbcs {
  /** default_content_key block */
  readonly defaultContentKey?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey[];
  /** drm_fairplay block */
  readonly drmFairplay?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay[];
  /** enabled_protocols block */
  readonly enabledProtocols?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols[];
}

function mediaStreamingPolicyCommonEncryptionCbcsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_content_key: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyToTerraform)(struct!.defaultContentKey),
    drm_fairplay: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCbcsDrmFairplayToTerraform)(struct!.drmFairplay),
    enabled_protocols: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsToTerraform)(struct!.enabledProtocols),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCencDefaultContentKey {
  readonly label?: string;
  readonly policyName?: string;
}

function mediaStreamingPolicyCommonEncryptionCencDefaultContentKeyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCencDrmPlayready {
  readonly customAttributes?: string;
  readonly customLicenseAcquisitionUrlTemplate?: string;
}

function mediaStreamingPolicyCommonEncryptionCencDrmPlayreadyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencDrmPlayready): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_attributes: cdktf.stringToTerraform(struct!.customAttributes),
    custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.customLicenseAcquisitionUrlTemplate),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCencEnabledProtocols {
  readonly dash?: boolean;
  readonly download?: boolean;
  readonly hls?: boolean;
  readonly smoothStreaming?: boolean;
}

function mediaStreamingPolicyCommonEncryptionCencEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dash: cdktf.booleanToTerraform(struct!.dash),
    download: cdktf.booleanToTerraform(struct!.download),
    hls: cdktf.booleanToTerraform(struct!.hls),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
  }
}

export interface MediaStreamingPolicyCommonEncryptionCenc {
  readonly drmWidevineCustomLicenseAcquisitionUrlTemplate?: string;
  /** default_content_key block */
  readonly defaultContentKey?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey[];
  /** drm_playready block */
  readonly drmPlayready?: MediaStreamingPolicyCommonEncryptionCencDrmPlayready[];
  /** enabled_protocols block */
  readonly enabledProtocols?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols[];
}

function mediaStreamingPolicyCommonEncryptionCencToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCenc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    drm_widevine_custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.drmWidevineCustomLicenseAcquisitionUrlTemplate),
    default_content_key: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCencDefaultContentKeyToTerraform)(struct!.defaultContentKey),
    drm_playready: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCencDrmPlayreadyToTerraform)(struct!.drmPlayready),
    enabled_protocols: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCencEnabledProtocolsToTerraform)(struct!.enabledProtocols),
  }
}

export interface MediaStreamingPolicyNoEncryptionEnabledProtocols {
  readonly dash?: boolean;
  readonly download?: boolean;
  readonly hls?: boolean;
  readonly smoothStreaming?: boolean;
}

function mediaStreamingPolicyNoEncryptionEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyNoEncryptionEnabledProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dash: cdktf.booleanToTerraform(struct!.dash),
    download: cdktf.booleanToTerraform(struct!.download),
    hls: cdktf.booleanToTerraform(struct!.hls),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
  }
}

export interface MediaStreamingPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function mediaStreamingPolicyTimeoutsToTerraform(struct?: MediaStreamingPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class MediaStreamingPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MediaStreamingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_streaming_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultContentKeyPolicyName = config.defaultContentKeyPolicyName;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._commonEncryptionCbcs = config.commonEncryptionCbcs;
    this._commonEncryptionCenc = config.commonEncryptionCenc;
    this._noEncryptionEnabledProtocols = config.noEncryptionEnabledProtocols;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_content_key_policy_name - computed: false, optional: true, required: false
  private _defaultContentKeyPolicyName?: string;
  public get defaultContentKeyPolicyName() {
    return this.getStringAttribute('default_content_key_policy_name');
  }
  public set defaultContentKeyPolicyName(value: string ) {
    this._defaultContentKeyPolicyName = value;
  }
  public resetDefaultContentKeyPolicyName() {
    this._defaultContentKeyPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentKeyPolicyNameInput() {
    return this._defaultContentKeyPolicyName
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

  // common_encryption_cbcs - computed: false, optional: true, required: false
  private _commonEncryptionCbcs?: MediaStreamingPolicyCommonEncryptionCbcs[];
  public get commonEncryptionCbcs() {
    return this.interpolationForAttribute('common_encryption_cbcs') as any;
  }
  public set commonEncryptionCbcs(value: MediaStreamingPolicyCommonEncryptionCbcs[] ) {
    this._commonEncryptionCbcs = value;
  }
  public resetCommonEncryptionCbcs() {
    this._commonEncryptionCbcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEncryptionCbcsInput() {
    return this._commonEncryptionCbcs
  }

  // common_encryption_cenc - computed: false, optional: true, required: false
  private _commonEncryptionCenc?: MediaStreamingPolicyCommonEncryptionCenc[];
  public get commonEncryptionCenc() {
    return this.interpolationForAttribute('common_encryption_cenc') as any;
  }
  public set commonEncryptionCenc(value: MediaStreamingPolicyCommonEncryptionCenc[] ) {
    this._commonEncryptionCenc = value;
  }
  public resetCommonEncryptionCenc() {
    this._commonEncryptionCenc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEncryptionCencInput() {
    return this._commonEncryptionCenc
  }

  // no_encryption_enabled_protocols - computed: false, optional: true, required: false
  private _noEncryptionEnabledProtocols?: MediaStreamingPolicyNoEncryptionEnabledProtocols[];
  public get noEncryptionEnabledProtocols() {
    return this.interpolationForAttribute('no_encryption_enabled_protocols') as any;
  }
  public set noEncryptionEnabledProtocols(value: MediaStreamingPolicyNoEncryptionEnabledProtocols[] ) {
    this._noEncryptionEnabledProtocols = value;
  }
  public resetNoEncryptionEnabledProtocols() {
    this._noEncryptionEnabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEncryptionEnabledProtocolsInput() {
    return this._noEncryptionEnabledProtocols
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaStreamingPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaStreamingPolicyTimeouts ) {
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
      default_content_key_policy_name: cdktf.stringToTerraform(this._defaultContentKeyPolicyName),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      common_encryption_cbcs: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCbcsToTerraform)(this._commonEncryptionCbcs),
      common_encryption_cenc: cdktf.listMapper(mediaStreamingPolicyCommonEncryptionCencToTerraform)(this._commonEncryptionCenc),
      no_encryption_enabled_protocols: cdktf.listMapper(mediaStreamingPolicyNoEncryptionEnabledProtocolsToTerraform)(this._noEncryptionEnabledProtocols),
      timeouts: mediaStreamingPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
