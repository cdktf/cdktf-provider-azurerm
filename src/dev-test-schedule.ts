// https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#lab_name DevTestSchedule#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#location DevTestSchedule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#name DevTestSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#resource_group_name DevTestSchedule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#status DevTestSchedule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#tags DevTestSchedule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#task_type DevTestSchedule#task_type}
  */
  readonly taskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#time_zone_id DevTestSchedule#time_zone_id}
  */
  readonly timeZoneId: string;
  /**
  * daily_recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#daily_recurrence DevTestSchedule#daily_recurrence}
  */
  readonly dailyRecurrence?: DevTestScheduleDailyRecurrence[];
  /**
  * hourly_recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#hourly_recurrence DevTestSchedule#hourly_recurrence}
  */
  readonly hourlyRecurrence?: DevTestScheduleHourlyRecurrence[];
  /**
  * notification_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#notification_settings DevTestSchedule#notification_settings}
  */
  readonly notificationSettings: DevTestScheduleNotificationSettings[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#timeouts DevTestSchedule#timeouts}
  */
  readonly timeouts?: DevTestScheduleTimeouts;
  /**
  * weekly_recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#weekly_recurrence DevTestSchedule#weekly_recurrence}
  */
  readonly weeklyRecurrence?: DevTestScheduleWeeklyRecurrence[];
}
export interface DevTestScheduleDailyRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#time DevTestSchedule#time}
  */
  readonly time: string;
}

function devTestScheduleDailyRecurrenceToTerraform(struct?: DevTestScheduleDailyRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface DevTestScheduleHourlyRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#minute DevTestSchedule#minute}
  */
  readonly minute: number;
}

function devTestScheduleHourlyRecurrenceToTerraform(struct?: DevTestScheduleHourlyRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}

export interface DevTestScheduleNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#status DevTestSchedule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#time_in_minutes DevTestSchedule#time_in_minutes}
  */
  readonly timeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#webhook_url DevTestSchedule#webhook_url}
  */
  readonly webhookUrl?: string;
}

function devTestScheduleNotificationSettingsToTerraform(struct?: DevTestScheduleNotificationSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    time_in_minutes: cdktf.numberToTerraform(struct!.timeInMinutes),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}

export interface DevTestScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#create DevTestSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#delete DevTestSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#read DevTestSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#update DevTestSchedule#update}
  */
  readonly update?: string;
}

function devTestScheduleTimeoutsToTerraform(struct?: DevTestScheduleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface DevTestScheduleWeeklyRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#time DevTestSchedule#time}
  */
  readonly time: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html#week_days DevTestSchedule#week_days}
  */
  readonly weekDays?: string[];
}

function devTestScheduleWeeklyRecurrenceToTerraform(struct?: DevTestScheduleWeeklyRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time: cdktf.stringToTerraform(struct!.time),
    week_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekDays),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html azurerm_dev_test_schedule}
*/
export class DevTestSchedule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule.html azurerm_dev_test_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestScheduleConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType: string;
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType
  }

  // time_zone_id - computed: false, optional: false, required: true
  private _timeZoneId: string;
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId
  }

  // daily_recurrence - computed: false, optional: true, required: false
  private _dailyRecurrence?: DevTestScheduleDailyRecurrence[];
  public get dailyRecurrence() {
    return this.interpolationForAttribute('daily_recurrence') as any;
  }
  public set dailyRecurrence(value: DevTestScheduleDailyRecurrence[] ) {
    this._dailyRecurrence = value;
  }
  public resetDailyRecurrence() {
    this._dailyRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceInput() {
    return this._dailyRecurrence
  }

  // hourly_recurrence - computed: false, optional: true, required: false
  private _hourlyRecurrence?: DevTestScheduleHourlyRecurrence[];
  public get hourlyRecurrence() {
    return this.interpolationForAttribute('hourly_recurrence') as any;
  }
  public set hourlyRecurrence(value: DevTestScheduleHourlyRecurrence[] ) {
    this._hourlyRecurrence = value;
  }
  public resetHourlyRecurrence() {
    this._hourlyRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyRecurrenceInput() {
    return this._hourlyRecurrence
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings: DevTestScheduleNotificationSettings[];
  public get notificationSettings() {
    return this.interpolationForAttribute('notification_settings') as any;
  }
  public set notificationSettings(value: DevTestScheduleNotificationSettings[]) {
    this._notificationSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestScheduleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DevTestScheduleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // weekly_recurrence - computed: false, optional: true, required: false
  private _weeklyRecurrence?: DevTestScheduleWeeklyRecurrence[];
  public get weeklyRecurrence() {
    return this.interpolationForAttribute('weekly_recurrence') as any;
  }
  public set weeklyRecurrence(value: DevTestScheduleWeeklyRecurrence[] ) {
    this._weeklyRecurrence = value;
  }
  public resetWeeklyRecurrence() {
    this._weeklyRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRecurrenceInput() {
    return this._weeklyRecurrence
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lab_name: cdktf.stringToTerraform(this._labName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      task_type: cdktf.stringToTerraform(this._taskType),
      time_zone_id: cdktf.stringToTerraform(this._timeZoneId),
      daily_recurrence: cdktf.listMapper(devTestScheduleDailyRecurrenceToTerraform)(this._dailyRecurrence),
      hourly_recurrence: cdktf.listMapper(devTestScheduleHourlyRecurrenceToTerraform)(this._hourlyRecurrence),
      notification_settings: cdktf.listMapper(devTestScheduleNotificationSettingsToTerraform)(this._notificationSettings),
      timeouts: devTestScheduleTimeoutsToTerraform(this._timeouts),
      weekly_recurrence: cdktf.listMapper(devTestScheduleWeeklyRecurrenceToTerraform)(this._weeklyRecurrence),
    };
  }
}
