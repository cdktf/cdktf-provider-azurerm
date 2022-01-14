// https://www.terraform.io/docs/providers/azurerm/r/media_live_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaLiveEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}
  */
  readonly autoStartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#description MediaLiveEvent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}
  */
  readonly hostnamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#location MediaLiveEvent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#name MediaLiveEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#tags MediaLiveEvent#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}
  */
  readonly transcriptionLanguages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}
  */
  readonly useStaticHostname?: boolean | cdktf.IResolvable;
  /**
  * cross_site_access_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#cross_site_access_policy MediaLiveEvent#cross_site_access_policy}
  */
  readonly crossSiteAccessPolicy?: MediaLiveEventCrossSiteAccessPolicy;
  /**
  * encoding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#encoding MediaLiveEvent#encoding}
  */
  readonly encoding?: MediaLiveEventEncoding;
  /**
  * input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#input MediaLiveEvent#input}
  */
  readonly input: MediaLiveEventInput;
  /**
  * preview block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#preview MediaLiveEvent#preview}
  */
  readonly preview?: MediaLiveEventPreview;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#timeouts MediaLiveEvent#timeouts}
  */
  readonly timeouts?: MediaLiveEventTimeouts;
}
export interface MediaLiveEventCrossSiteAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}
  */
  readonly clientAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}
  */
  readonly crossDomainPolicy?: string;
}

export function mediaLiveEventCrossSiteAccessPolicyToTerraform(struct?: MediaLiveEventCrossSiteAccessPolicyOutputReference | MediaLiveEventCrossSiteAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_access_policy: cdktf.stringToTerraform(struct!.clientAccessPolicy),
    cross_domain_policy: cdktf.stringToTerraform(struct!.crossDomainPolicy),
  }
}

export class MediaLiveEventCrossSiteAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaLiveEventCrossSiteAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAccessPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAccessPolicy = this._clientAccessPolicy;
    }
    if (this._crossDomainPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossDomainPolicy = this._crossDomainPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaLiveEventCrossSiteAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAccessPolicy = undefined;
      this._crossDomainPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAccessPolicy = value.clientAccessPolicy;
      this._crossDomainPolicy = value.crossDomainPolicy;
    }
  }

  // client_access_policy - computed: false, optional: true, required: false
  private _clientAccessPolicy?: string; 
  public get clientAccessPolicy() {
    return this.getStringAttribute('client_access_policy');
  }
  public set clientAccessPolicy(value: string) {
    this._clientAccessPolicy = value;
  }
  public resetClientAccessPolicy() {
    this._clientAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAccessPolicyInput() {
    return this._clientAccessPolicy;
  }

  // cross_domain_policy - computed: false, optional: true, required: false
  private _crossDomainPolicy?: string; 
  public get crossDomainPolicy() {
    return this.getStringAttribute('cross_domain_policy');
  }
  public set crossDomainPolicy(value: string) {
    this._crossDomainPolicy = value;
  }
  public resetCrossDomainPolicy() {
    this._crossDomainPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossDomainPolicyInput() {
    return this._crossDomainPolicy;
  }
}
export interface MediaLiveEventEncoding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}
  */
  readonly keyFrameInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#preset_name MediaLiveEvent#preset_name}
  */
  readonly presetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}
  */
  readonly stretchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#type MediaLiveEvent#type}
  */
  readonly type?: string;
}

export function mediaLiveEventEncodingToTerraform(struct?: MediaLiveEventEncodingOutputReference | MediaLiveEventEncoding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_frame_interval: cdktf.stringToTerraform(struct!.keyFrameInterval),
    preset_name: cdktf.stringToTerraform(struct!.presetName),
    stretch_mode: cdktf.stringToTerraform(struct!.stretchMode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MediaLiveEventEncodingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaLiveEventEncoding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyFrameInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameInterval = this._keyFrameInterval;
    }
    if (this._presetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetName = this._presetName;
    }
    if (this._stretchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchMode = this._stretchMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaLiveEventEncoding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyFrameInterval = undefined;
      this._presetName = undefined;
      this._stretchMode = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyFrameInterval = value.keyFrameInterval;
      this._presetName = value.presetName;
      this._stretchMode = value.stretchMode;
      this._type = value.type;
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
}
export interface MediaLiveEventInputIpAccessControlAllow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#address MediaLiveEvent#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#name MediaLiveEvent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}
  */
  readonly subnetPrefixLength?: number;
}

