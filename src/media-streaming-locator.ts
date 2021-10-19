// https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaStreamingLocatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#alternative_media_id MediaStreamingLocator#alternative_media_id}
  */
  readonly alternativeMediaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#asset_name MediaStreamingLocator#asset_name}
  */
  readonly assetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}
  */
  readonly defaultContentKeyPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#end_time MediaStreamingLocator#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#media_services_account_name MediaStreamingLocator#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#name MediaStreamingLocator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#resource_group_name MediaStreamingLocator#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#start_time MediaStreamingLocator#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#streaming_locator_id MediaStreamingLocator#streaming_locator_id}
  */
  readonly streamingLocatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#streaming_policy_name MediaStreamingLocator#streaming_policy_name}
  */
  readonly streamingPolicyName: string;
  /**
  * content_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#content_key MediaStreamingLocator#content_key}
  */
  readonly contentKey?: MediaStreamingLocatorContentKey[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#timeouts MediaStreamingLocator#timeouts}
  */
  readonly timeouts?: MediaStreamingLocatorTimeouts;
}
export interface MediaStreamingLocatorContentKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#content_key_id MediaStreamingLocator#content_key_id}
  */
  readonly contentKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}
  */
  readonly labelReferenceInStreamingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#policy_name MediaStreamingLocator#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#type MediaStreamingLocator#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#value MediaStreamingLocator#value}
  */
  readonly value?: string;
}

function mediaStreamingLocatorContentKeyToTerraform(struct?: MediaStreamingLocatorContentKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_key_id: cdktf.stringToTerraform(struct!.contentKeyId),
    label_reference_in_streaming_policy: cdktf.stringToTerraform(struct!.labelReferenceInStreamingPolicy),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface MediaStreamingLocatorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#create MediaStreamingLocator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#delete MediaStreamingLocator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html#read MediaStreamingLocator#read}
  */
  readonly read?: string;
}

function mediaStreamingLocatorTimeoutsToTerraform(struct?: MediaStreamingLocatorTimeoutsOutputReference | MediaStreamingLocatorTimeouts): any {
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

export class MediaStreamingLocatorTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html azurerm_media_streaming_locator}
*/
export class MediaStreamingLocator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_streaming_locator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_locator.html azurerm_media_streaming_locator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaStreamingLocatorConfig
  */
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

  // asset_name - computed: false, optional: false, required: true
  private _assetName?: string; 
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

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
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
  private _streamingLocatorId?: string | undefined; 
  public get streamingLocatorId() {
    return this.getStringAttribute('streaming_locator_id');
  }
  public set streamingLocatorId(value: string | undefined) {
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
  private _streamingPolicyName?: string; 
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
  private _contentKey?: MediaStreamingLocatorContentKey[] | undefined; 
  public get contentKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('content_key') as any;
  }
  public set contentKey(value: MediaStreamingLocatorContentKey[] | undefined) {
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
  private _timeouts?: MediaStreamingLocatorTimeouts | undefined; 
  private __timeoutsOutput = new MediaStreamingLocatorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaStreamingLocatorTimeouts | undefined) {
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
