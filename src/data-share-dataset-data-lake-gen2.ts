// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataShareDatasetDataLakeGen2Config extends TerraformMetaArguments {
  readonly filePath?: string;
  readonly fileSystemName: string;
  readonly folderPath?: string;
  readonly name: string;
  readonly shareId: string;
  readonly storageAccountId: string;
  /** timeouts block */
  readonly timeouts?: DataShareDatasetDataLakeGen2Timeouts;
}
export interface DataShareDatasetDataLakeGen2Timeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class DataShareDatasetDataLakeGen2 extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataShareDatasetDataLakeGen2Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_data_lake_gen2',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filePath = config.filePath;
    this._fileSystemName = config.fileSystemName;
    this._folderPath = config.folderPath;
    this._name = config.name;
    this._shareId = config.shareId;
    this._storageAccountId = config.storageAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // file_system_name - computed: false, optional: false, required: true
  private _fileSystemName: string;
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }
  public set fileSystemName(value: string) {
    this._fileSystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNameInput() {
    return this._fileSystemName
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

  // share_id - computed: false, optional: false, required: true
  private _shareId: string;
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetDataLakeGen2Timeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataShareDatasetDataLakeGen2Timeouts ) {
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
      file_path: this._filePath,
      file_system_name: this._fileSystemName,
      folder_path: this._folderPath,
      name: this._name,
      share_id: this._shareId,
      storage_account_id: this._storageAccountId,
      timeouts: this._timeouts,
    };
  }
}
