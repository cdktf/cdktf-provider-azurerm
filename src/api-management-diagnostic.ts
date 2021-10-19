// https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementDiagnosticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#always_log_errors ApiManagementDiagnostic#always_log_errors}
  */
  readonly alwaysLogErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}
  */
  readonly apiManagementLoggerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#api_management_name ApiManagementDiagnostic#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#enabled ApiManagementDiagnostic#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}
  */
  readonly httpCorrelationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#identifier ApiManagementDiagnostic#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#log_client_ip ApiManagementDiagnostic#log_client_ip}
  */
  readonly logClientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#operation_name_format ApiManagementDiagnostic#operation_name_format}
  */
  readonly operationNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#resource_group_name ApiManagementDiagnostic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#sampling_percentage ApiManagementDiagnostic#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#verbosity ApiManagementDiagnostic#verbosity}
  */
  readonly verbosity?: string;
  /**
  * backend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#backend_request ApiManagementDiagnostic#backend_request}
  */
  readonly backendRequest?: ApiManagementDiagnosticBackendRequest;
  /**
  * backend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#backend_response ApiManagementDiagnostic#backend_response}
  */
  readonly backendResponse?: ApiManagementDiagnosticBackendResponse;
  /**
  * frontend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#frontend_request ApiManagementDiagnostic#frontend_request}
  */
  readonly frontendRequest?: ApiManagementDiagnosticFrontendRequest;
  /**
  * frontend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#frontend_response ApiManagementDiagnostic#frontend_response}
  */
  readonly frontendResponse?: ApiManagementDiagnosticFrontendResponse;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#timeouts ApiManagementDiagnostic#timeouts}
  */
  readonly timeouts?: ApiManagementDiagnosticTimeouts;
}
export interface ApiManagementDiagnosticBackendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticBackendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticBackendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[];
}

function apiManagementDiagnosticBackendRequestDataMaskingToTerraform(struct?: ApiManagementDiagnosticBackendRequestDataMaskingOutputReference | ApiManagementDiagnosticBackendRequestDataMasking): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[] | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticBackendRequestDataMaskingHeaders[] | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[] | undefined; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticBackendRequestDataMaskingQueryParams[] | undefined) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams
  }
}
export interface ApiManagementDiagnosticBackendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticBackendRequestDataMasking;
}

function apiManagementDiagnosticBackendRequestToTerraform(struct?: ApiManagementDiagnosticBackendRequestOutputReference | ApiManagementDiagnosticBackendRequest): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number | undefined; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number | undefined) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[] | undefined; 
  public get headersToLog() {
    return this.getListAttribute('headers_to_log');
  }
  public set headersToLog(value: string[] | undefined) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking?: ApiManagementDiagnosticBackendRequestDataMasking | undefined; 
  private __dataMaskingOutput = new ApiManagementDiagnosticBackendRequestDataMaskingOutputReference(this as any, "data_masking", true);
  public get dataMasking() {
    return this.__dataMaskingOutput;
  }
  public putDataMasking(value: ApiManagementDiagnosticBackendRequestDataMasking | undefined) {
    this._dataMasking = value;
  }
  public resetDataMasking() {
    this._dataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking
  }
}
export interface ApiManagementDiagnosticBackendResponseDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticBackendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticBackendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[];
}

function apiManagementDiagnosticBackendResponseDataMaskingToTerraform(struct?: ApiManagementDiagnosticBackendResponseDataMaskingOutputReference | ApiManagementDiagnosticBackendResponseDataMasking): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[] | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticBackendResponseDataMaskingHeaders[] | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[] | undefined; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticBackendResponseDataMaskingQueryParams[] | undefined) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams
  }
}
export interface ApiManagementDiagnosticBackendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticBackendResponseDataMasking;
}

function apiManagementDiagnosticBackendResponseToTerraform(struct?: ApiManagementDiagnosticBackendResponseOutputReference | ApiManagementDiagnosticBackendResponse): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number | undefined; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number | undefined) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[] | undefined; 
  public get headersToLog() {
    return this.getListAttribute('headers_to_log');
  }
  public set headersToLog(value: string[] | undefined) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking?: ApiManagementDiagnosticBackendResponseDataMasking | undefined; 
  private __dataMaskingOutput = new ApiManagementDiagnosticBackendResponseDataMaskingOutputReference(this as any, "data_masking", true);
  public get dataMasking() {
    return this.__dataMaskingOutput;
  }
  public putDataMasking(value: ApiManagementDiagnosticBackendResponseDataMasking | undefined) {
    this._dataMasking = value;
  }
  public resetDataMasking() {
    this._dataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking
  }
}
export interface ApiManagementDiagnosticFrontendRequestDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticFrontendRequestDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticFrontendRequestDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[];
}

