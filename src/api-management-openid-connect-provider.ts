// https://www.terraform.io/docs/providers/azurerm/r/api_management_openid_connect_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementOpenidConnectProviderConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly description?: string;
  readonly displayName: string;
  readonly metadataEndpoint: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementOpenidConnectProviderTimeouts;
}
export interface ApiManagementOpenidConnectProviderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementOpenidConnectProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementOpenidConnectProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_openid_connect_provider',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._displayName = config.displayName;
    this._metadataEndpoint = config.metadataEndpoint;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata_endpoint - computed: false, optional: false, required: true
  private _metadataEndpoint: string;
  public get metadataEndpoint() {
    return this._metadataEndpoint;
  }
  public set metadataEndpoint(value: string) {
    this._metadataEndpoint = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementOpenidConnectProviderTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementOpenidConnectProviderTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      description: this._description,
      display_name: this._displayName,
      metadata_endpoint: this._metadataEndpoint,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
