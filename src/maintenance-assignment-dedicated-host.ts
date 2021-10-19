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

function maintenanceAssignmentDedicatedHostTimeoutsToTerraform(struct?: MaintenanceAssignmentDedicatedHostTimeoutsOutputReference | MaintenanceAssignmentDedicatedHostTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class MaintenanceAssignmentDedicatedHostTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
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
  private _dedicatedHostId?: string; 
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
  private _location?: string; 
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
  private _maintenanceConfigurationId?: string; 
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
  private _timeouts?: MaintenanceAssignmentDedicatedHostTimeouts | undefined; 
  private __timeoutsOutput = new MaintenanceAssignmentDedicatedHostTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MaintenanceAssignmentDedicatedHostTimeouts | undefined) {
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
