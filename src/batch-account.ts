// https://www.terraform.io/docs/providers/azurerm/r/batch_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchAccountConfig extends cdktf.TerraformMetaArguments {
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

function batchAccountKeyVaultReferenceToTerraform(struct?: BatchAccountKeyVaultReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface BatchAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function batchAccountTimeoutsToTerraform(struct?: BatchAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BatchAccount extends cdktf.TerraformResource {

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

  // account_endpoint - computed: true, optional: false, required: false
  public get accountEndpoint() {
    return this.getStringAttribute('account_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // pool_allocation_mode - computed: false, optional: true, required: false
  private _poolAllocationMode?: string;
  public get poolAllocationMode() {
    return this.getStringAttribute('pool_allocation_mode');
  }
  public set poolAllocationMode(value: string ) {
    this._poolAllocationMode = value;
  }
  public resetPoolAllocationMode() {
    this._poolAllocationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolAllocationModeInput() {
    return this._poolAllocationMode
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // storage_account_id - computed: true, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // key_vault_reference - computed: false, optional: true, required: false
  private _keyVaultReference?: BatchAccountKeyVaultReference[];
  public get keyVaultReference() {
    return this.interpolationForAttribute('key_vault_reference') as any;
  }
  public set keyVaultReference(value: BatchAccountKeyVaultReference[] ) {
    this._keyVaultReference = value;
  }
  public resetKeyVaultReference() {
    this._keyVaultReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultReferenceInput() {
    return this._keyVaultReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BatchAccountTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pool_allocation_mode: cdktf.stringToTerraform(this._poolAllocationMode),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      key_vault_reference: cdktf.listMapper(batchAccountKeyVaultReferenceToTerraform)(this._keyVaultReference),
      timeouts: batchAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
