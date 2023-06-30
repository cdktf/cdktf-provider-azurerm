// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupPolicyPostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}
  */
  readonly backupRepeatingTimeIntervals: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}
  */
  readonly defaultRetentionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}
  */
  readonly vaultName: string;
  /**
  * retention_rule block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#retention_rule DataProtectionBackupPolicyPostgresql#retention_rule}
  */
  readonly retentionRule?: DataProtectionBackupPolicyPostgresqlRetentionRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#timeouts DataProtectionBackupPolicyPostgresql#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyPostgresqlTimeouts;
}
export interface DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#absolute_criteria DataProtectionBackupPolicyPostgresql#absolute_criteria}
  */
  readonly absoluteCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#days_of_week DataProtectionBackupPolicyPostgresql#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#months_of_year DataProtectionBackupPolicyPostgresql#months_of_year}
  */
  readonly monthsOfYear?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#scheduled_backup_times DataProtectionBackupPolicyPostgresql#scheduled_backup_times}
  */
  readonly scheduledBackupTimes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#weeks_of_month DataProtectionBackupPolicyPostgresql#weeks_of_month}
  */
  readonly weeksOfMonth?: string[];
}

export function dataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaToTerraform(struct?: DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference | DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_criteria: cdktf.stringToTerraform(struct!.absoluteCriteria),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    months_of_year: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monthsOfYear),
    scheduled_backup_times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheduledBackupTimes),
    weeks_of_month: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeksOfMonth),
  }
}

export class DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteCriteria = this._absoluteCriteria;
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

  public set internalValue(value: DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absoluteCriteria = undefined;
      this._daysOfWeek = undefined;
      this._monthsOfYear = undefined;
      this._scheduledBackupTimes = undefined;
      this._weeksOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absoluteCriteria = value.absoluteCriteria;
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
export interface DataProtectionBackupPolicyPostgresqlRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#duration DataProtectionBackupPolicyPostgresql#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#priority DataProtectionBackupPolicyPostgresql#priority}
  */
  readonly priority: number;
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#criteria DataProtectionBackupPolicyPostgresql#criteria}
  */
  readonly criteria: DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria;
}

export function dataProtectionBackupPolicyPostgresqlRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyPostgresqlRetentionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    criteria: dataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaToTerraform(struct!.criteria),
  }
}

export class DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProtectionBackupPolicyPostgresqlRetentionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyPostgresqlRetentionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._name = value.name;
      this._priority = value.priority;
      this._criteria.internalValue = value.criteria;
    }
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
  private _criteria = new DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class DataProtectionBackupPolicyPostgresqlRetentionRuleList extends cdktf.ComplexList {
  public internalValue? : DataProtectionBackupPolicyPostgresqlRetentionRule[] | cdktf.IResolvable

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
  public get(index: number): DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference {
    return new DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProtectionBackupPolicyPostgresqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#create DataProtectionBackupPolicyPostgresql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#delete DataProtectionBackupPolicyPostgresql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#read DataProtectionBackupPolicyPostgresql#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql#update DataProtectionBackupPolicyPostgresql#update}
  */
  readonly update?: string;
}

export function dataProtectionBackupPolicyPostgresqlTimeoutsToTerraform(struct?: DataProtectionBackupPolicyPostgresqlTimeouts | cdktf.IResolvable): any {
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

export class DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProtectionBackupPolicyPostgresqlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProtectionBackupPolicyPostgresqlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql azurerm_data_protection_backup_policy_postgresql}
*/
export class DataProtectionBackupPolicyPostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_protection_backup_policy_postgresql";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_protection_backup_policy_postgresql azurerm_data_protection_backup_policy_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyPostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyPostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.62.1',
        providerVersionConstraint: '~> 3.10'
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
    this._defaultRetentionDuration = config.defaultRetentionDuration;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._vaultName = config.vaultName;
    this._retentionRule.internalValue = config.retentionRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_repeating_time_intervals - computed: false, optional: false, required: true
  private _backupRepeatingTimeIntervals?: string[]; 
  public get backupRepeatingTimeIntervals() {
    return this.getListAttribute('backup_repeating_time_intervals');
  }
  public set backupRepeatingTimeIntervals(value: string[]) {
    this._backupRepeatingTimeIntervals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRepeatingTimeIntervalsInput() {
    return this._backupRepeatingTimeIntervals;
  }

  // default_retention_duration - computed: false, optional: false, required: true
  private _defaultRetentionDuration?: string; 
  public get defaultRetentionDuration() {
    return this.getStringAttribute('default_retention_duration');
  }
  public set defaultRetentionDuration(value: string) {
    this._defaultRetentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionDurationInput() {
    return this._defaultRetentionDuration;
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

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }

  // retention_rule - computed: false, optional: true, required: false
  private _retentionRule = new DataProtectionBackupPolicyPostgresqlRetentionRuleList(this, "retention_rule", false);
  public get retentionRule() {
    return this._retentionRule;
  }
  public putRetentionRule(value: DataProtectionBackupPolicyPostgresqlRetentionRule[] | cdktf.IResolvable) {
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
  private _timeouts = new DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProtectionBackupPolicyPostgresqlTimeouts) {
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
      default_retention_duration: cdktf.stringToTerraform(this._defaultRetentionDuration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      vault_name: cdktf.stringToTerraform(this._vaultName),
      retention_rule: cdktf.listMapper(dataProtectionBackupPolicyPostgresqlRetentionRuleToTerraform, true)(this._retentionRule.internalValue),
      timeouts: dataProtectionBackupPolicyPostgresqlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
