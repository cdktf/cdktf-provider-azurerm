// https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}
  */
  readonly defaultContentKeyPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#id MediaStreamingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#name MediaStreamingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * common_encryption_cbcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}
  */
  readonly commonEncryptionCbcs?: MediaStreamingPolicyCommonEncryptionCbcs;
  /**
  * common_encryption_cenc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}
  */
  readonly commonEncryptionCenc?: MediaStreamingPolicyCommonEncryptionCenc;
  /**
  * no_encryption_enabled_protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}
  */
  readonly noEncryptionEnabledProtocols?: MediaStreamingPolicyNoEncryptionEnabledProtocols;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#timeouts MediaStreamingPolicy#timeouts}
  */
  readonly timeouts?: MediaStreamingPolicyTimeouts;
}
export interface MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}
  */
  readonly policyName?: string;
}

export function mediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference | MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}

export class MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._policyName = value.policyName;
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

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}
  */
  readonly allowPersistentLicense?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}
  */
  readonly customLicenseAcquisitionUrlTemplate?: string;
}

export function mediaStreamingPolicyCommonEncryptionCbcsDrmFairplayToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference | MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_persistent_license: cdktf.booleanToTerraform(struct!.allowPersistentLicense),
    custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.customLicenseAcquisitionUrlTemplate),
  }
}

export class MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPersistentLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPersistentLicense = this._allowPersistentLicense;
    }
    if (this._customLicenseAcquisitionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLicenseAcquisitionUrlTemplate = this._customLicenseAcquisitionUrlTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPersistentLicense = undefined;
      this._customLicenseAcquisitionUrlTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPersistentLicense = value.allowPersistentLicense;
      this._customLicenseAcquisitionUrlTemplate = value.customLicenseAcquisitionUrlTemplate;
    }
  }

  // allow_persistent_license - computed: false, optional: true, required: false
  private _allowPersistentLicense?: boolean | cdktf.IResolvable; 
  public get allowPersistentLicense() {
    return this.getBooleanAttribute('allow_persistent_license');
  }
  public set allowPersistentLicense(value: boolean | cdktf.IResolvable) {
    this._allowPersistentLicense = value;
  }
  public resetAllowPersistentLicense() {
    this._allowPersistentLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPersistentLicenseInput() {
    return this._allowPersistentLicense;
  }

  // custom_license_acquisition_url_template - computed: false, optional: true, required: false
  private _customLicenseAcquisitionUrlTemplate?: string; 
  public get customLicenseAcquisitionUrlTemplate() {
    return this.getStringAttribute('custom_license_acquisition_url_template');
  }
  public set customLicenseAcquisitionUrlTemplate(value: string) {
    this._customLicenseAcquisitionUrlTemplate = value;
  }
  public resetCustomLicenseAcquisitionUrlTemplate() {
    this._customLicenseAcquisitionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLicenseAcquisitionUrlTemplateInput() {
    return this._customLicenseAcquisitionUrlTemplate;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}
  */
  readonly dash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}
  */
  readonly hls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
}

