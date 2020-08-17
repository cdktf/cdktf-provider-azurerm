// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataLakeStoreFileConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly localFilePath: string;
  readonly remoteFilePath: string;
  /** timeouts block */
  readonly timeouts?: DataLakeStoreFileTimeouts;
}
export interface DataLakeStoreFileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataLakeStoreFile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // local_file_path - computed: false, optional: false, required: true
  private _localFilePath: string;
  public get localFilePath() {
    return this._localFilePath;
  }
  public set localFilePath(value: string) {
    this._localFilePath = value;
  }

  // remote_file_path - computed: false, optional: false, required: true
  private _remoteFilePath: string;
  public get remoteFilePath() {
    return this._remoteFilePath;
  }
  public set remoteFilePath(value: string) {
    this._remoteFilePath = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreFileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataLakeStoreFileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      local_file_path: this._localFilePath,
      remote_file_path: this._remoteFilePath,
      timeouts: this._timeouts,
    };
  }
}
