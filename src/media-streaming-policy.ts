// https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}
  */
  readonly defaultContentKeyPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#media_services_account_name MediaStreamingPolicy#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#name MediaStreamingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#resource_group_name MediaStreamingPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * common_encryption_cbcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}
  */
  readonly commonEncryptionCbcs?: MediaStreamingPolicyCommonEncryptionCbcs;
  /**
  * common_encryption_cenc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}
  */
  readonly commonEncryptionCenc?: MediaStreamingPolicyCommonEncryptionCenc;
  /**
  * no_encryption_enabled_protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}
  */
  readonly noEncryptionEnabledProtocols?: MediaStreamingPolicyNoEncryptionEnabledProtocols;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#timeouts MediaStreamingPolicy#timeouts}
  */
  readonly timeouts?: MediaStreamingPolicyTimeouts;
}
export interface MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#label MediaStreamingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#policy_name MediaStreamingPolicy#policy_name}
  */
  readonly policyName?: string;
}

function mediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference | MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}

export class MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // label - computed: false, optional: true, required: false
  private _label?: string | undefined; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string | undefined) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string | undefined; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string | undefined) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }
}
export interface MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}
  */
  readonly allowPersistentLicense?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}
  */
  readonly customLicenseAcquisitionUrlTemplate?: string;
}

function mediaStreamingPolicyCommonEncryptionCbcsDrmFairplayToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference | MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_persistent_license: cdktf.booleanToTerraform(struct!.allowPersistentLicense),
    custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.customLicenseAcquisitionUrlTemplate),
  }
}

export class MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_persistent_license - computed: false, optional: true, required: false
  private _allowPersistentLicense?: boolean | cdktf.IResolvable | undefined; 
  public get allowPersistentLicense() {
    return this.getBooleanAttribute('allow_persistent_license') as any;
  }
  public set allowPersistentLicense(value: boolean | cdktf.IResolvable | undefined) {
    this._allowPersistentLicense = value;
  }
  public resetAllowPersistentLicense() {
    this._allowPersistentLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPersistentLicenseInput() {
    return this._allowPersistentLicense
  }

  // custom_license_acquisition_url_template - computed: false, optional: true, required: false
  private _customLicenseAcquisitionUrlTemplate?: string | undefined; 
  public get customLicenseAcquisitionUrlTemplate() {
    return this.getStringAttribute('custom_license_acquisition_url_template');
  }
  public set customLicenseAcquisitionUrlTemplate(value: string | undefined) {
    this._customLicenseAcquisitionUrlTemplate = value;
  }
  public resetCustomLicenseAcquisitionUrlTemplate() {
    this._customLicenseAcquisitionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLicenseAcquisitionUrlTemplateInput() {
    return this._customLicenseAcquisitionUrlTemplate
  }
}
export interface MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#dash MediaStreamingPolicy#dash}
  */
  readonly dash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#download MediaStreamingPolicy#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#hls MediaStreamingPolicy#hls}
  */
  readonly hls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#smooth_streaming MediaStreamingPolicy#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
}

function mediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference | MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash: cdktf.booleanToTerraform(struct!.dash),
    download: cdktf.booleanToTerraform(struct!.download),
    hls: cdktf.booleanToTerraform(struct!.hls),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
  }
}

export class MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dash - computed: false, optional: true, required: false
  private _dash?: boolean | cdktf.IResolvable | undefined; 
  public get dash() {
    return this.getBooleanAttribute('dash') as any;
  }
  public set dash(value: boolean | cdktf.IResolvable | undefined) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable | undefined; 
  public get download() {
    return this.getBooleanAttribute('download') as any;
  }
  public set download(value: boolean | cdktf.IResolvable | undefined) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download
  }

  // hls - computed: false, optional: true, required: false
  private _hls?: boolean | cdktf.IResolvable | undefined; 
  public get hls() {
    return this.getBooleanAttribute('hls') as any;
  }
  public set hls(value: boolean | cdktf.IResolvable | undefined) {
    this._hls = value;
  }
  public resetHls() {
    this._hls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInput() {
    return this._hls
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable | undefined; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming') as any;
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable | undefined) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming
  }
}
export interface MediaStreamingPolicyCommonEncryptionCbcs {
  /**
  * default_content_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#default_content_key MediaStreamingPolicy#default_content_key}
  */
  readonly defaultContentKey?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey;
  /**
  * drm_fairplay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#drm_fairplay MediaStreamingPolicy#drm_fairplay}
  */
  readonly drmFairplay?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay;
  /**
  * enabled_protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#enabled_protocols MediaStreamingPolicy#enabled_protocols}
  */
  readonly enabledProtocols?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols;
}

