// https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationJobScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#automation_account_name AutomationJobSchedule#automation_account_name}
  */
  readonly automationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#job_schedule_id AutomationJobSchedule#job_schedule_id}
  */
  readonly jobScheduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#parameters AutomationJobSchedule#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#resource_group_name AutomationJobSchedule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#run_on AutomationJobSchedule#run_on}
  */
  readonly runOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#runbook_name AutomationJobSchedule#runbook_name}
  */
  readonly runbookName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#schedule_name AutomationJobSchedule#schedule_name}
  */
  readonly scheduleName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#timeouts AutomationJobSchedule#timeouts}
  */
  readonly timeouts?: AutomationJobScheduleTimeouts;
}
export interface AutomationJobScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#create AutomationJobSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#delete AutomationJobSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#read AutomationJobSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html#update AutomationJobSchedule#update}
  */
  readonly update?: string;
}

function automationJobScheduleTimeoutsToTerraform(struct?: AutomationJobScheduleTimeoutsOutputReference | AutomationJobScheduleTimeouts): any {
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

export class AutomationJobScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html azurerm_automation_job_schedule}
*/
export class AutomationJobSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_automation_job_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/automation_job_schedule.html azurerm_automation_job_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationJobScheduleConfig
  */
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
  private _automationAccountName?: string; 
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
  private _jobScheduleId?: string | undefined; 
  public get jobScheduleId() {
    return this.getStringAttribute('job_schedule_id');
  }
  public set jobScheduleId(value: string | undefined) {
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _resourceGroupName?: string; 
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
  private _runOn?: string | undefined; 
  public get runOn() {
    return this.getStringAttribute('run_on');
  }
  public set runOn(value: string | undefined) {
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
  private _runbookName?: string; 
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
  private _scheduleName?: string; 
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
  private _timeouts?: AutomationJobScheduleTimeouts | undefined; 
  private __timeoutsOutput = new AutomationJobScheduleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AutomationJobScheduleTimeouts | undefined) {
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
      automation_account_name: cdktf.stringToTerraform(this._automationAccountName),
      job_schedule_id: cdktf.stringToTerraform(this._jobScheduleId),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      run_on: cdktf.stringToTerraform(this._runOn),
      runbook_name: cdktf.stringToTerraform(this._runbookName),
      schedule_name: cdktf.stringToTerraform(this._scheduleName),
      timeouts: automationJobScheduleTimeoutsToTerraform(this._timeouts),
    };
  }
}
