// https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingLocatorConfig extends cdktf.TerraformMetaArguments {
  readonly alternativeMediaId?: string;
  readonly assetName: string;
  readonly defaultContentKeyPolicyName?: string;
  readonly endTime?: string;
  readonly mediaServicesAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly startTime?: string;
  readonly streamingLocatorId?: string;
  readonly streamingPolicyName: string;
  /** content_key block */
  readonly contentKey?: MediaStreamingLocatorContentKey[];
  /** timeouts block */
  readonly timeouts?: MediaStreamingLocatorTimeouts;
}
export interface MediaStreamingLocatorContentKey {
  readonly contentKeyId?: string;
  readonly labelReferenceInStreamingPolicy?: string;
  readonly policyName?: string;
  readonly type?: string;
  readonly value?: string;
}

function mediaStreamingLocatorContentKeyToTerraform(struct?: MediaStreamingLocatorContentKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_key_id: cdktf.stringToTerraform(struct!.contentKeyId),
    label_reference_in_streaming_policy: cdktf.stringToTerraform(struct!.labelReferenceInStreamingPolicy),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface MediaStreamingLocatorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function mediaStreamingLocatorTimeoutsToTerraform(struct?: MediaStreamingLocatorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class MediaStreamingLocator extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MediaStreamingLocatorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_streaming_locator',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alternativeMediaId = config.alternativeMediaId;
    this._assetName = config.assetName;
    this._defaultContentKeyPolicyName = config.defaultContentKeyPolicyName;
    this._endTime = config.endTime;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._startTime = config.startTime;
    this._streamingLocatorId = config.streamingLocatorId;
    this._streamingPolicyName = config.streamingPolicyName;
    this._contentKey = config.contentKey;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_media_id - computed: false, optional: true, required: false
  private _alternativeMediaId?: string;
  public get alternativeMediaId() {
    return this.getStringAttribute('alternative_media_id');
  }
  public set alternativeMediaId(value: string ) {
    this._alternativeMediaId = value;
  }
  public resetAlternativeMediaId() {
    this._alternativeMediaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeMediaIdInput() {
    return this._alternativeMediaId
  }

  // asset_name - computed: false, optional: false, required: true
  private _assetName: string;
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }
  public set assetName(value: string) {
    this._assetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNameInput() {
    return this._assetName
  }

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

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string ) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // streaming_locator_id - computed: true, optional: true, required: false
  private _streamingLocatorId?: string;
  public get streamingLocatorId() {
    return this.getStringAttribute('streaming_locator_id');
  }
  public set streamingLocatorId(value: string) {
    this._streamingLocatorId = value;
  }
  public resetStreamingLocatorId() {
    this._streamingLocatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingLocatorIdInput() {
    return this._streamingLocatorId
  }

  // streaming_policy_name - computed: false, optional: false, required: true
  private _streamingPolicyName: string;
  public get streamingPolicyName() {
    return this.getStringAttribute('streaming_policy_name');
  }
  public set streamingPolicyName(value: string) {
    this._streamingPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingPolicyNameInput() {
    return this._streamingPolicyName
  }

  // content_key - computed: false, optional: true, required: false
  private _contentKey?: MediaStreamingLocatorContentKey[];
  public get contentKey() {
    return this.interpolationForAttribute('content_key') as any;
  }
  public set contentKey(value: MediaStreamingLocatorContentKey[] ) {
    this._contentKey = value;
  }
  public resetContentKey() {
    this._contentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentKeyInput() {
    return this._contentKey
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaStreamingLocatorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaStreamingLocatorTimeouts ) {
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
      alternative_media_id: cdktf.stringToTerraform(this._alternativeMediaId),
      asset_name: cdktf.stringToTerraform(this._assetName),
      default_content_key_policy_name: cdktf.stringToTerraform(this._defaultContentKeyPolicyName),
      end_time: cdktf.stringToTerraform(this._endTime),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_time: cdktf.stringToTerraform(this._startTime),
      streaming_locator_id: cdktf.stringToTerraform(this._streamingLocatorId),
      streaming_policy_name: cdktf.stringToTerraform(this._streamingPolicyName),
      content_key: cdktf.listMapper(mediaStreamingLocatorContentKeyToTerraform)(this._contentKey),
      timeouts: mediaStreamingLocatorTimeoutsToTerraform(this._timeouts),
    };
  }
}
