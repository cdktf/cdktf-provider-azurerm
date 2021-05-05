// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_configuration_policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfigurationPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly virtualMachineId: string;
  /** configuration block */
  readonly configuration: VirtualMachineConfigurationPolicyAssignmentConfiguration[];
  /** timeouts block */
  readonly timeouts?: VirtualMachineConfigurationPolicyAssignmentTimeouts;
}
export interface VirtualMachineConfigurationPolicyAssignmentConfigurationParameter {
  readonly name: string;
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
  readonly name: string;
  readonly version?: string;
  /** parameter block */
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class VirtualMachineConfigurationPolicyAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
