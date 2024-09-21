// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyVmWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}
  */
  readonly workloadType: string;
  /**
  * protection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}
  */
  readonly protectionPolicy: BackupPolicyVmWorkloadProtectionPolicy[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}
  */
  readonly settings: BackupPolicyVmWorkloadSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}
  */
  readonly timeouts?: BackupPolicyVmWorkloadTimeouts;
}
export interface BackupPolicyVmWorkloadProtectionPolicyBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}
  */
  readonly frequencyInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}
  */
  readonly weekdays?: string[];
}

export function backupPolicyVmWorkloadProtectionPolicyBackupToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference | BackupPolicyVmWorkloadProtectionPolicyBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    frequency_in_minutes: cdktf.numberToTerraform(struct!.frequencyInMinutes),
    time: cdktf.stringToTerraform(struct!.time),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function backupPolicyVmWorkloadProtectionPolicyBackupToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference | BackupPolicyVmWorkloadProtectionPolicyBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicyBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._frequencyInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInMinutes = this._frequencyInMinutes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicyBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._frequencyInMinutes = undefined;
      this._time = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._frequencyInMinutes = value.frequencyInMinutes;
      this._time = value.time;
      this._weekdays = value.weekdays;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_in_minutes - computed: false, optional: true, required: false
  private _frequencyInMinutes?: number; 
  public get frequencyInMinutes() {
    return this.getNumberAttribute('frequency_in_minutes');
  }
  public set frequencyInMinutes(value: number) {
    this._frequencyInMinutes = value;
  }
  public resetFrequencyInMinutes() {
    this._frequencyInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInMinutesInput() {
    return this._frequencyInMinutes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}
export interface BackupPolicyVmWorkloadProtectionPolicyRetentionDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}
  */
  readonly count: number;
}

export function backupPolicyVmWorkloadProtectionPolicyRetentionDailyToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function backupPolicyVmWorkloadProtectionPolicyRetentionDailyToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicyRetentionDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
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
    return this._count;
  }
}
export interface BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}
  */
  readonly formatType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}
  */
  readonly monthdays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}
  */
  readonly weeks?: string[];
}

export function backupPolicyVmWorkloadProtectionPolicyRetentionMonthlyToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    monthdays: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.monthdays),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeks),
  }
}


export function backupPolicyVmWorkloadProtectionPolicyRetentionMonthlyToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthdays: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.monthdays),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._monthdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthdays = this._monthdays;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._formatType = undefined;
      this._monthdays = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._formatType = value.formatType;
      this._monthdays = value.monthdays;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
    }
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
    return this._count;
  }

  // format_type - computed: false, optional: false, required: true
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // monthdays - computed: false, optional: true, required: false
  private _monthdays?: number[]; 
  public get monthdays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('monthdays')));
  }
  public set monthdays(value: number[]) {
    this._monthdays = value;
  }
  public resetMonthdays() {
    this._monthdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdaysInput() {
    return this._monthdays;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: string[]; 
  public get weeks() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks'));
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}
  */
  readonly weekdays: string[];
}

export function backupPolicyVmWorkloadProtectionPolicyRetentionWeeklyToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function backupPolicyVmWorkloadProtectionPolicyRetentionWeeklyToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._weekdays = value.weekdays;
    }
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
    return this._count;
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}
export interface BackupPolicyVmWorkloadProtectionPolicyRetentionYearly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}
  */
  readonly formatType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}
  */
  readonly monthdays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}
  */
  readonly months: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}
  */
  readonly weeks?: string[];
}

export function backupPolicyVmWorkloadProtectionPolicyRetentionYearlyToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    monthdays: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.monthdays),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeks),
  }
}


