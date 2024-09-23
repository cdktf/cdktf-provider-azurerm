// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceAssignmentDedicatedHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#dedicated_host_id MaintenanceAssignmentDedicatedHost#dedicated_host_id}
  */
  readonly dedicatedHostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#id MaintenanceAssignmentDedicatedHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#location MaintenanceAssignmentDedicatedHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#maintenance_configuration_id MaintenanceAssignmentDedicatedHost#maintenance_configuration_id}
  */
  readonly maintenanceConfigurationId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#timeouts MaintenanceAssignmentDedicatedHost#timeouts}
  */
  readonly timeouts?: MaintenanceAssignmentDedicatedHostTimeouts;
}
export interface MaintenanceAssignmentDedicatedHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#create MaintenanceAssignmentDedicatedHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#delete MaintenanceAssignmentDedicatedHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#read MaintenanceAssignmentDedicatedHost#read}
  */
  readonly read?: string;
}

export function maintenanceAssignmentDedicatedHostTimeoutsToTerraform(struct?: MaintenanceAssignmentDedicatedHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function maintenanceAssignmentDedicatedHostTimeoutsToHclTerraform(struct?: MaintenanceAssignmentDedicatedHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceAssignmentDedicatedHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaintenanceAssignmentDedicatedHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceAssignmentDedicatedHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host azurerm_maintenance_assignment_dedicated_host}
*/
export class MaintenanceAssignmentDedicatedHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_maintenance_assignment_dedicated_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceAssignmentDedicatedHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceAssignmentDedicatedHost to import
  * @param importFromId The id of the existing MaintenanceAssignmentDedicatedHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceAssignmentDedicatedHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_maintenance_assignment_dedicated_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_assignment_dedicated_host azurerm_maintenance_assignment_dedicated_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceAssignmentDedicatedHostConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceAssignmentDedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_assignment_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedHostId = config.dedicatedHostId;
    this._id = config.id;
    this._location = config.location;
    this._maintenanceConfigurationId = config.maintenanceConfigurationId;
    this._timeouts.internalValue = config.timeouts;
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
    return this._dedicatedHostId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._location;
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
    return this._maintenanceConfigurationId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MaintenanceAssignmentDedicatedHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaintenanceAssignmentDedicatedHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      maintenance_configuration_id: cdktf.stringToTerraform(this._maintenanceConfigurationId),
      timeouts: maintenanceAssignmentDedicatedHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_configuration_id: {
        value: cdktf.stringToHclTerraform(this._maintenanceConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: maintenanceAssignmentDedicatedHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaintenanceAssignmentDedicatedHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
