// https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#api_management_name ApiManagementBackend#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#description ApiManagementBackend#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#name ApiManagementBackend#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#protocol ApiManagementBackend#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#resource_group_name ApiManagementBackend#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#resource_id ApiManagementBackend#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#title ApiManagementBackend#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#url ApiManagementBackend#url}
  */
  readonly url: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#credentials ApiManagementBackend#credentials}
  */
  readonly credentials?: ApiManagementBackendCredentials;
  /**
  * proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#proxy ApiManagementBackend#proxy}
  */
  readonly proxy?: ApiManagementBackendProxy;
  /**
  * service_fabric_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#service_fabric_cluster ApiManagementBackend#service_fabric_cluster}
  */
  readonly serviceFabricCluster?: ApiManagementBackendServiceFabricCluster;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#timeouts ApiManagementBackend#timeouts}
  */
  readonly timeouts?: ApiManagementBackendTimeouts;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#tls ApiManagementBackend#tls}
  */
  readonly tls?: ApiManagementBackendTls;
}
export interface ApiManagementBackendCredentialsAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#parameter ApiManagementBackend#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#scheme ApiManagementBackend#scheme}
  */
  readonly scheme?: string;
}

function apiManagementBackendCredentialsAuthorizationToTerraform(struct?: ApiManagementBackendCredentialsAuthorizationOutputReference | ApiManagementBackendCredentialsAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export class ApiManagementBackendCredentialsAuthorizationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string | undefined; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string | undefined) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }
}
export interface ApiManagementBackendCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#certificate ApiManagementBackend#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#header ApiManagementBackend#header}
  */
  readonly header?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#query ApiManagementBackend#query}
  */
  readonly query?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#authorization ApiManagementBackend#authorization}
  */
  readonly authorization?: ApiManagementBackendCredentialsAuthorization;
}

function apiManagementBackendCredentialsToTerraform(struct?: ApiManagementBackendCredentialsOutputReference | ApiManagementBackendCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificate),
    header: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.header),
    query: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.query),
    authorization: apiManagementBackendCredentialsAuthorizationToTerraform(struct!.authorization),
  }
}

export class ApiManagementBackendCredentialsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string[] | undefined; 
  public get certificate() {
    return this.getListAttribute('certificate');
  }
  public set certificate(value: string[] | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // header - computed: false, optional: true, required: false
  private _header?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get query() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query') as any;
  }
  public set query(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: ApiManagementBackendCredentialsAuthorization | undefined; 
  private __authorizationOutput = new ApiManagementBackendCredentialsAuthorizationOutputReference(this as any, "authorization", true);
  public get authorization() {
    return this.__authorizationOutput;
  }
  public putAuthorization(value: ApiManagementBackendCredentialsAuthorization | undefined) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization
  }
}
export interface ApiManagementBackendProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#password ApiManagementBackend#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#url ApiManagementBackend#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#username ApiManagementBackend#username}
  */
  readonly username: string;
}

function apiManagementBackendProxyToTerraform(struct?: ApiManagementBackendProxyOutputReference | ApiManagementBackendProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ApiManagementBackendProxyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface ApiManagementBackendServiceFabricClusterServerX509Name {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}
  */
  readonly issuerCertificateThumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#name ApiManagementBackend#name}
  */
  readonly name: string;
}

function apiManagementBackendServiceFabricClusterServerX509NameToTerraform(struct?: ApiManagementBackendServiceFabricClusterServerX509Name): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_certificate_thumbprint: cdktf.stringToTerraform(struct!.issuerCertificateThumbprint),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApiManagementBackendServiceFabricCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#client_certificate_id ApiManagementBackend#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}
  */
  readonly clientCertificateThumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#management_endpoints ApiManagementBackend#management_endpoints}
  */
  readonly managementEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}
  */
  readonly maxPartitionResolutionRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}
  */
  readonly serverCertificateThumbprints?: string[];
  /**
  * server_x509_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#server_x509_name ApiManagementBackend#server_x509_name}
  */
  readonly serverX509Name?: ApiManagementBackendServiceFabricClusterServerX509Name[];
}

