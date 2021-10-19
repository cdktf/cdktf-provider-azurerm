// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputBlobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}
  */
  readonly batchMaxWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}
  */
  readonly batchMinRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#date_format StreamAnalyticsOutputBlob#date_format}
  */
  readonly dateFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#name StreamAnalyticsOutputBlob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#path_pattern StreamAnalyticsOutputBlob#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}
  */
  readonly storageContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#time_format StreamAnalyticsOutputBlob#time_format}
  */
  readonly timeFormat: string;
  /**
  * serialization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#serialization StreamAnalyticsOutputBlob#serialization}
  */
  readonly serialization: StreamAnalyticsOutputBlobSerialization;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#timeouts StreamAnalyticsOutputBlob#timeouts}
  */
  readonly timeouts?: StreamAnalyticsOutputBlobTimeouts;
}
export interface StreamAnalyticsOutputBlobSerialization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#encoding StreamAnalyticsOutputBlob#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#format StreamAnalyticsOutputBlob#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#type StreamAnalyticsOutputBlob#type}
  */
  readonly type: string;
}

function streamAnalyticsOutputBlobSerializationToTerraform(struct?: StreamAnalyticsOutputBlobSerializationOutputReference | StreamAnalyticsOutputBlobSerialization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format: cdktf.stringToTerraform(struct!.format),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StreamAnalyticsOutputBlobSerializationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string | undefined; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string | undefined) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter
  }

  // format - computed: false, optional: true, required: false
  private _format?: string | undefined; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string | undefined) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format
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
export interface StreamAnalyticsOutputBlobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#create StreamAnalyticsOutputBlob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#delete StreamAnalyticsOutputBlob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#read StreamAnalyticsOutputBlob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html#update StreamAnalyticsOutputBlob#update}
  */
  readonly update?: string;
}

function streamAnalyticsOutputBlobTimeoutsToTerraform(struct?: StreamAnalyticsOutputBlobTimeoutsOutputReference | StreamAnalyticsOutputBlobTimeouts): any {
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

export class StreamAnalyticsOutputBlobTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html azurerm_stream_analytics_output_blob}
*/
export class StreamAnalyticsOutputBlob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_output_blob";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_blob.html azurerm_stream_analytics_output_blob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsOutputBlobConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_blob',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._batchMaxWaitTime = config.batchMaxWaitTime;
    this._batchMinRows = config.batchMinRows;
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

  // batch_max_wait_time - computed: false, optional: true, required: false
  private _batchMaxWaitTime?: string | undefined; 
  public get batchMaxWaitTime() {
    return this.getStringAttribute('batch_max_wait_time');
  }
  public set batchMaxWaitTime(value: string | undefined) {
    this._batchMaxWaitTime = value;
  }
  public resetBatchMaxWaitTime() {
    this._batchMaxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMaxWaitTimeInput() {
    return this._batchMaxWaitTime
  }

  // batch_min_rows - computed: false, optional: true, required: false
  private _batchMinRows?: number | undefined; 
  public get batchMinRows() {
    return this.getNumberAttribute('batch_min_rows');
  }
  public set batchMinRows(value: number | undefined) {
    this._batchMinRows = value;
  }
  public resetBatchMinRows() {
    this._batchMinRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMinRowsInput() {
    return this._batchMinRows
  }

  // date_format - computed: false, optional: false, required: true
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern
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

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName?: string; 
  public get storageContainerName() {
    return this.getStringAttribute('storage_container_name');
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerNameInput() {
    return this._storageContainerName
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName?: string; 
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName
  }

  // time_format - computed: false, optional: false, required: true
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization?: StreamAnalyticsOutputBlobSerialization; 
  private __serializationOutput = new StreamAnalyticsOutputBlobSerializationOutputReference(this as any, "serialization", true);
  public get serialization() {
    return this.__serializationOutput;
  }
  public putSerialization(value: StreamAnalyticsOutputBlobSerialization) {
    this._serialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsOutputBlobTimeouts | undefined; 
  private __timeoutsOutput = new StreamAnalyticsOutputBlobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StreamAnalyticsOutputBlobTimeouts | undefined) {
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
      batch_max_wait_time: cdktf.stringToTerraform(this._batchMaxWaitTime),
      batch_min_rows: cdktf.numberToTerraform(this._batchMinRows),
      date_format: cdktf.stringToTerraform(this._dateFormat),
      name: cdktf.stringToTerraform(this._name),
      path_pattern: cdktf.stringToTerraform(this._pathPattern),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_key: cdktf.stringToTerraform(this._storageAccountKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_container_name: cdktf.stringToTerraform(this._storageContainerName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      time_format: cdktf.stringToTerraform(this._timeFormat),
      serialization: streamAnalyticsOutputBlobSerializationToTerraform(this._serialization),
      timeouts: streamAnalyticsOutputBlobTimeoutsToTerraform(this._timeouts),
    };
  }
}
