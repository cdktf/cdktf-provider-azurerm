// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementAuthorizationServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}
  */
  readonly authorizationMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}
  */
  readonly bearerTokenSendingMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}
  */
  readonly clientAuthenticationMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}
  */
  readonly clientRegistrationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}
  */
  readonly defaultScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}
  */
  readonly grantTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}
  */
  readonly resourceOwnerPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}
  */
  readonly resourceOwnerUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}
  */
  readonly supportState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#timeouts ApiManagementAuthorizationServer#timeouts}
  */
  readonly timeouts?: ApiManagementAuthorizationServerTimeouts;
  /**
  * token_body_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}
  */
  readonly tokenBodyParameter?: ApiManagementAuthorizationServerTokenBodyParameter[] | cdktf.IResolvable;
}
export interface ApiManagementAuthorizationServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}
  */
  readonly update?: string;
}

export function apiManagementAuthorizationServerTimeoutsToTerraform(struct?: ApiManagementAuthorizationServerTimeouts | cdktf.IResolvable): any {
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


export function apiManagementAuthorizationServerTimeoutsToHclTerraform(struct?: ApiManagementAuthorizationServerTimeouts | cdktf.IResolvable): any {
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

export class ApiManagementAuthorizationServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementAuthorizationServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementAuthorizationServerTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApiManagementAuthorizationServerTokenBodyParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}
  */
  readonly value: string;
}

