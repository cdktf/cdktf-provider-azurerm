// https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaLiveEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#auto_start_enabled MediaLiveEvent#auto_start_enabled}
  */
  readonly autoStartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#description MediaLiveEvent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#hostname_prefix MediaLiveEvent#hostname_prefix}
  */
  readonly hostnamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#location MediaLiveEvent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#media_services_account_name MediaLiveEvent#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#name MediaLiveEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#resource_group_name MediaLiveEvent#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#tags MediaLiveEvent#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#transcription_languages MediaLiveEvent#transcription_languages}
  */
  readonly transcriptionLanguages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#use_static_hostname MediaLiveEvent#use_static_hostname}
  */
  readonly useStaticHostname?: boolean | cdktf.IResolvable;
  /**
  * cross_site_access_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#cross_site_access_policy MediaLiveEvent#cross_site_access_policy}
  */
  readonly crossSiteAccessPolicy?: MediaLiveEventCrossSiteAccessPolicy;
  /**
  * encoding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#encoding MediaLiveEvent#encoding}
  */
  readonly encoding?: MediaLiveEventEncoding;
  /**
  * input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#input MediaLiveEvent#input}
  */
  readonly input: MediaLiveEventInput;
  /**
  * preview block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#preview MediaLiveEvent#preview}
  */
  readonly preview?: MediaLiveEventPreview;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#timeouts MediaLiveEvent#timeouts}
  */
  readonly timeouts?: MediaLiveEventTimeouts;
}
export interface MediaLiveEventCrossSiteAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#client_access_policy MediaLiveEvent#client_access_policy}
  */
  readonly clientAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#cross_domain_policy MediaLiveEvent#cross_domain_policy}
  */
  readonly crossDomainPolicy?: string;
}

function mediaLiveEventCrossSiteAccessPolicyToTerraform(struct?: MediaLiveEventCrossSiteAccessPolicyOutputReference | MediaLiveEventCrossSiteAccessPolicy): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_access_policy - computed: false, optional: true, required: false
  private _clientAccessPolicy?: string | undefined; 
  public get clientAccessPolicy() {
    return this.getStringAttribute('client_access_policy');
  }
  public set clientAccessPolicy(value: string | undefined) {
    this._clientAccessPolicy = value;
  }
  public resetClientAccessPolicy() {
    this._clientAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAccessPolicyInput() {
    return this._clientAccessPolicy
  }

  // cross_domain_policy - computed: false, optional: true, required: false
  private _crossDomainPolicy?: string | undefined; 
  public get crossDomainPolicy() {
    return this.getStringAttribute('cross_domain_policy');
  }
  public set crossDomainPolicy(value: string | undefined) {
    this._crossDomainPolicy = value;
  }
  public resetCrossDomainPolicy() {
    this._crossDomainPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossDomainPolicyInput() {
    return this._crossDomainPolicy
  }
}
export interface MediaLiveEventEncoding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#key_frame_interval MediaLiveEvent#key_frame_interval}
  */
  readonly keyFrameInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#preset_name MediaLiveEvent#preset_name}
  */
  readonly presetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#stretch_mode MediaLiveEvent#stretch_mode}
  */
  readonly stretchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#type MediaLiveEvent#type}
  */
  readonly type?: string;
}

function mediaLiveEventEncodingToTerraform(struct?: MediaLiveEventEncodingOutputReference | MediaLiveEventEncoding): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_frame_interval - computed: false, optional: true, required: false
  private _keyFrameInterval?: string | undefined; 
  public get keyFrameInterval() {
    return this.getStringAttribute('key_frame_interval');
  }
  public set keyFrameInterval(value: string | undefined) {
    this._keyFrameInterval = value;
  }
  public resetKeyFrameInterval() {
    this._keyFrameInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalInput() {
    return this._keyFrameInterval
  }

  // preset_name - computed: false, optional: true, required: false
  private _presetName?: string | undefined; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string | undefined) {
    this._presetName = value;
  }
  public resetPresetName() {
    this._presetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName
  }

  // stretch_mode - computed: false, optional: true, required: false
  private _stretchMode?: string | undefined; 
  public get stretchMode() {
    return this.getStringAttribute('stretch_mode');
  }
  public set stretchMode(value: string | undefined) {
    this._stretchMode = value;
  }
  public resetStretchMode() {
    this._stretchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchModeInput() {
    return this._stretchMode
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface MediaLiveEventInputIpAccessControlAllow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#address MediaLiveEvent#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#name MediaLiveEvent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}
  */
  readonly subnetPrefixLength?: number;
}

function mediaLiveEventInputIpAccessControlAllowToTerraform(struct?: MediaLiveEventInputIpAccessControlAllow): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#access_token MediaLiveEvent#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}
  */
  readonly keyFrameIntervalDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#streaming_protocol MediaLiveEvent#streaming_protocol}
  */
  readonly streamingProtocol?: string;
  /**
  * ip_access_control_allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}
  */
  readonly ipAccessControlAllow?: MediaLiveEventInputIpAccessControlAllow[];
}

