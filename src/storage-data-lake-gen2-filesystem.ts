// https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageDataLakeGen2FilesystemConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly properties?: { [key: string]: string };
  readonly storageAccountId: string;
  /** timeouts block */
  readonly timeouts?: StorageDataLakeGen2FilesystemTimeouts;
}
export interface StorageDataLakeGen2FilesystemTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageDataLakeGen2Filesystem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageDataLakeGen2FilesystemConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_data_lake_gen2_filesystem',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._properties = config.properties;
    this._storageAccountId = config.storageAccountId;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string };
  public get properties() {
    return this._properties;
  }
  public set properties(value: { [key: string]: string } | undefined) {
    this._properties = value;
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageDataLakeGen2FilesystemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageDataLakeGen2FilesystemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      properties: this._properties,
      storage_account_id: this._storageAccountId,
      timeouts: this._timeouts,
    };
  }
}
