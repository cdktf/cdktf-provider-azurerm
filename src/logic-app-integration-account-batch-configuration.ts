// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountBatchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}
  */
  readonly batchGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * release_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#release_criteria LogicAppIntegrationAccountBatchConfiguration#release_criteria}
  */
  readonly releaseCriteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#timeouts LogicAppIntegrationAccountBatchConfiguration#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountBatchConfigurationTimeouts;
}
export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#week LogicAppIntegrationAccountBatchConfiguration#week}
  */
  readonly week: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#weekday LogicAppIntegrationAccountBatchConfiguration#weekday}
  */
  readonly weekday: string;
}

export function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    week: cdktf.numberToTerraform(struct!.week),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}

export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#hours LogicAppIntegrationAccountBatchConfiguration#hours}
  */
  readonly hours?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}
  */
  readonly minutes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}
  */
  readonly monthDays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}
  */
  readonly weekDays?: string[];
  /**
  * monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#monthly LogicAppIntegrationAccountBatchConfiguration#monthly}
  */
  readonly monthly?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly[];
}

export function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference | LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.hours),
    minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.minutes),
    month_days: cdktf.listMapper(cdktf.numberToTerraform)(struct!.monthDays),
    week_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekDays),
    monthly: cdktf.listMapper(logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyToTerraform)(struct!.monthly),
  }
}

export class LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._monthDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthDays = this._monthDays;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._monthDays = undefined;
      this._weekDays = undefined;
      this._monthly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._monthDays = value.monthDays;
      this._weekDays = value.weekDays;
      this._monthly = value.monthly;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number[]; 
  public get hours() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('hours') as any;
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number[]; 
  public get minutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('minutes') as any;
  }
  public set minutes(value: number[]) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // month_days - computed: false, optional: true, required: false
  private _monthDays?: number[]; 
  public get monthDays() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('month_days') as any;
  }
  public set monthDays(value: number[]) {
    this._monthDays = value;
  }
  public resetMonthDays() {
    this._monthDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthDaysInput() {
    return this._monthDays;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[]; 
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
  public set weekDays(value: string[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly[]; 
  public get monthly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('monthly') as any;
  }
  public set monthly(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly[]) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#interval LogicAppIntegrationAccountBatchConfiguration#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}
  */
  readonly timeZone?: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#schedule LogicAppIntegrationAccountBatchConfiguration#schedule}
  */
  readonly schedule?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule;
}

export function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference | LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    schedule: logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleToTerraform(struct!.schedule),
  }
}

export class LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
      this._schedule.internalValue = value.schedule;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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
    return this._frequency;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule = new LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule) {
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
export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}
  */
  readonly messageCount?: number;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#recurrence LogicAppIntegrationAccountBatchConfiguration#recurrence}
  */
  readonly recurrence?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence;
}

export function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference | LogicAppIntegrationAccountBatchConfigurationReleaseCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    message_count: cdktf.numberToTerraform(struct!.messageCount),
    recurrence: logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceToTerraform(struct!.recurrence),
  }
}

export class LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountBatchConfigurationReleaseCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._messageCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCount = this._messageCount;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._messageCount = undefined;
      this._recurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._messageCount = value.messageCount;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // message_count - computed: false, optional: true, required: false
  private _messageCount?: number; 
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
  public set messageCount(value: number) {
    this._messageCount = value;
  }
  public resetMessageCount() {
    this._messageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCountInput() {
    return this._messageCount;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference(this as any, "recurrence", true);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}
export interface LogicAppIntegrationAccountBatchConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#create LogicAppIntegrationAccountBatchConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#delete LogicAppIntegrationAccountBatchConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#read LogicAppIntegrationAccountBatchConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration#update LogicAppIntegrationAccountBatchConfiguration#update}
  */
  readonly update?: string;
}

export function logicAppIntegrationAccountBatchConfigurationTimeoutsToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference | LogicAppIntegrationAccountBatchConfigurationTimeouts): any {
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

export class LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogicAppIntegrationAccountBatchConfigurationTimeouts | undefined {
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

  public set internalValue(value: LogicAppIntegrationAccountBatchConfigurationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration azurerm_logic_app_integration_account_batch_configuration}
*/
export class LogicAppIntegrationAccountBatchConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_batch_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration azurerm_logic_app_integration_account_batch_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountBatchConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountBatchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_batch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._batchGroupName = config.batchGroupName;
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._releaseCriteria.internalValue = config.releaseCriteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_group_name - computed: false, optional: false, required: true
  private _batchGroupName?: string; 
  public get batchGroupName() {
    return this.getStringAttribute('batch_group_name');
  }
  public set batchGroupName(value: string) {
    this._batchGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchGroupNameInput() {
    return this._batchGroupName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName?: string; 
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // release_criteria - computed: false, optional: false, required: true
  private _releaseCriteria = new LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference(this as any, "release_criteria", true);
  public get releaseCriteria() {
    return this._releaseCriteria;
  }
  public putReleaseCriteria(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria) {
    this._releaseCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCriteriaInput() {
    return this._releaseCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogicAppIntegrationAccountBatchConfigurationTimeouts) {
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
      batch_group_name: cdktf.stringToTerraform(this._batchGroupName),
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      release_criteria: logicAppIntegrationAccountBatchConfigurationReleaseCriteriaToTerraform(this._releaseCriteria.internalValue),
      timeouts: logicAppIntegrationAccountBatchConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
