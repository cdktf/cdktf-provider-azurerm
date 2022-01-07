// https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubEndpointStorageContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}
  */
  readonly batchFrequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#connection_string IothubEndpointStorageContainer#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#container_name IothubEndpointStorageContainer#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#encoding IothubEndpointStorageContainer#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#file_name_format IothubEndpointStorageContainer#file_name_format}
  */
  readonly fileNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#iothub_id IothubEndpointStorageContainer#iothub_id}
  */
  readonly iothubId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#iothub_name IothubEndpointStorageContainer#iothub_name}
  */
  readonly iothubName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}
  */
  readonly maxChunkSizeInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#name IothubEndpointStorageContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#resource_group_name IothubEndpointStorageContainer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#timeouts IothubEndpointStorageContainer#timeouts}
  */
  readonly timeouts?: IothubEndpointStorageContainerTimeouts;
}
export interface IothubEndpointStorageContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#create IothubEndpointStorageContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#delete IothubEndpointStorageContainer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#read IothubEndpointStorageContainer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html#update IothubEndpointStorageContainer#update}
  */
  readonly update?: string;
}

export function iothubEndpointStorageContainerTimeoutsToTerraform(struct?: IothubEndpointStorageContainerTimeoutsOutputReference | IothubEndpointStorageContainerTimeouts): any {
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

export class IothubEndpointStorageContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IothubEndpointStorageContainerTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubEndpointStorageContainerTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html azurerm_iothub_endpoint_storage_container}
*/
export class IothubEndpointStorageContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iothub_endpoint_storage_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_storage_container.html azurerm_iothub_endpoint_storage_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubEndpointStorageContainerConfig
  */
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
    this._iothubId = config.iothubId;
    this._iothubName = config.iothubName;
    this._maxChunkSizeInBytes = config.maxChunkSizeInBytes;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_frequency_in_seconds - computed: false, optional: true, required: false
  private _batchFrequencyInSeconds?: number; 
  public get batchFrequencyInSeconds() {
    return this.getNumberAttribute('batch_frequency_in_seconds');
  }
  public set batchFrequencyInSeconds(value: number) {
    this._batchFrequencyInSeconds = value;
  }
  public resetBatchFrequencyInSeconds() {
    this._batchFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchFrequencyInSecondsInput() {
    return this._batchFrequencyInSeconds;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // file_name_format - computed: false, optional: true, required: false
  private _fileNameFormat?: string; 
  public get fileNameFormat() {
    return this.getStringAttribute('file_name_format');
  }
  public set fileNameFormat(value: string) {
    this._fileNameFormat = value;
  }
  public resetFileNameFormat() {
    this._fileNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameFormatInput() {
    return this._fileNameFormat;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_id - computed: true, optional: true, required: false
  private _iothubId?: string; 
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  public resetIothubId() {
    this._iothubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId;
  }

  // iothub_name - computed: true, optional: true, required: false
  private _iothubName?: string; 
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  public resetIothubName() {
    this._iothubName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName;
  }

  // max_chunk_size_in_bytes - computed: false, optional: true, required: false
  private _maxChunkSizeInBytes?: number; 
  public get maxChunkSizeInBytes() {
    return this.getNumberAttribute('max_chunk_size_in_bytes');
  }
  public set maxChunkSizeInBytes(value: number) {
    this._maxChunkSizeInBytes = value;
  }
  public resetMaxChunkSizeInBytes() {
    this._maxChunkSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChunkSizeInBytesInput() {
    return this._maxChunkSizeInBytes;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IothubEndpointStorageContainerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IothubEndpointStorageContainerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_frequency_in_seconds: cdktf.numberToTerraform(this._batchFrequencyInSeconds),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      container_name: cdktf.stringToTerraform(this._containerName),
      encoding: cdktf.stringToTerraform(this._encoding),
      file_name_format: cdktf.stringToTerraform(this._fileNameFormat),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      iothub_name: cdktf.stringToTerraform(this._iothubName),
      max_chunk_size_in_bytes: cdktf.numberToTerraform(this._maxChunkSizeInBytes),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: iothubEndpointStorageContainerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
