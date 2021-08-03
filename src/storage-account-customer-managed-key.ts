// https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#key_name StorageAccountCustomerManagedKey#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#key_vault_id StorageAccountCustomerManagedKey#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#key_version StorageAccountCustomerManagedKey#key_version}
  */
  readonly keyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#storage_account_id StorageAccountCustomerManagedKey#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#user_assigned_identity_id StorageAccountCustomerManagedKey#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#timeouts StorageAccountCustomerManagedKey#timeouts}
  */
  readonly timeouts?: StorageAccountCustomerManagedKeyTimeouts;
}
export interface StorageAccountCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#create StorageAccountCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#delete StorageAccountCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#read StorageAccountCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html#update StorageAccountCustomerManagedKey#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html azurerm_storage_account_customer_managed_key}
*/
export class StorageAccountCustomerManagedKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_customer_managed_key.html azurerm_storage_account_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountCustomerManagedKeyConfig
  */
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
    this._userAssignedIdentityId = config.userAssignedIdentityId;
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

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string;
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string ) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId
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
      user_assigned_identity_id: cdktf.stringToTerraform(this._userAssignedIdentityId),
      timeouts: storageAccountCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
