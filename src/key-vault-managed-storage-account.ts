// https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultManagedStorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#key_vault_id KeyVaultManagedStorageAccount#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#name KeyVaultManagedStorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#regenerate_key_automatically KeyVaultManagedStorageAccount#regenerate_key_automatically}
  */
  readonly regenerateKeyAutomatically?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#regeneration_period KeyVaultManagedStorageAccount#regeneration_period}
  */
  readonly regenerationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#storage_account_id KeyVaultManagedStorageAccount#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#storage_account_key KeyVaultManagedStorageAccount#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#tags KeyVaultManagedStorageAccount#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#timeouts KeyVaultManagedStorageAccount#timeouts}
  */
  readonly timeouts?: KeyVaultManagedStorageAccountTimeouts;
}
export interface KeyVaultManagedStorageAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#create KeyVaultManagedStorageAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#delete KeyVaultManagedStorageAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#read KeyVaultManagedStorageAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html#update KeyVaultManagedStorageAccount#update}
  */
  readonly update?: string;
}

function keyVaultManagedStorageAccountTimeoutsToTerraform(struct?: KeyVaultManagedStorageAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html azurerm_key_vault_managed_storage_account}
*/
export class KeyVaultManagedStorageAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_managed_storage_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_managed_storage_account.html azurerm_key_vault_managed_storage_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultManagedStorageAccountConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultManagedStorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._regenerateKeyAutomatically = config.regenerateKeyAutomatically;
    this._regenerationPeriod = config.regenerationPeriod;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountKey = config.storageAccountKey;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // regenerate_key_automatically - computed: false, optional: true, required: false
  private _regenerateKeyAutomatically?: boolean | cdktf.IResolvable;
  public get regenerateKeyAutomatically() {
    return this.getBooleanAttribute('regenerate_key_automatically');
  }
  public set regenerateKeyAutomatically(value: boolean | cdktf.IResolvable ) {
    this._regenerateKeyAutomatically = value;
  }
  public resetRegenerateKeyAutomatically() {
    this._regenerateKeyAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateKeyAutomaticallyInput() {
    return this._regenerateKeyAutomatically
  }

  // regeneration_period - computed: false, optional: true, required: false
  private _regenerationPeriod?: string;
  public get regenerationPeriod() {
    return this.getStringAttribute('regeneration_period');
  }
  public set regenerationPeriod(value: string ) {
    this._regenerationPeriod = value;
  }
  public resetRegenerationPeriod() {
    this._regenerationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerationPeriodInput() {
    return this._regenerationPeriod
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

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey: string;
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultManagedStorageAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KeyVaultManagedStorageAccountTimeouts ) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      regenerate_key_automatically: cdktf.booleanToTerraform(this._regenerateKeyAutomatically),
      regeneration_period: cdktf.stringToTerraform(this._regenerationPeriod),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_key: cdktf.stringToTerraform(this._storageAccountKey),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: keyVaultManagedStorageAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