function apiManagementDiagnosticFrontendRequestDataMaskingToTerraform(struct?: ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference | ApiManagementDiagnosticFrontendRequestDataMasking): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[] | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticFrontendRequestDataMaskingHeaders[] | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[] | undefined; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams[] | undefined) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams
  }
}
export interface ApiManagementDiagnosticFrontendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticFrontendRequestDataMasking;
}

function apiManagementDiagnosticFrontendRequestToTerraform(struct?: ApiManagementDiagnosticFrontendRequestOutputReference | ApiManagementDiagnosticFrontendRequest): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number | undefined; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number | undefined) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[] | undefined; 
  public get headersToLog() {
    return this.getListAttribute('headers_to_log');
  }
  public set headersToLog(value: string[] | undefined) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking?: ApiManagementDiagnosticFrontendRequestDataMasking | undefined; 
  private __dataMaskingOutput = new ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference(this as any, "data_masking", true);
  public get dataMasking() {
    return this.__dataMaskingOutput;
  }
  public putDataMasking(value: ApiManagementDiagnosticFrontendRequestDataMasking | undefined) {
    this._dataMasking = value;
  }
  public resetDataMasking() {
    this._dataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking
  }
}
export interface ApiManagementDiagnosticFrontendResponseDataMaskingHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticFrontendResponseDataMaskingHeadersToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#mode ApiManagementDiagnostic#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#value ApiManagementDiagnostic#value}
  */
  readonly value: string;
}

function apiManagementDiagnosticFrontendResponseDataMaskingQueryParamsToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers ApiManagementDiagnostic#headers}
  */
  readonly headers?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[];
  /**
  * query_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#query_params ApiManagementDiagnostic#query_params}
  */
  readonly queryParams?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[];
}

function apiManagementDiagnosticFrontendResponseDataMaskingToTerraform(struct?: ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference | ApiManagementDiagnosticFrontendResponseDataMasking): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[] | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: ApiManagementDiagnosticFrontendResponseDataMaskingHeaders[] | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[] | undefined; 
  public get queryParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_params') as any;
  }
  public set queryParams(value: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams[] | undefined) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams
  }
}
export interface ApiManagementDiagnosticFrontendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#body_bytes ApiManagementDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#headers_to_log ApiManagementDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
  /**
  * data_masking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#data_masking ApiManagementDiagnostic#data_masking}
  */
  readonly dataMasking?: ApiManagementDiagnosticFrontendResponseDataMasking;
}

function apiManagementDiagnosticFrontendResponseToTerraform(struct?: ApiManagementDiagnosticFrontendResponseOutputReference | ApiManagementDiagnosticFrontendResponse): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body_bytes - computed: false, optional: true, required: false
  private _bodyBytes?: number | undefined; 
  public get bodyBytes() {
    return this.getNumberAttribute('body_bytes');
  }
  public set bodyBytes(value: number | undefined) {
    this._bodyBytes = value;
  }
  public resetBodyBytes() {
    this._bodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyBytesInput() {
    return this._bodyBytes
  }

  // headers_to_log - computed: false, optional: true, required: false
  private _headersToLog?: string[] | undefined; 
  public get headersToLog() {
    return this.getListAttribute('headers_to_log');
  }
  public set headersToLog(value: string[] | undefined) {
    this._headersToLog = value;
  }
  public resetHeadersToLog() {
    this._headersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToLogInput() {
    return this._headersToLog
  }

  // data_masking - computed: false, optional: true, required: false
  private _dataMasking?: ApiManagementDiagnosticFrontendResponseDataMasking | undefined; 
  private __dataMaskingOutput = new ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference(this as any, "data_masking", true);
  public get dataMasking() {
    return this.__dataMaskingOutput;
  }
  public putDataMasking(value: ApiManagementDiagnosticFrontendResponseDataMasking | undefined) {
    this._dataMasking = value;
  }
  public resetDataMasking() {
    this._dataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking
  }
}
export interface ApiManagementDiagnosticTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#create ApiManagementDiagnostic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#delete ApiManagementDiagnostic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#read ApiManagementDiagnostic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html#update ApiManagementDiagnostic#update}
  */
  readonly update?: string;
}

