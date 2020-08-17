// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderFacebookConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly appId: string;
  readonly appSecret: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementIdentityProviderFacebookTimeouts;
}
export interface ApiManagementIdentityProviderFacebookTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementIdentityProviderFacebook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderFacebookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_facebook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._appId = config.appId;
    this._appSecret = config.appSecret;
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

  // app_id - computed: false, optional: false, required: true
  private _appId: string;
  public get appId() {
    return this._appId;
  }
  public set appId(value: string) {
    this._appId = value;
  }

  // app_secret - computed: false, optional: false, required: true
  private _appSecret: string;
  public get appSecret() {
    return this._appSecret;
  }
  public set appSecret(value: string) {
    this._appSecret = value;
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
  private _timeouts?: ApiManagementIdentityProviderFacebookTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementIdentityProviderFacebookTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      app_id: this._appId,
      app_secret: this._appSecret,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
