// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiDiagnosticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}
  */
  readonly alwaysLogErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}
  */
  readonly apiManagementLoggerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}
  */
  readonly httpCorrelationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}
  */
  readonly logClientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}
  */
  readonly operationNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}
  */
  readonly verbosity?: string;
  /**
  * backend_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#backend_request ApiManagementApiDiagnostic#backend_request}
  */
  readonly backendRequest?: ApiManagementApiDiagnosticBackendRequest;
  /**
  * backend_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#backend_response ApiManagementApiDiagnostic#backend_response}
  */
  readonly backendResponse?: ApiManagementApiDiagnosticBackendResponse;
  /**
  * frontend_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#frontend_request ApiManagementApiDiagnostic#frontend_request}
  */
  readonly frontendRequest?: ApiManagementApiDiagnosticFrontendRequest;
  /**
  * frontend_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#frontend_response ApiManagementApiDiagnostic#frontend_response}
  */
  readonly frontendResponse?: ApiManagementApiDiagnosticFrontendResponse;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#timeouts ApiManagementApiDiagnostic#timeouts}
  */
  readonly timeouts?: ApiManagementApiDiagnosticTimeouts;
}
export interface ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticBackendRequestDataMaskingHeadersToHclTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference {
    return new ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference {
    return new ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticBackendRequestDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementApiDiagnosticBackendRequestDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementApiDiagnosticBackendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticBackendRequestDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementApiDiagnosticBackendRequestDataMaskingToHclTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementApiDiagnosticBackendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticBackendRequestDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticBackendRequestDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendRequestDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface ApiManagementApiDiagnosticBackendRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticBackendRequestDataMasking;
}

export function apiManagementApiDiagnosticBackendRequestToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestOutputReference | ApiManagementApiDiagnosticBackendRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticBackendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementApiDiagnosticBackendRequestToHclTerraform(struct?: ApiManagementApiDiagnosticBackendRequestOutputReference | ApiManagementApiDiagnosticBackendRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.bodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_masking: {
      value: apiManagementApiDiagnosticBackendRequestDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticBackendRequestDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticBackendRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyBytes = this._bodyBytes;
    }
    if (this._headersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToLog = this._headersToLog;
    }
    if (this._dataMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMasking = this._dataMasking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyBytes = undefined;
      this._headersToLog = undefined;
      this._dataMasking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyBytes = value.bodyBytes;
      this._headersToLog = value.headersToLog;
      this._dataMasking.internalValue = value.dataMasking;
    }
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes;
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[]; 
  public get headersToLog() {
    return cdktf.Fn.tolist(this.getListAttribute('headers_to_log'));
  }
  public set headersToLog(value: string[]) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog;
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking = new ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementApiDiagnosticBackendRequestDataMasking) {
    this._dataMasking.internalValue = value;
  }
  public resetDataMasking() {
    this._dataMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking.internalValue;
  }
}
export interface ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticBackendResponseDataMaskingHeadersToHclTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference {
    return new ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference {
    return new ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticBackendResponseDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementApiDiagnosticBackendResponseDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementApiDiagnosticBackendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticBackendResponseDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementApiDiagnosticBackendResponseDataMaskingToHclTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementApiDiagnosticBackendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticBackendResponseDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticBackendResponseDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendResponseDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface ApiManagementApiDiagnosticBackendResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticBackendResponseDataMasking;
}

export function apiManagementApiDiagnosticBackendResponseToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseOutputReference | ApiManagementApiDiagnosticBackendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticBackendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementApiDiagnosticBackendResponseToHclTerraform(struct?: ApiManagementApiDiagnosticBackendResponseOutputReference | ApiManagementApiDiagnosticBackendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.bodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_masking: {
      value: apiManagementApiDiagnosticBackendResponseDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticBackendResponseDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticBackendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticBackendResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyBytes = this._bodyBytes;
    }
    if (this._headersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToLog = this._headersToLog;
    }
    if (this._dataMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMasking = this._dataMasking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyBytes = undefined;
      this._headersToLog = undefined;
      this._dataMasking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyBytes = value.bodyBytes;
      this._headersToLog = value.headersToLog;
      this._dataMasking.internalValue = value.dataMasking;
    }
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes;
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[]; 
  public get headersToLog() {
    return cdktf.Fn.tolist(this.getListAttribute('headers_to_log'));
  }
  public set headersToLog(value: string[]) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog;
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking = new ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementApiDiagnosticBackendResponseDataMasking) {
    this._dataMasking.internalValue = value;
  }
  public resetDataMasking() {
    this._dataMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking.internalValue;
  }
}
export interface ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticFrontendRequestDataMaskingHeadersToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference {
    return new ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference {
    return new ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticFrontendRequestDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementApiDiagnosticFrontendRequestDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementApiDiagnosticFrontendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticFrontendRequestDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementApiDiagnosticFrontendRequestDataMaskingToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementApiDiagnosticFrontendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticFrontendRequestDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticFrontendRequestDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendRequestDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface ApiManagementApiDiagnosticFrontendRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticFrontendRequestDataMasking;
}

export function apiManagementApiDiagnosticFrontendRequestToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestOutputReference | ApiManagementApiDiagnosticFrontendRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticFrontendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementApiDiagnosticFrontendRequestToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestOutputReference | ApiManagementApiDiagnosticFrontendRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.bodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_masking: {
      value: apiManagementApiDiagnosticFrontendRequestDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticFrontendRequestDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticFrontendRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyBytes = this._bodyBytes;
    }
    if (this._headersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToLog = this._headersToLog;
    }
    if (this._dataMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMasking = this._dataMasking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyBytes = undefined;
      this._headersToLog = undefined;
      this._dataMasking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyBytes = value.bodyBytes;
      this._headersToLog = value.headersToLog;
      this._dataMasking.internalValue = value.dataMasking;
    }
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes;
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[]; 
  public get headersToLog() {
    return cdktf.Fn.tolist(this.getListAttribute('headers_to_log'));
  }
  public set headersToLog(value: string[]) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog;
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking = new ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementApiDiagnosticFrontendRequestDataMasking) {
    this._dataMasking.internalValue = value;
  }
  public resetDataMasking() {
    this._dataMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking.internalValue;
  }
}
export interface ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticFrontendResponseDataMaskingHeadersToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference {
    return new ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference {
    return new ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiDiagnosticFrontendResponseDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementApiDiagnosticFrontendResponseDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementApiDiagnosticFrontendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticFrontendResponseDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementApiDiagnosticFrontendResponseDataMaskingToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementApiDiagnosticFrontendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticFrontendResponseDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticFrontendResponseDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendResponseDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface ApiManagementApiDiagnosticFrontendResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticFrontendResponseDataMasking;
}

export function apiManagementApiDiagnosticFrontendResponseToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseOutputReference | ApiManagementApiDiagnosticFrontendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticFrontendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementApiDiagnosticFrontendResponseToHclTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseOutputReference | ApiManagementApiDiagnosticFrontendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.bodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_masking: {
      value: apiManagementApiDiagnosticFrontendResponseDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiDiagnosticFrontendResponseDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiDiagnosticFrontendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiDiagnosticFrontendResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyBytes = this._bodyBytes;
    }
    if (this._headersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToLog = this._headersToLog;
    }
    if (this._dataMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMasking = this._dataMasking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyBytes = undefined;
      this._headersToLog = undefined;
      this._dataMasking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyBytes = value.bodyBytes;
      this._headersToLog = value.headersToLog;
      this._dataMasking.internalValue = value.dataMasking;
    }
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes;
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[]; 
  public get headersToLog() {
    return cdktf.Fn.tolist(this.getListAttribute('headers_to_log'));
  }
  public set headersToLog(value: string[]) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog;
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking = new ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementApiDiagnosticFrontendResponseDataMasking) {
    this._dataMasking.internalValue = value;
  }
  public resetDataMasking() {
    this._dataMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking.internalValue;
  }
}
export interface ApiManagementApiDiagnosticTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}
  */
  readonly update?: string;
}

