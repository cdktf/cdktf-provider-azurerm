// https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#api_management_name ApiManagementApi#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#description ApiManagementApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#display_name ApiManagementApi#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#name ApiManagementApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#path ApiManagementApi#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#protocols ApiManagementApi#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#resource_group_name ApiManagementApi#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#revision ApiManagementApi#revision}
  */
  readonly revision: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#revision_description ApiManagementApi#revision_description}
  */
  readonly revisionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#service_url ApiManagementApi#service_url}
  */
  readonly serviceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#soap_pass_through ApiManagementApi#soap_pass_through}
  */
  readonly soapPassThrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#source_api_id ApiManagementApi#source_api_id}
  */
  readonly sourceApiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#subscription_required ApiManagementApi#subscription_required}
  */
  readonly subscriptionRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#version ApiManagementApi#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#version_description ApiManagementApi#version_description}
  */
  readonly versionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#version_set_id ApiManagementApi#version_set_id}
  */
  readonly versionSetId?: string;
  /**
  * import block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#import ApiManagementApi#import}
  */
  readonly import?: ApiManagementApiImport;
  /**
  * oauth2_authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#oauth2_authorization ApiManagementApi#oauth2_authorization}
  */
  readonly oauth2Authorization?: ApiManagementApiOauth2Authorization;
  /**
  * openid_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#openid_authentication ApiManagementApi#openid_authentication}
  */
  readonly openidAuthentication?: ApiManagementApiOpenidAuthentication;
  /**
  * subscription_key_parameter_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#subscription_key_parameter_names ApiManagementApi#subscription_key_parameter_names}
  */
  readonly subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#timeouts ApiManagementApi#timeouts}
  */
  readonly timeouts?: ApiManagementApiTimeouts;
}
export interface ApiManagementApiImportWsdlSelector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#endpoint_name ApiManagementApi#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#service_name ApiManagementApi#service_name}
  */
  readonly serviceName: string;
}

function apiManagementApiImportWsdlSelectorToTerraform(struct?: ApiManagementApiImportWsdlSelectorOutputReference | ApiManagementApiImportWsdlSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class ApiManagementApiImportWsdlSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }
}
export interface ApiManagementApiImport {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#content_format ApiManagementApi#content_format}
  */
  readonly contentFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#content_value ApiManagementApi#content_value}
  */
  readonly contentValue: string;
  /**
  * wsdl_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#wsdl_selector ApiManagementApi#wsdl_selector}
  */
  readonly wsdlSelector?: ApiManagementApiImportWsdlSelector;
}

function apiManagementApiImportToTerraform(struct?: ApiManagementApiImportOutputReference | ApiManagementApiImport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_format: cdktf.stringToTerraform(struct!.contentFormat),
    content_value: cdktf.stringToTerraform(struct!.contentValue),
    wsdl_selector: apiManagementApiImportWsdlSelectorToTerraform(struct!.wsdlSelector),
  }
}

