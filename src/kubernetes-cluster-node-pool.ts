// https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KubernetesClusterNodePoolConfig extends TerraformMetaArguments {
  readonly availabilityZones?: string[];
  readonly enableAutoScaling?: boolean;
  readonly enableNodePublicIp?: boolean;
  readonly evictionPolicy?: string;
  readonly kubernetesClusterId: string;
  readonly maxCount?: number;
  readonly maxPods?: number;
  readonly minCount?: number;
  readonly mode?: string;
  readonly name: string;
  readonly nodeCount?: number;
  readonly nodeLabels?: { [key: string]: string };
  readonly nodeTaints?: string[];
  readonly orchestratorVersion?: string;
  readonly osDiskSizeGb?: number;
  readonly osDiskType?: string;
  readonly osType?: string;
  readonly priority?: string;
  readonly proximityPlacementGroupId?: string;
  readonly spotMaxPrice?: number;
  readonly tags?: { [key: string]: string };
  readonly vmSize: string;
  readonly vnetSubnetId?: string;
  /** timeouts block */
  readonly timeouts?: KubernetesClusterNodePoolTimeouts;
}
export interface KubernetesClusterNodePoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KubernetesClusterNodePool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KubernetesClusterNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._enableAutoScaling = config.enableAutoScaling;
    this._enableNodePublicIp = config.enableNodePublicIp;
    this._evictionPolicy = config.evictionPolicy;
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._maxCount = config.maxCount;
    this._maxPods = config.maxPods;
    this._minCount = config.minCount;
    this._mode = config.mode;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeLabels = config.nodeLabels;
    this._nodeTaints = config.nodeTaints;
    this._orchestratorVersion = config.orchestratorVersion;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osType = config.osType;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._spotMaxPrice = config.spotMaxPrice;
    this._tags = config.tags;
    this._vmSize = config.vmSize;
    this._vnetSubnetId = config.vnetSubnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] ) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean;
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }
  public set enableAutoScaling(value: boolean ) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean;
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean ) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string;
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string ) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_cluster_id - computed: false, optional: false, required: true
  private _kubernetesClusterId: string;
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number;
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number ) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount
  }

  // max_pods - computed: true, optional: true, required: false
  private _maxPods?: number;
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number;
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number ) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number;
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string };
  public get nodeLabels() {
    return this.interpolationForAttribute('node_labels') as any;
  }
  public set nodeLabels(value: { [key: string]: string } ) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[];
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[] ) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints
  }

  // orchestrator_version - computed: true, optional: true, required: false
  private _orchestratorVersion?: string;
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }
  public set orchestratorVersion(value: string) {
    this._orchestratorVersion = value;
  }
  public resetOrchestratorVersion() {
    this._orchestratorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorVersionInput() {
    return this._orchestratorVersion
  }

  // os_disk_size_gb - computed: true, optional: true, required: false
  private _osDiskSizeGb?: number;
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string;
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string ) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string ) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string;
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string;
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string ) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: number;
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: number ) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string;
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string ) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterNodePoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KubernetesClusterNodePoolTimeouts ) {
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
      availability_zones: this._availabilityZones,
      enable_auto_scaling: this._enableAutoScaling,
      enable_node_public_ip: this._enableNodePublicIp,
      eviction_policy: this._evictionPolicy,
      kubernetes_cluster_id: this._kubernetesClusterId,
      max_count: this._maxCount,
      max_pods: this._maxPods,
      min_count: this._minCount,
      mode: this._mode,
      name: this._name,
      node_count: this._nodeCount,
      node_labels: this._nodeLabels,
      node_taints: this._nodeTaints,
      orchestrator_version: this._orchestratorVersion,
      os_disk_size_gb: this._osDiskSizeGb,
      os_disk_type: this._osDiskType,
      os_type: this._osType,
      priority: this._priority,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      spot_max_price: this._spotMaxPrice,
      tags: this._tags,
      vm_size: this._vmSize,
      vnet_subnet_id: this._vnetSubnetId,
      timeouts: this._timeouts,
    };
  }
}
