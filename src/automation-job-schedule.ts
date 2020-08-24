// https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationJobScheduleConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly jobScheduleId?: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly runOn?: string;
  readonly runbookName: string;
  readonly scheduleName: string;
  /** timeouts block */
  readonly timeouts?: AutomationJobScheduleTimeouts;
}
export interface AutomationJobScheduleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationJobSchedule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationJobScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_job_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._jobScheduleId = config.jobScheduleId;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._runOn = config.runOn;
    this._runbookName = config.runbookName;
    this._scheduleName = config.scheduleName;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // job_schedule_id - computed: true, optional: true, required: false
  private _jobScheduleId?: string;
  public get jobScheduleId() {
    return this._jobScheduleId ?? this.getStringAttribute('job_schedule_id');
  }
  public set jobScheduleId(value: string | undefined) {
    this._jobScheduleId = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // run_on - computed: false, optional: true, required: false
  private _runOn?: string;
  public get runOn() {
    return this._runOn;
  }
  public set runOn(value: string | undefined) {
    this._runOn = value;
  }

  // runbook_name - computed: false, optional: false, required: true
  private _runbookName: string;
  public get runbookName() {
    return this._runbookName;
  }
  public set runbookName(value: string) {
    this._runbookName = value;
  }

  // schedule_name - computed: false, optional: false, required: true
  private _scheduleName: string;
  public get scheduleName() {
    return this._scheduleName;
  }
  public set scheduleName(value: string) {
    this._scheduleName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationJobScheduleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationJobScheduleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      job_schedule_id: this._jobScheduleId,
      parameters: this._parameters,
      resource_group_name: this._resourceGroupName,
      run_on: this._runOn,
      runbook_name: this._runbookName,
      schedule_name: this._scheduleName,
      timeouts: this._timeouts,
    };
  }
}