export class ApiManagementApiImportOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_format - computed: false, optional: false, required: true
  private _contentFormat?: string; 
  public get contentFormat() {
    return this.getStringAttribute('content_format');
  }
  public set contentFormat(value: string) {
    this._contentFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFormatInput() {
    return this._contentFormat
  }

  // content_value - computed: false, optional: false, required: true
  private _contentValue?: string; 
  public get contentValue() {
    return this.getStringAttribute('content_value');
  }
  public set contentValue(value: string) {
    this._contentValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentValueInput() {
    return this._contentValue
  }

  // wsdl_selector - computed: false, optional: true, required: false
  private _wsdlSelector?: ApiManagementApiImportWsdlSelector | undefined; 
  private __wsdlSelectorOutput = new ApiManagementApiImportWsdlSelectorOutputReference(this as any, "wsdl_selector", true);
  public get wsdlSelector() {
    return this.__wsdlSelectorOutput;
  }
  public putWsdlSelector(value: ApiManagementApiImportWsdlSelector | undefined) {
    this._wsdlSelector = value;
  }
  public resetWsdlSelector() {
    this._wsdlSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsdlSelectorInput() {
    return this._wsdlSelector
  }
}
export interface ApiManagementApiOauth2Authorization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#authorization_server_name ApiManagementApi#authorization_server_name}
  */
  readonly authorizationServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#scope ApiManagementApi#scope}
  */
  readonly scope?: string;
}

function apiManagementApiOauth2AuthorizationToTerraform(struct?: ApiManagementApiOauth2AuthorizationOutputReference | ApiManagementApiOauth2Authorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_server_name: cdktf.stringToTerraform(struct!.authorizationServerName),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class ApiManagementApiOauth2AuthorizationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // authorization_server_name - computed: false, optional: false, required: true
  private _authorizationServerName?: string; 
  public get authorizationServerName() {
    return this.getStringAttribute('authorization_server_name');
  }
  public set authorizationServerName(value: string) {
    this._authorizationServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServerNameInput() {
    return this._authorizationServerName
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string | undefined; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string | undefined) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }
}
export interface ApiManagementApiOpenidAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}
  */
  readonly bearerTokenSendingMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#openid_provider_name ApiManagementApi#openid_provider_name}
  */
  readonly openidProviderName: string;
}

function apiManagementApiOpenidAuthenticationToTerraform(struct?: ApiManagementApiOpenidAuthenticationOutputReference | ApiManagementApiOpenidAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token_sending_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bearerTokenSendingMethods),
    openid_provider_name: cdktf.stringToTerraform(struct!.openidProviderName),
  }
}

export class ApiManagementApiOpenidAuthenticationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // openid_provider_name - computed: false, optional: false, required: true
  private _openidProviderName?: string; 
  public get openidProviderName() {
    return this.getStringAttribute('openid_provider_name');
  }
  public set openidProviderName(value: string) {
    this._openidProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openidProviderNameInput() {
    return this._openidProviderName
  }
}
export interface ApiManagementApiSubscriptionKeyParameterNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#header ApiManagementApi#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#query ApiManagementApi#query}
  */
  readonly query: string;
}

function apiManagementApiSubscriptionKeyParameterNamesToTerraform(struct?: ApiManagementApiSubscriptionKeyParameterNamesOutputReference | ApiManagementApiSubscriptionKeyParameterNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class ApiManagementApiSubscriptionKeyParameterNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }
}
export interface ApiManagementApiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#create ApiManagementApi#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#delete ApiManagementApi#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#read ApiManagementApi#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html#update ApiManagementApi#update}
  */
  readonly update?: string;
}

