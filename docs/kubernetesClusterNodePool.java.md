# `kubernetesClusterNodePool` Submodule <a name="`kubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePool;

KubernetesClusterNodePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .kubernetesClusterId(java.lang.String)
    .name(java.lang.String)
    .vmSize(java.lang.String)
//  .autoScalingEnabled(java.lang.Boolean)
//  .autoScalingEnabled(IResolvable)
//  .capacityReservationGroupId(java.lang.String)
//  .evictionPolicy(java.lang.String)
//  .fipsEnabled(java.lang.Boolean)
//  .fipsEnabled(IResolvable)
//  .gpuInstance(java.lang.String)
//  .hostEncryptionEnabled(java.lang.Boolean)
//  .hostEncryptionEnabled(IResolvable)
//  .hostGroupId(java.lang.String)
//  .id(java.lang.String)
//  .kubeletConfig(KubernetesClusterNodePoolKubeletConfig)
//  .kubeletDiskType(java.lang.String)
//  .linuxOsConfig(KubernetesClusterNodePoolLinuxOsConfig)
//  .maxCount(java.lang.Number)
//  .maxPods(java.lang.Number)
//  .minCount(java.lang.Number)
//  .mode(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .nodeLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeNetworkProfile(KubernetesClusterNodePoolNodeNetworkProfile)
//  .nodePublicIpEnabled(java.lang.Boolean)
//  .nodePublicIpEnabled(IResolvable)
//  .nodePublicIpPrefixId(java.lang.String)
//  .nodeTaints(java.util.List<java.lang.String>)
//  .orchestratorVersion(java.lang.String)
//  .osDiskSizeGb(java.lang.Number)
//  .osDiskType(java.lang.String)
//  .osSku(java.lang.String)
//  .osType(java.lang.String)
//  .podSubnetId(java.lang.String)
//  .priority(java.lang.String)
//  .proximityPlacementGroupId(java.lang.String)
//  .scaleDownMode(java.lang.String)
//  .snapshotId(java.lang.String)
//  .spotMaxPrice(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryNameForRotation(java.lang.String)
//  .timeouts(KubernetesClusterNodePoolTimeouts)
//  .ultraSsdEnabled(java.lang.Boolean)
//  .ultraSsdEnabled(IResolvable)
//  .upgradeSettings(KubernetesClusterNodePoolUpgradeSettings)
//  .vnetSubnetId(java.lang.String)
//  .windowsProfile(KubernetesClusterNodePoolWindowsProfile)
//  .workloadRuntime(java.lang.String)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.gpuInstance">gpuInstance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostEncryptionEnabled">hostEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostGroupId">hostGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletDiskType">kubeletDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.linuxOsConfig">linuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.minCount">minCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeLabels">nodeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeNetworkProfile">nodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | node_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpPrefixId">nodePublicIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeTaints">nodeTaints</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.orchestratorVersion">orchestratorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osSku">osSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.podSubnetId">podSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scaleDownMode">scaleDownMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.spotMaxPrice">spotMaxPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.temporaryNameForRotation">temporaryNameForRotation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vnetSubnetId">vnetSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.windowsProfile">windowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | windows_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.workloadRuntime">workloadRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vmSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}.

---

##### `autoScalingEnabled`<sup>Optional</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.autoScalingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.capacityReservationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.evictionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}.

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.fipsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}.

---

##### `gpuInstance`<sup>Optional</sup> <a name="gpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.gpuInstance"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}.

---

##### `hostEncryptionEnabled`<sup>Optional</sup> <a name="hostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}.

---

##### `hostGroupId`<sup>Optional</sup> <a name="hostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeletConfig`<sup>Optional</sup> <a name="kubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}

---

##### `kubeletDiskType`<sup>Optional</sup> <a name="kubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletDiskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}.

---

##### `linuxOsConfig`<sup>Optional</sup> <a name="linuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.linuxOsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxPods"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.minCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}.

---

##### `nodeLabels`<sup>Optional</sup> <a name="nodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}.

---

##### `nodeNetworkProfile`<sup>Optional</sup> <a name="nodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeNetworkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

node_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}

---

##### `nodePublicIpEnabled`<sup>Optional</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}.

---

##### `nodePublicIpPrefixId`<sup>Optional</sup> <a name="nodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpPrefixId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}.

---

##### `nodeTaints`<sup>Optional</sup> <a name="nodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeTaints"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}.

---

##### `orchestratorVersion`<sup>Optional</sup> <a name="orchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.orchestratorVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}.

---

##### `osSku`<sup>Optional</sup> <a name="osSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}.

---

##### `podSubnetId`<sup>Optional</sup> <a name="podSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.podSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.proximityPlacementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}.

---

##### `scaleDownMode`<sup>Optional</sup> <a name="scaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scaleDownMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}.

---

##### `spotMaxPrice`<sup>Optional</sup> <a name="spotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.spotMaxPrice"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}.

---

##### `temporaryNameForRotation`<sup>Optional</sup> <a name="temporaryNameForRotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.temporaryNameForRotation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.ultraSsdEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}.

---

##### `upgradeSettings`<sup>Optional</sup> <a name="upgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.upgradeSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}

---

##### `vnetSubnetId`<sup>Optional</sup> <a name="vnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vnetSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}.

---

##### `windowsProfile`<sup>Optional</sup> <a name="windowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.windowsProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

windows_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}

---

##### `workloadRuntime`<sup>Optional</sup> <a name="workloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.workloadRuntime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig">putKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig">putLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile">putNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings">putUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile">putWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetAutoScalingEnabled">resetAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId">resetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuInstance">resetGpuInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostEncryptionEnabled">resetHostEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId">resetHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig">resetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType">resetKubeletDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig">resetLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels">resetNodeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile">resetNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpEnabled">resetNodePublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId">resetNodePublicIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints">resetNodeTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion">resetOrchestratorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb">resetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType">resetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku">resetOsSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId">resetPodSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId">resetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode">resetScaleDownMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice">resetSpotMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTemporaryNameForRotation">resetTemporaryNameForRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled">resetUltraSsdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings">resetUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId">resetVnetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile">resetWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime">resetWorkloadRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKubeletConfig` <a name="putKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig"></a>

