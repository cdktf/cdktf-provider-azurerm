// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_http.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryDatasetHttpConfig extends TerraformMetaArguments {
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly folder?: string;
  readonly linkedServiceName: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly relativeUrl?: string;
  readonly requestBody?: string;
  readonly requestMethod?: string;
  readonly resourceGroupName: string;
  /** schema_column block */
  readonly schemaColumn?: DataFactoryDatasetHttpSchemaColumn[];
  /** timeouts block */
  readonly timeouts?: DataFactoryDatasetHttpTimeouts;
}
export interface DataFactoryDatasetHttpSchemaColumn {
  readonly description?: string;
  readonly name: string;
  readonly type?: string;
}
export interface DataFactoryDatasetHttpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataFactoryDatasetHttp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryDatasetHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_http',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._relativeUrl = config.relativeUrl;
    this._requestBody = config.requestBody;
    this._requestMethod = config.requestMethod;
    this._resourceGroupName = config.resourceGroupName;
    this._schemaColumn = config.schemaColumn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } ) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[];
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] ) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string ) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName: string;
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // relative_url - computed: false, optional: true, required: false
  private _relativeUrl?: string;
  public get relativeUrl() {
    return this.getStringAttribute('relative_url');
  }
  public set relativeUrl(value: string ) {
    this._relativeUrl = value;
  }
  public resetRelativeUrl() {
    this._relativeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUrlInput() {
    return this._relativeUrl
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string;
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string ) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string;
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string ) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod
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

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn?: DataFactoryDatasetHttpSchemaColumn[];
  public get schemaColumn() {
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetHttpSchemaColumn[] ) {
    this._schemaColumn = value;
  }
  public resetSchemaColumn() {
    this._schemaColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaColumnInput() {
    return this._schemaColumn
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryDatasetHttpTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryDatasetHttpTimeouts ) {
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
      additional_properties: this._additionalProperties,
      annotations: this._annotations,
      data_factory_name: this._dataFactoryName,
      description: this._description,
      folder: this._folder,
      linked_service_name: this._linkedServiceName,
      name: this._name,
      parameters: this._parameters,
      relative_url: this._relativeUrl,
      request_body: this._requestBody,
      request_method: this._requestMethod,
      resource_group_name: this._resourceGroupName,
      schema_column: this._schemaColumn,
      timeouts: this._timeouts,
    };
  }
}
