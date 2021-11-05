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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
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
  readonly identity?: MachineLearningComputeClusterIdentity;
  /**
  * scale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#scale_settings MachineLearningComputeCluster#scale_settings}
  */
  readonly scaleSettings: MachineLearningComputeClusterScaleSettings;
  /**
  * ssh block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_cluster.html#ssh MachineLearningComputeCluster#ssh}
  */
  readonly ssh?: MachineLearningComputeClusterSsh;
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

function machineLearningComputeClusterIdentityToTerraform(struct?: MachineLearningComputeClusterIdentityOutputReference | MachineLearningComputeClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MachineLearningComputeClusterIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
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

function machineLearningComputeClusterScaleSettingsToTerraform(struct?: MachineLearningComputeClusterScaleSettingsOutputReference | MachineLearningComputeClusterScaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    scale_down_nodes_after_idle_duration: cdktf.stringToTerraform(struct!.scaleDownNodesAfterIdleDuration),
  }
}

export class MachineLearningComputeClusterScaleSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount
  }

  // scale_down_nodes_after_idle_duration - computed: false, optional: false, required: true
  private _scaleDownNodesAfterIdleDuration?: string; 
  public get scaleDownNodesAfterIdleDuration() {
    return this.getStringAttribute('scale_down_nodes_after_idle_duration');
  }
  public set scaleDownNodesAfterIdleDuration(value: string) {
    this._scaleDownNodesAfterIdleDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownNodesAfterIdleDurationInput() {
    return this._scaleDownNodesAfterIdleDuration
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

function machineLearningComputeClusterSshToTerraform(struct?: MachineLearningComputeClusterSshOutputReference | MachineLearningComputeClusterSsh): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    key_value: cdktf.stringToTerraform(struct!.keyValue),
  }
}

export class MachineLearningComputeClusterSshOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string | undefined; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string | undefined) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // key_value - computed: false, optional: true, required: false
  private _keyValue?: string | undefined; 
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }
  public set keyValue(value: string | undefined) {
    this._keyValue = value;
  }
  public resetKeyValue() {
    this._keyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue
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

function machineLearningComputeClusterTimeoutsToTerraform(struct?: MachineLearningComputeClusterTimeoutsOutputReference | MachineLearningComputeClusterTimeouts): any {
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

export class MachineLearningComputeClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
    this._localAuthEnabled = config.localAuthEnabled;
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled') as any;
  }
  public set localAuthEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled
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

  // machine_learning_workspace_id - computed: false, optional: false, required: true
  private _machineLearningWorkspaceId?: string; 
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

  // ssh_public_access_enabled - computed: true, optional: true, required: false
  private _sshPublicAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get sshPublicAccessEnabled() {
    return this.getBooleanAttribute('ssh_public_access_enabled') as any;
  }
  public set sshPublicAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _subnetResourceId?: string | undefined; 
  public get subnetResourceId() {
    return this.getStringAttribute('subnet_resource_id');
  }
  public set subnetResourceId(value: string | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _vmPriority?: string; 
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
  private _vmSize?: string; 
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
  private _identity?: MachineLearningComputeClusterIdentity | undefined; 
  private __identityOutput = new MachineLearningComputeClusterIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: MachineLearningComputeClusterIdentity | undefined) {
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
  private _scaleSettings?: MachineLearningComputeClusterScaleSettings; 
  private __scaleSettingsOutput = new MachineLearningComputeClusterScaleSettingsOutputReference(this as any, "scale_settings", true);
  public get scaleSettings() {
    return this.__scaleSettingsOutput;
  }
  public putScaleSettings(value: MachineLearningComputeClusterScaleSettings) {
    this._scaleSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSettingsInput() {
    return this._scaleSettings
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: MachineLearningComputeClusterSsh | undefined; 
  private __sshOutput = new MachineLearningComputeClusterSshOutputReference(this as any, "ssh", true);
  public get ssh() {
    return this.__sshOutput;
  }
  public putSsh(value: MachineLearningComputeClusterSsh | undefined) {
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
  private _timeouts?: MachineLearningComputeClusterTimeouts | undefined; 
  private __timeoutsOutput = new MachineLearningComputeClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MachineLearningComputeClusterTimeouts | undefined) {
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
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      machine_learning_workspace_id: cdktf.stringToTerraform(this._machineLearningWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      ssh_public_access_enabled: cdktf.booleanToTerraform(this._sshPublicAccessEnabled),
      subnet_resource_id: cdktf.stringToTerraform(this._subnetResourceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vm_priority: cdktf.stringToTerraform(this._vmPriority),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      identity: machineLearningComputeClusterIdentityToTerraform(this._identity),
      scale_settings: machineLearningComputeClusterScaleSettingsToTerraform(this._scaleSettings),
      ssh: machineLearningComputeClusterSshToTerraform(this._ssh),
      timeouts: machineLearningComputeClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
