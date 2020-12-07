// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_ms_teams.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelMsTeamsConfig extends cdktf.TerraformMetaArguments {
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

function botChannelMsTeamsTimeoutsToTerraform(struct?: BotChannelMsTeamsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BotChannelMsTeams extends cdktf.TerraformResource {

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
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName
  }

  // calling_web_hook - computed: true, optional: true, required: false
  private _callingWebHook?: string;
  public get callingWebHook() {
    return this.getStringAttribute('calling_web_hook');
  }
  public set callingWebHook(value: string) {
    this._callingWebHook = value;
  }
  public resetCallingWebHook() {
    this._callingWebHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callingWebHookInput() {
    return this._callingWebHook
  }

  // enable_calling - computed: false, optional: true, required: false
  private _enableCalling?: boolean;
  public get enableCalling() {
    return this.getBooleanAttribute('enable_calling');
  }
  public set enableCalling(value: boolean ) {
    this._enableCalling = value;
  }
  public resetEnableCalling() {
    this._enableCalling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCallingInput() {
    return this._enableCalling
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelMsTeamsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelMsTeamsTimeouts ) {
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
      calling_web_hook: cdktf.stringToTerraform(this._callingWebHook),
      enable_calling: cdktf.booleanToTerraform(this._enableCalling),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: botChannelMsTeamsTimeoutsToTerraform(this._timeouts),
    };
  }
}
