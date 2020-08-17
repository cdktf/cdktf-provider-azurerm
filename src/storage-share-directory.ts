// https://www.terraform.io/docs/providers/azurerm/r/storage_share_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageShareDirectoryConfig extends TerraformMetaArguments {
  readonly metadata?: { [key: string]: string };
  readonly name: string;
  readonly shareName: string;
  readonly storageAccountName: string;
  /** timeouts block */
  readonly timeouts?: StorageShareDirectoryTimeouts;
}
export interface StorageShareDirectoryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageShareDirectory extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageShareDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_share_directory',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._name = config.name;
    this._shareName = config.shareName;
    this._storageAccountName = config.storageAccountName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName: string;
  public get shareName() {
    return this._shareName;
  }
  public set shareName(value: string) {
    this._shareName = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageShareDirectoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageShareDirectoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      name: this._name,
      share_name: this._shareName,
      storage_account_name: this._storageAccountName,
      timeouts: this._timeouts,
    };
  }
}
