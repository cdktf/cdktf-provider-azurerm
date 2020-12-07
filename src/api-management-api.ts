// https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly description?: string;
  readonly displayName: string;
  readonly name: string;
  readonly path: string;
  readonly protocols: string[];
  readonly resourceGroupName: string;
  readonly revision: string;
  readonly serviceUrl?: string;
  readonly soapPassThrough?: boolean;
  readonly subscriptionRequired?: boolean;
  readonly version?: string;
  readonly versionSetId?: string;
  /** import block */
  readonly import?: ApiManagementApiImport[];
  /** oauth2_authorization block */
  readonly oauth2Authorization?: ApiManagementApiOauth2Authorization[];
  /** openid_authentication block */
  readonly openidAuthentication?: ApiManagementApiOpenidAuthentication[];
  /** subscription_key_parameter_names block */
  readonly subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames[];
  /** timeouts block */
  readonly timeouts?: ApiManagementApiTimeouts;
}
export interface ApiManagementApiImportWsdlSelector {
  readonly endpointName: string;
  readonly serviceName: string;
}

function apiManagementApiImportWsdlSelectorToTerraform(struct?: ApiManagementApiImportWsdlSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export interface ApiManagementApiImport {
  readonly contentFormat: string;
  readonly contentValue: string;
  /** wsdl_selector block */
  readonly wsdlSelector?: ApiManagementApiImportWsdlSelector[];
}

function apiManagementApiImportToTerraform(struct?: ApiManagementApiImport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_format: cdktf.stringToTerraform(struct!.contentFormat),
    content_value: cdktf.stringToTerraform(struct!.contentValue),
    wsdl_selector: cdktf.listMapper(apiManagementApiImportWsdlSelectorToTerraform)(struct!.wsdlSelector),
  }
}

export interface ApiManagementApiOauth2Authorization {
  readonly authorizationServerName: string;
  readonly scope?: string;
}

function apiManagementApiOauth2AuthorizationToTerraform(struct?: ApiManagementApiOauth2Authorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authorization_server_name: cdktf.stringToTerraform(struct!.authorizationServerName),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface ApiManagementApiOpenidAuthentication {
  readonly bearerTokenSendingMethods?: string[];
  readonly openidProviderName: string;
}

function apiManagementApiOpenidAuthenticationToTerraform(struct?: ApiManagementApiOpenidAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bearer_token_sending_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bearerTokenSendingMethods),
    openid_provider_name: cdktf.stringToTerraform(struct!.openidProviderName),
  }
}

export interface ApiManagementApiSubscriptionKeyParameterNames {
  readonly header: string;
  readonly query: string;
}

