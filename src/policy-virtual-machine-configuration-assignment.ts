// https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyVirtualMachineConfigurationAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#location PolicyVirtualMachineConfigurationAssignment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#name PolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#configuration PolicyVirtualMachineConfigurationAssignment#configuration}
  */
  readonly configuration: PolicyVirtualMachineConfigurationAssignmentConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#timeouts PolicyVirtualMachineConfigurationAssignment#timeouts}
  */
  readonly timeouts?: PolicyVirtualMachineConfigurationAssignmentTimeouts;
}
export interface PolicyVirtualMachineConfigurationAssignmentConfigurationParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#name PolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#value PolicyVirtualMachineConfigurationAssignment#value}
  */
  readonly value: string;
}

function policyVirtualMachineConfigurationAssignmentConfigurationParameterToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PolicyVirtualMachineConfigurationAssignmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}
  */
  readonly assignmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}
  */
  readonly contentHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}
  */
  readonly contentUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#name PolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#version PolicyVirtualMachineConfigurationAssignment#version}
  */
  readonly version?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#parameter PolicyVirtualMachineConfigurationAssignment#parameter}
  */
  readonly parameter?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[];
}

function policyVirtualMachineConfigurationAssignmentConfigurationToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference | PolicyVirtualMachineConfigurationAssignmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment_type: cdktf.stringToTerraform(struct!.assignmentType),
    content_hash: cdktf.stringToTerraform(struct!.contentHash),
    content_uri: cdktf.stringToTerraform(struct!.contentUri),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    parameter: cdktf.listMapper(policyVirtualMachineConfigurationAssignmentConfigurationParameterToTerraform)(struct!.parameter),
  }
}

export class PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // assignment_type - computed: false, optional: true, required: false
  private _assignmentType?: string | undefined; 
  public get assignmentType() {
    return this.getStringAttribute('assignment_type');
  }
  public set assignmentType(value: string | undefined) {
    this._assignmentType = value;
  }
  public resetAssignmentType() {
    this._assignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentTypeInput() {
    return this._assignmentType
  }

  // content_hash - computed: true, optional: true, required: false
  private _contentHash?: string | undefined; 
  public get contentHash() {
    return this.getStringAttribute('content_hash');
  }
  public set contentHash(value: string | undefined) {
    this._contentHash = value;
  }
  public resetContentHash() {
    this._contentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHashInput() {
    return this._contentHash
  }

  // content_uri - computed: true, optional: true, required: false
  private _contentUri?: string | undefined; 
  public get contentUri() {
    return this.getStringAttribute('content_uri');
  }
  public set contentUri(value: string | undefined) {
    this._contentUri = value;
  }
  public resetContentUri() {
    this._contentUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentUriInput() {
    return this._contentUri
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
  private _parameter?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[] | undefined; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[] | undefined) {
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
export interface PolicyVirtualMachineConfigurationAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#create PolicyVirtualMachineConfigurationAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#delete PolicyVirtualMachineConfigurationAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#read PolicyVirtualMachineConfigurationAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#update PolicyVirtualMachineConfigurationAssignment#update}
  */
  readonly update?: string;
}

function policyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference | PolicyVirtualMachineConfigurationAssignmentTimeouts): any {
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

export class PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html azurerm_policy_virtual_machine_configuration_assignment}
*/
export class PolicyVirtualMachineConfigurationAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_virtual_machine_configuration_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html azurerm_policy_virtual_machine_configuration_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyVirtualMachineConfigurationAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyVirtualMachineConfigurationAssignmentConfig) {
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
  private _configuration?: PolicyVirtualMachineConfigurationAssignmentConfiguration; 
  private __configurationOutput = new PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference(this as any, "configuration", true);
  public get configuration() {
    return this.__configurationOutput;
  }
  public putConfiguration(value: PolicyVirtualMachineConfigurationAssignmentConfiguration) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyVirtualMachineConfigurationAssignmentTimeouts | undefined; 
  private __timeoutsOutput = new PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PolicyVirtualMachineConfigurationAssignmentTimeouts | undefined) {
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
      configuration: policyVirtualMachineConfigurationAssignmentConfigurationToTerraform(this._configuration),
      timeouts: policyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
