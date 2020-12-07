// https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppWorkflowConfig extends cdktf.TerraformMetaArguments {
  readonly integrationServiceEnvironmentId?: string;
  readonly location: string;
  readonly logicAppIntegrationAccountId?: string;
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

function logicAppWorkflowTimeoutsToTerraform(struct?: LogicAppWorkflowTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogicAppWorkflow extends cdktf.TerraformResource {

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
    this._integrationServiceEnvironmentId = config.integrationServiceEnvironmentId;
    this._location = config.location;
    this._logicAppIntegrationAccountId = config.logicAppIntegrationAccountId;
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

  // access_endpoint - computed: true, optional: false, required: false
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
  }

  // connector_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get connectorEndpointIpAddresses() {
    return this.getListAttribute('connector_endpoint_ip_addresses');
  }

  // connector_outbound_ip_addresses - computed: true, optional: false, required: false
  public get connectorOutboundIpAddresses() {
    return this.getListAttribute('connector_outbound_ip_addresses');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_service_environment_id - computed: false, optional: true, required: false
  private _integrationServiceEnvironmentId?: string;
  public get integrationServiceEnvironmentId() {
    return this.getStringAttribute('integration_service_environment_id');
  }
  public set integrationServiceEnvironmentId(value: string ) {
    this._integrationServiceEnvironmentId = value;
  }
  public resetIntegrationServiceEnvironmentId() {
    this._integrationServiceEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationServiceEnvironmentIdInput() {
    return this._integrationServiceEnvironmentId
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

  // logic_app_integration_account_id - computed: false, optional: true, required: false
  private _logicAppIntegrationAccountId?: string;
  public get logicAppIntegrationAccountId() {
    return this.getStringAttribute('logic_app_integration_account_id');
  }
  public set logicAppIntegrationAccountId(value: string ) {
    this._logicAppIntegrationAccountId = value;
  }
  public resetLogicAppIntegrationAccountId() {
    this._logicAppIntegrationAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIntegrationAccountIdInput() {
    return this._logicAppIntegrationAccountId
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

  // workflow_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get workflowEndpointIpAddresses() {
    return this.getListAttribute('workflow_endpoint_ip_addresses');
  }

  // workflow_outbound_ip_addresses - computed: true, optional: false, required: false
  public get workflowOutboundIpAddresses() {
    return this.getListAttribute('workflow_outbound_ip_addresses');
  }

  // workflow_schema - computed: false, optional: true, required: false
  private _workflowSchema?: string;
  public get workflowSchema() {
    return this.getStringAttribute('workflow_schema');
  }
  public set workflowSchema(value: string ) {
    this._workflowSchema = value;
  }
  public resetWorkflowSchema() {
    this._workflowSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowSchemaInput() {
    return this._workflowSchema
  }

  // workflow_version - computed: false, optional: true, required: false
  private _workflowVersion?: string;
  public get workflowVersion() {
    return this.getStringAttribute('workflow_version');
  }
  public set workflowVersion(value: string ) {
    this._workflowVersion = value;
  }
  public resetWorkflowVersion() {
    this._workflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowVersionInput() {
    return this._workflowVersion
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppWorkflowTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppWorkflowTimeouts ) {
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
      integration_service_environment_id: cdktf.stringToTerraform(this._integrationServiceEnvironmentId),
      location: cdktf.stringToTerraform(this._location),
      logic_app_integration_account_id: cdktf.stringToTerraform(this._logicAppIntegrationAccountId),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      workflow_schema: cdktf.stringToTerraform(this._workflowSchema),
      workflow_version: cdktf.stringToTerraform(this._workflowVersion),
      timeouts: logicAppWorkflowTimeoutsToTerraform(this._timeouts),
    };
  }
}
