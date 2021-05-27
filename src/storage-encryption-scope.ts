// https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageEncryptionScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#infrastructure_encryption_required StorageEncryptionScope#infrastructure_encryption_required}
  */
  readonly infrastructureEncryptionRequired?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#key_vault_key_id StorageEncryptionScope#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#name StorageEncryptionScope#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#source StorageEncryptionScope#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#storage_account_id StorageEncryptionScope#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#timeouts StorageEncryptionScope#timeouts}
  */
  readonly timeouts?: StorageEncryptionScopeTimeouts;
}
export interface StorageEncryptionScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#create StorageEncryptionScope#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#delete StorageEncryptionScope#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#read StorageEncryptionScope#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html#update StorageEncryptionScope#update}
  */
  readonly update?: string;
}

function storageEncryptionScopeTimeoutsToTerraform(struct?: StorageEncryptionScopeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html azurerm_storage_encryption_scope}
*/
export class StorageEncryptionScope extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_encryption_scope.html azurerm_storage_encryption_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageEncryptionScopeConfig
  */
  public constructor(scope: Construct, id: string, config: StorageEncryptionScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_encryption_scope',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._infrastructureEncryptionRequired = config.infrastructureEncryptionRequired;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._name = config.name;
    this._source = config.source;
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

  // infrastructure_encryption_required - computed: false, optional: true, required: false
  private _infrastructureEncryptionRequired?: boolean;
  public get infrastructureEncryptionRequired() {
    return this.getBooleanAttribute('infrastructure_encryption_required');
  }
  public set infrastructureEncryptionRequired(value: boolean ) {
    this._infrastructureEncryptionRequired = value;
  }
  public resetInfrastructureEncryptionRequired() {
    this._infrastructureEncryptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionRequiredInput() {
    return this._infrastructureEncryptionRequired
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string;
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string ) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId
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

  // source - computed: false, optional: false, required: true
  private _source: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
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
  private _timeouts?: StorageEncryptionScopeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageEncryptionScopeTimeouts ) {
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
      infrastructure_encryption_required: cdktf.booleanToTerraform(this._infrastructureEncryptionRequired),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      timeouts: storageEncryptionScopeTimeoutsToTerraform(this._timeouts),
    };
  }
}
