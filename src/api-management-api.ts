// https://www.terraform.io/docs/providers/azurerm/r/api_management_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementApiConfig extends TerraformMetaArguments {
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
  readonly version?: string;
  readonly versionSetId?: string;
  /** import block */
  readonly import?: ApiManagementApiImport[];
  /** subscription_key_parameter_names block */
  readonly subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames[];
  /** timeouts block */
  readonly timeouts?: ApiManagementApiTimeouts;
}
export interface ApiManagementApiImportWsdlSelector {
  readonly endpointName: string;
  readonly serviceName: string;
}
export interface ApiManagementApiImport {
  readonly contentFormat: string;
  readonly contentValue: string;
  /** wsdl_selector block */
  readonly wsdlSelector?: ApiManagementApiImportWsdlSelector[];
}
export interface ApiManagementApiSubscriptionKeyParameterNames {
  readonly header: string;
  readonly query: string;
}
export interface ApiManagementApiTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementApi extends TerraformResource {

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
    this._version = config.version;
    this._versionSetId = config.versionSetId;
    this._import = config.import;
    this._subscriptionKeyParameterNames = config.subscriptionKeyParameterNames;
    this._timeouts = config.timeouts;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_current - computed: true, optional: false, required: true
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_online - computed: true, optional: false, required: true
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols: string[];
  public get protocols() {
    return this._protocols;
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // revision - computed: false, optional: false, required: true
  private _revision: string;
  public get revision() {
    return this._revision;
  }
  public set revision(value: string) {
    this._revision = value;
  }

  // service_url - computed: true, optional: true, required: false
  private _serviceUrl?: string;
  public get serviceUrl() {
    return this._serviceUrl ?? this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string | undefined) {
    this._serviceUrl = value;
  }

  // soap_pass_through - computed: false, optional: true, required: false
  private _soapPassThrough?: boolean;
  public get soapPassThrough() {
    return this._soapPassThrough;
  }
  public set soapPassThrough(value: boolean | undefined) {
    this._soapPassThrough = value;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // version_set_id - computed: true, optional: true, required: false
  private _versionSetId?: string;
  public get versionSetId() {
    return this._versionSetId ?? this.getStringAttribute('version_set_id');
  }
  public set versionSetId(value: string | undefined) {
    this._versionSetId = value;
  }

  // import - computed: false, optional: true, required: false
  private _import?: ApiManagementApiImport[];
  public get import() {
    return this._import;
  }
  public set import(value: ApiManagementApiImport[] | undefined) {
    this._import = value;
  }

  // subscription_key_parameter_names - computed: false, optional: true, required: false
  private _subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames[];
  public get subscriptionKeyParameterNames() {
    return this._subscriptionKeyParameterNames;
  }
  public set subscriptionKeyParameterNames(value: ApiManagementApiSubscriptionKeyParameterNames[] | undefined) {
    this._subscriptionKeyParameterNames = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementApiTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      description: this._description,
      display_name: this._displayName,
      name: this._name,
      path: this._path,
      protocols: this._protocols,
      resource_group_name: this._resourceGroupName,
      revision: this._revision,
      service_url: this._serviceUrl,
      soap_pass_through: this._soapPassThrough,
      version: this._version,
      version_set_id: this._versionSetId,
      import: this._import,
      subscription_key_parameter_names: this._subscriptionKeyParameterNames,
      timeouts: this._timeouts,
    };
  }
}
