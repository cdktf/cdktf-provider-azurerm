// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2_c.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderAadb2CConfig extends cdktf.TerraformMetaArguments {
  readonly allowedTenant: string;
  readonly apiManagementName: string;
  readonly authority: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly passwordResetPolicy?: string;
  readonly profileEditingPolicy?: string;
  readonly resourceGroupName: string;
  readonly signinPolicy: string;
  readonly signinTenant: string;
  readonly signupPolicy: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementIdentityProviderAadb2CTimeouts;
}
export interface ApiManagementIdentityProviderAadb2CTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function apiManagementIdentityProviderAadb2CTimeoutsToTerraform(struct?: ApiManagementIdentityProviderAadb2CTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementIdentityProviderAadb2C extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderAadb2CConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_aadb2c',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedTenant = config.allowedTenant;
    this._apiManagementName = config.apiManagementName;
    this._authority = config.authority;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._passwordResetPolicy = config.passwordResetPolicy;
    this._profileEditingPolicy = config.profileEditingPolicy;
    this._resourceGroupName = config.resourceGroupName;
    this._signinPolicy = config.signinPolicy;
    this._signinTenant = config.signinTenant;
    this._signupPolicy = config.signupPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tenant - computed: false, optional: false, required: true
  private _allowedTenant: string;
  public get allowedTenant() {
    return this.getStringAttribute('allowed_tenant');
  }
  public set allowedTenant(value: string) {
    this._allowedTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTenantInput() {
    return this._allowedTenant
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

  // authority - computed: false, optional: false, required: true
  private _authority: string;
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority
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

  // password_reset_policy - computed: false, optional: true, required: false
  private _passwordResetPolicy?: string;
  public get passwordResetPolicy() {
    return this.getStringAttribute('password_reset_policy');
  }
  public set passwordResetPolicy(value: string ) {
    this._passwordResetPolicy = value;
  }
  public resetPasswordResetPolicy() {
    this._passwordResetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetPolicyInput() {
    return this._passwordResetPolicy
  }

  // profile_editing_policy - computed: false, optional: true, required: false
  private _profileEditingPolicy?: string;
  public get profileEditingPolicy() {
    return this.getStringAttribute('profile_editing_policy');
  }
  public set profileEditingPolicy(value: string ) {
    this._profileEditingPolicy = value;
  }
  public resetProfileEditingPolicy() {
    this._profileEditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileEditingPolicyInput() {
    return this._profileEditingPolicy
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

  // signin_policy - computed: false, optional: false, required: true
  private _signinPolicy: string;
  public get signinPolicy() {
    return this.getStringAttribute('signin_policy');
  }
  public set signinPolicy(value: string) {
    this._signinPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signinPolicyInput() {
    return this._signinPolicy
  }

  // signin_tenant - computed: false, optional: false, required: true
  private _signinTenant: string;
  public get signinTenant() {
    return this.getStringAttribute('signin_tenant');
  }
  public set signinTenant(value: string) {
    this._signinTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signinTenantInput() {
    return this._signinTenant
  }

  // signup_policy - computed: false, optional: false, required: true
  private _signupPolicy: string;
  public get signupPolicy() {
    return this.getStringAttribute('signup_policy');
  }
  public set signupPolicy(value: string) {
    this._signupPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signupPolicyInput() {
    return this._signupPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementIdentityProviderAadb2CTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementIdentityProviderAadb2CTimeouts ) {
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
      allowed_tenant: cdktf.stringToTerraform(this._allowedTenant),
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      authority: cdktf.stringToTerraform(this._authority),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      password_reset_policy: cdktf.stringToTerraform(this._passwordResetPolicy),
      profile_editing_policy: cdktf.stringToTerraform(this._profileEditingPolicy),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      signin_policy: cdktf.stringToTerraform(this._signinPolicy),
      signin_tenant: cdktf.stringToTerraform(this._signinTenant),
      signup_policy: cdktf.stringToTerraform(this._signupPolicy),
      timeouts: apiManagementIdentityProviderAadb2CTimeoutsToTerraform(this._timeouts),
    };
  }
}
