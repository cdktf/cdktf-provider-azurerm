// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#id MssqlVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#r_services_enabled MssqlVirtualMachine#r_services_enabled}
  */
  readonly rServicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}
  */
  readonly sqlConnectivityPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}
  */
  readonly sqlConnectivityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}
  */
  readonly sqlConnectivityUpdatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}
  */
  readonly sqlConnectivityUpdateUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_license_type MssqlVirtualMachine#sql_license_type}
  */
  readonly sqlLicenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_virtual_machine_group_id MssqlVirtualMachine#sql_virtual_machine_group_id}
  */
  readonly sqlVirtualMachineGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#tags MssqlVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * assessment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#assessment MssqlVirtualMachine#assessment}
  */
  readonly assessment?: MssqlVirtualMachineAssessment;
  /**
  * auto_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#auto_backup MssqlVirtualMachine#auto_backup}
  */
  readonly autoBackup?: MssqlVirtualMachineAutoBackup;
  /**
  * auto_patching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#auto_patching MssqlVirtualMachine#auto_patching}
  */
  readonly autoPatching?: MssqlVirtualMachineAutoPatching;
  /**
  * key_vault_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#key_vault_credential MssqlVirtualMachine#key_vault_credential}
  */
  readonly keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential;
  /**
  * sql_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_instance MssqlVirtualMachine#sql_instance}
  */
  readonly sqlInstance?: MssqlVirtualMachineSqlInstance;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#storage_configuration MssqlVirtualMachine#storage_configuration}
  */
  readonly storageConfiguration?: MssqlVirtualMachineStorageConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#timeouts MssqlVirtualMachine#timeouts}
  */
  readonly timeouts?: MssqlVirtualMachineTimeouts;
  /**
  * wsfc_domain_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#wsfc_domain_credential MssqlVirtualMachine#wsfc_domain_credential}
  */
  readonly wsfcDomainCredential?: MssqlVirtualMachineWsfcDomainCredential;
}
export interface MssqlVirtualMachineAssessmentSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#monthly_occurrence MssqlVirtualMachine#monthly_occurrence}
  */
  readonly monthlyOccurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#start_time MssqlVirtualMachine#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#weekly_interval MssqlVirtualMachine#weekly_interval}
  */
  readonly weeklyInterval?: number;
}

export function mssqlVirtualMachineAssessmentScheduleToTerraform(struct?: MssqlVirtualMachineAssessmentScheduleOutputReference | MssqlVirtualMachineAssessmentSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    monthly_occurrence: cdktf.numberToTerraform(struct!.monthlyOccurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    weekly_interval: cdktf.numberToTerraform(struct!.weeklyInterval),
  }
}


