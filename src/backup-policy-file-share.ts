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
  readonly backup: BackupPolicyFileShareBackup;
  /**
  * retention_daily block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_daily BackupPolicyFileShare#retention_daily}
  */
  readonly retentionDaily: BackupPolicyFileShareRetentionDaily;
  /**
  * retention_monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_monthly BackupPolicyFileShare#retention_monthly}
  */
  readonly retentionMonthly?: BackupPolicyFileShareRetentionMonthly;
  /**
  * retention_weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_weekly BackupPolicyFileShare#retention_weekly}
  */
  readonly retentionWeekly?: BackupPolicyFileShareRetentionWeekly;
  /**
  * retention_yearly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#retention_yearly BackupPolicyFileShare#retention_yearly}
  */
  readonly retentionYearly?: BackupPolicyFileShareRetentionYearly;
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

function backupPolicyFileShareBackupToTerraform(struct?: BackupPolicyFileShareBackupOutputReference | BackupPolicyFileShareBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export class BackupPolicyFileShareBackupOutputReference extends cdktf.ComplexObject {
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
}
export interface BackupPolicyFileShareRetentionDaily {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_policy_file_share.html#count BackupPolicyFileShare#count}
  */
  readonly count: number;
}

function backupPolicyFileShareRetentionDailyToTerraform(struct?: BackupPolicyFileShareRetentionDailyOutputReference | BackupPolicyFileShareRetentionDaily): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export class BackupPolicyFileShareRetentionDailyOutputReference extends cdktf.ComplexObject {
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

function backupPolicyFileShareRetentionMonthlyToTerraform(struct?: BackupPolicyFileShareRetentionMonthlyOutputReference | BackupPolicyFileShareRetentionMonthly): any {
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

export class BackupPolicyFileShareRetentionMonthlyOutputReference extends cdktf.ComplexObject {
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

function backupPolicyFileShareRetentionWeeklyToTerraform(struct?: BackupPolicyFileShareRetentionWeeklyOutputReference | BackupPolicyFileShareRetentionWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export class BackupPolicyFileShareRetentionWeeklyOutputReference extends cdktf.ComplexObject {
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

function backupPolicyFileShareRetentionYearlyToTerraform(struct?: BackupPolicyFileShareRetentionYearlyOutputReference | BackupPolicyFileShareRetentionYearly): any {
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

export class BackupPolicyFileShareRetentionYearlyOutputReference extends cdktf.ComplexObject {
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

function backupPolicyFileShareTimeoutsToTerraform(struct?: BackupPolicyFileShareTimeoutsOutputReference | BackupPolicyFileShareTimeouts): any {
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

export class BackupPolicyFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
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
  private _backup?: BackupPolicyFileShareBackup; 
  private __backupOutput = new BackupPolicyFileShareBackupOutputReference(this as any, "backup", true);
  public get backup() {
    return this.__backupOutput;
  }
  public putBackup(value: BackupPolicyFileShareBackup) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // retention_daily - computed: false, optional: false, required: true
  private _retentionDaily?: BackupPolicyFileShareRetentionDaily; 
  private __retentionDailyOutput = new BackupPolicyFileShareRetentionDailyOutputReference(this as any, "retention_daily", true);
  public get retentionDaily() {
    return this.__retentionDailyOutput;
  }
  public putRetentionDaily(value: BackupPolicyFileShareRetentionDaily) {
    this._retentionDaily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDailyInput() {
    return this._retentionDaily
  }

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly?: BackupPolicyFileShareRetentionMonthly | undefined; 
  private __retentionMonthlyOutput = new BackupPolicyFileShareRetentionMonthlyOutputReference(this as any, "retention_monthly", true);
  public get retentionMonthly() {
    return this.__retentionMonthlyOutput;
  }
  public putRetentionMonthly(value: BackupPolicyFileShareRetentionMonthly | undefined) {
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
  private _retentionWeekly?: BackupPolicyFileShareRetentionWeekly | undefined; 
  private __retentionWeeklyOutput = new BackupPolicyFileShareRetentionWeeklyOutputReference(this as any, "retention_weekly", true);
  public get retentionWeekly() {
    return this.__retentionWeeklyOutput;
  }
  public putRetentionWeekly(value: BackupPolicyFileShareRetentionWeekly | undefined) {
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
  private _retentionYearly?: BackupPolicyFileShareRetentionYearly | undefined; 
  private __retentionYearlyOutput = new BackupPolicyFileShareRetentionYearlyOutputReference(this as any, "retention_yearly", true);
  public get retentionYearly() {
    return this.__retentionYearlyOutput;
  }
  public putRetentionYearly(value: BackupPolicyFileShareRetentionYearly | undefined) {
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
  private _timeouts?: BackupPolicyFileShareTimeouts | undefined; 
  private __timeoutsOutput = new BackupPolicyFileShareTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BackupPolicyFileShareTimeouts | undefined) {
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
      backup: backupPolicyFileShareBackupToTerraform(this._backup),
      retention_daily: backupPolicyFileShareRetentionDailyToTerraform(this._retentionDaily),
      retention_monthly: backupPolicyFileShareRetentionMonthlyToTerraform(this._retentionMonthly),
      retention_weekly: backupPolicyFileShareRetentionWeeklyToTerraform(this._retentionWeekly),
      retention_yearly: backupPolicyFileShareRetentionYearlyToTerraform(this._retentionYearly),
      timeouts: backupPolicyFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
