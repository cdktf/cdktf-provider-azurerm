// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_slack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BotChannelSlackConfig extends TerraformMetaArguments {
  readonly botName: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly landingPageUrl?: string;
  readonly location: string;
  readonly resourceGroupName: string;
  readonly verificationToken: string;
  /** timeouts block */
  readonly timeouts?: BotChannelSlackTimeouts;
}
export interface BotChannelSlackTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BotChannelSlack extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotChannelSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_slack',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._landingPageUrl = config.landingPageUrl;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._verificationToken = config.verificationToken;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string) {
    this._clientId = value;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret: string;
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // landing_page_url - computed: false, optional: true, required: false
  private _landingPageUrl?: string;
  public get landingPageUrl() {
    return this._landingPageUrl;
  }
  public set landingPageUrl(value: string | undefined) {
    this._landingPageUrl = value;
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

  // verification_token - computed: false, optional: false, required: true
  private _verificationToken: string;
  public get verificationToken() {
    return this._verificationToken;
  }
  public set verificationToken(value: string) {
    this._verificationToken = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelSlackTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BotChannelSlackTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: this._botName,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      landing_page_url: this._landingPageUrl,
      location: this._location,
      resource_group_name: this._resourceGroupName,
      verification_token: this._verificationToken,
      timeouts: this._timeouts,
    };
  }
}
