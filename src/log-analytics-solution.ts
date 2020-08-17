// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_solution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsSolutionConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly resourceGroupName: string;
  readonly solutionName: string;
  readonly workspaceName: string;
  readonly workspaceResourceId: string;
  /** plan block */
  readonly plan: LogAnalyticsSolutionPlan[];
  /** timeouts block */
  readonly timeouts?: LogAnalyticsSolutionTimeouts;
}
export interface LogAnalyticsSolutionPlan {
  readonly product: string;
  readonly promotionCode?: string;
  readonly publisher: string;
}
export interface LogAnalyticsSolutionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsSolution extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogAnalyticsSolutionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_solution',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._solutionName = config.solutionName;
    this._workspaceName = config.workspaceName;
    this._workspaceResourceId = config.workspaceResourceId;
    this._plan = config.plan;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // solution_name - computed: false, optional: false, required: true
  private _solutionName: string;
  public get solutionName() {
    return this._solutionName;
  }
  public set solutionName(value: string) {
    this._solutionName = value;
  }

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName: string;
  public get workspaceName() {
    return this._workspaceName;
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId: string;
  public get workspaceResourceId() {
    return this._workspaceResourceId;
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }

  // plan - computed: false, optional: false, required: true
  private _plan: LogAnalyticsSolutionPlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: LogAnalyticsSolutionPlan[]) {
    this._plan = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsSolutionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogAnalyticsSolutionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      resource_group_name: this._resourceGroupName,
      solution_name: this._solutionName,
      workspace_name: this._workspaceName,
      workspace_resource_id: this._workspaceResourceId,
      plan: this._plan,
      timeouts: this._timeouts,
    };
  }
}
