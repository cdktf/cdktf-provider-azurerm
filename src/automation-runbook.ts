// https://www.terraform.io/docs/providers/azurerm/r/automation_runbook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationRunbookConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly content?: string;
  readonly description?: string;
  readonly jobSchedule?: AutomationRunbookJobSchedule[];
  readonly location: string;
  readonly logProgress: boolean;
  readonly logVerbose: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly runbookType: string;
  readonly tags?: { [key: string]: string };
  /** publish_content_link block */
  readonly publishContentLink?: AutomationRunbookPublishContentLink[];
  /** timeouts block */
  readonly timeouts?: AutomationRunbookTimeouts;
}
export interface AutomationRunbookJobSchedule {
  readonly jobScheduleId?: string;
  readonly parameters?: { [key: string]: string };
  readonly runOn?: string;
  readonly scheduleName?: string;
}
export interface AutomationRunbookPublishContentLinkHash {
  readonly algorithm: string;
  readonly value: string;
}
export interface AutomationRunbookPublishContentLink {
  readonly uri: string;
  readonly version?: string;
  /** hash block */
  readonly hash?: AutomationRunbookPublishContentLinkHash[];
}
export interface AutomationRunbookTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationRunbook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _logProgress: boolean;
  public get logProgress() {
    return this.getBooleanAttribute('log_progress');
  }
  public set logProgress(value: boolean) {
    this._logProgress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProgressInput() {
    return this._logProgress
  }

  // log_verbose - computed: false, optional: false, required: true
  private _logVerbose: boolean;
  public get logVerbose() {
    return this.getBooleanAttribute('log_verbose');
  }
  public set logVerbose(value: boolean) {
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
      automation_account_name: this._automationAccountName,
      content: this._content,
      description: this._description,
      job_schedule: this._jobSchedule,
      location: this._location,
      log_progress: this._logProgress,
      log_verbose: this._logVerbose,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      runbook_type: this._runbookType,
      tags: this._tags,
      publish_content_link: this._publishContentLink,
      timeouts: this._timeouts,
    };
  }
}
