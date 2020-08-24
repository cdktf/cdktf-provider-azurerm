// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_twitter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderTwitterConfig extends TerraformMetaArguments {
  readonly apiKey: string;
  readonly apiManagementName: string;
  readonly apiSecretKey: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementIdentityProviderTwitterTimeouts;
}
export interface ApiManagementIdentityProviderTwitterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementIdentityProviderTwitter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderTwitterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_twitter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiKey = config.apiKey;
    this._apiManagementName = config.apiManagementName;
    this._apiSecretKey = config.apiSecretKey;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey: string;
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // api_secret_key - computed: false, optional: false, required: true
  private _apiSecretKey: string;
  public get apiSecretKey() {
    return this._apiSecretKey;
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
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
  private _timeouts?: ApiManagementIdentityProviderTwitterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementIdentityProviderTwitterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: this._apiKey,
      api_management_name: this._apiManagementName,
      api_secret_key: this._apiSecretKey,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
