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
  readonly location: string;
  readonly logProgress: boolean;
  readonly logVerbose: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly runbookType: string;
  readonly tags?: { [key: string]: string };
  /** publish_content_link block */
  readonly publishContentLink: AutomationRunbookPublishContentLink[];
  /** timeouts block */
  readonly timeouts?: AutomationRunbookTimeouts;
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
    return this._automationAccountName;
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string;
  public get content() {
    return this._content ?? this.getStringAttribute('content');
  }
  public set content(value: string | undefined) {
    this._content = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // log_progress - computed: false, optional: false, required: true
  private _logProgress: boolean;
  public get logProgress() {
    return this._logProgress;
  }
  public set logProgress(value: boolean) {
    this._logProgress = value;
  }

  // log_verbose - computed: false, optional: false, required: true
  private _logVerbose: boolean;
  public get logVerbose() {
    return this._logVerbose;
  }
  public set logVerbose(value: boolean) {
    this._logVerbose = value;
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

  // runbook_type - computed: false, optional: false, required: true
  private _runbookType: string;
  public get runbookType() {
    return this._runbookType;
  }
  public set runbookType(value: string) {
    this._runbookType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // publish_content_link - computed: false, optional: false, required: true
  private _publishContentLink: AutomationRunbookPublishContentLink[];
  public get publishContentLink() {
    return this._publishContentLink;
  }
  public set publishContentLink(value: AutomationRunbookPublishContentLink[]) {
    this._publishContentLink = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationRunbookTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationRunbookTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      content: this._content,
      description: this._description,
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