```java
public void putKubeletConfig(KubernetesClusterNodePoolKubeletConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `putLinuxOsConfig` <a name="putLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig"></a>

```java
public void putLinuxOsConfig(KubernetesClusterNodePoolLinuxOsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `putNodeNetworkProfile` <a name="putNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile"></a>

```java
public void putNodeNetworkProfile(KubernetesClusterNodePoolNodeNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts"></a>

```java
public void putTimeouts(KubernetesClusterNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

---

##### `putUpgradeSettings` <a name="putUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings"></a>

```java
public void putUpgradeSettings(KubernetesClusterNodePoolUpgradeSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `putWindowsProfile` <a name="putWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile"></a>

```java
public void putWindowsProfile(KubernetesClusterNodePoolWindowsProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `resetAutoScalingEnabled` <a name="resetAutoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetAutoScalingEnabled"></a>

```java
public void resetAutoScalingEnabled()
```

##### `resetCapacityReservationGroupId` <a name="resetCapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId"></a>

```java
public void resetCapacityReservationGroupId()
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy"></a>

```java
public void resetEvictionPolicy()
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled"></a>

```java
public void resetFipsEnabled()
```

##### `resetGpuInstance` <a name="resetGpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuInstance"></a>

```java
public void resetGpuInstance()
```

##### `resetHostEncryptionEnabled` <a name="resetHostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostEncryptionEnabled"></a>

```java
public void resetHostEncryptionEnabled()
```

##### `resetHostGroupId` <a name="resetHostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId"></a>

```java
public void resetHostGroupId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetKubeletConfig` <a name="resetKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig"></a>

```java
public void resetKubeletConfig()
```

##### `resetKubeletDiskType` <a name="resetKubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType"></a>

```java
public void resetKubeletDiskType()
```

##### `resetLinuxOsConfig` <a name="resetLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig"></a>

```java
public void resetLinuxOsConfig()
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount"></a>

```java
public void resetMaxCount()
```

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods"></a>

```java
public void resetMaxPods()
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount"></a>

```java
public void resetMinCount()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode"></a>

```java
public void resetMode()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetNodeLabels` <a name="resetNodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels"></a>

```java
public void resetNodeLabels()
```

##### `resetNodeNetworkProfile` <a name="resetNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile"></a>

```java
public void resetNodeNetworkProfile()
```

##### `resetNodePublicIpEnabled` <a name="resetNodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpEnabled"></a>

```java
public void resetNodePublicIpEnabled()
```

##### `resetNodePublicIpPrefixId` <a name="resetNodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId"></a>

```java
public void resetNodePublicIpPrefixId()
```

##### `resetNodeTaints` <a name="resetNodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints"></a>

```java
public void resetNodeTaints()
```

##### `resetOrchestratorVersion` <a name="resetOrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion"></a>

```java
public void resetOrchestratorVersion()
```

##### `resetOsDiskSizeGb` <a name="resetOsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb"></a>

```java
public void resetOsDiskSizeGb()
```

##### `resetOsDiskType` <a name="resetOsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType"></a>

```java
public void resetOsDiskType()
```

##### `resetOsSku` <a name="resetOsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku"></a>

```java
public void resetOsSku()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetPodSubnetId` <a name="resetPodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId"></a>

```java
public void resetPodSubnetId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProximityPlacementGroupId` <a name="resetProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId"></a>

```java
public void resetProximityPlacementGroupId()
```

##### `resetScaleDownMode` <a name="resetScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode"></a>

```java
public void resetScaleDownMode()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetSpotMaxPrice` <a name="resetSpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice"></a>

```java
public void resetSpotMaxPrice()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemporaryNameForRotation` <a name="resetTemporaryNameForRotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTemporaryNameForRotation"></a>

```java
public void resetTemporaryNameForRotation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUltraSsdEnabled` <a name="resetUltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled"></a>

```java
public void resetUltraSsdEnabled()
```

##### `resetUpgradeSettings` <a name="resetUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings"></a>

```java
public void resetUpgradeSettings()
```

##### `resetVnetSubnetId` <a name="resetVnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId"></a>

```java
public void resetVnetSubnetId()
```

##### `resetWindowsProfile` <a name="resetWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile"></a>

```java
public void resetWindowsProfile()
```

##### `resetWorkloadRuntime` <a name="resetWorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime"></a>

```java
public void resetWorkloadRuntime()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePool;

KubernetesClusterNodePool.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePool;

KubernetesClusterNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePool;

KubernetesClusterNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePool;

KubernetesClusterNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesClusterNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesClusterNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesClusterNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig">linuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile">nodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile">windowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabledInput">autoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput">capacityReservationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstanceInput">gpuInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabledInput">hostEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput">hostGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput">kubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput">kubeletDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput">kubernetesClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput">linuxOsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput">maxCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput">maxPodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput">minCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput">nodeLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput">nodeNetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabledInput">nodePublicIpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput">nodePublicIpPrefixIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput">nodeTaintsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput">orchestratorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput">osDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput">osDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput">osSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput">podSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput">proximityPlacementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput">scaleDownModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput">spotMaxPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotationInput">temporaryNameForRotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput">ultraSsdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput">upgradeSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput">vnetSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput">windowsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput">workloadRuntimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstance">gpuInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabled">hostEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId">hostGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType">kubeletDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels">nodeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId">nodePublicIpPrefixId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints">nodeTaints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion">orchestratorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku">osSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId">podSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode">scaleDownMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice">spotMaxPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotation">temporaryNameForRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId">vnetSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime">workloadRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubeletConfig`<sup>Required</sup> <a name="kubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig"></a>

```java
public KubernetesClusterNodePoolKubeletConfigOutputReference getKubeletConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a>

---

##### `linuxOsConfig`<sup>Required</sup> <a name="linuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfigOutputReference getLinuxOsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a>

---

##### `nodeNetworkProfile`<sup>Required</sup> <a name="nodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile"></a>

```java
public KubernetesClusterNodePoolNodeNetworkProfileOutputReference getNodeNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts"></a>

```java
public KubernetesClusterNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `upgradeSettings`<sup>Required</sup> <a name="upgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings"></a>

```java
public KubernetesClusterNodePoolUpgradeSettingsOutputReference getUpgradeSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a>

---

##### `windowsProfile`<sup>Required</sup> <a name="windowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile"></a>

```java
public KubernetesClusterNodePoolWindowsProfileOutputReference getWindowsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a>

---

##### `autoScalingEnabledInput`<sup>Optional</sup> <a name="autoScalingEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabledInput"></a>

```java
public java.lang.Object getAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityReservationGroupIdInput`<sup>Optional</sup> <a name="capacityReservationGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput"></a>

```java
public java.lang.String getCapacityReservationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput"></a>

```java
public java.lang.Object getFipsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gpuInstanceInput`<sup>Optional</sup> <a name="gpuInstanceInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstanceInput"></a>

```java
public java.lang.String getGpuInstanceInput();
```

- *Type:* java.lang.String

---

##### `hostEncryptionEnabledInput`<sup>Optional</sup> <a name="hostEncryptionEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabledInput"></a>

```java
public java.lang.Object getHostEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostGroupIdInput`<sup>Optional</sup> <a name="hostGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput"></a>

```java
public java.lang.String getHostGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubeletConfigInput`<sup>Optional</sup> <a name="kubeletConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput"></a>

```java
public KubernetesClusterNodePoolKubeletConfig getKubeletConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `kubeletDiskTypeInput`<sup>Optional</sup> <a name="kubeletDiskTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput"></a>

```java
public java.lang.String getKubeletDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterIdInput`<sup>Optional</sup> <a name="kubernetesClusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput"></a>

```java
public java.lang.String getKubernetesClusterIdInput();
```

- *Type:* java.lang.String

---

##### `linuxOsConfigInput`<sup>Optional</sup> <a name="linuxOsConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfig getLinuxOsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput"></a>

```java
public java.lang.Number getMaxCountInput();
```

- *Type:* java.lang.Number

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput"></a>

```java
public java.lang.Number getMaxPodsInput();
```

- *Type:* java.lang.Number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput"></a>

```java
public java.lang.Number getMinCountInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeLabelsInput`<sup>Optional</sup> <a name="nodeLabelsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeNetworkProfileInput`<sup>Optional</sup> <a name="nodeNetworkProfileInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput"></a>

```java
public KubernetesClusterNodePoolNodeNetworkProfile getNodeNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `nodePublicIpEnabledInput`<sup>Optional</sup> <a name="nodePublicIpEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabledInput"></a>

```java
public java.lang.Object getNodePublicIpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodePublicIpPrefixIdInput`<sup>Optional</sup> <a name="nodePublicIpPrefixIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput"></a>

```java
public java.lang.String getNodePublicIpPrefixIdInput();
```

- *Type:* java.lang.String

---

##### `nodeTaintsInput`<sup>Optional</sup> <a name="nodeTaintsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput"></a>

```java
public java.util.List<java.lang.String> getNodeTaintsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orchestratorVersionInput`<sup>Optional</sup> <a name="orchestratorVersionInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput"></a>

```java
public java.lang.String getOrchestratorVersionInput();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGbInput`<sup>Optional</sup> <a name="osDiskSizeGbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput"></a>

```java
public java.lang.Number getOsDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `osDiskTypeInput`<sup>Optional</sup> <a name="osDiskTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput"></a>

```java
public java.lang.String getOsDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `osSkuInput`<sup>Optional</sup> <a name="osSkuInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput"></a>

```java
public java.lang.String getOsSkuInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `podSubnetIdInput`<sup>Optional</sup> <a name="podSubnetIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput"></a>

```java
public java.lang.String getPodSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `proximityPlacementGroupIdInput`<sup>Optional</sup> <a name="proximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput"></a>

```java
public java.lang.String getProximityPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `scaleDownModeInput`<sup>Optional</sup> <a name="scaleDownModeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput"></a>

```java
public java.lang.String getScaleDownModeInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `spotMaxPriceInput`<sup>Optional</sup> <a name="spotMaxPriceInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput"></a>

```java
public java.lang.Number getSpotMaxPriceInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryNameForRotationInput`<sup>Optional</sup> <a name="temporaryNameForRotationInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotationInput"></a>

```java
public java.lang.String getTemporaryNameForRotationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

---

##### `ultraSsdEnabledInput`<sup>Optional</sup> <a name="ultraSsdEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput"></a>

```java
public java.lang.Object getUltraSsdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upgradeSettingsInput`<sup>Optional</sup> <a name="upgradeSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput"></a>

```java
public KubernetesClusterNodePoolUpgradeSettings getUpgradeSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `vnetSubnetIdInput`<sup>Optional</sup> <a name="vnetSubnetIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput"></a>

```java
public java.lang.String getVnetSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `windowsProfileInput`<sup>Optional</sup> <a name="windowsProfileInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput"></a>

```java
public KubernetesClusterNodePoolWindowsProfile getWindowsProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `workloadRuntimeInput`<sup>Optional</sup> <a name="workloadRuntimeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput"></a>

```java
public java.lang.String getWorkloadRuntimeInput();
```

- *Type:* java.lang.String

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabled"></a>

```java
public java.lang.Object getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityReservationGroupId`<sup>Required</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId"></a>

```java
public java.lang.String getCapacityReservationGroupId();
```

- *Type:* java.lang.String

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled"></a>

```java
public java.lang.Object getFipsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gpuInstance`<sup>Required</sup> <a name="gpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstance"></a>

```java
public java.lang.String getGpuInstance();
```

- *Type:* java.lang.String

---

##### `hostEncryptionEnabled`<sup>Required</sup> <a name="hostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabled"></a>

```java
public java.lang.Object getHostEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostGroupId`<sup>Required</sup> <a name="hostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId"></a>

```java
public java.lang.String getHostGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubeletDiskType`<sup>Required</sup> <a name="kubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType"></a>

```java
public java.lang.String getKubeletDiskType();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeLabels`<sup>Required</sup> <a name="nodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodePublicIpEnabled`<sup>Required</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabled"></a>

```java
public java.lang.Object getNodePublicIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodePublicIpPrefixId`<sup>Required</sup> <a name="nodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```java
public java.lang.String getNodePublicIpPrefixId();
```

- *Type:* java.lang.String

---

##### `nodeTaints`<sup>Required</sup> <a name="nodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints"></a>

```java
public java.util.List<java.lang.String> getNodeTaints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orchestratorVersion`<sup>Required</sup> <a name="orchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion"></a>

```java
public java.lang.String getOrchestratorVersion();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `osDiskType`<sup>Required</sup> <a name="osDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

---

##### `osSku`<sup>Required</sup> <a name="osSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku"></a>

```java
public java.lang.String getOsSku();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `podSubnetId`<sup>Required</sup> <a name="podSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId"></a>

```java
public java.lang.String getPodSubnetId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `scaleDownMode`<sup>Required</sup> <a name="scaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode"></a>

```java
public java.lang.String getScaleDownMode();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `spotMaxPrice`<sup>Required</sup> <a name="spotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice"></a>

```java
public java.lang.Number getSpotMaxPrice();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryNameForRotation`<sup>Required</sup> <a name="temporaryNameForRotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotation"></a>

```java
public java.lang.String getTemporaryNameForRotation();
```

- *Type:* java.lang.String

---

##### `ultraSsdEnabled`<sup>Required</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `vnetSubnetId`<sup>Required</sup> <a name="vnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId"></a>

```java
public java.lang.String getVnetSubnetId();
```

- *Type:* java.lang.String

---

##### `workloadRuntime`<sup>Required</sup> <a name="workloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime"></a>

```java
public java.lang.String getWorkloadRuntime();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterNodePoolConfig <a name="KubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolConfig;

KubernetesClusterNodePoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .kubernetesClusterId(java.lang.String)
    .name(java.lang.String)
    .vmSize(java.lang.String)
//  .autoScalingEnabled(java.lang.Boolean)
//  .autoScalingEnabled(IResolvable)
//  .capacityReservationGroupId(java.lang.String)
//  .evictionPolicy(java.lang.String)
//  .fipsEnabled(java.lang.Boolean)
//  .fipsEnabled(IResolvable)
//  .gpuInstance(java.lang.String)
//  .hostEncryptionEnabled(java.lang.Boolean)
//  .hostEncryptionEnabled(IResolvable)
//  .hostGroupId(java.lang.String)
//  .id(java.lang.String)
//  .kubeletConfig(KubernetesClusterNodePoolKubeletConfig)
//  .kubeletDiskType(java.lang.String)
//  .linuxOsConfig(KubernetesClusterNodePoolLinuxOsConfig)
//  .maxCount(java.lang.Number)
//  .maxPods(java.lang.Number)
//  .minCount(java.lang.Number)
//  .mode(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .nodeLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeNetworkProfile(KubernetesClusterNodePoolNodeNetworkProfile)
//  .nodePublicIpEnabled(java.lang.Boolean)
//  .nodePublicIpEnabled(IResolvable)
//  .nodePublicIpPrefixId(java.lang.String)
//  .nodeTaints(java.util.List<java.lang.String>)
//  .orchestratorVersion(java.lang.String)
//  .osDiskSizeGb(java.lang.Number)
//  .osDiskType(java.lang.String)
//  .osSku(java.lang.String)
//  .osType(java.lang.String)
//  .podSubnetId(java.lang.String)
//  .priority(java.lang.String)
//  .proximityPlacementGroupId(java.lang.String)
//  .scaleDownMode(java.lang.String)
//  .snapshotId(java.lang.String)
//  .spotMaxPrice(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryNameForRotation(java.lang.String)
//  .timeouts(KubernetesClusterNodePoolTimeouts)
//  .ultraSsdEnabled(java.lang.Boolean)
//  .ultraSsdEnabled(IResolvable)
//  .upgradeSettings(KubernetesClusterNodePoolUpgradeSettings)
//  .vnetSubnetId(java.lang.String)
//  .windowsProfile(KubernetesClusterNodePoolWindowsProfile)
//  .workloadRuntime(java.lang.String)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuInstance">gpuInstance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostEncryptionEnabled">hostEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId">hostGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType">kubeletDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig">linuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels">nodeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile">nodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | node_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId">nodePublicIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints">nodeTaints</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion">orchestratorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku">osSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId">podSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode">scaleDownMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice">spotMaxPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.temporaryNameForRotation">temporaryNameForRotation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId">vnetSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile">windowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | windows_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime">workloadRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}.

---

##### `autoScalingEnabled`<sup>Optional</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.autoScalingEnabled"></a>

```java
public java.lang.Object getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId"></a>

```java
public java.lang.String getCapacityReservationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}.

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled"></a>

```java
public java.lang.Object getFipsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}.

---

##### `gpuInstance`<sup>Optional</sup> <a name="gpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuInstance"></a>

```java
public java.lang.String getGpuInstance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}.

---

##### `hostEncryptionEnabled`<sup>Optional</sup> <a name="hostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostEncryptionEnabled"></a>

```java
public java.lang.Object getHostEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}.

---

##### `hostGroupId`<sup>Optional</sup> <a name="hostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId"></a>

```java
public java.lang.String getHostGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeletConfig`<sup>Optional</sup> <a name="kubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig"></a>

```java
public KubernetesClusterNodePoolKubeletConfig getKubeletConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}

