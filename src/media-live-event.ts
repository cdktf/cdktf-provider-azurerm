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
  readonly crossSiteAccessPolicy?: MediaLiveEventCrossSiteAccessPolicy[];
  /**
  * encoding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#encoding MediaLiveEvent#encoding}
  */
  readonly encoding?: MediaLiveEventEncoding[];
  /**
  * input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#input MediaLiveEvent#input}
  */
  readonly input: MediaLiveEventInput[];
  /**
  * preview block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_live_event.html#preview MediaLiveEvent#preview}
  */
  readonly preview?: MediaLiveEventPreview[];
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

function mediaLiveEventCrossSiteAccessPolicyToTerraform(struct?: MediaLiveEventCrossSiteAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_access_policy: cdktf.stringToTerraform(struct!.clientAccessPolicy),
    cross_domain_policy: cdktf.stringToTerraform(struct!.crossDomainPolicy),
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

function mediaLiveEventEncodingToTerraform(struct?: MediaLiveEventEncoding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_frame_interval: cdktf.stringToTerraform(struct!.keyFrameInterval),
    preset_name: cdktf.stringToTerraform(struct!.presetName),
    stretch_mode: cdktf.stringToTerraform(struct!.stretchMode),
    type: cdktf.stringToTerraform(struct!.type),
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

function mediaLiveEventInputToTerraform(struct?: MediaLiveEventInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    key_frame_interval_duration: cdktf.stringToTerraform(struct!.keyFrameIntervalDuration),
    streaming_protocol: cdktf.stringToTerraform(struct!.streamingProtocol),
    ip_access_control_allow: cdktf.listMapper(mediaLiveEventInputIpAccessControlAllowToTerraform)(struct!.ipAccessControlAllow),
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

function mediaLiveEventPreviewToTerraform(struct?: MediaLiveEventPreview): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alternative_media_id: cdktf.stringToTerraform(struct!.alternativeMediaId),
    preview_locator: cdktf.stringToTerraform(struct!.previewLocator),
    streaming_policy_name: cdktf.stringToTerraform(struct!.streamingPolicyName),
    ip_access_control_allow: cdktf.listMapper(mediaLiveEventPreviewIpAccessControlAllowToTerraform)(struct!.ipAccessControlAllow),
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

function mediaLiveEventTimeoutsToTerraform(struct?: MediaLiveEventTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _autoStartEnabled?: boolean | cdktf.IResolvable;
  public get autoStartEnabled() {
    return this.getBooleanAttribute('auto_start_enabled');
  }
  public set autoStartEnabled(value: boolean | cdktf.IResolvable ) {
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

  // hostname_prefix - computed: false, optional: true, required: false
  private _hostnamePrefix?: string;
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string ) {
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
  private _location: string;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _transcriptionLanguages?: string[];
  public get transcriptionLanguages() {
    return this.getListAttribute('transcription_languages');
  }
  public set transcriptionLanguages(value: string[] ) {
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
  private _useStaticHostname?: boolean | cdktf.IResolvable;
  public get useStaticHostname() {
    return this.getBooleanAttribute('use_static_hostname');
  }
  public set useStaticHostname(value: boolean | cdktf.IResolvable ) {
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
  private _crossSiteAccessPolicy?: MediaLiveEventCrossSiteAccessPolicy[];
  public get crossSiteAccessPolicy() {
    return this.interpolationForAttribute('cross_site_access_policy') as any;
  }
  public set crossSiteAccessPolicy(value: MediaLiveEventCrossSiteAccessPolicy[] ) {
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
  private _encoding?: MediaLiveEventEncoding[];
  public get encoding() {
    return this.interpolationForAttribute('encoding') as any;
  }
  public set encoding(value: MediaLiveEventEncoding[] ) {
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
  private _input: MediaLiveEventInput[];
  public get input() {
    return this.interpolationForAttribute('input') as any;
  }
  public set input(value: MediaLiveEventInput[]) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: MediaLiveEventPreview[];
  public get preview() {
    return this.interpolationForAttribute('preview') as any;
  }
  public set preview(value: MediaLiveEventPreview[] ) {
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
  private _timeouts?: MediaLiveEventTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaLiveEventTimeouts ) {
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
      cross_site_access_policy: cdktf.listMapper(mediaLiveEventCrossSiteAccessPolicyToTerraform)(this._crossSiteAccessPolicy),
      encoding: cdktf.listMapper(mediaLiveEventEncodingToTerraform)(this._encoding),
      input: cdktf.listMapper(mediaLiveEventInputToTerraform)(this._input),
      preview: cdktf.listMapper(mediaLiveEventPreviewToTerraform)(this._preview),
      timeouts: mediaLiveEventTimeoutsToTerraform(this._timeouts),
    };
  }
}
