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
  readonly configuration: VirtualMachineConfigurationPolicyAssignmentConfiguration[];
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

function virtualMachineConfigurationPolicyAssignmentConfigurationToTerraform(struct?: VirtualMachineConfigurationPolicyAssignmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    parameter: cdktf.listMapper(virtualMachineConfigurationPolicyAssignmentConfigurationParameterToTerraform)(struct!.parameter),
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

function virtualMachineConfigurationPolicyAssignmentTimeoutsToTerraform(struct?: VirtualMachineConfigurationPolicyAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html azurerm_virtual_machine_configuration_policy_assignment}
*/
export class VirtualMachineConfigurationPolicyAssignment extends cdktf.TerraformResource {

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

  // configuration - computed: false, optional: false, required: true
  private _configuration: VirtualMachineConfigurationPolicyAssignmentConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: VirtualMachineConfigurationPolicyAssignmentConfiguration[]) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineConfigurationPolicyAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualMachineConfigurationPolicyAssignmentTimeouts ) {
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
      configuration: cdktf.listMapper(virtualMachineConfigurationPolicyAssignmentConfigurationToTerraform)(this._configuration),
      timeouts: virtualMachineConfigurationPolicyAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