export function mediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference | MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dash !== undefined) {
      hasAnyValues = true;
      internalValueResult.dash = this._dash;
    }
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._hls !== undefined) {
      hasAnyValues = true;
      internalValueResult.hls = this._hls;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dash = undefined;
      this._download = undefined;
      this._hls = undefined;
      this._smoothStreaming = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dash = value.dash;
      this._download = value.download;
      this._hls = value.hls;
      this._smoothStreaming = value.smoothStreaming;
    }
  }

  // dash - computed: false, optional: true, required: false
  private _dash?: boolean | cdktf.IResolvable; 
  public get dash() {
    return this.getBooleanAttribute('dash');
  }
  public set dash(value: boolean | cdktf.IResolvable) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash;
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable; 
  public get download() {
    return this.getBooleanAttribute('download');
  }
  public set download(value: boolean | cdktf.IResolvable) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // hls - computed: false, optional: true, required: false
  private _hls?: boolean | cdktf.IResolvable; 
  public get hls() {
    return this.getBooleanAttribute('hls');
  }
  public set hls(value: boolean | cdktf.IResolvable) {
    this._hls = value;
  }
  public resetHls() {
    this._hls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInput() {
    return this._hls;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCbcs {
  /**
  * default_content_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}
  */
  readonly defaultContentKey?: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey;
  /**
  * drm_fairplay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_fairplay MediaStreamingPolicy#drm_fairplay}
  */
  readonly drmFairplay?: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay;
  /**
  * enabled_protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}
  */
  readonly enabledProtocols?: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols;
}

export function mediaStreamingPolicyCommonEncryptionCbcsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCbcsOutputReference | MediaStreamingPolicyCommonEncryptionCbcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCbcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultContentKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultContentKey = this._defaultContentKey?.internalValue;
    }
    if (this._drmFairplay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmFairplay = this._drmFairplay?.internalValue;
    }
    if (this._enabledProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProtocols = this._enabledProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCbcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultContentKey.internalValue = undefined;
      this._drmFairplay.internalValue = undefined;
      this._enabledProtocols.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultContentKey.internalValue = value.defaultContentKey;
      this._drmFairplay.internalValue = value.drmFairplay;
      this._enabledProtocols.internalValue = value.enabledProtocols;
    }
  }

  // default_content_key - computed: false, optional: true, required: false
  private _defaultContentKey = new MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference(this, "default_content_key");
  public get defaultContentKey() {
    return this._defaultContentKey;
  }
  public putDefaultContentKey(value: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey) {
    this._defaultContentKey.internalValue = value;
  }
  public resetDefaultContentKey() {
    this._defaultContentKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentKeyInput() {
    return this._defaultContentKey.internalValue;
  }

  // drm_fairplay - computed: false, optional: true, required: false
  private _drmFairplay = new MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference(this, "drm_fairplay");
  public get drmFairplay() {
    return this._drmFairplay;
  }
  public putDrmFairplay(value: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay) {
    this._drmFairplay.internalValue = value;
  }
  public resetDrmFairplay() {
    this._drmFairplay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmFairplayInput() {
    return this._drmFairplay.internalValue;
  }

  // enabled_protocols - computed: false, optional: true, required: false
  private _enabledProtocols = new MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference(this, "enabled_protocols");
  public get enabledProtocols() {
    return this._enabledProtocols;
  }
  public putEnabledProtocols(value: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols) {
    this._enabledProtocols.internalValue = value;
  }
  public resetEnabledProtocols() {
    this._enabledProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProtocolsInput() {
    return this._enabledProtocols.internalValue;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCencDefaultContentKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}
  */
  readonly policyName?: string;
}

export function mediaStreamingPolicyCommonEncryptionCencDefaultContentKeyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference | MediaStreamingPolicyCommonEncryptionCencDefaultContentKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}

export class MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCencDefaultContentKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._policyName = value.policyName;
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

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCencDrmPlayready {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}
  */
  readonly customAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}
  */
  readonly customLicenseAcquisitionUrlTemplate?: string;
}

export function mediaStreamingPolicyCommonEncryptionCencDrmPlayreadyToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference | MediaStreamingPolicyCommonEncryptionCencDrmPlayready): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attributes: cdktf.stringToTerraform(struct!.customAttributes),
    custom_license_acquisition_url_template: cdktf.stringToTerraform(struct!.customLicenseAcquisitionUrlTemplate),
  }
}

