// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#description ApiManagementBackend#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#id ApiManagementBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#name ApiManagementBackend#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#title ApiManagementBackend#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#url ApiManagementBackend#url}
  */
  readonly url: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#credentials ApiManagementBackend#credentials}
  */
  readonly credentials?: ApiManagementBackendCredentials;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#proxy ApiManagementBackend#proxy}
  */
  readonly proxy?: ApiManagementBackendProxy;
  /**
  * service_fabric_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#service_fabric_cluster ApiManagementBackend#service_fabric_cluster}
  */
  readonly serviceFabricCluster?: ApiManagementBackendServiceFabricCluster;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#timeouts ApiManagementBackend#timeouts}
  */
  readonly timeouts?: ApiManagementBackendTimeouts;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#tls ApiManagementBackend#tls}
  */
  readonly tls?: ApiManagementBackendTls;
}
export interface ApiManagementBackendCredentialsAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}
  */
  readonly scheme?: string;
}

export function apiManagementBackendCredentialsAuthorizationToTerraform(struct?: ApiManagementBackendCredentialsAuthorizationOutputReference | ApiManagementBackendCredentialsAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function apiManagementBackendCredentialsAuthorizationToHclTerraform(struct?: ApiManagementBackendCredentialsAuthorizationOutputReference | ApiManagementBackendCredentialsAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementBackendCredentialsAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementBackendCredentialsAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementBackendCredentialsAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter = undefined;
      this._scheme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter = value.parameter;
      this._scheme = value.scheme;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface ApiManagementBackendCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#header ApiManagementBackend#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#query ApiManagementBackend#query}
  */
  readonly query?: { [key: string]: string };
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#authorization ApiManagementBackend#authorization}
  */
  readonly authorization?: ApiManagementBackendCredentialsAuthorization;
}

export function apiManagementBackendCredentialsToTerraform(struct?: ApiManagementBackendCredentialsOutputReference | ApiManagementBackendCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificate),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    query: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.query),
    authorization: apiManagementBackendCredentialsAuthorizationToTerraform(struct!.authorization),
  }
}


export function apiManagementBackendCredentialsToHclTerraform(struct?: ApiManagementBackendCredentialsOutputReference | ApiManagementBackendCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.header),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.query),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization: {
      value: apiManagementBackendCredentialsAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementBackendCredentialsAuthorizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementBackendCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementBackendCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementBackendCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._header = undefined;
      this._query = undefined;
      this._authorization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._header = value.header;
      this._query = value.query;
      this._authorization.internalValue = value.authorization;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return this.getListAttribute('certificate');
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // header - computed: false, optional: true, required: false
  private _header?: { [key: string]: string }; 
  public get header() {
    return this.getStringMapAttribute('header');
  }
  public set header(value: { [key: string]: string }) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string }; 
  public get query() {
    return this.getStringMapAttribute('query');
  }
  public set query(value: { [key: string]: string }) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new ApiManagementBackendCredentialsAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ApiManagementBackendCredentialsAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }
}
export interface ApiManagementBackendProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#password ApiManagementBackend#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#url ApiManagementBackend#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#username ApiManagementBackend#username}
  */
  readonly username: string;
}

export function apiManagementBackendProxyToTerraform(struct?: ApiManagementBackendProxyOutputReference | ApiManagementBackendProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function apiManagementBackendProxyToHclTerraform(struct?: ApiManagementBackendProxyOutputReference | ApiManagementBackendProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementBackendProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementBackendProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementBackendProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
    return this._url;
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
    return this._username;
  }
}
export interface ApiManagementBackendServiceFabricClusterServerX509Name {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}
  */
  readonly issuerCertificateThumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#name ApiManagementBackend#name}
  */
  readonly name: string;
}

export function apiManagementBackendServiceFabricClusterServerX509NameToTerraform(struct?: ApiManagementBackendServiceFabricClusterServerX509Name | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_certificate_thumbprint: cdktf.stringToTerraform(struct!.issuerCertificateThumbprint),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apiManagementBackendServiceFabricClusterServerX509NameToHclTerraform(struct?: ApiManagementBackendServiceFabricClusterServerX509Name | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_certificate_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.issuerCertificateThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementBackendServiceFabricClusterServerX509NameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementBackendServiceFabricClusterServerX509Name | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerCertificateThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerCertificateThumbprint = this._issuerCertificateThumbprint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementBackendServiceFabricClusterServerX509Name | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuerCertificateThumbprint = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuerCertificateThumbprint = value.issuerCertificateThumbprint;
      this._name = value.name;
    }
  }

  // issuer_certificate_thumbprint - computed: false, optional: false, required: true
  private _issuerCertificateThumbprint?: string; 
  public get issuerCertificateThumbprint() {
    return this.getStringAttribute('issuer_certificate_thumbprint');
  }
  public set issuerCertificateThumbprint(value: string) {
    this._issuerCertificateThumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCertificateThumbprintInput() {
    return this._issuerCertificateThumbprint;
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
}

export class ApiManagementBackendServiceFabricClusterServerX509NameList extends cdktf.ComplexList {
  public internalValue? : ApiManagementBackendServiceFabricClusterServerX509Name[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementBackendServiceFabricClusterServerX509NameOutputReference {
    return new ApiManagementBackendServiceFabricClusterServerX509NameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementBackendServiceFabricCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}
  */
  readonly clientCertificateThumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}
  */
  readonly managementEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}
  */
  readonly maxPartitionResolutionRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}
  */
  readonly serverCertificateThumbprints?: string[];
  /**
  * server_x509_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#server_x509_name ApiManagementBackend#server_x509_name}
  */
  readonly serverX509Name?: ApiManagementBackendServiceFabricClusterServerX509Name[] | cdktf.IResolvable;
}

