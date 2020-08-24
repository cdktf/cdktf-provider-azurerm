// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StreamAnalyticsStreamInputBlobConfig extends TerraformMetaArguments {
  readonly dateFormat: string;
  readonly name: string;
  readonly pathPattern: string;
  readonly resourceGroupName: string;
  readonly storageAccountKey: string;
  readonly storageAccountName: string;
  readonly storageContainerName: string;
  readonly streamAnalyticsJobName: string;
  readonly timeFormat: string;
  /** serialization block */
  readonly serialization: StreamAnalyticsStreamInputBlobSerialization[];
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsStreamInputBlobTimeouts;
}
export interface StreamAnalyticsStreamInputBlobSerialization {
  readonly encoding?: string;
  readonly fieldDelimiter?: string;
  readonly type: string;
}
export interface StreamAnalyticsStreamInputBlobTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StreamAnalyticsStreamInputBlob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsStreamInputBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_stream_input_blob',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dateFormat = config.dateFormat;
    this._name = config.name;
    this._pathPattern = config.pathPattern;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountKey = config.storageAccountKey;
    this._storageAccountName = config.storageAccountName;
    this._storageContainerName = config.storageContainerName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._timeFormat = config.timeFormat;
    this._serialization = config.serialization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_format - computed: false, optional: false, required: true
  private _dateFormat: string;
  public get dateFormat() {
    return this._dateFormat;
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern: string;
  public get pathPattern() {
    return this._pathPattern;
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey: string;
  public get storageAccountKey() {
    return this._storageAccountKey;
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName: string;
  public get storageContainerName() {
    return this._storageContainerName;
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this._streamAnalyticsJobName;
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }

  // time_format - computed: false, optional: false, required: true
  private _timeFormat: string;
  public get timeFormat() {
    return this._timeFormat;
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization: StreamAnalyticsStreamInputBlobSerialization[];
  public get serialization() {
    return this._serialization;
  }
  public set serialization(value: StreamAnalyticsStreamInputBlobSerialization[]) {
    this._serialization = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsStreamInputBlobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamAnalyticsStreamInputBlobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date_format: this._dateFormat,
      name: this._name,
      path_pattern: this._pathPattern,
      resource_group_name: this._resourceGroupName,
      storage_account_key: this._storageAccountKey,
      storage_account_name: this._storageAccountName,
      storage_container_name: this._storageContainerName,
      stream_analytics_job_name: this._streamAnalyticsJobName,
      time_format: this._timeFormat,
      serialization: this._serialization,
      timeouts: this._timeouts,
    };
  }
}