export function mediaLiveEventInputIpAccessControlAllowToTerraform(struct?: MediaLiveEventInputIpAccessControlAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_prefix_length: cdktf.numberToTerraform(struct!.subnetPrefixLength),
  }
}

export interface MediaLiveEventInput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#access_token MediaLiveEvent#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}
  */
  readonly keyFrameIntervalDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}
  */
  readonly streamingProtocol?: string;
  /**
  * ip_access_control_allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}
  */
  readonly ipAccessControlAllow?: MediaLiveEventInputIpAccessControlAllow[];
}

export function mediaLiveEventInputToTerraform(struct?: MediaLiveEventInputOutputReference | MediaLiveEventInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    key_frame_interval_duration: cdktf.stringToTerraform(struct!.keyFrameIntervalDuration),
    streaming_protocol: cdktf.stringToTerraform(struct!.streamingProtocol),
    ip_access_control_allow: cdktf.listMapper(mediaLiveEventInputIpAccessControlAllowToTerraform)(struct!.ipAccessControlAllow),
  }
}

export class MediaLiveEventInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaLiveEventInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._keyFrameIntervalDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFrameIntervalDuration = this._keyFrameIntervalDuration;
    }
    if (this._streamingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingProtocol = this._streamingProtocol;
    }
    if (this._ipAccessControlAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccessControlAllow = this._ipAccessControlAllow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaLiveEventInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._keyFrameIntervalDuration = undefined;
      this._streamingProtocol = undefined;
      this._ipAccessControlAllow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._keyFrameIntervalDuration = value.keyFrameIntervalDuration;
      this._streamingProtocol = value.streamingProtocol;
      this._ipAccessControlAllow = value.ipAccessControlAllow;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // key_frame_interval_duration - computed: false, optional: true, required: false
  private _keyFrameIntervalDuration?: string; 
  public get keyFrameIntervalDuration() {
    return this.getStringAttribute('key_frame_interval_duration');
  }
  public set keyFrameIntervalDuration(value: string) {
    this._keyFrameIntervalDuration = value;
  }
  public resetKeyFrameIntervalDuration() {
    this._keyFrameIntervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalDurationInput() {
    return this._keyFrameIntervalDuration;
  }

  // streaming_protocol - computed: false, optional: true, required: false
  private _streamingProtocol?: string; 
  public get streamingProtocol() {
    return this.getStringAttribute('streaming_protocol');
  }
  public set streamingProtocol(value: string) {
    this._streamingProtocol = value;
  }
  public resetStreamingProtocol() {
    this._streamingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingProtocolInput() {
    return this._streamingProtocol;
  }

  // ip_access_control_allow - computed: false, optional: true, required: false
  private _ipAccessControlAllow?: MediaLiveEventInputIpAccessControlAllow[]; 
  public get ipAccessControlAllow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_access_control_allow') as any;
  }
  public set ipAccessControlAllow(value: MediaLiveEventInputIpAccessControlAllow[]) {
    this._ipAccessControlAllow = value;
  }
  public resetIpAccessControlAllow() {
    this._ipAccessControlAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessControlAllowInput() {
    return this._ipAccessControlAllow;
  }
}
export interface MediaLiveEventPreviewIpAccessControlAllow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#address MediaLiveEvent#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#name MediaLiveEvent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}
  */
  readonly subnetPrefixLength?: number;
}

export function mediaLiveEventPreviewIpAccessControlAllowToTerraform(struct?: MediaLiveEventPreviewIpAccessControlAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_prefix_length: cdktf.numberToTerraform(struct!.subnetPrefixLength),
  }
}

export interface MediaLiveEventPreview {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}
  */
  readonly alternativeMediaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#preview_locator MediaLiveEvent#preview_locator}
  */
  readonly previewLocator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}
  */
  readonly streamingPolicyName?: string;
  /**
  * ip_access_control_allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}
  */
  readonly ipAccessControlAllow?: MediaLiveEventPreviewIpAccessControlAllow[];
}

