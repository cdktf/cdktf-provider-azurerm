// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementApiOperationConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly apiName: string;
  readonly description?: string;
  readonly displayName: string;
  readonly method: string;
  readonly operationId: string;
  readonly resourceGroupName: string;
  readonly urlTemplate: string;
  /** request block */
  readonly request?: ApiManagementApiOperationRequest[];
  /** response block */
  readonly response?: ApiManagementApiOperationResponse[];
  /** template_parameter block */
  readonly templateParameter?: ApiManagementApiOperationTemplateParameter[];
  /** timeouts block */
  readonly timeouts?: ApiManagementApiOperationTimeouts;
}
export interface ApiManagementApiOperationRequestHeader {
  readonly defaultValue?: string;
  readonly description?: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
  readonly values?: string[];
}
export interface ApiManagementApiOperationRequestQueryParameter {
  readonly defaultValue?: string;
  readonly description?: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
  readonly values?: string[];
}
export interface ApiManagementApiOperationRequestRepresentationFormParameter {
  readonly defaultValue?: string;
  readonly description?: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
  readonly values?: string[];
}
export interface ApiManagementApiOperationRequestRepresentation {
  readonly contentType: string;
  readonly sample?: string;
  readonly schemaId?: string;
  readonly typeName?: string;
  /** form_parameter block */
  readonly formParameter?: ApiManagementApiOperationRequestRepresentationFormParameter[];
}
export interface ApiManagementApiOperationRequest {
  readonly description?: string;
  /** header block */
  readonly header?: ApiManagementApiOperationRequestHeader[];
  /** query_parameter block */
  readonly queryParameter?: ApiManagementApiOperationRequestQueryParameter[];
  /** representation block */
  readonly representation?: ApiManagementApiOperationRequestRepresentation[];
}
export interface ApiManagementApiOperationResponseHeader {
  readonly defaultValue?: string;
  readonly description?: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
  readonly values?: string[];
}
export interface ApiManagementApiOperationResponseRepresentationFormParameter {
  readonly defaultValue?: string;
  readonly description?: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
  readonly values?: string[];
}
export interface ApiManagementApiOperationResponseRepresentation {
  readonly contentType: string;
  readonly sample?: string;
  readonly schemaId?: string;
  readonly typeName?: string;
  /** form_parameter block */
  readonly formParameter?: ApiManagementApiOperationResponseRepresentationFormParameter[];
}
export interface ApiManagementApiOperationResponse {
  readonly description?: string;
  readonly statusCode: number;
  /** header block */
  readonly header?: ApiManagementApiOperationResponseHeader[];
  /** representation block */
  readonly representation?: ApiManagementApiOperationResponseRepresentation[];
}
export interface ApiManagementApiOperationTemplateParameter {
  readonly defaultValue?: string;
  readonly description?: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
  readonly values?: string[];
}
export interface ApiManagementApiOperationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementApiOperation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName: string;
  public get apiName() {
    return this._apiName;
  }
  public set apiName(value: string) {
    this._apiName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // method - computed: false, optional: false, required: true
  private _method: string;
  public get method() {
    return this._method;
  }
  public set method(value: string) {
    this._method = value;
  }

  // operation_id - computed: false, optional: false, required: true
  private _operationId: string;
  public get operationId() {
    return this._operationId;
  }
  public set operationId(value: string) {
    this._operationId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate: string;
  public get urlTemplate() {
    return this._urlTemplate;
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }

  // request - computed: false, optional: true, required: false
  private _request?: ApiManagementApiOperationRequest[];
  public get request() {
    return this._request;
  }
  public set request(value: ApiManagementApiOperationRequest[] | undefined) {
    this._request = value;
  }

  // response - computed: false, optional: true, required: false
  private _response?: ApiManagementApiOperationResponse[];
  public get response() {
    return this._response;
  }
  public set response(value: ApiManagementApiOperationResponse[] | undefined) {
    this._response = value;
  }

  // template_parameter - computed: false, optional: true, required: false
  private _templateParameter?: ApiManagementApiOperationTemplateParameter[];
  public get templateParameter() {
    return this._templateParameter;
  }
  public set templateParameter(value: ApiManagementApiOperationTemplateParameter[] | undefined) {
    this._templateParameter = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiOperationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementApiOperationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      api_name: this._apiName,
      description: this._description,
      display_name: this._displayName,
      method: this._method,
      operation_id: this._operationId,
      resource_group_name: this._resourceGroupName,
      url_template: this._urlTemplate,
      request: this._request,
      response: this._response,
      template_parameter: this._templateParameter,
      timeouts: this._timeouts,
    };
  }
}
