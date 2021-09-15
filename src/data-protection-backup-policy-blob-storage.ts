// https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupPolicyBlobStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#name DataProtectionBackupPolicyBlobStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#retention_duration DataProtectionBackupPolicyBlobStorage#retention_duration}
  */
  readonly retentionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}
  */
  readonly vaultId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#timeouts DataProtectionBackupPolicyBlobStorage#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyBlobStorageTimeouts;
}
export interface DataProtectionBackupPolicyBlobStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#create DataProtectionBackupPolicyBlobStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#delete DataProtectionBackupPolicyBlobStorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#read DataProtectionBackupPolicyBlobStorage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html#update DataProtectionBackupPolicyBlobStorage#update}
  */
  readonly update?: string;
}

function dataProtectionBackupPolicyBlobStorageTimeoutsToTerraform(struct?: DataProtectionBackupPolicyBlobStorageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html azurerm_data_protection_backup_policy_blob_storage}
*/
export class DataProtectionBackupPolicyBlobStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_protection_backup_policy_blob_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_blob_storage.html azurerm_data_protection_backup_policy_blob_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyBlobStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyBlobStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_blob_storage',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._retentionDuration = config.retentionDuration;
    this._vaultId = config.vaultId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // retention_duration - computed: false, optional: false, required: true
  private _retentionDuration: string;
  public get retentionDuration() {
    return this.getStringAttribute('retention_duration');
  }
  public set retentionDuration(value: string) {
    this._retentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId: string;
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataProtectionBackupPolicyBlobStorageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataProtectionBackupPolicyBlobStorageTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      retention_duration: cdktf.stringToTerraform(this._retentionDuration),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      timeouts: dataProtectionBackupPolicyBlobStorageTimeoutsToTerraform(this._timeouts),
    };
  }
}
