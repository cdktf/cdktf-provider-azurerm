// https://www.terraform.io/docs/providers/azurerm/r/api_management_authorization_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementAuthorizationServerConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly authorizationEndpoint: string;
  readonly authorizationMethods: string[];
  readonly bearerTokenSendingMethods?: string[];
  readonly clientAuthenticationMethod?: string[];
  readonly clientId: string;
  readonly clientRegistrationEndpoint: string;
  readonly clientSecret?: string;
  readonly defaultScope?: string;
  readonly description?: string;
  readonly displayName: string;
  readonly grantTypes: string[];
  readonly name: string;
  readonly resourceGroupName: string;
  readonly resourceOwnerPassword?: string;
  readonly resourceOwnerUsername?: string;
  readonly supportState?: boolean;
  readonly tokenEndpoint?: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementAuthorizationServerTimeouts;
  /** token_body_parameter block */
  readonly tokenBodyParameter?: ApiManagementAuthorizationServerTokenBodyParameter[];
}
export interface ApiManagementAuthorizationServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface ApiManagementAuthorizationServerTokenBodyParameter {
  readonly name: string;
  readonly value: string;
}

// Resource

export class ApiManagementAuthorizationServer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint: string;
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
  private _authorizationMethods: string[];
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
  private _bearerTokenSendingMethods?: string[];
  public get bearerTokenSendingMethods() {
    return this.getListAttribute('bearer_token_sending_methods');
  }
  public set bearerTokenSendingMethods(value: string[] ) {
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
  private _clientAuthenticationMethod?: string[];
  public get clientAuthenticationMethod() {
    return this.getListAttribute('client_authentication_method');
  }
  public set clientAuthenticationMethod(value: string[] ) {
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

  // client_registration_endpoint - computed: false, optional: false, required: true
  private _clientRegistrationEndpoint: string;
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
  private _clientSecret?: string;
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string ) {
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
  private _defaultScope?: string;
  public get defaultScope() {
    return this.getStringAttribute('default_scope');
  }
  public set defaultScope(value: string ) {
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _displayName: string;
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
  private _grantTypes: string[];
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
  private _name: string;
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

  // resource_owner_password - computed: false, optional: true, required: false
  private _resourceOwnerPassword?: string;
  public get resourceOwnerPassword() {
    return this.getStringAttribute('resource_owner_password');
  }
  public set resourceOwnerPassword(value: string ) {
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
  private _resourceOwnerUsername?: string;
  public get resourceOwnerUsername() {
    return this.getStringAttribute('resource_owner_username');
  }
  public set resourceOwnerUsername(value: string ) {
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
  private _supportState?: boolean;
  public get supportState() {
    return this.getBooleanAttribute('support_state');
  }
  public set supportState(value: boolean ) {
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
  private _tokenEndpoint?: string;
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string ) {
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
  private _timeouts?: ApiManagementAuthorizationServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementAuthorizationServerTimeouts ) {
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
  private _tokenBodyParameter?: ApiManagementAuthorizationServerTokenBodyParameter[];
  public get tokenBodyParameter() {
    return this.interpolationForAttribute('token_body_parameter') as any;
  }
  public set tokenBodyParameter(value: ApiManagementAuthorizationServerTokenBodyParameter[] ) {
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
      api_management_name: this._apiManagementName,
      authorization_endpoint: this._authorizationEndpoint,
      authorization_methods: this._authorizationMethods,
      bearer_token_sending_methods: this._bearerTokenSendingMethods,
      client_authentication_method: this._clientAuthenticationMethod,
      client_id: this._clientId,
      client_registration_endpoint: this._clientRegistrationEndpoint,
      client_secret: this._clientSecret,
      default_scope: this._defaultScope,
      description: this._description,
      display_name: this._displayName,
      grant_types: this._grantTypes,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      resource_owner_password: this._resourceOwnerPassword,
      resource_owner_username: this._resourceOwnerUsername,
      support_state: this._supportState,
      token_endpoint: this._tokenEndpoint,
      timeouts: this._timeouts,
      token_body_parameter: this._tokenBodyParameter,
    };
  }
}
