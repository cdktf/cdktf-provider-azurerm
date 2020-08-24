// https://www.terraform.io/docs/providers/azurerm/r/storage_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageTableConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly storageAccountName: string;
  /** acl block */
  readonly acl?: StorageTableAcl[];
  /** timeouts block */
  readonly timeouts?: StorageTableTimeouts;
}
export interface StorageTableAclAccessPolicy {
  readonly expiry: string;
  readonly permissions: string;
  readonly start: string;
}
export interface StorageTableAcl {
  readonly id: string;
  /** access_policy block */
  readonly accessPolicy?: StorageTableAclAccessPolicy[];
}
export interface StorageTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._storageAccountName = config.storageAccountName;
    this._acl = config.acl;
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

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: StorageTableAcl[];
  public get acl() {
    return this._acl;
  }
  public set acl(value: StorageTableAcl[] | undefined) {
    this._acl = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      storage_account_name: this._storageAccountName,
      acl: this._acl,
      timeouts: this._timeouts,
    };
  }
}
