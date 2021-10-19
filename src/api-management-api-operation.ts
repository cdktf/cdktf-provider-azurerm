// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#api_management_name ApiManagementApiOperation#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#api_name ApiManagementApiOperation#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#display_name ApiManagementApiOperation#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#method ApiManagementApiOperation#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#operation_id ApiManagementApiOperation#operation_id}
  */
  readonly operationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#resource_group_name ApiManagementApiOperation#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#url_template ApiManagementApiOperation#url_template}
  */
  readonly urlTemplate: string;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#request ApiManagementApiOperation#request}
  */
  readonly request?: ApiManagementApiOperationRequest;
  /**
  * response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#response ApiManagementApiOperation#response}
  */
  readonly response?: ApiManagementApiOperationResponse[];
  /**
  * template_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#template_parameter ApiManagementApiOperation#template_parameter}
  */
  readonly templateParameter?: ApiManagementApiOperationTemplateParameter[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#timeouts ApiManagementApiOperation#timeouts}
  */
  readonly timeouts?: ApiManagementApiOperationTimeouts;
}
export interface ApiManagementApiOperationRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
}

function apiManagementApiOperationRequestHeaderToTerraform(struct?: ApiManagementApiOperationRequestHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ApiManagementApiOperationRequestQueryParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
}

function apiManagementApiOperationRequestQueryParameterToTerraform(struct?: ApiManagementApiOperationRequestQueryParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ApiManagementApiOperationRequestRepresentationFormParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
}

function apiManagementApiOperationRequestRepresentationFormParameterToTerraform(struct?: ApiManagementApiOperationRequestRepresentationFormParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ApiManagementApiOperationRequestRepresentation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#content_type ApiManagementApiOperation#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#sample ApiManagementApiOperation#sample}
  */
  readonly sample?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * form_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#form_parameter ApiManagementApiOperation#form_parameter}
  */
  readonly formParameter?: ApiManagementApiOperationRequestRepresentationFormParameter[];
}

function apiManagementApiOperationRequestRepresentationToTerraform(struct?: ApiManagementApiOperationRequestRepresentation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    sample: cdktf.stringToTerraform(struct!.sample),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    form_parameter: cdktf.listMapper(apiManagementApiOperationRequestRepresentationFormParameterToTerraform)(struct!.formParameter),
  }
}

export interface ApiManagementApiOperationRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#header ApiManagementApiOperation#header}
  */
  readonly header?: ApiManagementApiOperationRequestHeader[];
  /**
  * query_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#query_parameter ApiManagementApiOperation#query_parameter}
  */
  readonly queryParameter?: ApiManagementApiOperationRequestQueryParameter[];
  /**
  * representation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#representation ApiManagementApiOperation#representation}
  */
  readonly representation?: ApiManagementApiOperationRequestRepresentation[];
}

function apiManagementApiOperationRequestToTerraform(struct?: ApiManagementApiOperationRequestOutputReference | ApiManagementApiOperationRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    header: cdktf.listMapper(apiManagementApiOperationRequestHeaderToTerraform)(struct!.header),
    query_parameter: cdktf.listMapper(apiManagementApiOperationRequestQueryParameterToTerraform)(struct!.queryParameter),
    representation: cdktf.listMapper(apiManagementApiOperationRequestRepresentationToTerraform)(struct!.representation),
  }
}

export class ApiManagementApiOperationRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // header - computed: false, optional: true, required: false
  private _header?: ApiManagementApiOperationRequestHeader[] | undefined; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: ApiManagementApiOperationRequestHeader[] | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter?: ApiManagementApiOperationRequestQueryParameter[] | undefined; 
  public get queryParameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_parameter') as any;
  }
  public set queryParameter(value: ApiManagementApiOperationRequestQueryParameter[] | undefined) {
    this._queryParameter = value;
  }
  public resetQueryParameter() {
    this._queryParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter
  }

  // representation - computed: false, optional: true, required: false
  private _representation?: ApiManagementApiOperationRequestRepresentation[] | undefined; 
  public get representation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('representation') as any;
  }
  public set representation(value: ApiManagementApiOperationRequestRepresentation[] | undefined) {
    this._representation = value;
  }
  public resetRepresentation() {
    this._representation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get representationInput() {
    return this._representation
  }
}
export interface ApiManagementApiOperationResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
}

function apiManagementApiOperationResponseHeaderToTerraform(struct?: ApiManagementApiOperationResponseHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ApiManagementApiOperationResponseRepresentationFormParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
}