export class MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCencDrmPlayready | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes;
    }
    if (this._customLicenseAcquisitionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLicenseAcquisitionUrlTemplate = this._customLicenseAcquisitionUrlTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCencDrmPlayready | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAttributes = undefined;
      this._customLicenseAcquisitionUrlTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAttributes = value.customAttributes;
      this._customLicenseAcquisitionUrlTemplate = value.customLicenseAcquisitionUrlTemplate;
    }
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: string; 
  public get customAttributes() {
    return this.getStringAttribute('custom_attributes');
  }
  public set customAttributes(value: string) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // custom_license_acquisition_url_template - computed: false, optional: true, required: false
  private _customLicenseAcquisitionUrlTemplate?: string; 
  public get customLicenseAcquisitionUrlTemplate() {
    return this.getStringAttribute('custom_license_acquisition_url_template');
  }
  public set customLicenseAcquisitionUrlTemplate(value: string) {
    this._customLicenseAcquisitionUrlTemplate = value;
  }
  public resetCustomLicenseAcquisitionUrlTemplate() {
    this._customLicenseAcquisitionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLicenseAcquisitionUrlTemplateInput() {
    return this._customLicenseAcquisitionUrlTemplate;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCencEnabledProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}
  */
  readonly dash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}
  */
  readonly hls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
}

export function mediaStreamingPolicyCommonEncryptionCencEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference | MediaStreamingPolicyCommonEncryptionCencEnabledProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCencEnabledProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dash !== undefined) {
      hasAnyValues = true;
      internalValueResult.dash = this._dash;
    }
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._hls !== undefined) {
      hasAnyValues = true;
      internalValueResult.hls = this._hls;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dash = undefined;
      this._download = undefined;
      this._hls = undefined;
      this._smoothStreaming = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dash = value.dash;
      this._download = value.download;
      this._hls = value.hls;
      this._smoothStreaming = value.smoothStreaming;
    }
  }

  // dash - computed: false, optional: true, required: false
  private _dash?: boolean | cdktf.IResolvable; 
  public get dash() {
    return this.getBooleanAttribute('dash');
  }
  public set dash(value: boolean | cdktf.IResolvable) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash;
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable; 
  public get download() {
    return this.getBooleanAttribute('download');
  }
  public set download(value: boolean | cdktf.IResolvable) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // hls - computed: false, optional: true, required: false
  private _hls?: boolean | cdktf.IResolvable; 
  public get hls() {
    return this.getBooleanAttribute('hls');
  }
  public set hls(value: boolean | cdktf.IResolvable) {
    this._hls = value;
  }
  public resetHls() {
    this._hls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInput() {
    return this._hls;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }
}
export interface MediaStreamingPolicyCommonEncryptionCenc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}
  */
  readonly drmWidevineCustomLicenseAcquisitionUrlTemplate?: string;
  /**
  * default_content_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}
  */
  readonly defaultContentKey?: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey;
  /**
  * drm_playready block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_playready MediaStreamingPolicy#drm_playready}
  */
  readonly drmPlayready?: MediaStreamingPolicyCommonEncryptionCencDrmPlayready;
  /**
  * enabled_protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}
  */
  readonly enabledProtocols?: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols;
}

