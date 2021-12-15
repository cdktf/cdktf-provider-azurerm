// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiDiagnosticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#always_log_errors ApiManagementApiDiagnostic#always_log_errors}
  */
  readonly alwaysLogErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}
  */
  readonly apiManagementLoggerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#api_management_name ApiManagementApiDiagnostic#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#api_name ApiManagementApiDiagnostic#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}
  */
  readonly httpCorrelationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#identifier ApiManagementApiDiagnostic#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#log_client_ip ApiManagementApiDiagnostic#log_client_ip}
  */
  readonly logClientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#operation_name_format ApiManagementApiDiagnostic#operation_name_format}
  */
  readonly operationNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#resource_group_name ApiManagementApiDiagnostic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#verbosity ApiManagementApiDiagnostic#verbosity}
  */
  readonly verbosity?: string;
  /**
  * backend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#backend_request ApiManagementApiDiagnostic#backend_request}
  */
  readonly backendRequest?: ApiManagementApiDiagnosticBackendRequest;
  /**
  * backend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#backend_response ApiManagementApiDiagnostic#backend_response}
  */
  readonly backendResponse?: ApiManagementApiDiagnosticBackendResponse;
  /**
  * frontend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#frontend_request ApiManagementApiDiagnostic#frontend_request}
  */
  readonly frontendRequest?: ApiManagementApiDiagnosticFrontendRequest;
  /**
  * frontend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#frontend_response ApiManagementApiDiagnostic#frontend_response}
  */
  readonly frontendResponse?: ApiManagementApiDiagnosticFrontendResponse;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#timeouts ApiManagementApiDiagnostic#timeouts}
  */
  readonly timeouts?: ApiManagementApiDiagnosticTimeouts;
}
export interface ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticBackendRequestDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[];
}

export function apiManagementApiDiagnosticBackendRequestDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementApiDiagnosticBackendRequestDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticBackendRequestDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementApiDiagnosticBackendRequestDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendRequestDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryParams = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[]) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface ApiManagementApiDiagnosticBackendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticBackendRequestDataMasking;
}

export function apiManagementApiDiagnosticBackendRequestToTerraform(struct?: ApiManagementApiDiagnosticBackendRequestOutputReference | ApiManagementApiDiagnosticBackendRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticBackendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementApiDiagnosticBackendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this.getListAttribute('headers_to_log');
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
  private _dataMasking = new ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticBackendResponseDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[];
}

export function apiManagementApiDiagnosticBackendResponseDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementApiDiagnosticBackendResponseDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticBackendResponseDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementApiDiagnosticBackendResponseDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticBackendResponseDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryParams = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[]) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface ApiManagementApiDiagnosticBackendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticBackendResponseDataMasking;
}

export function apiManagementApiDiagnosticBackendResponseToTerraform(struct?: ApiManagementApiDiagnosticBackendResponseOutputReference | ApiManagementApiDiagnosticBackendResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticBackendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementApiDiagnosticBackendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this.getListAttribute('headers_to_log');
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
  private _dataMasking = new ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticFrontendRequestDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[];
}

export function apiManagementApiDiagnosticFrontendRequestDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementApiDiagnosticFrontendRequestDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticFrontendRequestDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementApiDiagnosticFrontendRequestDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendRequestDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryParams = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[]) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface ApiManagementApiDiagnosticFrontendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticFrontendRequestDataMasking;
}

export function apiManagementApiDiagnosticFrontendRequestToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequestOutputReference | ApiManagementApiDiagnosticFrontendRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticFrontendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementApiDiagnosticFrontendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this.getListAttribute('headers_to_log');
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
  private _dataMasking = new ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#mode ApiManagementApiDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#value ApiManagementApiDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementApiDiagnosticFrontendResponseDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers ApiManagementApiDiagnostic#headers}
  */
  readonly headers?: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#query_params ApiManagementApiDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[];
}

export function apiManagementApiDiagnosticFrontendResponseDataMaskingToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementApiDiagnosticFrontendResponseDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementApiDiagnosticFrontendResponseDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementApiDiagnosticFrontendResponseDataMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiDiagnosticFrontendResponseDataMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryParams = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[]) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface ApiManagementApiDiagnosticFrontendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#data_masking ApiManagementApiDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementApiDiagnosticFrontendResponseDataMasking;
}

export function apiManagementApiDiagnosticFrontendResponseToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponseOutputReference | ApiManagementApiDiagnosticFrontendResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementApiDiagnosticFrontendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementApiDiagnosticFrontendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this.getListAttribute('headers_to_log');
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
  private _dataMasking = new ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#create ApiManagementApiDiagnostic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#delete ApiManagementApiDiagnostic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#read ApiManagementApiDiagnostic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#update ApiManagementApiDiagnostic#update}
  */
  readonly update?: string;
}

export function apiManagementApiDiagnosticTimeoutsToTerraform(struct?: ApiManagementApiDiagnosticTimeoutsOutputReference | ApiManagementApiDiagnosticTimeouts): any {
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

export class ApiManagementApiDiagnosticTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementApiDiagnosticTimeouts | undefined {
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

  public set internalValue(value: ApiManagementApiDiagnosticTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html azurerm_api_management_api_diagnostic}
*/
export class ApiManagementApiDiagnostic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_api_diagnostic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html azurerm_api_management_api_diagnostic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiDiagnosticConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiDiagnosticConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_diagnostic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alwaysLogErrors = config.alwaysLogErrors;
    this._apiManagementLoggerId = config.apiManagementLoggerId;
    this._apiManagementName = config.apiManagementName;
    this._apiName = config.apiName;
    this._httpCorrelationProtocol = config.httpCorrelationProtocol;
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
    return this.getBooleanAttribute('always_log_errors') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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
    return this.getBooleanAttribute('log_client_ip') as any;
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
  private _backendRequest = new ApiManagementApiDiagnosticBackendRequestOutputReference(this as any, "backend_request", true);
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
  private _backendResponse = new ApiManagementApiDiagnosticBackendResponseOutputReference(this as any, "backend_response", true);
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
  private _frontendRequest = new ApiManagementApiDiagnosticFrontendRequestOutputReference(this as any, "frontend_request", true);
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
  private _frontendResponse = new ApiManagementApiDiagnosticFrontendResponseOutputReference(this as any, "frontend_response", true);
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
  private _timeouts = new ApiManagementApiDiagnosticTimeoutsOutputReference(this as any, "timeouts", true);
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
}