function mediaLiveEventInputToTerraform(struct?: MediaLiveEventInputOutputReference | MediaLiveEventInput): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string | undefined; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
  }

  // key_frame_interval_duration - computed: false, optional: true, required: false
  private _keyFrameIntervalDuration?: string | undefined; 
  public get keyFrameIntervalDuration() {
    return this.getStringAttribute('key_frame_interval_duration');
  }
  public set keyFrameIntervalDuration(value: string | undefined) {
    this._keyFrameIntervalDuration = value;
  }
  public resetKeyFrameIntervalDuration() {
    this._keyFrameIntervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFrameIntervalDurationInput() {
    return this._keyFrameIntervalDuration
  }

  // streaming_protocol - computed: false, optional: true, required: false
  private _streamingProtocol?: string | undefined; 
  public get streamingProtocol() {
    return this.getStringAttribute('streaming_protocol');
  }
  public set streamingProtocol(value: string | undefined) {
    this._streamingProtocol = value;
  }
  public resetStreamingProtocol() {
    this._streamingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingProtocolInput() {
    return this._streamingProtocol
  }

  // ip_access_control_allow - computed: false, optional: true, required: false
  private _ipAccessControlAllow?: MediaLiveEventInputIpAccessControlAllow[] | undefined; 
  public get ipAccessControlAllow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_access_control_allow') as any;
  }
  public set ipAccessControlAllow(value: MediaLiveEventInputIpAccessControlAllow[] | undefined) {
    this._ipAccessControlAllow = value;
  }
  public resetIpAccessControlAllow() {
    this._ipAccessControlAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessControlAllowInput() {
    return this._ipAccessControlAllow
  }
}
export interface MediaLiveEventPreviewIpAccessControlAllow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#address MediaLiveEvent#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#name MediaLiveEvent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}
  */
  readonly subnetPrefixLength?: number;
}

function mediaLiveEventPreviewIpAccessControlAllowToTerraform(struct?: MediaLiveEventPreviewIpAccessControlAllow): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#alternative_media_id MediaLiveEvent#alternative_media_id}
  */
  readonly alternativeMediaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#preview_locator MediaLiveEvent#preview_locator}
  */
  readonly previewLocator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#streaming_policy_name MediaLiveEvent#streaming_policy_name}
  */
  readonly streamingPolicyName?: string;
  /**
  * ip_access_control_allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}
  */
  readonly ipAccessControlAllow?: MediaLiveEventPreviewIpAccessControlAllow[];
}