export function backupPolicyVmWorkloadProtectionPolicyRetentionYearlyToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference | BackupPolicyVmWorkloadProtectionPolicyRetentionYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthdays: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.monthdays),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicyRetentionYearly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._monthdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthdays = this._monthdays;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._formatType = undefined;
      this._monthdays = undefined;
      this._months = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._formatType = value.formatType;
      this._monthdays = value.monthdays;
      this._months = value.months;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
    }
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
    return this._count;
  }

  // format_type - computed: false, optional: false, required: true
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // monthdays - computed: false, optional: true, required: false
  private _monthdays?: number[]; 
  public get monthdays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('monthdays')));
  }
  public set monthdays(value: number[]) {
    this._monthdays = value;
  }
  public resetMonthdays() {
    this._monthdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdaysInput() {
    return this._monthdays;
  }

  // months - computed: false, optional: false, required: true
  private _months?: string[]; 
  public get months() {
    return cdktf.Fn.tolist(this.getListAttribute('months'));
  }
  public set months(value: string[]) {
    this._months = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: string[]; 
  public get weeks() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks'));
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface BackupPolicyVmWorkloadProtectionPolicySimpleRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}
  */
  readonly count: number;
}

export function backupPolicyVmWorkloadProtectionPolicySimpleRetentionToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference | BackupPolicyVmWorkloadProtectionPolicySimpleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function backupPolicyVmWorkloadProtectionPolicySimpleRetentionToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference | BackupPolicyVmWorkloadProtectionPolicySimpleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicySimpleRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicySimpleRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
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
    return this._count;
  }
}
export interface BackupPolicyVmWorkloadProtectionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}
  */
  readonly policyType: string;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#backup BackupPolicyVmWorkload#backup}
  */
  readonly backup: BackupPolicyVmWorkloadProtectionPolicyBackup;
  /**
  * retention_daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#retention_daily BackupPolicyVmWorkload#retention_daily}
  */
  readonly retentionDaily?: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily;
  /**
  * retention_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#retention_monthly BackupPolicyVmWorkload#retention_monthly}
  */
  readonly retentionMonthly?: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly;
  /**
  * retention_weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#retention_weekly BackupPolicyVmWorkload#retention_weekly}
  */
  readonly retentionWeekly?: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly;
  /**
  * retention_yearly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#retention_yearly BackupPolicyVmWorkload#retention_yearly}
  */
  readonly retentionYearly?: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly;
  /**
  * simple_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#simple_retention BackupPolicyVmWorkload#simple_retention}
  */
  readonly simpleRetention?: BackupPolicyVmWorkloadProtectionPolicySimpleRetention;
}

export function backupPolicyVmWorkloadProtectionPolicyToTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    backup: backupPolicyVmWorkloadProtectionPolicyBackupToTerraform(struct!.backup),
    retention_daily: backupPolicyVmWorkloadProtectionPolicyRetentionDailyToTerraform(struct!.retentionDaily),
    retention_monthly: backupPolicyVmWorkloadProtectionPolicyRetentionMonthlyToTerraform(struct!.retentionMonthly),
    retention_weekly: backupPolicyVmWorkloadProtectionPolicyRetentionWeeklyToTerraform(struct!.retentionWeekly),
    retention_yearly: backupPolicyVmWorkloadProtectionPolicyRetentionYearlyToTerraform(struct!.retentionYearly),
    simple_retention: backupPolicyVmWorkloadProtectionPolicySimpleRetentionToTerraform(struct!.simpleRetention),
  }
}


