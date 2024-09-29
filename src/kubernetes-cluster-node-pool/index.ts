// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}
  */
  readonly autoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}
  */
  readonly capacityReservationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}
  */
  readonly gpuInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}
  */
  readonly hostEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}
  */
  readonly nodePublicIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}
  */
  readonly osSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}
  */
  readonly scaleDownMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}
  */
  readonly spotMaxPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}
  */
  readonly workloadRuntime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}
  */
  readonly zones?: string[];
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}
  */
  readonly kubeletConfig?: KubernetesClusterNodePoolKubeletConfig;
  /**
  * linux_os_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}
  */
  readonly linuxOsConfig?: KubernetesClusterNodePoolLinuxOsConfig;
  /**
  * node_network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}
  */
  readonly nodeNetworkProfile?: KubernetesClusterNodePoolNodeNetworkProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}
  */
  readonly timeouts?: KubernetesClusterNodePoolTimeouts;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}
  */
  readonly upgradeSettings?: KubernetesClusterNodePoolUpgradeSettings;
  /**
  * windows_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}
  */
  readonly windowsProfile?: KubernetesClusterNodePoolWindowsProfile;
}
export interface KubernetesClusterNodePoolKubeletConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}
  */
  readonly containerLogMaxLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}
  */
  readonly cpuCfsQuotaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}
  */
  readonly podMaxPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

export function kubernetesClusterNodePoolKubeletConfigToTerraform(struct?: KubernetesClusterNodePoolKubeletConfigOutputReference | KubernetesClusterNodePoolKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_line: cdktf.numberToTerraform(struct!.containerLogMaxLine),
    container_log_max_size_mb: cdktf.numberToTerraform(struct!.containerLogMaxSizeMb),
    cpu_cfs_quota_enabled: cdktf.booleanToTerraform(struct!.cpuCfsQuotaEnabled),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    image_gc_high_threshold: cdktf.numberToTerraform(struct!.imageGcHighThreshold),
    image_gc_low_threshold: cdktf.numberToTerraform(struct!.imageGcLowThreshold),
    pod_max_pid: cdktf.numberToTerraform(struct!.podMaxPid),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
  }
}


export function kubernetesClusterNodePoolKubeletConfigToHclTerraform(struct?: KubernetesClusterNodePoolKubeletConfigOutputReference | KubernetesClusterNodePoolKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    container_log_max_line: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_cfs_quota_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuotaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_gc_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_max_pid: {
      value: cdktf.numberToHclTerraform(struct!.podMaxPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNodePoolKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxLine = this._containerLogMaxLine;
    }
    if (this._containerLogMaxSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSizeMb = this._containerLogMaxSizeMb;
    }
    if (this._cpuCfsQuotaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaEnabled = this._cpuCfsQuotaEnabled;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._imageGcHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThreshold = this._imageGcHighThreshold;
    }
    if (this._imageGcLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThreshold = this._imageGcLowThreshold;
    }
    if (this._podMaxPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMaxPid = this._podMaxPid;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxLine = undefined;
      this._containerLogMaxSizeMb = undefined;
      this._cpuCfsQuotaEnabled = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._imageGcHighThreshold = undefined;
      this._imageGcLowThreshold = undefined;
      this._podMaxPid = undefined;
      this._topologyManagerPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxLine = value.containerLogMaxLine;
      this._containerLogMaxSizeMb = value.containerLogMaxSizeMb;
      this._cpuCfsQuotaEnabled = value.cpuCfsQuotaEnabled;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._imageGcHighThreshold = value.imageGcHighThreshold;
      this._imageGcLowThreshold = value.imageGcLowThreshold;
      this._podMaxPid = value.podMaxPid;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_unsafe_sysctls'));
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_line - computed: false, optional: true, required: false
  private _containerLogMaxLine?: number; 
  public get containerLogMaxLine() {
    return this.getNumberAttribute('container_log_max_line');
  }
  public set containerLogMaxLine(value: number) {
    this._containerLogMaxLine = value;
  }
  public resetContainerLogMaxLine() {
    this._containerLogMaxLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxLineInput() {
    return this._containerLogMaxLine;
  }

  // container_log_max_size_mb - computed: false, optional: true, required: false
  private _containerLogMaxSizeMb?: number; 
  public get containerLogMaxSizeMb() {
    return this.getNumberAttribute('container_log_max_size_mb');
  }
  public set containerLogMaxSizeMb(value: number) {
    this._containerLogMaxSizeMb = value;
  }
  public resetContainerLogMaxSizeMb() {
    this._containerLogMaxSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeMbInput() {
    return this._containerLogMaxSizeMb;
  }

  // cpu_cfs_quota_enabled - computed: false, optional: true, required: false
  private _cpuCfsQuotaEnabled?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuotaEnabled() {
    return this.getBooleanAttribute('cpu_cfs_quota_enabled');
  }
  public set cpuCfsQuotaEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuotaEnabled = value;
  }
  public resetCpuCfsQuotaEnabled() {
    this._cpuCfsQuotaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaEnabledInput() {
    return this._cpuCfsQuotaEnabled;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // image_gc_high_threshold - computed: false, optional: true, required: false
  private _imageGcHighThreshold?: number; 
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }
  public set imageGcHighThreshold(value: number) {
    this._imageGcHighThreshold = value;
  }
  public resetImageGcHighThreshold() {
    this._imageGcHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdInput() {
    return this._imageGcHighThreshold;
  }

  // image_gc_low_threshold - computed: false, optional: true, required: false
  private _imageGcLowThreshold?: number; 
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }
  public set imageGcLowThreshold(value: number) {
    this._imageGcLowThreshold = value;
  }
  public resetImageGcLowThreshold() {
    this._imageGcLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdInput() {
    return this._imageGcLowThreshold;
  }

  // pod_max_pid - computed: false, optional: true, required: false
  private _podMaxPid?: number; 
  public get podMaxPid() {
    return this.getNumberAttribute('pod_max_pid');
  }
  public set podMaxPid(value: number) {
    this._podMaxPid = value;
  }
  public resetPodMaxPid() {
    this._podMaxPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaxPidInput() {
    return this._podMaxPid;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }
}
export interface KubernetesClusterNodePoolLinuxOsConfigSysctlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}
  */
  readonly netIpv4IpLocalPortRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}
  */
  readonly netIpv4IpLocalPortRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}
  */
  readonly netIpv4TcpKeepaliveIntvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

export function kubernetesClusterNodePoolLinuxOsConfigSysctlConfigToTerraform(struct?: KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference | KubernetesClusterNodePoolLinuxOsConfigSysctlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_aio_max_nr: cdktf.numberToTerraform(struct!.fsAioMaxNr),
    fs_file_max: cdktf.numberToTerraform(struct!.fsFileMax),
    fs_inotify_max_user_watches: cdktf.numberToTerraform(struct!.fsInotifyMaxUserWatches),
    fs_nr_open: cdktf.numberToTerraform(struct!.fsNrOpen),
    kernel_threads_max: cdktf.numberToTerraform(struct!.kernelThreadsMax),
    net_core_netdev_max_backlog: cdktf.numberToTerraform(struct!.netCoreNetdevMaxBacklog),
    net_core_optmem_max: cdktf.numberToTerraform(struct!.netCoreOptmemMax),
    net_core_rmem_default: cdktf.numberToTerraform(struct!.netCoreRmemDefault),
    net_core_rmem_max: cdktf.numberToTerraform(struct!.netCoreRmemMax),
    net_core_somaxconn: cdktf.numberToTerraform(struct!.netCoreSomaxconn),
    net_core_wmem_default: cdktf.numberToTerraform(struct!.netCoreWmemDefault),
    net_core_wmem_max: cdktf.numberToTerraform(struct!.netCoreWmemMax),
    net_ipv4_ip_local_port_range_max: cdktf.numberToTerraform(struct!.netIpv4IpLocalPortRangeMax),
    net_ipv4_ip_local_port_range_min: cdktf.numberToTerraform(struct!.netIpv4IpLocalPortRangeMin),
    net_ipv4_neigh_default_gc_thresh1: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh1),
    net_ipv4_neigh_default_gc_thresh2: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh2),
    net_ipv4_neigh_default_gc_thresh3: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh3),
    net_ipv4_tcp_fin_timeout: cdktf.numberToTerraform(struct!.netIpv4TcpFinTimeout),
    net_ipv4_tcp_keepalive_intvl: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveIntvl),
    net_ipv4_tcp_keepalive_probes: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveProbes),
    net_ipv4_tcp_keepalive_time: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveTime),
    net_ipv4_tcp_max_syn_backlog: cdktf.numberToTerraform(struct!.netIpv4TcpMaxSynBacklog),
    net_ipv4_tcp_max_tw_buckets: cdktf.numberToTerraform(struct!.netIpv4TcpMaxTwBuckets),
    net_ipv4_tcp_tw_reuse: cdktf.booleanToTerraform(struct!.netIpv4TcpTwReuse),
    net_netfilter_nf_conntrack_buckets: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackBuckets),
    net_netfilter_nf_conntrack_max: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackMax),
    vm_max_map_count: cdktf.numberToTerraform(struct!.vmMaxMapCount),
    vm_swappiness: cdktf.numberToTerraform(struct!.vmSwappiness),
    vm_vfs_cache_pressure: cdktf.numberToTerraform(struct!.vmVfsCachePressure),
  }
}


