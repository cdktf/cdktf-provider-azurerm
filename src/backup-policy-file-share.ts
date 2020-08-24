// https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupPolicyFileShareConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly timezone?: string;
  /** backup block */
  readonly backup: BackupPolicyFileShareBackup[];
  /** retention_daily block */
  readonly retentionDaily: BackupPolicyFileShareRetentionDaily[];
  /** timeouts block */
  readonly timeouts?: BackupPolicyFileShareTimeouts;
}
export interface BackupPolicyFileShareBackup {
  readonly frequency: string;
  readonly time: string;
}
export interface BackupPolicyFileShareRetentionDaily {
  readonly count: number;
}
export interface BackupPolicyFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BackupPolicyFileShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupPolicyFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_policy_file_share',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._timezone = config.timezone;
    this._backup = config.backup;
    this._retentionDaily = config.retentionDaily;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this._timezone;
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }

  // backup - computed: false, optional: false, required: true
  private _backup: BackupPolicyFileShareBackup[];
  public get backup() {
    return this._backup;
  }
  public set backup(value: BackupPolicyFileShareBackup[]) {
    this._backup = value;
  }

  // retention_daily - computed: false, optional: false, required: true
  private _retentionDaily: BackupPolicyFileShareRetentionDaily[];
  public get retentionDaily() {
    return this._retentionDaily;
  }
  public set retentionDaily(value: BackupPolicyFileShareRetentionDaily[]) {
    this._retentionDaily = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupPolicyFileShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BackupPolicyFileShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      timezone: this._timezone,
      backup: this._backup,
      retention_daily: this._retentionDaily,
      timeouts: this._timeouts,
    };
  }
}
