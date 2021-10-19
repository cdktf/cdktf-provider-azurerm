// https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupProtectedFileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#backup_policy_id BackupProtectedFileShare#backup_policy_id}
  */
  readonly backupPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#resource_group_name BackupProtectedFileShare#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#source_file_share_name BackupProtectedFileShare#source_file_share_name}
  */
  readonly sourceFileShareName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}
  */
  readonly sourceStorageAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#timeouts BackupProtectedFileShare#timeouts}
  */
  readonly timeouts?: BackupProtectedFileShareTimeouts;
}
export interface BackupProtectedFileShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#create BackupProtectedFileShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#delete BackupProtectedFileShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#read BackupProtectedFileShare#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html#update BackupProtectedFileShare#update}
  */
  readonly update?: string;
}

function backupProtectedFileShareTimeoutsToTerraform(struct?: BackupProtectedFileShareTimeoutsOutputReference | BackupProtectedFileShareTimeouts): any {
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

export class BackupProtectedFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html azurerm_backup_protected_file_share}
*/
export class BackupProtectedFileShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_backup_protected_file_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html azurerm_backup_protected_file_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupProtectedFileShareConfig
  */
  public constructor(scope: Construct, id: string, config: BackupProtectedFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_protected_file_share',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPolicyId = config.backupPolicyId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceFileShareName = config.sourceFileShareName;
    this._sourceStorageAccountId = config.sourceStorageAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: false, required: true
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName?: string; 
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // source_file_share_name - computed: false, optional: false, required: true
  private _sourceFileShareName?: string; 
  public get sourceFileShareName() {
    return this.getStringAttribute('source_file_share_name');
  }
  public set sourceFileShareName(value: string) {
    this._sourceFileShareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileShareNameInput() {
    return this._sourceFileShareName
  }

  // source_storage_account_id - computed: false, optional: false, required: true
  private _sourceStorageAccountId?: string; 
  public get sourceStorageAccountId() {
    return this.getStringAttribute('source_storage_account_id');
  }
  public set sourceStorageAccountId(value: string) {
    this._sourceStorageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStorageAccountIdInput() {
    return this._sourceStorageAccountId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupProtectedFileShareTimeouts | undefined; 
  private __timeoutsOutput = new BackupProtectedFileShareTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BackupProtectedFileShareTimeouts | undefined) {
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
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_file_share_name: cdktf.stringToTerraform(this._sourceFileShareName),
      source_storage_account_id: cdktf.stringToTerraform(this._sourceStorageAccountId),
      timeouts: backupProtectedFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
