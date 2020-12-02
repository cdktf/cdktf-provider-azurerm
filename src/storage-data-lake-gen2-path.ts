// https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageDataLakeGen2PathConfig extends TerraformMetaArguments {
  readonly filesystemName: string;
  readonly group?: string;
  readonly owner?: string;
  readonly path: string;
  readonly resource: string;
  readonly storageAccountId: string;
  /** ace block */
  readonly ace?: StorageDataLakeGen2PathAce[];
  /** timeouts block */
  readonly timeouts?: StorageDataLakeGen2PathTimeouts;
}
export interface StorageDataLakeGen2PathAce {
  readonly id?: string;
  readonly permissions: string;
  readonly scope?: string;
  readonly type: string;
}
export interface StorageDataLakeGen2PathTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageDataLakeGen2Path extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageDataLakeGen2PathConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_data_lake_gen2_path',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filesystemName = config.filesystemName;
    this._group = config.group;
    this._owner = config.owner;
    this._path = config.path;
    this._resource = config.resource;
    this._storageAccountId = config.storageAccountId;
    this._ace = config.ace;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filesystem_name - computed: false, optional: false, required: true
  private _filesystemName: string;
  public get filesystemName() {
    return this.getStringAttribute('filesystem_name');
  }
  public set filesystemName(value: string) {
    this._filesystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemNameInput() {
    return this._filesystemName
  }

  // group - computed: true, optional: true, required: false
  private _group?: string;
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // ace - computed: false, optional: true, required: false
  private _ace?: StorageDataLakeGen2PathAce[];
  public get ace() {
    return this.interpolationForAttribute('ace') as any;
  }
  public set ace(value: StorageDataLakeGen2PathAce[] ) {
    this._ace = value;
  }
  public resetAce() {
    this._ace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aceInput() {
    return this._ace
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageDataLakeGen2PathTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageDataLakeGen2PathTimeouts ) {
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
      filesystem_name: this._filesystemName,
      group: this._group,
      owner: this._owner,
      path: this._path,
      resource: this._resource,
      storage_account_id: this._storageAccountId,
      ace: this._ace,
      timeouts: this._timeouts,
    };
  }
}
