// https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevTestScheduleConfig extends TerraformMetaArguments {
  readonly labName: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  readonly taskType: string;
  readonly timeZoneId: string;
  /** daily_recurrence block */
  readonly dailyRecurrence?: DevTestScheduleDailyRecurrence[];
  /** hourly_recurrence block */
  readonly hourlyRecurrence?: DevTestScheduleHourlyRecurrence[];
  /** notification_settings block */
  readonly notificationSettings: DevTestScheduleNotificationSettings[];
  /** timeouts block */
  readonly timeouts?: DevTestScheduleTimeouts;
  /** weekly_recurrence block */
  readonly weeklyRecurrence?: DevTestScheduleWeeklyRecurrence[];
}
export interface DevTestScheduleDailyRecurrence {
  readonly time: string;
}
export interface DevTestScheduleHourlyRecurrence {
  readonly minute: number;
}
export interface DevTestScheduleNotificationSettings {
  readonly status?: string;
  readonly timeInMinutes?: number;
  readonly webhookUrl?: string;
}
export interface DevTestScheduleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface DevTestScheduleWeeklyRecurrence {
  readonly time: string;
  readonly weekDays?: string[];
}

// Resource

export class DevTestSchedule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labName = config.labName;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._status = config.status;
    this._tags = config.tags;
    this._taskType = config.taskType;
    this._timeZoneId = config.timeZoneId;
    this._dailyRecurrence = config.dailyRecurrence;
    this._hourlyRecurrence = config.hourlyRecurrence;
    this._notificationSettings = config.notificationSettings;
    this._timeouts = config.timeouts;
    this._weeklyRecurrence = config.weeklyRecurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this._labName;
  }
  public set labName(value: string) {
    this._labName = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType: string;
  public get taskType() {
    return this._taskType;
  }
  public set taskType(value: string) {
    this._taskType = value;
  }

  // time_zone_id - computed: false, optional: false, required: true
  private _timeZoneId: string;
  public get timeZoneId() {
    return this._timeZoneId;
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }

  // daily_recurrence - computed: false, optional: true, required: false
  private _dailyRecurrence?: DevTestScheduleDailyRecurrence[];
  public get dailyRecurrence() {
    return this._dailyRecurrence;
  }
  public set dailyRecurrence(value: DevTestScheduleDailyRecurrence[] | undefined) {
    this._dailyRecurrence = value;
  }

  // hourly_recurrence - computed: false, optional: true, required: false
  private _hourlyRecurrence?: DevTestScheduleHourlyRecurrence[];
  public get hourlyRecurrence() {
    return this._hourlyRecurrence;
  }
  public set hourlyRecurrence(value: DevTestScheduleHourlyRecurrence[] | undefined) {
    this._hourlyRecurrence = value;
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings: DevTestScheduleNotificationSettings[];
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public set notificationSettings(value: DevTestScheduleNotificationSettings[]) {
    this._notificationSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestScheduleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DevTestScheduleTimeouts | undefined) {
    this._timeouts = value;
  }

  // weekly_recurrence - computed: false, optional: true, required: false
  private _weeklyRecurrence?: DevTestScheduleWeeklyRecurrence[];
  public get weeklyRecurrence() {
    return this._weeklyRecurrence;
  }
  public set weeklyRecurrence(value: DevTestScheduleWeeklyRecurrence[] | undefined) {
    this._weeklyRecurrence = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lab_name: this._labName,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      status: this._status,
      tags: this._tags,
      task_type: this._taskType,
      time_zone_id: this._timeZoneId,
      daily_recurrence: this._dailyRecurrence,
      hourly_recurrence: this._hourlyRecurrence,
      notification_settings: this._notificationSettings,
      timeouts: this._timeouts,
      weekly_recurrence: this._weeklyRecurrence,
    };
  }
}
