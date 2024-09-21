// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementDiagnosticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}
  */
  readonly alwaysLogErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}
  */
  readonly apiManagementLoggerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}
  */
  readonly httpCorrelationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}
  */
  readonly logClientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}
  */
  readonly operationNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}
  */
  readonly verbosity?: string;
  /**
  * backend_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}
  */
  readonly backendRequest?: ApiManagementDiagnosticBackendRequest;
  /**
  * backend_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}
  */
  readonly backendResponse?: ApiManagementDiagnosticBackendResponse;
  /**
  * frontend_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}
  */
  readonly frontendRequest?: ApiManagementDiagnosticFrontendRequest;
  /**
  * frontend_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}
  */
  readonly frontendResponse?: ApiManagementDiagnosticFrontendResponse;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}
  */
  readonly timeouts?: ApiManagementDiagnosticTimeouts;
}
export interface ApiManagementDiagnosticBackendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticBackendRequestDataMaskingHeadersToHclTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendRequestDataMaskingHeaders | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticBackendRequestDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticBackendRequestDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference {
    return new ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticBackendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference {
    return new ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticBackendRequestDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementDiagnosticBackendRequestDataMaskingToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementDiagnosticBackendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticBackendRequestDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementDiagnosticBackendRequestDataMaskingToHclTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementDiagnosticBackendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticBackendRequestDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticBackendRequestDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticBackendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticBackendRequestDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendRequestDataMasking | undefined) {
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
  private _headers = new ApiManagementDiagnosticBackendRequestDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[] | cdktf.IResolvable) {
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
  private _queryParams = new ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[] | cdktf.IResolvable) {
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
export interface ApiManagementDiagnosticBackendRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticBackendRequestDataMasking;
}

export function apiManagementDiagnosticBackendRequestToTerraform(struct?: ApiManagementDiagnosticBackendRequestOutputReference | ApiManagementDiagnosticBackendRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticBackendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementDiagnosticBackendRequestToHclTerraform(struct?: ApiManagementDiagnosticBackendRequestOutputReference | ApiManagementDiagnosticBackendRequest): any {
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
      value: apiManagementDiagnosticBackendRequestDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticBackendRequestDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticBackendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticBackendRequest | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendRequest | undefined) {
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
  private _dataMasking = new ApiManagementDiagnosticBackendRequestDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementDiagnosticBackendRequestDataMasking) {
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
export interface ApiManagementDiagnosticBackendResponseDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticBackendResponseDataMaskingHeadersToHclTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendResponseDataMaskingHeaders | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticBackendResponseDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticBackendResponseDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference {
    return new ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticBackendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference {
    return new ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticBackendResponseDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementDiagnosticBackendResponseDataMaskingToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementDiagnosticBackendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticBackendResponseDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementDiagnosticBackendResponseDataMaskingToHclTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementDiagnosticBackendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticBackendResponseDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticBackendResponseDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticBackendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticBackendResponseDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendResponseDataMasking | undefined) {
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
  private _headers = new ApiManagementDiagnosticBackendResponseDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[] | cdktf.IResolvable) {
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
  private _queryParams = new ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[] | cdktf.IResolvable) {
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
export interface ApiManagementDiagnosticBackendResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticBackendResponseDataMasking;
}

export function apiManagementDiagnosticBackendResponseToTerraform(struct?: ApiManagementDiagnosticBackendResponseOutputReference | ApiManagementDiagnosticBackendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticBackendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementDiagnosticBackendResponseToHclTerraform(struct?: ApiManagementDiagnosticBackendResponseOutputReference | ApiManagementDiagnosticBackendResponse): any {
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
      value: apiManagementDiagnosticBackendResponseDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticBackendResponseDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticBackendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticBackendResponse | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendResponse | undefined) {
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
  private _dataMasking = new ApiManagementDiagnosticBackendResponseDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementDiagnosticBackendResponseDataMasking) {
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
export interface ApiManagementDiagnosticFrontendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticFrontendRequestDataMaskingHeadersToHclTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference {
    return new ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference {
    return new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticFrontendRequestDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementDiagnosticFrontendRequestDataMaskingToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementDiagnosticFrontendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticFrontendRequestDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementDiagnosticFrontendRequestDataMaskingToHclTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementDiagnosticFrontendRequestDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticFrontendRequestDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticFrontendRequestDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendRequestDataMasking | undefined) {
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
  private _headers = new ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[] | cdktf.IResolvable) {
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
  private _queryParams = new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[] | cdktf.IResolvable) {
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
export interface ApiManagementDiagnosticFrontendRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticFrontendRequestDataMasking;
}

export function apiManagementDiagnosticFrontendRequestToTerraform(struct?: ApiManagementDiagnosticFrontendRequestOutputReference | ApiManagementDiagnosticFrontendRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticFrontendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementDiagnosticFrontendRequestToHclTerraform(struct?: ApiManagementDiagnosticFrontendRequestOutputReference | ApiManagementDiagnosticFrontendRequest): any {
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
      value: apiManagementDiagnosticFrontendRequestDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticFrontendRequestDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticFrontendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticFrontendRequest | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendRequest | undefined) {
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
  private _dataMasking = new ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementDiagnosticFrontendRequestDataMasking) {
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
export interface ApiManagementDiagnosticFrontendResponseDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticFrontendResponseDataMaskingHeadersToHclTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference {
    return new ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToHclTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams | cdktf.IResolvable | undefined) {
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

export class ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference {
    return new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementDiagnosticFrontendResponseDataMasking {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[] | cdktf.IResolvable;
}

export function apiManagementDiagnosticFrontendResponseDataMaskingToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementDiagnosticFrontendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticFrontendResponseDataMaskingHeadersToTerraform, true)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function apiManagementDiagnosticFrontendResponseDataMaskingToHclTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementDiagnosticFrontendResponseDataMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticFrontendResponseDataMaskingHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList",
    },
    query_params: {
      value: cdktf.listMapperHcl(apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticFrontendResponseDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendResponseDataMasking | undefined) {
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
  private _headers = new ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[] | cdktf.IResolvable) {
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
  private _queryParams = new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[] | cdktf.IResolvable) {
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
export interface ApiManagementDiagnosticFrontendResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticFrontendResponseDataMasking;
}

export function apiManagementDiagnosticFrontendResponseToTerraform(struct?: ApiManagementDiagnosticFrontendResponseOutputReference | ApiManagementDiagnosticFrontendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticFrontendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}


export function apiManagementDiagnosticFrontendResponseToHclTerraform(struct?: ApiManagementDiagnosticFrontendResponseOutputReference | ApiManagementDiagnosticFrontendResponse): any {
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
      value: apiManagementDiagnosticFrontendResponseDataMaskingToHclTerraform(struct!.dataMasking),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementDiagnosticFrontendResponseDataMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementDiagnosticFrontendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementDiagnosticFrontendResponse | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendResponse | undefined) {
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
  private _dataMasking = new ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference(this, "data_masking");
  public get dataMasking() {
    return this._dataMasking;
  }
  public putDataMasking(value: ApiManagementDiagnosticFrontendResponseDataMasking) {
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
export interface ApiManagementDiagnosticTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}
  */
  readonly update?: string;
}

export function apiManagementDiagnosticTimeoutsToTerraform(struct?: ApiManagementDiagnosticTimeouts | cdktf.IResolvable): any {
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


export function apiManagementDiagnosticTimeoutsToHclTerraform(struct?: ApiManagementDiagnosticTimeouts | cdktf.IResolvable): any {
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

export class ApiManagementDiagnosticTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementDiagnosticTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic azurerm_api_management_diagnostic}
*/
export class ApiManagementDiagnostic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_diagnostic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementDiagnostic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementDiagnostic to import
  * @param importFromId The id of the existing ApiManagementDiagnostic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementDiagnostic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_diagnostic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_diagnostic azurerm_api_management_diagnostic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementDiagnosticConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementDiagnosticConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_diagnostic',
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
  private _backendRequest = new ApiManagementDiagnosticBackendRequestOutputReference(this, "backend_request");
  public get backendRequest() {
    return this._backendRequest;
  }
  public putBackendRequest(value: ApiManagementDiagnosticBackendRequest) {
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
  private _backendResponse = new ApiManagementDiagnosticBackendResponseOutputReference(this, "backend_response");
  public get backendResponse() {
    return this._backendResponse;
  }
  public putBackendResponse(value: ApiManagementDiagnosticBackendResponse) {
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
  private _frontendRequest = new ApiManagementDiagnosticFrontendRequestOutputReference(this, "frontend_request");
  public get frontendRequest() {
    return this._frontendRequest;
  }
  public putFrontendRequest(value: ApiManagementDiagnosticFrontendRequest) {
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
  private _frontendResponse = new ApiManagementDiagnosticFrontendResponseOutputReference(this, "frontend_response");
  public get frontendResponse() {
    return this._frontendResponse;
  }
  public putFrontendResponse(value: ApiManagementDiagnosticFrontendResponse) {
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
  private _timeouts = new ApiManagementDiagnosticTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementDiagnosticTimeouts) {
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
      http_correlation_protocol: cdktf.stringToTerraform(this._httpCorrelationProtocol),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      log_client_ip: cdktf.booleanToTerraform(this._logClientIp),
      operation_name_format: cdktf.stringToTerraform(this._operationNameFormat),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      verbosity: cdktf.stringToTerraform(this._verbosity),
      backend_request: apiManagementDiagnosticBackendRequestToTerraform(this._backendRequest.internalValue),
      backend_response: apiManagementDiagnosticBackendResponseToTerraform(this._backendResponse.internalValue),
      frontend_request: apiManagementDiagnosticFrontendRequestToTerraform(this._frontendRequest.internalValue),
      frontend_response: apiManagementDiagnosticFrontendResponseToTerraform(this._frontendResponse.internalValue),
      timeouts: apiManagementDiagnosticTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: apiManagementDiagnosticBackendRequestToHclTerraform(this._backendRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementDiagnosticBackendRequestList",
      },
      backend_response: {
        value: apiManagementDiagnosticBackendResponseToHclTerraform(this._backendResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementDiagnosticBackendResponseList",
      },
      frontend_request: {
        value: apiManagementDiagnosticFrontendRequestToHclTerraform(this._frontendRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementDiagnosticFrontendRequestList",
      },
      frontend_response: {
        value: apiManagementDiagnosticFrontendResponseToHclTerraform(this._frontendResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementDiagnosticFrontendResponseList",
      },
      timeouts: {
        value: apiManagementDiagnosticTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementDiagnosticTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
