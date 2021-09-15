// https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceAssignmentDedicatedHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#dedicated_host_id MaintenanceAssignmentDedicatedHost#dedicated_host_id}
  */
  readonly dedicatedHostId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#location MaintenanceAssignmentDedicatedHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#maintenance_configuration_id MaintenanceAssignmentDedicatedHost#maintenance_configuration_id}
  */
  readonly maintenanceConfigurationId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#timeouts MaintenanceAssignmentDedicatedHost#timeouts}
  */
  readonly timeouts?: MaintenanceAssignmentDedicatedHostTimeouts;
}
export interface MaintenanceAssignmentDedicatedHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#create MaintenanceAssignmentDedicatedHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#delete MaintenanceAssignmentDedicatedHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html#read MaintenanceAssignmentDedicatedHost#read}
  */
  readonly read?: string;
}

function maintenanceAssignmentDedicatedHostTimeoutsToTerraform(struct?: MaintenanceAssignmentDedicatedHostTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html azurerm_maintenance_assignment_dedicated_host}
*/
export class MaintenanceAssignmentDedicatedHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_maintenance_assignment_dedicated_host";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_dedicated_host.html azurerm_maintenance_assignment_dedicated_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceAssignmentDedicatedHostConfig
  */
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
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      location: cdktf.stringToTerraform(this._location),
      maintenance_configuration_id: cdktf.stringToTerraform(this._maintenanceConfigurationId),
      timeouts: maintenanceAssignmentDedicatedHostTimeoutsToTerraform(this._timeouts),
    };
  }
}
