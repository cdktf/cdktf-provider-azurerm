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
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint: string;
  public get authorizationEndpoint() {
    return this._authorizationEndpoint;
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }

  // authorization_methods - computed: false, optional: false, required: true
  private _authorizationMethods: string[];
  public get authorizationMethods() {
    return this._authorizationMethods;
  }
  public set authorizationMethods(value: string[]) {
    this._authorizationMethods = value;
  }

  // bearer_token_sending_methods - computed: false, optional: true, required: false
  private _bearerTokenSendingMethods?: string[];
  public get bearerTokenSendingMethods() {
    return this._bearerTokenSendingMethods;
  }
  public set bearerTokenSendingMethods(value: string[] | undefined) {
    this._bearerTokenSendingMethods = value;
  }

  // client_authentication_method - computed: false, optional: true, required: false
  private _clientAuthenticationMethod?: string[];
  public get clientAuthenticationMethod() {
    return this._clientAuthenticationMethod;
  }
  public set clientAuthenticationMethod(value: string[] | undefined) {
    this._clientAuthenticationMethod = value;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string) {
    this._clientId = value;
  }

  // client_registration_endpoint - computed: false, optional: false, required: true
  private _clientRegistrationEndpoint: string;
  public get clientRegistrationEndpoint() {
    return this._clientRegistrationEndpoint;
  }
  public set clientRegistrationEndpoint(value: string) {
    this._clientRegistrationEndpoint = value;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string;
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }

  // default_scope - computed: false, optional: true, required: false
  private _defaultScope?: string;
  public get defaultScope() {
    return this._defaultScope;
  }
  public set defaultScope(value: string | undefined) {
    this._defaultScope = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes: string[];
  public get grantTypes() {
    return this._grantTypes;
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // resource_owner_password - computed: false, optional: true, required: false
  private _resourceOwnerPassword?: string;
  public get resourceOwnerPassword() {
    return this._resourceOwnerPassword;
  }
  public set resourceOwnerPassword(value: string | undefined) {
    this._resourceOwnerPassword = value;
  }

  // resource_owner_username - computed: false, optional: true, required: false
  private _resourceOwnerUsername?: string;
  public get resourceOwnerUsername() {
    return this._resourceOwnerUsername;
  }
  public set resourceOwnerUsername(value: string | undefined) {
    this._resourceOwnerUsername = value;
  }

  // support_state - computed: false, optional: true, required: false
  private _supportState?: boolean;
  public get supportState() {
    return this._supportState;
  }
  public set supportState(value: boolean | undefined) {
    this._supportState = value;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string;
  public get tokenEndpoint() {
    return this._tokenEndpoint;
  }
  public set tokenEndpoint(value: string | undefined) {
    this._tokenEndpoint = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementAuthorizationServerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementAuthorizationServerTimeouts | undefined) {
    this._timeouts = value;
  }

  // token_body_parameter - computed: false, optional: true, required: false
  private _tokenBodyParameter?: ApiManagementAuthorizationServerTokenBodyParameter[];
  public get tokenBodyParameter() {
    return this._tokenBodyParameter;
  }
  public set tokenBodyParameter(value: ApiManagementAuthorizationServerTokenBodyParameter[] | undefined) {
    this._tokenBodyParameter = value;
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