function apiManagementDiagnosticTimeoutsToTerraform(struct?: ApiManagementDiagnosticTimeoutsOutputReference | ApiManagementDiagnosticTimeouts): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html azurerm_api_management_diagnostic}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html azurerm_api_management_diagnostic} Resource
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
    this._backendRequest = config.backendRequest;
    this._backendResponse = config.backendResponse;
    this._frontendRequest = config.frontendRequest;
    this._frontendResponse = config.frontendResponse;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_log_errors - computed: true, optional: true, required: false
  private _alwaysLogErrors?: boolean | cdktf.IResolvable | undefined; 
  public get alwaysLogErrors() {
    return this.getBooleanAttribute('always_log_errors') as any;
  }
  public set alwaysLogErrors(value: boolean | cdktf.IResolvable | undefined) {
    this._alwaysLogErrors = value;
  }
  public resetAlwaysLogErrors() {
    this._alwaysLogErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysLogErrorsInput() {
    return this._alwaysLogErrors
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
    return this._apiManagementLoggerId
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
    return this._apiManagementName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // http_correlation_protocol - computed: true, optional: true, required: false
  private _httpCorrelationProtocol?: string | undefined; 
  public get httpCorrelationProtocol() {
    return this.getStringAttribute('http_correlation_protocol');
  }
  public set httpCorrelationProtocol(value: string | undefined) {
    this._httpCorrelationProtocol = value;
  }
  public resetHttpCorrelationProtocol() {
    this._httpCorrelationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorrelationProtocolInput() {
    return this._httpCorrelationProtocol
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
    return this._identifier
  }

  // log_client_ip - computed: true, optional: true, required: false
  private _logClientIp?: boolean | cdktf.IResolvable | undefined; 
  public get logClientIp() {
    return this.getBooleanAttribute('log_client_ip') as any;
  }
  public set logClientIp(value: boolean | cdktf.IResolvable | undefined) {
    this._logClientIp = value;
  }
  public resetLogClientIp() {
    this._logClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logClientIpInput() {
    return this._logClientIp
  }

  // operation_name_format - computed: false, optional: true, required: false
  private _operationNameFormat?: string | undefined; 
  public get operationNameFormat() {
    return this.getStringAttribute('operation_name_format');
  }
  public set operationNameFormat(value: string | undefined) {
    this._operationNameFormat = value;
  }
  public resetOperationNameFormat() {
    this._operationNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameFormatInput() {
    return this._operationNameFormat
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

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number | undefined; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number | undefined) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage
  }

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: string | undefined; 
  public get verbosity() {
    return this.getStringAttribute('verbosity');
  }
  public set verbosity(value: string | undefined) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity
  }

  // backend_request - computed: false, optional: true, required: false
  private _backendRequest?: ApiManagementDiagnosticBackendRequest | undefined; 
  private __backendRequestOutput = new ApiManagementDiagnosticBackendRequestOutputReference(this as any, "backend_request", true);
  public get backendRequest() {
    return this.__backendRequestOutput;
  }
  public putBackendRequest(value: ApiManagementDiagnosticBackendRequest | undefined) {
    this._backendRequest = value;
  }
  public resetBackendRequest() {
    this._backendRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRequestInput() {
    return this._backendRequest
  }

  // backend_response - computed: false, optional: true, required: false
  private _backendResponse?: ApiManagementDiagnosticBackendResponse | undefined; 
  private __backendResponseOutput = new ApiManagementDiagnosticBackendResponseOutputReference(this as any, "backend_response", true);
  public get backendResponse() {
    return this.__backendResponseOutput;
  }
  public putBackendResponse(value: ApiManagementDiagnosticBackendResponse | undefined) {
    this._backendResponse = value;
  }
  public resetBackendResponse() {
    this._backendResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendResponseInput() {
    return this._backendResponse
  }

  // frontend_request - computed: false, optional: true, required: false
  private _frontendRequest?: ApiManagementDiagnosticFrontendRequest | undefined; 
  private __frontendRequestOutput = new ApiManagementDiagnosticFrontendRequestOutputReference(this as any, "frontend_request", true);
  public get frontendRequest() {
    return this.__frontendRequestOutput;
  }
  public putFrontendRequest(value: ApiManagementDiagnosticFrontendRequest | undefined) {
    this._frontendRequest = value;
  }
  public resetFrontendRequest() {
    this._frontendRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendRequestInput() {
    return this._frontendRequest
  }

  // frontend_response - computed: false, optional: true, required: false
  private _frontendResponse?: ApiManagementDiagnosticFrontendResponse | undefined; 
  private __frontendResponseOutput = new ApiManagementDiagnosticFrontendResponseOutputReference(this as any, "frontend_response", true);
  public get frontendResponse() {
    return this.__frontendResponseOutput;
  }
  public putFrontendResponse(value: ApiManagementDiagnosticFrontendResponse | undefined) {
    this._frontendResponse = value;
  }
  public resetFrontendResponse() {
    this._frontendResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendResponseInput() {
    return this._frontendResponse
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementDiagnosticTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementDiagnosticTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementDiagnosticTimeouts | undefined) {
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
      backend_request: apiManagementDiagnosticBackendRequestToTerraform(this._backendRequest),
      backend_response: apiManagementDiagnosticBackendResponseToTerraform(this._backendResponse),
      frontend_request: apiManagementDiagnosticFrontendRequestToTerraform(this._frontendRequest),
      frontend_response: apiManagementDiagnosticFrontendResponseToTerraform(this._frontendResponse),
      timeouts: apiManagementDiagnosticTimeoutsToTerraform(this._timeouts),
    };
  }
}
