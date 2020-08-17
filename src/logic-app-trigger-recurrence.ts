// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_recurrence.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogicAppTriggerRecurrenceConfig extends TerraformMetaArguments {
  readonly frequency: string;
  readonly interval: number;
  readonly logicAppId: string;
  readonly name: string;
  readonly startTime?: string;
  /** timeouts block */
  readonly timeouts?: LogicAppTriggerRecurrenceTimeouts;
}
export interface LogicAppTriggerRecurrenceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogicAppTriggerRecurrence extends TerraformResource {

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interval - computed: false, optional: false, required: true
  private _interval: number;
  public get interval() {
    return this._interval;
  }
  public set interval(value: number) {
    this._interval = value;
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId: string;
  public get logicAppId() {
    return this._logicAppId;
  }
  public set logicAppId(value: string) {
    this._logicAppId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this._startTime;
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppTriggerRecurrenceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogicAppTriggerRecurrenceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      frequency: this._frequency,
      interval: this._interval,
      logic_app_id: this._logicAppId,
      name: this._name,
      start_time: this._startTime,
      timeouts: this._timeouts,
    };
  }
}