export function apiManagementApiDiagnosticTimeoutsToTerraform(struct?: ApiManagementApiDiagnosticTimeouts | cdktf.IResolvable): any {
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


export function apiManagementApiDiagnosticTimeoutsToHclTerraform(struct?: ApiManagementApiDiagnosticTimeouts | cdktf.IResolvable): any {
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

export class ApiManagementApiDiagnosticTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementApiDiagnosticTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementApiDiagnosticTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic azurerm_api_management_api_diagnostic}
*/
export class ApiManagementApiDiagnostic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_api_diagnostic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementApiDiagnostic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementApiDiagnostic to import
  * @param importFromId The id of the existing ApiManagementApiDiagnostic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementApiDiagnostic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_api_diagnostic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_diagnostic azurerm_api_management_api_diagnostic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiDiagnosticConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiDiagnosticConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_diagnostic',
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
    this._alwaysLogErrors = config.alwaysLogErrors;
    this._apiManagementLoggerId = config.apiManagementLoggerId;
    this._apiManagementName = config.apiManagementName;
    this._apiName = config.apiName;
    this._httpCorrelationProtocol = config.httpCorrelationProtocol;
    this._id = config.id;
    this._identifier = config.identifier;
    this._logClientIp = config.logClientIp;
    this._operationNameFormat = config.operationNameFormat;
    this._resourceGroupName = config.resourceGroupName;
    this._samplingPercentage = config.samplingPercentage;
    this._verbosity = config.verbosity;
    this._backendRequest.internalValue = config.backendRequest;
    this._backendResponse.internalValue = config.backendResponse;
    this._frontendRequest.internalValue = config.frontendRequest;
    this._frontendResponse.internalValue = config.frontendResponse;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_log_errors - computed: true, optional: true, required: false
  private _alwaysLogErrors?: boolean | cdktf.IResolvable; 
  public get alwaysLogErrors() {
    return this.getBooleanAttribute('always_log_errors');
  }
  public set alwaysLogErrors(value: boolean | cdktf.IResolvable) {
    this._alwaysLogErrors = value;
  }
  public resetAlwaysLogErrors() {
    this._alwaysLogErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysLogErrorsInput() {
    return this._alwaysLogErrors;
  }

  // api_management_logger_id - computed: false, optional: false, required: true
  private _apiManagementLoggerId?: string; 
  public get apiManagementLoggerId() {
    return this.getStringAttribute('api_management_logger_id');
  }
  public set apiManagementLoggerId(value: string) {
    this._apiManagementLoggerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementLoggerIdInput() {
    return this._apiManagementLoggerId;
  }

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

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // http_correlation_protocol - computed: true, optional: true, required: false
  private _httpCorrelationProtocol?: string; 
  public get httpCorrelationProtocol() {
    return this.getStringAttribute('http_correlation_protocol');
  }
  public set httpCorrelationProtocol(value: string) {
    this._httpCorrelationProtocol = value;
  }
  public resetHttpCorrelationProtocol() {
    this._httpCorrelationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorrelationProtocolInput() {
    return this._httpCorrelationProtocol;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // log_client_ip - computed: true, optional: true, required: false
  private _logClientIp?: boolean | cdktf.IResolvable; 
  public get logClientIp() {
    return this.getBooleanAttribute('log_client_ip');
  }
  public set logClientIp(value: boolean | cdktf.IResolvable) {
    this._logClientIp = value;
  }
  public resetLogClientIp() {
    this._logClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logClientIpInput() {
    return this._logClientIp;
  }

  // operation_name_format - computed: false, optional: true, required: false
  private _operationNameFormat?: string; 
  public get operationNameFormat() {
    return this.getStringAttribute('operation_name_format');
  }
  public set operationNameFormat(value: string) {
    this._operationNameFormat = value;
  }
  public resetOperationNameFormat() {
    this._operationNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameFormatInput() {
    return this._operationNameFormat;
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

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage;
  }

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: string; 
  public get verbosity() {
    return this.getStringAttribute('verbosity');
  }
  public set verbosity(value: string) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // backend_request - computed: false, optional: true, required: false
  private _backendRequest = new ApiManagementApiDiagnosticBackendRequestOutputReference(this, "backend_request");
  public get backendRequest() {
    return this._backendRequest;
  }
  public putBackendRequest(value: ApiManagementApiDiagnosticBackendRequest) {
    this._backendRequest.internalValue = value;
  }
  public resetBackendRequest() {
    this._backendRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRequestInput() {
    return this._backendRequest.internalValue;
  }

  // backend_response - computed: false, optional: true, required: false
  private _backendResponse = new ApiManagementApiDiagnosticBackendResponseOutputReference(this, "backend_response");
  public get backendResponse() {
    return this._backendResponse;
  }
  public putBackendResponse(value: ApiManagementApiDiagnosticBackendResponse) {
    this._backendResponse.internalValue = value;
  }
  public resetBackendResponse() {
    this._backendResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendResponseInput() {
    return this._backendResponse.internalValue;
  }

  // frontend_request - computed: false, optional: true, required: false
  private _frontendRequest = new ApiManagementApiDiagnosticFrontendRequestOutputReference(this, "frontend_request");
  public get frontendRequest() {
    return this._frontendRequest;
  }
  public putFrontendRequest(value: ApiManagementApiDiagnosticFrontendRequest) {
    this._frontendRequest.internalValue = value;
  }
  public resetFrontendRequest() {
    this._frontendRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendRequestInput() {
    return this._frontendRequest.internalValue;
  }

  // frontend_response - computed: false, optional: true, required: false
  private _frontendResponse = new ApiManagementApiDiagnosticFrontendResponseOutputReference(this, "frontend_response");
  public get frontendResponse() {
    return this._frontendResponse;
  }
  public putFrontendResponse(value: ApiManagementApiDiagnosticFrontendResponse) {
    this._frontendResponse.internalValue = value;
  }
  public resetFrontendResponse() {
    this._frontendResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendResponseInput() {
    return this._frontendResponse.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementApiDiagnosticTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementApiDiagnosticTimeouts) {
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
      always_log_errors: cdktf.booleanToTerraform(this._alwaysLogErrors),
      api_management_logger_id: cdktf.stringToTerraform(this._apiManagementLoggerId),
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      api_name: cdktf.stringToTerraform(this._apiName),
      http_correlation_protocol: cdktf.stringToTerraform(this._httpCorrelationProtocol),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      log_client_ip: cdktf.booleanToTerraform(this._logClientIp),
      operation_name_format: cdktf.stringToTerraform(this._operationNameFormat),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      verbosity: cdktf.stringToTerraform(this._verbosity),
      backend_request: apiManagementApiDiagnosticBackendRequestToTerraform(this._backendRequest.internalValue),
      backend_response: apiManagementApiDiagnosticBackendResponseToTerraform(this._backendResponse.internalValue),
      frontend_request: apiManagementApiDiagnosticFrontendRequestToTerraform(this._frontendRequest.internalValue),
      frontend_response: apiManagementApiDiagnosticFrontendResponseToTerraform(this._frontendResponse.internalValue),
      timeouts: apiManagementApiDiagnosticTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_log_errors: {
        value: cdktf.booleanToHclTerraform(this._alwaysLogErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_management_logger_id: {
        value: cdktf.stringToHclTerraform(this._apiManagementLoggerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_management_name: {
        value: cdktf.stringToHclTerraform(this._apiManagementName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_name: {
        value: cdktf.stringToHclTerraform(this._apiName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_correlation_protocol: {
        value: cdktf.stringToHclTerraform(this._httpCorrelationProtocol),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_client_ip: {
        value: cdktf.booleanToHclTerraform(this._logClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_name_format: {
        value: cdktf.stringToHclTerraform(this._operationNameFormat),
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
      sampling_percentage: {
        value: cdktf.numberToHclTerraform(this._samplingPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verbosity: {
        value: cdktf.stringToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_request: {
        value: apiManagementApiDiagnosticBackendRequestToHclTerraform(this._backendRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiDiagnosticBackendRequestList",
      },
      backend_response: {
        value: apiManagementApiDiagnosticBackendResponseToHclTerraform(this._backendResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiDiagnosticBackendResponseList",
      },
      frontend_request: {
        value: apiManagementApiDiagnosticFrontendRequestToHclTerraform(this._frontendRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiDiagnosticFrontendRequestList",
      },
      frontend_response: {
        value: apiManagementApiDiagnosticFrontendResponseToHclTerraform(this._frontendResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiDiagnosticFrontendResponseList",
      },
      timeouts: {
        value: apiManagementApiDiagnosticTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementApiDiagnosticTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
