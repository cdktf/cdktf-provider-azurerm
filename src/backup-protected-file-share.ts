// https://www.terraform.io/docs/providers/azurerm/r/backup_protected_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupProtectedFileShareConfig extends TerraformMetaArguments {
  readonly backupPolicyId: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly sourceFileShareName: string;
  readonly sourceStorageAccountId: string;
  /** timeouts block */
  readonly timeouts?: BackupProtectedFileShareTimeouts;
}
export interface BackupProtectedFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BackupProtectedFileShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // source_file_share_name - computed: false, optional: false, required: true
  private _sourceFileShareName: string;
  public get sourceFileShareName() {
    return this._sourceFileShareName;
  }
  public set sourceFileShareName(value: string) {
    this._sourceFileShareName = value;
  }

  // source_storage_account_id - computed: false, optional: false, required: true
  private _sourceStorageAccountId: string;
  public get sourceStorageAccountId() {
    return this._sourceStorageAccountId;
  }
  public set sourceStorageAccountId(value: string) {
    this._sourceStorageAccountId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupProtectedFileShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BackupProtectedFileShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_policy_id: this._backupPolicyId,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      source_file_share_name: this._sourceFileShareName,
      source_storage_account_id: this._sourceStorageAccountId,
      timeouts: this._timeouts,
    };
  }
}
