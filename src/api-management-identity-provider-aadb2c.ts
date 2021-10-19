// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderAadb2CConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#allowed_tenant ApiManagementIdentityProviderAadb2C#allowed_tenant}
  */
  readonly allowedTenant: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#api_management_name ApiManagementIdentityProviderAadb2C#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#authority ApiManagementIdentityProviderAadb2C#authority}
  */
  readonly authority: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#client_id ApiManagementIdentityProviderAadb2C#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#client_secret ApiManagementIdentityProviderAadb2C#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#password_reset_policy ApiManagementIdentityProviderAadb2C#password_reset_policy}
  */
  readonly passwordResetPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#profile_editing_policy ApiManagementIdentityProviderAadb2C#profile_editing_policy}
  */
  readonly profileEditingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#resource_group_name ApiManagementIdentityProviderAadb2C#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#signin_policy ApiManagementIdentityProviderAadb2C#signin_policy}
  */
  readonly signinPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#signin_tenant ApiManagementIdentityProviderAadb2C#signin_tenant}
  */
  readonly signinTenant: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#signup_policy ApiManagementIdentityProviderAadb2C#signup_policy}
  */
  readonly signupPolicy: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#timeouts ApiManagementIdentityProviderAadb2C#timeouts}
  */
  readonly timeouts?: ApiManagementIdentityProviderAadb2CTimeouts;
}
export interface ApiManagementIdentityProviderAadb2CTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#create ApiManagementIdentityProviderAadb2C#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#delete ApiManagementIdentityProviderAadb2C#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#read ApiManagementIdentityProviderAadb2C#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html#update ApiManagementIdentityProviderAadb2C#update}
  */
  readonly update?: string;
}

function apiManagementIdentityProviderAadb2CTimeoutsToTerraform(struct?: ApiManagementIdentityProviderAadb2CTimeoutsOutputReference | ApiManagementIdentityProviderAadb2CTimeouts): any {
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

export class ApiManagementIdentityProviderAadb2CTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html azurerm_api_management_identity_provider_aadb2c}
*/
export class ApiManagementIdentityProviderAadb2C extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_identity_provider_aadb2c";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aadb2c.html azurerm_api_management_identity_provider_aadb2c} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementIdentityProviderAadb2CConfig
  */
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
  private _allowedTenant?: string; 
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
  private _apiManagementName?: string; 
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
  private _authority?: string; 
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
  private _clientId?: string; 
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
  private _clientSecret?: string; 
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
  private _passwordResetPolicy?: string | undefined; 
  public get passwordResetPolicy() {
    return this.getStringAttribute('password_reset_policy');
  }
  public set passwordResetPolicy(value: string | undefined) {
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
  private _profileEditingPolicy?: string | undefined; 
  public get profileEditingPolicy() {
    return this.getStringAttribute('profile_editing_policy');
  }
  public set profileEditingPolicy(value: string | undefined) {
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

  // signin_policy - computed: false, optional: false, required: true
  private _signinPolicy?: string; 
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
  private _signinTenant?: string; 
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
  private _signupPolicy?: string; 
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
  private _timeouts?: ApiManagementIdentityProviderAadb2CTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementIdentityProviderAadb2CTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementIdentityProviderAadb2CTimeouts | undefined) {
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
