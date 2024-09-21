// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}
  */
  readonly apiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#description ApiManagementApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#id ApiManagementApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#name ApiManagementApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#path ApiManagementApi#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#revision ApiManagementApi#revision}
  */
  readonly revision: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}
  */
  readonly revisionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}
  */
  readonly serviceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}
  */
  readonly sourceApiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}
  */
  readonly subscriptionRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}
  */
  readonly termsOfServiceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#version ApiManagementApi#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}
  */
  readonly versionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}
  */
  readonly versionSetId?: string;
  /**
  * contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#contact ApiManagementApi#contact}
  */
  readonly contact?: ApiManagementApiContact;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#import ApiManagementApi#import}
  */
  readonly import?: ApiManagementApiImport;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#license ApiManagementApi#license}
  */
  readonly license?: ApiManagementApiLicense;
  /**
  * oauth2_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#oauth2_authorization ApiManagementApi#oauth2_authorization}
  */
  readonly oauth2Authorization?: ApiManagementApiOauth2Authorization;
  /**
  * openid_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#openid_authentication ApiManagementApi#openid_authentication}
  */
  readonly openidAuthentication?: ApiManagementApiOpenidAuthentication;
  /**
  * subscription_key_parameter_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#subscription_key_parameter_names ApiManagementApi#subscription_key_parameter_names}
  */
  readonly subscriptionKeyParameterNames?: ApiManagementApiSubscriptionKeyParameterNames;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#timeouts ApiManagementApi#timeouts}
  */
  readonly timeouts?: ApiManagementApiTimeouts;
}
export interface ApiManagementApiContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#email ApiManagementApi#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#name ApiManagementApi#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#url ApiManagementApi#url}
  */
  readonly url?: string;
}

export function apiManagementApiContactToTerraform(struct?: ApiManagementApiContactOutputReference | ApiManagementApiContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apiManagementApiContactToHclTerraform(struct?: ApiManagementApiContactOutputReference | ApiManagementApiContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._name = value.name;
      this._url = value.url;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ApiManagementApiImportWsdlSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}
  */
  readonly serviceName: string;
}

export function apiManagementApiImportWsdlSelectorToTerraform(struct?: ApiManagementApiImportWsdlSelectorOutputReference | ApiManagementApiImportWsdlSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function apiManagementApiImportWsdlSelectorToHclTerraform(struct?: ApiManagementApiImportWsdlSelectorOutputReference | ApiManagementApiImportWsdlSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiImportWsdlSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiImportWsdlSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiImportWsdlSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointName = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointName = value.endpointName;
      this._serviceName = value.serviceName;
    }
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
    return this._endpointName;
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
    return this._serviceName;
  }
}
export interface ApiManagementApiImport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}
  */
  readonly contentFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}
  */
  readonly contentValue: string;
  /**
  * wsdl_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#wsdl_selector ApiManagementApi#wsdl_selector}
  */
  readonly wsdlSelector?: ApiManagementApiImportWsdlSelector;
}

export function apiManagementApiImportToTerraform(struct?: ApiManagementApiImportOutputReference | ApiManagementApiImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_format: cdktf.stringToTerraform(struct!.contentFormat),
    content_value: cdktf.stringToTerraform(struct!.contentValue),
    wsdl_selector: apiManagementApiImportWsdlSelectorToTerraform(struct!.wsdlSelector),
  }
}


