// https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}
  */
  readonly instantRestoreRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#name BackupPolicyVm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#recovery_vault_name BackupPolicyVm#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#resource_group_name BackupPolicyVm#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#tags BackupPolicyVm#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#timezone BackupPolicyVm#timezone}
  */
  readonly timezone?: string;
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#backup BackupPolicyVm#backup}
  */
  readonly backup: BackupPolicyVmBackup;
  /**
  * retention_daily block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#retention_daily BackupPolicyVm#retention_daily}
  */
  readonly retentionDaily?: BackupPolicyVmRetentionDaily;
  /**
  * retention_monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#retention_monthly BackupPolicyVm#retention_monthly}
  */
  readonly retentionMonthly?: BackupPolicyVmRetentionMonthly;
  /**
  * retention_weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#retention_weekly BackupPolicyVm#retention_weekly}
  */
  readonly retentionWeekly?: BackupPolicyVmRetentionWeekly;
  /**
  * retention_yearly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#retention_yearly BackupPolicyVm#retention_yearly}
  */
  readonly retentionYearly?: BackupPolicyVmRetentionYearly;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#timeouts BackupPolicyVm#timeouts}
  */
  readonly timeouts?: BackupPolicyVmTimeouts;
}
export interface BackupPolicyVmBackup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#frequency BackupPolicyVm#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#time BackupPolicyVm#time}
  */
  readonly time: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays?: string[];
}

function backupPolicyVmBackupToTerraform(struct?: BackupPolicyVmBackupOutputReference | BackupPolicyVmBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    time: cdktf.stringToTerraform(struct!.time),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export class BackupPolicyVmBackupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[] | undefined; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[] | undefined) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays
  }
}
export interface BackupPolicyVmRetentionDaily {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#count BackupPolicyVm#count}
  */
  readonly count: number;
}

function backupPolicyVmRetentionDailyToTerraform(struct?: BackupPolicyVmRetentionDailyOutputReference | BackupPolicyVmRetentionDaily): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export class BackupPolicyVmRetentionDailyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }
}
export interface BackupPolicyVmRetentionMonthly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#count BackupPolicyVm#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#weeks BackupPolicyVm#weeks}
  */
  readonly weeks: string[];
}

function backupPolicyVmRetentionMonthlyToTerraform(struct?: BackupPolicyVmRetentionMonthlyOutputReference | BackupPolicyVmRetentionMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeks),
  }
}

export class BackupPolicyVmRetentionMonthlyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays
  }

  // weeks - computed: false, optional: false, required: true
  private _weeks?: string[]; 
  public get weeks() {
    return this.getListAttribute('weeks');
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks
  }
}
export interface BackupPolicyVmRetentionWeekly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#count BackupPolicyVm#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays: string[];
}

function backupPolicyVmRetentionWeeklyToTerraform(struct?: BackupPolicyVmRetentionWeeklyOutputReference | BackupPolicyVmRetentionWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export class BackupPolicyVmRetentionWeeklyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays
  }
}
export interface BackupPolicyVmRetentionYearly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#count BackupPolicyVm#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#months BackupPolicyVm#months}
  */
  readonly months: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#weekdays BackupPolicyVm#weekdays}
  */
  readonly weekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#weeks BackupPolicyVm#weeks}
  */
  readonly weeks: string[];
}

function backupPolicyVmRetentionYearlyToTerraform(struct?: BackupPolicyVmRetentionYearlyOutputReference | BackupPolicyVmRetentionYearly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    months: cdktf.listMapper(cdktf.stringToTerraform)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeks),
  }
}

export class BackupPolicyVmRetentionYearlyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // months - computed: false, optional: false, required: true
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays
  }

  // weeks - computed: false, optional: false, required: true
  private _weeks?: string[]; 
  public get weeks() {
    return this.getListAttribute('weeks');
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks
  }
}
export interface BackupPolicyVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#create BackupPolicyVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#delete BackupPolicyVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#read BackupPolicyVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html#update BackupPolicyVm#update}
  */
  readonly update?: string;
}

function backupPolicyVmTimeoutsToTerraform(struct?: BackupPolicyVmTimeoutsOutputReference | BackupPolicyVmTimeouts): any {
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

export class BackupPolicyVmTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html azurerm_backup_policy_vm}
*/
export class BackupPolicyVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_backup_policy_vm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html azurerm_backup_policy_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPolicyVmConfig
  */
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
  private _instantRestoreRetentionDays?: number | undefined; 
  public get instantRestoreRetentionDays() {
    return this.getNumberAttribute('instant_restore_retention_days');
  }
  public set instantRestoreRetentionDays(value: number | undefined) {
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _timezone?: string | undefined; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string | undefined) {
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
  private _backup?: BackupPolicyVmBackup; 
  private __backupOutput = new BackupPolicyVmBackupOutputReference(this as any, "backup", true);
  public get backup() {
    return this.__backupOutput;
  }
  public putBackup(value: BackupPolicyVmBackup) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // retention_daily - computed: false, optional: true, required: false
  private _retentionDaily?: BackupPolicyVmRetentionDaily | undefined; 
  private __retentionDailyOutput = new BackupPolicyVmRetentionDailyOutputReference(this as any, "retention_daily", true);
  public get retentionDaily() {
    return this.__retentionDailyOutput;
  }
  public putRetentionDaily(value: BackupPolicyVmRetentionDaily | undefined) {
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
  private _retentionMonthly?: BackupPolicyVmRetentionMonthly | undefined; 
  private __retentionMonthlyOutput = new BackupPolicyVmRetentionMonthlyOutputReference(this as any, "retention_monthly", true);
  public get retentionMonthly() {
    return this.__retentionMonthlyOutput;
  }
  public putRetentionMonthly(value: BackupPolicyVmRetentionMonthly | undefined) {
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
  private _retentionWeekly?: BackupPolicyVmRetentionWeekly | undefined; 
  private __retentionWeeklyOutput = new BackupPolicyVmRetentionWeeklyOutputReference(this as any, "retention_weekly", true);
  public get retentionWeekly() {
    return this.__retentionWeeklyOutput;
  }
  public putRetentionWeekly(value: BackupPolicyVmRetentionWeekly | undefined) {
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
  private _retentionYearly?: BackupPolicyVmRetentionYearly | undefined; 
  private __retentionYearlyOutput = new BackupPolicyVmRetentionYearlyOutputReference(this as any, "retention_yearly", true);
  public get retentionYearly() {
    return this.__retentionYearlyOutput;
  }
  public putRetentionYearly(value: BackupPolicyVmRetentionYearly | undefined) {
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
  private _timeouts?: BackupPolicyVmTimeouts | undefined; 
  private __timeoutsOutput = new BackupPolicyVmTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BackupPolicyVmTimeouts | undefined) {
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
      backup: backupPolicyVmBackupToTerraform(this._backup),
      retention_daily: backupPolicyVmRetentionDailyToTerraform(this._retentionDaily),
      retention_monthly: backupPolicyVmRetentionMonthlyToTerraform(this._retentionMonthly),
      retention_weekly: backupPolicyVmRetentionWeeklyToTerraform(this._retentionWeekly),
      retention_yearly: backupPolicyVmRetentionYearlyToTerraform(this._retentionYearly),
      timeouts: backupPolicyVmTimeoutsToTerraform(this._timeouts),
    };
  }
}
