// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelFacebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#bot_name BotChannelFacebook#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#facebook_application_id BotChannelFacebook#facebook_application_id}
  */
  readonly facebookApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#facebook_application_secret BotChannelFacebook#facebook_application_secret}
  */
  readonly facebookApplicationSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#location BotChannelFacebook#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#resource_group_name BotChannelFacebook#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * page block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#page BotChannelFacebook#page}
  */
  readonly page: BotChannelFacebookPage[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#timeouts BotChannelFacebook#timeouts}
  */
  readonly timeouts?: BotChannelFacebookTimeouts;
}
export interface BotChannelFacebookPage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#access_token BotChannelFacebook#access_token}
  */
  readonly accessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#id BotChannelFacebook#id}
  */
  readonly id: string;
}

function botChannelFacebookPageToTerraform(struct?: BotChannelFacebookPage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface BotChannelFacebookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#create BotChannelFacebook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#delete BotChannelFacebook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#read BotChannelFacebook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html#update BotChannelFacebook#update}
  */
  readonly update?: string;
}

function botChannelFacebookTimeoutsToTerraform(struct?: BotChannelFacebookTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html azurerm_bot_channel_facebook}
*/
export class BotChannelFacebook extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_facebook.html azurerm_bot_channel_facebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelFacebookConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelFacebookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_facebook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._facebookApplicationId = config.facebookApplicationId;
    this._facebookApplicationSecret = config.facebookApplicationSecret;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._page = config.page;
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

  // facebook_application_id - computed: false, optional: false, required: true
  private _facebookApplicationId: string;
  public get facebookApplicationId() {
    return this.getStringAttribute('facebook_application_id');
  }
  public set facebookApplicationId(value: string) {
    this._facebookApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookApplicationIdInput() {
    return this._facebookApplicationId
  }

  // facebook_application_secret - computed: false, optional: false, required: true
  private _facebookApplicationSecret: string;
  public get facebookApplicationSecret() {
    return this.getStringAttribute('facebook_application_secret');
  }
  public set facebookApplicationSecret(value: string) {
    this._facebookApplicationSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookApplicationSecretInput() {
    return this._facebookApplicationSecret
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

  // page - computed: false, optional: false, required: true
  private _page: BotChannelFacebookPage[];
  public get page() {
    return this.interpolationForAttribute('page') as any;
  }
  public set page(value: BotChannelFacebookPage[]) {
    this._page = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelFacebookTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelFacebookTimeouts ) {
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
      facebook_application_id: cdktf.stringToTerraform(this._facebookApplicationId),
      facebook_application_secret: cdktf.stringToTerraform(this._facebookApplicationSecret),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      page: cdktf.listMapper(botChannelFacebookPageToTerraform)(this._page),
      timeouts: botChannelFacebookTimeoutsToTerraform(this._timeouts),
    };
  }
}
