// https://www.terraform.io/docs/providers/azurerm/r/storage_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageShareConfig extends TerraformMetaArguments {
  readonly metadata?: { [key: string]: string };
  readonly name: string;
  readonly quota?: number;
  readonly storageAccountName: string;
  /** acl block */
  readonly acl?: StorageShareAcl[];
  /** timeouts block */
  readonly timeouts?: StorageShareTimeouts;
}
export interface StorageShareAclAccessPolicy {
  readonly expiry: string;
  readonly permissions: string;
  readonly start: string;
}
export interface StorageShareAcl {
  readonly id: string;
  /** access_policy block */
  readonly accessPolicy?: StorageShareAclAccessPolicy[];
}
export interface StorageShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageShareConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_share',
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
    this._quota = config.quota;
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

  // quota - computed: false, optional: true, required: false
  private _quota?: number;
  public get quota() {
    return this._quota;
  }
  public set quota(value: number | undefined) {
    this._quota = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: StorageShareAcl[];
  public get acl() {
    return this._acl;
  }
  public set acl(value: StorageShareAcl[] | undefined) {
    this._acl = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      name: this._name,
      quota: this._quota,
      storage_account_name: this._storageAccountName,
      acl: this._acl,
      timeouts: this._timeouts,
    };
  }
}
