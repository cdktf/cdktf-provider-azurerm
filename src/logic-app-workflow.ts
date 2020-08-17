// https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogicAppWorkflowConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly workflowSchema?: string;
  readonly workflowVersion?: string;
  /** timeouts block */
  readonly timeouts?: LogicAppWorkflowTimeouts;
}
export interface LogicAppWorkflowTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogicAppWorkflow extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogicAppWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_workflow',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._workflowSchema = config.workflowSchema;
    this._workflowVersion = config.workflowVersion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint - computed: true, optional: false, required: true
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // workflow_schema - computed: false, optional: true, required: false
  private _workflowSchema?: string;
  public get workflowSchema() {
    return this._workflowSchema;
  }
  public set workflowSchema(value: string | undefined) {
    this._workflowSchema = value;
  }

  // workflow_version - computed: false, optional: true, required: false
  private _workflowVersion?: string;
  public get workflowVersion() {
    return this._workflowVersion;
  }
  public set workflowVersion(value: string | undefined) {
    this._workflowVersion = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppWorkflowTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogicAppWorkflowTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      parameters: this._parameters,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      workflow_schema: this._workflowSchema,
      workflow_version: this._workflowVersion,
      timeouts: this._timeouts,
    };
  }
}
