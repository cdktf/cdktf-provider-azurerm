// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_logic_app_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermLogicAppWorkflowConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLogicAppWorkflowTimeouts;
}
export interface DataAzurermLogicAppWorkflowTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermLogicAppWorkflow extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermLogicAppWorkflowConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: true, optional: false, required: true
  public parameters(key: string): string {
    return new StringMap(this, 'parameters').lookup(key);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // workflow_schema - computed: true, optional: false, required: true
  public get workflowSchema() {
    return this.getStringAttribute('workflow_schema');
  }

  // workflow_version - computed: true, optional: false, required: true
  public get workflowVersion() {
    return this.getStringAttribute('workflow_version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLogicAppWorkflowTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermLogicAppWorkflowTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
