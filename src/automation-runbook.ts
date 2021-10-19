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
  readonly publishContentLink?: AutomationRunbookPublishContentLink;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function automationRunbookPublishContentLinkHashToTerraform(struct?: AutomationRunbookPublishContentLinkHashOutputReference | AutomationRunbookPublishContentLinkHash): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutomationRunbookPublishContentLinkHashOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
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
  readonly hash?: AutomationRunbookPublishContentLinkHash;
}

function automationRunbookPublishContentLinkToTerraform(struct?: AutomationRunbookPublishContentLinkOutputReference | AutomationRunbookPublishContentLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
    version: cdktf.stringToTerraform(struct!.version),
    hash: automationRunbookPublishContentLinkHashToTerraform(struct!.hash),
  }
}

export class AutomationRunbookPublishContentLinkOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri
  }

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: AutomationRunbookPublishContentLinkHash | undefined; 
  private __hashOutput = new AutomationRunbookPublishContentLinkHashOutputReference(this as any, "hash", true);
  public get hash() {
    return this.__hashOutput;
  }
  public putHash(value: AutomationRunbookPublishContentLinkHash | undefined) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash
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

function automationRunbookTimeoutsToTerraform(struct?: AutomationRunbookTimeoutsOutputReference | AutomationRunbookTimeouts): any {
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

export class AutomationRunbookTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // content - computed: true, optional: true, required: false
  private _content?: string | undefined; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string | undefined) {
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _jobSchedule?: AutomationRunbookJobSchedule[] | undefined; 
  public get jobSchedule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('job_schedule') as any;
  }
  public set jobSchedule(value: AutomationRunbookJobSchedule[] | undefined) {
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
  private _location?: string; 
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
  private _logProgress?: boolean | cdktf.IResolvable; 
  public get logProgress() {
    return this.getBooleanAttribute('log_progress') as any;
  }
  public set logProgress(value: boolean | cdktf.IResolvable) {
    this._logProgress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProgressInput() {
    return this._logProgress
  }

  // log_verbose - computed: false, optional: false, required: true
  private _logVerbose?: boolean | cdktf.IResolvable; 
  public get logVerbose() {
    return this.getBooleanAttribute('log_verbose') as any;
  }
  public set logVerbose(value: boolean | cdktf.IResolvable) {
    this._logVerbose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logVerboseInput() {
    return this._logVerbose
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

  // runbook_type - computed: false, optional: false, required: true
  private _runbookType?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _publishContentLink?: AutomationRunbookPublishContentLink | undefined; 
  private __publishContentLinkOutput = new AutomationRunbookPublishContentLinkOutputReference(this as any, "publish_content_link", true);
  public get publishContentLink() {
    return this.__publishContentLinkOutput;
  }
  public putPublishContentLink(value: AutomationRunbookPublishContentLink | undefined) {
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
  private _timeouts?: AutomationRunbookTimeouts | undefined; 
  private __timeoutsOutput = new AutomationRunbookTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AutomationRunbookTimeouts | undefined) {
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
      publish_content_link: automationRunbookPublishContentLinkToTerraform(this._publishContentLink),
      timeouts: automationRunbookTimeoutsToTerraform(this._timeouts),
    };
  }
}
