// https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationRunbookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#automation_account_name AutomationRunbook#automation_account_name}
  */
  readonly automationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#content AutomationRunbook#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#description AutomationRunbook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#job_schedule AutomationRunbook#job_schedule}
  */
  readonly jobSchedule?: AutomationRunbookJobSchedule[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#location AutomationRunbook#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#log_progress AutomationRunbook#log_progress}
  */
  readonly logProgress: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#log_verbose AutomationRunbook#log_verbose}
  */
  readonly logVerbose: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#name AutomationRunbook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#resource_group_name AutomationRunbook#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#runbook_type AutomationRunbook#runbook_type}
  */
  readonly runbookType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#tags AutomationRunbook#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * publish_content_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#publish_content_link AutomationRunbook#publish_content_link}
  */
  readonly publishContentLink?: AutomationRunbookPublishContentLink[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#timeouts AutomationRunbook#timeouts}
  */
  readonly timeouts?: AutomationRunbookTimeouts;
}
export interface AutomationRunbookJobSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#job_schedule_id AutomationRunbook#job_schedule_id}
  */
  readonly jobScheduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#parameters AutomationRunbook#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#run_on AutomationRunbook#run_on}
  */
  readonly runOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#schedule_name AutomationRunbook#schedule_name}
  */
  readonly scheduleName?: string;
}

function automationRunbookJobScheduleToTerraform(struct?: AutomationRunbookJobSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    job_schedule_id: struct!.jobScheduleId === undefined ? null : cdktf.stringToTerraform(struct!.jobScheduleId),
    parameters: struct!.parameters === undefined ? null : cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    run_on: struct!.runOn === undefined ? null : cdktf.stringToTerraform(struct!.runOn),
    schedule_name: struct!.scheduleName === undefined ? null : cdktf.stringToTerraform(struct!.scheduleName),
  }
}

export interface AutomationRunbookPublishContentLinkHash {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#algorithm AutomationRunbook#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#value AutomationRunbook#value}
  */
  readonly value: string;
}

function automationRunbookPublishContentLinkHashToTerraform(struct?: AutomationRunbookPublishContentLinkHash): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AutomationRunbookPublishContentLink {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#uri AutomationRunbook#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#version AutomationRunbook#version}
  */
  readonly version?: string;
  /**
  * hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#hash AutomationRunbook#hash}
  */
  readonly hash?: AutomationRunbookPublishContentLinkHash[];
}

function automationRunbookPublishContentLinkToTerraform(struct?: AutomationRunbookPublishContentLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
    version: cdktf.stringToTerraform(struct!.version),
    hash: cdktf.listMapper(automationRunbookPublishContentLinkHashToTerraform)(struct!.hash),
  }
}

export interface AutomationRunbookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#create AutomationRunbook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#delete AutomationRunbook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#read AutomationRunbook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html#update AutomationRunbook#update}
  */
  readonly update?: string;
}

function automationRunbookTimeoutsToTerraform(struct?: AutomationRunbookTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html azurerm_automation_runbook}
*/
export class AutomationRunbook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_automation_runbook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html azurerm_automation_runbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRunbookConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRunbookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_runbook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._content = config.content;
    this._description = config.description;
    this._jobSchedule = config.jobSchedule;
    this._location = config.location;
    this._logProgress = config.logProgress;
    this._logVerbose = config.logVerbose;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._runbookType = config.runbookType;
    this._tags = config.tags;
    this._publishContentLink = config.publishContentLink;
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

  // content - computed: true, optional: true, required: false
  private _content?: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_schedule - computed: true, optional: true, required: false
  private _jobSchedule?: AutomationRunbookJobSchedule[]
  public get jobSchedule(): AutomationRunbookJobSchedule[] {
    return this.interpolationForAttribute('job_schedule') as any; // Getting the computed value is not yet implemented
  }
  public set jobSchedule(value: AutomationRunbookJobSchedule[]) {
    this._jobSchedule = value;
  }
  public resetJobSchedule() {
    this._jobSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobScheduleInput() {
    return this._jobSchedule
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

  // log_progress - computed: false, optional: false, required: true
  private _logProgress: boolean | cdktf.IResolvable;
  public get logProgress() {
    return this.getBooleanAttribute('log_progress');
  }
  public set logProgress(value: boolean | cdktf.IResolvable) {
    this._logProgress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProgressInput() {
    return this._logProgress
  }

  // log_verbose - computed: false, optional: false, required: true
  private _logVerbose: boolean | cdktf.IResolvable;
  public get logVerbose() {
    return this.getBooleanAttribute('log_verbose');
  }
  public set logVerbose(value: boolean | cdktf.IResolvable) {
    this._logVerbose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logVerboseInput() {
    return this._logVerbose
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

  // runbook_type - computed: false, optional: false, required: true
  private _runbookType: string;
  public get runbookType() {
    return this.getStringAttribute('runbook_type');
  }
  public set runbookType(value: string) {
    this._runbookType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookTypeInput() {
    return this._runbookType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // publish_content_link - computed: false, optional: true, required: false
  private _publishContentLink?: AutomationRunbookPublishContentLink[];
  public get publishContentLink() {
    return this.interpolationForAttribute('publish_content_link') as any;
  }
  public set publishContentLink(value: AutomationRunbookPublishContentLink[] ) {
    this._publishContentLink = value;
  }
  public resetPublishContentLink() {
    this._publishContentLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishContentLinkInput() {
    return this._publishContentLink
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationRunbookTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationRunbookTimeouts ) {
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
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
      job_schedule: cdktf.listMapper(automationRunbookJobScheduleToTerraform)(this._jobSchedule),
      location: cdktf.stringToTerraform(this._location),
      log_progress: cdktf.booleanToTerraform(this._logProgress),
      log_verbose: cdktf.booleanToTerraform(this._logVerbose),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      runbook_type: cdktf.stringToTerraform(this._runbookType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      publish_content_link: cdktf.listMapper(automationRunbookPublishContentLinkToTerraform)(this._publishContentLink),
      timeouts: automationRunbookTimeoutsToTerraform(this._timeouts),
    };
  }
}
