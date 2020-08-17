// https://www.terraform.io/docs/providers/azurerm/r/bot_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BotConnectionConfig extends TerraformMetaArguments {
  readonly botName: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly location: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly scopes?: string;
  readonly serviceProviderName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: BotConnectionTimeouts;
}
export interface BotConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BotConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BotConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_connection',
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
    this._location = config.location;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._serviceProviderName = config.serviceProviderName;
    this._tags = config.tags;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string;
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string | undefined) {
    this._scopes = value;
  }

  // service_provider_name - computed: false, optional: false, required: true
  private _serviceProviderName: string;
  public get serviceProviderName() {
    return this._serviceProviderName;
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
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
  private _timeouts?: BotConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BotConnectionTimeouts | undefined) {
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
      location: this._location,
      name: this._name,
      parameters: this._parameters,
      resource_group_name: this._resourceGroupName,
      scopes: this._scopes,
      service_provider_name: this._serviceProviderName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
