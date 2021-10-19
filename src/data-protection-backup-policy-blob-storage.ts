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

function dataProtectionBackupPolicyBlobStorageTimeoutsToTerraform(struct?: DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference | DataProtectionBackupPolicyBlobStorageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _name?: string; 
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
  private _retentionDuration?: string; 
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
  private _vaultId?: string; 
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
  private _timeouts?: DataProtectionBackupPolicyBlobStorageTimeouts | undefined; 
  private __timeoutsOutput = new DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataProtectionBackupPolicyBlobStorageTimeouts | undefined) {
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