function apiManagementBackendServiceFabricClusterToTerraform(struct?: ApiManagementBackendServiceFabricClusterOutputReference | ApiManagementBackendServiceFabricCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_id: cdktf.stringToTerraform(struct!.clientCertificateId),
    client_certificate_thumbprint: cdktf.stringToTerraform(struct!.clientCertificateThumbprint),
    management_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.managementEndpoints),
    max_partition_resolution_retries: cdktf.numberToTerraform(struct!.maxPartitionResolutionRetries),
    server_certificate_thumbprints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serverCertificateThumbprints),
    server_x509_name: cdktf.listMapper(apiManagementBackendServiceFabricClusterServerX509NameToTerraform)(struct!.serverX509Name),
  }
}

export class ApiManagementBackendServiceFabricClusterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_certificate_id - computed: true, optional: true, required: false
  private _clientCertificateId?: string | undefined; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string | undefined) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId
  }

  // client_certificate_thumbprint - computed: true, optional: true, required: false
  private _clientCertificateThumbprint?: string | undefined; 
  public get clientCertificateThumbprint() {
    return this.getStringAttribute('client_certificate_thumbprint');
  }
  public set clientCertificateThumbprint(value: string | undefined) {
    this._clientCertificateThumbprint = value;
  }
  public resetClientCertificateThumbprint() {
    this._clientCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateThumbprintInput() {
    return this._clientCertificateThumbprint
  }

  // management_endpoints - computed: false, optional: false, required: true
  private _managementEndpoints?: string[]; 
  public get managementEndpoints() {
    return this.getListAttribute('management_endpoints');
  }
  public set managementEndpoints(value: string[]) {
    this._managementEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointsInput() {
    return this._managementEndpoints
  }

  // max_partition_resolution_retries - computed: false, optional: false, required: true
  private _maxPartitionResolutionRetries?: number; 
  public get maxPartitionResolutionRetries() {
    return this.getNumberAttribute('max_partition_resolution_retries');
  }
  public set maxPartitionResolutionRetries(value: number) {
    this._maxPartitionResolutionRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionResolutionRetriesInput() {
    return this._maxPartitionResolutionRetries
  }

  // server_certificate_thumbprints - computed: false, optional: true, required: false
  private _serverCertificateThumbprints?: string[] | undefined; 
  public get serverCertificateThumbprints() {
    return this.getListAttribute('server_certificate_thumbprints');
  }
  public set serverCertificateThumbprints(value: string[] | undefined) {
    this._serverCertificateThumbprints = value;
  }
  public resetServerCertificateThumbprints() {
    this._serverCertificateThumbprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateThumbprintsInput() {
    return this._serverCertificateThumbprints
  }

  // server_x509_name - computed: false, optional: true, required: false
  private _serverX509Name?: ApiManagementBackendServiceFabricClusterServerX509Name[] | undefined; 
  public get serverX509Name() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('server_x509_name') as any;
  }
  public set serverX509Name(value: ApiManagementBackendServiceFabricClusterServerX509Name[] | undefined) {
    this._serverX509Name = value;
  }
  public resetServerX509Name() {
    this._serverX509Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverX509NameInput() {
    return this._serverX509Name
  }
}
export interface ApiManagementBackendTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#create ApiManagementBackend#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#delete ApiManagementBackend#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#read ApiManagementBackend#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#update ApiManagementBackend#update}
  */
  readonly update?: string;
}

function apiManagementBackendTimeoutsToTerraform(struct?: ApiManagementBackendTimeoutsOutputReference | ApiManagementBackendTimeouts): any {
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

export class ApiManagementBackendTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface ApiManagementBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}
  */
  readonly validateCertificateChain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html#validate_certificate_name ApiManagementBackend#validate_certificate_name}
  */
  readonly validateCertificateName?: boolean | cdktf.IResolvable;
}

function apiManagementBackendTlsToTerraform(struct?: ApiManagementBackendTlsOutputReference | ApiManagementBackendTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validate_certificate_chain: cdktf.booleanToTerraform(struct!.validateCertificateChain),
    validate_certificate_name: cdktf.booleanToTerraform(struct!.validateCertificateName),
  }
}

