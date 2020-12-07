// https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyVmConfig extends cdktf.TerraformMetaArguments {
  readonly instantRestoreRetentionDays?: number;
  readonly name: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly timezone?: string;
  /** backup block */
  readonly backup: BackupPolicyVmBackup[];
  /** retention_daily block */
  readonly retentionDaily?: BackupPolicyVmRetentionDaily[];
  /** retention_monthly block */
  readonly retentionMonthly?: BackupPolicyVmRetentionMonthly[];
  /** retention_weekly block */
  readonly retentionWeekly?: BackupPolicyVmRetentionWeekly[];
  /** retention_yearly block */
  readonly retentionYearly?: BackupPolicyVmRetentionYearly[];
  /** timeouts block */
  readonly timeouts?: BackupPolicyVmTimeouts;
}
export interface BackupPolicyVmBackup {
  readonly frequency: string;
  readonly time: string;
  readonly weekdays?: string[];
}

function backupPolicyVmBackupToTerraform(struct?: BackupPolicyVmBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    time: cdktf.stringToTerraform(struct!.time),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export interface BackupPolicyVmRetentionDaily {
  readonly count: number;
}

function backupPolicyVmRetentionDailyToTerraform(struct?: BackupPolicyVmRetentionDaily): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface BackupPolicyVmRetentionMonthly {
  readonly count: number;
  readonly weekdays: string[];
  readonly weeks: string[];
}

function backupPolicyVmRetentionMonthlyToTerraform(struct?: BackupPolicyVmRetentionMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeks),
  }
}

export interface BackupPolicyVmRetentionWeekly {
  readonly count: number;
  readonly weekdays: string[];
}

function backupPolicyVmRetentionWeeklyToTerraform(struct?: BackupPolicyVmRetentionWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export interface BackupPolicyVmRetentionYearly {
  readonly count: number;
  readonly months: string[];
  readonly weekdays: string[];
  readonly weeks: string[];
}

function backupPolicyVmRetentionYearlyToTerraform(struct?: BackupPolicyVmRetentionYearly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    months: cdktf.listMapper(cdktf.stringToTerraform)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeks),
  }
}

export interface BackupPolicyVmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function backupPolicyVmTimeoutsToTerraform(struct?: BackupPolicyVmTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BackupPolicyVm extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupPolicyVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_policy_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instantRestoreRetentionDays = config.instantRestoreRetentionDays;
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._backup = config.backup;
    this._retentionDaily = config.retentionDaily;
    this._retentionMonthly = config.retentionMonthly;
    this._retentionWeekly = config.retentionWeekly;
    this._retentionYearly = config.retentionYearly;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instant_restore_retention_days - computed: true, optional: true, required: false
  private _instantRestoreRetentionDays?: number;
  public get instantRestoreRetentionDays() {
    return this.getNumberAttribute('instant_restore_retention_days');
  }
  public set instantRestoreRetentionDays(value: number) {
    this._instantRestoreRetentionDays = value;
  }
  public resetInstantRestoreRetentionDays() {
    this._instantRestoreRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRestoreRetentionDaysInput() {
    return this._instantRestoreRetentionDays
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
  private _backup: BackupPolicyVmBackup[];
  public get backup() {
    return this.interpolationForAttribute('backup') as any;
  }
  public set backup(value: BackupPolicyVmBackup[]) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // retention_daily - computed: false, optional: true, required: false
  private _retentionDaily?: BackupPolicyVmRetentionDaily[];
  public get retentionDaily() {
    return this.interpolationForAttribute('retention_daily') as any;
  }
  public set retentionDaily(value: BackupPolicyVmRetentionDaily[] ) {
    this._retentionDaily = value;
  }
  public resetRetentionDaily() {
    this._retentionDaily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDailyInput() {
    return this._retentionDaily
  }

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly?: BackupPolicyVmRetentionMonthly[];
  public get retentionMonthly() {
    return this.interpolationForAttribute('retention_monthly') as any;
  }
  public set retentionMonthly(value: BackupPolicyVmRetentionMonthly[] ) {
    this._retentionMonthly = value;
  }
  public resetRetentionMonthly() {
    this._retentionMonthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMonthlyInput() {
    return this._retentionMonthly
  }

  // retention_weekly - computed: false, optional: true, required: false
  private _retentionWeekly?: BackupPolicyVmRetentionWeekly[];
  public get retentionWeekly() {
    return this.interpolationForAttribute('retention_weekly') as any;
  }
  public set retentionWeekly(value: BackupPolicyVmRetentionWeekly[] ) {
    this._retentionWeekly = value;
  }
  public resetRetentionWeekly() {
    this._retentionWeekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWeeklyInput() {
    return this._retentionWeekly
  }

  // retention_yearly - computed: false, optional: true, required: false
  private _retentionYearly?: BackupPolicyVmRetentionYearly[];
  public get retentionYearly() {
    return this.interpolationForAttribute('retention_yearly') as any;
  }
  public set retentionYearly(value: BackupPolicyVmRetentionYearly[] ) {
    this._retentionYearly = value;
  }
  public resetRetentionYearly() {
    this._retentionYearly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionYearlyInput() {
    return this._retentionYearly
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupPolicyVmTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BackupPolicyVmTimeouts ) {
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
      instant_restore_retention_days: cdktf.numberToTerraform(this._instantRestoreRetentionDays),
      name: cdktf.stringToTerraform(this._name),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: cdktf.listMapper(backupPolicyVmBackupToTerraform)(this._backup),
      retention_daily: cdktf.listMapper(backupPolicyVmRetentionDailyToTerraform)(this._retentionDaily),
      retention_monthly: cdktf.listMapper(backupPolicyVmRetentionMonthlyToTerraform)(this._retentionMonthly),
      retention_weekly: cdktf.listMapper(backupPolicyVmRetentionWeeklyToTerraform)(this._retentionWeekly),
      retention_yearly: cdktf.listMapper(backupPolicyVmRetentionYearlyToTerraform)(this._retentionYearly),
      timeouts: backupPolicyVmTimeoutsToTerraform(this._timeouts),
    };
  }
}
