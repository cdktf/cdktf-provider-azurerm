// https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MaintenanceAssignmentDedicatedHostConfig extends TerraformMetaArguments {
  readonly dedicatedHostId: string;
  readonly location: string;
  readonly maintenanceConfigurationId: string;
  /** timeouts block */
  readonly timeouts?: MaintenanceAssignmentDedicatedHostTimeouts;
}
export interface MaintenanceAssignmentDedicatedHostTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class MaintenanceAssignmentDedicatedHost extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MaintenanceAssignmentDedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_assignment_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dedicatedHostId = config.dedicatedHostId;
    this._location = config.location;
    this._maintenanceConfigurationId = config.maintenanceConfigurationId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_host_id - computed: false, optional: false, required: true
  private _dedicatedHostId: string;
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string) {
    this._dedicatedHostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId
  }

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MaintenanceAssignmentDedicatedHostTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MaintenanceAssignmentDedicatedHostTimeouts ) {
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
      dedicated_host_id: this._dedicatedHostId,
      location: this._location,
      maintenance_configuration_id: this._maintenanceConfigurationId,
      timeouts: this._timeouts,
    };
  }
}
