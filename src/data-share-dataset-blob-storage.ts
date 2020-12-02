// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_blob_storage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataShareDatasetBlobStorageConfig extends TerraformMetaArguments {
  readonly containerName: string;
  readonly dataShareId: string;
  readonly filePath?: string;
  readonly folderPath?: string;
  readonly name: string;
  /** storage_account block */
  readonly storageAccount: DataShareDatasetBlobStorageStorageAccount[];
  /** timeouts block */
  readonly timeouts?: DataShareDatasetBlobStorageTimeouts;
}
export interface DataShareDatasetBlobStorageStorageAccount {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly subscriptionId: string;
}
export interface DataShareDatasetBlobStorageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class DataShareDatasetBlobStorage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataShareDatasetBlobStorageConfig) {
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
    this._containerName = config.containerName;
    this._dataShareId = config.dataShareId;
    this._filePath = config.filePath;
    this._folderPath = config.folderPath;
    this._name = config.name;
    this._storageAccount = config.storageAccount;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_name - computed: false, optional: false, required: true
  private _containerName: string;
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
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

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string;
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string ) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath
  }

  // folder_path - computed: false, optional: true, required: false
  private _folderPath?: string;
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string ) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath
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

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount: DataShareDatasetBlobStorageStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: DataShareDatasetBlobStorageStorageAccount[]) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetBlobStorageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataShareDatasetBlobStorageTimeouts ) {
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
      container_name: this._containerName,
      data_share_id: this._dataShareId,
      file_path: this._filePath,
      folder_path: this._folderPath,
      name: this._name,
      storage_account: this._storageAccount,
      timeouts: this._timeouts,
    };
  }
}