---

##### `kubeletDiskType`<sup>Optional</sup> <a name="kubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType"></a>

```java
public java.lang.String getKubeletDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}.

---

##### `linuxOsConfig`<sup>Optional</sup> <a name="linuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfig getLinuxOsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}.

---

##### `nodeLabels`<sup>Optional</sup> <a name="nodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}.

---

##### `nodeNetworkProfile`<sup>Optional</sup> <a name="nodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile"></a>

```java
public KubernetesClusterNodePoolNodeNetworkProfile getNodeNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

node_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}

---

##### `nodePublicIpEnabled`<sup>Optional</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpEnabled"></a>

```java
public java.lang.Object getNodePublicIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}.

---

##### `nodePublicIpPrefixId`<sup>Optional</sup> <a name="nodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId"></a>

```java
public java.lang.String getNodePublicIpPrefixId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}.

---

##### `nodeTaints`<sup>Optional</sup> <a name="nodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints"></a>

```java
public java.util.List<java.lang.String> getNodeTaints();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}.

---

##### `orchestratorVersion`<sup>Optional</sup> <a name="orchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion"></a>

```java
public java.lang.String getOrchestratorVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}.

---

##### `osSku`<sup>Optional</sup> <a name="osSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku"></a>

```java
public java.lang.String getOsSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}.

---

##### `podSubnetId`<sup>Optional</sup> <a name="podSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId"></a>

```java
public java.lang.String getPodSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}.

---

##### `scaleDownMode`<sup>Optional</sup> <a name="scaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode"></a>

```java
public java.lang.String getScaleDownMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}.

---

##### `spotMaxPrice`<sup>Optional</sup> <a name="spotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice"></a>

```java
public java.lang.Number getSpotMaxPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}.

---

##### `temporaryNameForRotation`<sup>Optional</sup> <a name="temporaryNameForRotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.temporaryNameForRotation"></a>

```java
public java.lang.String getTemporaryNameForRotation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts"></a>

```java
public KubernetesClusterNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}.

---

##### `upgradeSettings`<sup>Optional</sup> <a name="upgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings"></a>

```java
public KubernetesClusterNodePoolUpgradeSettings getUpgradeSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}

---

##### `vnetSubnetId`<sup>Optional</sup> <a name="vnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId"></a>

```java
public java.lang.String getVnetSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}.

---

##### `windowsProfile`<sup>Optional</sup> <a name="windowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile"></a>

```java
public KubernetesClusterNodePoolWindowsProfile getWindowsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

windows_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}

---

##### `workloadRuntime`<sup>Optional</sup> <a name="workloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime"></a>

```java
public java.lang.String getWorkloadRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}.

---

### KubernetesClusterNodePoolKubeletConfig <a name="KubernetesClusterNodePoolKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolKubeletConfig;

KubernetesClusterNodePoolKubeletConfig.builder()
//  .allowedUnsafeSysctls(java.util.List<java.lang.String>)
//  .containerLogMaxLine(java.lang.Number)
//  .containerLogMaxSizeMb(java.lang.Number)
//  .cpuCfsQuotaEnabled(java.lang.Boolean)
//  .cpuCfsQuotaEnabled(IResolvable)
//  .cpuCfsQuotaPeriod(java.lang.String)
//  .cpuManagerPolicy(java.lang.String)
//  .imageGcHighThreshold(java.lang.Number)
//  .imageGcLowThreshold(java.lang.Number)
//  .podMaxPid(java.lang.Number)
//  .topologyManagerPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls">allowedUnsafeSysctls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine">containerLogMaxLine</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb">containerLogMaxSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled">cpuCfsQuotaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold">imageGcHighThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold">imageGcLowThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid">podMaxPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy">topologyManagerPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}. |

---

##### `allowedUnsafeSysctls`<sup>Optional</sup> <a name="allowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls"></a>

```java
public java.util.List<java.lang.String> getAllowedUnsafeSysctls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}.

---

##### `containerLogMaxLine`<sup>Optional</sup> <a name="containerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine"></a>

```java
public java.lang.Number getContainerLogMaxLine();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}.

---

##### `containerLogMaxSizeMb`<sup>Optional</sup> <a name="containerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb"></a>