function mediaStreamingPolicyCommonEncryptionCbcsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsOutputReference | MediaStreamingPolicyCommonEncryptionCbcs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_content_key: mediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyToTerraform(struct!.defaultContentKey),
    drm_fairplay: mediaStreamingPolicyCommonEncryptionCbcsDrmFairplayToTerraform(struct!.drmFairplay),
    enabled_protocols: mediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsToTerraform(struct!.enabledProtocols),
  }
}

export class MediaStreamingPolicyCommonEncryptionCbcsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_content_key - computed: false, optional: true, required: false
  private _defaultContentKey?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey | undefined; 
  private __defaultContentKeyOutput = new MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference(this as any, "default_content_key", true);
  public get defaultContentKey() {
    return this.__defaultContentKeyOutput;
  }
  public putDefaultContentKey(value: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey | undefined) {
    this._defaultContentKey = value;
  }
  public resetDefaultContentKey() {
    this._defaultContentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentKeyInput() {
    return this._defaultContentKey
  }

  // drm_fairplay - computed: false, optional: true, required: false
  private _drmFairplay?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay | undefined; 
  private __drmFairplayOutput = new MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference(this as any, "drm_fairplay", true);
  public get drmFairplay() {
    return this.__drmFairplayOutput;
  }
  public putDrmFairplay(value: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay | undefined) {
    this._drmFairplay = value;
  }
  public resetDrmFairplay() {
    this._drmFairplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmFairplayInput() {
    return this._drmFairplay
  }

  // enabled_protocols - computed: false, optional: true, required: false
  private _enabledProtocols?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols | undefined; 
  private __enabledProtocolsOutput = new MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference(this as any, "enabled_protocols", true);
  public get enabledProtocols() {
    return this.__enabledProtocolsOutput;
  }
  public putEnabledProtocols(value: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols | undefined) {
    this._enabledProtocols = value;
  }
  public resetEnabledProtocols() {
    this._enabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProtocolsInput() {
    return this._enabledProtocols
  }
}
export interface MediaStreamingPolicyCommonEncryptionCencDefaultContentKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#label MediaStreamingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#policy_name MediaStreamingPolicy#policy_name}
  */
  readonly policyName?: string;
}

function mediaStreamingPolicyCommonEncryptionCencDefaultContentKeyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference | MediaStreamingPolicyCommonEncryptionCencDefaultContentKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}

export class MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // label - computed: false, optional: true, required: false
  private _label?: string | undefined; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string | undefined) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string | undefined; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string | undefined) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }
}
export interface MediaStreamingPolicyCommonEncryptionCencDrmPlayready {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#custom_attributes MediaStreamingPolicy#custom_attributes}
  */
  readonly customAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}
  */
  readonly customLicenseAcquisitionUrlTemplate?: string;
}

function mediaStreamingPolicyCommonEncryptionCencDrmPlayreadyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference | MediaStreamingPolicyCommonEncryptionCencDrmPlayready): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attributes: cdktf.stringToTerraform(struct!.customAttributes),
    custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.customLicenseAcquisitionUrlTemplate),
  }
}

export class MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: string | undefined; 
  public get customAttributes() {
    return this.getStringAttribute('custom_attributes');
  }
  public set customAttributes(value: string | undefined) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes
  }

  // custom_license_acquisition_url_template - computed: false, optional: true, required: false
  private _customLicenseAcquisitionUrlTemplate?: string | undefined; 
  public get customLicenseAcquisitionUrlTemplate() {
    return this.getStringAttribute('custom_license_acquisition_url_template');
  }
  public set customLicenseAcquisitionUrlTemplate(value: string | undefined) {
    this._customLicenseAcquisitionUrlTemplate = value;
  }
  public resetCustomLicenseAcquisitionUrlTemplate() {
    this._customLicenseAcquisitionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLicenseAcquisitionUrlTemplateInput() {
    return this._customLicenseAcquisitionUrlTemplate
  }
}
export interface MediaStreamingPolicyCommonEncryptionCencEnabledProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#dash MediaStreamingPolicy#dash}
  */
  readonly dash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#download MediaStreamingPolicy#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#hls MediaStreamingPolicy#hls}
  */
  readonly hls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#smooth_streaming MediaStreamingPolicy#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
}

function mediaStreamingPolicyCommonEncryptionCencEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference | MediaStreamingPolicyCommonEncryptionCencEnabledProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash: cdktf.booleanToTerraform(struct!.dash),
    download: cdktf.booleanToTerraform(struct!.download),
    hls: cdktf.booleanToTerraform(struct!.hls),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
  }
}