function apiManagementApiTimeoutsToTerraform(struct?: ApiManagementApiTimeoutsOutputReference | ApiManagementApiTimeouts): any {
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

export class ApiManagementApiTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html azurerm_api_management_api}
*/
export class ApiManagementApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_api";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html azurerm_api_management_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiConfig
  */
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
    this._revisionDescription = config.revisionDescription;
    this._serviceUrl = config.serviceUrl;
    this._soapPassThrough = config.soapPassThrough;
    this._sourceApiId = config.sourceApiId;
    this._subscriptionRequired = config.subscriptionRequired;
    this._version = config.version;
    this._versionDescription = config.versionDescription;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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
    return this.getBooleanAttribute('is_current') as any;
  }

  // is_online - computed: true, optional: false, required: false
  public get isOnline() {
    return this.getBooleanAttribute('is_online') as any;
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

  // path - computed: true, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[] | undefined; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[] | undefined) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols
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

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
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

  // revision_description - computed: false, optional: true, required: false
  private _revisionDescription?: string | undefined; 
  public get revisionDescription() {
    return this.getStringAttribute('revision_description');
  }
  public set revisionDescription(value: string | undefined) {
    this._revisionDescription = value;
  }
  public resetRevisionDescription() {
    this._revisionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionDescriptionInput() {
    return this._revisionDescription
  }

  // service_url - computed: true, optional: true, required: false
  private _serviceUrl?: string | undefined; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string | undefined) {
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
  private _soapPassThrough?: boolean | cdktf.IResolvable | undefined; 
  public get soapPassThrough() {
    return this.getBooleanAttribute('soap_pass_through') as any;
  }
  public set soapPassThrough(value: boolean | cdktf.IResolvable | undefined) {
    this._soapPassThrough = value;
  }
  public resetSoapPassThrough() {
    this._soapPassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapPassThroughInput() {
    return this._soapPassThrough
  }

  // source_api_id - computed: false, optional: true, required: false
  private _sourceApiId?: string | undefined; 
  public get sourceApiId() {
    return this.getStringAttribute('source_api_id');
  }
  public set sourceApiId(value: string | undefined) {
    this._sourceApiId = value;
  }
  public resetSourceApiId() {
    this._sourceApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiIdInput() {
    return this._sourceApiId
  }

  // subscription_required - computed: false, optional: true, required: false
  private _subscriptionRequired?: boolean | cdktf.IResolvable | undefined; 
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required') as any;
  }
  public set subscriptionRequired(value: boolean | cdktf.IResolvable | undefined) {
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
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string | undefined; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string | undefined) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription
  }

  // version_set_id - computed: true, optional: true, required: false
  private _versionSetId?: string | undefined; 
  public get versionSetId() {
    return this.getStringAttribute('version_set_id');
  }
  public set versionSetId(value: string | undefined) {
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
  private _import?: ApiManagementApiImport | undefined; 
  private __importOutput = new ApiManagementApiImportOutputReference(this as any, "import", true);
  public get import() {
    return this.__importOutput;
  }
  public putImport(value: ApiManagementApiImport | undefined) {
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
  private _oauth2Authorization?: ApiManagementApiOauth2Authorization | undefined; 
  private __oauth2AuthorizationOutput = new ApiManagementApiOauth2AuthorizationOutputReference(this as any, "oauth2_authorization", true);
  public get oauth2Authorization() {
    return this.__oauth2AuthorizationOutput;
  }
  public putOauth2Authorization(value: ApiManagementApiOauth2Authorization | undefined) {
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
  private _openidAuthentication?: ApiManagementApiOpenidAuthentication | undefined; 
  private __openidAuthenticationOutput = new ApiManagementApiOpenidAuthenticationOutputReference(this as any, "openid_authentication", true);
  public get openidAuthentication() {
    return this.__openidAuthenticationOutput;
  }
  public putOpenidAuthentication(value: ApiManagementApiOpenidAuthentication | undefined) {
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
  private _subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames | undefined; 
  private __subscriptionKeyParameterNamesOutput = new ApiManagementApiSubscriptionKeyParameterNamesOutputReference(this as any, "subscription_key_parameter_names", true);
  public get subscriptionKeyParameterNames() {
    return this.__subscriptionKeyParameterNamesOutput;
  }
  public putSubscriptionKeyParameterNames(value: ApiManagementApiSubscriptionKeyParameterNames | undefined) {
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
  private _timeouts?: ApiManagementApiTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementApiTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementApiTimeouts | undefined) {
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
      revision_description: cdktf.stringToTerraform(this._revisionDescription),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      soap_pass_through: cdktf.booleanToTerraform(this._soapPassThrough),
      source_api_id: cdktf.stringToTerraform(this._sourceApiId),
      subscription_required: cdktf.booleanToTerraform(this._subscriptionRequired),
      version: cdktf.stringToTerraform(this._version),
      version_description: cdktf.stringToTerraform(this._versionDescription),
      version_set_id: cdktf.stringToTerraform(this._versionSetId),
      import: apiManagementApiImportToTerraform(this._import),
      oauth2_authorization: apiManagementApiOauth2AuthorizationToTerraform(this._oauth2Authorization),
      openid_authentication: apiManagementApiOpenidAuthenticationToTerraform(this._openidAuthentication),
      subscription_key_parameter_names: apiManagementApiSubscriptionKeyParameterNamesToTerraform(this._subscriptionKeyParameterNames),
      timeouts: apiManagementApiTimeoutsToTerraform(this._timeouts),
    };
  }
}