```java
public java.lang.Number getContainerLogMaxSizeMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}.

---

##### `cpuCfsQuotaEnabled`<sup>Optional</sup> <a name="cpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled"></a>

```java
public java.lang.Object getCpuCfsQuotaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}.

---

##### `cpuCfsQuotaPeriod`<sup>Optional</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```java
public java.lang.String getCpuCfsQuotaPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}.

---

##### `cpuManagerPolicy`<sup>Optional</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```java
public java.lang.String getCpuManagerPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}.

---

##### `imageGcHighThreshold`<sup>Optional</sup> <a name="imageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold"></a>

```java
public java.lang.Number getImageGcHighThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}.

---

##### `imageGcLowThreshold`<sup>Optional</sup> <a name="imageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold"></a>

```java
public java.lang.Number getImageGcLowThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}.

---

##### `podMaxPid`<sup>Optional</sup> <a name="podMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid"></a>

```java
public java.lang.Number getPodMaxPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}.

---

##### `topologyManagerPolicy`<sup>Optional</sup> <a name="topologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy"></a>

```java
public java.lang.String getTopologyManagerPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}.

---

### KubernetesClusterNodePoolLinuxOsConfig <a name="KubernetesClusterNodePoolLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolLinuxOsConfig;

KubernetesClusterNodePoolLinuxOsConfig.builder()
//  .swapFileSizeMb(java.lang.Number)
//  .sysctlConfig(KubernetesClusterNodePoolLinuxOsConfigSysctlConfig)
//  .transparentHugePageDefrag(java.lang.String)
//  .transparentHugePageEnabled(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb">swapFileSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig">sysctlConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | sysctl_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag">transparentHugePageDefrag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled">transparentHugePageEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}. |

---

##### `swapFileSizeMb`<sup>Optional</sup> <a name="swapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb"></a>

```java
public java.lang.Number getSwapFileSizeMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}.

---

##### `sysctlConfig`<sup>Optional</sup> <a name="sysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfig getSysctlConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

sysctl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#sysctl_config KubernetesClusterNodePool#sysctl_config}

---

##### `transparentHugePageDefrag`<sup>Optional</sup> <a name="transparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag"></a>

```java
public java.lang.String getTransparentHugePageDefrag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}.

---

##### `transparentHugePageEnabled`<sup>Optional</sup> <a name="transparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled"></a>

```java
public java.lang.String getTransparentHugePageEnabled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}.

---

### KubernetesClusterNodePoolLinuxOsConfigSysctlConfig <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig;

KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.builder()
//  .fsAioMaxNr(java.lang.Number)
//  .fsFileMax(java.lang.Number)
//  .fsInotifyMaxUserWatches(java.lang.Number)
//  .fsNrOpen(java.lang.Number)
//  .kernelThreadsMax(java.lang.Number)
//  .netCoreNetdevMaxBacklog(java.lang.Number)
//  .netCoreOptmemMax(java.lang.Number)
//  .netCoreRmemDefault(java.lang.Number)
//  .netCoreRmemMax(java.lang.Number)
//  .netCoreSomaxconn(java.lang.Number)
//  .netCoreWmemDefault(java.lang.Number)
//  .netCoreWmemMax(java.lang.Number)
//  .netIpv4IpLocalPortRangeMax(java.lang.Number)
//  .netIpv4IpLocalPortRangeMin(java.lang.Number)
//  .netIpv4NeighDefaultGcThresh1(java.lang.Number)
//  .netIpv4NeighDefaultGcThresh2(java.lang.Number)
//  .netIpv4NeighDefaultGcThresh3(java.lang.Number)
//  .netIpv4TcpFinTimeout(java.lang.Number)
//  .netIpv4TcpKeepaliveIntvl(java.lang.Number)
//  .netIpv4TcpKeepaliveProbes(java.lang.Number)
//  .netIpv4TcpKeepaliveTime(java.lang.Number)
//  .netIpv4TcpMaxSynBacklog(java.lang.Number)
//  .netIpv4TcpMaxTwBuckets(java.lang.Number)
//  .netIpv4TcpTwReuse(java.lang.Boolean)
//  .netIpv4TcpTwReuse(IResolvable)
//  .netNetfilterNfConntrackBuckets(java.lang.Number)
//  .netNetfilterNfConntrackMax(java.lang.Number)
//  .vmMaxMapCount(java.lang.Number)
//  .vmSwappiness(java.lang.Number)
//  .vmVfsCachePressure(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr">fsAioMaxNr</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax">fsFileMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches">fsInotifyMaxUserWatches</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen">fsNrOpen</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax">kernelThreadsMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog">netCoreNetdevMaxBacklog</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax">netCoreOptmemMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault">netCoreRmemDefault</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax">netCoreRmemMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn">netCoreSomaxconn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault">netCoreWmemDefault</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax">netCoreWmemMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax">netIpv4IpLocalPortRangeMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin">netIpv4IpLocalPortRangeMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1">netIpv4NeighDefaultGcThresh1</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2">netIpv4NeighDefaultGcThresh2</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3">netIpv4NeighDefaultGcThresh3</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout">netIpv4TcpFinTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl">netIpv4TcpKeepaliveIntvl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes">netIpv4TcpKeepaliveProbes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime">netIpv4TcpKeepaliveTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog">netIpv4TcpMaxSynBacklog</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets">netIpv4TcpMaxTwBuckets</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse">netIpv4TcpTwReuse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets">netNetfilterNfConntrackBuckets</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax">netNetfilterNfConntrackMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount">vmMaxMapCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness">vmSwappiness</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure">vmVfsCachePressure</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}. |

---

##### `fsAioMaxNr`<sup>Optional</sup> <a name="fsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr"></a>

```java
public java.lang.Number getFsAioMaxNr();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}.

---

##### `fsFileMax`<sup>Optional</sup> <a name="fsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax"></a>

```java
public java.lang.Number getFsFileMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}.

---

##### `fsInotifyMaxUserWatches`<sup>Optional</sup> <a name="fsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches"></a>

```java
public java.lang.Number getFsInotifyMaxUserWatches();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}.

---

##### `fsNrOpen`<sup>Optional</sup> <a name="fsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen"></a>

```java
public java.lang.Number getFsNrOpen();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}.

---

##### `kernelThreadsMax`<sup>Optional</sup> <a name="kernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax"></a>

```java
public java.lang.Number getKernelThreadsMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}.

---

##### `netCoreNetdevMaxBacklog`<sup>Optional</sup> <a name="netCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog"></a>

```java
public java.lang.Number getNetCoreNetdevMaxBacklog();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}.

---

##### `netCoreOptmemMax`<sup>Optional</sup> <a name="netCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax"></a>

```java
public java.lang.Number getNetCoreOptmemMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}.

---

##### `netCoreRmemDefault`<sup>Optional</sup> <a name="netCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault"></a>

```java
public java.lang.Number getNetCoreRmemDefault();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}.

---

##### `netCoreRmemMax`<sup>Optional</sup> <a name="netCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax"></a>

```java
public java.lang.Number getNetCoreRmemMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}.

---

##### `netCoreSomaxconn`<sup>Optional</sup> <a name="netCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn"></a>

```java
public java.lang.Number getNetCoreSomaxconn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}.

---

##### `netCoreWmemDefault`<sup>Optional</sup> <a name="netCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault"></a>

```java
public java.lang.Number getNetCoreWmemDefault();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}.

---

##### `netCoreWmemMax`<sup>Optional</sup> <a name="netCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax"></a>

```java
public java.lang.Number getNetCoreWmemMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}.

---

##### `netIpv4IpLocalPortRangeMax`<sup>Optional</sup> <a name="netIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax"></a>

```java
public java.lang.Number getNetIpv4IpLocalPortRangeMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}.

---

##### `netIpv4IpLocalPortRangeMin`<sup>Optional</sup> <a name="netIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin"></a>

```java
public java.lang.Number getNetIpv4IpLocalPortRangeMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}.

---

##### `netIpv4NeighDefaultGcThresh1`<sup>Optional</sup> <a name="netIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh1();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}.

---

##### `netIpv4NeighDefaultGcThresh2`<sup>Optional</sup> <a name="netIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh2();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}.

---

##### `netIpv4NeighDefaultGcThresh3`<sup>Optional</sup> <a name="netIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh3();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}.

---

##### `netIpv4TcpFinTimeout`<sup>Optional</sup> <a name="netIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout"></a>

```java
public java.lang.Number getNetIpv4TcpFinTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}.

---

##### `netIpv4TcpKeepaliveIntvl`<sup>Optional</sup> <a name="netIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveIntvl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}.

---

##### `netIpv4TcpKeepaliveProbes`<sup>Optional</sup> <a name="netIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveProbes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}.

---

##### `netIpv4TcpKeepaliveTime`<sup>Optional</sup> <a name="netIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}.

---

##### `netIpv4TcpMaxSynBacklog`<sup>Optional</sup> <a name="netIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog"></a>

```java
public java.lang.Number getNetIpv4TcpMaxSynBacklog();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}.

---

##### `netIpv4TcpMaxTwBuckets`<sup>Optional</sup> <a name="netIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets"></a>

```java
public java.lang.Number getNetIpv4TcpMaxTwBuckets();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}.

---

