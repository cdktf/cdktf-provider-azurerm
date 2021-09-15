// https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceAssignmentVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#location MaintenanceAssignmentVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#maintenance_configuration_id MaintenanceAssignmentVirtualMachineScaleSet#maintenance_configuration_id}
  */
  readonly maintenanceConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#virtual_machine_scale_set_id MaintenanceAssignmentVirtualMachineScaleSet#virtual_machine_scale_set_id}
  */
  readonly virtualMachineScaleSetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#timeouts MaintenanceAssignmentVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: MaintenanceAssignmentVirtualMachineScaleSetTimeouts;
}
export interface MaintenanceAssignmentVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#create MaintenanceAssignmentVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#delete MaintenanceAssignmentVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#read MaintenanceAssignmentVirtualMachineScaleSet#read}
  */
  readonly read?: string;
}

function maintenanceAssignmentVirtualMachineScaleSetTimeoutsToTerraform(struct?: MaintenanceAssignmentVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html azurerm_maintenance_assignment_virtual_machine_scale_set}
*/
export class MaintenanceAssignmentVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_maintenance_assignment_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html azurerm_maintenance_assignment_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceAssignmentVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceAssignmentVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_assignment_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._maintenanceConfigurationId = config.maintenanceConfigurationId;
    this._virtualMachineScaleSetId = config.virtualMachineScaleSetId;
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

  // maintenance_configuration_id - computed: false, optional: false, required: true
  private _maintenanceConfigurationId: string;
  public get maintenanceConfigurationId() {
    return this.getStringAttribute('maintenance_configuration_id');
  }
  public set maintenanceConfigurationId(value: string) {
    this._maintenanceConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationIdInput() {
    return this._maintenanceConfigurationId
  }

  // virtual_machine_scale_set_id - computed: false, optional: false, required: true
  private _virtualMachineScaleSetId: string;
  public get virtualMachineScaleSetId() {
    return this.getStringAttribute('virtual_machine_scale_set_id');
  }
  public set virtualMachineScaleSetId(value: string) {
    this._virtualMachineScaleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetIdInput() {
    return this._virtualMachineScaleSetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MaintenanceAssignmentVirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MaintenanceAssignmentVirtualMachineScaleSetTimeouts ) {
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
      maintenance_configuration_id: cdktf.stringToTerraform(this._maintenanceConfigurationId),
      virtual_machine_scale_set_id: cdktf.stringToTerraform(this._virtualMachineScaleSetId),
      timeouts: maintenanceAssignmentVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