export class MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dash - computed: false, optional: true, required: false
  private _dash?: boolean | cdktf.IResolvable | undefined; 
  public get dash() {
    return this.getBooleanAttribute('dash') as any;
  }
  public set dash(value: boolean | cdktf.IResolvable | undefined) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable | undefined; 
  public get download() {
    return this.getBooleanAttribute('download') as any;
  }
  public set download(value: boolean | cdktf.IResolvable | undefined) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download
  }

  // hls - computed: false, optional: true, required: false
  private _hls?: boolean | cdktf.IResolvable | undefined; 
  public get hls() {
    return this.getBooleanAttribute('hls') as any;
  }
  public set hls(value: boolean | cdktf.IResolvable | undefined) {
    this._hls = value;
  }
  public resetHls() {
    this._hls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInput() {
    return this._hls
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable | undefined; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming') as any;
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable | undefined) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming
  }
}
export interface MediaStreamingPolicyCommonEncryptionCenc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}
  */
  readonly drmWidevineCustomLicenseAcquisitionUrlTemplate?: string;
  /**
  * default_content_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#default_content_key MediaStreamingPolicy#default_content_key}
  */
  readonly defaultContentKey?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey;
  /**
  * drm_playready block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#drm_playready MediaStreamingPolicy#drm_playready}
  */
  readonly drmPlayready?: MediaStreamingPolicyCommonEncryptionCencDrmPlayready;
  /**
  * enabled_protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#enabled_protocols MediaStreamingPolicy#enabled_protocols}
  */
  readonly enabledProtocols?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols;
}

function mediaStreamingPolicyCommonEncryptionCencToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencOutputReference | MediaStreamingPolicyCommonEncryptionCenc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drm_widevine_custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.drmWidevineCustomLicenseAcquisitionUrlTemplate),
    default_content_key: mediaStreamingPolicyCommonEncryptionCencDefaultContentKeyToTerraform(struct!.defaultContentKey),
    drm_playready: mediaStreamingPolicyCommonEncryptionCencDrmPlayreadyToTerraform(struct!.drmPlayready),
    enabled_protocols: mediaStreamingPolicyCommonEncryptionCencEnabledProtocolsToTerraform(struct!.enabledProtocols),
  }
}

export class MediaStreamingPolicyCommonEncryptionCencOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // drm_widevine_custom_license_acquisition_url_template - computed: false, optional: true, required: false
  private _drmWidevineCustomLicenseAcquisitionUrlTemplate?: string | undefined; 
  public get drmWidevineCustomLicenseAcquisitionUrlTemplate() {
    return this.getStringAttribute('drm_widevine_custom_license_acquisition_url_template');
  }
  public set drmWidevineCustomLicenseAcquisitionUrlTemplate(value: string | undefined) {
    this._drmWidevineCustomLicenseAcquisitionUrlTemplate = value;
  }
  public resetDrmWidevineCustomLicenseAcquisitionUrlTemplate() {
    this._drmWidevineCustomLicenseAcquisitionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmWidevineCustomLicenseAcquisitionUrlTemplateInput() {
    return this._drmWidevineCustomLicenseAcquisitionUrlTemplate
  }

  // default_content_key - computed: false, optional: true, required: false
  private _defaultContentKey?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey | undefined; 
  private __defaultContentKeyOutput = new MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference(this as any, "default_content_key", true);
  public get defaultContentKey() {
    return this.__defaultContentKeyOutput;
  }
  public putDefaultContentKey(value: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey | undefined) {
    this._defaultContentKey = value;
  }
  public resetDefaultContentKey() {
    this._defaultContentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentKeyInput() {
    return this._defaultContentKey
  }

  // drm_playready - computed: false, optional: true, required: false
  private _drmPlayready?: MediaStreamingPolicyCommonEncryptionCencDrmPlayready | undefined; 
  private __drmPlayreadyOutput = new MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference(this as any, "drm_playready", true);
  public get drmPlayready() {
    return this.__drmPlayreadyOutput;
  }
  public putDrmPlayready(value: MediaStreamingPolicyCommonEncryptionCencDrmPlayready | undefined) {
    this._drmPlayready = value;
  }
  public resetDrmPlayready() {
    this._drmPlayready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmPlayreadyInput() {
    return this._drmPlayready
  }

  // enabled_protocols - computed: false, optional: true, required: false
  private _enabledProtocols?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols | undefined; 
  private __enabledProtocolsOutput = new MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference(this as any, "enabled_protocols", true);
  public get enabledProtocols() {
    return this.__enabledProtocolsOutput;
  }
  public putEnabledProtocols(value: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols | undefined) {
    this._enabledProtocols = value;
  }
  public resetEnabledProtocols() {
    this._enabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProtocolsInput() {
    return this._enabledProtocols
  }
}
export interface MediaStreamingPolicyNoEncryptionEnabledProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#dash MediaStreamingPolicy#dash}
  */
  readonly dash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#download MediaStreamingPolicy#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#hls MediaStreamingPolicy#hls}
  */
  readonly hls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#smooth_streaming MediaStreamingPolicy#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
}

function mediaStreamingPolicyNoEncryptionEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference | MediaStreamingPolicyNoEncryptionEnabledProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash: cdktf.booleanToTerraform(struct!.dash),
    download: cdktf.booleanToTerraform(struct!.download),
    hls: cdktf.booleanToTerraform(struct!.hls),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
  }
}