##### `netIpv4TcpTwReuse`<sup>Optional</sup> <a name="netIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse"></a>

```java
public java.lang.Object getNetIpv4TcpTwReuse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}.

---

##### `netNetfilterNfConntrackBuckets`<sup>Optional</sup> <a name="netNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets"></a>

```java
public java.lang.Number getNetNetfilterNfConntrackBuckets();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}.

---

##### `netNetfilterNfConntrackMax`<sup>Optional</sup> <a name="netNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax"></a>

```java
public java.lang.Number getNetNetfilterNfConntrackMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}.

---

##### `vmMaxMapCount`<sup>Optional</sup> <a name="vmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount"></a>

```java
public java.lang.Number getVmMaxMapCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}.

---

##### `vmSwappiness`<sup>Optional</sup> <a name="vmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness"></a>

```java
public java.lang.Number getVmSwappiness();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}.

---

##### `vmVfsCachePressure`<sup>Optional</sup> <a name="vmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure"></a>

```java
public java.lang.Number getVmVfsCachePressure();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}.

---

### KubernetesClusterNodePoolNodeNetworkProfile <a name="KubernetesClusterNodePoolNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolNodeNetworkProfile;

KubernetesClusterNodePoolNodeNetworkProfile.builder()
//  .allowedHostPorts(IResolvable)
//  .allowedHostPorts(java.util.List<KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts>)
//  .applicationSecurityGroupIds(java.util.List<java.lang.String>)
//  .nodePublicIpTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.allowedHostPorts">allowedHostPorts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>></code> | allowed_host_ports block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.applicationSecurityGroupIds">applicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags">nodePublicIpTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}. |

---

##### `allowedHostPorts`<sup>Optional</sup> <a name="allowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.allowedHostPorts"></a>

```java
public java.lang.Object getAllowedHostPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>>

allowed_host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#allowed_host_ports KubernetesClusterNodePool#allowed_host_ports}

---

##### `applicationSecurityGroupIds`<sup>Optional</sup> <a name="applicationSecurityGroupIds" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.applicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}.

---

##### `nodePublicIpTags`<sup>Optional</sup> <a name="nodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodePublicIpTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}.

---

### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts;

KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.builder()
//  .portEnd(java.lang.Number)
//  .portStart(java.lang.Number)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portEnd">portEnd</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portStart">portStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}. |

---

##### `portEnd`<sup>Optional</sup> <a name="portEnd" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portEnd"></a>

```java
public java.lang.Number getPortEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}.

---

##### `portStart`<sup>Optional</sup> <a name="portStart" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portStart"></a>

```java
public java.lang.Number getPortStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}.

---

### KubernetesClusterNodePoolTimeouts <a name="KubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolTimeouts;

KubernetesClusterNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}.

---

### KubernetesClusterNodePoolUpgradeSettings <a name="KubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolUpgradeSettings;

KubernetesClusterNodePoolUpgradeSettings.builder()
    .maxSurge(java.lang.String)
//  .drainTimeoutInMinutes(java.lang.Number)
//  .nodeSoakDurationInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge">maxSurge</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.drainTimeoutInMinutes">drainTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.nodeSoakDurationInMinutes">nodeSoakDurationInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}. |

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge"></a>

```java
public java.lang.String getMaxSurge();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}.

---

##### `drainTimeoutInMinutes`<sup>Optional</sup> <a name="drainTimeoutInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.drainTimeoutInMinutes"></a>

```java
public java.lang.Number getDrainTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}.

---

##### `nodeSoakDurationInMinutes`<sup>Optional</sup> <a name="nodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.nodeSoakDurationInMinutes"></a>

```java
public java.lang.Number getNodeSoakDurationInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}.

---

### KubernetesClusterNodePoolWindowsProfile <a name="KubernetesClusterNodePoolWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolWindowsProfile;

KubernetesClusterNodePoolWindowsProfile.builder()
//  .outboundNatEnabled(java.lang.Boolean)
//  .outboundNatEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled">outboundNatEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}. |

---

##### `outboundNatEnabled`<sup>Optional</sup> <a name="outboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled"></a>

```java
public java.lang.Object getOutboundNatEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterNodePoolKubeletConfigOutputReference <a name="KubernetesClusterNodePoolKubeletConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolKubeletConfigOutputReference;

new KubernetesClusterNodePoolKubeletConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls">resetAllowedUnsafeSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine">resetContainerLogMaxLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb">resetContainerLogMaxSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled">resetCpuCfsQuotaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">resetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy">resetCpuManagerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold">resetImageGcHighThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold">resetImageGcLowThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid">resetPodMaxPid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy">resetTopologyManagerPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedUnsafeSysctls` <a name="resetAllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls"></a>

```java
public void resetAllowedUnsafeSysctls()
```

##### `resetContainerLogMaxLine` <a name="resetContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine"></a>

```java
public void resetContainerLogMaxLine()
```

##### `resetContainerLogMaxSizeMb` <a name="resetContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb"></a>

```java
public void resetContainerLogMaxSizeMb()
```

##### `resetCpuCfsQuotaEnabled` <a name="resetCpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled"></a>

```java
public void resetCpuCfsQuotaEnabled()
```

##### `resetCpuCfsQuotaPeriod` <a name="resetCpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```java
public void resetCpuCfsQuotaPeriod()
```

##### `resetCpuManagerPolicy` <a name="resetCpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```java
public void resetCpuManagerPolicy()
```

##### `resetImageGcHighThreshold` <a name="resetImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold"></a>

```java
public void resetImageGcHighThreshold()
```

##### `resetImageGcLowThreshold` <a name="resetImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold"></a>

```java
public void resetImageGcLowThreshold()
```

##### `resetPodMaxPid` <a name="resetPodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid"></a>

```java
public void resetPodMaxPid()
```

##### `resetTopologyManagerPolicy` <a name="resetTopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy"></a>

```java
public void resetTopologyManagerPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput">allowedUnsafeSysctlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput">containerLogMaxLineInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput">containerLogMaxSizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput">cpuCfsQuotaEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpuCfsQuotaPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpuManagerPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput">imageGcHighThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput">imageGcLowThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput">podMaxPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput">topologyManagerPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls">allowedUnsafeSysctls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine">containerLogMaxLine</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb">containerLogMaxSizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled">cpuCfsQuotaEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold">imageGcHighThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold">imageGcLowThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid">podMaxPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy">topologyManagerPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedUnsafeSysctlsInput`<sup>Optional</sup> <a name="allowedUnsafeSysctlsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUnsafeSysctlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerLogMaxLineInput`<sup>Optional</sup> <a name="containerLogMaxLineInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput"></a>

```java
public java.lang.Number getContainerLogMaxLineInput();
```

- *Type:* java.lang.Number

---

##### `containerLogMaxSizeMbInput`<sup>Optional</sup> <a name="containerLogMaxSizeMbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput"></a>

```java
public java.lang.Number getContainerLogMaxSizeMbInput();
```

- *Type:* java.lang.Number

---

##### `cpuCfsQuotaEnabledInput`<sup>Optional</sup> <a name="cpuCfsQuotaEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput"></a>

```java
public java.lang.Object getCpuCfsQuotaEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="cpuCfsQuotaPeriodInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```java
public java.lang.String getCpuCfsQuotaPeriodInput();
```

- *Type:* java.lang.String

---

##### `cpuManagerPolicyInput`<sup>Optional</sup> <a name="cpuManagerPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```java
public java.lang.String getCpuManagerPolicyInput();
```

- *Type:* java.lang.String

---

##### `imageGcHighThresholdInput`<sup>Optional</sup> <a name="imageGcHighThresholdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput"></a>

```java
public java.lang.Number getImageGcHighThresholdInput();
```

- *Type:* java.lang.Number

---

##### `imageGcLowThresholdInput`<sup>Optional</sup> <a name="imageGcLowThresholdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput"></a>

```java
public java.lang.Number getImageGcLowThresholdInput();
```

- *Type:* java.lang.Number

---

##### `podMaxPidInput`<sup>Optional</sup> <a name="podMaxPidInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput"></a>

```java
public java.lang.Number getPodMaxPidInput();
```

- *Type:* java.lang.Number

---

##### `topologyManagerPolicyInput`<sup>Optional</sup> <a name="topologyManagerPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput"></a>

```java
public java.lang.String getTopologyManagerPolicyInput();
```

- *Type:* java.lang.String

---

##### `allowedUnsafeSysctls`<sup>Required</sup> <a name="allowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls"></a>

```java
public java.util.List<java.lang.String> getAllowedUnsafeSysctls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerLogMaxLine`<sup>Required</sup> <a name="containerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine"></a>

```java
public java.lang.Number getContainerLogMaxLine();
```

- *Type:* java.lang.Number

---

##### `containerLogMaxSizeMb`<sup>Required</sup> <a name="containerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb"></a>

```java
public java.lang.Number getContainerLogMaxSizeMb();
```

- *Type:* java.lang.Number

---

##### `cpuCfsQuotaEnabled`<sup>Required</sup> <a name="cpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled"></a>

```java
public java.lang.Object getCpuCfsQuotaEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuCfsQuotaPeriod`<sup>Required</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```java
public java.lang.String getCpuCfsQuotaPeriod();
```

- *Type:* java.lang.String

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```java
public java.lang.String getCpuManagerPolicy();
```

- *Type:* java.lang.String

---

##### `imageGcHighThreshold`<sup>Required</sup> <a name="imageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold"></a>

```java
public java.lang.Number getImageGcHighThreshold();
```

- *Type:* java.lang.Number

---

##### `imageGcLowThreshold`<sup>Required</sup> <a name="imageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold"></a>

```java
public java.lang.Number getImageGcLowThreshold();
```

- *Type:* java.lang.Number

---

##### `podMaxPid`<sup>Required</sup> <a name="podMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid"></a>

```java
public java.lang.Number getPodMaxPid();
```

- *Type:* java.lang.Number

---

##### `topologyManagerPolicy`<sup>Required</sup> <a name="topologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy"></a>

```java
public java.lang.String getTopologyManagerPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolKubeletConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolLinuxOsConfigOutputReference;

new KubernetesClusterNodePoolLinuxOsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig">putSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb">resetSwapFileSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig">resetSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag">resetTransparentHugePageDefrag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled">resetTransparentHugePageEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSysctlConfig` <a name="putSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig"></a>

```java
public void putSysctlConfig(KubernetesClusterNodePoolLinuxOsConfigSysctlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `resetSwapFileSizeMb` <a name="resetSwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb"></a>

```java
public void resetSwapFileSizeMb()
```

##### `resetSysctlConfig` <a name="resetSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig"></a>

```java
public void resetSysctlConfig()
```

##### `resetTransparentHugePageDefrag` <a name="resetTransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag"></a>

```java
public void resetTransparentHugePageDefrag()
```

##### `resetTransparentHugePageEnabled` <a name="resetTransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled"></a>

```java
public void resetTransparentHugePageEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig">sysctlConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput">swapFileSizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput">sysctlConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput">transparentHugePageDefragInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput">transparentHugePageEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb">swapFileSizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag">transparentHugePageDefrag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled">transparentHugePageEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sysctlConfig`<sup>Required</sup> <a name="sysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference getSysctlConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a>

---

##### `swapFileSizeMbInput`<sup>Optional</sup> <a name="swapFileSizeMbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput"></a>

```java
public java.lang.Number getSwapFileSizeMbInput();
```

- *Type:* java.lang.Number

---

##### `sysctlConfigInput`<sup>Optional</sup> <a name="sysctlConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfig getSysctlConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `transparentHugePageDefragInput`<sup>Optional</sup> <a name="transparentHugePageDefragInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput"></a>

```java
public java.lang.String getTransparentHugePageDefragInput();
```

- *Type:* java.lang.String

---

##### `transparentHugePageEnabledInput`<sup>Optional</sup> <a name="transparentHugePageEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput"></a>

```java
public java.lang.String getTransparentHugePageEnabledInput();
```

- *Type:* java.lang.String

---

##### `swapFileSizeMb`<sup>Required</sup> <a name="swapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb"></a>

```java
public java.lang.Number getSwapFileSizeMb();
```

- *Type:* java.lang.Number

---

##### `transparentHugePageDefrag`<sup>Required</sup> <a name="transparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag"></a>

```java
public java.lang.String getTransparentHugePageDefrag();
```

- *Type:* java.lang.String

---

##### `transparentHugePageEnabled`<sup>Required</sup> <a name="transparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled"></a>

```java
public java.lang.String getTransparentHugePageEnabled();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference;

new KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr">resetFsAioMaxNr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax">resetFsFileMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches">resetFsInotifyMaxUserWatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen">resetFsNrOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax">resetKernelThreadsMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog">resetNetCoreNetdevMaxBacklog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax">resetNetCoreOptmemMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault">resetNetCoreRmemDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax">resetNetCoreRmemMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn">resetNetCoreSomaxconn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault">resetNetCoreWmemDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax">resetNetCoreWmemMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax">resetNetIpv4IpLocalPortRangeMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin">resetNetIpv4IpLocalPortRangeMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1">resetNetIpv4NeighDefaultGcThresh1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2">resetNetIpv4NeighDefaultGcThresh2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3">resetNetIpv4NeighDefaultGcThresh3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout">resetNetIpv4TcpFinTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl">resetNetIpv4TcpKeepaliveIntvl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes">resetNetIpv4TcpKeepaliveProbes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime">resetNetIpv4TcpKeepaliveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog">resetNetIpv4TcpMaxSynBacklog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets">resetNetIpv4TcpMaxTwBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse">resetNetIpv4TcpTwReuse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets">resetNetNetfilterNfConntrackBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax">resetNetNetfilterNfConntrackMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount">resetVmMaxMapCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness">resetVmSwappiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure">resetVmVfsCachePressure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsAioMaxNr` <a name="resetFsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr"></a>

```java
public void resetFsAioMaxNr()
```

##### `resetFsFileMax` <a name="resetFsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax"></a>

```java
public void resetFsFileMax()
```

##### `resetFsInotifyMaxUserWatches` <a name="resetFsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches"></a>

```java
public void resetFsInotifyMaxUserWatches()
```

##### `resetFsNrOpen` <a name="resetFsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen"></a>

```java
public void resetFsNrOpen()
```

##### `resetKernelThreadsMax` <a name="resetKernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax"></a>

```java
public void resetKernelThreadsMax()
```

##### `resetNetCoreNetdevMaxBacklog` <a name="resetNetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog"></a>

```java
public void resetNetCoreNetdevMaxBacklog()
```

##### `resetNetCoreOptmemMax` <a name="resetNetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax"></a>

```java
public void resetNetCoreOptmemMax()
```

##### `resetNetCoreRmemDefault` <a name="resetNetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault"></a>

```java
public void resetNetCoreRmemDefault()
```

##### `resetNetCoreRmemMax` <a name="resetNetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax"></a>

```java
public void resetNetCoreRmemMax()
```

##### `resetNetCoreSomaxconn` <a name="resetNetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn"></a>

```java
public void resetNetCoreSomaxconn()
```

##### `resetNetCoreWmemDefault` <a name="resetNetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault"></a>

```java
public void resetNetCoreWmemDefault()
```

##### `resetNetCoreWmemMax` <a name="resetNetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax"></a>

```java
public void resetNetCoreWmemMax()
```

##### `resetNetIpv4IpLocalPortRangeMax` <a name="resetNetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax"></a>

```java
public void resetNetIpv4IpLocalPortRangeMax()
```

##### `resetNetIpv4IpLocalPortRangeMin` <a name="resetNetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin"></a>

```java
public void resetNetIpv4IpLocalPortRangeMin()
```

##### `resetNetIpv4NeighDefaultGcThresh1` <a name="resetNetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1"></a>

```java
public void resetNetIpv4NeighDefaultGcThresh1()
```

##### `resetNetIpv4NeighDefaultGcThresh2` <a name="resetNetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2"></a>

```java
public void resetNetIpv4NeighDefaultGcThresh2()
```

##### `resetNetIpv4NeighDefaultGcThresh3` <a name="resetNetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3"></a>

```java
public void resetNetIpv4NeighDefaultGcThresh3()
```

##### `resetNetIpv4TcpFinTimeout` <a name="resetNetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout"></a>

```java
public void resetNetIpv4TcpFinTimeout()
```

##### `resetNetIpv4TcpKeepaliveIntvl` <a name="resetNetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl"></a>

```java
public void resetNetIpv4TcpKeepaliveIntvl()
```

##### `resetNetIpv4TcpKeepaliveProbes` <a name="resetNetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes"></a>

```java
public void resetNetIpv4TcpKeepaliveProbes()
```

##### `resetNetIpv4TcpKeepaliveTime` <a name="resetNetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime"></a>

```java
public void resetNetIpv4TcpKeepaliveTime()
```

##### `resetNetIpv4TcpMaxSynBacklog` <a name="resetNetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog"></a>

```java
public void resetNetIpv4TcpMaxSynBacklog()
```

##### `resetNetIpv4TcpMaxTwBuckets` <a name="resetNetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets"></a>

```java
public void resetNetIpv4TcpMaxTwBuckets()
```

##### `resetNetIpv4TcpTwReuse` <a name="resetNetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse"></a>

```java
public void resetNetIpv4TcpTwReuse()
```

##### `resetNetNetfilterNfConntrackBuckets` <a name="resetNetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets"></a>

```java
public void resetNetNetfilterNfConntrackBuckets()
```

##### `resetNetNetfilterNfConntrackMax` <a name="resetNetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax"></a>

```java
public void resetNetNetfilterNfConntrackMax()
```

##### `resetVmMaxMapCount` <a name="resetVmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount"></a>

```java
public void resetVmMaxMapCount()
```

##### `resetVmSwappiness` <a name="resetVmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness"></a>

```java
public void resetVmSwappiness()
```

##### `resetVmVfsCachePressure` <a name="resetVmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure"></a>

