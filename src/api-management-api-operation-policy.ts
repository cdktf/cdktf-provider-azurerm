// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementApiOperationPolicyConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly apiName: string;
  readonly operationId: string;
  readonly resourceGroupName: string;
  readonly xmlContent?: string;
  readonly xmlLink?: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementApiOperationPolicyTimeouts;
}
export interface ApiManagementApiOperationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementApiOperationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementApiOperationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_operation_policy',
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
    this._operationId = config.operationId;
    this._resourceGroupName = config.resourceGroupName;
    this._xmlContent = config.xmlContent;
    this._xmlLink = config.xmlLink;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // xml_content - computed: true, optional: true, required: false
  private _xmlContent?: string;
  public get xmlContent() {
    return this._xmlContent ?? this.getStringAttribute('xml_content');
  }
  public set xmlContent(value: string | undefined) {
    this._xmlContent = value;
  }

  // xml_link - computed: false, optional: true, required: false
  private _xmlLink?: string;
  public get xmlLink() {
    return this._xmlLink;
  }
  public set xmlLink(value: string | undefined) {
    this._xmlLink = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiOperationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementApiOperationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      api_name: this._apiName,
      operation_id: this._operationId,
      resource_group_name: this._resourceGroupName,
      xml_content: this._xmlContent,
      xml_link: this._xmlLink,
      timeouts: this._timeouts,
    };
  }
}
