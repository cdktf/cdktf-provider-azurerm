// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppTriggerRecurrenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#frequency LogicAppTriggerRecurrence#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#interval LogicAppTriggerRecurrence#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#logic_app_id LogicAppTriggerRecurrence#logic_app_id}
  */
  readonly logicAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#name LogicAppTriggerRecurrence#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#start_time LogicAppTriggerRecurrence#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#time_zone LogicAppTriggerRecurrence#time_zone}
  */
  readonly timeZone?: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#schedule LogicAppTriggerRecurrence#schedule}
  */
  readonly schedule?: LogicAppTriggerRecurrenceSchedule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#timeouts LogicAppTriggerRecurrence#timeouts}
  */
  readonly timeouts?: LogicAppTriggerRecurrenceTimeouts;
}
export interface LogicAppTriggerRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#at_these_hours LogicAppTriggerRecurrence#at_these_hours}
  */
  readonly atTheseHours?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}
  */
  readonly atTheseMinutes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#on_these_days LogicAppTriggerRecurrence#on_these_days}
  */
  readonly onTheseDays?: string[];
}

function logicAppTriggerRecurrenceScheduleToTerraform(struct?: LogicAppTriggerRecurrenceScheduleOutputReference | LogicAppTriggerRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_these_hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.atTheseHours),
    at_these_minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.atTheseMinutes),
    on_these_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.onTheseDays),
  }
}

export class LogicAppTriggerRecurrenceScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // at_these_hours - computed: false, optional: true, required: false
  private _atTheseHours?: number[] | undefined; 
  public get atTheseHours() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('at_these_hours') as any;
  }
  public set atTheseHours(value: number[] | undefined) {
    this._atTheseHours = value;
  }
  public resetAtTheseHours() {
    this._atTheseHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atTheseHoursInput() {
    return this._atTheseHours
  }

  // at_these_minutes - computed: false, optional: true, required: false
  private _atTheseMinutes?: number[] | undefined; 
  public get atTheseMinutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('at_these_minutes') as any;
  }
  public set atTheseMinutes(value: number[] | undefined) {
    this._atTheseMinutes = value;
  }
  public resetAtTheseMinutes() {
    this._atTheseMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atTheseMinutesInput() {
    return this._atTheseMinutes
  }

  // on_these_days - computed: false, optional: true, required: false
  private _onTheseDays?: string[] | undefined; 
  public get onTheseDays() {
    return this.getListAttribute('on_these_days');
  }
  public set onTheseDays(value: string[] | undefined) {
    this._onTheseDays = value;
  }
  public resetOnTheseDays() {
    this._onTheseDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTheseDaysInput() {
    return this._onTheseDays
  }
}
export interface LogicAppTriggerRecurrenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#create LogicAppTriggerRecurrence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#delete LogicAppTriggerRecurrence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#read LogicAppTriggerRecurrence#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html#update LogicAppTriggerRecurrence#update}
  */
  readonly update?: string;
}

function logicAppTriggerRecurrenceTimeoutsToTerraform(struct?: LogicAppTriggerRecurrenceTimeoutsOutputReference | LogicAppTriggerRecurrenceTimeouts): any {
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

export class LogicAppTriggerRecurrenceTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html azurerm_logic_app_trigger_recurrence}
*/
export class LogicAppTriggerRecurrence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_trigger_recurrence";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html azurerm_logic_app_trigger_recurrence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppTriggerRecurrenceConfig
  */
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._interval
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId?: string; 
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
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
  private _timeZone?: string | undefined; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string | undefined) {
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
  private _schedule?: LogicAppTriggerRecurrenceSchedule | undefined; 
  private __scheduleOutput = new LogicAppTriggerRecurrenceScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this.__scheduleOutput;
  }
  public putSchedule(value: LogicAppTriggerRecurrenceSchedule | undefined) {
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
  private _timeouts?: LogicAppTriggerRecurrenceTimeouts | undefined; 
  private __timeoutsOutput = new LogicAppTriggerRecurrenceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogicAppTriggerRecurrenceTimeouts | undefined) {
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
      schedule: logicAppTriggerRecurrenceScheduleToTerraform(this._schedule),
      timeouts: logicAppTriggerRecurrenceTimeoutsToTerraform(this._timeouts),
    };
  }
}