export function kubernetesClusterNodePoolLinuxOsConfigSysctlConfigToHclTerraform(struct?: KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference | KubernetesClusterNodePoolLinuxOsConfigSysctlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_aio_max_nr: {
      value: cdktf.numberToHclTerraform(struct!.fsAioMaxNr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_file_max: {
      value: cdktf.numberToHclTerraform(struct!.fsFileMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_inotify_max_user_watches: {
      value: cdktf.numberToHclTerraform(struct!.fsInotifyMaxUserWatches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_nr_open: {
      value: cdktf.numberToHclTerraform(struct!.fsNrOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kernel_threads_max: {
      value: cdktf.numberToHclTerraform(struct!.kernelThreadsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_netdev_max_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netCoreNetdevMaxBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_optmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreOptmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_somaxconn: {
      value: cdktf.numberToHclTerraform(struct!.netCoreSomaxconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_ip_local_port_range_max: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4IpLocalPortRangeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_ip_local_port_range_min: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4IpLocalPortRangeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh1: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh2: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh3: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_fin_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpFinTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_intvl: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveIntvl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_probes: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_max_syn_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxSynBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_max_tw_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxTwBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_tw_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.netIpv4TcpTwReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net_netfilter_nf_conntrack_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_netfilter_nf_conntrack_max: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_max_map_count: {
      value: cdktf.numberToHclTerraform(struct!.vmMaxMapCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_swappiness: {
      value: cdktf.numberToHclTerraform(struct!.vmSwappiness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_vfs_cache_pressure: {
      value: cdktf.numberToHclTerraform(struct!.vmVfsCachePressure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNodePoolLinuxOsConfigSysctlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsAioMaxNr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsAioMaxNr = this._fsAioMaxNr;
    }
    if (this._fsFileMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsFileMax = this._fsFileMax;
    }
    if (this._fsInotifyMaxUserWatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsInotifyMaxUserWatches = this._fsInotifyMaxUserWatches;
    }
    if (this._fsNrOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsNrOpen = this._fsNrOpen;
    }
    if (this._kernelThreadsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelThreadsMax = this._kernelThreadsMax;
    }
    if (this._netCoreNetdevMaxBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreNetdevMaxBacklog = this._netCoreNetdevMaxBacklog;
    }
    if (this._netCoreOptmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreOptmemMax = this._netCoreOptmemMax;
    }
    if (this._netCoreRmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemDefault = this._netCoreRmemDefault;
    }
    if (this._netCoreRmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemMax = this._netCoreRmemMax;
    }
    if (this._netCoreSomaxconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreSomaxconn = this._netCoreSomaxconn;
    }
    if (this._netCoreWmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemDefault = this._netCoreWmemDefault;
    }
    if (this._netCoreWmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemMax = this._netCoreWmemMax;
    }
    if (this._netIpv4IpLocalPortRangeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4IpLocalPortRangeMax = this._netIpv4IpLocalPortRangeMax;
    }
    if (this._netIpv4IpLocalPortRangeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4IpLocalPortRangeMin = this._netIpv4IpLocalPortRangeMin;
    }
    if (this._netIpv4NeighDefaultGcThresh1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh1 = this._netIpv4NeighDefaultGcThresh1;
    }
    if (this._netIpv4NeighDefaultGcThresh2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh2 = this._netIpv4NeighDefaultGcThresh2;
    }
    if (this._netIpv4NeighDefaultGcThresh3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh3 = this._netIpv4NeighDefaultGcThresh3;
    }
    if (this._netIpv4TcpFinTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpFinTimeout = this._netIpv4TcpFinTimeout;
    }
    if (this._netIpv4TcpKeepaliveIntvl !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveIntvl = this._netIpv4TcpKeepaliveIntvl;
    }
    if (this._netIpv4TcpKeepaliveProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveProbes = this._netIpv4TcpKeepaliveProbes;
    }
    if (this._netIpv4TcpKeepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveTime = this._netIpv4TcpKeepaliveTime;
    }
    if (this._netIpv4TcpMaxSynBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxSynBacklog = this._netIpv4TcpMaxSynBacklog;
    }
    if (this._netIpv4TcpMaxTwBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxTwBuckets = this._netIpv4TcpMaxTwBuckets;
    }
    if (this._netIpv4TcpTwReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpTwReuse = this._netIpv4TcpTwReuse;
    }
    if (this._netNetfilterNfConntrackBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackBuckets = this._netNetfilterNfConntrackBuckets;
    }
    if (this._netNetfilterNfConntrackMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackMax = this._netNetfilterNfConntrackMax;
    }
    if (this._vmMaxMapCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmMaxMapCount = this._vmMaxMapCount;
    }
    if (this._vmSwappiness !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSwappiness = this._vmSwappiness;
    }
    if (this._vmVfsCachePressure !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmVfsCachePressure = this._vmVfsCachePressure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsAioMaxNr = undefined;
      this._fsFileMax = undefined;
      this._fsInotifyMaxUserWatches = undefined;
      this._fsNrOpen = undefined;
      this._kernelThreadsMax = undefined;
      this._netCoreNetdevMaxBacklog = undefined;
      this._netCoreOptmemMax = undefined;
      this._netCoreRmemDefault = undefined;
      this._netCoreRmemMax = undefined;
      this._netCoreSomaxconn = undefined;
      this._netCoreWmemDefault = undefined;
      this._netCoreWmemMax = undefined;
      this._netIpv4IpLocalPortRangeMax = undefined;
      this._netIpv4IpLocalPortRangeMin = undefined;
      this._netIpv4NeighDefaultGcThresh1 = undefined;
      this._netIpv4NeighDefaultGcThresh2 = undefined;
      this._netIpv4NeighDefaultGcThresh3 = undefined;
      this._netIpv4TcpFinTimeout = undefined;
      this._netIpv4TcpKeepaliveIntvl = undefined;
      this._netIpv4TcpKeepaliveProbes = undefined;
      this._netIpv4TcpKeepaliveTime = undefined;
      this._netIpv4TcpMaxSynBacklog = undefined;
      this._netIpv4TcpMaxTwBuckets = undefined;
      this._netIpv4TcpTwReuse = undefined;
      this._netNetfilterNfConntrackBuckets = undefined;
      this._netNetfilterNfConntrackMax = undefined;
      this._vmMaxMapCount = undefined;
      this._vmSwappiness = undefined;
      this._vmVfsCachePressure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsAioMaxNr = value.fsAioMaxNr;
      this._fsFileMax = value.fsFileMax;
      this._fsInotifyMaxUserWatches = value.fsInotifyMaxUserWatches;
      this._fsNrOpen = value.fsNrOpen;
      this._kernelThreadsMax = value.kernelThreadsMax;
      this._netCoreNetdevMaxBacklog = value.netCoreNetdevMaxBacklog;
      this._netCoreOptmemMax = value.netCoreOptmemMax;
      this._netCoreRmemDefault = value.netCoreRmemDefault;
      this._netCoreRmemMax = value.netCoreRmemMax;
      this._netCoreSomaxconn = value.netCoreSomaxconn;
      this._netCoreWmemDefault = value.netCoreWmemDefault;
      this._netCoreWmemMax = value.netCoreWmemMax;
      this._netIpv4IpLocalPortRangeMax = value.netIpv4IpLocalPortRangeMax;
      this._netIpv4IpLocalPortRangeMin = value.netIpv4IpLocalPortRangeMin;
      this._netIpv4NeighDefaultGcThresh1 = value.netIpv4NeighDefaultGcThresh1;
      this._netIpv4NeighDefaultGcThresh2 = value.netIpv4NeighDefaultGcThresh2;
      this._netIpv4NeighDefaultGcThresh3 = value.netIpv4NeighDefaultGcThresh3;
      this._netIpv4TcpFinTimeout = value.netIpv4TcpFinTimeout;
      this._netIpv4TcpKeepaliveIntvl = value.netIpv4TcpKeepaliveIntvl;
      this._netIpv4TcpKeepaliveProbes = value.netIpv4TcpKeepaliveProbes;
      this._netIpv4TcpKeepaliveTime = value.netIpv4TcpKeepaliveTime;
      this._netIpv4TcpMaxSynBacklog = value.netIpv4TcpMaxSynBacklog;
      this._netIpv4TcpMaxTwBuckets = value.netIpv4TcpMaxTwBuckets;
      this._netIpv4TcpTwReuse = value.netIpv4TcpTwReuse;
      this._netNetfilterNfConntrackBuckets = value.netNetfilterNfConntrackBuckets;
      this._netNetfilterNfConntrackMax = value.netNetfilterNfConntrackMax;
      this._vmMaxMapCount = value.vmMaxMapCount;
      this._vmSwappiness = value.vmSwappiness;
      this._vmVfsCachePressure = value.vmVfsCachePressure;
    }
  }

  // fs_aio_max_nr - computed: false, optional: true, required: false
  private _fsAioMaxNr?: number; 
  public get fsAioMaxNr() {
    return this.getNumberAttribute('fs_aio_max_nr');
  }
  public set fsAioMaxNr(value: number) {
    this._fsAioMaxNr = value;
  }
  public resetFsAioMaxNr() {
    this._fsAioMaxNr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsAioMaxNrInput() {
    return this._fsAioMaxNr;
  }

  // fs_file_max - computed: false, optional: true, required: false
  private _fsFileMax?: number; 
  public get fsFileMax() {
    return this.getNumberAttribute('fs_file_max');
  }
  public set fsFileMax(value: number) {
    this._fsFileMax = value;
  }
  public resetFsFileMax() {
    this._fsFileMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsFileMaxInput() {
    return this._fsFileMax;
  }

  // fs_inotify_max_user_watches - computed: false, optional: true, required: false
  private _fsInotifyMaxUserWatches?: number; 
  public get fsInotifyMaxUserWatches() {
    return this.getNumberAttribute('fs_inotify_max_user_watches');
  }
  public set fsInotifyMaxUserWatches(value: number) {
    this._fsInotifyMaxUserWatches = value;
  }
  public resetFsInotifyMaxUserWatches() {
    this._fsInotifyMaxUserWatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInotifyMaxUserWatchesInput() {
    return this._fsInotifyMaxUserWatches;
  }

  // fs_nr_open - computed: false, optional: true, required: false
  private _fsNrOpen?: number; 
  public get fsNrOpen() {
    return this.getNumberAttribute('fs_nr_open');
  }
  public set fsNrOpen(value: number) {
    this._fsNrOpen = value;
  }
  public resetFsNrOpen() {
    this._fsNrOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsNrOpenInput() {
    return this._fsNrOpen;
  }

  // kernel_threads_max - computed: false, optional: true, required: false
  private _kernelThreadsMax?: number; 
  public get kernelThreadsMax() {
    return this.getNumberAttribute('kernel_threads_max');
  }
  public set kernelThreadsMax(value: number) {
    this._kernelThreadsMax = value;
  }
  public resetKernelThreadsMax() {
    this._kernelThreadsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelThreadsMaxInput() {
    return this._kernelThreadsMax;
  }

  // net_core_netdev_max_backlog - computed: false, optional: true, required: false
  private _netCoreNetdevMaxBacklog?: number; 
  public get netCoreNetdevMaxBacklog() {
    return this.getNumberAttribute('net_core_netdev_max_backlog');
  }
  public set netCoreNetdevMaxBacklog(value: number) {
    this._netCoreNetdevMaxBacklog = value;
  }
  public resetNetCoreNetdevMaxBacklog() {
    this._netCoreNetdevMaxBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreNetdevMaxBacklogInput() {
    return this._netCoreNetdevMaxBacklog;
  }

  // net_core_optmem_max - computed: false, optional: true, required: false
  private _netCoreOptmemMax?: number; 
  public get netCoreOptmemMax() {
    return this.getNumberAttribute('net_core_optmem_max');
  }
  public set netCoreOptmemMax(value: number) {
    this._netCoreOptmemMax = value;
  }
  public resetNetCoreOptmemMax() {
    this._netCoreOptmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreOptmemMaxInput() {
    return this._netCoreOptmemMax;
  }

  // net_core_rmem_default - computed: false, optional: true, required: false
  private _netCoreRmemDefault?: number; 
  public get netCoreRmemDefault() {
    return this.getNumberAttribute('net_core_rmem_default');
  }
  public set netCoreRmemDefault(value: number) {
    this._netCoreRmemDefault = value;
  }
  public resetNetCoreRmemDefault() {
    this._netCoreRmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemDefaultInput() {
    return this._netCoreRmemDefault;
  }

  // net_core_rmem_max - computed: false, optional: true, required: false
  private _netCoreRmemMax?: number; 
  public get netCoreRmemMax() {
    return this.getNumberAttribute('net_core_rmem_max');
  }
  public set netCoreRmemMax(value: number) {
    this._netCoreRmemMax = value;
  }
  public resetNetCoreRmemMax() {
    this._netCoreRmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemMaxInput() {
    return this._netCoreRmemMax;
  }

  // net_core_somaxconn - computed: false, optional: true, required: false
  private _netCoreSomaxconn?: number; 
  public get netCoreSomaxconn() {
    return this.getNumberAttribute('net_core_somaxconn');
  }
  public set netCoreSomaxconn(value: number) {
    this._netCoreSomaxconn = value;
  }
  public resetNetCoreSomaxconn() {
    this._netCoreSomaxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreSomaxconnInput() {
    return this._netCoreSomaxconn;
  }

  // net_core_wmem_default - computed: false, optional: true, required: false
  private _netCoreWmemDefault?: number; 
  public get netCoreWmemDefault() {
    return this.getNumberAttribute('net_core_wmem_default');
  }
  public set netCoreWmemDefault(value: number) {
    this._netCoreWmemDefault = value;
  }
  public resetNetCoreWmemDefault() {
    this._netCoreWmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemDefaultInput() {
    return this._netCoreWmemDefault;
  }

  // net_core_wmem_max - computed: false, optional: true, required: false
  private _netCoreWmemMax?: number; 
  public get netCoreWmemMax() {
    return this.getNumberAttribute('net_core_wmem_max');
  }
  public set netCoreWmemMax(value: number) {
    this._netCoreWmemMax = value;
  }
  public resetNetCoreWmemMax() {
    this._netCoreWmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemMaxInput() {
    return this._netCoreWmemMax;
  }

  // net_ipv4_ip_local_port_range_max - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRangeMax?: number; 
  public get netIpv4IpLocalPortRangeMax() {
    return this.getNumberAttribute('net_ipv4_ip_local_port_range_max');
  }
  public set netIpv4IpLocalPortRangeMax(value: number) {
    this._netIpv4IpLocalPortRangeMax = value;
  }
  public resetNetIpv4IpLocalPortRangeMax() {
    this._netIpv4IpLocalPortRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeMaxInput() {
    return this._netIpv4IpLocalPortRangeMax;
  }

  // net_ipv4_ip_local_port_range_min - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRangeMin?: number; 
  public get netIpv4IpLocalPortRangeMin() {
    return this.getNumberAttribute('net_ipv4_ip_local_port_range_min');
  }
  public set netIpv4IpLocalPortRangeMin(value: number) {
    this._netIpv4IpLocalPortRangeMin = value;
  }
  public resetNetIpv4IpLocalPortRangeMin() {
    this._netIpv4IpLocalPortRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeMinInput() {
    return this._netIpv4IpLocalPortRangeMin;
  }

  // net_ipv4_neigh_default_gc_thresh1 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh1?: number; 
  public get netIpv4NeighDefaultGcThresh1() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh1');
  }
  public set netIpv4NeighDefaultGcThresh1(value: number) {
    this._netIpv4NeighDefaultGcThresh1 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh1() {
    this._netIpv4NeighDefaultGcThresh1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh1Input() {
    return this._netIpv4NeighDefaultGcThresh1;
  }

  // net_ipv4_neigh_default_gc_thresh2 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh2?: number; 
  public get netIpv4NeighDefaultGcThresh2() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh2');
  }
  public set netIpv4NeighDefaultGcThresh2(value: number) {
    this._netIpv4NeighDefaultGcThresh2 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh2() {
    this._netIpv4NeighDefaultGcThresh2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh2Input() {
    return this._netIpv4NeighDefaultGcThresh2;
  }

  // net_ipv4_neigh_default_gc_thresh3 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh3?: number; 
  public get netIpv4NeighDefaultGcThresh3() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh3');
  }
  public set netIpv4NeighDefaultGcThresh3(value: number) {
    this._netIpv4NeighDefaultGcThresh3 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh3() {
    this._netIpv4NeighDefaultGcThresh3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh3Input() {
    return this._netIpv4NeighDefaultGcThresh3;
  }

  // net_ipv4_tcp_fin_timeout - computed: false, optional: true, required: false
  private _netIpv4TcpFinTimeout?: number; 
  public get netIpv4TcpFinTimeout() {
    return this.getNumberAttribute('net_ipv4_tcp_fin_timeout');
  }
  public set netIpv4TcpFinTimeout(value: number) {
    this._netIpv4TcpFinTimeout = value;
  }
  public resetNetIpv4TcpFinTimeout() {
    this._netIpv4TcpFinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpFinTimeoutInput() {
    return this._netIpv4TcpFinTimeout;
  }

  // net_ipv4_tcp_keepalive_intvl - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveIntvl?: number; 
  public get netIpv4TcpKeepaliveIntvl() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_intvl');
  }
  public set netIpv4TcpKeepaliveIntvl(value: number) {
    this._netIpv4TcpKeepaliveIntvl = value;
  }
  public resetNetIpv4TcpKeepaliveIntvl() {
    this._netIpv4TcpKeepaliveIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveIntvlInput() {
    return this._netIpv4TcpKeepaliveIntvl;
  }

  // net_ipv4_tcp_keepalive_probes - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveProbes?: number; 
  public get netIpv4TcpKeepaliveProbes() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_probes');
  }
  public set netIpv4TcpKeepaliveProbes(value: number) {
    this._netIpv4TcpKeepaliveProbes = value;
  }
  public resetNetIpv4TcpKeepaliveProbes() {
    this._netIpv4TcpKeepaliveProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveProbesInput() {
    return this._netIpv4TcpKeepaliveProbes;
  }

  // net_ipv4_tcp_keepalive_time - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveTime?: number; 
  public get netIpv4TcpKeepaliveTime() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_time');
  }
  public set netIpv4TcpKeepaliveTime(value: number) {
    this._netIpv4TcpKeepaliveTime = value;
  }
  public resetNetIpv4TcpKeepaliveTime() {
    this._netIpv4TcpKeepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveTimeInput() {
    return this._netIpv4TcpKeepaliveTime;
  }

  // net_ipv4_tcp_max_syn_backlog - computed: false, optional: true, required: false
  private _netIpv4TcpMaxSynBacklog?: number; 
  public get netIpv4TcpMaxSynBacklog() {
    return this.getNumberAttribute('net_ipv4_tcp_max_syn_backlog');
  }
  public set netIpv4TcpMaxSynBacklog(value: number) {
    this._netIpv4TcpMaxSynBacklog = value;
  }
  public resetNetIpv4TcpMaxSynBacklog() {
    this._netIpv4TcpMaxSynBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxSynBacklogInput() {
    return this._netIpv4TcpMaxSynBacklog;
  }

  // net_ipv4_tcp_max_tw_buckets - computed: false, optional: true, required: false
  private _netIpv4TcpMaxTwBuckets?: number; 
  public get netIpv4TcpMaxTwBuckets() {
    return this.getNumberAttribute('net_ipv4_tcp_max_tw_buckets');
  }
  public set netIpv4TcpMaxTwBuckets(value: number) {
    this._netIpv4TcpMaxTwBuckets = value;
  }
  public resetNetIpv4TcpMaxTwBuckets() {
    this._netIpv4TcpMaxTwBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxTwBucketsInput() {
    return this._netIpv4TcpMaxTwBuckets;
  }

  // net_ipv4_tcp_tw_reuse - computed: false, optional: true, required: false
  private _netIpv4TcpTwReuse?: boolean | cdktf.IResolvable; 
  public get netIpv4TcpTwReuse() {
    return this.getBooleanAttribute('net_ipv4_tcp_tw_reuse');
  }
  public set netIpv4TcpTwReuse(value: boolean | cdktf.IResolvable) {
    this._netIpv4TcpTwReuse = value;
  }
  public resetNetIpv4TcpTwReuse() {
    this._netIpv4TcpTwReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpTwReuseInput() {
    return this._netIpv4TcpTwReuse;
  }

  // net_netfilter_nf_conntrack_buckets - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackBuckets?: number; 
  public get netNetfilterNfConntrackBuckets() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_buckets');
  }
  public set netNetfilterNfConntrackBuckets(value: number) {
    this._netNetfilterNfConntrackBuckets = value;
  }
  public resetNetNetfilterNfConntrackBuckets() {
    this._netNetfilterNfConntrackBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackBucketsInput() {
    return this._netNetfilterNfConntrackBuckets;
  }

  // net_netfilter_nf_conntrack_max - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackMax?: number; 
  public get netNetfilterNfConntrackMax() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_max');
  }
  public set netNetfilterNfConntrackMax(value: number) {
    this._netNetfilterNfConntrackMax = value;
  }
  public resetNetNetfilterNfConntrackMax() {
    this._netNetfilterNfConntrackMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackMaxInput() {
    return this._netNetfilterNfConntrackMax;
  }

  // vm_max_map_count - computed: false, optional: true, required: false
  private _vmMaxMapCount?: number; 
  public get vmMaxMapCount() {
    return this.getNumberAttribute('vm_max_map_count');
  }
  public set vmMaxMapCount(value: number) {
    this._vmMaxMapCount = value;
  }
  public resetVmMaxMapCount() {
    this._vmMaxMapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMaxMapCountInput() {
    return this._vmMaxMapCount;
  }

  // vm_swappiness - computed: false, optional: true, required: false
  private _vmSwappiness?: number; 
  public get vmSwappiness() {
    return this.getNumberAttribute('vm_swappiness');
  }
  public set vmSwappiness(value: number) {
    this._vmSwappiness = value;
  }
  public resetVmSwappiness() {
    this._vmSwappiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSwappinessInput() {
    return this._vmSwappiness;
  }

  // vm_vfs_cache_pressure - computed: false, optional: true, required: false
  private _vmVfsCachePressure?: number; 
  public get vmVfsCachePressure() {
    return this.getNumberAttribute('vm_vfs_cache_pressure');
  }
  public set vmVfsCachePressure(value: number) {
    this._vmVfsCachePressure = value;
  }
  public resetVmVfsCachePressure() {
    this._vmVfsCachePressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVfsCachePressureInput() {
    return this._vmVfsCachePressure;
  }
}
export interface KubernetesClusterNodePoolLinuxOsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#sysctl_config KubernetesClusterNodePool#sysctl_config}
  */
  readonly sysctlConfig?: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig;
}

export function kubernetesClusterNodePoolLinuxOsConfigToTerraform(struct?: KubernetesClusterNodePoolLinuxOsConfigOutputReference | KubernetesClusterNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctl_config: kubernetesClusterNodePoolLinuxOsConfigSysctlConfigToTerraform(struct!.sysctlConfig),
  }
}


export function kubernetesClusterNodePoolLinuxOsConfigToHclTerraform(struct?: KubernetesClusterNodePoolLinuxOsConfigOutputReference | KubernetesClusterNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.swapFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transparent_huge_page_defrag: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_huge_page_enabled: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctl_config: {
      value: kubernetesClusterNodePoolLinuxOsConfigSysctlConfigToHclTerraform(struct!.sysctlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterNodePoolLinuxOsConfigSysctlConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolLinuxOsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNodePoolLinuxOsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapFileSizeMb = this._swapFileSizeMb;
    }
    if (this._transparentHugePageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageDefrag = this._transparentHugePageDefrag;
    }
    if (this._transparentHugePageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageEnabled = this._transparentHugePageEnabled;
    }
    if (this._sysctlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctlConfig = this._sysctlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolLinuxOsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapFileSizeMb = undefined;
      this._transparentHugePageDefrag = undefined;
      this._transparentHugePageEnabled = undefined;
      this._sysctlConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapFileSizeMb = value.swapFileSizeMb;
      this._transparentHugePageDefrag = value.transparentHugePageDefrag;
      this._transparentHugePageEnabled = value.transparentHugePageEnabled;
      this._sysctlConfig.internalValue = value.sysctlConfig;
    }
  }

  // swap_file_size_mb - computed: false, optional: true, required: false
  private _swapFileSizeMb?: number; 
  public get swapFileSizeMb() {
    return this.getNumberAttribute('swap_file_size_mb');
  }
  public set swapFileSizeMb(value: number) {
    this._swapFileSizeMb = value;
  }
  public resetSwapFileSizeMb() {
    this._swapFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapFileSizeMbInput() {
    return this._swapFileSizeMb;
  }

  // transparent_huge_page_defrag - computed: false, optional: true, required: false
  private _transparentHugePageDefrag?: string; 
  public get transparentHugePageDefrag() {
    return this.getStringAttribute('transparent_huge_page_defrag');
  }
  public set transparentHugePageDefrag(value: string) {
    this._transparentHugePageDefrag = value;
  }
  public resetTransparentHugePageDefrag() {
    this._transparentHugePageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageDefragInput() {
    return this._transparentHugePageDefrag;
  }

  // transparent_huge_page_enabled - computed: false, optional: true, required: false
  private _transparentHugePageEnabled?: string; 
  public get transparentHugePageEnabled() {
    return this.getStringAttribute('transparent_huge_page_enabled');
  }
  public set transparentHugePageEnabled(value: string) {
    this._transparentHugePageEnabled = value;
  }
  public resetTransparentHugePageEnabled() {
    this._transparentHugePageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageEnabledInput() {
    return this._transparentHugePageEnabled;
  }

  // sysctl_config - computed: false, optional: true, required: false
  private _sysctlConfig = new KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference(this, "sysctl_config");
  public get sysctlConfig() {
    return this._sysctlConfig;
  }
  public putSysctlConfig(value: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig) {
    this._sysctlConfig.internalValue = value;
  }
  public resetSysctlConfig() {
    this._sysctlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlConfigInput() {
    return this._sysctlConfig.internalValue;
  }
}
export interface KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}
  */
  readonly portEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}
  */
  readonly portStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}
  */
  readonly protocol?: string;
}

export function kubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsToTerraform(struct?: KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_end: cdktf.numberToTerraform(struct!.portEnd),
    port_start: cdktf.numberToTerraform(struct!.portStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function kubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsToHclTerraform(struct?: KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start: {
      value: cdktf.numberToHclTerraform(struct!.portStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    if (this._portStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStart = this._portStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portEnd = undefined;
      this._portStart = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portEnd = value.portEnd;
      this._portStart = value.portStart;
      this._protocol = value.protocol;
    }
  }

  // port_end - computed: false, optional: true, required: false
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  public resetPortEnd() {
    this._portEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: true, required: false
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  public resetPortStart() {
    this._portStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference {
    return new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterNodePoolNodeNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}
  */
  readonly nodePublicIpTags?: { [key: string]: string };
  /**
  * allowed_host_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#allowed_host_ports KubernetesClusterNodePool#allowed_host_ports}
  */
  readonly allowedHostPorts?: KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts[] | cdktf.IResolvable;
}

export function kubernetesClusterNodePoolNodeNetworkProfileToTerraform(struct?: KubernetesClusterNodePoolNodeNetworkProfileOutputReference | KubernetesClusterNodePoolNodeNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationSecurityGroupIds),
    node_public_ip_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodePublicIpTags),
    allowed_host_ports: cdktf.listMapper(kubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsToTerraform, true)(struct!.allowedHostPorts),
  }
}


export function kubernetesClusterNodePoolNodeNetworkProfileToHclTerraform(struct?: KubernetesClusterNodePoolNodeNetworkProfileOutputReference | KubernetesClusterNodePoolNodeNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationSecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_public_ip_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodePublicIpTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allowed_host_ports: {
      value: cdktf.listMapperHcl(kubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsToHclTerraform, true)(struct!.allowedHostPorts),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolNodeNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNodePoolNodeNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecurityGroupIds = this._applicationSecurityGroupIds;
    }
    if (this._nodePublicIpTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublicIpTags = this._nodePublicIpTags;
    }
    if (this._allowedHostPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostPorts = this._allowedHostPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolNodeNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationSecurityGroupIds = undefined;
      this._nodePublicIpTags = undefined;
      this._allowedHostPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationSecurityGroupIds = value.applicationSecurityGroupIds;
      this._nodePublicIpTags = value.nodePublicIpTags;
      this._allowedHostPorts.internalValue = value.allowedHostPorts;
    }
  }

  // application_security_group_ids - computed: false, optional: true, required: false
  private _applicationSecurityGroupIds?: string[]; 
  public get applicationSecurityGroupIds() {
    return this.getListAttribute('application_security_group_ids');
  }
  public set applicationSecurityGroupIds(value: string[]) {
    this._applicationSecurityGroupIds = value;
  }
  public resetApplicationSecurityGroupIds() {
    this._applicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupIdsInput() {
    return this._applicationSecurityGroupIds;
  }

  // node_public_ip_tags - computed: false, optional: true, required: false
  private _nodePublicIpTags?: { [key: string]: string }; 
  public get nodePublicIpTags() {
    return this.getStringMapAttribute('node_public_ip_tags');
  }
  public set nodePublicIpTags(value: { [key: string]: string }) {
    this._nodePublicIpTags = value;
  }
  public resetNodePublicIpTags() {
    this._nodePublicIpTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpTagsInput() {
    return this._nodePublicIpTags;
  }

  // allowed_host_ports - computed: false, optional: true, required: false
  private _allowedHostPorts = new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList(this, "allowed_host_ports", false);
  public get allowedHostPorts() {
    return this._allowedHostPorts;
  }
  public putAllowedHostPorts(value: KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts[] | cdktf.IResolvable) {
    this._allowedHostPorts.internalValue = value;
  }
  public resetAllowedHostPorts() {
    this._allowedHostPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPortsInput() {
    return this._allowedHostPorts.internalValue;
  }
}
export interface KubernetesClusterNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}
  */
  readonly update?: string;
}

export function kubernetesClusterNodePoolTimeoutsToTerraform(struct?: KubernetesClusterNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kubernetesClusterNodePoolTimeoutsToHclTerraform(struct?: KubernetesClusterNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterNodePoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface KubernetesClusterNodePoolUpgradeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}
  */
  readonly drainTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}
  */
  readonly maxSurge: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}
  */
  readonly nodeSoakDurationInMinutes?: number;
}

export function kubernetesClusterNodePoolUpgradeSettingsToTerraform(struct?: KubernetesClusterNodePoolUpgradeSettingsOutputReference | KubernetesClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_timeout_in_minutes: cdktf.numberToTerraform(struct!.drainTimeoutInMinutes),
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    node_soak_duration_in_minutes: cdktf.numberToTerraform(struct!.nodeSoakDurationInMinutes),
  }
}


export function kubernetesClusterNodePoolUpgradeSettingsToHclTerraform(struct?: KubernetesClusterNodePoolUpgradeSettingsOutputReference | KubernetesClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.drainTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_soak_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.nodeSoakDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainTimeoutInMinutes = this._drainTimeoutInMinutes;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._nodeSoakDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSoakDurationInMinutes = this._nodeSoakDurationInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainTimeoutInMinutes = undefined;
      this._maxSurge = undefined;
      this._nodeSoakDurationInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainTimeoutInMinutes = value.drainTimeoutInMinutes;
      this._maxSurge = value.maxSurge;
      this._nodeSoakDurationInMinutes = value.nodeSoakDurationInMinutes;
    }
  }

  // drain_timeout_in_minutes - computed: false, optional: true, required: false
  private _drainTimeoutInMinutes?: number; 
  public get drainTimeoutInMinutes() {
    return this.getNumberAttribute('drain_timeout_in_minutes');
  }
  public set drainTimeoutInMinutes(value: number) {
    this._drainTimeoutInMinutes = value;
  }
  public resetDrainTimeoutInMinutes() {
    this._drainTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTimeoutInMinutesInput() {
    return this._drainTimeoutInMinutes;
  }

  // max_surge - computed: false, optional: false, required: true
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // node_soak_duration_in_minutes - computed: false, optional: true, required: false
  private _nodeSoakDurationInMinutes?: number; 
  public get nodeSoakDurationInMinutes() {
    return this.getNumberAttribute('node_soak_duration_in_minutes');
  }
  public set nodeSoakDurationInMinutes(value: number) {
    this._nodeSoakDurationInMinutes = value;
  }
  public resetNodeSoakDurationInMinutes() {
    this._nodeSoakDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSoakDurationInMinutesInput() {
    return this._nodeSoakDurationInMinutes;
  }
}
export interface KubernetesClusterNodePoolWindowsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}
  */
  readonly outboundNatEnabled?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterNodePoolWindowsProfileToTerraform(struct?: KubernetesClusterNodePoolWindowsProfileOutputReference | KubernetesClusterNodePoolWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outbound_nat_enabled: cdktf.booleanToTerraform(struct!.outboundNatEnabled),
  }
}


export function kubernetesClusterNodePoolWindowsProfileToHclTerraform(struct?: KubernetesClusterNodePoolWindowsProfileOutputReference | KubernetesClusterNodePoolWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outbound_nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.outboundNatEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolWindowsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNodePoolWindowsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outboundNatEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundNatEnabled = this._outboundNatEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolWindowsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outboundNatEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outboundNatEnabled = value.outboundNatEnabled;
    }
  }

  // outbound_nat_enabled - computed: false, optional: true, required: false
  private _outboundNatEnabled?: boolean | cdktf.IResolvable; 
  public get outboundNatEnabled() {
    return this.getBooleanAttribute('outbound_nat_enabled');
  }
  public set outboundNatEnabled(value: boolean | cdktf.IResolvable) {
    this._outboundNatEnabled = value;
  }
  public resetOutboundNatEnabled() {
    this._outboundNatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNatEnabledInput() {
    return this._outboundNatEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}
*/
export class KubernetesClusterNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_cluster_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterNodePool to import
  * @param importFromId The id of the existing KubernetesClusterNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_cluster_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingEnabled = config.autoScalingEnabled;
    this._capacityReservationGroupId = config.capacityReservationGroupId;
    this._evictionPolicy = config.evictionPolicy;
    this._fipsEnabled = config.fipsEnabled;
    this._gpuInstance = config.gpuInstance;
    this._hostEncryptionEnabled = config.hostEncryptionEnabled;
    this._hostGroupId = config.hostGroupId;
    this._id = config.id;
    this._kubeletDiskType = config.kubeletDiskType;
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._maxCount = config.maxCount;
    this._maxPods = config.maxPods;
    this._minCount = config.minCount;
    this._mode = config.mode;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeLabels = config.nodeLabels;
    this._nodePublicIpEnabled = config.nodePublicIpEnabled;
    this._nodePublicIpPrefixId = config.nodePublicIpPrefixId;
    this._nodeTaints = config.nodeTaints;
    this._orchestratorVersion = config.orchestratorVersion;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osSku = config.osSku;
    this._osType = config.osType;
    this._podSubnetId = config.podSubnetId;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._scaleDownMode = config.scaleDownMode;
    this._snapshotId = config.snapshotId;
    this._spotMaxPrice = config.spotMaxPrice;
    this._tags = config.tags;
    this._ultraSsdEnabled = config.ultraSsdEnabled;
    this._vmSize = config.vmSize;
    this._vnetSubnetId = config.vnetSubnetId;
    this._workloadRuntime = config.workloadRuntime;
    this._zones = config.zones;
    this._kubeletConfig.internalValue = config.kubeletConfig;
    this._linuxOsConfig.internalValue = config.linuxOsConfig;
    this._nodeNetworkProfile.internalValue = config.nodeNetworkProfile;
    this._timeouts.internalValue = config.timeouts;
    this._upgradeSettings.internalValue = config.upgradeSettings;
    this._windowsProfile.internalValue = config.windowsProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_enabled - computed: false, optional: true, required: false
  private _autoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }
  public set autoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingEnabled = value;
  }
  public resetAutoScalingEnabled() {
    this._autoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingEnabledInput() {
    return this._autoScalingEnabled;
  }

  // capacity_reservation_group_id - computed: false, optional: true, required: false
  private _capacityReservationGroupId?: string; 
  public get capacityReservationGroupId() {
    return this.getStringAttribute('capacity_reservation_group_id');
  }
  public set capacityReservationGroupId(value: string) {
    this._capacityReservationGroupId = value;
  }
  public resetCapacityReservationGroupId() {
    this._capacityReservationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationGroupIdInput() {
    return this._capacityReservationGroupId;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // gpu_instance - computed: false, optional: true, required: false
  private _gpuInstance?: string; 
  public get gpuInstance() {
    return this.getStringAttribute('gpu_instance');
  }
  public set gpuInstance(value: string) {
    this._gpuInstance = value;
  }
  public resetGpuInstance() {
    this._gpuInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInstanceInput() {
    return this._gpuInstance;
  }

  // host_encryption_enabled - computed: false, optional: true, required: false
  private _hostEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get hostEncryptionEnabled() {
    return this.getBooleanAttribute('host_encryption_enabled');
  }
  public set hostEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._hostEncryptionEnabled = value;
  }
  public resetHostEncryptionEnabled() {
    this._hostEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEncryptionEnabledInput() {
    return this._hostEncryptionEnabled;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kubelet_disk_type - computed: true, optional: true, required: false
  private _kubeletDiskType?: string; 
  public get kubeletDiskType() {
    return this.getStringAttribute('kubelet_disk_type');
  }
  public set kubeletDiskType(value: string) {
    this._kubeletDiskType = value;
  }
  public resetKubeletDiskType() {
    this._kubeletDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDiskTypeInput() {
    return this._kubeletDiskType;
  }

  // kubernetes_cluster_id - computed: false, optional: false, required: true
  private _kubernetesClusterId?: string; 
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
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
    return this._maxPods;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
    return this._nodeCount;
  }

  // node_labels - computed: true, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_public_ip_enabled - computed: false, optional: true, required: false
  private _nodePublicIpEnabled?: boolean | cdktf.IResolvable; 
  public get nodePublicIpEnabled() {
    return this.getBooleanAttribute('node_public_ip_enabled');
  }
  public set nodePublicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._nodePublicIpEnabled = value;
  }
  public resetNodePublicIpEnabled() {
    this._nodePublicIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpEnabledInput() {
    return this._nodePublicIpEnabled;
  }

  // node_public_ip_prefix_id - computed: false, optional: true, required: false
  private _nodePublicIpPrefixId?: string; 
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }
  public set nodePublicIpPrefixId(value: string) {
    this._nodePublicIpPrefixId = value;
  }
  public resetNodePublicIpPrefixId() {
    this._nodePublicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpPrefixIdInput() {
    return this._nodePublicIpPrefixId;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[]; 
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[]) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints;
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
    return this._orchestratorVersion;
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
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_sku - computed: true, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // pod_subnet_id - computed: false, optional: true, required: false
  private _podSubnetId?: string; 
  public get podSubnetId() {
    return this.getStringAttribute('pod_subnet_id');
  }
  public set podSubnetId(value: string) {
    this._podSubnetId = value;
  }
  public resetPodSubnetId() {
    this._podSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdInput() {
    return this._podSubnetId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
  }

  // scale_down_mode - computed: false, optional: true, required: false
  private _scaleDownMode?: string; 
  public get scaleDownMode() {
    return this.getStringAttribute('scale_down_mode');
  }
  public set scaleDownMode(value: string) {
    this._scaleDownMode = value;
  }
  public resetScaleDownMode() {
    this._scaleDownMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownModeInput() {
    return this._scaleDownMode;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: number; 
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: number) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled');
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable) {
    this._ultraSsdEnabled = value;
  }
  public resetUltraSsdEnabled() {
    this._ultraSsdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled;
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
    return this._vmSize;
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string; 
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId;
  }

  // workload_runtime - computed: false, optional: true, required: false
  private _workloadRuntime?: string; 
  public get workloadRuntime() {
    return this.getStringAttribute('workload_runtime');
  }
  public set workloadRuntime(value: string) {
    this._workloadRuntime = value;
  }
  public resetWorkloadRuntime() {
    this._workloadRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadRuntimeInput() {
    return this._workloadRuntime;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new KubernetesClusterNodePoolKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: KubernetesClusterNodePoolKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig = new KubernetesClusterNodePoolLinuxOsConfigOutputReference(this, "linux_os_config");
  public get linuxOsConfig() {
    return this._linuxOsConfig;
  }
  public putLinuxOsConfig(value: KubernetesClusterNodePoolLinuxOsConfig) {
    this._linuxOsConfig.internalValue = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig.internalValue;
  }

  // node_network_profile - computed: false, optional: true, required: false
  private _nodeNetworkProfile = new KubernetesClusterNodePoolNodeNetworkProfileOutputReference(this, "node_network_profile");
  public get nodeNetworkProfile() {
    return this._nodeNetworkProfile;
  }
  public putNodeNetworkProfile(value: KubernetesClusterNodePoolNodeNetworkProfile) {
    this._nodeNetworkProfile.internalValue = value;
  }
  public resetNodeNetworkProfile() {
    this._nodeNetworkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNetworkProfileInput() {
    return this._nodeNetworkProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterNodePoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new KubernetesClusterNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: KubernetesClusterNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile = new KubernetesClusterNodePoolWindowsProfileOutputReference(this, "windows_profile");
  public get windowsProfile() {
    return this._windowsProfile;
  }
  public putWindowsProfile(value: KubernetesClusterNodePoolWindowsProfile) {
    this._windowsProfile.internalValue = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_enabled: cdktf.booleanToTerraform(this._autoScalingEnabled),
      capacity_reservation_group_id: cdktf.stringToTerraform(this._capacityReservationGroupId),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      gpu_instance: cdktf.stringToTerraform(this._gpuInstance),
      host_encryption_enabled: cdktf.booleanToTerraform(this._hostEncryptionEnabled),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      id: cdktf.stringToTerraform(this._id),
      kubelet_disk_type: cdktf.stringToTerraform(this._kubeletDiskType),
      kubernetes_cluster_id: cdktf.stringToTerraform(this._kubernetesClusterId),
      max_count: cdktf.numberToTerraform(this._maxCount),
      max_pods: cdktf.numberToTerraform(this._maxPods),
      min_count: cdktf.numberToTerraform(this._minCount),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeLabels),
      node_public_ip_enabled: cdktf.booleanToTerraform(this._nodePublicIpEnabled),
      node_public_ip_prefix_id: cdktf.stringToTerraform(this._nodePublicIpPrefixId),
      node_taints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeTaints),
      orchestrator_version: cdktf.stringToTerraform(this._orchestratorVersion),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      os_sku: cdktf.stringToTerraform(this._osSku),
      os_type: cdktf.stringToTerraform(this._osType),
      pod_subnet_id: cdktf.stringToTerraform(this._podSubnetId),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      scale_down_mode: cdktf.stringToTerraform(this._scaleDownMode),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      spot_max_price: cdktf.numberToTerraform(this._spotMaxPrice),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      ultra_ssd_enabled: cdktf.booleanToTerraform(this._ultraSsdEnabled),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      vnet_subnet_id: cdktf.stringToTerraform(this._vnetSubnetId),
      workload_runtime: cdktf.stringToTerraform(this._workloadRuntime),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      kubelet_config: kubernetesClusterNodePoolKubeletConfigToTerraform(this._kubeletConfig.internalValue),
      linux_os_config: kubernetesClusterNodePoolLinuxOsConfigToTerraform(this._linuxOsConfig.internalValue),
      node_network_profile: kubernetesClusterNodePoolNodeNetworkProfileToTerraform(this._nodeNetworkProfile.internalValue),
      timeouts: kubernetesClusterNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_settings: kubernetesClusterNodePoolUpgradeSettingsToTerraform(this._upgradeSettings.internalValue),
      windows_profile: kubernetesClusterNodePoolWindowsProfileToTerraform(this._windowsProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_reservation_group_id: {
        value: cdktf.stringToHclTerraform(this._capacityReservationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eviction_policy: {
        value: cdktf.stringToHclTerraform(this._evictionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_enabled: {
        value: cdktf.booleanToHclTerraform(this._fipsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gpu_instance: {
        value: cdktf.stringToHclTerraform(this._gpuInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._hostEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubelet_disk_type: {
        value: cdktf.stringToHclTerraform(this._kubeletDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_count: {
        value: cdktf.numberToHclTerraform(this._maxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_pods: {
        value: cdktf.numberToHclTerraform(this._maxPods),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_count: {
        value: cdktf.numberToHclTerraform(this._minCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      node_public_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._nodePublicIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_public_ip_prefix_id: {
        value: cdktf.stringToHclTerraform(this._nodePublicIpPrefixId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_taints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeTaints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      orchestrator_version: {
        value: cdktf.stringToHclTerraform(this._orchestratorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._osDiskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os_disk_type: {
        value: cdktf.stringToHclTerraform(this._osDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_sku: {
        value: cdktf.stringToHclTerraform(this._osSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_subnet_id: {
        value: cdktf.stringToHclTerraform(this._podSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proximity_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._proximityPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_down_mode: {
        value: cdktf.stringToHclTerraform(this._scaleDownMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_max_price: {
        value: cdktf.numberToHclTerraform(this._spotMaxPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ultra_ssd_enabled: {
        value: cdktf.booleanToHclTerraform(this._ultraSsdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_size: {
        value: cdktf.stringToHclTerraform(this._vmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_subnet_id: {
        value: cdktf.stringToHclTerraform(this._vnetSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_runtime: {
        value: cdktf.stringToHclTerraform(this._workloadRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      kubelet_config: {
        value: kubernetesClusterNodePoolKubeletConfigToHclTerraform(this._kubeletConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolKubeletConfigList",
      },
      linux_os_config: {
        value: kubernetesClusterNodePoolLinuxOsConfigToHclTerraform(this._linuxOsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolLinuxOsConfigList",
      },
      node_network_profile: {
        value: kubernetesClusterNodePoolNodeNetworkProfileToHclTerraform(this._nodeNetworkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolNodeNetworkProfileList",
      },
      timeouts: {
        value: kubernetesClusterNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterNodePoolTimeouts",
      },
      upgrade_settings: {
        value: kubernetesClusterNodePoolUpgradeSettingsToHclTerraform(this._upgradeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolUpgradeSettingsList",
      },
      windows_profile: {
        value: kubernetesClusterNodePoolWindowsProfileToHclTerraform(this._windowsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolWindowsProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
