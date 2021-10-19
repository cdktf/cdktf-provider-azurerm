// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelDirectlineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#bot_name BotChannelDirectline#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#location BotChannelDirectline#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#resource_group_name BotChannelDirectline#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * site block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#site BotChannelDirectline#site}
  */
  readonly site: BotChannelDirectlineSite[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#timeouts BotChannelDirectline#timeouts}
  */
  readonly timeouts?: BotChannelDirectlineTimeouts;
}
export interface BotChannelDirectlineSite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#enabled BotChannelDirectline#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}
  */
  readonly enhancedAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#name BotChannelDirectline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#trusted_origins BotChannelDirectline#trusted_origins}
  */
  readonly trustedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#v1_allowed BotChannelDirectline#v1_allowed}
  */
  readonly v1Allowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#v3_allowed BotChannelDirectline#v3_allowed}
  */
  readonly v3Allowed?: boolean | cdktf.IResolvable;
}

function botChannelDirectlineSiteToTerraform(struct?: BotChannelDirectlineSite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#create BotChannelDirectline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#delete BotChannelDirectline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#read BotChannelDirectline#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html#update BotChannelDirectline#update}
  */
  readonly update?: string;
}

function botChannelDirectlineTimeoutsToTerraform(struct?: BotChannelDirectlineTimeoutsOutputReference | BotChannelDirectlineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class BotChannelDirectlineTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html azurerm_bot_channel_directline}
*/
export class BotChannelDirectline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_bot_channel_directline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline.html azurerm_bot_channel_directline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelDirectlineConfig
  */
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
  private _botName?: string; 
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
  private _location?: string; 
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
  private _resourceGroupName?: string; 
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
  private _site?: BotChannelDirectlineSite[]; 
  public get site() {
    // Getting the computed value is not yet implemented
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
  private _timeouts?: BotChannelDirectlineTimeouts | undefined; 
  private __timeoutsOutput = new BotChannelDirectlineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BotChannelDirectlineTimeouts | undefined) {
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