export function apiManagementBackendServiceFabricClusterToTerraform(struct?: ApiManagementBackendServiceFabricClusterOutputReference | ApiManagementBackendServiceFabricCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_id: cdktf.stringToTerraform(struct!.clientCertificateId),
    client_certificate_thumbprint: cdktf.stringToTerraform(struct!.clientCertificateThumbprint),
    management_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managementEndpoints),
    max_partition_resolution_retries: cdktf.numberToTerraform(struct!.maxPartitionResolutionRetries),
    server_certificate_thumbprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverCertificateThumbprints),
    server_x509_name: cdktf.listMapper(apiManagementBackendServiceFabricClusterServerX509NameToTerraform, true)(struct!.serverX509Name),
  }
}


export function apiManagementBackendServiceFabricClusterToHclTerraform(struct?: ApiManagementBackendServiceFabricClusterOutputReference | ApiManagementBackendServiceFabricCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managementEndpoints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_partition_resolution_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitionResolutionRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_certificate_thumbprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverCertificateThumbprints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    server_x509_name: {
      value: cdktf.listMapperHcl(apiManagementBackendServiceFabricClusterServerX509NameToHclTerraform, true)(struct!.serverX509Name),
      isBlock: true,
      type: "set",
      storageClassType: "ApiManagementBackendServiceFabricClusterServerX509NameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementBackendServiceFabricClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementBackendServiceFabricCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateId = this._clientCertificateId;
    }
    if (this._clientCertificateThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateThumbprint = this._clientCertificateThumbprint;
    }
    if (this._managementEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementEndpoints = this._managementEndpoints;
    }
    if (this._maxPartitionResolutionRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionResolutionRetries = this._maxPartitionResolutionRetries;
    }
    if (this._serverCertificateThumbprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateThumbprints = this._serverCertificateThumbprints;
    }
    if (this._serverX509Name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverX509Name = this._serverX509Name?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementBackendServiceFabricCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateId = undefined;
      this._clientCertificateThumbprint = undefined;
      this._managementEndpoints = undefined;
      this._maxPartitionResolutionRetries = undefined;
      this._serverCertificateThumbprints = undefined;
      this._serverX509Name.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateId = value.clientCertificateId;
      this._clientCertificateThumbprint = value.clientCertificateThumbprint;
      this._managementEndpoints = value.managementEndpoints;
      this._maxPartitionResolutionRetries = value.maxPartitionResolutionRetries;
      this._serverCertificateThumbprints = value.serverCertificateThumbprints;
      this._serverX509Name.internalValue = value.serverX509Name;
    }
  }

  // client_certificate_id - computed: true, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // client_certificate_thumbprint - computed: true, optional: true, required: false
  private _clientCertificateThumbprint?: string; 
  public get clientCertificateThumbprint() {
    return this.getStringAttribute('client_certificate_thumbprint');
  }
  public set clientCertificateThumbprint(value: string) {
    this._clientCertificateThumbprint = value;
  }
  public resetClientCertificateThumbprint() {
    this._clientCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateThumbprintInput() {
    return this._clientCertificateThumbprint;
  }

  // management_endpoints - computed: false, optional: false, required: true
  private _managementEndpoints?: string[]; 
  public get managementEndpoints() {
    return cdktf.Fn.tolist(this.getListAttribute('management_endpoints'));
  }
  public set managementEndpoints(value: string[]) {
    this._managementEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointsInput() {
    return this._managementEndpoints;
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
    return this._maxPartitionResolutionRetries;
  }

  // server_certificate_thumbprints - computed: false, optional: true, required: false
  private _serverCertificateThumbprints?: string[]; 
  public get serverCertificateThumbprints() {
    return cdktf.Fn.tolist(this.getListAttribute('server_certificate_thumbprints'));
  }
  public set serverCertificateThumbprints(value: string[]) {
    this._serverCertificateThumbprints = value;
  }
  public resetServerCertificateThumbprints() {
    this._serverCertificateThumbprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateThumbprintsInput() {
    return this._serverCertificateThumbprints;
  }

  // server_x509_name - computed: false, optional: true, required: false
  private _serverX509Name = new ApiManagementBackendServiceFabricClusterServerX509NameList(this, "server_x509_name", true);
  public get serverX509Name() {
    return this._serverX509Name;
  }
  public putServerX509Name(value: ApiManagementBackendServiceFabricClusterServerX509Name[] | cdktf.IResolvable) {
    this._serverX509Name.internalValue = value;
  }
  public resetServerX509Name() {
    this._serverX509Name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverX509NameInput() {
    return this._serverX509Name.internalValue;
  }
}
export interface ApiManagementBackendTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#create ApiManagementBackend#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#read ApiManagementBackend#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#update ApiManagementBackend#update}
  */
  readonly update?: string;
}

export function apiManagementBackendTimeoutsToTerraform(struct?: ApiManagementBackendTimeouts | cdktf.IResolvable): any {
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


export function apiManagementBackendTimeoutsToHclTerraform(struct?: ApiManagementBackendTimeouts | cdktf.IResolvable): any {
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

export class ApiManagementBackendTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementBackendTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementBackendTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApiManagementBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}
  */
  readonly validateCertificateChain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}
  */
  readonly validateCertificateName?: boolean | cdktf.IResolvable;
}

export function apiManagementBackendTlsToTerraform(struct?: ApiManagementBackendTlsOutputReference | ApiManagementBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validate_certificate_chain: cdktf.booleanToTerraform(struct!.validateCertificateChain),
    validate_certificate_name: cdktf.booleanToTerraform(struct!.validateCertificateName),
  }
}


