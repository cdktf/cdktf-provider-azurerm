// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_email.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelEmailConfig extends cdktf.TerraformMetaArguments {
  readonly botName: string;
  readonly emailAddress: string;
  readonly emailPassword: string;
  readonly location: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: BotChannelEmailTimeouts;
}
export interface BotChannelEmailTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function botChannelEmailTimeoutsToTerraform(struct?: BotChannelEmailTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BotChannelEmail extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotChannelEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_email',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._emailAddress = config.emailAddress;
    this._emailPassword = config.emailPassword;
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

  // email_address - computed: false, optional: false, required: true
  private _emailAddress: string;
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress
  }

  // email_password - computed: false, optional: false, required: true
  private _emailPassword: string;
  public get emailPassword() {
    return this.getStringAttribute('email_password');
  }
  public set emailPassword(value: string) {
    this._emailPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPasswordInput() {
    return this._emailPassword
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
  private _timeouts?: BotChannelEmailTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelEmailTimeouts ) {
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
      email_address: cdktf.stringToTerraform(this._emailAddress),
      email_password: cdktf.stringToTerraform(this._emailPassword),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: botChannelEmailTimeoutsToTerraform(this._timeouts),
    };
  }
}
