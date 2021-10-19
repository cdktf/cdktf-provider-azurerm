// https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementAuthorizationServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#api_management_name ApiManagementAuthorizationServer#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#authorization_methods ApiManagementAuthorizationServer#authorization_methods}
  */
  readonly authorizationMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}
  */
  readonly bearerTokenSendingMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}
  */
  readonly clientAuthenticationMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#client_id ApiManagementAuthorizationServer#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}
  */
  readonly clientRegistrationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#client_secret ApiManagementAuthorizationServer#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#default_scope ApiManagementAuthorizationServer#default_scope}
  */
  readonly defaultScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#description ApiManagementAuthorizationServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#display_name ApiManagementAuthorizationServer#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#grant_types ApiManagementAuthorizationServer#grant_types}
  */
  readonly grantTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#name ApiManagementAuthorizationServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#resource_group_name ApiManagementAuthorizationServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}
  */
  readonly resourceOwnerPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}
  */
  readonly resourceOwnerUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#support_state ApiManagementAuthorizationServer#support_state}
  */
  readonly supportState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#token_endpoint ApiManagementAuthorizationServer#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#timeouts ApiManagementAuthorizationServer#timeouts}
  */
  readonly timeouts?: ApiManagementAuthorizationServerTimeouts;
  /**
  * token_body_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}
  */
  readonly tokenBodyParameter?: ApiManagementAuthorizationServerTokenBodyParameter[];
}
export interface ApiManagementAuthorizationServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#create ApiManagementAuthorizationServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#delete ApiManagementAuthorizationServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#read ApiManagementAuthorizationServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#update ApiManagementAuthorizationServer#update}
  */
  readonly update?: string;
}

function apiManagementAuthorizationServerTimeoutsToTerraform(struct?: ApiManagementAuthorizationServerTimeoutsOutputReference | ApiManagementAuthorizationServerTimeouts): any {
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

export class ApiManagementAuthorizationServerTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface ApiManagementAuthorizationServerTokenBodyParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#name ApiManagementAuthorizationServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html#value ApiManagementAuthorizationServer#value}
  */
  readonly value: string;
}

function apiManagementAuthorizationServerTokenBodyParameterToTerraform(struct?: ApiManagementAuthorizationServerTokenBodyParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html azurerm_api_management_authorization_server}
*/
export class ApiManagementAuthorizationServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_authorization_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html azurerm_api_management_authorization_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementAuthorizationServerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementAuthorizationServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_authorization_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceOwnerPassword = config.resourceOwnerPassword;
    this._resourceOwnerUsername = config.resourceOwnerUsername;
    this._supportState = config.supportState;
    this._tokenEndpoint = config.tokenEndpoint;
    this._timeouts = config.timeouts;
    this._tokenBodyParameter = config.tokenBodyParameter;
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
    return this._apiManagementName
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
    return this._authorizationEndpoint
  }

  // authorization_methods - computed: false, optional: false, required: true
  private _authorizationMethods?: string[]; 
  public get authorizationMethods() {
    return this.getListAttribute('authorization_methods');
  }
  public set authorizationMethods(value: string[]) {
    this._authorizationMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationMethodsInput() {
    return this._authorizationMethods
  }

  // bearer_token_sending_methods - computed: false, optional: true, required: false
  private _bearerTokenSendingMethods?: string[] | undefined; 
  public get bearerTokenSendingMethods() {
    return this.getListAttribute('bearer_token_sending_methods');
  }
  public set bearerTokenSendingMethods(value: string[] | undefined) {
    this._bearerTokenSendingMethods = value;
  }
  public resetBearerTokenSendingMethods() {
    this._bearerTokenSendingMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSendingMethodsInput() {
    return this._bearerTokenSendingMethods
  }

  // client_authentication_method - computed: false, optional: true, required: false
  private _clientAuthenticationMethod?: string[] | undefined; 
  public get clientAuthenticationMethod() {
    return this.getListAttribute('client_authentication_method');
  }
  public set clientAuthenticationMethod(value: string[] | undefined) {
    this._clientAuthenticationMethod = value;
  }
  public resetClientAuthenticationMethod() {
    this._clientAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationMethodInput() {
    return this._clientAuthenticationMethod
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
    return this._clientRegistrationEndpoint
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string | undefined; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // default_scope - computed: false, optional: true, required: false
  private _defaultScope?: string | undefined; 
  public get defaultScope() {
    return this.getStringAttribute('default_scope');
  }
  public set defaultScope(value: string | undefined) {
    this._defaultScope = value;
  }
  public resetDefaultScope() {
    this._defaultScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScopeInput() {
    return this._defaultScope
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
    return this._displayName
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
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

  // resource_owner_password - computed: false, optional: true, required: false
  private _resourceOwnerPassword?: string | undefined; 
  public get resourceOwnerPassword() {
    return this.getStringAttribute('resource_owner_password');
  }
  public set resourceOwnerPassword(value: string | undefined) {
    this._resourceOwnerPassword = value;
  }
  public resetResourceOwnerPassword() {
    this._resourceOwnerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerPasswordInput() {
    return this._resourceOwnerPassword
  }

  // resource_owner_username - computed: false, optional: true, required: false
  private _resourceOwnerUsername?: string | undefined; 
  public get resourceOwnerUsername() {
    return this.getStringAttribute('resource_owner_username');
  }
  public set resourceOwnerUsername(value: string | undefined) {
    this._resourceOwnerUsername = value;
  }
  public resetResourceOwnerUsername() {
    this._resourceOwnerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerUsernameInput() {
    return this._resourceOwnerUsername
  }

  // support_state - computed: false, optional: true, required: false
  private _supportState?: boolean | cdktf.IResolvable | undefined; 
  public get supportState() {
    return this.getBooleanAttribute('support_state') as any;
  }
  public set supportState(value: boolean | cdktf.IResolvable | undefined) {
    this._supportState = value;
  }
  public resetSupportState() {
    this._supportState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportStateInput() {
    return this._supportState
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string | undefined; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string | undefined) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementAuthorizationServerTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementAuthorizationServerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementAuthorizationServerTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // token_body_parameter - computed: false, optional: true, required: false
  private _tokenBodyParameter?: ApiManagementAuthorizationServerTokenBodyParameter[] | undefined; 
  public get tokenBodyParameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('token_body_parameter') as any;
  }
  public set tokenBodyParameter(value: ApiManagementAuthorizationServerTokenBodyParameter[] | undefined) {
    this._tokenBodyParameter = value;
  }
  public resetTokenBodyParameter() {
    this._tokenBodyParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBodyParameterInput() {
    return this._tokenBodyParameter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      authorization_methods: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationMethods),
      bearer_token_sending_methods: cdktf.listMapper(cdktf.stringToTerraform)(this._bearerTokenSendingMethods),
      client_authentication_method: cdktf.listMapper(cdktf.stringToTerraform)(this._clientAuthenticationMethod),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_registration_endpoint: cdktf.stringToTerraform(this._clientRegistrationEndpoint),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      default_scope: cdktf.stringToTerraform(this._defaultScope),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTypes),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_owner_password: cdktf.stringToTerraform(this._resourceOwnerPassword),
      resource_owner_username: cdktf.stringToTerraform(this._resourceOwnerUsername),
      support_state: cdktf.booleanToTerraform(this._supportState),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
      timeouts: apiManagementAuthorizationServerTimeoutsToTerraform(this._timeouts),
      token_body_parameter: cdktf.listMapper(apiManagementAuthorizationServerTokenBodyParameterToTerraform)(this._tokenBodyParameter),
    };
  }
}
