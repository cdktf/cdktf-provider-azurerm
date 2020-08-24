// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_email.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BotChannelEmailConfig extends TerraformMetaArguments {
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

// Resource

export class BotChannelEmail extends TerraformResource {

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
    return this._botName;
  }
  public set botName(value: string) {
    this._botName = value;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress: string;
  public get emailAddress() {
    return this._emailAddress;
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }

  // email_password - computed: false, optional: false, required: true
  private _emailPassword: string;
  public get emailPassword() {
    return this._emailPassword;
  }
  public set emailPassword(value: string) {
    this._emailPassword = value;
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
  private _timeouts?: BotChannelEmailTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BotChannelEmailTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: this._botName,
      email_address: this._emailAddress,
      email_password: this._emailPassword,
      location: this._location,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
