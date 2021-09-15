// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#additional_properties DataFactoryDatasetJson#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#annotations DataFactoryDatasetJson#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#data_factory_name DataFactoryDatasetJson#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#description DataFactoryDatasetJson#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#encoding DataFactoryDatasetJson#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#folder DataFactoryDatasetJson#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#linked_service_name DataFactoryDatasetJson#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#name DataFactoryDatasetJson#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#parameters DataFactoryDatasetJson#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#resource_group_name DataFactoryDatasetJson#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * azure_blob_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#azure_blob_storage_location DataFactoryDatasetJson#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetJsonAzureBlobStorageLocation[];
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#http_server_location DataFactoryDatasetJson#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetJsonHttpServerLocation[];
  /**
  * schema_column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#schema_column DataFactoryDatasetJson#schema_column}
  */
  readonly schemaColumn?: DataFactoryDatasetJsonSchemaColumn[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#timeouts DataFactoryDatasetJson#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetJsonTimeouts;
}
export interface DataFactoryDatasetJsonAzureBlobStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#container DataFactoryDatasetJson#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#dynamic_filename_enabled DataFactoryDatasetJson#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#dynamic_path_enabled DataFactoryDatasetJson#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#filename DataFactoryDatasetJson#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#path DataFactoryDatasetJson#path}
  */
  readonly path: string;
}

function dataFactoryDatasetJsonAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetJsonAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataFactoryDatasetJsonHttpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#dynamic_filename_enabled DataFactoryDatasetJson#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#dynamic_path_enabled DataFactoryDatasetJson#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#filename DataFactoryDatasetJson#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#path DataFactoryDatasetJson#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#relative_url DataFactoryDatasetJson#relative_url}
  */
  readonly relativeUrl: string;
}

function dataFactoryDatasetJsonHttpServerLocationToTerraform(struct?: DataFactoryDatasetJsonHttpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
    relative_url: cdktf.stringToTerraform(struct!.relativeUrl),
  }
}

export interface DataFactoryDatasetJsonSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#description DataFactoryDatasetJson#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#name DataFactoryDatasetJson#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#type DataFactoryDatasetJson#type}
  */
  readonly type?: string;
}

function dataFactoryDatasetJsonSchemaColumnToTerraform(struct?: DataFactoryDatasetJsonSchemaColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataFactoryDatasetJsonTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#create DataFactoryDatasetJson#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#delete DataFactoryDatasetJson#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#read DataFactoryDatasetJson#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#update DataFactoryDatasetJson#update}
  */
  readonly update?: string;
}

function dataFactoryDatasetJsonTimeoutsToTerraform(struct?: DataFactoryDatasetJsonTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html azurerm_data_factory_dataset_json}
*/
export class DataFactoryDatasetJson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_dataset_json";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html azurerm_data_factory_dataset_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetJsonConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_json',
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
    this._encoding = config.encoding;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._azureBlobStorageLocation = config.azureBlobStorageLocation;
    this._httpServerLocation = config.httpServerLocation;
    this._schemaColumn = config.schemaColumn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable ) {
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

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string;
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string ) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation?: DataFactoryDatasetJsonAzureBlobStorageLocation[];
  public get azureBlobStorageLocation() {
    return this.interpolationForAttribute('azure_blob_storage_location') as any;
  }
  public set azureBlobStorageLocation(value: DataFactoryDatasetJsonAzureBlobStorageLocation[] ) {
    this._azureBlobStorageLocation = value;
  }
  public resetAzureBlobStorageLocation() {
    this._azureBlobStorageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageLocationInput() {
    return this._azureBlobStorageLocation
  }

  // http_server_location - computed: false, optional: true, required: false
  private _httpServerLocation?: DataFactoryDatasetJsonHttpServerLocation[];
  public get httpServerLocation() {
    return this.interpolationForAttribute('http_server_location') as any;
  }
  public set httpServerLocation(value: DataFactoryDatasetJsonHttpServerLocation[] ) {
    this._httpServerLocation = value;
  }
  public resetHttpServerLocation() {
    this._httpServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerLocationInput() {
    return this._httpServerLocation
  }

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn?: DataFactoryDatasetJsonSchemaColumn[];
  public get schemaColumn() {
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetJsonSchemaColumn[] ) {
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
  private _timeouts?: DataFactoryDatasetJsonTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryDatasetJsonTimeouts ) {
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
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      encoding: cdktf.stringToTerraform(this._encoding),
      folder: cdktf.stringToTerraform(this._folder),
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      azure_blob_storage_location: cdktf.listMapper(dataFactoryDatasetJsonAzureBlobStorageLocationToTerraform)(this._azureBlobStorageLocation),
      http_server_location: cdktf.listMapper(dataFactoryDatasetJsonHttpServerLocationToTerraform)(this._httpServerLocation),
      schema_column: cdktf.listMapper(dataFactoryDatasetJsonSchemaColumnToTerraform)(this._schemaColumn),
      timeouts: dataFactoryDatasetJsonTimeoutsToTerraform(this._timeouts),
    };
  }
}