export function mediaStreamingPolicyCommonEncryptionCencToTerraform(struct?: MediaStreamingPolicyCommonEncryptionCencOutputReference | MediaStreamingPolicyCommonEncryptionCenc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyCommonEncryptionCenc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drmWidevineCustomLicenseAcquisitionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmWidevineCustomLicenseAcquisitionUrlTemplate = this._drmWidevineCustomLicenseAcquisitionUrlTemplate;
    }
    if (this._defaultContentKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultContentKey = this._defaultContentKey?.internalValue;
    }
    if (this._drmPlayready?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmPlayready = this._drmPlayready?.internalValue;
    }
    if (this._enabledProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProtocols = this._enabledProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyCommonEncryptionCenc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drmWidevineCustomLicenseAcquisitionUrlTemplate = undefined;
      this._defaultContentKey.internalValue = undefined;
      this._drmPlayready.internalValue = undefined;
      this._enabledProtocols.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drmWidevineCustomLicenseAcquisitionUrlTemplate = value.drmWidevineCustomLicenseAcquisitionUrlTemplate;
      this._defaultContentKey.internalValue = value.defaultContentKey;
      this._drmPlayready.internalValue = value.drmPlayready;
      this._enabledProtocols.internalValue = value.enabledProtocols;
    }
  }

  // drm_widevine_custom_license_acquisition_url_template - computed: false, optional: true, required: false
  private _drmWidevineCustomLicenseAcquisitionUrlTemplate?: string; 
  public get drmWidevineCustomLicenseAcquisitionUrlTemplate() {
    return this.getStringAttribute('drm_widevine_custom_license_acquisition_url_template');
  }
  public set drmWidevineCustomLicenseAcquisitionUrlTemplate(value: string) {
    this._drmWidevineCustomLicenseAcquisitionUrlTemplate = value;
  }
  public resetDrmWidevineCustomLicenseAcquisitionUrlTemplate() {
    this._drmWidevineCustomLicenseAcquisitionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmWidevineCustomLicenseAcquisitionUrlTemplateInput() {
    return this._drmWidevineCustomLicenseAcquisitionUrlTemplate;
  }

  // default_content_key - computed: false, optional: true, required: false
  private _defaultContentKey = new MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference(this, "default_content_key");
  public get defaultContentKey() {
    return this._defaultContentKey;
  }
  public putDefaultContentKey(value: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey) {
    this._defaultContentKey.internalValue = value;
  }
  public resetDefaultContentKey() {
    this._defaultContentKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentKeyInput() {
    return this._defaultContentKey.internalValue;
  }

  // drm_playready - computed: false, optional: true, required: false
  private _drmPlayready = new MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference(this, "drm_playready");
  public get drmPlayready() {
    return this._drmPlayready;
  }
  public putDrmPlayready(value: MediaStreamingPolicyCommonEncryptionCencDrmPlayready) {
    this._drmPlayready.internalValue = value;
  }
  public resetDrmPlayready() {
    this._drmPlayready.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmPlayreadyInput() {
    return this._drmPlayready.internalValue;
  }

  // enabled_protocols - computed: false, optional: true, required: false
  private _enabledProtocols = new MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference(this, "enabled_protocols");
  public get enabledProtocols() {
    return this._enabledProtocols;
  }
  public putEnabledProtocols(value: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols) {
    this._enabledProtocols.internalValue = value;
  }
  public resetEnabledProtocols() {
    this._enabledProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProtocolsInput() {
    return this._enabledProtocols.internalValue;
  }
}
export interface MediaStreamingPolicyNoEncryptionEnabledProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}
  */
  readonly dash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}
  */
  readonly hls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
}

export function mediaStreamingPolicyNoEncryptionEnabledProtocolsToTerraform(struct?: MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference | MediaStreamingPolicyNoEncryptionEnabledProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyNoEncryptionEnabledProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dash !== undefined) {
      hasAnyValues = true;
      internalValueResult.dash = this._dash;
    }
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._hls !== undefined) {
      hasAnyValues = true;
      internalValueResult.hls = this._hls;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyNoEncryptionEnabledProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dash = undefined;
      this._download = undefined;
      this._hls = undefined;
      this._smoothStreaming = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dash = value.dash;
      this._download = value.download;
      this._hls = value.hls;
      this._smoothStreaming = value.smoothStreaming;
    }
  }

  // dash - computed: false, optional: true, required: false
  private _dash?: boolean | cdktf.IResolvable; 
  public get dash() {
    return this.getBooleanAttribute('dash');
  }
  public set dash(value: boolean | cdktf.IResolvable) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash;
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable; 
  public get download() {
    return this.getBooleanAttribute('download');
  }
  public set download(value: boolean | cdktf.IResolvable) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // hls - computed: false, optional: true, required: false
  private _hls?: boolean | cdktf.IResolvable; 
  public get hls() {
    return this.getBooleanAttribute('hls');
  }
  public set hls(value: boolean | cdktf.IResolvable) {
    this._hls = value;
  }
  public resetHls() {
    this._hls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInput() {
    return this._hls;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }
}
export interface MediaStreamingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#create MediaStreamingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#delete MediaStreamingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#read MediaStreamingPolicy#read}
  */
  readonly read?: string;
}

