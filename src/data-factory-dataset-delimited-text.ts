// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetDelimitedTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#additional_properties DataFactoryDatasetDelimitedText#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#annotations DataFactoryDatasetDelimitedText#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}
  */
  readonly columnDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#compression_codec DataFactoryDatasetDelimitedText#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#compression_level DataFactoryDatasetDelimitedText#compression_level}
  */
  readonly compressionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#data_factory_name DataFactoryDatasetDelimitedText#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#description DataFactoryDatasetDelimitedText#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#encoding DataFactoryDatasetDelimitedText#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#escape_character DataFactoryDatasetDelimitedText#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}
  */
  readonly firstRowAsHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#folder DataFactoryDatasetDelimitedText#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#name DataFactoryDatasetDelimitedText#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#null_value DataFactoryDatasetDelimitedText#null_value}
  */
  readonly nullValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#parameters DataFactoryDatasetDelimitedText#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#quote_character DataFactoryDatasetDelimitedText#quote_character}
  */
  readonly quoteCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#resource_group_name DataFactoryDatasetDelimitedText#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}
  */
  readonly rowDelimiter?: string;
  /**
  * azure_blob_fs_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#azure_blob_fs_location DataFactoryDatasetDelimitedText#azure_blob_fs_location}
  */
  readonly azureBlobFsLocation?: DataFactoryDatasetDelimitedTextAzureBlobFsLocation;
  /**
  * azure_blob_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#azure_blob_storage_location DataFactoryDatasetDelimitedText#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation;
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#http_server_location DataFactoryDatasetDelimitedText#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetDelimitedTextHttpServerLocation;
  /**
  * schema_column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#schema_column DataFactoryDatasetDelimitedText#schema_column}
  */
  readonly schemaColumn?: DataFactoryDatasetDelimitedTextSchemaColumn[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#timeouts DataFactoryDatasetDelimitedText#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetDelimitedTextTimeouts;
}
export interface DataFactoryDatasetDelimitedTextAzureBlobFsLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#file_system DataFactoryDatasetDelimitedText#file_system}
  */
  readonly fileSystem: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#filename DataFactoryDatasetDelimitedText#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#path DataFactoryDatasetDelimitedText#path}
  */
  readonly path?: string;
}

function dataFactoryDatasetDelimitedTextAzureBlobFsLocationToTerraform(struct?: DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference | DataFactoryDatasetDelimitedTextAzureBlobFsLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file_system - computed: false, optional: false, required: true
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string | undefined; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface DataFactoryDatasetDelimitedTextAzureBlobStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#container DataFactoryDatasetDelimitedText#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#filename DataFactoryDatasetDelimitedText#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#path DataFactoryDatasetDelimitedText#path}
  */
  readonly path?: string;
}

function dataFactoryDatasetDelimitedTextAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference | DataFactoryDatasetDelimitedTextAzureBlobStorageLocation): any {
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

export class DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference extends cdktf.ComplexObject {
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string | undefined; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface DataFactoryDatasetDelimitedTextHttpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#filename DataFactoryDatasetDelimitedText#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#path DataFactoryDatasetDelimitedText#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#relative_url DataFactoryDatasetDelimitedText#relative_url}
  */
  readonly relativeUrl: string;
}

function dataFactoryDatasetDelimitedTextHttpServerLocationToTerraform(struct?: DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference | DataFactoryDatasetDelimitedTextHttpServerLocation): any {
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

export class DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDatasetDelimitedTextSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#description DataFactoryDatasetDelimitedText#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#name DataFactoryDatasetDelimitedText#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#type DataFactoryDatasetDelimitedText#type}
  */
  readonly type?: string;
}

function dataFactoryDatasetDelimitedTextSchemaColumnToTerraform(struct?: DataFactoryDatasetDelimitedTextSchemaColumn): any {
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

export interface DataFactoryDatasetDelimitedTextTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#create DataFactoryDatasetDelimitedText#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#delete DataFactoryDatasetDelimitedText#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#read DataFactoryDatasetDelimitedText#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#update DataFactoryDatasetDelimitedText#update}
  */
  readonly update?: string;
}

function dataFactoryDatasetDelimitedTextTimeoutsToTerraform(struct?: DataFactoryDatasetDelimitedTextTimeoutsOutputReference | DataFactoryDatasetDelimitedTextTimeouts): any {
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

export class DataFactoryDatasetDelimitedTextTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html azurerm_data_factory_dataset_delimited_text}
*/
export class DataFactoryDatasetDelimitedText extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_dataset_delimited_text";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html azurerm_data_factory_dataset_delimited_text} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetDelimitedTextConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetDelimitedTextConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_delimited_text',
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
    this._columnDelimiter = config.columnDelimiter;
    this._compressionCodec = config.compressionCodec;
    this._compressionLevel = config.compressionLevel;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._encoding = config.encoding;
    this._escapeCharacter = config.escapeCharacter;
    this._firstRowAsHeader = config.firstRowAsHeader;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._nullValue = config.nullValue;
    this._parameters = config.parameters;
    this._quoteCharacter = config.quoteCharacter;
    this._resourceGroupName = config.resourceGroupName;
    this._rowDelimiter = config.rowDelimiter;
    this._azureBlobFsLocation = config.azureBlobFsLocation;
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

  // column_delimiter - computed: false, optional: true, required: false
  private _columnDelimiter?: string | undefined; 
  public get columnDelimiter() {
    return this.getStringAttribute('column_delimiter');
  }
  public set columnDelimiter(value: string | undefined) {
    this._columnDelimiter = value;
  }
  public resetColumnDelimiter() {
    this._columnDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDelimiterInput() {
    return this._columnDelimiter
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string | undefined; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string | undefined) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec
  }

  // compression_level - computed: false, optional: true, required: false
  private _compressionLevel?: string | undefined; 
  public get compressionLevel() {
    return this.getStringAttribute('compression_level');
  }
  public set compressionLevel(value: string | undefined) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel
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

  // escape_character - computed: false, optional: true, required: false
  private _escapeCharacter?: string | undefined; 
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string | undefined) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter
  }

  // first_row_as_header - computed: false, optional: true, required: false
  private _firstRowAsHeader?: boolean | cdktf.IResolvable | undefined; 
  public get firstRowAsHeader() {
    return this.getBooleanAttribute('first_row_as_header') as any;
  }
  public set firstRowAsHeader(value: boolean | cdktf.IResolvable | undefined) {
    this._firstRowAsHeader = value;
  }
  public resetFirstRowAsHeader() {
    this._firstRowAsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRowAsHeaderInput() {
    return this._firstRowAsHeader
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

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string | undefined; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string | undefined) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue
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

  // quote_character - computed: false, optional: true, required: false
  private _quoteCharacter?: string | undefined; 
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string | undefined) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter
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

  // row_delimiter - computed: false, optional: true, required: false
  private _rowDelimiter?: string | undefined; 
  public get rowDelimiter() {
    return this.getStringAttribute('row_delimiter');
  }
  public set rowDelimiter(value: string | undefined) {
    this._rowDelimiter = value;
  }
  public resetRowDelimiter() {
    this._rowDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowDelimiterInput() {
    return this._rowDelimiter
  }

  // azure_blob_fs_location - computed: false, optional: true, required: false
  private _azureBlobFsLocation?: DataFactoryDatasetDelimitedTextAzureBlobFsLocation | undefined; 
  private __azureBlobFsLocationOutput = new DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference(this as any, "azure_blob_fs_location", true);
  public get azureBlobFsLocation() {
    return this.__azureBlobFsLocationOutput;
  }
  public putAzureBlobFsLocation(value: DataFactoryDatasetDelimitedTextAzureBlobFsLocation | undefined) {
    this._azureBlobFsLocation = value;
  }
  public resetAzureBlobFsLocation() {
    this._azureBlobFsLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobFsLocationInput() {
    return this._azureBlobFsLocation
  }

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation | undefined; 
  private __azureBlobStorageLocationOutput = new DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference(this as any, "azure_blob_storage_location", true);
  public get azureBlobStorageLocation() {
    return this.__azureBlobStorageLocationOutput;
  }
  public putAzureBlobStorageLocation(value: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation | undefined) {
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
  private _httpServerLocation?: DataFactoryDatasetDelimitedTextHttpServerLocation | undefined; 
  private __httpServerLocationOutput = new DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference(this as any, "http_server_location", true);
  public get httpServerLocation() {
    return this.__httpServerLocationOutput;
  }
  public putHttpServerLocation(value: DataFactoryDatasetDelimitedTextHttpServerLocation | undefined) {
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
  private _schemaColumn?: DataFactoryDatasetDelimitedTextSchemaColumn[] | undefined; 
  public get schemaColumn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetDelimitedTextSchemaColumn[] | undefined) {
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
  private _timeouts?: DataFactoryDatasetDelimitedTextTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryDatasetDelimitedTextTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryDatasetDelimitedTextTimeouts | undefined) {
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
      column_delimiter: cdktf.stringToTerraform(this._columnDelimiter),
      compression_codec: cdktf.stringToTerraform(this._compressionCodec),
      compression_level: cdktf.stringToTerraform(this._compressionLevel),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      encoding: cdktf.stringToTerraform(this._encoding),
      escape_character: cdktf.stringToTerraform(this._escapeCharacter),
      first_row_as_header: cdktf.booleanToTerraform(this._firstRowAsHeader),
      folder: cdktf.stringToTerraform(this._folder),
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      name: cdktf.stringToTerraform(this._name),
      null_value: cdktf.stringToTerraform(this._nullValue),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      quote_character: cdktf.stringToTerraform(this._quoteCharacter),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      row_delimiter: cdktf.stringToTerraform(this._rowDelimiter),
      azure_blob_fs_location: dataFactoryDatasetDelimitedTextAzureBlobFsLocationToTerraform(this._azureBlobFsLocation),
      azure_blob_storage_location: dataFactoryDatasetDelimitedTextAzureBlobStorageLocationToTerraform(this._azureBlobStorageLocation),
      http_server_location: dataFactoryDatasetDelimitedTextHttpServerLocationToTerraform(this._httpServerLocation),
      schema_column: cdktf.listMapper(dataFactoryDatasetDelimitedTextSchemaColumnToTerraform)(this._schemaColumn),
      timeouts: dataFactoryDatasetDelimitedTextTimeoutsToTerraform(this._timeouts),
    };
  }
}
