// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_solution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsSolutionConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly resourceGroupName: string;
  readonly solutionName: string;
  readonly tags?: { [key: string]: string };
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

function logAnalyticsSolutionPlanToTerraform(struct?: LogAnalyticsSolutionPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    product: cdktf.stringToTerraform(struct!.product),
    promotion_code: cdktf.stringToTerraform(struct!.promotionCode),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export interface LogAnalyticsSolutionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logAnalyticsSolutionTimeoutsToTerraform(struct?: LogAnalyticsSolutionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogAnalyticsSolution extends cdktf.TerraformResource {

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
    this._tags = config.tags;
    this._workspaceName = config.workspaceName;
    this._workspaceResourceId = config.workspaceResourceId;
    this._plan = config.plan;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // solution_name - computed: false, optional: false, required: true
  private _solutionName: string;
  public get solutionName() {
    return this.getStringAttribute('solution_name');
  }
  public set solutionName(value: string) {
    this._solutionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionNameInput() {
    return this._solutionName
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

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName: string;
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName
  }

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId: string;
  public get workspaceResourceId() {
    return this.getStringAttribute('workspace_resource_id');
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceResourceIdInput() {
    return this._workspaceResourceId
  }

  // plan - computed: false, optional: false, required: true
  private _plan: LogAnalyticsSolutionPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: LogAnalyticsSolutionPlan[]) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsSolutionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsSolutionTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      solution_name: cdktf.stringToTerraform(this._solutionName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
      workspace_resource_id: cdktf.stringToTerraform(this._workspaceResourceId),
      plan: cdktf.listMapper(logAnalyticsSolutionPlanToTerraform)(this._plan),
      timeouts: logAnalyticsSolutionTimeoutsToTerraform(this._timeouts),
    };
  }
}
