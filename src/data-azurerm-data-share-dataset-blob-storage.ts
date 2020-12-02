// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_data_share_dataset_blob_storage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermDataShareDatasetBlobStorageConfig extends TerraformMetaArguments {
  readonly dataShareId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDataShareDatasetBlobStorageTimeouts;
}
export class DataAzurermDataShareDatasetBlobStorageStorageAccount extends ComplexComputedList {

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
  readonly read?: string;
}

// Resource

export class DataAzurermDataShareDatasetBlobStorage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _dataShareId: string;
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

  // storage_account - computed: true, optional: false, required: false
  public storageAccount(index: string) {
    return new DataAzurermDataShareDatasetBlobStorageStorageAccount(this, 'storage_account', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataShareDatasetBlobStorageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDataShareDatasetBlobStorageTimeouts ) {
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
      data_share_id: this._dataShareId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