```java
public void resetVmVfsCachePressure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput">fsAioMaxNrInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput">fsFileMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput">fsInotifyMaxUserWatchesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput">fsNrOpenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput">kernelThreadsMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput">netCoreNetdevMaxBacklogInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput">netCoreOptmemMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput">netCoreRmemDefaultInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput">netCoreRmemMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput">netCoreSomaxconnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput">netCoreWmemDefaultInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput">netCoreWmemMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput">netIpv4IpLocalPortRangeMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput">netIpv4IpLocalPortRangeMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input">netIpv4NeighDefaultGcThresh1Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input">netIpv4NeighDefaultGcThresh2Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input">netIpv4NeighDefaultGcThresh3Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput">netIpv4TcpFinTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput">netIpv4TcpKeepaliveIntvlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput">netIpv4TcpKeepaliveProbesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput">netIpv4TcpKeepaliveTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput">netIpv4TcpMaxSynBacklogInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput">netIpv4TcpMaxTwBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput">netIpv4TcpTwReuseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput">netNetfilterNfConntrackBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput">netNetfilterNfConntrackMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput">vmMaxMapCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput">vmSwappinessInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput">vmVfsCachePressureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr">fsAioMaxNr</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax">fsFileMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches">fsInotifyMaxUserWatches</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen">fsNrOpen</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax">kernelThreadsMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog">netCoreNetdevMaxBacklog</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax">netCoreOptmemMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault">netCoreRmemDefault</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax">netCoreRmemMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn">netCoreSomaxconn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault">netCoreWmemDefault</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax">netCoreWmemMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax">netIpv4IpLocalPortRangeMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin">netIpv4IpLocalPortRangeMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1">netIpv4NeighDefaultGcThresh1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2">netIpv4NeighDefaultGcThresh2</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3">netIpv4NeighDefaultGcThresh3</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout">netIpv4TcpFinTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl">netIpv4TcpKeepaliveIntvl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes">netIpv4TcpKeepaliveProbes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime">netIpv4TcpKeepaliveTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog">netIpv4TcpMaxSynBacklog</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets">netIpv4TcpMaxTwBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse">netIpv4TcpTwReuse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets">netNetfilterNfConntrackBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax">netNetfilterNfConntrackMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount">vmMaxMapCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness">vmSwappiness</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure">vmVfsCachePressure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsAioMaxNrInput`<sup>Optional</sup> <a name="fsAioMaxNrInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput"></a>

```java
public java.lang.Number getFsAioMaxNrInput();
```

- *Type:* java.lang.Number

---

##### `fsFileMaxInput`<sup>Optional</sup> <a name="fsFileMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput"></a>

```java
public java.lang.Number getFsFileMaxInput();
```

- *Type:* java.lang.Number

---

##### `fsInotifyMaxUserWatchesInput`<sup>Optional</sup> <a name="fsInotifyMaxUserWatchesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput"></a>

```java
public java.lang.Number getFsInotifyMaxUserWatchesInput();
```

- *Type:* java.lang.Number

---

##### `fsNrOpenInput`<sup>Optional</sup> <a name="fsNrOpenInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput"></a>

```java
public java.lang.Number getFsNrOpenInput();
```

- *Type:* java.lang.Number

---

##### `kernelThreadsMaxInput`<sup>Optional</sup> <a name="kernelThreadsMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput"></a>

```java
public java.lang.Number getKernelThreadsMaxInput();
```

- *Type:* java.lang.Number

---

##### `netCoreNetdevMaxBacklogInput`<sup>Optional</sup> <a name="netCoreNetdevMaxBacklogInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput"></a>

```java
public java.lang.Number getNetCoreNetdevMaxBacklogInput();
```

- *Type:* java.lang.Number

---

##### `netCoreOptmemMaxInput`<sup>Optional</sup> <a name="netCoreOptmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput"></a>

```java
public java.lang.Number getNetCoreOptmemMaxInput();
```

- *Type:* java.lang.Number

---

##### `netCoreRmemDefaultInput`<sup>Optional</sup> <a name="netCoreRmemDefaultInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput"></a>

```java
public java.lang.Number getNetCoreRmemDefaultInput();
```

- *Type:* java.lang.Number

---

##### `netCoreRmemMaxInput`<sup>Optional</sup> <a name="netCoreRmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput"></a>

```java
public java.lang.Number getNetCoreRmemMaxInput();
```

- *Type:* java.lang.Number

---

##### `netCoreSomaxconnInput`<sup>Optional</sup> <a name="netCoreSomaxconnInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput"></a>

```java
public java.lang.Number getNetCoreSomaxconnInput();
```

- *Type:* java.lang.Number

---

##### `netCoreWmemDefaultInput`<sup>Optional</sup> <a name="netCoreWmemDefaultInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput"></a>

```java
public java.lang.Number getNetCoreWmemDefaultInput();
```

- *Type:* java.lang.Number

---

##### `netCoreWmemMaxInput`<sup>Optional</sup> <a name="netCoreWmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput"></a>

```java
public java.lang.Number getNetCoreWmemMaxInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4IpLocalPortRangeMaxInput`<sup>Optional</sup> <a name="netIpv4IpLocalPortRangeMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput"></a>

```java
public java.lang.Number getNetIpv4IpLocalPortRangeMaxInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4IpLocalPortRangeMinInput`<sup>Optional</sup> <a name="netIpv4IpLocalPortRangeMinInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput"></a>

```java
public java.lang.Number getNetIpv4IpLocalPortRangeMinInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4NeighDefaultGcThresh1Input`<sup>Optional</sup> <a name="netIpv4NeighDefaultGcThresh1Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh1Input();
```

- *Type:* java.lang.Number

---

##### `netIpv4NeighDefaultGcThresh2Input`<sup>Optional</sup> <a name="netIpv4NeighDefaultGcThresh2Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh2Input();
```

- *Type:* java.lang.Number

---

##### `netIpv4NeighDefaultGcThresh3Input`<sup>Optional</sup> <a name="netIpv4NeighDefaultGcThresh3Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh3Input();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpFinTimeoutInput`<sup>Optional</sup> <a name="netIpv4TcpFinTimeoutInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput"></a>

```java
public java.lang.Number getNetIpv4TcpFinTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpKeepaliveIntvlInput`<sup>Optional</sup> <a name="netIpv4TcpKeepaliveIntvlInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveIntvlInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpKeepaliveProbesInput`<sup>Optional</sup> <a name="netIpv4TcpKeepaliveProbesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveProbesInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpKeepaliveTimeInput`<sup>Optional</sup> <a name="netIpv4TcpKeepaliveTimeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveTimeInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpMaxSynBacklogInput`<sup>Optional</sup> <a name="netIpv4TcpMaxSynBacklogInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput"></a>

```java
public java.lang.Number getNetIpv4TcpMaxSynBacklogInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpMaxTwBucketsInput`<sup>Optional</sup> <a name="netIpv4TcpMaxTwBucketsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput"></a>

```java
public java.lang.Number getNetIpv4TcpMaxTwBucketsInput();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpTwReuseInput`<sup>Optional</sup> <a name="netIpv4TcpTwReuseInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput"></a>

```java
public java.lang.Object getNetIpv4TcpTwReuseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `netNetfilterNfConntrackBucketsInput`<sup>Optional</sup> <a name="netNetfilterNfConntrackBucketsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput"></a>

```java
public java.lang.Number getNetNetfilterNfConntrackBucketsInput();
```

- *Type:* java.lang.Number

---

##### `netNetfilterNfConntrackMaxInput`<sup>Optional</sup> <a name="netNetfilterNfConntrackMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput"></a>

```java
public java.lang.Number getNetNetfilterNfConntrackMaxInput();
```

- *Type:* java.lang.Number

---

##### `vmMaxMapCountInput`<sup>Optional</sup> <a name="vmMaxMapCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput"></a>

```java
public java.lang.Number getVmMaxMapCountInput();
```

- *Type:* java.lang.Number

---

##### `vmSwappinessInput`<sup>Optional</sup> <a name="vmSwappinessInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput"></a>

```java
public java.lang.Number getVmSwappinessInput();
```

- *Type:* java.lang.Number

---

##### `vmVfsCachePressureInput`<sup>Optional</sup> <a name="vmVfsCachePressureInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput"></a>

```java
public java.lang.Number getVmVfsCachePressureInput();
```

- *Type:* java.lang.Number

---

##### `fsAioMaxNr`<sup>Required</sup> <a name="fsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr"></a>

```java
public java.lang.Number getFsAioMaxNr();
```

- *Type:* java.lang.Number

---

##### `fsFileMax`<sup>Required</sup> <a name="fsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax"></a>

```java
public java.lang.Number getFsFileMax();
```

- *Type:* java.lang.Number

---

##### `fsInotifyMaxUserWatches`<sup>Required</sup> <a name="fsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches"></a>

```java
public java.lang.Number getFsInotifyMaxUserWatches();
```

- *Type:* java.lang.Number

---

##### `fsNrOpen`<sup>Required</sup> <a name="fsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen"></a>

```java
public java.lang.Number getFsNrOpen();
```

- *Type:* java.lang.Number

---

##### `kernelThreadsMax`<sup>Required</sup> <a name="kernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax"></a>

```java
public java.lang.Number getKernelThreadsMax();
```

- *Type:* java.lang.Number

---

##### `netCoreNetdevMaxBacklog`<sup>Required</sup> <a name="netCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog"></a>

```java
public java.lang.Number getNetCoreNetdevMaxBacklog();
```

- *Type:* java.lang.Number

---

##### `netCoreOptmemMax`<sup>Required</sup> <a name="netCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax"></a>

```java
public java.lang.Number getNetCoreOptmemMax();
```

- *Type:* java.lang.Number

---

##### `netCoreRmemDefault`<sup>Required</sup> <a name="netCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault"></a>

```java
public java.lang.Number getNetCoreRmemDefault();
```

- *Type:* java.lang.Number

---

##### `netCoreRmemMax`<sup>Required</sup> <a name="netCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax"></a>

```java
public java.lang.Number getNetCoreRmemMax();
```

- *Type:* java.lang.Number

---

##### `netCoreSomaxconn`<sup>Required</sup> <a name="netCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn"></a>

```java
public java.lang.Number getNetCoreSomaxconn();
```

- *Type:* java.lang.Number

---

##### `netCoreWmemDefault`<sup>Required</sup> <a name="netCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault"></a>

```java
public java.lang.Number getNetCoreWmemDefault();
```

- *Type:* java.lang.Number

---

##### `netCoreWmemMax`<sup>Required</sup> <a name="netCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax"></a>

```java
public java.lang.Number getNetCoreWmemMax();
```

- *Type:* java.lang.Number

---

##### `netIpv4IpLocalPortRangeMax`<sup>Required</sup> <a name="netIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax"></a>

```java
public java.lang.Number getNetIpv4IpLocalPortRangeMax();
```

- *Type:* java.lang.Number

---

##### `netIpv4IpLocalPortRangeMin`<sup>Required</sup> <a name="netIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin"></a>

```java
public java.lang.Number getNetIpv4IpLocalPortRangeMin();
```

- *Type:* java.lang.Number

---

##### `netIpv4NeighDefaultGcThresh1`<sup>Required</sup> <a name="netIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh1();
```

