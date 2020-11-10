// https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementBackendConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly description?: string;
  readonly name: string;
  readonly protocol: string;
  readonly resourceGroupName: string;
  readonly resourceId?: string;
  readonly title?: string;
  readonly url: string;
  /** credentials block */
  readonly credentials?: ApiManagementBackendCredentials[];
  /** proxy block */
  readonly proxy?: ApiManagementBackendProxy[];
  /** service_fabric_cluster block */
  readonly serviceFabricCluster?: ApiManagementBackendServiceFabricCluster[];
  /** timeouts block */
  readonly timeouts?: ApiManagementBackendTimeouts;
  /** tls block */
  readonly tls?: ApiManagementBackendTls[];
}
export interface ApiManagementBackendCredentialsAuthorization {
  readonly parameter?: string;
  readonly scheme?: string;
}
export interface ApiManagementBackendCredentials {
  readonly certificate?: string[];
  readonly header?: { [key: string]: string };
  readonly query?: { [key: string]: string };
  /** authorization block */
  readonly authorization?: ApiManagementBackendCredentialsAuthorization[];
}
export interface ApiManagementBackendProxy {
  readonly password?: string;
  readonly url: string;
  readonly username: string;
}
export interface ApiManagementBackendServiceFabricClusterServerX509Name {
  readonly issuerCertificateThumbprint: string;
  readonly name: string;
}
export interface ApiManagementBackendServiceFabricCluster {
  readonly clientCertificateThumbprint: string;
  readonly managementEndpoints: string[];
  readonly maxPartitionResolutionRetries: number;
  readonly serverCertificateThumbprints?: string[];
  /** server_x509_name block */
  readonly serverX509Name?: ApiManagementBackendServiceFabricClusterServerX509Name[];
}
export interface ApiManagementBackendTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface ApiManagementBackendTls {
  readonly validateCertificateChain?: boolean;
  readonly validateCertificateName?: boolean;
}

// Resource

export class ApiManagementBackend extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_backend',
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
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceId = config.resourceId;
    this._title = config.title;
    this._url = config.url;
    this._credentials = config.credentials;
    this._proxy = config.proxy;
    this._serviceFabricCluster = config.serviceFabricCluster;
    this._timeouts = config.timeouts;
    this._tls = config.tls;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string ) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // title - computed: false, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string ) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // url - computed: false, optional: false, required: true
  private _url: string;
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: ApiManagementBackendCredentials[];
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: ApiManagementBackendCredentials[] ) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: ApiManagementBackendProxy[];
  public get proxy() {
    return this.interpolationForAttribute('proxy') as any;
  }
  public set proxy(value: ApiManagementBackendProxy[] ) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy
  }

  // service_fabric_cluster - computed: false, optional: true, required: false
  private _serviceFabricCluster?: ApiManagementBackendServiceFabricCluster[];
  public get serviceFabricCluster() {
    return this.interpolationForAttribute('service_fabric_cluster') as any;
  }
  public set serviceFabricCluster(value: ApiManagementBackendServiceFabricCluster[] ) {
    this._serviceFabricCluster = value;
  }
  public resetServiceFabricCluster() {
    this._serviceFabricCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricClusterInput() {
    return this._serviceFabricCluster
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementBackendTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementBackendTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: ApiManagementBackendTls[];
  public get tls() {
    return this.interpolationForAttribute('tls') as any;
  }
  public set tls(value: ApiManagementBackendTls[] ) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      description: this._description,
      name: this._name,
      protocol: this._protocol,
      resource_group_name: this._resourceGroupName,
      resource_id: this._resourceId,
      title: this._title,
      url: this._url,
      credentials: this._credentials,
      proxy: this._proxy,
      service_fabric_cluster: this._serviceFabricCluster,
      timeouts: this._timeouts,
      tls: this._tls,
    };
  }
}
