// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_data_share_dataset_data_lake_gen1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermDataShareDatasetDataLakeGen1Config extends TerraformMetaArguments {
  readonly dataShareId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDataShareDatasetDataLakeGen1Timeouts;
}
export interface DataAzurermDataShareDatasetDataLakeGen1Timeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDataShareDatasetDataLakeGen1 extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDataShareDatasetDataLakeGen1Config) {
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
    this._dataShareId = config.dataShareId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_lake_store_id - computed: true, optional: false, required: false
  public get dataLakeStoreId() {
    return this.getStringAttribute('data_lake_store_id');
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

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataShareDatasetDataLakeGen1Timeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDataShareDatasetDataLakeGen1Timeouts ) {
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
