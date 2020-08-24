// https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubEndpointStorageContainerConfig extends TerraformMetaArguments {
  readonly batchFrequencyInSeconds?: number;
  readonly connectionString: string;
  readonly containerName: string;
  readonly encoding?: string;
  readonly fileNameFormat?: string;
  readonly iothubName: string;
  readonly maxChunkSizeInBytes?: number;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: IothubEndpointStorageContainerTimeouts;
}
export interface IothubEndpointStorageContainerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubEndpointStorageContainer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubEndpointStorageContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_endpoint_storage_container',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._batchFrequencyInSeconds = config.batchFrequencyInSeconds;
    this._connectionString = config.connectionString;
    this._containerName = config.containerName;
    this._encoding = config.encoding;
    this._fileNameFormat = config.fileNameFormat;
    this._iothubName = config.iothubName;
    this._maxChunkSizeInBytes = config.maxChunkSizeInBytes;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_frequency_in_seconds - computed: false, optional: true, required: false
  private _batchFrequencyInSeconds?: number;
  public get batchFrequencyInSeconds() {
    return this._batchFrequencyInSeconds;
  }
  public set batchFrequencyInSeconds(value: number | undefined) {
    this._batchFrequencyInSeconds = value;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName: string;
  public get containerName() {
    return this._containerName;
  }
  public set containerName(value: string) {
    this._containerName = value;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string;
  public get encoding() {
    return this._encoding;
  }
  public set encoding(value: string | undefined) {
    this._encoding = value;
  }

  // file_name_format - computed: false, optional: true, required: false
  private _fileNameFormat?: string;
  public get fileNameFormat() {
    return this._fileNameFormat;
  }
  public set fileNameFormat(value: string | undefined) {
    this._fileNameFormat = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this._iothubName;
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }

  // max_chunk_size_in_bytes - computed: false, optional: true, required: false
  private _maxChunkSizeInBytes?: number;
  public get maxChunkSizeInBytes() {
    return this._maxChunkSizeInBytes;
  }
  public set maxChunkSizeInBytes(value: number | undefined) {
    this._maxChunkSizeInBytes = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubEndpointStorageContainerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubEndpointStorageContainerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_frequency_in_seconds: this._batchFrequencyInSeconds,
      connection_string: this._connectionString,
      container_name: this._containerName,
      encoding: this._encoding,
      file_name_format: this._fileNameFormat,
      iothub_name: this._iothubName,
      max_chunk_size_in_bytes: this._maxChunkSizeInBytes,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
