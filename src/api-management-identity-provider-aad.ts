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
  readonly signinTenant?: string;
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
    this._signinTenant = config.signinTenant;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tenants - computed: false, optional: false, required: true
  private _allowedTenants: string[];
  public get allowedTenants() {
    return this.getListAttribute('allowed_tenants');
  }
  public set allowedTenants(value: string[]) {
    this._allowedTenants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTenantsInput() {
    return this._allowedTenants
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

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret: string;
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
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

  // signin_tenant - computed: false, optional: true, required: false
  private _signinTenant?: string;
  public get signinTenant() {
    return this.getStringAttribute('signin_tenant');
  }
  public set signinTenant(value: string ) {
    this._signinTenant = value;
  }
  public resetSigninTenant() {
    this._signinTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signinTenantInput() {
    return this._signinTenant
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementIdentityProviderAadTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementIdentityProviderAadTimeouts ) {
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
      allowed_tenants: this._allowedTenants,
      api_management_name: this._apiManagementName,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      resource_group_name: this._resourceGroupName,
      signin_tenant: this._signinTenant,
      timeouts: this._timeouts,
    };
  }
}
