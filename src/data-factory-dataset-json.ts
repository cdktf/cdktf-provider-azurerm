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
  readonly azureBlobStorageLocation?: DataFactoryDatasetJsonAzureBlobStorageLocation;
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_json.html#http_server_location DataFactoryDatasetJson#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetJsonHttpServerLocation;
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

function dataFactoryDatasetJsonAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference | DataFactoryDatasetJsonAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // dynamic_filename_enabled - computed: false, optional: true, required: false
  private _dynamicFilenameEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dynamicFilenameEnabled() {
    return this.getBooleanAttribute('dynamic_filename_enabled') as any;
  }
  public set dynamicFilenameEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicFilenameEnabled = value;
  }
  public resetDynamicFilenameEnabled() {
    this._dynamicFilenameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFilenameEnabledInput() {
    return this._dynamicFilenameEnabled
  }

  // dynamic_path_enabled - computed: false, optional: true, required: false
  private _dynamicPathEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dynamicPathEnabled() {
    return this.getBooleanAttribute('dynamic_path_enabled') as any;
  }
  public set dynamicPathEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicPathEnabled = value;
  }
  public resetDynamicPathEnabled() {
    this._dynamicPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPathEnabledInput() {
    return this._dynamicPathEnabled
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
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

function dataFactoryDatasetJsonHttpServerLocationToTerraform(struct?: DataFactoryDatasetJsonHttpServerLocationOutputReference | DataFactoryDatasetJsonHttpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
    relative_url: cdktf.stringToTerraform(struct!.relativeUrl),
  }
}

export class DataFactoryDatasetJsonHttpServerLocationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dynamic_filename_enabled - computed: false, optional: true, required: false
  private _dynamicFilenameEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dynamicFilenameEnabled() {
    return this.getBooleanAttribute('dynamic_filename_enabled') as any;
  }
  public set dynamicFilenameEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicFilenameEnabled = value;
  }
  public resetDynamicFilenameEnabled() {
    this._dynamicFilenameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFilenameEnabledInput() {
    return this._dynamicFilenameEnabled
  }

  // dynamic_path_enabled - computed: false, optional: true, required: false
  private _dynamicPathEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dynamicPathEnabled() {
    return this.getBooleanAttribute('dynamic_path_enabled') as any;
  }
  public set dynamicPathEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicPathEnabled = value;
  }
  public resetDynamicPathEnabled() {
    this._dynamicPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPathEnabledInput() {
    return this._dynamicPathEnabled
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // relative_url - computed: false, optional: false, required: true
  private _relativeUrl?: string; 
  public get relativeUrl() {
    return this.getStringAttribute('relative_url');
  }
  public set relativeUrl(value: string) {
    this._relativeUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUrlInput() {
    return this._relativeUrl
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function dataFactoryDatasetJsonTimeoutsToTerraform(struct?: DataFactoryDatasetJsonTimeoutsOutputReference | DataFactoryDatasetJsonTimeouts): any {
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

export class DataFactoryDatasetJsonTimeoutsOutputReference extends cdktf.ComplexObject {
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
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get additionalProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _annotations?: string[] | undefined; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] | undefined) {
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
  private _dataFactoryName?: string; 
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

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string | undefined; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string | undefined) {
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
  private _folder?: string | undefined; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string | undefined) {
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
  private _linkedServiceName?: string; 
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
  private _name?: string; 
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation?: DataFactoryDatasetJsonAzureBlobStorageLocation | undefined; 
  private __azureBlobStorageLocationOutput = new DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference(this as any, "azure_blob_storage_location", true);
  public get azureBlobStorageLocation() {
    return this.__azureBlobStorageLocationOutput;
  }
  public putAzureBlobStorageLocation(value: DataFactoryDatasetJsonAzureBlobStorageLocation | undefined) {
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
  private _httpServerLocation?: DataFactoryDatasetJsonHttpServerLocation | undefined; 
  private __httpServerLocationOutput = new DataFactoryDatasetJsonHttpServerLocationOutputReference(this as any, "http_server_location", true);
  public get httpServerLocation() {
    return this.__httpServerLocationOutput;
  }
  public putHttpServerLocation(value: DataFactoryDatasetJsonHttpServerLocation | undefined) {
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
  private _schemaColumn?: DataFactoryDatasetJsonSchemaColumn[] | undefined; 
  public get schemaColumn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetJsonSchemaColumn[] | undefined) {
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
  private _timeouts?: DataFactoryDatasetJsonTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryDatasetJsonTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryDatasetJsonTimeouts | undefined) {
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
      azure_blob_storage_location: dataFactoryDatasetJsonAzureBlobStorageLocationToTerraform(this._azureBlobStorageLocation),
      http_server_location: dataFactoryDatasetJsonHttpServerLocationToTerraform(this._httpServerLocation),
      schema_column: cdktf.listMapper(dataFactoryDatasetJsonSchemaColumnToTerraform)(this._schemaColumn),
      timeouts: dataFactoryDatasetJsonTimeoutsToTerraform(this._timeouts),
    };
  }
}
