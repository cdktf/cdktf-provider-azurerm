// https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupProtectedVmConfig extends TerraformMetaArguments {
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

// Resource

export class BackupProtectedVm extends TerraformResource {

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
    return this._backupPolicyId;
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this._recoveryVaultName;
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId: string;
  public get sourceVmId() {
    return this._sourceVmId;
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupProtectedVmTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BackupProtectedVmTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_policy_id: this._backupPolicyId,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      source_vm_id: this._sourceVmId,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