export function apiManagementAuthorizationServerTokenBodyParameterToTerraform(struct?: ApiManagementAuthorizationServerTokenBodyParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementAuthorizationServerTokenBodyParameterToHclTerraform(struct?: ApiManagementAuthorizationServerTokenBodyParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementAuthorizationServerTokenBodyParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementAuthorizationServerTokenBodyParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementAuthorizationServerTokenBodyParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementAuthorizationServerTokenBodyParameterList extends cdktf.ComplexList {
  public internalValue? : ApiManagementAuthorizationServerTokenBodyParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementAuthorizationServerTokenBodyParameterOutputReference {
    return new ApiManagementAuthorizationServerTokenBodyParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server azurerm_api_management_authorization_server}
*/
export class ApiManagementAuthorizationServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_authorization_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementAuthorizationServer to import
  * @param importFromId The id of the existing ApiManagementAuthorizationServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementAuthorizationServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_authorization_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_authorization_server azurerm_api_management_authorization_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementAuthorizationServerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementAuthorizationServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_authorization_server',
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
    this._apiManagementName = config.apiManagementName;
    this._authorizationEndpoint = config.authorizationEndpoint;
    this._authorizationMethods = config.authorizationMethods;
    this._bearerTokenSendingMethods = config.bearerTokenSendingMethods;
    this._clientAuthenticationMethod = config.clientAuthenticationMethod;
    this._clientId = config.clientId;
    this._clientRegistrationEndpoint = config.clientRegistrationEndpoint;
    this._clientSecret = config.clientSecret;
    this._defaultScope = config.defaultScope;
    this._description = config.description;
    this._displayName = config.displayName;
    this._grantTypes = config.grantTypes;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceOwnerPassword = config.resourceOwnerPassword;
    this._resourceOwnerUsername = config.resourceOwnerUsername;
    this._supportState = config.supportState;
    this._tokenEndpoint = config.tokenEndpoint;
    this._timeouts.internalValue = config.timeouts;
    this._tokenBodyParameter.internalValue = config.tokenBodyParameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // authorization_methods - computed: false, optional: false, required: true
  private _authorizationMethods?: string[]; 
  public get authorizationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('authorization_methods'));
  }
  public set authorizationMethods(value: string[]) {
    this._authorizationMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationMethodsInput() {
    return this._authorizationMethods;
  }

  // bearer_token_sending_methods - computed: false, optional: true, required: false
  private _bearerTokenSendingMethods?: string[]; 
  public get bearerTokenSendingMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('bearer_token_sending_methods'));
  }
  public set bearerTokenSendingMethods(value: string[]) {
    this._bearerTokenSendingMethods = value;
  }
  public resetBearerTokenSendingMethods() {
    this._bearerTokenSendingMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSendingMethodsInput() {
    return this._bearerTokenSendingMethods;
  }

  // client_authentication_method - computed: false, optional: true, required: false
  private _clientAuthenticationMethod?: string[]; 
  public get clientAuthenticationMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('client_authentication_method'));
  }
  public set clientAuthenticationMethod(value: string[]) {
    this._clientAuthenticationMethod = value;
  }
  public resetClientAuthenticationMethod() {
    this._clientAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationMethodInput() {
    return this._clientAuthenticationMethod;
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

  // client_registration_endpoint - computed: false, optional: false, required: true
  private _clientRegistrationEndpoint?: string; 
  public get clientRegistrationEndpoint() {
    return this.getStringAttribute('client_registration_endpoint');
  }
  public set clientRegistrationEndpoint(value: string) {
    this._clientRegistrationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRegistrationEndpointInput() {
    return this._clientRegistrationEndpoint;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // default_scope - computed: false, optional: true, required: false
  private _defaultScope?: string; 
  public get defaultScope() {
    return this.getStringAttribute('default_scope');
  }
  public set defaultScope(value: string) {
    this._defaultScope = value;
  }
  public resetDefaultScope() {
    this._defaultScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScopeInput() {
    return this._defaultScope;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // resource_owner_password - computed: false, optional: true, required: false
  private _resourceOwnerPassword?: string; 
  public get resourceOwnerPassword() {
    return this.getStringAttribute('resource_owner_password');
  }
  public set resourceOwnerPassword(value: string) {
    this._resourceOwnerPassword = value;
  }
  public resetResourceOwnerPassword() {
    this._resourceOwnerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerPasswordInput() {
    return this._resourceOwnerPassword;
  }

  // resource_owner_username - computed: false, optional: true, required: false
  private _resourceOwnerUsername?: string; 
  public get resourceOwnerUsername() {
    return this.getStringAttribute('resource_owner_username');
  }
  public set resourceOwnerUsername(value: string) {
    this._resourceOwnerUsername = value;
  }
  public resetResourceOwnerUsername() {
    this._resourceOwnerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerUsernameInput() {
    return this._resourceOwnerUsername;
  }

  // support_state - computed: false, optional: true, required: false
  private _supportState?: boolean | cdktf.IResolvable; 
  public get supportState() {
    return this.getBooleanAttribute('support_state');
  }
  public set supportState(value: boolean | cdktf.IResolvable) {
    this._supportState = value;
  }
  public resetSupportState() {
    this._supportState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportStateInput() {
    return this._supportState;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementAuthorizationServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementAuthorizationServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // token_body_parameter - computed: false, optional: true, required: false
  private _tokenBodyParameter = new ApiManagementAuthorizationServerTokenBodyParameterList(this, "token_body_parameter", false);
  public get tokenBodyParameter() {
    return this._tokenBodyParameter;
  }
  public putTokenBodyParameter(value: ApiManagementAuthorizationServerTokenBodyParameter[] | cdktf.IResolvable) {
    this._tokenBodyParameter.internalValue = value;
  }
  public resetTokenBodyParameter() {
    this._tokenBodyParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBodyParameterInput() {
    return this._tokenBodyParameter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      authorization_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizationMethods),
      bearer_token_sending_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bearerTokenSendingMethods),
      client_authentication_method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientAuthenticationMethod),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_registration_endpoint: cdktf.stringToTerraform(this._clientRegistrationEndpoint),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      default_scope: cdktf.stringToTerraform(this._defaultScope),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_owner_password: cdktf.stringToTerraform(this._resourceOwnerPassword),
      resource_owner_username: cdktf.stringToTerraform(this._resourceOwnerUsername),
      support_state: cdktf.booleanToTerraform(this._supportState),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
      timeouts: apiManagementAuthorizationServerTimeoutsToTerraform(this._timeouts.internalValue),
      token_body_parameter: cdktf.listMapper(apiManagementAuthorizationServerTokenBodyParameterToTerraform, true)(this._tokenBodyParameter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_management_name: {
        value: cdktf.stringToHclTerraform(this._apiManagementName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._authorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizationMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bearer_token_sending_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bearerTokenSendingMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_authentication_method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientAuthenticationMethod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_registration_endpoint: {
        value: cdktf.stringToHclTerraform(this._clientRegistrationEndpoint),
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
      default_scope: {
        value: cdktf.stringToHclTerraform(this._defaultScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      resource_owner_password: {
        value: cdktf.stringToHclTerraform(this._resourceOwnerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_owner_username: {
        value: cdktf.stringToHclTerraform(this._resourceOwnerUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_state: {
        value: cdktf.booleanToHclTerraform(this._supportState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_endpoint: {
        value: cdktf.stringToHclTerraform(this._tokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiManagementAuthorizationServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementAuthorizationServerTimeouts",
      },
      token_body_parameter: {
        value: cdktf.listMapperHcl(apiManagementAuthorizationServerTokenBodyParameterToHclTerraform, true)(this._tokenBodyParameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementAuthorizationServerTokenBodyParameterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
