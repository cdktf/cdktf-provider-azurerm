// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetBinaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#additional_properties DataFactoryDatasetBinary#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
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
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#resource_group_name DataFactoryDatasetBinary#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * azure_blob_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#azure_blob_storage_location DataFactoryDatasetBinary#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetBinaryAzureBlobStorageLocation[];
  /**
  * compression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#compression DataFactoryDatasetBinary#compression}
  */
  readonly compression?: DataFactoryDatasetBinaryCompression[];
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#http_server_location DataFactoryDatasetBinary#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetBinaryHttpServerLocation[];
  /**
  * sftp_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#sftp_server_location DataFactoryDatasetBinary#sftp_server_location}
  */
  readonly sftpServerLocation?: DataFactoryDatasetBinarySftpServerLocation[];
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#filename DataFactoryDatasetBinary#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#path DataFactoryDatasetBinary#path}
  */
  readonly path?: string;
}

function dataFactoryDatasetBinaryAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetBinaryAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
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

function dataFactoryDatasetBinaryCompressionToTerraform(struct?: DataFactoryDatasetBinaryCompression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataFactoryDatasetBinaryHttpServerLocation {
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

function dataFactoryDatasetBinaryHttpServerLocationToTerraform(struct?: DataFactoryDatasetBinaryHttpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
    relative_url: cdktf.stringToTerraform(struct!.relativeUrl),
  }
}

export interface DataFactoryDatasetBinarySftpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#filename DataFactoryDatasetBinary#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html#path DataFactoryDatasetBinary#path}
  */
  readonly path: string;
}

function dataFactoryDatasetBinarySftpServerLocationToTerraform(struct?: DataFactoryDatasetBinarySftpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
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

function dataFactoryDatasetBinaryTimeoutsToTerraform(struct?: DataFactoryDatasetBinaryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_binary.html azurerm_data_factory_dataset_binary}
*/
export class DataFactoryDatasetBinary extends cdktf.TerraformResource {

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
  private _azureBlobStorageLocation?: DataFactoryDatasetBinaryAzureBlobStorageLocation[];
  public get azureBlobStorageLocation() {
    return this.interpolationForAttribute('azure_blob_storage_location') as any;
  }
  public set azureBlobStorageLocation(value: DataFactoryDatasetBinaryAzureBlobStorageLocation[] ) {
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
  private _compression?: DataFactoryDatasetBinaryCompression[];
  public get compression() {
    return this.interpolationForAttribute('compression') as any;
  }
  public set compression(value: DataFactoryDatasetBinaryCompression[] ) {
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
  private _httpServerLocation?: DataFactoryDatasetBinaryHttpServerLocation[];
  public get httpServerLocation() {
    return this.interpolationForAttribute('http_server_location') as any;
  }
  public set httpServerLocation(value: DataFactoryDatasetBinaryHttpServerLocation[] ) {
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
  private _sftpServerLocation?: DataFactoryDatasetBinarySftpServerLocation[];
  public get sftpServerLocation() {
    return this.interpolationForAttribute('sftp_server_location') as any;
  }
  public set sftpServerLocation(value: DataFactoryDatasetBinarySftpServerLocation[] ) {
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
  private _timeouts?: DataFactoryDatasetBinaryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryDatasetBinaryTimeouts ) {
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
      azure_blob_storage_location: cdktf.listMapper(dataFactoryDatasetBinaryAzureBlobStorageLocationToTerraform)(this._azureBlobStorageLocation),
      compression: cdktf.listMapper(dataFactoryDatasetBinaryCompressionToTerraform)(this._compression),
      http_server_location: cdktf.listMapper(dataFactoryDatasetBinaryHttpServerLocationToTerraform)(this._httpServerLocation),
      sftp_server_location: cdktf.listMapper(dataFactoryDatasetBinarySftpServerLocationToTerraform)(this._sftpServerLocation),
      timeouts: dataFactoryDatasetBinaryTimeoutsToTerraform(this._timeouts),
    };
  }
}
