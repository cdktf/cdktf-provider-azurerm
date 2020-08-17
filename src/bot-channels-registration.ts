// https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BotChannelsRegistrationConfig extends TerraformMetaArguments {
  readonly developerAppInsightsApiKey?: string;
  readonly developerAppInsightsApplicationId?: string;
  readonly developerAppInsightsKey?: string;
  readonly displayName?: string;
  readonly endpoint?: string;
  readonly location: string;
  readonly microsoftAppId: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: BotChannelsRegistrationTimeouts;
}
export interface BotChannelsRegistrationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BotChannelsRegistration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotChannelsRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channels_registration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._developerAppInsightsApiKey = config.developerAppInsightsApiKey;
    this._developerAppInsightsApplicationId = config.developerAppInsightsApplicationId;
    this._developerAppInsightsKey = config.developerAppInsightsKey;
    this._displayName = config.displayName;
    this._endpoint = config.endpoint;
    this._location = config.location;
    this._microsoftAppId = config.microsoftAppId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // developer_app_insights_api_key - computed: true, optional: true, required: false
  private _developerAppInsightsApiKey?: string;
  public get developerAppInsightsApiKey() {
    return this._developerAppInsightsApiKey ?? this.getStringAttribute('developer_app_insights_api_key');
  }
  public set developerAppInsightsApiKey(value: string | undefined) {
    this._developerAppInsightsApiKey = value;
  }

  // developer_app_insights_application_id - computed: true, optional: true, required: false
  private _developerAppInsightsApplicationId?: string;
  public get developerAppInsightsApplicationId() {
    return this._developerAppInsightsApplicationId ?? this.getStringAttribute('developer_app_insights_application_id');
  }
  public set developerAppInsightsApplicationId(value: string | undefined) {
    this._developerAppInsightsApplicationId = value;
  }

  // developer_app_insights_key - computed: true, optional: true, required: false
  private _developerAppInsightsKey?: string;
  public get developerAppInsightsKey() {
    return this._developerAppInsightsKey ?? this.getStringAttribute('developer_app_insights_key');
  }
  public set developerAppInsightsKey(value: string | undefined) {
    this._developerAppInsightsKey = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string;
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
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

  // microsoft_app_id - computed: false, optional: false, required: true
  private _microsoftAppId: string;
  public get microsoftAppId() {
    return this._microsoftAppId;
  }
  public set microsoftAppId(value: string) {
    this._microsoftAppId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelsRegistrationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BotChannelsRegistrationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      developer_app_insights_api_key: this._developerAppInsightsApiKey,
      developer_app_insights_application_id: this._developerAppInsightsApplicationId,
      developer_app_insights_key: this._developerAppInsightsKey,
      display_name: this._displayName,
      endpoint: this._endpoint,
      location: this._location,
      microsoft_app_id: this._microsoftAppId,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
