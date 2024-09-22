// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupPolicyBlobStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}
  */
  readonly backupRepeatingTimeIntervals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}
  */
  readonly operationalDefaultRetentionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}
  */
  readonly vaultDefaultRetentionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}
  */
  readonly vaultId: string;
  /**
  * retention_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#retention_rule DataProtectionBackupPolicyBlobStorage#retention_rule}
  */
  readonly retentionRule?: DataProtectionBackupPolicyBlobStorageRetentionRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#timeouts DataProtectionBackupPolicyBlobStorage#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyBlobStorageTimeouts;
}
export interface DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#absolute_criteria DataProtectionBackupPolicyBlobStorage#absolute_criteria}
  */
  readonly absoluteCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_month DataProtectionBackupPolicyBlobStorage#days_of_month}
  */
  readonly daysOfMonth?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_week DataProtectionBackupPolicyBlobStorage#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#months_of_year DataProtectionBackupPolicyBlobStorage#months_of_year}
  */
  readonly monthsOfYear?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#scheduled_backup_times DataProtectionBackupPolicyBlobStorage#scheduled_backup_times}
  */
  readonly scheduledBackupTimes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#weeks_of_month DataProtectionBackupPolicyBlobStorage#weeks_of_month}
  */
  readonly weeksOfMonth?: string[];
}

export function dataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaToTerraform(struct?: DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference | DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_criteria: cdktf.stringToTerraform(struct!.absoluteCriteria),
    days_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfMonth),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    months_of_year: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monthsOfYear),
    scheduled_backup_times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheduledBackupTimes),
    weeks_of_month: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeksOfMonth),
  }
}


export function dataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaToHclTerraform(struct?: DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference | DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_criteria: {
      value: cdktf.stringToHclTerraform(struct!.absoluteCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfMonth),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    months_of_year: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monthsOfYear),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scheduled_backup_times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scheduledBackupTimes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteCriteria = this._absoluteCriteria;
    }
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._monthsOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthsOfYear = this._monthsOfYear;
    }
    if (this._scheduledBackupTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledBackupTimes = this._scheduledBackupTimes;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absoluteCriteria = undefined;
      this._daysOfMonth = undefined;
      this._daysOfWeek = undefined;
      this._monthsOfYear = undefined;
      this._scheduledBackupTimes = undefined;
      this._weeksOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absoluteCriteria = value.absoluteCriteria;
      this._daysOfMonth = value.daysOfMonth;
      this._daysOfWeek = value.daysOfWeek;
      this._monthsOfYear = value.monthsOfYear;
      this._scheduledBackupTimes = value.scheduledBackupTimes;
      this._weeksOfMonth = value.weeksOfMonth;
    }
  }

  // absolute_criteria - computed: false, optional: true, required: false
  private _absoluteCriteria?: string; 
  public get absoluteCriteria() {
    return this.getStringAttribute('absolute_criteria');
  }
  public set absoluteCriteria(value: string) {
    this._absoluteCriteria = value;
  }
  public resetAbsoluteCriteria() {
    this._absoluteCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteCriteriaInput() {
    return this._absoluteCriteria;
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: number[]; 
  public get daysOfMonth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_month')));
  }
  public set daysOfMonth(value: number[]) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
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

  // months_of_year - computed: false, optional: true, required: false
  private _monthsOfYear?: string[]; 
  public get monthsOfYear() {
    return cdktf.Fn.tolist(this.getListAttribute('months_of_year'));
  }
  public set monthsOfYear(value: string[]) {
    this._monthsOfYear = value;
  }
  public resetMonthsOfYear() {
    this._monthsOfYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsOfYearInput() {
    return this._monthsOfYear;
  }

  // scheduled_backup_times - computed: false, optional: true, required: false
  private _scheduledBackupTimes?: string[]; 
  public get scheduledBackupTimes() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_backup_times'));
  }
  public set scheduledBackupTimes(value: string[]) {
    this._scheduledBackupTimes = value;
  }
  public resetScheduledBackupTimes() {
    this._scheduledBackupTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupTimesInput() {
    return this._scheduledBackupTimes;
  }

  // weeks_of_month - computed: false, optional: true, required: false
  private _weeksOfMonth?: string[]; 
  public get weeksOfMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks_of_month'));
  }
  public set weeksOfMonth(value: string[]) {
    this._weeksOfMonth = value;
  }
  public resetWeeksOfMonth() {
    this._weeksOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }
}
export interface DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#data_store_type DataProtectionBackupPolicyBlobStorage#data_store_type}
  */
  readonly dataStoreType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#duration DataProtectionBackupPolicyBlobStorage#duration}
  */
  readonly duration: string;
}

