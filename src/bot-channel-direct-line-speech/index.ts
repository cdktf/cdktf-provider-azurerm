// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelDirectLineSpeechConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}
  */
  readonly cognitiveAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}
  */
  readonly cognitiveServiceAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}
  */
  readonly cognitiveServiceLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}
  */
  readonly customSpeechModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}
  */
  readonly customVoiceDeploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}
  */
  readonly timeouts?: BotChannelDirectLineSpeechTimeouts;
}
export interface BotChannelDirectLineSpeechTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}
  */
  readonly update?: string;
}

export function botChannelDirectLineSpeechTimeoutsToTerraform(struct?: BotChannelDirectLineSpeechTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function botChannelDirectLineSpeechTimeoutsToHclTerraform(struct?: BotChannelDirectLineSpeechTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotChannelDirectLineSpeechTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BotChannelDirectLineSpeechTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotChannelDirectLineSpeechTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech azurerm_bot_channel_direct_line_speech}
*/
export class BotChannelDirectLineSpeech extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_bot_channel_direct_line_speech";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotChannelDirectLineSpeech to import
  * @param importFromId The id of the existing BotChannelDirectLineSpeech that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotChannelDirectLineSpeech to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_bot_channel_direct_line_speech", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/bot_channel_direct_line_speech azurerm_bot_channel_direct_line_speech} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelDirectLineSpeechConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelDirectLineSpeechConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_direct_line_speech',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._botName = config.botName;
    this._cognitiveAccountId = config.cognitiveAccountId;
    this._cognitiveServiceAccessKey = config.cognitiveServiceAccessKey;
    this._cognitiveServiceLocation = config.cognitiveServiceLocation;
    this._customSpeechModelId = config.customSpeechModelId;
    this._customVoiceDeploymentId = config.customVoiceDeploymentId;
    this._id = config.id;
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

  // cognitive_account_id - computed: false, optional: true, required: false
  private _cognitiveAccountId?: string; 
  public get cognitiveAccountId() {
    return this.getStringAttribute('cognitive_account_id');
  }
  public set cognitiveAccountId(value: string) {
    this._cognitiveAccountId = value;
  }
  public resetCognitiveAccountId() {
    this._cognitiveAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitiveAccountIdInput() {
    return this._cognitiveAccountId;
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
  private _timeouts = new BotChannelDirectLineSpeechTimeoutsOutputReference(this, "timeouts");
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
      cognitive_account_id: cdktf.stringToTerraform(this._cognitiveAccountId),
      cognitive_service_access_key: cdktf.stringToTerraform(this._cognitiveServiceAccessKey),
      cognitive_service_location: cdktf.stringToTerraform(this._cognitiveServiceLocation),
      custom_speech_model_id: cdktf.stringToTerraform(this._customSpeechModelId),
      custom_voice_deployment_id: cdktf.stringToTerraform(this._customVoiceDeploymentId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: botChannelDirectLineSpeechTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_name: {
        value: cdktf.stringToHclTerraform(this._botName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cognitive_account_id: {
        value: cdktf.stringToHclTerraform(this._cognitiveAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cognitive_service_access_key: {
        value: cdktf.stringToHclTerraform(this._cognitiveServiceAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cognitive_service_location: {
        value: cdktf.stringToHclTerraform(this._cognitiveServiceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_speech_model_id: {
        value: cdktf.stringToHclTerraform(this._customSpeechModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_voice_deployment_id: {
        value: cdktf.stringToHclTerraform(this._customVoiceDeploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: botChannelDirectLineSpeechTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BotChannelDirectLineSpeechTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
