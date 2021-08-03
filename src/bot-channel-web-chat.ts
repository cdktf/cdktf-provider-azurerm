// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelWebChatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#bot_name BotChannelWebChat#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#location BotChannelWebChat#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#resource_group_name BotChannelWebChat#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#site_names BotChannelWebChat#site_names}
  */
  readonly siteNames: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#timeouts BotChannelWebChat#timeouts}
  */
  readonly timeouts?: BotChannelWebChatTimeouts;
}
export interface BotChannelWebChatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#create BotChannelWebChat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#delete BotChannelWebChat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#read BotChannelWebChat#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html#update BotChannelWebChat#update}
  */
  readonly update?: string;
}

function botChannelWebChatTimeoutsToTerraform(struct?: BotChannelWebChatTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html azurerm_bot_channel_web_chat}
*/
export class BotChannelWebChat extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_web_chat.html azurerm_bot_channel_web_chat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelWebChatConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelWebChatConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_web_chat',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._siteNames = config.siteNames;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_name - computed: false, optional: false, required: true
  private _botName: string;
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName
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

  // site_names - computed: false, optional: false, required: true
  private _siteNames: string[];
  public get siteNames() {
    return this.getListAttribute('site_names');
  }
  public set siteNames(value: string[]) {
    this._siteNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNamesInput() {
    return this._siteNames
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelWebChatTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelWebChatTimeouts ) {
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
      bot_name: cdktf.stringToTerraform(this._botName),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      site_names: cdktf.listMapper(cdktf.stringToTerraform)(this._siteNames),
      timeouts: botChannelWebChatTimeoutsToTerraform(this._timeouts),
    };
  }
}
