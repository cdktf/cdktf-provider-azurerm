// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppTriggerRecurrenceConfig extends cdktf.TerraformMetaArguments {
  readonly frequency: string;
  readonly interval: number;
  readonly logicAppId: string;
  readonly name: string;
  readonly startTime?: string;
  readonly timeZone?: string;
  /** schedule block */
  readonly schedule?: LogicAppTriggerRecurrenceSchedule[];
  /** timeouts block */
  readonly timeouts?: LogicAppTriggerRecurrenceTimeouts;
}
export interface LogicAppTriggerRecurrenceSchedule {
  readonly atTheseHours?: number[];
  readonly atTheseMinutes?: number[];
  readonly onTheseDays?: string[];
}

function logicAppTriggerRecurrenceScheduleToTerraform(struct?: LogicAppTriggerRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    at_these_hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.atTheseHours),
    at_these_minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.atTheseMinutes),
    on_these_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.onTheseDays),
  }
}

export interface LogicAppTriggerRecurrenceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logicAppTriggerRecurrenceTimeoutsToTerraform(struct?: LogicAppTriggerRecurrenceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogicAppTriggerRecurrence extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogicAppTriggerRecurrenceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_trigger_recurrence',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._logicAppId = config.logicAppId;
    this._name = config.name;
    this._startTime = config.startTime;
    this._timeZone = config.timeZone;
    this._schedule = config.schedule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: false, required: true
  private _frequency: string;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: false, required: true
  private _interval: number;
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId: string;
  public get logicAppId() {
    return this.getStringAttribute('logic_app_id');
  }
  public set logicAppId(value: string) {
    this._logicAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIdInput() {
    return this._logicAppId
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string ) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // time_zone - computed: true, optional: true, required: false
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
    return this._timeZone
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: LogicAppTriggerRecurrenceSchedule[];
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: LogicAppTriggerRecurrenceSchedule[] ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppTriggerRecurrenceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppTriggerRecurrenceTimeouts ) {
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
      frequency: cdktf.stringToTerraform(this._frequency),
      interval: cdktf.numberToTerraform(this._interval),
      logic_app_id: cdktf.stringToTerraform(this._logicAppId),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.stringToTerraform(this._startTime),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      schedule: cdktf.listMapper(logicAppTriggerRecurrenceScheduleToTerraform)(this._schedule),
      timeouts: logicAppTriggerRecurrenceTimeoutsToTerraform(this._timeouts),
    };
  }
}