function mediaLiveEventPreviewToTerraform(struct?: MediaLiveEventPreviewOutputReference | MediaLiveEventPreview): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // alternative_media_id - computed: false, optional: true, required: false
  private _alternativeMediaId?: string | undefined; 
  public get alternativeMediaId() {
    return this.getStringAttribute('alternative_media_id');
  }
  public set alternativeMediaId(value: string | undefined) {
    this._alternativeMediaId = value;
  }
  public resetAlternativeMediaId() {
    this._alternativeMediaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeMediaIdInput() {
    return this._alternativeMediaId
  }

  // preview_locator - computed: true, optional: true, required: false
  private _previewLocator?: string | undefined; 
  public get previewLocator() {
    return this.getStringAttribute('preview_locator');
  }
  public set previewLocator(value: string | undefined) {
    this._previewLocator = value;
  }
  public resetPreviewLocator() {
    this._previewLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewLocatorInput() {
    return this._previewLocator
  }

  // streaming_policy_name - computed: true, optional: true, required: false
  private _streamingPolicyName?: string | undefined; 
  public get streamingPolicyName() {
    return this.getStringAttribute('streaming_policy_name');
  }
  public set streamingPolicyName(value: string | undefined) {
    this._streamingPolicyName = value;
  }
  public resetStreamingPolicyName() {
    this._streamingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingPolicyNameInput() {
    return this._streamingPolicyName
  }

  // ip_access_control_allow - computed: false, optional: true, required: false
  private _ipAccessControlAllow?: MediaLiveEventPreviewIpAccessControlAllow[] | undefined; 
  public get ipAccessControlAllow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_access_control_allow') as any;
  }
  public set ipAccessControlAllow(value: MediaLiveEventPreviewIpAccessControlAllow[] | undefined) {
    this._ipAccessControlAllow = value;
  }
  public resetIpAccessControlAllow() {
    this._ipAccessControlAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessControlAllowInput() {
    return this._ipAccessControlAllow
  }
}
export interface MediaLiveEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#create MediaLiveEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#delete MediaLiveEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#read MediaLiveEvent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#update MediaLiveEvent#update}
  */
  readonly update?: string;
}

function mediaLiveEventTimeoutsToTerraform(struct?: MediaLiveEventTimeoutsOutputReference | MediaLiveEventTimeouts): any {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html azurerm_media_live_event}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html azurerm_media_live_event} Resource
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
    this._crossSiteAccessPolicy = config.crossSiteAccessPolicy;
    this._encoding = config.encoding;
    this._input = config.input;
    this._preview = config.preview;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start_enabled - computed: false, optional: true, required: false
  private _autoStartEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get autoStartEnabled() {
    return this.getBooleanAttribute('auto_start_enabled') as any;
  }
  public set autoStartEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._autoStartEnabled = value;
  }
  public resetAutoStartEnabled() {
    this._autoStartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartEnabledInput() {
    return this._autoStartEnabled
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // hostname_prefix - computed: false, optional: true, required: false
  private _hostnamePrefix?: string | undefined; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string | undefined) {
    this._hostnamePrefix = value;
  }
  public resetHostnamePrefix() {
    this._hostnamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix
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
    return this._location
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transcription_languages - computed: false, optional: true, required: false
  private _transcriptionLanguages?: string[] | undefined; 
  public get transcriptionLanguages() {
    return this.getListAttribute('transcription_languages');
  }
  public set transcriptionLanguages(value: string[] | undefined) {
    this._transcriptionLanguages = value;
  }
  public resetTranscriptionLanguages() {
    this._transcriptionLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionLanguagesInput() {
    return this._transcriptionLanguages
  }

  // use_static_hostname - computed: false, optional: true, required: false
  private _useStaticHostname?: boolean | cdktf.IResolvable | undefined; 
  public get useStaticHostname() {
    return this.getBooleanAttribute('use_static_hostname') as any;
  }
  public set useStaticHostname(value: boolean | cdktf.IResolvable | undefined) {
    this._useStaticHostname = value;
  }
  public resetUseStaticHostname() {
    this._useStaticHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStaticHostnameInput() {
    return this._useStaticHostname
  }

  // cross_site_access_policy - computed: false, optional: true, required: false
  private _crossSiteAccessPolicy?: MediaLiveEventCrossSiteAccessPolicy | undefined; 
  private __crossSiteAccessPolicyOutput = new MediaLiveEventCrossSiteAccessPolicyOutputReference(this as any, "cross_site_access_policy", true);
  public get crossSiteAccessPolicy() {
    return this.__crossSiteAccessPolicyOutput;
  }
  public putCrossSiteAccessPolicy(value: MediaLiveEventCrossSiteAccessPolicy | undefined) {
    this._crossSiteAccessPolicy = value;
  }
  public resetCrossSiteAccessPolicy() {
    this._crossSiteAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteAccessPolicyInput() {
    return this._crossSiteAccessPolicy
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: MediaLiveEventEncoding | undefined; 
  private __encodingOutput = new MediaLiveEventEncodingOutputReference(this as any, "encoding", true);
  public get encoding() {
    return this.__encodingOutput;
  }
  public putEncoding(value: MediaLiveEventEncoding | undefined) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // input - computed: false, optional: false, required: true
  private _input?: MediaLiveEventInput; 
  private __inputOutput = new MediaLiveEventInputOutputReference(this as any, "input", true);
  public get input() {
    return this.__inputOutput;
  }
  public putInput(value: MediaLiveEventInput) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: MediaLiveEventPreview | undefined; 
  private __previewOutput = new MediaLiveEventPreviewOutputReference(this as any, "preview", true);
  public get preview() {
    return this.__previewOutput;
  }
  public putPreview(value: MediaLiveEventPreview | undefined) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaLiveEventTimeouts | undefined; 
  private __timeoutsOutput = new MediaLiveEventTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaLiveEventTimeouts | undefined) {
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
      cross_site_access_policy: mediaLiveEventCrossSiteAccessPolicyToTerraform(this._crossSiteAccessPolicy),
      encoding: mediaLiveEventEncodingToTerraform(this._encoding),
      input: mediaLiveEventInputToTerraform(this._input),
      preview: mediaLiveEventPreviewToTerraform(this._preview),
      timeouts: mediaLiveEventTimeoutsToTerraform(this._timeouts),
    };
  }
}