function apiManagementApiSubscriptionKeyParameterNamesToTerraform(struct?: ApiManagementApiSubscriptionKeyParameterNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface ApiManagementApiTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function apiManagementApiTimeoutsToTerraform(struct?: ApiManagementApiTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementApi extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementApiConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._name = config.name;
    this._path = config.path;
    this._protocols = config.protocols;
    this._resourceGroupName = config.resourceGroupName;
    this._revision = config.revision;
    this._serviceUrl = config.serviceUrl;
    this._soapPassThrough = config.soapPassThrough;
    this._subscriptionRequired = config.subscriptionRequired;
    this._version = config.version;
    this._versionSetId = config.versionSetId;
    this._import = config.import;
    this._oauth2Authorization = config.oauth2Authorization;
    this._openidAuthentication = config.openidAuthentication;
    this._subscriptionKeyParameterNames = config.subscriptionKeyParameterNames;
    this._timeouts = config.timeouts;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_current - computed: true, optional: false, required: false
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_online - computed: true, optional: false, required: false
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
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

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols: string[];
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols
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

  // revision - computed: false, optional: false, required: true
  private _revision: string;
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision
  }

  // service_url - computed: true, optional: true, required: false
  private _serviceUrl?: string;
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  public resetServiceUrl() {
    this._serviceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl
  }

  // soap_pass_through - computed: false, optional: true, required: false
  private _soapPassThrough?: boolean;
  public get soapPassThrough() {
    return this.getBooleanAttribute('soap_pass_through');
  }
  public set soapPassThrough(value: boolean ) {
    this._soapPassThrough = value;
  }
  public resetSoapPassThrough() {
    this._soapPassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapPassThroughInput() {
    return this._soapPassThrough
  }

  // subscription_required - computed: false, optional: true, required: false
  private _subscriptionRequired?: boolean;
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }
  public set subscriptionRequired(value: boolean ) {
    this._subscriptionRequired = value;
  }
  public resetSubscriptionRequired() {
    this._subscriptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionRequiredInput() {
    return this._subscriptionRequired
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // version_set_id - computed: true, optional: true, required: false
  private _versionSetId?: string;
  public get versionSetId() {
    return this.getStringAttribute('version_set_id');
  }
  public set versionSetId(value: string) {
    this._versionSetId = value;
  }
  public resetVersionSetId() {
    this._versionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionSetIdInput() {
    return this._versionSetId
  }

  // import - computed: false, optional: true, required: false
  private _import?: ApiManagementApiImport[];
  public get import() {
    return this.interpolationForAttribute('import') as any;
  }
  public set import(value: ApiManagementApiImport[] ) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import
  }

  // oauth2_authorization - computed: false, optional: true, required: false
  private _oauth2Authorization?: ApiManagementApiOauth2Authorization[];
  public get oauth2Authorization() {
    return this.interpolationForAttribute('oauth2_authorization') as any;
  }
  public set oauth2Authorization(value: ApiManagementApiOauth2Authorization[] ) {
    this._oauth2Authorization = value;
  }
  public resetOauth2Authorization() {
    this._oauth2Authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizationInput() {
    return this._oauth2Authorization
  }

  // openid_authentication - computed: false, optional: true, required: false
  private _openidAuthentication?: ApiManagementApiOpenidAuthentication[];
  public get openidAuthentication() {
    return this.interpolationForAttribute('openid_authentication') as any;
  }
  public set openidAuthentication(value: ApiManagementApiOpenidAuthentication[] ) {
    this._openidAuthentication = value;
  }
  public resetOpenidAuthentication() {
    this._openidAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidAuthenticationInput() {
    return this._openidAuthentication
  }

  // subscription_key_parameter_names - computed: false, optional: true, required: false
  private _subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames[];
  public get subscriptionKeyParameterNames() {
    return this.interpolationForAttribute('subscription_key_parameter_names') as any;
  }
  public set subscriptionKeyParameterNames(value: ApiManagementApiSubscriptionKeyParameterNames[] ) {
    this._subscriptionKeyParameterNames = value;
  }
  public resetSubscriptionKeyParameterNames() {
    this._subscriptionKeyParameterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionKeyParameterNamesInput() {
    return this._subscriptionKeyParameterNames
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementApiTimeouts ) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._protocols),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      revision: cdktf.stringToTerraform(this._revision),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      soap_pass_through: cdktf.booleanToTerraform(this._soapPassThrough),
      subscription_required: cdktf.booleanToTerraform(this._subscriptionRequired),
      version: cdktf.stringToTerraform(this._version),
      version_set_id: cdktf.stringToTerraform(this._versionSetId),
      import: cdktf.listMapper(apiManagementApiImportToTerraform)(this._import),
      oauth2_authorization: cdktf.listMapper(apiManagementApiOauth2AuthorizationToTerraform)(this._oauth2Authorization),
      openid_authentication: cdktf.listMapper(apiManagementApiOpenidAuthenticationToTerraform)(this._openidAuthentication),
      subscription_key_parameter_names: cdktf.listMapper(apiManagementApiSubscriptionKeyParameterNamesToTerraform)(this._subscriptionKeyParameterNames),
      timeouts: apiManagementApiTimeoutsToTerraform(this._timeouts),
    };
  }
}
