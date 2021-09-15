// https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyFileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#name BackupPolicyFileShare#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#resource_group_name BackupPolicyFileShare#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#tags BackupPolicyFileShare#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#timezone BackupPolicyFileShare#timezone}
  */
  readonly timezone?: string;
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#backup BackupPolicyFileShare#backup}
  */
  readonly backup: BackupPolicyFileShareBackup[];
  /**
  * retention_daily block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_daily BackupPolicyFileShare#retention_daily}
  */
  readonly retentionDaily: BackupPolicyFileShareRetentionDaily[];
  /**
  * retention_monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_monthly BackupPolicyFileShare#retention_monthly}
  */
  readonly retentionMonthly?: BackupPolicyFileShareRetentionMonthly[];
  /**
  * retention_weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_weekly BackupPolicyFileShare#retention_weekly}
  */
  readonly retentionWeekly?: BackupPolicyFileShareRetentionWeekly[];
  /**
  * retention_yearly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_yearly BackupPolicyFileShare#retention_yearly}
  */
  readonly retentionYearly?: BackupPolicyFileShareRetentionYearly[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#timeouts BackupPolicyFileShare#timeouts}
  */
  readonly timeouts?: BackupPolicyFileShareTimeouts;
}
export interface BackupPolicyFileShareBackup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#frequency BackupPolicyFileShare#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#time BackupPolicyFileShare#time}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#count BackupPolicyFileShare#count}
  */
  readonly count: number;
}

function backupPolicyFileShareRetentionDailyToTerraform(struct?: BackupPolicyFileShareRetentionDaily): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface BackupPolicyFileShareRetentionMonthly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#count BackupPolicyFileShare#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#weekdays BackupPolicyFileShare#weekdays}
  */
  readonly weekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#weeks BackupPolicyFileShare#weeks}
  */
  readonly weeks: string[];
}

function backupPolicyFileShareRetentionMonthlyToTerraform(struct?: BackupPolicyFileShareRetentionMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeks),
  }
}

export interface BackupPolicyFileShareRetentionWeekly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#count BackupPolicyFileShare#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#weekdays BackupPolicyFileShare#weekdays}
  */
  readonly weekdays: string[];
}

function backupPolicyFileShareRetentionWeeklyToTerraform(struct?: BackupPolicyFileShareRetentionWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export interface BackupPolicyFileShareRetentionYearly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#count BackupPolicyFileShare#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#months BackupPolicyFileShare#months}
  */
  readonly months: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#weekdays BackupPolicyFileShare#weekdays}
  */
  readonly weekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#weeks BackupPolicyFileShare#weeks}
  */
  readonly weeks: string[];
}

function backupPolicyFileShareRetentionYearlyToTerraform(struct?: BackupPolicyFileShareRetentionYearly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    months: cdktf.listMapper(cdktf.stringToTerraform)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeks),
  }
}

export interface BackupPolicyFileShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#create BackupPolicyFileShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#delete BackupPolicyFileShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#read BackupPolicyFileShare#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#update BackupPolicyFileShare#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html azurerm_backup_policy_file_share}
*/
export class BackupPolicyFileShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_backup_policy_file_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html azurerm_backup_policy_file_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPolicyFileShareConfig
  */
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly?: BackupPolicyFileShareRetentionMonthly[];
  public get retentionMonthly() {
    return this.interpolationForAttribute('retention_monthly') as any;
  }
  public set retentionMonthly(value: BackupPolicyFileShareRetentionMonthly[] ) {
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
  private _retentionWeekly?: BackupPolicyFileShareRetentionWeekly[];
  public get retentionWeekly() {
    return this.interpolationForAttribute('retention_weekly') as any;
  }
  public set retentionWeekly(value: BackupPolicyFileShareRetentionWeekly[] ) {
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
  private _retentionYearly?: BackupPolicyFileShareRetentionYearly[];
  public get retentionYearly() {
    return this.interpolationForAttribute('retention_yearly') as any;
  }
  public set retentionYearly(value: BackupPolicyFileShareRetentionYearly[] ) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: cdktf.listMapper(backupPolicyFileShareBackupToTerraform)(this._backup),
      retention_daily: cdktf.listMapper(backupPolicyFileShareRetentionDailyToTerraform)(this._retentionDaily),
      retention_monthly: cdktf.listMapper(backupPolicyFileShareRetentionMonthlyToTerraform)(this._retentionMonthly),
      retention_weekly: cdktf.listMapper(backupPolicyFileShareRetentionWeeklyToTerraform)(this._retentionWeekly),
      retention_yearly: cdktf.listMapper(backupPolicyFileShareRetentionYearlyToTerraform)(this._retentionYearly),
      timeouts: backupPolicyFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
