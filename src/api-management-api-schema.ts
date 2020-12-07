// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiSchemaConfig extends cdktf.TerraformMetaArguments {
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

function apiManagementApiSchemaTimeoutsToTerraform(struct?: ApiManagementApiSchemaTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementApiSchema extends cdktf.TerraformResource {

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

  // content_type - computed: false, optional: false, required: true
  private _contentType: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId: string;
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiSchemaTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementApiSchemaTimeouts ) {
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
      content_type: cdktf.stringToTerraform(this._contentType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      value: cdktf.stringToTerraform(this._value),
      timeouts: apiManagementApiSchemaTimeoutsToTerraform(this._timeouts),
    };
  }
}