function apiManagementApiOperationResponseRepresentationFormParameterToTerraform(struct?: ApiManagementApiOperationResponseRepresentationFormParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ApiManagementApiOperationResponseRepresentation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#content_type ApiManagementApiOperation#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#sample ApiManagementApiOperation#sample}
  */
  readonly sample?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * form_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#form_parameter ApiManagementApiOperation#form_parameter}
  */
  readonly formParameter?: ApiManagementApiOperationResponseRepresentationFormParameter[];
}

function apiManagementApiOperationResponseRepresentationToTerraform(struct?: ApiManagementApiOperationResponseRepresentation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    sample: cdktf.stringToTerraform(struct!.sample),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    form_parameter: cdktf.listMapper(apiManagementApiOperationResponseRepresentationFormParameterToTerraform)(struct!.formParameter),
  }
}

export interface ApiManagementApiOperationResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#status_code ApiManagementApiOperation#status_code}
  */
  readonly statusCode: number;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#header ApiManagementApiOperation#header}
  */
  readonly header?: ApiManagementApiOperationResponseHeader[];
  /**
  * representation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#representation ApiManagementApiOperation#representation}
  */
  readonly representation?: ApiManagementApiOperationResponseRepresentation[];
}

function apiManagementApiOperationResponseToTerraform(struct?: ApiManagementApiOperationResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    header: cdktf.listMapper(apiManagementApiOperationResponseHeaderToTerraform)(struct!.header),
    representation: cdktf.listMapper(apiManagementApiOperationResponseRepresentationToTerraform)(struct!.representation),
  }
}

export interface ApiManagementApiOperationTemplateParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
}

function apiManagementApiOperationTemplateParameterToTerraform(struct?: ApiManagementApiOperationTemplateParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ApiManagementApiOperationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#create ApiManagementApiOperation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#delete ApiManagementApiOperation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#read ApiManagementApiOperation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html#update ApiManagementApiOperation#update}
  */
  readonly update?: string;
}

function apiManagementApiOperationTimeoutsToTerraform(struct?: ApiManagementApiOperationTimeoutsOutputReference | ApiManagementApiOperationTimeouts): any {
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

export class ApiManagementApiOperationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html azurerm_api_management_api_operation}
*/
export class ApiManagementApiOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_api_operation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html azurerm_api_management_api_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_operation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._apiName = config.apiName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._method = config.method;
    this._operationId = config.operationId;
    this._resourceGroupName = config.resourceGroupName;
    this._urlTemplate = config.urlTemplate;
    this._request = config.request;
    this._response = config.response;
    this._templateParameter = config.templateParameter;
    this._timeouts = config.timeouts;
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
    return this._apiName
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // operation_id - computed: false, optional: false, required: true
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId
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

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate?: string; 
  public get urlTemplate() {
    return this.getStringAttribute('url_template');
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTemplateInput() {
    return this._urlTemplate
  }

  // request - computed: false, optional: true, required: false
  private _request?: ApiManagementApiOperationRequest | undefined; 
  private __requestOutput = new ApiManagementApiOperationRequestOutputReference(this as any, "request", true);
  public get request() {
    return this.__requestOutput;
  }
  public putRequest(value: ApiManagementApiOperationRequest | undefined) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request
  }

  // response - computed: false, optional: true, required: false
  private _response?: ApiManagementApiOperationResponse[] | undefined; 
  public get response() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response') as any;
  }
  public set response(value: ApiManagementApiOperationResponse[] | undefined) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response
  }

  // template_parameter - computed: false, optional: true, required: false
  private _templateParameter?: ApiManagementApiOperationTemplateParameter[] | undefined; 
  public get templateParameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('template_parameter') as any;
  }
  public set templateParameter(value: ApiManagementApiOperationTemplateParameter[] | undefined) {
    this._templateParameter = value;
  }
  public resetTemplateParameter() {
    this._templateParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParameterInput() {
    return this._templateParameter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiOperationTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementApiOperationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementApiOperationTimeouts | undefined) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      api_name: cdktf.stringToTerraform(this._apiName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      method: cdktf.stringToTerraform(this._method),
      operation_id: cdktf.stringToTerraform(this._operationId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      url_template: cdktf.stringToTerraform(this._urlTemplate),
      request: apiManagementApiOperationRequestToTerraform(this._request),
      response: cdktf.listMapper(apiManagementApiOperationResponseToTerraform)(this._response),
      template_parameter: cdktf.listMapper(apiManagementApiOperationTemplateParameterToTerraform)(this._templateParameter),
      timeouts: apiManagementApiOperationTimeoutsToTerraform(this._timeouts),
    };
  }
}
