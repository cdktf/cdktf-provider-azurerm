// https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyFileShareConfig extends cdktf.TerraformMetaArguments {
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

function backupPolicyFileShareBackupToTerraform(struct?: BackupPolicyFileShareBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface BackupPolicyFileShareRetentionDaily {
  readonly count: number;
}

function backupPolicyFileShareRetentionDailyToTerraform(struct?: BackupPolicyFileShareRetentionDaily): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface BackupPolicyFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function backupPolicyFileShareTimeoutsToTerraform(struct?: BackupPolicyFileShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BackupPolicyFileShare extends cdktf.TerraformResource {

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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string ) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // backup - computed: false, optional: false, required: true
  private _backup: BackupPolicyFileShareBackup[];
  public get backup() {
    return this.interpolationForAttribute('backup') as any;
  }
  public set backup(value: BackupPolicyFileShareBackup[]) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // retention_daily - computed: false, optional: false, required: true
  private _retentionDaily: BackupPolicyFileShareRetentionDaily[];
  public get retentionDaily() {
    return this.interpolationForAttribute('retention_daily') as any;
  }
  public set retentionDaily(value: BackupPolicyFileShareRetentionDaily[]) {
    this._retentionDaily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDailyInput() {
    return this._retentionDaily
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupPolicyFileShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BackupPolicyFileShareTimeouts ) {
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
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: cdktf.listMapper(backupPolicyFileShareBackupToTerraform)(this._backup),
      retention_daily: cdktf.listMapper(backupPolicyFileShareRetentionDailyToTerraform)(this._retentionDaily),
      timeouts: backupPolicyFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