export function dataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleToTerraform(struct?: DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference | DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store_type: cdktf.stringToTerraform(struct!.dataStoreType),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleToHclTerraform(struct?: DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference | DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store_type: {
      value: cdktf.stringToHclTerraform(struct!.dataStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreType = this._dataStoreType;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStoreType = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStoreType = value.dataStoreType;
      this._duration = value.duration;
    }
  }

  // data_store_type - computed: false, optional: false, required: true
  private _dataStoreType?: string; 
  public get dataStoreType() {
    return this.getStringAttribute('data_store_type');
  }
  public set dataStoreType(value: string) {
    this._dataStoreType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreTypeInput() {
    return this._dataStoreType;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DataProtectionBackupPolicyBlobStorageRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#priority DataProtectionBackupPolicyBlobStorage#priority}
  */
  readonly priority: number;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#criteria DataProtectionBackupPolicyBlobStorage#criteria}
  */
  readonly criteria: DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria;
  /**
  * life_cycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#life_cycle DataProtectionBackupPolicyBlobStorage#life_cycle}
  */
  readonly lifeCycle: DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle;
}

export function dataProtectionBackupPolicyBlobStorageRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyBlobStorageRetentionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    criteria: dataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaToTerraform(struct!.criteria),
    life_cycle: dataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleToTerraform(struct!.lifeCycle),
  }
}


export function dataProtectionBackupPolicyBlobStorageRetentionRuleToHclTerraform(struct?: DataProtectionBackupPolicyBlobStorageRetentionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    criteria: {
      value: dataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaList",
    },
    life_cycle: {
      value: dataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleToHclTerraform(struct!.lifeCycle),
      isBlock: true,
      type: "list",
      storageClassType: "DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProtectionBackupPolicyBlobStorageRetentionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._lifeCycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifeCycle = this._lifeCycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyBlobStorageRetentionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._criteria.internalValue = undefined;
      this._lifeCycle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._criteria.internalValue = value.criteria;
      this._lifeCycle.internalValue = value.lifeCycle;
    }
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // life_cycle - computed: false, optional: false, required: true
  private _lifeCycle = new DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference(this, "life_cycle");
  public get lifeCycle() {
    return this._lifeCycle;
  }
  public putLifeCycle(value: DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle) {
    this._lifeCycle.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle.internalValue;
  }
}

export class DataProtectionBackupPolicyBlobStorageRetentionRuleList extends cdktf.ComplexList {
  public internalValue? : DataProtectionBackupPolicyBlobStorageRetentionRule[] | cdktf.IResolvable

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
  public get(index: number): DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference {
    return new DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProtectionBackupPolicyBlobStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#create DataProtectionBackupPolicyBlobStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#delete DataProtectionBackupPolicyBlobStorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#read DataProtectionBackupPolicyBlobStorage#read}
  */
  readonly read?: string;
}

export function dataProtectionBackupPolicyBlobStorageTimeoutsToTerraform(struct?: DataProtectionBackupPolicyBlobStorageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataProtectionBackupPolicyBlobStorageTimeoutsToHclTerraform(struct?: DataProtectionBackupPolicyBlobStorageTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProtectionBackupPolicyBlobStorageTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyBlobStorageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage azurerm_data_protection_backup_policy_blob_storage}
*/
export class DataProtectionBackupPolicyBlobStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_protection_backup_policy_blob_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProtectionBackupPolicyBlobStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProtectionBackupPolicyBlobStorage to import
  * @param importFromId The id of the existing DataProtectionBackupPolicyBlobStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProtectionBackupPolicyBlobStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_protection_backup_policy_blob_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_policy_blob_storage azurerm_data_protection_backup_policy_blob_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyBlobStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyBlobStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_blob_storage',
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
    this._backupRepeatingTimeIntervals = config.backupRepeatingTimeIntervals;
    this._id = config.id;
    this._name = config.name;
    this._operationalDefaultRetentionDuration = config.operationalDefaultRetentionDuration;
    this._timeZone = config.timeZone;
    this._vaultDefaultRetentionDuration = config.vaultDefaultRetentionDuration;
    this._vaultId = config.vaultId;
    this._retentionRule.internalValue = config.retentionRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_repeating_time_intervals - computed: false, optional: true, required: false
  private _backupRepeatingTimeIntervals?: string[]; 
  public get backupRepeatingTimeIntervals() {
    return this.getListAttribute('backup_repeating_time_intervals');
  }
  public set backupRepeatingTimeIntervals(value: string[]) {
    this._backupRepeatingTimeIntervals = value;
  }
  public resetBackupRepeatingTimeIntervals() {
    this._backupRepeatingTimeIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRepeatingTimeIntervalsInput() {
    return this._backupRepeatingTimeIntervals;
  }

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

  // operational_default_retention_duration - computed: false, optional: true, required: false
  private _operationalDefaultRetentionDuration?: string; 
  public get operationalDefaultRetentionDuration() {
    return this.getStringAttribute('operational_default_retention_duration');
  }
  public set operationalDefaultRetentionDuration(value: string) {
    this._operationalDefaultRetentionDuration = value;
  }
  public resetOperationalDefaultRetentionDuration() {
    this._operationalDefaultRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalDefaultRetentionDurationInput() {
    return this._operationalDefaultRetentionDuration;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // vault_default_retention_duration - computed: false, optional: true, required: false
  private _vaultDefaultRetentionDuration?: string; 
  public get vaultDefaultRetentionDuration() {
    return this.getStringAttribute('vault_default_retention_duration');
  }
  public set vaultDefaultRetentionDuration(value: string) {
    this._vaultDefaultRetentionDuration = value;
  }
  public resetVaultDefaultRetentionDuration() {
    this._vaultDefaultRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultDefaultRetentionDurationInput() {
    return this._vaultDefaultRetentionDuration;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // retention_rule - computed: false, optional: true, required: false
  private _retentionRule = new DataProtectionBackupPolicyBlobStorageRetentionRuleList(this, "retention_rule", false);
  public get retentionRule() {
    return this._retentionRule;
  }
  public putRetentionRule(value: DataProtectionBackupPolicyBlobStorageRetentionRule[] | cdktf.IResolvable) {
    this._retentionRule.internalValue = value;
  }
  public resetRetentionRule() {
    this._retentionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionRuleInput() {
    return this._retentionRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProtectionBackupPolicyBlobStorageTimeouts) {
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
      backup_repeating_time_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupRepeatingTimeIntervals),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operational_default_retention_duration: cdktf.stringToTerraform(this._operationalDefaultRetentionDuration),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vault_default_retention_duration: cdktf.stringToTerraform(this._vaultDefaultRetentionDuration),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      retention_rule: cdktf.listMapper(dataProtectionBackupPolicyBlobStorageRetentionRuleToTerraform, true)(this._retentionRule.internalValue),
      timeouts: dataProtectionBackupPolicyBlobStorageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_repeating_time_intervals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupRepeatingTimeIntervals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      operational_default_retention_duration: {
        value: cdktf.stringToHclTerraform(this._operationalDefaultRetentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_default_retention_duration: {
        value: cdktf.stringToHclTerraform(this._vaultDefaultRetentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_rule: {
        value: cdktf.listMapperHcl(dataProtectionBackupPolicyBlobStorageRetentionRuleToHclTerraform, true)(this._retentionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProtectionBackupPolicyBlobStorageRetentionRuleList",
      },
      timeouts: {
        value: dataProtectionBackupPolicyBlobStorageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProtectionBackupPolicyBlobStorageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