export function mediaStreamingPolicyTimeoutsToTerraform(struct?: MediaStreamingPolicyTimeoutsOutputReference | MediaStreamingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaStreamingPolicyTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaStreamingPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy azurerm_media_streaming_policy}
*/
export class MediaStreamingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_streaming_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy azurerm_media_streaming_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaStreamingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MediaStreamingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_streaming_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultContentKeyPolicyName = config.defaultContentKeyPolicyName;
    this._id = config.id;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._commonEncryptionCbcs.internalValue = config.commonEncryptionCbcs;
    this._commonEncryptionCenc.internalValue = config.commonEncryptionCenc;
    this._noEncryptionEnabledProtocols.internalValue = config.noEncryptionEnabledProtocols;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_content_key_policy_name - computed: false, optional: true, required: false
  private _defaultContentKeyPolicyName?: string; 
  public get defaultContentKeyPolicyName() {
    return this.getStringAttribute('default_content_key_policy_name');
  }
  public set defaultContentKeyPolicyName(value: string) {
    this._defaultContentKeyPolicyName = value;
  }
  public resetDefaultContentKeyPolicyName() {
    this._defaultContentKeyPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentKeyPolicyNameInput() {
    return this._defaultContentKeyPolicyName;
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

  // common_encryption_cbcs - computed: false, optional: true, required: false
  private _commonEncryptionCbcs = new MediaStreamingPolicyCommonEncryptionCbcsOutputReference(this, "common_encryption_cbcs");
  public get commonEncryptionCbcs() {
    return this._commonEncryptionCbcs;
  }
  public putCommonEncryptionCbcs(value: MediaStreamingPolicyCommonEncryptionCbcs) {
    this._commonEncryptionCbcs.internalValue = value;
  }
  public resetCommonEncryptionCbcs() {
    this._commonEncryptionCbcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEncryptionCbcsInput() {
    return this._commonEncryptionCbcs.internalValue;
  }

  // common_encryption_cenc - computed: false, optional: true, required: false
  private _commonEncryptionCenc = new MediaStreamingPolicyCommonEncryptionCencOutputReference(this, "common_encryption_cenc");
  public get commonEncryptionCenc() {
    return this._commonEncryptionCenc;
  }
  public putCommonEncryptionCenc(value: MediaStreamingPolicyCommonEncryptionCenc) {
    this._commonEncryptionCenc.internalValue = value;
  }
  public resetCommonEncryptionCenc() {
    this._commonEncryptionCenc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEncryptionCencInput() {
    return this._commonEncryptionCenc.internalValue;
  }

  // no_encryption_enabled_protocols - computed: false, optional: true, required: false
  private _noEncryptionEnabledProtocols = new MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference(this, "no_encryption_enabled_protocols");
  public get noEncryptionEnabledProtocols() {
    return this._noEncryptionEnabledProtocols;
  }
  public putNoEncryptionEnabledProtocols(value: MediaStreamingPolicyNoEncryptionEnabledProtocols) {
    this._noEncryptionEnabledProtocols.internalValue = value;
  }
  public resetNoEncryptionEnabledProtocols() {
    this._noEncryptionEnabledProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEncryptionEnabledProtocolsInput() {
    return this._noEncryptionEnabledProtocols.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaStreamingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaStreamingPolicyTimeouts) {
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
      default_content_key_policy_name: cdktf.stringToTerraform(this._defaultContentKeyPolicyName),
      id: cdktf.stringToTerraform(this._id),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      common_encryption_cbcs: mediaStreamingPolicyCommonEncryptionCbcsToTerraform(this._commonEncryptionCbcs.internalValue),
      common_encryption_cenc: mediaStreamingPolicyCommonEncryptionCencToTerraform(this._commonEncryptionCenc.internalValue),
      no_encryption_enabled_protocols: mediaStreamingPolicyNoEncryptionEnabledProtocolsToTerraform(this._noEncryptionEnabledProtocols.internalValue),
      timeouts: mediaStreamingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
