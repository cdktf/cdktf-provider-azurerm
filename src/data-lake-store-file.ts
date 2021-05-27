// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLakeStoreFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#account_name DataLakeStoreFile#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#local_file_path DataLakeStoreFile#local_file_path}
  */
  readonly localFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#remote_file_path DataLakeStoreFile#remote_file_path}
  */
  readonly remoteFilePath: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#timeouts DataLakeStoreFile#timeouts}
  */
  readonly timeouts?: DataLakeStoreFileTimeouts;
}
export interface DataLakeStoreFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#create DataLakeStoreFile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#delete DataLakeStoreFile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#read DataLakeStoreFile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html#update DataLakeStoreFile#update}
  */
  readonly update?: string;
}

function dataLakeStoreFileTimeoutsToTerraform(struct?: DataLakeStoreFileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html azurerm_data_lake_store_file}
*/
export class DataLakeStoreFile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html azurerm_data_lake_store_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLakeStoreFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataLakeStoreFileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_lake_store_file',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._localFilePath = config.localFilePath;
    this._remoteFilePath = config.remoteFilePath;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_file_path - computed: false, optional: false, required: true
  private _localFilePath: string;
  public get localFilePath() {
    return this.getStringAttribute('local_file_path');
  }
  public set localFilePath(value: string) {
    this._localFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilePathInput() {
    return this._localFilePath
  }

  // remote_file_path - computed: false, optional: false, required: true
  private _remoteFilePath: string;
  public get remoteFilePath() {
    return this.getStringAttribute('remote_file_path');
  }
  public set remoteFilePath(value: string) {
    this._remoteFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFilePathInput() {
    return this._remoteFilePath
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreFileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLakeStoreFileTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      local_file_path: cdktf.stringToTerraform(this._localFilePath),
      remote_file_path: cdktf.stringToTerraform(this._remoteFilePath),
      timeouts: dataLakeStoreFileTimeoutsToTerraform(this._timeouts),
    };
  }
}