export function apiManagementApiImportToHclTerraform(struct?: ApiManagementApiImportOutputReference | ApiManagementApiImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_format: {
      value: cdktf.stringToHclTerraform(struct!.contentFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_value: {
      value: cdktf.stringToHclTerraform(struct!.contentValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wsdl_selector: {
      value: apiManagementApiImportWsdlSelectorToHclTerraform(struct!.wsdlSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiImportWsdlSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFormat = this._contentFormat;
    }
    if (this._contentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentValue = this._contentValue;
    }
    if (this._wsdlSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsdlSelector = this._wsdlSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentFormat = undefined;
      this._contentValue = undefined;
      this._wsdlSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentFormat = value.contentFormat;
      this._contentValue = value.contentValue;
      this._wsdlSelector.internalValue = value.wsdlSelector;
    }
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
    return this._contentFormat;
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
    return this._contentValue;
  }

  // wsdl_selector - computed: false, optional: true, required: false
  private _wsdlSelector = new ApiManagementApiImportWsdlSelectorOutputReference(this, "wsdl_selector");
  public get wsdlSelector() {
    return this._wsdlSelector;
  }
  public putWsdlSelector(value: ApiManagementApiImportWsdlSelector) {
    this._wsdlSelector.internalValue = value;
  }
  public resetWsdlSelector() {
    this._wsdlSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsdlSelectorInput() {
    return this._wsdlSelector.internalValue;
  }
}
export interface ApiManagementApiLicense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#name ApiManagementApi#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#url ApiManagementApi#url}
  */
  readonly url?: string;
}

export function apiManagementApiLicenseToTerraform(struct?: ApiManagementApiLicenseOutputReference | ApiManagementApiLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apiManagementApiLicenseToHclTerraform(struct?: ApiManagementApiLicenseOutputReference | ApiManagementApiLicense): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._url = value.url;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ApiManagementApiOauth2Authorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}
  */
  readonly authorizationServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#scope ApiManagementApi#scope}
  */
  readonly scope?: string;
}

export function apiManagementApiOauth2AuthorizationToTerraform(struct?: ApiManagementApiOauth2AuthorizationOutputReference | ApiManagementApiOauth2Authorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_server_name: cdktf.stringToTerraform(struct!.authorizationServerName),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function apiManagementApiOauth2AuthorizationToHclTerraform(struct?: ApiManagementApiOauth2AuthorizationOutputReference | ApiManagementApiOauth2Authorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_server_name: {
      value: cdktf.stringToHclTerraform(struct!.authorizationServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOauth2AuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiOauth2Authorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServerName = this._authorizationServerName;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOauth2Authorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationServerName = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationServerName = value.authorizationServerName;
      this._scope = value.scope;
    }
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
    return this._authorizationServerName;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ApiManagementApiOpenidAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}
  */
  readonly bearerTokenSendingMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}
  */
  readonly openidProviderName: string;
}

export function apiManagementApiOpenidAuthenticationToTerraform(struct?: ApiManagementApiOpenidAuthenticationOutputReference | ApiManagementApiOpenidAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token_sending_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bearerTokenSendingMethods),
    openid_provider_name: cdktf.stringToTerraform(struct!.openidProviderName),
  }
}


export function apiManagementApiOpenidAuthenticationToHclTerraform(struct?: ApiManagementApiOpenidAuthenticationOutputReference | ApiManagementApiOpenidAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token_sending_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bearerTokenSendingMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    openid_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.openidProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOpenidAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiOpenidAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerTokenSendingMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSendingMethods = this._bearerTokenSendingMethods;
    }
    if (this._openidProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.openidProviderName = this._openidProviderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOpenidAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerTokenSendingMethods = undefined;
      this._openidProviderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerTokenSendingMethods = value.bearerTokenSendingMethods;
      this._openidProviderName = value.openidProviderName;
    }
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
    return this._openidProviderName;
  }
}
export interface ApiManagementApiSubscriptionKeyParameterNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#header ApiManagementApi#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#query ApiManagementApi#query}
  */
  readonly query: string;
}

export function apiManagementApiSubscriptionKeyParameterNamesToTerraform(struct?: ApiManagementApiSubscriptionKeyParameterNamesOutputReference | ApiManagementApiSubscriptionKeyParameterNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function apiManagementApiSubscriptionKeyParameterNamesToHclTerraform(struct?: ApiManagementApiSubscriptionKeyParameterNamesOutputReference | ApiManagementApiSubscriptionKeyParameterNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiSubscriptionKeyParameterNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiSubscriptionKeyParameterNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiSubscriptionKeyParameterNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header = value.header;
      this._query = value.query;
    }
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
    return this._header;
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
    return this._query;
  }
}
export interface ApiManagementApiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#create ApiManagementApi#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#delete ApiManagementApi#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#read ApiManagementApi#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#update ApiManagementApi#update}
  */
  readonly update?: string;
}

