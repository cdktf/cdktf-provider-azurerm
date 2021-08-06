// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelLineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#bot_name BotChannelLine#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#location BotChannelLine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#resource_group_name BotChannelLine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * line_channel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#line_channel BotChannelLine#line_channel}
  */
  readonly lineChannel: BotChannelLineLineChannel[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#timeouts BotChannelLine#timeouts}
  */
  readonly timeouts?: BotChannelLineTimeouts;
}
export interface BotChannelLineLineChannel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#access_token BotChannelLine#access_token}
  */
  readonly accessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#secret BotChannelLine#secret}
  */
  readonly secret: string;
}

function botChannelLineLineChannelToTerraform(struct?: BotChannelLineLineChannel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}

export interface BotChannelLineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#create BotChannelLine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#delete BotChannelLine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#read BotChannelLine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html#update BotChannelLine#update}
  */
  readonly update?: string;
}

function botChannelLineTimeoutsToTerraform(struct?: BotChannelLineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html azurerm_bot_channel_line}
*/
export class BotChannelLine extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_line.html azurerm_bot_channel_line} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelLineConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelLineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_line',
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
    this._lineChannel = config.lineChannel;
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

  // line_channel - computed: false, optional: false, required: true
  private _lineChannel: BotChannelLineLineChannel[];
  public get lineChannel() {
    return this.interpolationForAttribute('line_channel') as any;
  }
  public set lineChannel(value: BotChannelLineLineChannel[]) {
    this._lineChannel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineChannelInput() {
    return this._lineChannel
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelLineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelLineTimeouts ) {
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
      line_channel: cdktf.listMapper(botChannelLineLineChannelToTerraform)(this._lineChannel),
      timeouts: botChannelLineTimeoutsToTerraform(this._timeouts),
    };
  }
}
