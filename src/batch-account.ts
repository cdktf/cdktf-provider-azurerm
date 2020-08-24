// https://www.terraform.io/docs/providers/azurerm/r/batch_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BatchAccountConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly poolAllocationMode?: string;
  readonly resourceGroupName: string;
  readonly storageAccountId?: string;
  readonly tags?: { [key: string]: string };
  /** key_vault_reference block */
  readonly keyVaultReference?: BatchAccountKeyVaultReference[];
  /** timeouts block */
  readonly timeouts?: BatchAccountTimeouts;
}
export interface BatchAccountKeyVaultReference {
  readonly id: string;
  readonly url: string;
}
export interface BatchAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BatchAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._poolAllocationMode = config.poolAllocationMode;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._keyVaultReference = config.keyVaultReference;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_endpoint - computed: true, optional: false, required: true
  public get accountEndpoint() {
    return this.getStringAttribute('account_endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pool_allocation_mode - computed: false, optional: true, required: false
  private _poolAllocationMode?: string;
  public get poolAllocationMode() {
    return this._poolAllocationMode;
  }
  public set poolAllocationMode(value: string | undefined) {
    this._poolAllocationMode = value;
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // storage_account_id - computed: true, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this._storageAccountId ?? this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string | undefined) {
    this._storageAccountId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // key_vault_reference - computed: false, optional: true, required: false
  private _keyVaultReference?: BatchAccountKeyVaultReference[];
  public get keyVaultReference() {
    return this._keyVaultReference;
  }
  public set keyVaultReference(value: BatchAccountKeyVaultReference[] | undefined) {
    this._keyVaultReference = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BatchAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      pool_allocation_mode: this._poolAllocationMode,
      resource_group_name: this._resourceGroupName,
      storage_account_id: this._storageAccountId,
      tags: this._tags,
      key_vault_reference: this._keyVaultReference,
      timeouts: this._timeouts,
    };
  }
}