export function apiManagementApiTimeoutsToTerraform(struct?: ApiManagementApiTimeouts | cdktf.IResolvable): any {
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


export function apiManagementApiTimeoutsToHclTerraform(struct?: ApiManagementApiTimeouts | cdktf.IResolvable): any {
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

export class ApiManagementApiTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementApiTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementApiTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api azurerm_api_management_api}
*/
export class ApiManagementApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementApi to import
  * @param importFromId The id of the existing ApiManagementApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api azurerm_api_management_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api',
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
    this._apiType = config.apiType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._path = config.path;
    this._protocols = config.protocols;
    this._resourceGroupName = config.resourceGroupName;
    this._revision = config.revision;
    this._revisionDescription = config.revisionDescription;
    this._serviceUrl = config.serviceUrl;
    this._sourceApiId = config.sourceApiId;
    this._subscriptionRequired = config.subscriptionRequired;
    this._termsOfServiceUrl = config.termsOfServiceUrl;
    this._version = config.version;
    this._versionDescription = config.versionDescription;
    this._versionSetId = config.versionSetId;
    this._contact.internalValue = config.contact;
    this._import.internalValue = config.import;
    this._license.internalValue = config.license;
    this._oauth2Authorization.internalValue = config.oauth2Authorization;
    this._openidAuthentication.internalValue = config.openidAuthentication;
    this._subscriptionKeyParameterNames.internalValue = config.subscriptionKeyParameterNames;
    this._timeouts.internalValue = config.timeouts;
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

  // api_type - computed: true, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_current - computed: true, optional: false, required: false
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_online - computed: true, optional: false, required: false
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
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
    return this._revision;
  }

  // revision_description - computed: false, optional: true, required: false
  private _revisionDescription?: string; 
  public get revisionDescription() {
    return this.getStringAttribute('revision_description');
  }
  public set revisionDescription(value: string) {
    this._revisionDescription = value;
  }
  public resetRevisionDescription() {
    this._revisionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionDescriptionInput() {
    return this._revisionDescription;
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
    return this._serviceUrl;
  }

  // source_api_id - computed: false, optional: true, required: false
  private _sourceApiId?: string; 
  public get sourceApiId() {
    return this.getStringAttribute('source_api_id');
  }
  public set sourceApiId(value: string) {
    this._sourceApiId = value;
  }
  public resetSourceApiId() {
    this._sourceApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiIdInput() {
    return this._sourceApiId;
  }

  // subscription_required - computed: false, optional: true, required: false
  private _subscriptionRequired?: boolean | cdktf.IResolvable; 
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }
  public set subscriptionRequired(value: boolean | cdktf.IResolvable) {
    this._subscriptionRequired = value;
  }
  public resetSubscriptionRequired() {
    this._subscriptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionRequiredInput() {
    return this._subscriptionRequired;
  }

  // terms_of_service_url - computed: false, optional: true, required: false
  private _termsOfServiceUrl?: string; 
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }
  public set termsOfServiceUrl(value: string) {
    this._termsOfServiceUrl = value;
  }
  public resetTermsOfServiceUrl() {
    this._termsOfServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceUrlInput() {
    return this._termsOfServiceUrl;
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
    return this._version;
  }

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
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
    return this._versionSetId;
  }

  // contact - computed: false, optional: true, required: false
  private _contact = new ApiManagementApiContactOutputReference(this, "contact");
  public get contact() {
    return this._contact;
  }
  public putContact(value: ApiManagementApiContact) {
    this._contact.internalValue = value;
  }
  public resetContact() {
    this._contact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact.internalValue;
  }

  // import - computed: false, optional: true, required: false
  private _import = new ApiManagementApiImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: ApiManagementApiImport) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new ApiManagementApiLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: ApiManagementApiLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // oauth2_authorization - computed: false, optional: true, required: false
  private _oauth2Authorization = new ApiManagementApiOauth2AuthorizationOutputReference(this, "oauth2_authorization");
  public get oauth2Authorization() {
    return this._oauth2Authorization;
  }
  public putOauth2Authorization(value: ApiManagementApiOauth2Authorization) {
    this._oauth2Authorization.internalValue = value;
  }
  public resetOauth2Authorization() {
    this._oauth2Authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizationInput() {
    return this._oauth2Authorization.internalValue;
  }

  // openid_authentication - computed: false, optional: true, required: false
  private _openidAuthentication = new ApiManagementApiOpenidAuthenticationOutputReference(this, "openid_authentication");
  public get openidAuthentication() {
    return this._openidAuthentication;
  }
  public putOpenidAuthentication(value: ApiManagementApiOpenidAuthentication) {
    this._openidAuthentication.internalValue = value;
  }
  public resetOpenidAuthentication() {
    this._openidAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidAuthenticationInput() {
    return this._openidAuthentication.internalValue;
  }

  // subscription_key_parameter_names - computed: false, optional: true, required: false
  private _subscriptionKeyParameterNames = new ApiManagementApiSubscriptionKeyParameterNamesOutputReference(this, "subscription_key_parameter_names");
  public get subscriptionKeyParameterNames() {
    return this._subscriptionKeyParameterNames;
  }
  public putSubscriptionKeyParameterNames(value: ApiManagementApiSubscriptionKeyParameterNames) {
    this._subscriptionKeyParameterNames.internalValue = value;
  }
  public resetSubscriptionKeyParameterNames() {
    this._subscriptionKeyParameterNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionKeyParameterNamesInput() {
    return this._subscriptionKeyParameterNames.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementApiTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementApiTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      api_type: cdktf.stringToTerraform(this._apiType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      revision: cdktf.stringToTerraform(this._revision),
      revision_description: cdktf.stringToTerraform(this._revisionDescription),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      source_api_id: cdktf.stringToTerraform(this._sourceApiId),
      subscription_required: cdktf.booleanToTerraform(this._subscriptionRequired),
      terms_of_service_url: cdktf.stringToTerraform(this._termsOfServiceUrl),
      version: cdktf.stringToTerraform(this._version),
      version_description: cdktf.stringToTerraform(this._versionDescription),
      version_set_id: cdktf.stringToTerraform(this._versionSetId),
      contact: apiManagementApiContactToTerraform(this._contact.internalValue),
      import: apiManagementApiImportToTerraform(this._import.internalValue),
      license: apiManagementApiLicenseToTerraform(this._license.internalValue),
      oauth2_authorization: apiManagementApiOauth2AuthorizationToTerraform(this._oauth2Authorization.internalValue),
      openid_authentication: apiManagementApiOpenidAuthenticationToTerraform(this._openidAuthentication.internalValue),
      subscription_key_parameter_names: apiManagementApiSubscriptionKeyParameterNamesToTerraform(this._subscriptionKeyParameterNames.internalValue),
      timeouts: apiManagementApiTimeoutsToTerraform(this._timeouts.internalValue),
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
      api_type: {
        value: cdktf.stringToHclTerraform(this._apiType),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision_description: {
        value: cdktf.stringToHclTerraform(this._revisionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_url: {
        value: cdktf.stringToHclTerraform(this._serviceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_api_id: {
        value: cdktf.stringToHclTerraform(this._sourceApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_required: {
        value: cdktf.booleanToHclTerraform(this._subscriptionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terms_of_service_url: {
        value: cdktf.stringToHclTerraform(this._termsOfServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktf.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_set_id: {
        value: cdktf.stringToHclTerraform(this._versionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact: {
        value: apiManagementApiContactToHclTerraform(this._contact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiContactList",
      },
      import: {
        value: apiManagementApiImportToHclTerraform(this._import.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiImportList",
      },
      license: {
        value: apiManagementApiLicenseToHclTerraform(this._license.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiLicenseList",
      },
      oauth2_authorization: {
        value: apiManagementApiOauth2AuthorizationToHclTerraform(this._oauth2Authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiOauth2AuthorizationList",
      },
      openid_authentication: {
        value: apiManagementApiOpenidAuthenticationToHclTerraform(this._openidAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiOpenidAuthenticationList",
      },
      subscription_key_parameter_names: {
        value: apiManagementApiSubscriptionKeyParameterNamesToHclTerraform(this._subscriptionKeyParameterNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiSubscriptionKeyParameterNamesList",
      },
      timeouts: {
        value: apiManagementApiTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementApiTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
