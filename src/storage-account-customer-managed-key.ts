// https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  readonly keyName: string;
  readonly keyVaultId: string;
  readonly keyVersion?: string;
  readonly storageAccountId: string;
  /** timeouts block */
  readonly timeouts?: StorageAccountCustomerManagedKeyTimeouts;
}
export interface StorageAccountCustomerManagedKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function storageAccountCustomerManagedKeyTimeoutsToTerraform(struct?: StorageAccountCustomerManagedKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StorageAccountCustomerManagedKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageAccountCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyName = config.keyName;
    this._keyVaultId = config.keyVaultId;
    this._keyVersion = config.keyVersion;
    this._storageAccountId = config.storageAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
  }

  // key_version - computed: false, optional: true, required: false
  private _keyVersion?: string;
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string ) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageAccountCustomerManagedKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageAccountCustomerManagedKeyTimeouts ) {
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
      key_name: cdktf.stringToTerraform(this._keyName),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      key_version: cdktf.stringToTerraform(this._keyVersion),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      timeouts: storageAccountCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
