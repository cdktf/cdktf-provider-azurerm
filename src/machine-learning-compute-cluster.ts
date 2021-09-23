// https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningComputeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#description MachineLearningComputeCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#location MachineLearningComputeCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#name MachineLearningComputeCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}
  */
  readonly sshPublicAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}
  */
  readonly subnetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#tags MachineLearningComputeCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#vm_priority MachineLearningComputeCluster#vm_priority}
  */
  readonly vmPriority: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#vm_size MachineLearningComputeCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#identity MachineLearningComputeCluster#identity}
  */
  readonly identity?: MachineLearningComputeClusterIdentity[];
  /**
  * scale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#scale_settings MachineLearningComputeCluster#scale_settings}
  */
  readonly scaleSettings: MachineLearningComputeClusterScaleSettings[];
  /**
  * ssh block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#ssh MachineLearningComputeCluster#ssh}
  */
  readonly ssh?: MachineLearningComputeClusterSsh[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#timeouts MachineLearningComputeCluster#timeouts}
  */
  readonly timeouts?: MachineLearningComputeClusterTimeouts;
}
export interface MachineLearningComputeClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#identity_ids MachineLearningComputeCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#type MachineLearningComputeCluster#type}
  */
  readonly type: string;
}

function machineLearningComputeClusterIdentityToTerraform(struct?: MachineLearningComputeClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface MachineLearningComputeClusterScaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#max_node_count MachineLearningComputeCluster#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#min_node_count MachineLearningComputeCluster#min_node_count}
  */
  readonly minNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}
  */
  readonly scaleDownNodesAfterIdleDuration: string;
}

function machineLearningComputeClusterScaleSettingsToTerraform(struct?: MachineLearningComputeClusterScaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    scale_down_nodes_after_idle_duration: cdktf.stringToTerraform(struct!.scaleDownNodesAfterIdleDuration),
  }
}

export interface MachineLearningComputeClusterSsh {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#admin_password MachineLearningComputeCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#admin_username MachineLearningComputeCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#key_value MachineLearningComputeCluster#key_value}
  */
  readonly keyValue?: string;
}

function machineLearningComputeClusterSshToTerraform(struct?: MachineLearningComputeClusterSsh): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    key_value: cdktf.stringToTerraform(struct!.keyValue),
  }
}

export interface MachineLearningComputeClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#create MachineLearningComputeCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#delete MachineLearningComputeCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#read MachineLearningComputeCluster#read}
  */
  readonly read?: string;
}

function machineLearningComputeClusterTimeoutsToTerraform(struct?: MachineLearningComputeClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html azurerm_machine_learning_compute_cluster}
*/
export class MachineLearningComputeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_machine_learning_compute_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html azurerm_machine_learning_compute_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningComputeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningComputeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_compute_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._location = config.location;
    this._machineLearningWorkspaceId = config.machineLearningWorkspaceId;
    this._name = config.name;
    this._sshPublicAccessEnabled = config.sshPublicAccessEnabled;
    this._subnetResourceId = config.subnetResourceId;
    this._tags = config.tags;
    this._vmPriority = config.vmPriority;
    this._vmSize = config.vmSize;
    this._identity = config.identity;
    this._scaleSettings = config.scaleSettings;
    this._ssh = config.ssh;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ssh_public_access_enabled - computed: true, optional: true, required: false
  private _sshPublicAccessEnabled?: boolean | cdktf.IResolvable;
  public get sshPublicAccessEnabled() {
    return this.getBooleanAttribute('ssh_public_access_enabled');
  }
  public set sshPublicAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._sshPublicAccessEnabled = value;
  }
  public resetSshPublicAccessEnabled() {
    this._sshPublicAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicAccessEnabledInput() {
    return this._sshPublicAccessEnabled
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

  // vm_priority - computed: false, optional: false, required: true
  private _vmPriority: string;
  public get vmPriority() {
    return this.getStringAttribute('vm_priority');
  }
  public set vmPriority(value: string) {
    this._vmPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmPriorityInput() {
    return this._vmPriority
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: MachineLearningComputeClusterIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: MachineLearningComputeClusterIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // scale_settings - computed: false, optional: false, required: true
  private _scaleSettings: MachineLearningComputeClusterScaleSettings[];
  public get scaleSettings() {
    return this.interpolationForAttribute('scale_settings') as any;
  }
  public set scaleSettings(value: MachineLearningComputeClusterScaleSettings[]) {
    this._scaleSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSettingsInput() {
    return this._scaleSettings
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: MachineLearningComputeClusterSsh[];
  public get ssh() {
    return this.interpolationForAttribute('ssh') as any;
  }
  public set ssh(value: MachineLearningComputeClusterSsh[] ) {
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
  private _timeouts?: MachineLearningComputeClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MachineLearningComputeClusterTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      location: cdktf.stringToTerraform(this._location),
      machine_learning_workspace_id: cdktf.stringToTerraform(this._machineLearningWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      ssh_public_access_enabled: cdktf.booleanToTerraform(this._sshPublicAccessEnabled),
      subnet_resource_id: cdktf.stringToTerraform(this._subnetResourceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vm_priority: cdktf.stringToTerraform(this._vmPriority),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      identity: cdktf.listMapper(machineLearningComputeClusterIdentityToTerraform)(this._identity),
      scale_settings: cdktf.listMapper(machineLearningComputeClusterScaleSettingsToTerraform)(this._scaleSettings),
      ssh: cdktf.listMapper(machineLearningComputeClusterSshToTerraform)(this._ssh),
      timeouts: machineLearningComputeClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
