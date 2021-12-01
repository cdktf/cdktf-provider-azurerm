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

export function policyVirtualMachineConfigurationAssignmentConfigurationParameterToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter): any {
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

export function policyVirtualMachineConfigurationAssignmentConfigurationToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference | PolicyVirtualMachineConfigurationAssignmentConfiguration): any {
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

  public get internalValue(): PolicyVirtualMachineConfigurationAssignmentConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._assignmentType) {
      hasAnyValues = true;
      internalValueResult.assignmentType = this._assignmentType;
    }
    if (this._contentHash) {
      hasAnyValues = true;
      internalValueResult.contentHash = this._contentHash;
    }
    if (this._contentUri) {
      hasAnyValues = true;
      internalValueResult.contentUri = this._contentUri;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._parameter) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVirtualMachineConfigurationAssignmentConfiguration | undefined) {
    if (value === undefined) {
      this._assignmentType = undefined;
      this._contentHash = undefined;
      this._contentUri = undefined;
      this._name = undefined;
      this._version = undefined;
      this._parameter = undefined;
    }
    else {
      this._assignmentType = value.assignmentType;
      this._contentHash = value.contentHash;
      this._contentUri = value.contentUri;
      this._name = value.name;
      this._version = value.version;
      this._parameter = value.parameter;
    }
  }

  // assignment_type - computed: false, optional: true, required: false
  private _assignmentType?: string; 
  public get assignmentType() {
    return this.getStringAttribute('assignment_type');
  }
  public set assignmentType(value: string) {
    this._assignmentType = value;
  }
  public resetAssignmentType() {
    this._assignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentTypeInput() {
    return this._assignmentType;
  }

  // content_hash - computed: true, optional: true, required: false
  private _contentHash?: string; 
  public get contentHash() {
    return this.getStringAttribute('content_hash');
  }
  public set contentHash(value: string) {
    this._contentHash = value;
  }
  public resetContentHash() {
    this._contentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHashInput() {
    return this._contentHash;
  }

  // content_uri - computed: true, optional: true, required: false
  private _contentUri?: string; 
  public get contentUri() {
    return this.getStringAttribute('content_uri');
  }
  public set contentUri(value: string) {
    this._contentUri = value;
  }
  public resetContentUri() {
    this._contentUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentUriInput() {
    return this._contentUri;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[]; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[]) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
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

export function policyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference | PolicyVirtualMachineConfigurationAssignmentTimeouts): any {
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

  public get internalValue(): PolicyVirtualMachineConfigurationAssignmentTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVirtualMachineConfigurationAssignmentTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
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
    return this._location;
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
    return this._name;
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
    return this._virtualMachineId;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference(this as any, "configuration", true);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: PolicyVirtualMachineConfigurationAssignmentConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolicyVirtualMachineConfigurationAssignmentTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      configuration: policyVirtualMachineConfigurationAssignmentConfigurationToTerraform(this._configuration.internalValue),
      timeouts: policyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
