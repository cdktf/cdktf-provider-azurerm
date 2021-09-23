// https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html#name DataAzurermPolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html#resource_group_name DataAzurermPolicyVirtualMachineConfigurationAssignment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html#virtual_machine_name DataAzurermPolicyVirtualMachineConfigurationAssignment#virtual_machine_name}
  */
  readonly virtualMachineName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html#timeouts DataAzurermPolicyVirtualMachineConfigurationAssignment#timeouts}
  */
  readonly timeouts?: DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts;
}
export interface DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html#read DataAzurermPolicyVirtualMachineConfigurationAssignment#read}
  */
  readonly read?: string;
}

function dataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(struct?: DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html azurerm_policy_virtual_machine_configuration_assignment}
*/
export class DataAzurermPolicyVirtualMachineConfigurationAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_virtual_machine_configuration_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/policy_virtual_machine_configuration_assignment.html azurerm_policy_virtual_machine_configuration_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_virtual_machine_configuration_assignment',
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
    this._virtualMachineName = config.virtualMachineName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_hash - computed: true, optional: false, required: false
  public get assignmentHash() {
    return this.getStringAttribute('assignment_hash');
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }

  // content_hash - computed: true, optional: false, required: false
  public get contentHash() {
    return this.getStringAttribute('content_hash');
  }

  // content_uri - computed: true, optional: false, required: false
  public get contentUri() {
    return this.getStringAttribute('content_uri');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_compliance_status_checked - computed: true, optional: false, required: false
  public get lastComplianceStatusChecked() {
    return this.getStringAttribute('last_compliance_status_checked');
  }

  // latest_report_id - computed: true, optional: false, required: false
  public get latestReportId() {
    return this.getStringAttribute('latest_report_id');
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

  // virtual_machine_name - computed: false, optional: false, required: true
  private _virtualMachineName: string;
  public get virtualMachineName() {
    return this.getStringAttribute('virtual_machine_name');
  }
  public set virtualMachineName(value: string) {
    this._virtualMachineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineNameInput() {
    return this._virtualMachineName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts ) {
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
      virtual_machine_name: cdktf.stringToTerraform(this._virtualMachineName),
      timeouts: dataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
