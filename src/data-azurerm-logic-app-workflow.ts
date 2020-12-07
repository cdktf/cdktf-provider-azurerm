// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_logic_app_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermLogicAppWorkflowConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLogicAppWorkflowTimeouts;
}
export interface DataAzurermLogicAppWorkflowTimeouts {
  readonly read?: string;
}

function dataAzurermLogicAppWorkflowTimeoutsToTerraform(struct?: DataAzurermLogicAppWorkflowTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermLogicAppWorkflow extends cdktf.TerraformDataSource {

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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // logic_app_integration_account_id - computed: true, optional: false, required: false
  public get logicAppIntegrationAccountId() {
    return this.getStringAttribute('logic_app_integration_account_id');
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

  // parameters - computed: true, optional: false, required: false
  public parameters(key: string): string {
    return new cdktf.StringMap(this, 'parameters').lookup(key);
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // workflow_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get workflowEndpointIpAddresses() {
    return this.getListAttribute('workflow_endpoint_ip_addresses');
  }

  // workflow_outbound_ip_addresses - computed: true, optional: false, required: false
  public get workflowOutboundIpAddresses() {
    return this.getListAttribute('workflow_outbound_ip_addresses');
  }

  // workflow_schema - computed: true, optional: false, required: false
  public get workflowSchema() {
    return this.getStringAttribute('workflow_schema');
  }

  // workflow_version - computed: true, optional: false, required: false
  public get workflowVersion() {
    return this.getStringAttribute('workflow_version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLogicAppWorkflowTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermLogicAppWorkflowTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermLogicAppWorkflowTimeoutsToTerraform(this._timeouts),
    };
  }
}
