// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelDirectlineConfig extends cdktf.TerraformMetaArguments {
  readonly botName: string;
  readonly location: string;
  readonly resourceGroupName: string;
  /** site block */
  readonly site: BotChannelDirectlineSite[];
  /** timeouts block */
  readonly timeouts?: BotChannelDirectlineTimeouts;
}
export interface BotChannelDirectlineSite {
  readonly enabled?: boolean;
  readonly enhancedAuthenticationEnabled?: boolean;
  readonly name: string;
  readonly trustedOrigins?: string[];
  readonly v1Allowed?: boolean;
  readonly v3Allowed?: boolean;
}

function botChannelDirectlineSiteToTerraform(struct?: BotChannelDirectlineSite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enhanced_authentication_enabled: cdktf.booleanToTerraform(struct!.enhancedAuthenticationEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    trusted_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedOrigins),
    v1_allowed: cdktf.booleanToTerraform(struct!.v1Allowed),
    v3_allowed: cdktf.booleanToTerraform(struct!.v3Allowed),
  }
}

export interface BotChannelDirectlineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function botChannelDirectlineTimeoutsToTerraform(struct?: BotChannelDirectlineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BotChannelDirectline extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotChannelDirectlineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_directline',
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
    this._site = config.site;
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

  // site - computed: false, optional: false, required: true
  private _site: BotChannelDirectlineSite[];
  public get site() {
    return this.interpolationForAttribute('site') as any;
  }
  public set site(value: BotChannelDirectlineSite[]) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelDirectlineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelDirectlineTimeouts ) {
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
      site: cdktf.listMapper(botChannelDirectlineSiteToTerraform)(this._site),
      timeouts: botChannelDirectlineTimeoutsToTerraform(this._timeouts),
    };
  }
}