export function apiManagementBackendTlsToHclTerraform(struct?: ApiManagementBackendTlsOutputReference | ApiManagementBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validate_certificate_chain: {
      value: cdktf.booleanToHclTerraform(struct!.validateCertificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_certificate_name: {
      value: cdktf.booleanToHclTerraform(struct!.validateCertificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validateCertificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateCertificateChain = this._validateCertificateChain;
    }
    if (this._validateCertificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateCertificateName = this._validateCertificateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validateCertificateChain = undefined;
      this._validateCertificateName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validateCertificateChain = value.validateCertificateChain;
      this._validateCertificateName = value.validateCertificateName;
    }
  }

  // validate_certificate_chain - computed: false, optional: true, required: false
  private _validateCertificateChain?: boolean | cdktf.IResolvable; 
  public get validateCertificateChain() {
    return this.getBooleanAttribute('validate_certificate_chain');
  }
  public set validateCertificateChain(value: boolean | cdktf.IResolvable) {
    this._validateCertificateChain = value;
  }
  public resetValidateCertificateChain() {
    this._validateCertificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertificateChainInput() {
    return this._validateCertificateChain;
  }

  // validate_certificate_name - computed: false, optional: true, required: false
  private _validateCertificateName?: boolean | cdktf.IResolvable; 
  public get validateCertificateName() {
    return this.getBooleanAttribute('validate_certificate_name');
  }
  public set validateCertificateName(value: boolean | cdktf.IResolvable) {
    this._validateCertificateName = value;
  }
  public resetValidateCertificateName() {
    this._validateCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertificateNameInput() {
    return this._validateCertificateName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend azurerm_api_management_backend}
*/
export class ApiManagementBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementBackend to import
  * @param importFromId The id of the existing ApiManagementBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_backend azurerm_api_management_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementBackendConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_backend',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceId = config.resourceId;
    this._title = config.title;
    this._url = config.url;
    this._credentials.internalValue = config.credentials;
    this._proxy.internalValue = config.proxy;
    this._serviceFabricCluster.internalValue = config.serviceFabricCluster;
    this._timeouts.internalValue = config.timeouts;
    this._tls.internalValue = config.tls;
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
    return this._protocol;
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
    return this._url;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new ApiManagementBackendCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ApiManagementBackendCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new ApiManagementBackendProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ApiManagementBackendProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // service_fabric_cluster - computed: false, optional: true, required: false
  private _serviceFabricCluster = new ApiManagementBackendServiceFabricClusterOutputReference(this, "service_fabric_cluster");
  public get serviceFabricCluster() {
    return this._serviceFabricCluster;
  }
  public putServiceFabricCluster(value: ApiManagementBackendServiceFabricCluster) {
    this._serviceFabricCluster.internalValue = value;
  }
  public resetServiceFabricCluster() {
    this._serviceFabricCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricClusterInput() {
    return this._serviceFabricCluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementBackendTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementBackendTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ApiManagementBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ApiManagementBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      title: cdktf.stringToTerraform(this._title),
      url: cdktf.stringToTerraform(this._url),
      credentials: apiManagementBackendCredentialsToTerraform(this._credentials.internalValue),
      proxy: apiManagementBackendProxyToTerraform(this._proxy.internalValue),
      service_fabric_cluster: apiManagementBackendServiceFabricClusterToTerraform(this._serviceFabricCluster.internalValue),
      timeouts: apiManagementBackendTimeoutsToTerraform(this._timeouts.internalValue),
      tls: apiManagementBackendTlsToTerraform(this._tls.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: apiManagementBackendCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementBackendCredentialsList",
      },
      proxy: {
        value: apiManagementBackendProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementBackendProxyList",
      },
      service_fabric_cluster: {
        value: apiManagementBackendServiceFabricClusterToHclTerraform(this._serviceFabricCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementBackendServiceFabricClusterList",
      },
      timeouts: {
        value: apiManagementBackendTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementBackendTimeouts",
      },
      tls: {
        value: apiManagementBackendTlsToHclTerraform(this._tls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementBackendTlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