export function backupPolicyVmWorkloadProtectionPolicyToHclTerraform(struct?: BackupPolicyVmWorkloadProtectionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: backupPolicyVmWorkloadProtectionPolicyBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyVmWorkloadProtectionPolicyBackupList",
    },
    retention_daily: {
      value: backupPolicyVmWorkloadProtectionPolicyRetentionDailyToHclTerraform(struct!.retentionDaily),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyVmWorkloadProtectionPolicyRetentionDailyList",
    },
    retention_monthly: {
      value: backupPolicyVmWorkloadProtectionPolicyRetentionMonthlyToHclTerraform(struct!.retentionMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyList",
    },
    retention_weekly: {
      value: backupPolicyVmWorkloadProtectionPolicyRetentionWeeklyToHclTerraform(struct!.retentionWeekly),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyList",
    },
    retention_yearly: {
      value: backupPolicyVmWorkloadProtectionPolicyRetentionYearlyToHclTerraform(struct!.retentionYearly),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyList",
    },
    simple_retention: {
      value: backupPolicyVmWorkloadProtectionPolicySimpleRetentionToHclTerraform(struct!.simpleRetention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyVmWorkloadProtectionPolicySimpleRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadProtectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BackupPolicyVmWorkloadProtectionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._retentionDaily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDaily = this._retentionDaily?.internalValue;
    }
    if (this._retentionMonthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionMonthly = this._retentionMonthly?.internalValue;
    }
    if (this._retentionWeekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionWeekly = this._retentionWeekly?.internalValue;
    }
    if (this._retentionYearly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionYearly = this._retentionYearly?.internalValue;
    }
    if (this._simpleRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleRetention = this._simpleRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadProtectionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyType = undefined;
      this._backup.internalValue = undefined;
      this._retentionDaily.internalValue = undefined;
      this._retentionMonthly.internalValue = undefined;
      this._retentionWeekly.internalValue = undefined;
      this._retentionYearly.internalValue = undefined;
      this._simpleRetention.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyType = value.policyType;
      this._backup.internalValue = value.backup;
      this._retentionDaily.internalValue = value.retentionDaily;
      this._retentionMonthly.internalValue = value.retentionMonthly;
      this._retentionWeekly.internalValue = value.retentionWeekly;
      this._retentionYearly.internalValue = value.retentionYearly;
      this._simpleRetention.internalValue = value.simpleRetention;
    }
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // backup - computed: false, optional: false, required: true
  private _backup = new BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: BackupPolicyVmWorkloadProtectionPolicyBackup) {
    this._backup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // retention_daily - computed: false, optional: true, required: false
  private _retentionDaily = new BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference(this, "retention_daily");
  public get retentionDaily() {
    return this._retentionDaily;
  }
  public putRetentionDaily(value: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily) {
    this._retentionDaily.internalValue = value;
  }
  public resetRetentionDaily() {
    this._retentionDaily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDailyInput() {
    return this._retentionDaily.internalValue;
  }

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly = new BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference(this, "retention_monthly");
  public get retentionMonthly() {
    return this._retentionMonthly;
  }
  public putRetentionMonthly(value: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly) {
    this._retentionMonthly.internalValue = value;
  }
  public resetRetentionMonthly() {
    this._retentionMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMonthlyInput() {
    return this._retentionMonthly.internalValue;
  }

  // retention_weekly - computed: false, optional: true, required: false
  private _retentionWeekly = new BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference(this, "retention_weekly");
  public get retentionWeekly() {
    return this._retentionWeekly;
  }
  public putRetentionWeekly(value: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly) {
    this._retentionWeekly.internalValue = value;
  }
  public resetRetentionWeekly() {
    this._retentionWeekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWeeklyInput() {
    return this._retentionWeekly.internalValue;
  }

  // retention_yearly - computed: false, optional: true, required: false
  private _retentionYearly = new BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference(this, "retention_yearly");
  public get retentionYearly() {
    return this._retentionYearly;
  }
  public putRetentionYearly(value: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly) {
    this._retentionYearly.internalValue = value;
  }
  public resetRetentionYearly() {
    this._retentionYearly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionYearlyInput() {
    return this._retentionYearly.internalValue;
  }

  // simple_retention - computed: false, optional: true, required: false
  private _simpleRetention = new BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference(this, "simple_retention");
  public get simpleRetention() {
    return this._simpleRetention;
  }
  public putSimpleRetention(value: BackupPolicyVmWorkloadProtectionPolicySimpleRetention) {
    this._simpleRetention.internalValue = value;
  }
  public resetSimpleRetention() {
    this._simpleRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleRetentionInput() {
    return this._simpleRetention.internalValue;
  }
}

export class BackupPolicyVmWorkloadProtectionPolicyList extends cdktf.ComplexList {
  public internalValue? : BackupPolicyVmWorkloadProtectionPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupPolicyVmWorkloadProtectionPolicyOutputReference {
    return new BackupPolicyVmWorkloadProtectionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupPolicyVmWorkloadSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}
  */
  readonly timeZone: string;
}

export function backupPolicyVmWorkloadSettingsToTerraform(struct?: BackupPolicyVmWorkloadSettingsOutputReference | BackupPolicyVmWorkloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function backupPolicyVmWorkloadSettingsToHclTerraform(struct?: BackupPolicyVmWorkloadSettingsOutputReference | BackupPolicyVmWorkloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmWorkloadSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmWorkloadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmWorkloadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionEnabled = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionEnabled = value.compressionEnabled;
      this._timeZone = value.timeZone;
    }
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface BackupPolicyVmWorkloadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}
  */
  readonly update?: string;
}

export function backupPolicyVmWorkloadTimeoutsToTerraform(struct?: BackupPolicyVmWorkloadTimeouts | cdktf.IResolvable): any {
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


export function backupPolicyVmWorkloadTimeoutsToHclTerraform(struct?: BackupPolicyVmWorkloadTimeouts | cdktf.IResolvable): any {
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

export class BackupPolicyVmWorkloadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupPolicyVmWorkloadTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupPolicyVmWorkloadTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload azurerm_backup_policy_vm_workload}
*/
export class BackupPolicyVmWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_backup_policy_vm_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupPolicyVmWorkload to import
  * @param importFromId The id of the existing BackupPolicyVmWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupPolicyVmWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_backup_policy_vm_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_policy_vm_workload azurerm_backup_policy_vm_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPolicyVmWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: BackupPolicyVmWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_policy_vm_workload',
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
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._workloadType = config.workloadType;
    this._protectionPolicy.internalValue = config.protectionPolicy;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
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
    return this._recoveryVaultName;
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
    return this._resourceGroupName;
  }

  // workload_type - computed: false, optional: false, required: true
  private _workloadType?: string; 
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
  public set workloadType(value: string) {
    this._workloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType;
  }

  // protection_policy - computed: false, optional: false, required: true
  private _protectionPolicy = new BackupPolicyVmWorkloadProtectionPolicyList(this, "protection_policy", true);
  public get protectionPolicy() {
    return this._protectionPolicy;
  }
  public putProtectionPolicy(value: BackupPolicyVmWorkloadProtectionPolicy[] | cdktf.IResolvable) {
    this._protectionPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyInput() {
    return this._protectionPolicy.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new BackupPolicyVmWorkloadSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: BackupPolicyVmWorkloadSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupPolicyVmWorkloadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupPolicyVmWorkloadTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      workload_type: cdktf.stringToTerraform(this._workloadType),
      protection_policy: cdktf.listMapper(backupPolicyVmWorkloadProtectionPolicyToTerraform, true)(this._protectionPolicy.internalValue),
      settings: backupPolicyVmWorkloadSettingsToTerraform(this._settings.internalValue),
      timeouts: backupPolicyVmWorkloadTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_vault_name: {
        value: cdktf.stringToHclTerraform(this._recoveryVaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_type: {
        value: cdktf.stringToHclTerraform(this._workloadType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_policy: {
        value: cdktf.listMapperHcl(backupPolicyVmWorkloadProtectionPolicyToHclTerraform, true)(this._protectionPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupPolicyVmWorkloadProtectionPolicyList",
      },
      settings: {
        value: backupPolicyVmWorkloadSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupPolicyVmWorkloadSettingsList",
      },
      timeouts: {
        value: backupPolicyVmWorkloadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupPolicyVmWorkloadTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
