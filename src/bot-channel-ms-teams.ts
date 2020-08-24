// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_ms_teams.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BotChannelMsTeamsConfig extends TerraformMetaArguments {
  readonly botName: string;
  readonly callingWebHook?: string;
  readonly enableCalling?: boolean;
  readonly location: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: BotChannelMsTeamsTimeouts;
}
export interface BotChannelMsTeamsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BotChannelMsTeams extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotChannelMsTeamsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_ms_teams',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._callingWebHook = config.callingWebHook;
    this._enableCalling = config.enableCalling;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_name - computed: false, optional: false, required: true
  private _botName: string;
  public get botName() {
    return this._botName;
  }
  public set botName(value: string) {
    this._botName = value;
  }

  // calling_web_hook - computed: false, optional: true, required: false
  private _callingWebHook?: string;
  public get callingWebHook() {
    return this._callingWebHook;
  }
  public set callingWebHook(value: string | undefined) {
    this._callingWebHook = value;
  }

  // enable_calling - computed: false, optional: true, required: false
  private _enableCalling?: boolean;
  public get enableCalling() {
    return this._enableCalling;
  }
  public set enableCalling(value: boolean | undefined) {
    this._enableCalling = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelMsTeamsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BotChannelMsTeamsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: this._botName,
      calling_web_hook: this._callingWebHook,
      enable_calling: this._enableCalling,
      location: this._location,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