export function mssqlVirtualMachineAssessmentScheduleToHclTerraform(struct?: MssqlVirtualMachineAssessmentScheduleOutputReference | MssqlVirtualMachineAssessmentSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_occurrence: {
      value: cdktf.numberToHclTerraform(struct!.monthlyOccurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_interval: {
      value: cdktf.numberToHclTerraform(struct!.weeklyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAssessmentScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineAssessmentSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._monthlyOccurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyOccurrence = this._monthlyOccurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._weeklyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyInterval = this._weeklyInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAssessmentSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._monthlyOccurrence = undefined;
      this._startTime = undefined;
      this._weeklyInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._monthlyOccurrence = value.monthlyOccurrence;
      this._startTime = value.startTime;
      this._weeklyInterval = value.weeklyInterval;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // monthly_occurrence - computed: false, optional: true, required: false
  private _monthlyOccurrence?: number; 
  public get monthlyOccurrence() {
    return this.getNumberAttribute('monthly_occurrence');
  }
  public set monthlyOccurrence(value: number) {
    this._monthlyOccurrence = value;
  }
  public resetMonthlyOccurrence() {
    this._monthlyOccurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyOccurrenceInput() {
    return this._monthlyOccurrence;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // weekly_interval - computed: false, optional: true, required: false
  private _weeklyInterval?: number; 
  public get weeklyInterval() {
    return this.getNumberAttribute('weekly_interval');
  }
  public set weeklyInterval(value: number) {
    this._weeklyInterval = value;
  }
  public resetWeeklyInterval() {
    this._weeklyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyIntervalInput() {
    return this._weeklyInterval;
  }
}
export interface MssqlVirtualMachineAssessment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#enabled MssqlVirtualMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#run_immediately MssqlVirtualMachine#run_immediately}
  */
  readonly runImmediately?: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#schedule MssqlVirtualMachine#schedule}
  */
  readonly schedule?: MssqlVirtualMachineAssessmentSchedule;
}

export function mssqlVirtualMachineAssessmentToTerraform(struct?: MssqlVirtualMachineAssessmentOutputReference | MssqlVirtualMachineAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    run_immediately: cdktf.booleanToTerraform(struct!.runImmediately),
    schedule: mssqlVirtualMachineAssessmentScheduleToTerraform(struct!.schedule),
  }
}


export function mssqlVirtualMachineAssessmentToHclTerraform(struct?: MssqlVirtualMachineAssessmentOutputReference | MssqlVirtualMachineAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_immediately: {
      value: cdktf.booleanToHclTerraform(struct!.runImmediately),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: mssqlVirtualMachineAssessmentScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "MssqlVirtualMachineAssessmentScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineAssessment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._runImmediately !== undefined) {
      hasAnyValues = true;
      internalValueResult.runImmediately = this._runImmediately;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAssessment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._runImmediately = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._runImmediately = value.runImmediately;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // run_immediately - computed: false, optional: true, required: false
  private _runImmediately?: boolean | cdktf.IResolvable; 
  public get runImmediately() {
    return this.getBooleanAttribute('run_immediately');
  }
  public set runImmediately(value: boolean | cdktf.IResolvable) {
    this._runImmediately = value;
  }
  public resetRunImmediately() {
    this._runImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runImmediatelyInput() {
    return this._runImmediately;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new MssqlVirtualMachineAssessmentScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: MssqlVirtualMachineAssessmentSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface MssqlVirtualMachineAutoBackupManualSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#days_of_week MssqlVirtualMachine#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}
  */
  readonly fullBackupFrequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}
  */
  readonly fullBackupStartHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}
  */
  readonly fullBackupWindowInHours: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}
  */
  readonly logBackupFrequencyInMinutes: number;
}

export function mssqlVirtualMachineAutoBackupManualScheduleToTerraform(struct?: MssqlVirtualMachineAutoBackupManualScheduleOutputReference | MssqlVirtualMachineAutoBackupManualSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    full_backup_frequency: cdktf.stringToTerraform(struct!.fullBackupFrequency),
    full_backup_start_hour: cdktf.numberToTerraform(struct!.fullBackupStartHour),
    full_backup_window_in_hours: cdktf.numberToTerraform(struct!.fullBackupWindowInHours),
    log_backup_frequency_in_minutes: cdktf.numberToTerraform(struct!.logBackupFrequencyInMinutes),
  }
}


export function mssqlVirtualMachineAutoBackupManualScheduleToHclTerraform(struct?: MssqlVirtualMachineAutoBackupManualScheduleOutputReference | MssqlVirtualMachineAutoBackupManualSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    full_backup_frequency: {
      value: cdktf.stringToHclTerraform(struct!.fullBackupFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_backup_start_hour: {
      value: cdktf.numberToHclTerraform(struct!.fullBackupStartHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_backup_window_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.fullBackupWindowInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_backup_frequency_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.logBackupFrequencyInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAutoBackupManualScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineAutoBackupManualSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._fullBackupFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupFrequency = this._fullBackupFrequency;
    }
    if (this._fullBackupStartHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupStartHour = this._fullBackupStartHour;
    }
    if (this._fullBackupWindowInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupWindowInHours = this._fullBackupWindowInHours;
    }
    if (this._logBackupFrequencyInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBackupFrequencyInMinutes = this._logBackupFrequencyInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAutoBackupManualSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._fullBackupFrequency = undefined;
      this._fullBackupStartHour = undefined;
      this._fullBackupWindowInHours = undefined;
      this._logBackupFrequencyInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._fullBackupFrequency = value.fullBackupFrequency;
      this._fullBackupStartHour = value.fullBackupStartHour;
      this._fullBackupWindowInHours = value.fullBackupWindowInHours;
      this._logBackupFrequencyInMinutes = value.logBackupFrequencyInMinutes;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // full_backup_frequency - computed: false, optional: false, required: true
  private _fullBackupFrequency?: string; 
  public get fullBackupFrequency() {
    return this.getStringAttribute('full_backup_frequency');
  }
  public set fullBackupFrequency(value: string) {
    this._fullBackupFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupFrequencyInput() {
    return this._fullBackupFrequency;
  }

  // full_backup_start_hour - computed: false, optional: false, required: true
  private _fullBackupStartHour?: number; 
  public get fullBackupStartHour() {
    return this.getNumberAttribute('full_backup_start_hour');
  }
  public set fullBackupStartHour(value: number) {
    this._fullBackupStartHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupStartHourInput() {
    return this._fullBackupStartHour;
  }

  // full_backup_window_in_hours - computed: false, optional: false, required: true
  private _fullBackupWindowInHours?: number; 
  public get fullBackupWindowInHours() {
    return this.getNumberAttribute('full_backup_window_in_hours');
  }
  public set fullBackupWindowInHours(value: number) {
    this._fullBackupWindowInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupWindowInHoursInput() {
    return this._fullBackupWindowInHours;
  }

  // log_backup_frequency_in_minutes - computed: false, optional: false, required: true
  private _logBackupFrequencyInMinutes?: number; 
  public get logBackupFrequencyInMinutes() {
    return this.getNumberAttribute('log_backup_frequency_in_minutes');
  }
  public set logBackupFrequencyInMinutes(value: number) {
    this._logBackupFrequencyInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupFrequencyInMinutesInput() {
    return this._logBackupFrequencyInMinutes;
  }
}
export interface MssqlVirtualMachineAutoBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#encryption_enabled MssqlVirtualMachine#encryption_enabled}
  */
  readonly encryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#encryption_password MssqlVirtualMachine#encryption_password}
  */
  readonly encryptionPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}
  */
  readonly retentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}
  */
  readonly storageAccountAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}
  */
  readonly storageBlobEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}
  */
  readonly systemDatabasesBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * manual_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#manual_schedule MssqlVirtualMachine#manual_schedule}
  */
  readonly manualSchedule?: MssqlVirtualMachineAutoBackupManualSchedule;
}

export function mssqlVirtualMachineAutoBackupToTerraform(struct?: MssqlVirtualMachineAutoBackupOutputReference | MssqlVirtualMachineAutoBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_enabled: cdktf.booleanToTerraform(struct!.encryptionEnabled),
    encryption_password: cdktf.stringToTerraform(struct!.encryptionPassword),
    retention_period_in_days: cdktf.numberToTerraform(struct!.retentionPeriodInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_blob_endpoint: cdktf.stringToTerraform(struct!.storageBlobEndpoint),
    system_databases_backup_enabled: cdktf.booleanToTerraform(struct!.systemDatabasesBackupEnabled),
    manual_schedule: mssqlVirtualMachineAutoBackupManualScheduleToTerraform(struct!.manualSchedule),
  }
}


export function mssqlVirtualMachineAutoBackupToHclTerraform(struct?: MssqlVirtualMachineAutoBackupOutputReference | MssqlVirtualMachineAutoBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptionPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_account_access_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_blob_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.storageBlobEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_databases_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.systemDatabasesBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_schedule: {
      value: mssqlVirtualMachineAutoBackupManualScheduleToHclTerraform(struct!.manualSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "MssqlVirtualMachineAutoBackupManualScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAutoBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineAutoBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionEnabled = this._encryptionEnabled;
    }
    if (this._encryptionPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionPassword = this._encryptionPassword;
    }
    if (this._retentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodInDays = this._retentionPeriodInDays;
    }
    if (this._storageAccountAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountAccessKey = this._storageAccountAccessKey;
    }
    if (this._storageBlobEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBlobEndpoint = this._storageBlobEndpoint;
    }
    if (this._systemDatabasesBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDatabasesBackupEnabled = this._systemDatabasesBackupEnabled;
    }
    if (this._manualSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSchedule = this._manualSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAutoBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionEnabled = undefined;
      this._encryptionPassword = undefined;
      this._retentionPeriodInDays = undefined;
      this._storageAccountAccessKey = undefined;
      this._storageBlobEndpoint = undefined;
      this._systemDatabasesBackupEnabled = undefined;
      this._manualSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionEnabled = value.encryptionEnabled;
      this._encryptionPassword = value.encryptionPassword;
      this._retentionPeriodInDays = value.retentionPeriodInDays;
      this._storageAccountAccessKey = value.storageAccountAccessKey;
      this._storageBlobEndpoint = value.storageBlobEndpoint;
      this._systemDatabasesBackupEnabled = value.systemDatabasesBackupEnabled;
      this._manualSchedule.internalValue = value.manualSchedule;
    }
  }

  // encryption_enabled - computed: false, optional: true, required: false
  private _encryptionEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }
  public set encryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionEnabled = value;
  }
  public resetEncryptionEnabled() {
    this._encryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEnabledInput() {
    return this._encryptionEnabled;
  }

  // encryption_password - computed: false, optional: true, required: false
  private _encryptionPassword?: string; 
  public get encryptionPassword() {
    return this.getStringAttribute('encryption_password');
  }
  public set encryptionPassword(value: string) {
    this._encryptionPassword = value;
  }
  public resetEncryptionPassword() {
    this._encryptionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPasswordInput() {
    return this._encryptionPassword;
  }

  // retention_period_in_days - computed: false, optional: false, required: true
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays;
  }

  // storage_account_access_key - computed: false, optional: false, required: true
  private _storageAccountAccessKey?: string; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey;
  }

  // storage_blob_endpoint - computed: false, optional: false, required: true
  private _storageBlobEndpoint?: string; 
  public get storageBlobEndpoint() {
    return this.getStringAttribute('storage_blob_endpoint');
  }
  public set storageBlobEndpoint(value: string) {
    this._storageBlobEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobEndpointInput() {
    return this._storageBlobEndpoint;
  }

  // system_databases_backup_enabled - computed: false, optional: true, required: false
  private _systemDatabasesBackupEnabled?: boolean | cdktf.IResolvable; 
  public get systemDatabasesBackupEnabled() {
    return this.getBooleanAttribute('system_databases_backup_enabled');
  }
  public set systemDatabasesBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._systemDatabasesBackupEnabled = value;
  }
  public resetSystemDatabasesBackupEnabled() {
    this._systemDatabasesBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDatabasesBackupEnabledInput() {
    return this._systemDatabasesBackupEnabled;
  }

  // manual_schedule - computed: false, optional: true, required: false
  private _manualSchedule = new MssqlVirtualMachineAutoBackupManualScheduleOutputReference(this, "manual_schedule");
  public get manualSchedule() {
    return this._manualSchedule;
  }
  public putManualSchedule(value: MssqlVirtualMachineAutoBackupManualSchedule) {
    this._manualSchedule.internalValue = value;
  }
  public resetManualSchedule() {
    this._manualSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualScheduleInput() {
    return this._manualSchedule.internalValue;
  }
}
export interface MssqlVirtualMachineAutoPatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}
  */
  readonly maintenanceWindowDurationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}
  */
  readonly maintenanceWindowStartingHour: number;
}

export function mssqlVirtualMachineAutoPatchingToTerraform(struct?: MssqlVirtualMachineAutoPatchingOutputReference | MssqlVirtualMachineAutoPatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    maintenance_window_duration_in_minutes: cdktf.numberToTerraform(struct!.maintenanceWindowDurationInMinutes),
    maintenance_window_starting_hour: cdktf.numberToTerraform(struct!.maintenanceWindowStartingHour),
  }
}


export function mssqlVirtualMachineAutoPatchingToHclTerraform(struct?: MssqlVirtualMachineAutoPatchingOutputReference | MssqlVirtualMachineAutoPatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.maintenanceWindowDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance_window_starting_hour: {
      value: cdktf.numberToHclTerraform(struct!.maintenanceWindowStartingHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAutoPatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineAutoPatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._maintenanceWindowDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowDurationInMinutes = this._maintenanceWindowDurationInMinutes;
    }
    if (this._maintenanceWindowStartingHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowStartingHour = this._maintenanceWindowStartingHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAutoPatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._maintenanceWindowDurationInMinutes = undefined;
      this._maintenanceWindowStartingHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._maintenanceWindowDurationInMinutes = value.maintenanceWindowDurationInMinutes;
      this._maintenanceWindowStartingHour = value.maintenanceWindowStartingHour;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // maintenance_window_duration_in_minutes - computed: false, optional: false, required: true
  private _maintenanceWindowDurationInMinutes?: number; 
  public get maintenanceWindowDurationInMinutes() {
    return this.getNumberAttribute('maintenance_window_duration_in_minutes');
  }
  public set maintenanceWindowDurationInMinutes(value: number) {
    this._maintenanceWindowDurationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDurationInMinutesInput() {
    return this._maintenanceWindowDurationInMinutes;
  }

  // maintenance_window_starting_hour - computed: false, optional: false, required: true
  private _maintenanceWindowStartingHour?: number; 
  public get maintenanceWindowStartingHour() {
    return this.getNumberAttribute('maintenance_window_starting_hour');
  }
  public set maintenanceWindowStartingHour(value: number) {
    this._maintenanceWindowStartingHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartingHourInput() {
    return this._maintenanceWindowStartingHour;
  }
}
export interface MssqlVirtualMachineKeyVaultCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#key_vault_url MssqlVirtualMachine#key_vault_url}
  */
  readonly keyVaultUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#name MssqlVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#service_principal_name MssqlVirtualMachine#service_principal_name}
  */
  readonly servicePrincipalName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#service_principal_secret MssqlVirtualMachine#service_principal_secret}
  */
  readonly servicePrincipalSecret: string;
}

export function mssqlVirtualMachineKeyVaultCredentialToTerraform(struct?: MssqlVirtualMachineKeyVaultCredentialOutputReference | MssqlVirtualMachineKeyVaultCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_url: cdktf.stringToTerraform(struct!.keyVaultUrl),
    name: cdktf.stringToTerraform(struct!.name),
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
    service_principal_secret: cdktf.stringToTerraform(struct!.servicePrincipalSecret),
  }
}


export function mssqlVirtualMachineKeyVaultCredentialToHclTerraform(struct?: MssqlVirtualMachineKeyVaultCredentialOutputReference | MssqlVirtualMachineKeyVaultCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_url: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_secret: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineKeyVaultCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineKeyVaultCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultUrl = this._keyVaultUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    if (this._servicePrincipalSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalSecret = this._servicePrincipalSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineKeyVaultCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultUrl = undefined;
      this._name = undefined;
      this._servicePrincipalName = undefined;
      this._servicePrincipalSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultUrl = value.keyVaultUrl;
      this._name = value.name;
      this._servicePrincipalName = value.servicePrincipalName;
      this._servicePrincipalSecret = value.servicePrincipalSecret;
    }
  }

  // key_vault_url - computed: false, optional: false, required: true
  private _keyVaultUrl?: string; 
  public get keyVaultUrl() {
    return this.getStringAttribute('key_vault_url');
  }
  public set keyVaultUrl(value: string) {
    this._keyVaultUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultUrlInput() {
    return this._keyVaultUrl;
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
    return this._name;
  }

  // service_principal_name - computed: false, optional: false, required: true
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
  }

  // service_principal_secret - computed: false, optional: false, required: true
  private _servicePrincipalSecret?: string; 
  public get servicePrincipalSecret() {
    return this.getStringAttribute('service_principal_secret');
  }
  public set servicePrincipalSecret(value: string) {
    this._servicePrincipalSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalSecretInput() {
    return this._servicePrincipalSecret;
  }
}
export interface MssqlVirtualMachineSqlInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#adhoc_workloads_optimization_enabled MssqlVirtualMachine#adhoc_workloads_optimization_enabled}
  */
  readonly adhocWorkloadsOptimizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#collation MssqlVirtualMachine#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#instant_file_initialization_enabled MssqlVirtualMachine#instant_file_initialization_enabled}
  */
  readonly instantFileInitializationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#lock_pages_in_memory_enabled MssqlVirtualMachine#lock_pages_in_memory_enabled}
  */
  readonly lockPagesInMemoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#max_dop MssqlVirtualMachine#max_dop}
  */
  readonly maxDop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#max_server_memory_mb MssqlVirtualMachine#max_server_memory_mb}
  */
  readonly maxServerMemoryMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#min_server_memory_mb MssqlVirtualMachine#min_server_memory_mb}
  */
  readonly minServerMemoryMb?: number;
}

export function mssqlVirtualMachineSqlInstanceToTerraform(struct?: MssqlVirtualMachineSqlInstanceOutputReference | MssqlVirtualMachineSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adhoc_workloads_optimization_enabled: cdktf.booleanToTerraform(struct!.adhocWorkloadsOptimizationEnabled),
    collation: cdktf.stringToTerraform(struct!.collation),
    instant_file_initialization_enabled: cdktf.booleanToTerraform(struct!.instantFileInitializationEnabled),
    lock_pages_in_memory_enabled: cdktf.booleanToTerraform(struct!.lockPagesInMemoryEnabled),
    max_dop: cdktf.numberToTerraform(struct!.maxDop),
    max_server_memory_mb: cdktf.numberToTerraform(struct!.maxServerMemoryMb),
    min_server_memory_mb: cdktf.numberToTerraform(struct!.minServerMemoryMb),
  }
}


export function mssqlVirtualMachineSqlInstanceToHclTerraform(struct?: MssqlVirtualMachineSqlInstanceOutputReference | MssqlVirtualMachineSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adhoc_workloads_optimization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.adhocWorkloadsOptimizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instant_file_initialization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.instantFileInitializationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lock_pages_in_memory_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.lockPagesInMemoryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_dop: {
      value: cdktf.numberToHclTerraform(struct!.maxDop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_server_memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.maxServerMemoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_server_memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.minServerMemoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineSqlInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineSqlInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adhocWorkloadsOptimizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adhocWorkloadsOptimizationEnabled = this._adhocWorkloadsOptimizationEnabled;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._instantFileInitializationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantFileInitializationEnabled = this._instantFileInitializationEnabled;
    }
    if (this._lockPagesInMemoryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockPagesInMemoryEnabled = this._lockPagesInMemoryEnabled;
    }
    if (this._maxDop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDop = this._maxDop;
    }
    if (this._maxServerMemoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxServerMemoryMb = this._maxServerMemoryMb;
    }
    if (this._minServerMemoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minServerMemoryMb = this._minServerMemoryMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineSqlInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adhocWorkloadsOptimizationEnabled = undefined;
      this._collation = undefined;
      this._instantFileInitializationEnabled = undefined;
      this._lockPagesInMemoryEnabled = undefined;
      this._maxDop = undefined;
      this._maxServerMemoryMb = undefined;
      this._minServerMemoryMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adhocWorkloadsOptimizationEnabled = value.adhocWorkloadsOptimizationEnabled;
      this._collation = value.collation;
      this._instantFileInitializationEnabled = value.instantFileInitializationEnabled;
      this._lockPagesInMemoryEnabled = value.lockPagesInMemoryEnabled;
      this._maxDop = value.maxDop;
      this._maxServerMemoryMb = value.maxServerMemoryMb;
      this._minServerMemoryMb = value.minServerMemoryMb;
    }
  }

  // adhoc_workloads_optimization_enabled - computed: false, optional: true, required: false
  private _adhocWorkloadsOptimizationEnabled?: boolean | cdktf.IResolvable; 
  public get adhocWorkloadsOptimizationEnabled() {
    return this.getBooleanAttribute('adhoc_workloads_optimization_enabled');
  }
  public set adhocWorkloadsOptimizationEnabled(value: boolean | cdktf.IResolvable) {
    this._adhocWorkloadsOptimizationEnabled = value;
  }
  public resetAdhocWorkloadsOptimizationEnabled() {
    this._adhocWorkloadsOptimizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocWorkloadsOptimizationEnabledInput() {
    return this._adhocWorkloadsOptimizationEnabled;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // instant_file_initialization_enabled - computed: false, optional: true, required: false
  private _instantFileInitializationEnabled?: boolean | cdktf.IResolvable; 
  public get instantFileInitializationEnabled() {
    return this.getBooleanAttribute('instant_file_initialization_enabled');
  }
  public set instantFileInitializationEnabled(value: boolean | cdktf.IResolvable) {
    this._instantFileInitializationEnabled = value;
  }
  public resetInstantFileInitializationEnabled() {
    this._instantFileInitializationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantFileInitializationEnabledInput() {
    return this._instantFileInitializationEnabled;
  }

  // lock_pages_in_memory_enabled - computed: false, optional: true, required: false
  private _lockPagesInMemoryEnabled?: boolean | cdktf.IResolvable; 
  public get lockPagesInMemoryEnabled() {
    return this.getBooleanAttribute('lock_pages_in_memory_enabled');
  }
  public set lockPagesInMemoryEnabled(value: boolean | cdktf.IResolvable) {
    this._lockPagesInMemoryEnabled = value;
  }
  public resetLockPagesInMemoryEnabled() {
    this._lockPagesInMemoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockPagesInMemoryEnabledInput() {
    return this._lockPagesInMemoryEnabled;
  }

  // max_dop - computed: false, optional: true, required: false
  private _maxDop?: number; 
  public get maxDop() {
    return this.getNumberAttribute('max_dop');
  }
  public set maxDop(value: number) {
    this._maxDop = value;
  }
  public resetMaxDop() {
    this._maxDop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDopInput() {
    return this._maxDop;
  }

  // max_server_memory_mb - computed: false, optional: true, required: false
  private _maxServerMemoryMb?: number; 
  public get maxServerMemoryMb() {
    return this.getNumberAttribute('max_server_memory_mb');
  }
  public set maxServerMemoryMb(value: number) {
    this._maxServerMemoryMb = value;
  }
  public resetMaxServerMemoryMb() {
    this._maxServerMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServerMemoryMbInput() {
    return this._maxServerMemoryMb;
  }

  // min_server_memory_mb - computed: false, optional: true, required: false
  private _minServerMemoryMb?: number; 
  public get minServerMemoryMb() {
    return this.getNumberAttribute('min_server_memory_mb');
  }
  public set minServerMemoryMb(value: number) {
    this._minServerMemoryMb = value;
  }
  public resetMinServerMemoryMb() {
    this._minServerMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minServerMemoryMbInput() {
    return this._minServerMemoryMb;
  }
}
export interface MssqlVirtualMachineStorageConfigurationDataSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

export function mssqlVirtualMachineStorageConfigurationDataSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference | MssqlVirtualMachineStorageConfigurationDataSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.luns),
  }
}


export function mssqlVirtualMachineStorageConfigurationDataSettingsToHclTerraform(struct?: MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference | MssqlVirtualMachineStorageConfigurationDataSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_file_path: {
      value: cdktf.stringToHclTerraform(struct!.defaultFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    luns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.luns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineStorageConfigurationDataSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFilePath = this._defaultFilePath;
    }
    if (this._luns !== undefined) {
      hasAnyValues = true;
      internalValueResult.luns = this._luns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineStorageConfigurationDataSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultFilePath = undefined;
      this._luns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultFilePath = value.defaultFilePath;
      this._luns = value.luns;
    }
  }

  // default_file_path - computed: false, optional: false, required: true
  private _defaultFilePath?: string; 
  public get defaultFilePath() {
    return this.getStringAttribute('default_file_path');
  }
  public set defaultFilePath(value: string) {
    this._defaultFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFilePathInput() {
    return this._defaultFilePath;
  }

  // luns - computed: false, optional: false, required: true
  private _luns?: number[]; 
  public get luns() {
    return this.getNumberListAttribute('luns');
  }
  public set luns(value: number[]) {
    this._luns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunsInput() {
    return this._luns;
  }
}
export interface MssqlVirtualMachineStorageConfigurationLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

export function mssqlVirtualMachineStorageConfigurationLogSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference | MssqlVirtualMachineStorageConfigurationLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.luns),
  }
}


export function mssqlVirtualMachineStorageConfigurationLogSettingsToHclTerraform(struct?: MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference | MssqlVirtualMachineStorageConfigurationLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_file_path: {
      value: cdktf.stringToHclTerraform(struct!.defaultFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    luns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.luns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineStorageConfigurationLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFilePath = this._defaultFilePath;
    }
    if (this._luns !== undefined) {
      hasAnyValues = true;
      internalValueResult.luns = this._luns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineStorageConfigurationLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultFilePath = undefined;
      this._luns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultFilePath = value.defaultFilePath;
      this._luns = value.luns;
    }
  }

  // default_file_path - computed: false, optional: false, required: true
  private _defaultFilePath?: string; 
  public get defaultFilePath() {
    return this.getStringAttribute('default_file_path');
  }
  public set defaultFilePath(value: string) {
    this._defaultFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFilePathInput() {
    return this._defaultFilePath;
  }

  // luns - computed: false, optional: false, required: true
  private _luns?: number[]; 
  public get luns() {
    return this.getNumberListAttribute('luns');
  }
  public set luns(value: number[]) {
    this._luns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunsInput() {
    return this._luns;
  }
}
export interface MssqlVirtualMachineStorageConfigurationTempDbSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#data_file_count MssqlVirtualMachine#data_file_count}
  */
  readonly dataFileCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#data_file_growth_in_mb MssqlVirtualMachine#data_file_growth_in_mb}
  */
  readonly dataFileGrowthInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#data_file_size_mb MssqlVirtualMachine#data_file_size_mb}
  */
  readonly dataFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#log_file_growth_mb MssqlVirtualMachine#log_file_growth_mb}
  */
  readonly logFileGrowthMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#log_file_size_mb MssqlVirtualMachine#log_file_size_mb}
  */
  readonly logFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

export function mssqlVirtualMachineStorageConfigurationTempDbSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference | MssqlVirtualMachineStorageConfigurationTempDbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_file_count: cdktf.numberToTerraform(struct!.dataFileCount),
    data_file_growth_in_mb: cdktf.numberToTerraform(struct!.dataFileGrowthInMb),
    data_file_size_mb: cdktf.numberToTerraform(struct!.dataFileSizeMb),
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    log_file_growth_mb: cdktf.numberToTerraform(struct!.logFileGrowthMb),
    log_file_size_mb: cdktf.numberToTerraform(struct!.logFileSizeMb),
    luns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.luns),
  }
}


export function mssqlVirtualMachineStorageConfigurationTempDbSettingsToHclTerraform(struct?: MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference | MssqlVirtualMachineStorageConfigurationTempDbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_file_count: {
      value: cdktf.numberToHclTerraform(struct!.dataFileCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_file_growth_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.dataFileGrowthInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.dataFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_file_path: {
      value: cdktf.stringToHclTerraform(struct!.defaultFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_file_growth_mb: {
      value: cdktf.numberToHclTerraform(struct!.logFileGrowthMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.logFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    luns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.luns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineStorageConfigurationTempDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFileCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFileCount = this._dataFileCount;
    }
    if (this._dataFileGrowthInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFileGrowthInMb = this._dataFileGrowthInMb;
    }
    if (this._dataFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFileSizeMb = this._dataFileSizeMb;
    }
    if (this._defaultFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFilePath = this._defaultFilePath;
    }
    if (this._logFileGrowthMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFileGrowthMb = this._logFileGrowthMb;
    }
    if (this._logFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFileSizeMb = this._logFileSizeMb;
    }
    if (this._luns !== undefined) {
      hasAnyValues = true;
      internalValueResult.luns = this._luns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineStorageConfigurationTempDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFileCount = undefined;
      this._dataFileGrowthInMb = undefined;
      this._dataFileSizeMb = undefined;
      this._defaultFilePath = undefined;
      this._logFileGrowthMb = undefined;
      this._logFileSizeMb = undefined;
      this._luns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFileCount = value.dataFileCount;
      this._dataFileGrowthInMb = value.dataFileGrowthInMb;
      this._dataFileSizeMb = value.dataFileSizeMb;
      this._defaultFilePath = value.defaultFilePath;
      this._logFileGrowthMb = value.logFileGrowthMb;
      this._logFileSizeMb = value.logFileSizeMb;
      this._luns = value.luns;
    }
  }

  // data_file_count - computed: false, optional: true, required: false
  private _dataFileCount?: number; 
  public get dataFileCount() {
    return this.getNumberAttribute('data_file_count');
  }
  public set dataFileCount(value: number) {
    this._dataFileCount = value;
  }
  public resetDataFileCount() {
    this._dataFileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFileCountInput() {
    return this._dataFileCount;
  }

  // data_file_growth_in_mb - computed: false, optional: true, required: false
  private _dataFileGrowthInMb?: number; 
  public get dataFileGrowthInMb() {
    return this.getNumberAttribute('data_file_growth_in_mb');
  }
  public set dataFileGrowthInMb(value: number) {
    this._dataFileGrowthInMb = value;
  }
  public resetDataFileGrowthInMb() {
    this._dataFileGrowthInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFileGrowthInMbInput() {
    return this._dataFileGrowthInMb;
  }

  // data_file_size_mb - computed: false, optional: true, required: false
  private _dataFileSizeMb?: number; 
  public get dataFileSizeMb() {
    return this.getNumberAttribute('data_file_size_mb');
  }
  public set dataFileSizeMb(value: number) {
    this._dataFileSizeMb = value;
  }
  public resetDataFileSizeMb() {
    this._dataFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFileSizeMbInput() {
    return this._dataFileSizeMb;
  }

  // default_file_path - computed: false, optional: false, required: true
  private _defaultFilePath?: string; 
  public get defaultFilePath() {
    return this.getStringAttribute('default_file_path');
  }
  public set defaultFilePath(value: string) {
    this._defaultFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFilePathInput() {
    return this._defaultFilePath;
  }

  // log_file_growth_mb - computed: false, optional: true, required: false
  private _logFileGrowthMb?: number; 
  public get logFileGrowthMb() {
    return this.getNumberAttribute('log_file_growth_mb');
  }
  public set logFileGrowthMb(value: number) {
    this._logFileGrowthMb = value;
  }
  public resetLogFileGrowthMb() {
    this._logFileGrowthMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileGrowthMbInput() {
    return this._logFileGrowthMb;
  }

  // log_file_size_mb - computed: false, optional: true, required: false
  private _logFileSizeMb?: number; 
  public get logFileSizeMb() {
    return this.getNumberAttribute('log_file_size_mb');
  }
  public set logFileSizeMb(value: number) {
    this._logFileSizeMb = value;
  }
  public resetLogFileSizeMb() {
    this._logFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileSizeMbInput() {
    return this._logFileSizeMb;
  }

  // luns - computed: false, optional: false, required: true
  private _luns?: number[]; 
  public get luns() {
    return this.getNumberListAttribute('luns');
  }
  public set luns(value: number[]) {
    this._luns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunsInput() {
    return this._luns;
  }
}
export interface MssqlVirtualMachineStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#disk_type MssqlVirtualMachine#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#storage_workload_type MssqlVirtualMachine#storage_workload_type}
  */
  readonly storageWorkloadType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#system_db_on_data_disk_enabled MssqlVirtualMachine#system_db_on_data_disk_enabled}
  */
  readonly systemDbOnDataDiskEnabled?: boolean | cdktf.IResolvable;
  /**
  * data_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#data_settings MssqlVirtualMachine#data_settings}
  */
  readonly dataSettings?: MssqlVirtualMachineStorageConfigurationDataSettings;
  /**
  * log_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#log_settings MssqlVirtualMachine#log_settings}
  */
  readonly logSettings?: MssqlVirtualMachineStorageConfigurationLogSettings;
  /**
  * temp_db_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#temp_db_settings MssqlVirtualMachine#temp_db_settings}
  */
  readonly tempDbSettings?: MssqlVirtualMachineStorageConfigurationTempDbSettings;
}

export function mssqlVirtualMachineStorageConfigurationToTerraform(struct?: MssqlVirtualMachineStorageConfigurationOutputReference | MssqlVirtualMachineStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    storage_workload_type: cdktf.stringToTerraform(struct!.storageWorkloadType),
    system_db_on_data_disk_enabled: cdktf.booleanToTerraform(struct!.systemDbOnDataDiskEnabled),
    data_settings: mssqlVirtualMachineStorageConfigurationDataSettingsToTerraform(struct!.dataSettings),
    log_settings: mssqlVirtualMachineStorageConfigurationLogSettingsToTerraform(struct!.logSettings),
    temp_db_settings: mssqlVirtualMachineStorageConfigurationTempDbSettingsToTerraform(struct!.tempDbSettings),
  }
}


export function mssqlVirtualMachineStorageConfigurationToHclTerraform(struct?: MssqlVirtualMachineStorageConfigurationOutputReference | MssqlVirtualMachineStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_workload_type: {
      value: cdktf.stringToHclTerraform(struct!.storageWorkloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_db_on_data_disk_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.systemDbOnDataDiskEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_settings: {
      value: mssqlVirtualMachineStorageConfigurationDataSettingsToHclTerraform(struct!.dataSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MssqlVirtualMachineStorageConfigurationDataSettingsList",
    },
    log_settings: {
      value: mssqlVirtualMachineStorageConfigurationLogSettingsToHclTerraform(struct!.logSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MssqlVirtualMachineStorageConfigurationLogSettingsList",
    },
    temp_db_settings: {
      value: mssqlVirtualMachineStorageConfigurationTempDbSettingsToHclTerraform(struct!.tempDbSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MssqlVirtualMachineStorageConfigurationTempDbSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineStorageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._storageWorkloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageWorkloadType = this._storageWorkloadType;
    }
    if (this._systemDbOnDataDiskEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDbOnDataDiskEnabled = this._systemDbOnDataDiskEnabled;
    }
    if (this._dataSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSettings = this._dataSettings?.internalValue;
    }
    if (this._logSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSettings = this._logSettings?.internalValue;
    }
    if (this._tempDbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempDbSettings = this._tempDbSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._storageWorkloadType = undefined;
      this._systemDbOnDataDiskEnabled = undefined;
      this._dataSettings.internalValue = undefined;
      this._logSettings.internalValue = undefined;
      this._tempDbSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._storageWorkloadType = value.storageWorkloadType;
      this._systemDbOnDataDiskEnabled = value.systemDbOnDataDiskEnabled;
      this._dataSettings.internalValue = value.dataSettings;
      this._logSettings.internalValue = value.logSettings;
      this._tempDbSettings.internalValue = value.tempDbSettings;
    }
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // storage_workload_type - computed: false, optional: false, required: true
  private _storageWorkloadType?: string; 
  public get storageWorkloadType() {
    return this.getStringAttribute('storage_workload_type');
  }
  public set storageWorkloadType(value: string) {
    this._storageWorkloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageWorkloadTypeInput() {
    return this._storageWorkloadType;
  }

  // system_db_on_data_disk_enabled - computed: false, optional: true, required: false
  private _systemDbOnDataDiskEnabled?: boolean | cdktf.IResolvable; 
  public get systemDbOnDataDiskEnabled() {
    return this.getBooleanAttribute('system_db_on_data_disk_enabled');
  }
  public set systemDbOnDataDiskEnabled(value: boolean | cdktf.IResolvable) {
    this._systemDbOnDataDiskEnabled = value;
  }
  public resetSystemDbOnDataDiskEnabled() {
    this._systemDbOnDataDiskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDbOnDataDiskEnabledInput() {
    return this._systemDbOnDataDiskEnabled;
  }

  // data_settings - computed: false, optional: true, required: false
  private _dataSettings = new MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference(this, "data_settings");
  public get dataSettings() {
    return this._dataSettings;
  }
  public putDataSettings(value: MssqlVirtualMachineStorageConfigurationDataSettings) {
    this._dataSettings.internalValue = value;
  }
  public resetDataSettings() {
    this._dataSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSettingsInput() {
    return this._dataSettings.internalValue;
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings = new MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }
  public putLogSettings(value: MssqlVirtualMachineStorageConfigurationLogSettings) {
    this._logSettings.internalValue = value;
  }
  public resetLogSettings() {
    this._logSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings.internalValue;
  }

  // temp_db_settings - computed: false, optional: true, required: false
  private _tempDbSettings = new MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference(this, "temp_db_settings");
  public get tempDbSettings() {
    return this._tempDbSettings;
  }
  public putTempDbSettings(value: MssqlVirtualMachineStorageConfigurationTempDbSettings) {
    this._tempDbSettings.internalValue = value;
  }
  public resetTempDbSettings() {
    this._tempDbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempDbSettingsInput() {
    return this._tempDbSettings.internalValue;
  }
}
export interface MssqlVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#create MssqlVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#delete MssqlVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#read MssqlVirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#update MssqlVirtualMachine#update}
  */
  readonly update?: string;
}

export function mssqlVirtualMachineTimeoutsToTerraform(struct?: MssqlVirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function mssqlVirtualMachineTimeoutsToHclTerraform(struct?: MssqlVirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlVirtualMachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface MssqlVirtualMachineWsfcDomainCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#cluster_bootstrap_account_password MssqlVirtualMachine#cluster_bootstrap_account_password}
  */
  readonly clusterBootstrapAccountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#cluster_operator_account_password MssqlVirtualMachine#cluster_operator_account_password}
  */
  readonly clusterOperatorAccountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#sql_service_account_password MssqlVirtualMachine#sql_service_account_password}
  */
  readonly sqlServiceAccountPassword: string;
}

export function mssqlVirtualMachineWsfcDomainCredentialToTerraform(struct?: MssqlVirtualMachineWsfcDomainCredentialOutputReference | MssqlVirtualMachineWsfcDomainCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_bootstrap_account_password: cdktf.stringToTerraform(struct!.clusterBootstrapAccountPassword),
    cluster_operator_account_password: cdktf.stringToTerraform(struct!.clusterOperatorAccountPassword),
    sql_service_account_password: cdktf.stringToTerraform(struct!.sqlServiceAccountPassword),
  }
}


export function mssqlVirtualMachineWsfcDomainCredentialToHclTerraform(struct?: MssqlVirtualMachineWsfcDomainCredentialOutputReference | MssqlVirtualMachineWsfcDomainCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_bootstrap_account_password: {
      value: cdktf.stringToHclTerraform(struct!.clusterBootstrapAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_operator_account_password: {
      value: cdktf.stringToHclTerraform(struct!.clusterOperatorAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_service_account_password: {
      value: cdktf.stringToHclTerraform(struct!.sqlServiceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineWsfcDomainCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineWsfcDomainCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterBootstrapAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterBootstrapAccountPassword = this._clusterBootstrapAccountPassword;
    }
    if (this._clusterOperatorAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperatorAccountPassword = this._clusterOperatorAccountPassword;
    }
    if (this._sqlServiceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServiceAccountPassword = this._sqlServiceAccountPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineWsfcDomainCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterBootstrapAccountPassword = undefined;
      this._clusterOperatorAccountPassword = undefined;
      this._sqlServiceAccountPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterBootstrapAccountPassword = value.clusterBootstrapAccountPassword;
      this._clusterOperatorAccountPassword = value.clusterOperatorAccountPassword;
      this._sqlServiceAccountPassword = value.sqlServiceAccountPassword;
    }
  }

  // cluster_bootstrap_account_password - computed: false, optional: false, required: true
  private _clusterBootstrapAccountPassword?: string; 
  public get clusterBootstrapAccountPassword() {
    return this.getStringAttribute('cluster_bootstrap_account_password');
  }
  public set clusterBootstrapAccountPassword(value: string) {
    this._clusterBootstrapAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterBootstrapAccountPasswordInput() {
    return this._clusterBootstrapAccountPassword;
  }

  // cluster_operator_account_password - computed: false, optional: false, required: true
  private _clusterOperatorAccountPassword?: string; 
  public get clusterOperatorAccountPassword() {
    return this.getStringAttribute('cluster_operator_account_password');
  }
  public set clusterOperatorAccountPassword(value: string) {
    this._clusterOperatorAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperatorAccountPasswordInput() {
    return this._clusterOperatorAccountPassword;
  }

  // sql_service_account_password - computed: false, optional: false, required: true
  private _sqlServiceAccountPassword?: string; 
  public get sqlServiceAccountPassword() {
    return this.getStringAttribute('sql_service_account_password');
  }
  public set sqlServiceAccountPassword(value: string) {
    this._sqlServiceAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServiceAccountPasswordInput() {
    return this._sqlServiceAccountPassword;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine azurerm_mssql_virtual_machine}
*/
export class MssqlVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlVirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlVirtualMachine to import
  * @param importFromId The id of the existing MssqlVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine azurerm_mssql_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._rServicesEnabled = config.rServicesEnabled;
    this._sqlConnectivityPort = config.sqlConnectivityPort;
    this._sqlConnectivityType = config.sqlConnectivityType;
    this._sqlConnectivityUpdatePassword = config.sqlConnectivityUpdatePassword;
    this._sqlConnectivityUpdateUsername = config.sqlConnectivityUpdateUsername;
    this._sqlLicenseType = config.sqlLicenseType;
    this._sqlVirtualMachineGroupId = config.sqlVirtualMachineGroupId;
    this._tags = config.tags;
    this._virtualMachineId = config.virtualMachineId;
    this._assessment.internalValue = config.assessment;
    this._autoBackup.internalValue = config.autoBackup;
    this._autoPatching.internalValue = config.autoPatching;
    this._keyVaultCredential.internalValue = config.keyVaultCredential;
    this._sqlInstance.internalValue = config.sqlInstance;
    this._storageConfiguration.internalValue = config.storageConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._wsfcDomainCredential.internalValue = config.wsfcDomainCredential;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // r_services_enabled - computed: false, optional: true, required: false
  private _rServicesEnabled?: boolean | cdktf.IResolvable; 
  public get rServicesEnabled() {
    return this.getBooleanAttribute('r_services_enabled');
  }
  public set rServicesEnabled(value: boolean | cdktf.IResolvable) {
    this._rServicesEnabled = value;
  }
  public resetRServicesEnabled() {
    this._rServicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rServicesEnabledInput() {
    return this._rServicesEnabled;
  }

  // sql_connectivity_port - computed: false, optional: true, required: false
  private _sqlConnectivityPort?: number; 
  public get sqlConnectivityPort() {
    return this.getNumberAttribute('sql_connectivity_port');
  }
  public set sqlConnectivityPort(value: number) {
    this._sqlConnectivityPort = value;
  }
  public resetSqlConnectivityPort() {
    this._sqlConnectivityPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityPortInput() {
    return this._sqlConnectivityPort;
  }

  // sql_connectivity_type - computed: false, optional: true, required: false
  private _sqlConnectivityType?: string; 
  public get sqlConnectivityType() {
    return this.getStringAttribute('sql_connectivity_type');
  }
  public set sqlConnectivityType(value: string) {
    this._sqlConnectivityType = value;
  }
  public resetSqlConnectivityType() {
    this._sqlConnectivityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityTypeInput() {
    return this._sqlConnectivityType;
  }

  // sql_connectivity_update_password - computed: false, optional: true, required: false
  private _sqlConnectivityUpdatePassword?: string; 
  public get sqlConnectivityUpdatePassword() {
    return this.getStringAttribute('sql_connectivity_update_password');
  }
  public set sqlConnectivityUpdatePassword(value: string) {
    this._sqlConnectivityUpdatePassword = value;
  }
  public resetSqlConnectivityUpdatePassword() {
    this._sqlConnectivityUpdatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityUpdatePasswordInput() {
    return this._sqlConnectivityUpdatePassword;
  }

  // sql_connectivity_update_username - computed: false, optional: true, required: false
  private _sqlConnectivityUpdateUsername?: string; 
  public get sqlConnectivityUpdateUsername() {
    return this.getStringAttribute('sql_connectivity_update_username');
  }
  public set sqlConnectivityUpdateUsername(value: string) {
    this._sqlConnectivityUpdateUsername = value;
  }
  public resetSqlConnectivityUpdateUsername() {
    this._sqlConnectivityUpdateUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityUpdateUsernameInput() {
    return this._sqlConnectivityUpdateUsername;
  }

  // sql_license_type - computed: false, optional: true, required: false
  private _sqlLicenseType?: string; 
  public get sqlLicenseType() {
    return this.getStringAttribute('sql_license_type');
  }
  public set sqlLicenseType(value: string) {
    this._sqlLicenseType = value;
  }
  public resetSqlLicenseType() {
    this._sqlLicenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlLicenseTypeInput() {
    return this._sqlLicenseType;
  }

  // sql_virtual_machine_group_id - computed: false, optional: true, required: false
  private _sqlVirtualMachineGroupId?: string; 
  public get sqlVirtualMachineGroupId() {
    return this.getStringAttribute('sql_virtual_machine_group_id');
  }
  public set sqlVirtualMachineGroupId(value: string) {
    this._sqlVirtualMachineGroupId = value;
  }
  public resetSqlVirtualMachineGroupId() {
    this._sqlVirtualMachineGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVirtualMachineGroupIdInput() {
    return this._sqlVirtualMachineGroupId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // assessment - computed: false, optional: true, required: false
  private _assessment = new MssqlVirtualMachineAssessmentOutputReference(this, "assessment");
  public get assessment() {
    return this._assessment;
  }
  public putAssessment(value: MssqlVirtualMachineAssessment) {
    this._assessment.internalValue = value;
  }
  public resetAssessment() {
    this._assessment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentInput() {
    return this._assessment.internalValue;
  }

  // auto_backup - computed: false, optional: true, required: false
  private _autoBackup = new MssqlVirtualMachineAutoBackupOutputReference(this, "auto_backup");
  public get autoBackup() {
    return this._autoBackup;
  }
  public putAutoBackup(value: MssqlVirtualMachineAutoBackup) {
    this._autoBackup.internalValue = value;
  }
  public resetAutoBackup() {
    this._autoBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupInput() {
    return this._autoBackup.internalValue;
  }

  // auto_patching - computed: false, optional: true, required: false
  private _autoPatching = new MssqlVirtualMachineAutoPatchingOutputReference(this, "auto_patching");
  public get autoPatching() {
    return this._autoPatching;
  }
  public putAutoPatching(value: MssqlVirtualMachineAutoPatching) {
    this._autoPatching.internalValue = value;
  }
  public resetAutoPatching() {
    this._autoPatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPatchingInput() {
    return this._autoPatching.internalValue;
  }

  // key_vault_credential - computed: false, optional: true, required: false
  private _keyVaultCredential = new MssqlVirtualMachineKeyVaultCredentialOutputReference(this, "key_vault_credential");
  public get keyVaultCredential() {
    return this._keyVaultCredential;
  }
  public putKeyVaultCredential(value: MssqlVirtualMachineKeyVaultCredential) {
    this._keyVaultCredential.internalValue = value;
  }
  public resetKeyVaultCredential() {
    this._keyVaultCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCredentialInput() {
    return this._keyVaultCredential.internalValue;
  }

  // sql_instance - computed: false, optional: true, required: false
  private _sqlInstance = new MssqlVirtualMachineSqlInstanceOutputReference(this, "sql_instance");
  public get sqlInstance() {
    return this._sqlInstance;
  }
  public putSqlInstance(value: MssqlVirtualMachineSqlInstance) {
    this._sqlInstance.internalValue = value;
  }
  public resetSqlInstance() {
    this._sqlInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInstanceInput() {
    return this._sqlInstance.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new MssqlVirtualMachineStorageConfigurationOutputReference(this, "storage_configuration");
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: MssqlVirtualMachineStorageConfiguration) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlVirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlVirtualMachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wsfc_domain_credential - computed: false, optional: true, required: false
  private _wsfcDomainCredential = new MssqlVirtualMachineWsfcDomainCredentialOutputReference(this, "wsfc_domain_credential");
  public get wsfcDomainCredential() {
    return this._wsfcDomainCredential;
  }
  public putWsfcDomainCredential(value: MssqlVirtualMachineWsfcDomainCredential) {
    this._wsfcDomainCredential.internalValue = value;
  }
  public resetWsfcDomainCredential() {
    this._wsfcDomainCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsfcDomainCredentialInput() {
    return this._wsfcDomainCredential.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      r_services_enabled: cdktf.booleanToTerraform(this._rServicesEnabled),
      sql_connectivity_port: cdktf.numberToTerraform(this._sqlConnectivityPort),
      sql_connectivity_type: cdktf.stringToTerraform(this._sqlConnectivityType),
      sql_connectivity_update_password: cdktf.stringToTerraform(this._sqlConnectivityUpdatePassword),
      sql_connectivity_update_username: cdktf.stringToTerraform(this._sqlConnectivityUpdateUsername),
      sql_license_type: cdktf.stringToTerraform(this._sqlLicenseType),
      sql_virtual_machine_group_id: cdktf.stringToTerraform(this._sqlVirtualMachineGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      assessment: mssqlVirtualMachineAssessmentToTerraform(this._assessment.internalValue),
      auto_backup: mssqlVirtualMachineAutoBackupToTerraform(this._autoBackup.internalValue),
      auto_patching: mssqlVirtualMachineAutoPatchingToTerraform(this._autoPatching.internalValue),
      key_vault_credential: mssqlVirtualMachineKeyVaultCredentialToTerraform(this._keyVaultCredential.internalValue),
      sql_instance: mssqlVirtualMachineSqlInstanceToTerraform(this._sqlInstance.internalValue),
      storage_configuration: mssqlVirtualMachineStorageConfigurationToTerraform(this._storageConfiguration.internalValue),
      timeouts: mssqlVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
      wsfc_domain_credential: mssqlVirtualMachineWsfcDomainCredentialToTerraform(this._wsfcDomainCredential.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      r_services_enabled: {
        value: cdktf.booleanToHclTerraform(this._rServicesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sql_connectivity_port: {
        value: cdktf.numberToHclTerraform(this._sqlConnectivityPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_connectivity_type: {
        value: cdktf.stringToHclTerraform(this._sqlConnectivityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_connectivity_update_password: {
        value: cdktf.stringToHclTerraform(this._sqlConnectivityUpdatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_connectivity_update_username: {
        value: cdktf.stringToHclTerraform(this._sqlConnectivityUpdateUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_license_type: {
        value: cdktf.stringToHclTerraform(this._sqlLicenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_virtual_machine_group_id: {
        value: cdktf.stringToHclTerraform(this._sqlVirtualMachineGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_machine_id: {
        value: cdktf.stringToHclTerraform(this._virtualMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assessment: {
        value: mssqlVirtualMachineAssessmentToHclTerraform(this._assessment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineAssessmentList",
      },
      auto_backup: {
        value: mssqlVirtualMachineAutoBackupToHclTerraform(this._autoBackup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineAutoBackupList",
      },
      auto_patching: {
        value: mssqlVirtualMachineAutoPatchingToHclTerraform(this._autoPatching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineAutoPatchingList",
      },
      key_vault_credential: {
        value: mssqlVirtualMachineKeyVaultCredentialToHclTerraform(this._keyVaultCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineKeyVaultCredentialList",
      },
      sql_instance: {
        value: mssqlVirtualMachineSqlInstanceToHclTerraform(this._sqlInstance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineSqlInstanceList",
      },
      storage_configuration: {
        value: mssqlVirtualMachineStorageConfigurationToHclTerraform(this._storageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineStorageConfigurationList",
      },
      timeouts: {
        value: mssqlVirtualMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlVirtualMachineTimeouts",
      },
      wsfc_domain_credential: {
        value: mssqlVirtualMachineWsfcDomainCredentialToHclTerraform(this._wsfcDomainCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineWsfcDomainCredentialList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
