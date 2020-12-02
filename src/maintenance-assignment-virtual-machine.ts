// https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MaintenanceAssignmentVirtualMachineConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly maintenanceConfigurationId: string;
  readonly virtualMachineId: string;
  /** timeouts block */
  readonly timeouts?: MaintenanceAssignmentVirtualMachineTimeouts;
}
export interface MaintenanceAssignmentVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class MaintenanceAssignmentVirtualMachine extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MaintenanceAssignmentVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_assignment_virtual_machine',
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
    this._virtualMachineId = config.virtualMachineId;
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MaintenanceAssignmentVirtualMachineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MaintenanceAssignmentVirtualMachineTimeouts ) {
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
      location: this._location,
      maintenance_configuration_id: this._maintenanceConfigurationId,
      virtual_machine_id: this._virtualMachineId,
      timeouts: this._timeouts,
    };
  }
}