export class MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dash - computed: false, optional: true, required: false
  private _dash?: boolean | cdktf.IResolvable | undefined; 
  public get dash() {
    return this.getBooleanAttribute('dash') as any;
  }
  public set dash(value: boolean | cdktf.IResolvable | undefined) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable | undefined; 
  public get download() {
    return this.getBooleanAttribute('download') as any;
  }
  public set download(value: boolean | cdktf.IResolvable | undefined) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download
  }

  // hls - computed: false, optional: true, required: false
  private _hls?: boolean | cdktf.IResolvable | undefined; 
  public get hls() {
    return this.getBooleanAttribute('hls') as any;
  }
  public set hls(value: boolean | cdktf.IResolvable | undefined) {
    this._hls = value;
  }
  public resetHls() {
    this._hls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInput() {
    return this._hls
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable | undefined; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming') as any;
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable | undefined) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming
  }
}
export interface MediaStreamingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#create MediaStreamingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#delete MediaStreamingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html#read MediaStreamingPolicy#read}
  */
  readonly read?: string;
}

function mediaStreamingPolicyTimeoutsToTerraform(struct?: MediaStreamingPolicyTimeoutsOutputReference | MediaStreamingPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class MediaStreamingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html azurerm_media_streaming_policy}
*/
export class MediaStreamingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_streaming_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy.html azurerm_media_streaming_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaStreamingPolicyConfig
  */
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
  private _defaultContentKeyPolicyName?: string | undefined; 
  public get defaultContentKeyPolicyName() {
    return this.getStringAttribute('default_content_key_policy_name');
  }
  public set defaultContentKeyPolicyName(value: string | undefined) {
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
  private _mediaServicesAccountName?: string; 
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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _commonEncryptionCbcs?: MediaStreamingPolicyCommonEncryptionCbcs | undefined; 
  private __commonEncryptionCbcsOutput = new MediaStreamingPolicyCommonEncryptionCbcsOutputReference(this as any, "common_encryption_cbcs", true);
  public get commonEncryptionCbcs() {
    return this.__commonEncryptionCbcsOutput;
  }
  public putCommonEncryptionCbcs(value: MediaStreamingPolicyCommonEncryptionCbcs | undefined) {
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
  private _commonEncryptionCenc?: MediaStreamingPolicyCommonEncryptionCenc | undefined; 
  private __commonEncryptionCencOutput = new MediaStreamingPolicyCommonEncryptionCencOutputReference(this as any, "common_encryption_cenc", true);
  public get commonEncryptionCenc() {
    return this.__commonEncryptionCencOutput;
  }
  public putCommonEncryptionCenc(value: MediaStreamingPolicyCommonEncryptionCenc | undefined) {
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
  private _noEncryptionEnabledProtocols?: MediaStreamingPolicyNoEncryptionEnabledProtocols | undefined; 
  private __noEncryptionEnabledProtocolsOutput = new MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference(this as any, "no_encryption_enabled_protocols", true);
  public get noEncryptionEnabledProtocols() {
    return this.__noEncryptionEnabledProtocolsOutput;
  }
  public putNoEncryptionEnabledProtocols(value: MediaStreamingPolicyNoEncryptionEnabledProtocols | undefined) {
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
  private _timeouts?: MediaStreamingPolicyTimeouts | undefined; 
  private __timeoutsOutput = new MediaStreamingPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaStreamingPolicyTimeouts | undefined) {
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
      common_encryption_cbcs: mediaStreamingPolicyCommonEncryptionCbcsToTerraform(this._commonEncryptionCbcs),
      common_encryption_cenc: mediaStreamingPolicyCommonEncryptionCencToTerraform(this._commonEncryptionCenc),
      no_encryption_enabled_protocols: mediaStreamingPolicyNoEncryptionEnabledProtocolsToTerraform(this._noEncryptionEnabledProtocols),
      timeouts: mediaStreamingPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
