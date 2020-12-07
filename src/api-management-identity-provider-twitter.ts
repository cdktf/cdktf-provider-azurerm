// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_twitter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderTwitterConfig extends cdktf.TerraformMetaArguments {
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

function apiManagementIdentityProviderTwitterTimeoutsToTerraform(struct?: ApiManagementIdentityProviderTwitterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementIdentityProviderTwitter extends cdktf.TerraformResource {

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
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey
  }

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // api_secret_key - computed: false, optional: false, required: true
  private _apiSecretKey: string;
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementIdentityProviderTwitterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementIdentityProviderTwitterTimeouts ) {
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      api_secret_key: cdktf.stringToTerraform(this._apiSecretKey),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: apiManagementIdentityProviderTwitterTimeoutsToTerraform(this._timeouts),
    };
  }
}
