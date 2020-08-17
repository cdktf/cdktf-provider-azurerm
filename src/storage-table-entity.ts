// https://www.terraform.io/docs/providers/azurerm/r/storage_table_entity.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageTableEntityConfig extends TerraformMetaArguments {
  readonly entity: { [key: string]: string };
  readonly partitionKey: string;
  readonly rowKey: string;
  readonly storageAccountName: string;
  readonly tableName: string;
  /** timeouts block */
  readonly timeouts?: StorageTableEntityTimeouts;
}
export interface StorageTableEntityTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageTableEntity extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageTableEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_table_entity',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._entity = config.entity;
    this._partitionKey = config.partitionKey;
    this._rowKey = config.rowKey;
    this._storageAccountName = config.storageAccountName;
    this._tableName = config.tableName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity - computed: false, optional: false, required: true
  private _entity: { [key: string]: string };
  public get entity() {
    return this._entity;
  }
  public set entity(value: { [key: string]: string }) {
    this._entity = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey: string;
  public get partitionKey() {
    return this._partitionKey;
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }

  // row_key - computed: false, optional: false, required: true
  private _rowKey: string;
  public get rowKey() {
    return this._rowKey;
  }
  public set rowKey(value: string) {
    this._rowKey = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName: string;
  public get tableName() {
    return this._tableName;
  }
  public set tableName(value: string) {
    this._tableName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageTableEntityTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageTableEntityTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      entity: this._entity,
      partition_key: this._partitionKey,
      row_key: this._rowKey,
      storage_account_name: this._storageAccountName,
      table_name: this._tableName,
      timeouts: this._timeouts,
    };
  }
}
