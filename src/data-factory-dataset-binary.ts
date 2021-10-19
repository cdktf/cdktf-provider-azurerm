// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetBinaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#additional_properties DataFactoryDatasetBinary#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#annotations DataFactoryDatasetBinary#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#data_factory_name DataFactoryDatasetBinary#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#description DataFactoryDatasetBinary#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#folder DataFactoryDatasetBinary#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#linked_service_name DataFactoryDatasetBinary#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#name DataFactoryDatasetBinary#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#parameters DataFactoryDatasetBinary#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#resource_group_name DataFactoryDatasetBinary#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * azure_blob_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#azure_blob_storage_location DataFactoryDatasetBinary#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetBinaryAzureBlobStorageLocation;
  /**
  * compression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#compression DataFactoryDatasetBinary#compression}
  */
  readonly compression?: DataFactoryDatasetBinaryCompression;
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#http_server_location DataFactoryDatasetBinary#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetBinaryHttpServerLocation;
  /**
  * sftp_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#sftp_server_location DataFactoryDatasetBinary#sftp_server_location}
  */
  readonly sftpServerLocation?: DataFactoryDatasetBinarySftpServerLocation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#timeouts DataFactoryDatasetBinary#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetBinaryTimeouts;
}
export interface DataFactoryDatasetBinaryAzureBlobStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#container DataFactoryDatasetBinary#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#filename DataFactoryDatasetBinary#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#path DataFactoryDatasetBinary#path}
  */
  readonly path?: string;
}

function dataFactoryDatasetBinaryAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference | DataFactoryDatasetBinaryAzureBlobStorageLocation): any {
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

export class DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDatasetBinaryCompression {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#level DataFactoryDatasetBinary#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#type DataFactoryDatasetBinary#type}
  */
  readonly type: string;
}

function dataFactoryDatasetBinaryCompressionToTerraform(struct?: DataFactoryDatasetBinaryCompressionOutputReference | DataFactoryDatasetBinaryCompression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataFactoryDatasetBinaryCompressionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // level - computed: false, optional: true, required: false
  private _level?: string | undefined; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string | undefined) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface DataFactoryDatasetBinaryHttpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#filename DataFactoryDatasetBinary#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#path DataFactoryDatasetBinary#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#relative_url DataFactoryDatasetBinary#relative_url}
  */
  readonly relativeUrl: string;
}

function dataFactoryDatasetBinaryHttpServerLocationToTerraform(struct?: DataFactoryDatasetBinaryHttpServerLocationOutputReference | DataFactoryDatasetBinaryHttpServerLocation): any {
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

export class DataFactoryDatasetBinaryHttpServerLocationOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDatasetBinarySftpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}
  */
  readonly dynamicFilenameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}
  */
  readonly dynamicPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#filename DataFactoryDatasetBinary#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#path DataFactoryDatasetBinary#path}
  */
  readonly path: string;
}

function dataFactoryDatasetBinarySftpServerLocationToTerraform(struct?: DataFactoryDatasetBinarySftpServerLocationOutputReference | DataFactoryDatasetBinarySftpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_filename_enabled: cdktf.booleanToTerraform(struct!.dynamicFilenameEnabled),
    dynamic_path_enabled: cdktf.booleanToTerraform(struct!.dynamicPathEnabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataFactoryDatasetBinarySftpServerLocationOutputReference extends cdktf.ComplexObject {
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
}
export interface DataFactoryDatasetBinaryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#create DataFactoryDatasetBinary#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#delete DataFactoryDatasetBinary#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#read DataFactoryDatasetBinary#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#update DataFactoryDatasetBinary#update}
  */
  readonly update?: string;
}

function dataFactoryDatasetBinaryTimeoutsToTerraform(struct?: DataFactoryDatasetBinaryTimeoutsOutputReference | DataFactoryDatasetBinaryTimeouts): any {
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

export class DataFactoryDatasetBinaryTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html azurerm_data_factory_dataset_binary}
*/
export class DataFactoryDatasetBinary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_dataset_binary";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html azurerm_data_factory_dataset_binary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetBinaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetBinaryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_binary',
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
    this._resourceGroupName = config.resourceGroupName;
    this._azureBlobStorageLocation = config.azureBlobStorageLocation;
    this._compression = config.compression;
    this._httpServerLocation = config.httpServerLocation;
    this._sftpServerLocation = config.sftpServerLocation;
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
  private _azureBlobStorageLocation?: DataFactoryDatasetBinaryAzureBlobStorageLocation | undefined; 
  private __azureBlobStorageLocationOutput = new DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference(this as any, "azure_blob_storage_location", true);
  public get azureBlobStorageLocation() {
    return this.__azureBlobStorageLocationOutput;
  }
  public putAzureBlobStorageLocation(value: DataFactoryDatasetBinaryAzureBlobStorageLocation | undefined) {
    this._azureBlobStorageLocation = value;
  }
  public resetAzureBlobStorageLocation() {
    this._azureBlobStorageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageLocationInput() {
    return this._azureBlobStorageLocation
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: DataFactoryDatasetBinaryCompression | undefined; 
  private __compressionOutput = new DataFactoryDatasetBinaryCompressionOutputReference(this as any, "compression", true);
  public get compression() {
    return this.__compressionOutput;
  }
  public putCompression(value: DataFactoryDatasetBinaryCompression | undefined) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression
  }

  // http_server_location - computed: false, optional: true, required: false
  private _httpServerLocation?: DataFactoryDatasetBinaryHttpServerLocation | undefined; 
  private __httpServerLocationOutput = new DataFactoryDatasetBinaryHttpServerLocationOutputReference(this as any, "http_server_location", true);
  public get httpServerLocation() {
    return this.__httpServerLocationOutput;
  }
  public putHttpServerLocation(value: DataFactoryDatasetBinaryHttpServerLocation | undefined) {
    this._httpServerLocation = value;
  }
  public resetHttpServerLocation() {
    this._httpServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerLocationInput() {
    return this._httpServerLocation
  }

  // sftp_server_location - computed: false, optional: true, required: false
  private _sftpServerLocation?: DataFactoryDatasetBinarySftpServerLocation | undefined; 
  private __sftpServerLocationOutput = new DataFactoryDatasetBinarySftpServerLocationOutputReference(this as any, "sftp_server_location", true);
  public get sftpServerLocation() {
    return this.__sftpServerLocationOutput;
  }
  public putSftpServerLocation(value: DataFactoryDatasetBinarySftpServerLocation | undefined) {
    this._sftpServerLocation = value;
  }
  public resetSftpServerLocation() {
    this._sftpServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpServerLocationInput() {
    return this._sftpServerLocation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryDatasetBinaryTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryDatasetBinaryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryDatasetBinaryTimeouts | undefined) {
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
      folder: cdktf.stringToTerraform(this._folder),
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      azure_blob_storage_location: dataFactoryDatasetBinaryAzureBlobStorageLocationToTerraform(this._azureBlobStorageLocation),
      compression: dataFactoryDatasetBinaryCompressionToTerraform(this._compression),
      http_server_location: dataFactoryDatasetBinaryHttpServerLocationToTerraform(this._httpServerLocation),
      sftp_server_location: dataFactoryDatasetBinarySftpServerLocationToTerraform(this._sftpServerLocation),
      timeouts: dataFactoryDatasetBinaryTimeoutsToTerraform(this._timeouts),
    };
  }
}
