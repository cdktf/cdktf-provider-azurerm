// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataShareDatasetDataLakeGen1Config extends cdktf.TerraformMetaArguments {
  readonly dataLakeStoreId: string;
  readonly dataShareId: string;
  readonly fileName?: string;
  readonly folderPath: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataShareDatasetDataLakeGen1Timeouts;
}
export interface DataShareDatasetDataLakeGen1Timeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function dataShareDatasetDataLakeGen1TimeoutsToTerraform(struct?: DataShareDatasetDataLakeGen1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataShareDatasetDataLakeGen1 extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataShareDatasetDataLakeGen1Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_data_lake_gen1',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataLakeStoreId = config.dataLakeStoreId;
    this._dataShareId = config.dataShareId;
    this._fileName = config.fileName;
    this._folderPath = config.folderPath;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_lake_store_id - computed: false, optional: false, required: true
  private _dataLakeStoreId: string;
  public get dataLakeStoreId() {
    return this.getStringAttribute('data_lake_store_id');
  }
  public set dataLakeStoreId(value: string) {
    this._dataLakeStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeStoreIdInput() {
    return this._dataLakeStoreId
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

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string;
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string ) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName
  }

  // folder_path - computed: false, optional: false, required: true
  private _folderPath: string;
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetDataLakeGen1Timeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataShareDatasetDataLakeGen1Timeouts ) {
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
      data_lake_store_id: cdktf.stringToTerraform(this._dataLakeStoreId),
      data_share_id: cdktf.stringToTerraform(this._dataShareId),
      file_name: cdktf.stringToTerraform(this._fileName),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataShareDatasetDataLakeGen1TimeoutsToTerraform(this._timeouts),
    };
  }
}
