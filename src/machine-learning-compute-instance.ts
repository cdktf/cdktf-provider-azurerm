// https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#authorization_type MachineLearningComputeInstance#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#description MachineLearningComputeInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#location MachineLearningComputeInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#name MachineLearningComputeInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}
  */
  readonly subnetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#tags MachineLearningComputeInstance#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}
  */
  readonly virtualMachineSize: string;
  /**
  * assign_to_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#assign_to_user MachineLearningComputeInstance#assign_to_user}
  */
  readonly assignToUser?: MachineLearningComputeInstanceAssignToUser[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#identity MachineLearningComputeInstance#identity}
  */
  readonly identity?: MachineLearningComputeInstanceIdentity[];
  /**
  * ssh block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#ssh MachineLearningComputeInstance#ssh}
  */
  readonly ssh?: MachineLearningComputeInstanceSsh[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#timeouts MachineLearningComputeInstance#timeouts}
  */
  readonly timeouts?: MachineLearningComputeInstanceTimeouts;
}
export interface MachineLearningComputeInstanceAssignToUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#object_id MachineLearningComputeInstance#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#tenant_id MachineLearningComputeInstance#tenant_id}
  */
  readonly tenantId?: string;
}

function machineLearningComputeInstanceAssignToUserToTerraform(struct?: MachineLearningComputeInstanceAssignToUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface MachineLearningComputeInstanceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#identity_ids MachineLearningComputeInstance#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#type MachineLearningComputeInstance#type}
  */
  readonly type: string;
}

function machineLearningComputeInstanceIdentityToTerraform(struct?: MachineLearningComputeInstanceIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface MachineLearningComputeInstanceSsh {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#public_key MachineLearningComputeInstance#public_key}
  */
  readonly publicKey: string;
}

function machineLearningComputeInstanceSshToTerraform(struct?: MachineLearningComputeInstanceSsh): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}

export interface MachineLearningComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#create MachineLearningComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#delete MachineLearningComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html#read MachineLearningComputeInstance#read}
  */
  readonly read?: string;
}

function machineLearningComputeInstanceTimeoutsToTerraform(struct?: MachineLearningComputeInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html azurerm_machine_learning_compute_instance}
*/
export class MachineLearningComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_machine_learning_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance.html azurerm_machine_learning_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_compute_instance',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._location = config.location;
    this._machineLearningWorkspaceId = config.machineLearningWorkspaceId;
    this._name = config.name;
    this._subnetResourceId = config.subnetResourceId;
    this._tags = config.tags;
    this._virtualMachineSize = config.virtualMachineSize;
    this._assignToUser = config.assignToUser;
    this._identity = config.identity;
    this._ssh = config.ssh;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string;
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string ) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // machine_learning_workspace_id - computed: false, optional: false, required: true
  private _machineLearningWorkspaceId: string;
  public get machineLearningWorkspaceId() {
    return this.getStringAttribute('machine_learning_workspace_id');
  }
  public set machineLearningWorkspaceId(value: string) {
    this._machineLearningWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningWorkspaceIdInput() {
    return this._machineLearningWorkspaceId
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

  // subnet_resource_id - computed: false, optional: true, required: false
  private _subnetResourceId?: string;
  public get subnetResourceId() {
    return this.getStringAttribute('subnet_resource_id');
  }
  public set subnetResourceId(value: string ) {
    this._subnetResourceId = value;
  }
  public resetSubnetResourceId() {
    this._subnetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceIdInput() {
    return this._subnetResourceId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // virtual_machine_size - computed: false, optional: false, required: true
  private _virtualMachineSize: string;
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize
  }

  // assign_to_user - computed: false, optional: true, required: false
  private _assignToUser?: MachineLearningComputeInstanceAssignToUser[];
  public get assignToUser() {
    return this.interpolationForAttribute('assign_to_user') as any;
  }
  public set assignToUser(value: MachineLearningComputeInstanceAssignToUser[] ) {
    this._assignToUser = value;
  }
  public resetAssignToUser() {
    this._assignToUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToUserInput() {
    return this._assignToUser
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: MachineLearningComputeInstanceIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: MachineLearningComputeInstanceIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: MachineLearningComputeInstanceSsh[];
  public get ssh() {
    return this.interpolationForAttribute('ssh') as any;
  }
  public set ssh(value: MachineLearningComputeInstanceSsh[] ) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MachineLearningComputeInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MachineLearningComputeInstanceTimeouts ) {
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
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      description: cdktf.stringToTerraform(this._description),
      location: cdktf.stringToTerraform(this._location),
      machine_learning_workspace_id: cdktf.stringToTerraform(this._machineLearningWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      subnet_resource_id: cdktf.stringToTerraform(this._subnetResourceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_machine_size: cdktf.stringToTerraform(this._virtualMachineSize),
      assign_to_user: cdktf.listMapper(machineLearningComputeInstanceAssignToUserToTerraform)(this._assignToUser),
      identity: cdktf.listMapper(machineLearningComputeInstanceIdentityToTerraform)(this._identity),
      ssh: cdktf.listMapper(machineLearningComputeInstanceSshToTerraform)(this._ssh),
      timeouts: machineLearningComputeInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