- *Type:* java.lang.Number

---

##### `netIpv4NeighDefaultGcThresh2`<sup>Required</sup> <a name="netIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh2();
```

- *Type:* java.lang.Number

---

##### `netIpv4NeighDefaultGcThresh3`<sup>Required</sup> <a name="netIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3"></a>

```java
public java.lang.Number getNetIpv4NeighDefaultGcThresh3();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpFinTimeout`<sup>Required</sup> <a name="netIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout"></a>

```java
public java.lang.Number getNetIpv4TcpFinTimeout();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpKeepaliveIntvl`<sup>Required</sup> <a name="netIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveIntvl();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpKeepaliveProbes`<sup>Required</sup> <a name="netIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveProbes();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpKeepaliveTime`<sup>Required</sup> <a name="netIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime"></a>

```java
public java.lang.Number getNetIpv4TcpKeepaliveTime();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpMaxSynBacklog`<sup>Required</sup> <a name="netIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog"></a>

```java
public java.lang.Number getNetIpv4TcpMaxSynBacklog();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpMaxTwBuckets`<sup>Required</sup> <a name="netIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets"></a>

```java
public java.lang.Number getNetIpv4TcpMaxTwBuckets();
```

- *Type:* java.lang.Number

---

##### `netIpv4TcpTwReuse`<sup>Required</sup> <a name="netIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse"></a>

```java
public java.lang.Object getNetIpv4TcpTwReuse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `netNetfilterNfConntrackBuckets`<sup>Required</sup> <a name="netNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets"></a>

```java
public java.lang.Number getNetNetfilterNfConntrackBuckets();
```

- *Type:* java.lang.Number

---

##### `netNetfilterNfConntrackMax`<sup>Required</sup> <a name="netNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax"></a>

```java
public java.lang.Number getNetNetfilterNfConntrackMax();
```

- *Type:* java.lang.Number

---

##### `vmMaxMapCount`<sup>Required</sup> <a name="vmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount"></a>

```java
public java.lang.Number getVmMaxMapCount();
```

- *Type:* java.lang.Number

---

##### `vmSwappiness`<sup>Required</sup> <a name="vmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness"></a>

```java
public java.lang.Number getVmSwappiness();
```

- *Type:* java.lang.Number

---

##### `vmVfsCachePressure`<sup>Required</sup> <a name="vmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure"></a>

```java
public java.lang.Number getVmVfsCachePressure();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---


### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList;

new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get"></a>

```java
public KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>>

---


### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference;

new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortEnd">resetPortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortStart">resetPortStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortEnd` <a name="resetPortEnd" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortEnd"></a>

```java
public void resetPortEnd()
```

##### `resetPortStart` <a name="resetPortStart" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortStart"></a>

```java
public void resetPortStart()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEndInput">portEndInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStartInput">portStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEnd">portEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStart">portStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portEndInput`<sup>Optional</sup> <a name="portEndInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEndInput"></a>

```java
public java.lang.Number getPortEndInput();
```

- *Type:* java.lang.Number

---

##### `portStartInput`<sup>Optional</sup> <a name="portStartInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStartInput"></a>

```java
public java.lang.Number getPortStartInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `portEnd`<sup>Required</sup> <a name="portEnd" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEnd"></a>

```java
public java.lang.Number getPortEnd();
```

- *Type:* java.lang.Number

---

##### `portStart`<sup>Required</sup> <a name="portStart" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStart"></a>

```java
public java.lang.Number getPortStart();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>

---


### KubernetesClusterNodePoolNodeNetworkProfileOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference;

new KubernetesClusterNodePoolNodeNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts">putAllowedHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetAllowedHostPorts">resetAllowedHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetApplicationSecurityGroupIds">resetApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags">resetNodePublicIpTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedHostPorts` <a name="putAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts"></a>

```java
public void putAllowedHostPorts(IResolvable OR java.util.List<KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>>

---

##### `resetAllowedHostPorts` <a name="resetAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetAllowedHostPorts"></a>

```java
public void resetAllowedHostPorts()
```

##### `resetApplicationSecurityGroupIds` <a name="resetApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetApplicationSecurityGroupIds"></a>

```java
public void resetApplicationSecurityGroupIds()
```

##### `resetNodePublicIpTags` <a name="resetNodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags"></a>

```java
public void resetNodePublicIpTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPorts">allowedHostPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPortsInput">allowedHostPortsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIdsInput">applicationSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput">nodePublicIpTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIds">applicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags">nodePublicIpTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHostPorts`<sup>Required</sup> <a name="allowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPorts"></a>

```java
public KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList getAllowedHostPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList</a>

---

##### `allowedHostPortsInput`<sup>Optional</sup> <a name="allowedHostPortsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPortsInput"></a>

```java
public java.lang.Object getAllowedHostPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>>

---

##### `applicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="applicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getApplicationSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodePublicIpTagsInput`<sup>Optional</sup> <a name="nodePublicIpTagsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodePublicIpTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationSecurityGroupIds`<sup>Required</sup> <a name="applicationSecurityGroupIds" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodePublicIpTags`<sup>Required</sup> <a name="nodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodePublicIpTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolNodeNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---


### KubernetesClusterNodePoolTimeoutsOutputReference <a name="KubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolTimeoutsOutputReference;

new KubernetesClusterNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

---


### KubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="KubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolUpgradeSettingsOutputReference;

new KubernetesClusterNodePoolUpgradeSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetDrainTimeoutInMinutes">resetDrainTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetNodeSoakDurationInMinutes">resetNodeSoakDurationInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainTimeoutInMinutes` <a name="resetDrainTimeoutInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetDrainTimeoutInMinutes"></a>

```java
public void resetDrainTimeoutInMinutes()
```

##### `resetNodeSoakDurationInMinutes` <a name="resetNodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetNodeSoakDurationInMinutes"></a>

```java
public void resetNodeSoakDurationInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutesInput">drainTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">maxSurgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutesInput">nodeSoakDurationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes">drainTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes">nodeSoakDurationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drainTimeoutInMinutesInput`<sup>Optional</sup> <a name="drainTimeoutInMinutesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutesInput"></a>

```java
public java.lang.Number getDrainTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxSurgeInput`<sup>Optional</sup> <a name="maxSurgeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```java
public java.lang.String getMaxSurgeInput();
```

- *Type:* java.lang.String

---

##### `nodeSoakDurationInMinutesInput`<sup>Optional</sup> <a name="nodeSoakDurationInMinutesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutesInput"></a>

```java
public java.lang.Number getNodeSoakDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `drainTimeoutInMinutes`<sup>Required</sup> <a name="drainTimeoutInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes"></a>

```java
public java.lang.Number getDrainTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```java
public java.lang.String getMaxSurge();
```

- *Type:* java.lang.String

---

##### `nodeSoakDurationInMinutes`<sup>Required</sup> <a name="nodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes"></a>

```java
public java.lang.Number getNodeSoakDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolUpgradeSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---


### KubernetesClusterNodePoolWindowsProfileOutputReference <a name="KubernetesClusterNodePoolWindowsProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_node_pool.KubernetesClusterNodePoolWindowsProfileOutputReference;

new KubernetesClusterNodePoolWindowsProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled">resetOutboundNatEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundNatEnabled` <a name="resetOutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled"></a>

```java
public void resetOutboundNatEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput">outboundNatEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled">outboundNatEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outboundNatEnabledInput`<sup>Optional</sup> <a name="outboundNatEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput"></a>

```java
public java.lang.Object getOutboundNatEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outboundNatEnabled`<sup>Required</sup> <a name="outboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled"></a>

```java
public java.lang.Object getOutboundNatEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolWindowsProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---



