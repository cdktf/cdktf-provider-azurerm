// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfigurationPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#location VirtualMachineConfigurationPolicyAssignment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#name VirtualMachineConfigurationPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#virtual_machine_id VirtualMachineConfigurationPolicyAssignment#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#configuration VirtualMachineConfigurationPolicyAssignment#configuration}
  */
  readonly configuration: VirtualMachineConfigurationPolicyAssignmentConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#timeouts VirtualMachineConfigurationPolicyAssignment#timeouts}
  */
  readonly timeouts?: VirtualMachineConfigurationPolicyAssignmentTimeouts;
}
export interface VirtualMachineConfigurationPolicyAssignmentConfigurationParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#name VirtualMachineConfigurationPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#value VirtualMachineConfigurationPolicyAssignment#value}
  */
  readonly value: string;
}

function virtualMachineConfigurationPolicyAssignmentConfigurationParameterToTerraform(struct?: VirtualMachineConfigurationPolicyAssignmentConfigurationParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface VirtualMachineConfigurationPolicyAssignmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#name VirtualMachineConfigurationPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#version VirtualMachineConfigurationPolicyAssignment#version}
  */
  readonly version?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#parameter VirtualMachineConfigurationPolicyAssignment#parameter}
  */
  readonly parameter?: VirtualMachineConfigurationPolicyAssignmentConfigurationParameter[];
}

function virtualMachineConfigurationPolicyAssignmentConfigurationToTerraform(struct?: VirtualMachineConfigurationPolicyAssignmentConfigurationOutputReference | VirtualMachineConfigurationPolicyAssignmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    parameter: cdktf.listMapper(virtualMachineConfigurationPolicyAssignmentConfigurationParameterToTerraform)(struct!.parameter),
  }
}

export class VirtualMachineConfigurationPolicyAssignmentConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: VirtualMachineConfigurationPolicyAssignmentConfigurationParameter[] | undefined; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: VirtualMachineConfigurationPolicyAssignmentConfigurationParameter[] | undefined) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }
}
export interface VirtualMachineConfigurationPolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#create VirtualMachineConfigurationPolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#delete VirtualMachineConfigurationPolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#read VirtualMachineConfigurationPolicyAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html#update VirtualMachineConfigurationPolicyAssignment#update}
  */
  readonly update?: string;
}

function virtualMachineConfigurationPolicyAssignmentTimeoutsToTerraform(struct?: VirtualMachineConfigurationPolicyAssignmentTimeoutsOutputReference | VirtualMachineConfigurationPolicyAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VirtualMachineConfigurationPolicyAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html azurerm_virtual_machine_configuration_policy_assignment}
*/
export class VirtualMachineConfigurationPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_machine_configuration_policy_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html azurerm_virtual_machine_configuration_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfigurationPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfigurationPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_configuration_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._virtualMachineId = config.virtualMachineId;
    this._configuration = config.configuration;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
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

  // configuration - computed: false, optional: false, required: true
  private _configuration?: VirtualMachineConfigurationPolicyAssignmentConfiguration; 
  private __configurationOutput = new VirtualMachineConfigurationPolicyAssignmentConfigurationOutputReference(this as any, "configuration", true);
  public get configuration() {
    return this.__configurationOutput;
  }
  public putConfiguration(value: VirtualMachineConfigurationPolicyAssignmentConfiguration) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineConfigurationPolicyAssignmentTimeouts | undefined; 
  private __timeoutsOutput = new VirtualMachineConfigurationPolicyAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualMachineConfigurationPolicyAssignmentTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      configuration: virtualMachineConfigurationPolicyAssignmentConfigurationToTerraform(this._configuration),
      timeouts: virtualMachineConfigurationPolicyAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
