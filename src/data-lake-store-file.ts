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
      account_name: this._accountName,
      local_file_path: this._localFilePath,
      remote_file_path: this._remoteFilePath,
      timeouts: this._timeouts,
    };
  }
}
