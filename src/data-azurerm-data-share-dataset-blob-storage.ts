// https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDataShareDatasetBlobStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html#data_share_id DataAzurermDataShareDatasetBlobStorage#data_share_id}
  */
  readonly dataShareId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html#name DataAzurermDataShareDatasetBlobStorage#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html#timeouts DataAzurermDataShareDatasetBlobStorage#timeouts}
  */
  readonly timeouts?: DataAzurermDataShareDatasetBlobStorageTimeouts;
}
export class DataAzurermDataShareDatasetBlobStorageStorageAccount extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}
export interface DataAzurermDataShareDatasetBlobStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html#read DataAzurermDataShareDatasetBlobStorage#read}
  */
  readonly read?: string;
}

function dataAzurermDataShareDatasetBlobStorageTimeoutsToTerraform(struct?: DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference | DataAzurermDataShareDatasetBlobStorageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html azurerm_data_share_dataset_blob_storage}
*/
export class DataAzurermDataShareDatasetBlobStorage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_blob_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_blob_storage.html azurerm_data_share_dataset_blob_storage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDataShareDatasetBlobStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermDataShareDatasetBlobStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_blob_storage',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataShareId = config.dataShareId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // data_share_id - computed: false, optional: false, required: true
  private _dataShareId?: string; 
  public get dataShareId() {
    return this.getStringAttribute('data_share_id');
  }
  public set dataShareId(value: string) {
    this._dataShareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShareIdInput() {
    return this._dataShareId
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // folder_path - computed: true, optional: false, required: false
  public get folderPath() {
    return this.getStringAttribute('folder_path');
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

  // storage_account - computed: true, optional: false, required: false
  public storageAccount(index: string) {
    return new DataAzurermDataShareDatasetBlobStorageStorageAccount(this, 'storage_account', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataShareDatasetBlobStorageTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermDataShareDatasetBlobStorageTimeouts | undefined) {
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
      data_share_id: cdktf.stringToTerraform(this._dataShareId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermDataShareDatasetBlobStorageTimeoutsToTerraform(this._timeouts),
    };
  }
}
