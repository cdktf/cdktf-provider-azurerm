// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderAadConfig extends TerraformMetaArguments {
  readonly allowedTenants: string[];
  readonly apiManagementName: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementIdentityProviderAadTimeouts;
}
export interface ApiManagementIdentityProviderAadTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementIdentityProviderAad extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderAadConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_aad',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedTenants = config.allowedTenants;
    this._apiManagementName = config.apiManagementName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tenants - computed: false, optional: false, required: true
  private _allowedTenants: string[];
  public get allowedTenants() {
    return this._allowedTenants;
  }
  public set allowedTenants(value: string[]) {
    this._allowedTenants = value;
  }

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
  private _timeouts?: ApiManagementIdentityProviderAadTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementIdentityProviderAadTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_tenants: this._allowedTenants,
      api_management_name: this._apiManagementName,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
