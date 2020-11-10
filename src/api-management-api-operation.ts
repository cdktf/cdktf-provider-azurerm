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
  private _apiName: string;
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _displayName: string;
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
  private _method: string;
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
  private _operationId: string;
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
  private _resourceGroupName: string;
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
  private _urlTemplate: string;
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
  private _request?: ApiManagementApiOperationRequest[];
  public get request() {
    return this.interpolationForAttribute('request') as any;
  }
  public set request(value: ApiManagementApiOperationRequest[] ) {
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
  private _response?: ApiManagementApiOperationResponse[];
  public get response() {
    return this.interpolationForAttribute('response') as any;
  }
  public set response(value: ApiManagementApiOperationResponse[] ) {
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
  private _templateParameter?: ApiManagementApiOperationTemplateParameter[];
  public get templateParameter() {
    return this.interpolationForAttribute('template_parameter') as any;
  }
  public set templateParameter(value: ApiManagementApiOperationTemplateParameter[] ) {
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
  private _timeouts?: ApiManagementApiOperationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementApiOperationTimeouts ) {
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