export function mediaLiveEventPreviewToTerraform(struct?: MediaLiveEventPreviewOutputReference | MediaLiveEventPreview): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_media_id: cdktf.stringToTerraform(struct!.alternativeMediaId),
    preview_locator: cdktf.stringToTerraform(struct!.previewLocator),
    streaming_policy_name: cdktf.stringToTerraform(struct!.streamingPolicyName),
    ip_access_control_allow: cdktf.listMapper(mediaLiveEventPreviewIpAccessControlAllowToTerraform)(struct!.ipAccessControlAllow),
  }
}

export class MediaLiveEventPreviewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaLiveEventPreview | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeMediaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeMediaId = this._alternativeMediaId;
    }
    if (this._previewLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewLocator = this._previewLocator;
    }
    if (this._streamingPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingPolicyName = this._streamingPolicyName;
    }
    if (this._ipAccessControlAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccessControlAllow = this._ipAccessControlAllow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaLiveEventPreview | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternativeMediaId = undefined;
      this._previewLocator = undefined;
      this._streamingPolicyName = undefined;
      this._ipAccessControlAllow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternativeMediaId = value.alternativeMediaId;
      this._previewLocator = value.previewLocator;
      this._streamingPolicyName = value.streamingPolicyName;
      this._ipAccessControlAllow = value.ipAccessControlAllow;
    }
  }

  // alternative_media_id - computed: false, optional: true, required: false
  private _alternativeMediaId?: string; 
  public get alternativeMediaId() {
    return this.getStringAttribute('alternative_media_id');
  }
  public set alternativeMediaId(value: string) {
    this._alternativeMediaId = value;
  }
  public resetAlternativeMediaId() {
    this._alternativeMediaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeMediaIdInput() {
    return this._alternativeMediaId;
  }

  // preview_locator - computed: true, optional: true, required: false
  private _previewLocator?: string; 
  public get previewLocator() {
    return this.getStringAttribute('preview_locator');
  }
  public set previewLocator(value: string) {
    this._previewLocator = value;
  }
  public resetPreviewLocator() {
    this._previewLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewLocatorInput() {
    return this._previewLocator;
  }

  // streaming_policy_name - computed: true, optional: true, required: false
  private _streamingPolicyName?: string; 
  public get streamingPolicyName() {
    return this.getStringAttribute('streaming_policy_name');
  }
  public set streamingPolicyName(value: string) {
    this._streamingPolicyName = value;
  }
  public resetStreamingPolicyName() {
    this._streamingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingPolicyNameInput() {
    return this._streamingPolicyName;
  }

  // ip_access_control_allow - computed: false, optional: true, required: false
  private _ipAccessControlAllow?: MediaLiveEventPreviewIpAccessControlAllow[]; 
  public get ipAccessControlAllow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_access_control_allow') as any;
  }
  public set ipAccessControlAllow(value: MediaLiveEventPreviewIpAccessControlAllow[]) {
    this._ipAccessControlAllow = value;
  }
  public resetIpAccessControlAllow() {
    this._ipAccessControlAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessControlAllowInput() {
    return this._ipAccessControlAllow;
  }
}
export interface MediaLiveEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#create MediaLiveEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#delete MediaLiveEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#read MediaLiveEvent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event#update MediaLiveEvent#update}
  */
  readonly update?: string;
}

export function mediaLiveEventTimeoutsToTerraform(struct?: MediaLiveEventTimeoutsOutputReference | MediaLiveEventTimeouts): any {
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

export class MediaLiveEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MediaLiveEventTimeouts | undefined {
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

  public set internalValue(value: MediaLiveEventTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event azurerm_media_live_event}
*/
export class MediaLiveEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_live_event";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event azurerm_media_live_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaLiveEventConfig
  */
  public constructor(scope: Construct, id: string, config: MediaLiveEventConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_live_event',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStartEnabled = config.autoStartEnabled;
    this._description = config.description;
    this._hostnamePrefix = config.hostnamePrefix;
    this._location = config.location;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._transcriptionLanguages = config.transcriptionLanguages;
    this._useStaticHostname = config.useStaticHostname;
    this._crossSiteAccessPolicy.internalValue = config.crossSiteAccessPolicy;
    this._encoding.internalValue = config.encoding;
    this._input.internalValue = config.input;
    this._preview.internalValue = config.preview;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start_enabled - computed: false, optional: true, required: false
  private _autoStartEnabled?: boolean | cdktf.IResolvable; 
  public get autoStartEnabled() {
    return this.getBooleanAttribute('auto_start_enabled') as any;
  }
  public set autoStartEnabled(value: boolean | cdktf.IResolvable) {
    this._autoStartEnabled = value;
  }
  public resetAutoStartEnabled() {
    this._autoStartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartEnabledInput() {
    return this._autoStartEnabled;
  }

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

  // hostname_prefix - computed: false, optional: true, required: false
  private _hostnamePrefix?: string; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string) {
    this._hostnamePrefix = value;
  }
  public resetHostnamePrefix() {
    this._hostnamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // transcription_languages - computed: false, optional: true, required: false
  private _transcriptionLanguages?: string[]; 
  public get transcriptionLanguages() {
    return this.getListAttribute('transcription_languages');
  }
  public set transcriptionLanguages(value: string[]) {
    this._transcriptionLanguages = value;
  }
  public resetTranscriptionLanguages() {
    this._transcriptionLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionLanguagesInput() {
    return this._transcriptionLanguages;
  }

  // use_static_hostname - computed: false, optional: true, required: false
  private _useStaticHostname?: boolean | cdktf.IResolvable; 
  public get useStaticHostname() {
    return this.getBooleanAttribute('use_static_hostname') as any;
  }
  public set useStaticHostname(value: boolean | cdktf.IResolvable) {
    this._useStaticHostname = value;
  }
  public resetUseStaticHostname() {
    this._useStaticHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStaticHostnameInput() {
    return this._useStaticHostname;
  }

  // cross_site_access_policy - computed: false, optional: true, required: false
  private _crossSiteAccessPolicy = new MediaLiveEventCrossSiteAccessPolicyOutputReference(this as any, "cross_site_access_policy", true);
  public get crossSiteAccessPolicy() {
    return this._crossSiteAccessPolicy;
  }
  public putCrossSiteAccessPolicy(value: MediaLiveEventCrossSiteAccessPolicy) {
    this._crossSiteAccessPolicy.internalValue = value;
  }
  public resetCrossSiteAccessPolicy() {
    this._crossSiteAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteAccessPolicyInput() {
    return this._crossSiteAccessPolicy.internalValue;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding = new MediaLiveEventEncodingOutputReference(this as any, "encoding", true);
  public get encoding() {
    return this._encoding;
  }
  public putEncoding(value: MediaLiveEventEncoding) {
    this._encoding.internalValue = value;
  }
  public resetEncoding() {
    this._encoding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding.internalValue;
  }

  // input - computed: false, optional: false, required: true
  private _input = new MediaLiveEventInputOutputReference(this as any, "input", true);
  public get input() {
    return this._input;
  }
  public putInput(value: MediaLiveEventInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // preview - computed: false, optional: true, required: false
  private _preview = new MediaLiveEventPreviewOutputReference(this as any, "preview", true);
  public get preview() {
    return this._preview;
  }
  public putPreview(value: MediaLiveEventPreview) {
    this._preview.internalValue = value;
  }
  public resetPreview() {
    this._preview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaLiveEventTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaLiveEventTimeouts) {
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
      auto_start_enabled: cdktf.booleanToTerraform(this._autoStartEnabled),
      description: cdktf.stringToTerraform(this._description),
      hostname_prefix: cdktf.stringToTerraform(this._hostnamePrefix),
      location: cdktf.stringToTerraform(this._location),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transcription_languages: cdktf.listMapper(cdktf.stringToTerraform)(this._transcriptionLanguages),
      use_static_hostname: cdktf.booleanToTerraform(this._useStaticHostname),
      cross_site_access_policy: mediaLiveEventCrossSiteAccessPolicyToTerraform(this._crossSiteAccessPolicy.internalValue),
      encoding: mediaLiveEventEncodingToTerraform(this._encoding.internalValue),
      input: mediaLiveEventInputToTerraform(this._input.internalValue),
      preview: mediaLiveEventPreviewToTerraform(this._preview.internalValue),
      timeouts: mediaLiveEventTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