export class ApiManagementBackendTlsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // validate_certificate_chain - computed: false, optional: true, required: false
  private _validateCertificateChain?: boolean | cdktf.IResolvable | undefined; 
  public get validateCertificateChain() {
    return this.getBooleanAttribute('validate_certificate_chain') as any;
  }
  public set validateCertificateChain(value: boolean | cdktf.IResolvable | undefined) {
    this._validateCertificateChain = value;
  }
  public resetValidateCertificateChain() {
    this._validateCertificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertificateChainInput() {
    return this._validateCertificateChain
  }

  // validate_certificate_name - computed: false, optional: true, required: false
  private _validateCertificateName?: boolean | cdktf.IResolvable | undefined; 
  public get validateCertificateName() {
    return this.getBooleanAttribute('validate_certificate_name') as any;
  }
  public set validateCertificateName(value: boolean | cdktf.IResolvable | undefined) {
    this._validateCertificateName = value;
  }
  public resetValidateCertificateName() {
    this._validateCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertificateNameInput() {
    return this._validateCertificateName
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html azurerm_api_management_backend}
*/
export class ApiManagementBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_backend.html azurerm_api_management_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementBackendConfig
  */
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string | undefined; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string | undefined) {
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
  private _title?: string | undefined; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string | undefined) {
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
  private _url?: string; 
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
  private _credentials?: ApiManagementBackendCredentials | undefined; 
  private __credentialsOutput = new ApiManagementBackendCredentialsOutputReference(this as any, "credentials", true);
  public get credentials() {
    return this.__credentialsOutput;
  }
  public putCredentials(value: ApiManagementBackendCredentials | undefined) {
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
  private _proxy?: ApiManagementBackendProxy | undefined; 
  private __proxyOutput = new ApiManagementBackendProxyOutputReference(this as any, "proxy", true);
  public get proxy() {
    return this.__proxyOutput;
  }
  public putProxy(value: ApiManagementBackendProxy | undefined) {
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
  private _serviceFabricCluster?: ApiManagementBackendServiceFabricCluster | undefined; 
  private __serviceFabricClusterOutput = new ApiManagementBackendServiceFabricClusterOutputReference(this as any, "service_fabric_cluster", true);
  public get serviceFabricCluster() {
    return this.__serviceFabricClusterOutput;
  }
  public putServiceFabricCluster(value: ApiManagementBackendServiceFabricCluster | undefined) {
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
  private _timeouts?: ApiManagementBackendTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementBackendTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementBackendTimeouts | undefined) {
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
  private _tls?: ApiManagementBackendTls | undefined; 
  private __tlsOutput = new ApiManagementBackendTlsOutputReference(this as any, "tls", true);
  public get tls() {
    return this.__tlsOutput;
  }
  public putTls(value: ApiManagementBackendTls | undefined) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      title: cdktf.stringToTerraform(this._title),
      url: cdktf.stringToTerraform(this._url),
      credentials: apiManagementBackendCredentialsToTerraform(this._credentials),
      proxy: apiManagementBackendProxyToTerraform(this._proxy),
      service_fabric_cluster: apiManagementBackendServiceFabricClusterToTerraform(this._serviceFabricCluster),
      timeouts: apiManagementBackendTimeoutsToTerraform(this._timeouts),
      tls: apiManagementBackendTlsToTerraform(this._tls),
    };
  }
}
