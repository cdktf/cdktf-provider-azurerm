// https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementDiagnosticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}
  */
  readonly alwaysLogErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}
  */
  readonly apiManagementLoggerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#enabled ApiManagementDiagnostic#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}
  */
  readonly httpCorrelationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}
  */
  readonly logClientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}
  */
  readonly operationNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}
  */
  readonly verbosity?: string;
  /**
  * backend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}
  */
  readonly backendRequest?: ApiManagementDiagnosticBackendRequest;
  /**
  * backend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}
  */
  readonly backendResponse?: ApiManagementDiagnosticBackendResponse;
  /**
  * frontend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}
  */
  readonly frontendRequest?: ApiManagementDiagnosticFrontendRequest;
  /**
  * frontend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}
  */
  readonly frontendResponse?: ApiManagementDiagnosticFrontendResponse;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}
  */
  readonly timeouts?: ApiManagementDiagnosticTimeouts;
}
export interface ApiManagementDiagnosticBackendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticBackendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticBackendRequestDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[];
}

export function apiManagementDiagnosticBackendRequestDataMaskingToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementDiagnosticBackendRequestDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticBackendRequestDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementDiagnosticBackendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementDiagnosticBackendRequestDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendRequestDataMasking | undefined) {
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
  private _headers?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[]) {
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
  private _queryParams?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[]) {
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
export interface ApiManagementDiagnosticBackendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticBackendRequestDataMasking;
}

export function apiManagementDiagnosticBackendRequestToTerraform(struct?: ApiManagementDiagnosticBackendRequestOutputReference | ApiManagementDiagnosticBackendRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticBackendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementDiagnosticBackendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  private _dataMasking = new ApiManagementDiagnosticBackendRequestDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticBackendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticBackendResponseDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[];
}

export function apiManagementDiagnosticBackendResponseDataMaskingToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementDiagnosticBackendResponseDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticBackendResponseDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementDiagnosticBackendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementDiagnosticBackendResponseDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticBackendResponseDataMasking | undefined) {
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
  private _headers?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[]) {
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
  private _queryParams?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[]) {
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
export interface ApiManagementDiagnosticBackendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticBackendResponseDataMasking;
}

export function apiManagementDiagnosticBackendResponseToTerraform(struct?: ApiManagementDiagnosticBackendResponseOutputReference | ApiManagementDiagnosticBackendResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticBackendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementDiagnosticBackendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  private _dataMasking = new ApiManagementDiagnosticBackendResponseDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticFrontendRequestDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[];
}

export function apiManagementDiagnosticFrontendRequestDataMaskingToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementDiagnosticFrontendRequestDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticFrontendRequestDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementDiagnosticFrontendRequestDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendRequestDataMasking | undefined) {
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
  private _headers?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[]) {
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
  private _queryParams?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[]) {
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
export interface ApiManagementDiagnosticFrontendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticFrontendRequestDataMasking;
}

export function apiManagementDiagnosticFrontendRequestToTerraform(struct?: ApiManagementDiagnosticFrontendRequestOutputReference | ApiManagementDiagnosticFrontendRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticFrontendRequestDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementDiagnosticFrontendRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  private _dataMasking = new ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

export function apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApiManagementDiagnosticFrontendResponseDataMasking {
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[];
}

export function apiManagementDiagnosticFrontendResponseDataMaskingToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementDiagnosticFrontendResponseDataMasking): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apiManagementDiagnosticFrontendResponseDataMaskingHeadersToTerraform)(struct!.headers),
    query_params: cdktf.listMapper(apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform)(struct!.queryParams),
  }
}

export class ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementDiagnosticFrontendResponseDataMasking | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticFrontendResponseDataMasking | undefined) {
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
  private _headers?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[]) {
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
  private _queryParams?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[]; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[]) {
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
export interface ApiManagementDiagnosticFrontendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticFrontendResponseDataMasking;
}

export function apiManagementDiagnosticFrontendResponseToTerraform(struct?: ApiManagementDiagnosticFrontendResponseOutputReference | ApiManagementDiagnosticFrontendResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
    data_masking: apiManagementDiagnosticFrontendResponseDataMaskingToTerraform(struct!.dataMasking),
  }
}

export class ApiManagementDiagnosticFrontendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  private _dataMasking = new ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference(this as any, "data_masking", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#create ApiManagementDiagnostic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#delete ApiManagementDiagnostic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#read ApiManagementDiagnostic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic#update ApiManagementDiagnostic#update}
  */
  readonly update?: string;
}

export function apiManagementDiagnosticTimeoutsToTerraform(struct?: ApiManagementDiagnosticTimeoutsOutputReference | ApiManagementDiagnosticTimeouts): any {
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

export class ApiManagementDiagnosticTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementDiagnosticTimeouts | undefined {
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

  public set internalValue(value: ApiManagementDiagnosticTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic azurerm_api_management_diagnostic}
*/
export class ApiManagementDiagnostic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_diagnostic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic azurerm_api_management_diagnostic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementDiagnosticConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementDiagnosticConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_diagnostic',
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
    this._enabled = config.enabled;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
  private _backendRequest = new ApiManagementDiagnosticBackendRequestOutputReference(this as any, "backend_request", true);
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
  private _backendResponse = new ApiManagementDiagnosticBackendResponseOutputReference(this as any, "backend_response", true);
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
  private _frontendRequest = new ApiManagementDiagnosticFrontendRequestOutputReference(this as any, "frontend_request", true);
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
  private _frontendResponse = new ApiManagementDiagnosticFrontendResponseOutputReference(this as any, "frontend_response", true);
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
  private _timeouts = new ApiManagementDiagnosticTimeoutsOutputReference(this as any, "timeouts", true);
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      http_correlation_protocol: cdktf.stringToTerraform(this._httpCorrelationProtocol),
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
}
