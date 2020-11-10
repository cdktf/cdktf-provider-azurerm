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
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_schedule_id - computed: true, optional: true, required: false
  private _jobScheduleId?: string;
  public get jobScheduleId() {
    return this.getStringAttribute('job_schedule_id');
  }
  public set jobScheduleId(value: string) {
    this._jobScheduleId = value;
  }
  public resetJobScheduleId() {
    this._jobScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobScheduleIdInput() {
    return this._jobScheduleId
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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

  // run_on - computed: false, optional: true, required: false
  private _runOn?: string;
  public get runOn() {
    return this.getStringAttribute('run_on');
  }
  public set runOn(value: string ) {
    this._runOn = value;
  }
  public resetRunOn() {
    this._runOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnInput() {
    return this._runOn
  }

  // runbook_name - computed: false, optional: false, required: true
  private _runbookName: string;
  public get runbookName() {
    return this.getStringAttribute('runbook_name');
  }
  public set runbookName(value: string) {
    this._runbookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookNameInput() {
    return this._runbookName
  }

  // schedule_name - computed: false, optional: false, required: true
  private _scheduleName: string;
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }
  public set scheduleName(value: string) {
    this._scheduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleNameInput() {
    return this._scheduleName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationJobScheduleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationJobScheduleTimeouts ) {
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
