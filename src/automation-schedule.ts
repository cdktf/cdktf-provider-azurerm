// https://www.terraform.io/docs/providers/azurerm/r/automation_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationScheduleConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly description?: string;
  readonly expiryTime?: string;
  readonly frequency: string;
  readonly interval?: number;
  readonly monthDays?: number[];
  readonly name: string;
  readonly resourceGroupName: string;
  readonly startTime?: string;
  readonly timezone?: string;
  readonly weekDays?: string[];
  /** monthly_occurrence block */
  readonly monthlyOccurrence?: AutomationScheduleMonthlyOccurrence[];
  /** timeouts block */
  readonly timeouts?: AutomationScheduleTimeouts;
}
export interface AutomationScheduleMonthlyOccurrence {
  readonly day: string;
  readonly occurrence: number;
}
export interface AutomationScheduleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationSchedule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._description = config.description;
    this._expiryTime = config.expiryTime;
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._monthDays = config.monthDays;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._startTime = config.startTime;
    this._timezone = config.timezone;
    this._weekDays = config.weekDays;
    this._monthlyOccurrence = config.monthlyOccurrence;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this._automationAccountName;
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: string;
  public get expiryTime() {
    return this._expiryTime ?? this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string | undefined) {
    this._expiryTime = value;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency: string;
  public get frequency() {
    return this._frequency;
  }
  public set frequency(value: string) {
    this._frequency = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number;
  public get interval() {
    return this._interval ?? this.getNumberAttribute('interval');
  }
  public set interval(value: number | undefined) {
    this._interval = value;
  }

  // month_days - computed: false, optional: true, required: false
  private _monthDays?: number[];
  public get monthDays() {
    return this._monthDays;
  }
  public set monthDays(value: number[] | undefined) {
    this._monthDays = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this._startTime ?? this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this._timezone;
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[];
  public get weekDays() {
    return this._weekDays;
  }
  public set weekDays(value: string[] | undefined) {
    this._weekDays = value;
  }

  // monthly_occurrence - computed: false, optional: true, required: false
  private _monthlyOccurrence?: AutomationScheduleMonthlyOccurrence[];
  public get monthlyOccurrence() {
    return this._monthlyOccurrence;
  }
  public set monthlyOccurrence(value: AutomationScheduleMonthlyOccurrence[] | undefined) {
    this._monthlyOccurrence = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationScheduleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationScheduleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      description: this._description,
      expiry_time: this._expiryTime,
      frequency: this._frequency,
      interval: this._interval,
      month_days: this._monthDays,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      start_time: this._startTime,
      timezone: this._timezone,
      week_days: this._weekDays,
      monthly_occurrence: this._monthlyOccurrence,
      timeouts: this._timeouts,
    };
  }
}
