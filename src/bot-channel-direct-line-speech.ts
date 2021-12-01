// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelDirectLineSpeechConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#bot_name BotChannelDirectLineSpeech#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}
  */
  readonly cognitiveServiceAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}
  */
  readonly cognitiveServiceLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}
  */
  readonly customSpeechModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}
  */
  readonly customVoiceDeploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#location BotChannelDirectLineSpeech#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#resource_group_name BotChannelDirectLineSpeech#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#timeouts BotChannelDirectLineSpeech#timeouts}
  */
  readonly timeouts?: BotChannelDirectLineSpeechTimeouts;
}
export interface BotChannelDirectLineSpeechTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#create BotChannelDirectLineSpeech#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#delete BotChannelDirectLineSpeech#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#read BotChannelDirectLineSpeech#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html#update BotChannelDirectLineSpeech#update}
  */
  readonly update?: string;
}

export function botChannelDirectLineSpeechTimeoutsToTerraform(struct?: BotChannelDirectLineSpeechTimeoutsOutputReference | BotChannelDirectLineSpeechTimeouts): any {
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

export class BotChannelDirectLineSpeechTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BotChannelDirectLineSpeechTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotChannelDirectLineSpeechTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html azurerm_bot_channel_direct_line_speech}
*/
export class BotChannelDirectLineSpeech extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_bot_channel_direct_line_speech";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_direct_line_speech.html azurerm_bot_channel_direct_line_speech} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelDirectLineSpeechConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelDirectLineSpeechConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_direct_line_speech',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._cognitiveServiceAccessKey = config.cognitiveServiceAccessKey;
    this._cognitiveServiceLocation = config.cognitiveServiceLocation;
    this._customSpeechModelId = config.customSpeechModelId;
    this._customVoiceDeploymentId = config.customVoiceDeploymentId;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }

  // cognitive_service_access_key - computed: false, optional: false, required: true
  private _cognitiveServiceAccessKey?: string; 
  public get cognitiveServiceAccessKey() {
    return this.getStringAttribute('cognitive_service_access_key');
  }
  public set cognitiveServiceAccessKey(value: string) {
    this._cognitiveServiceAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitiveServiceAccessKeyInput() {
    return this._cognitiveServiceAccessKey;
  }

  // cognitive_service_location - computed: false, optional: false, required: true
  private _cognitiveServiceLocation?: string; 
  public get cognitiveServiceLocation() {
    return this.getStringAttribute('cognitive_service_location');
  }
  public set cognitiveServiceLocation(value: string) {
    this._cognitiveServiceLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitiveServiceLocationInput() {
    return this._cognitiveServiceLocation;
  }

  // custom_speech_model_id - computed: false, optional: true, required: false
  private _customSpeechModelId?: string; 
  public get customSpeechModelId() {
    return this.getStringAttribute('custom_speech_model_id');
  }
  public set customSpeechModelId(value: string) {
    this._customSpeechModelId = value;
  }
  public resetCustomSpeechModelId() {
    this._customSpeechModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSpeechModelIdInput() {
    return this._customSpeechModelId;
  }

  // custom_voice_deployment_id - computed: false, optional: true, required: false
  private _customVoiceDeploymentId?: string; 
  public get customVoiceDeploymentId() {
    return this.getStringAttribute('custom_voice_deployment_id');
  }
  public set customVoiceDeploymentId(value: string) {
    this._customVoiceDeploymentId = value;
  }
  public resetCustomVoiceDeploymentId() {
    this._customVoiceDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVoiceDeploymentIdInput() {
    return this._customVoiceDeploymentId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BotChannelDirectLineSpeechTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BotChannelDirectLineSpeechTimeouts) {
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
      bot_name: cdktf.stringToTerraform(this._botName),
      cognitive_service_access_key: cdktf.stringToTerraform(this._cognitiveServiceAccessKey),
      cognitive_service_location: cdktf.stringToTerraform(this._cognitiveServiceLocation),
      custom_speech_model_id: cdktf.stringToTerraform(this._customSpeechModelId),
      custom_voice_deployment_id: cdktf.stringToTerraform(this._customVoiceDeploymentId),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: botChannelDirectLineSpeechTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
