// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderAadb2CConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#allowed_tenant ApiManagementIdentityProviderAadb2C#allowed_tenant}
  */
  readonly allowedTenant: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#api_management_name ApiManagementIdentityProviderAadb2C#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#authority ApiManagementIdentityProviderAadb2C#authority}
  */
  readonly authority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#client_id ApiManagementIdentityProviderAadb2C#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#client_library ApiManagementIdentityProviderAadb2C#client_library}
  */
  readonly clientLibrary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#client_secret ApiManagementIdentityProviderAadb2C#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#id ApiManagementIdentityProviderAadb2C#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#password_reset_policy ApiManagementIdentityProviderAadb2C#password_reset_policy}
  */
  readonly passwordResetPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#profile_editing_policy ApiManagementIdentityProviderAadb2C#profile_editing_policy}
  */
  readonly profileEditingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#resource_group_name ApiManagementIdentityProviderAadb2C#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#signin_policy ApiManagementIdentityProviderAadb2C#signin_policy}
  */
  readonly signinPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#signin_tenant ApiManagementIdentityProviderAadb2C#signin_tenant}
  */
  readonly signinTenant: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#signup_policy ApiManagementIdentityProviderAadb2C#signup_policy}
  */
  readonly signupPolicy: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#timeouts ApiManagementIdentityProviderAadb2C#timeouts}
  */
  readonly timeouts?: ApiManagementIdentityProviderAadb2CTimeouts;
}
export interface ApiManagementIdentityProviderAadb2CTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#create ApiManagementIdentityProviderAadb2C#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#delete ApiManagementIdentityProviderAadb2C#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#read ApiManagementIdentityProviderAadb2C#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#update ApiManagementIdentityProviderAadb2C#update}
  */
  readonly update?: string;
}

export function apiManagementIdentityProviderAadb2CTimeoutsToTerraform(struct?: ApiManagementIdentityProviderAadb2CTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function apiManagementIdentityProviderAadb2CTimeoutsToHclTerraform(struct?: ApiManagementIdentityProviderAadb2CTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementIdentityProviderAadb2CTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementIdentityProviderAadb2CTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementIdentityProviderAadb2CTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c azurerm_api_management_identity_provider_aadb2c}
*/
export class ApiManagementIdentityProviderAadb2C extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_identity_provider_aadb2c";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementIdentityProviderAadb2C resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementIdentityProviderAadb2C to import
  * @param importFromId The id of the existing ApiManagementIdentityProviderAadb2C that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementIdentityProviderAadb2C to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_identity_provider_aadb2c", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_identity_provider_aadb2c azurerm_api_management_identity_provider_aadb2c} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementIdentityProviderAadb2CConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderAadb2CConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_aadb2c',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedTenant = config.allowedTenant;
    this._apiManagementName = config.apiManagementName;
    this._authority = config.authority;
    this._clientId = config.clientId;
    this._clientLibrary = config.clientLibrary;
    this._clientSecret = config.clientSecret;
    this._id = config.id;
    this._passwordResetPolicy = config.passwordResetPolicy;
    this._profileEditingPolicy = config.profileEditingPolicy;
    this._resourceGroupName = config.resourceGroupName;
    this._signinPolicy = config.signinPolicy;
    this._signinTenant = config.signinTenant;
    this._signupPolicy = config.signupPolicy;
    this._timeouts.internalValue = config.timeouts;
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
    return this._allowedTenant;
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
    return this._apiManagementName;
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
    return this._authority;
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
    return this._clientId;
  }

  // client_library - computed: false, optional: true, required: false
  private _clientLibrary?: string; 
  public get clientLibrary() {
    return this.getStringAttribute('client_library');
  }
  public set clientLibrary(value: string) {
    this._clientLibrary = value;
  }
  public resetClientLibrary() {
    this._clientLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLibraryInput() {
    return this._clientLibrary;
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
    return this._clientSecret;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // password_reset_policy - computed: false, optional: true, required: false
  private _passwordResetPolicy?: string; 
  public get passwordResetPolicy() {
    return this.getStringAttribute('password_reset_policy');
  }
  public set passwordResetPolicy(value: string) {
    this._passwordResetPolicy = value;
  }
  public resetPasswordResetPolicy() {
    this._passwordResetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetPolicyInput() {
    return this._passwordResetPolicy;
  }

  // profile_editing_policy - computed: false, optional: true, required: false
  private _profileEditingPolicy?: string; 
  public get profileEditingPolicy() {
    return this.getStringAttribute('profile_editing_policy');
  }
  public set profileEditingPolicy(value: string) {
    this._profileEditingPolicy = value;
  }
  public resetProfileEditingPolicy() {
    this._profileEditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileEditingPolicyInput() {
    return this._profileEditingPolicy;
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
    return this._resourceGroupName;
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
    return this._signinPolicy;
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
    return this._signinTenant;
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
    return this._signupPolicy;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementIdentityProviderAadb2CTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementIdentityProviderAadb2CTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      client_library: cdktf.stringToTerraform(this._clientLibrary),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      id: cdktf.stringToTerraform(this._id),
      password_reset_policy: cdktf.stringToTerraform(this._passwordResetPolicy),
      profile_editing_policy: cdktf.stringToTerraform(this._profileEditingPolicy),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      signin_policy: cdktf.stringToTerraform(this._signinPolicy),
      signin_tenant: cdktf.stringToTerraform(this._signinTenant),
      signup_policy: cdktf.stringToTerraform(this._signupPolicy),
      timeouts: apiManagementIdentityProviderAadb2CTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_tenant: {
        value: cdktf.stringToHclTerraform(this._allowedTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_management_name: {
        value: cdktf.stringToHclTerraform(this._apiManagementName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authority: {
        value: cdktf.stringToHclTerraform(this._authority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_library: {
        value: cdktf.stringToHclTerraform(this._clientLibrary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_reset_policy: {
        value: cdktf.stringToHclTerraform(this._passwordResetPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_editing_policy: {
        value: cdktf.stringToHclTerraform(this._profileEditingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signin_policy: {
        value: cdktf.stringToHclTerraform(this._signinPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signin_tenant: {
        value: cdktf.stringToHclTerraform(this._signinTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signup_policy: {
        value: cdktf.stringToHclTerraform(this._signupPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiManagementIdentityProviderAadb2CTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementIdentityProviderAadb2CTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
