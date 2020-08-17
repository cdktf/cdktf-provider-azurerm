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
  readonly kubernetesClusterId: string;
  readonly maxCount?: number;
  readonly maxPods?: number;
  readonly minCount?: number;
  readonly name: string;
  readonly nodeCount?: number;
  readonly nodeTaints?: string[];
  readonly osDiskSizeGb?: number;
  readonly osType?: string;
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
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._maxCount = config.maxCount;
    this._maxPods = config.maxPods;
    this._minCount = config.minCount;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeTaints = config.nodeTaints;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osType = config.osType;
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
    return this._availabilityZones;
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean;
  public get enableAutoScaling() {
    return this._enableAutoScaling;
  }
  public set enableAutoScaling(value: boolean | undefined) {
    this._enableAutoScaling = value;
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean;
  public get enableNodePublicIp() {
    return this._enableNodePublicIp;
  }
  public set enableNodePublicIp(value: boolean | undefined) {
    this._enableNodePublicIp = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kubernetes_cluster_id - computed: false, optional: false, required: true
  private _kubernetesClusterId: string;
  public get kubernetesClusterId() {
    return this._kubernetesClusterId;
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number;
  public get maxCount() {
    return this._maxCount;
  }
  public set maxCount(value: number | undefined) {
    this._maxCount = value;
  }

  // max_pods - computed: true, optional: true, required: false
  private _maxPods?: number;
  public get maxPods() {
    return this._maxPods ?? this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number | undefined) {
    this._maxPods = value;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number;
  public get minCount() {
    return this._minCount;
  }
  public set minCount(value: number | undefined) {
    this._minCount = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number;
  public get nodeCount() {
    return this._nodeCount ?? this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
    this._nodeCount = value;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[];
  public get nodeTaints() {
    return this._nodeTaints;
  }
  public set nodeTaints(value: string[] | undefined) {
    this._nodeTaints = value;
  }

  // os_disk_size_gb - computed: true, optional: true, required: false
  private _osDiskSizeGb?: number;
  public get osDiskSizeGb() {
    return this._osDiskSizeGb ?? this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number | undefined) {
    this._osDiskSizeGb = value;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this._osType;
  }
  public set osType(value: string | undefined) {
    this._osType = value;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this._vmSize;
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string;
  public get vnetSubnetId() {
    return this._vnetSubnetId;
  }
  public set vnetSubnetId(value: string | undefined) {
    this._vnetSubnetId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterNodePoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KubernetesClusterNodePoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: this._availabilityZones,
      enable_auto_scaling: this._enableAutoScaling,
      enable_node_public_ip: this._enableNodePublicIp,
      kubernetes_cluster_id: this._kubernetesClusterId,
      max_count: this._maxCount,
      max_pods: this._maxPods,
      min_count: this._minCount,
      name: this._name,
      node_count: this._nodeCount,
      node_taints: this._nodeTaints,
      os_disk_size_gb: this._osDiskSizeGb,
      os_type: this._osType,
      vm_size: this._vmSize,
      vnet_subnet_id: this._vnetSubnetId,
      timeouts: this._timeouts,
    };
  }
}
