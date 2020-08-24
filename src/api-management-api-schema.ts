// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementApiSchemaConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly apiName: string;
  readonly contentType: string;
  readonly resourceGroupName: string;
  readonly schemaId: string;
  readonly value: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementApiSchemaTimeouts;
}
export interface ApiManagementApiSchemaTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementApiSchema extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementApiSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_schema',
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
    this._contentType = config.contentType;
    this._resourceGroupName = config.resourceGroupName;
    this._schemaId = config.schemaId;
    this._value = config.value;
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

  // content_type - computed: false, optional: false, required: true
  private _contentType: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string) {
    this._contentType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId: string;
  public get schemaId() {
    return this._schemaId;
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiSchemaTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementApiSchemaTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      api_name: this._apiName,
      content_type: this._contentType,
      resource_group_name: this._resourceGroupName,
      schema_id: this._schemaId,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
