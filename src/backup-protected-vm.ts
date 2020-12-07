// https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupProtectedVmConfig extends cdktf.TerraformMetaArguments {
  readonly backupPolicyId: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly sourceVmId: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: BackupProtectedVmTimeouts;
}
export interface BackupProtectedVmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function backupProtectedVmTimeoutsToTerraform(struct?: BackupProtectedVmTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BackupProtectedVm extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupProtectedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_protected_vm',
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
    this._sourceVmId = config.sourceVmId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: false, required: true
  private _backupPolicyId: string;
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
  private _recoveryVaultName: string;
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

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId: string;
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupProtectedVmTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BackupProtectedVmTimeouts ) {
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
      source_vm_id: cdktf.stringToTerraform(this._sourceVmId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: backupProtectedVmTimeoutsToTerraform(this._timeouts),
    };
  }
}
