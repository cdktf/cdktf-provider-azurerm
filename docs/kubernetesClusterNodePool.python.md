# `kubernetesClusterNodePool` Submodule <a name="`kubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_cluster_id: str,
  name: str,
  auto_scaling_enabled: typing.Union[bool, IResolvable] = None,
  capacity_reservation_group_id: str = None,
  eviction_policy: str = None,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  gpu_driver: str = None,
  gpu_instance: str = None,
  host_encryption_enabled: typing.Union[bool, IResolvable] = None,
  host_group_id: str = None,
  id: str = None,
  kubelet_config: KubernetesClusterNodePoolKubeletConfig = None,
  kubelet_disk_type: str = None,
  linux_os_config: KubernetesClusterNodePoolLinuxOsConfig = None,
  max_count: typing.Union[int, float] = None,
  max_pods: typing.Union[int, float] = None,
  min_count: typing.Union[int, float] = None,
  mode: str = None,
  node_count: typing.Union[int, float] = None,
  node_labels: typing.Mapping[str] = None,
  node_network_profile: KubernetesClusterNodePoolNodeNetworkProfile = None,
  node_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  node_public_ip_prefix_id: str = None,
  node_taints: typing.List[str] = None,
  orchestrator_version: str = None,
  os_disk_size_gb: typing.Union[int, float] = None,
  os_disk_type: str = None,
  os_sku: str = None,
  os_type: str = None,
  pod_subnet_id: str = None,
  priority: str = None,
  proximity_placement_group_id: str = None,
  scale_down_mode: str = None,
  snapshot_id: str = None,
  spot_max_price: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  temporary_name_for_rotation: str = None,
  timeouts: KubernetesClusterNodePoolTimeouts = None,
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None,
  upgrade_settings: KubernetesClusterNodePoolUpgradeSettings = None,
  vm_size: str = None,
  vnet_subnet_id: str = None,
  windows_profile: KubernetesClusterNodePoolWindowsProfile = None,
  workload_runtime: str = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.capacityReservationGroupId">capacity_reservation_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.gpuDriver">gpu_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_driver KubernetesClusterNodePool#gpu_driver}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.gpuInstance">gpu_instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostEncryptionEnabled">host_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostGroupId">host_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletDiskType">kubelet_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.linuxOsConfig">linux_os_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeLabels">node_labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeNetworkProfile">node_network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | node_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpPrefixId">node_public_ip_prefix_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeTaints">node_taints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.orchestratorVersion">orchestrator_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskType">os_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osSku">os_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.podSubnetId">pod_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scaleDownMode">scale_down_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.spotMaxPrice">spot_max_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.temporaryNameForRotation">temporary_name_for_rotation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vnetSubnetId">vnet_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.windowsProfile">windows_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | windows_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.workloadRuntime">workload_runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}.

---

##### `auto_scaling_enabled`<sup>Optional</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.autoScalingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}.

---

##### `capacity_reservation_group_id`<sup>Optional</sup> <a name="capacity_reservation_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.capacityReservationGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.evictionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}.

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.fipsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}.

---

##### `gpu_driver`<sup>Optional</sup> <a name="gpu_driver" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.gpuDriver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_driver KubernetesClusterNodePool#gpu_driver}.

---

##### `gpu_instance`<sup>Optional</sup> <a name="gpu_instance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.gpuInstance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}.

---

##### `host_encryption_enabled`<sup>Optional</sup> <a name="host_encryption_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}.

---

##### `host_group_id`<sup>Optional</sup> <a name="host_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.hostGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubelet_config`<sup>Optional</sup> <a name="kubelet_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}

---

##### `kubelet_disk_type`<sup>Optional</sup> <a name="kubelet_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.kubeletDiskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}.

---

##### `linux_os_config`<sup>Optional</sup> <a name="linux_os_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.linuxOsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.maxPods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}.

---

##### `min_count`<sup>Optional</sup> <a name="min_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.minCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}.

---

##### `node_labels`<sup>Optional</sup> <a name="node_labels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeLabels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}.

---

##### `node_network_profile`<sup>Optional</sup> <a name="node_network_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeNetworkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

node_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}

---

##### `node_public_ip_enabled`<sup>Optional</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}.

---

##### `node_public_ip_prefix_id`<sup>Optional</sup> <a name="node_public_ip_prefix_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodePublicIpPrefixId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}.

---

##### `node_taints`<sup>Optional</sup> <a name="node_taints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.nodeTaints"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}.

---

##### `orchestrator_version`<sup>Optional</sup> <a name="orchestrator_version" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.orchestratorVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}.

---

##### `os_disk_size_gb`<sup>Optional</sup> <a name="os_disk_size_gb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}.

---

##### `os_disk_type`<sup>Optional</sup> <a name="os_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osDiskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}.

---

##### `os_sku`<sup>Optional</sup> <a name="os_sku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}.

---

##### `pod_subnet_id`<sup>Optional</sup> <a name="pod_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.podSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.priority"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.proximityPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}.

---

##### `scale_down_mode`<sup>Optional</sup> <a name="scale_down_mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scaleDownMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}.

---

##### `spot_max_price`<sup>Optional</sup> <a name="spot_max_price" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.spotMaxPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}.

---

##### `temporary_name_for_rotation`<sup>Optional</sup> <a name="temporary_name_for_rotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.temporaryNameForRotation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}

---

##### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.ultraSsdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}.

---

##### `upgrade_settings`<sup>Optional</sup> <a name="upgrade_settings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.upgradeSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}

---

##### `vm_size`<sup>Optional</sup> <a name="vm_size" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}.

---

##### `vnet_subnet_id`<sup>Optional</sup> <a name="vnet_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.vnetSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}.

---

##### `windows_profile`<sup>Optional</sup> <a name="windows_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.windowsProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

windows_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}

---

##### `workload_runtime`<sup>Optional</sup> <a name="workload_runtime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.workloadRuntime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig">put_kubelet_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig">put_linux_os_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile">put_node_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings">put_upgrade_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile">put_windows_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetAutoScalingEnabled">reset_auto_scaling_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId">reset_capacity_reservation_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy">reset_eviction_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled">reset_fips_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuDriver">reset_gpu_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuInstance">reset_gpu_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostEncryptionEnabled">reset_host_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId">reset_host_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig">reset_kubelet_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType">reset_kubelet_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig">reset_linux_os_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount">reset_max_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods">reset_max_pods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount">reset_min_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels">reset_node_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile">reset_node_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpEnabled">reset_node_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId">reset_node_public_ip_prefix_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints">reset_node_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion">reset_orchestrator_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb">reset_os_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType">reset_os_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku">reset_os_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId">reset_pod_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId">reset_proximity_placement_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode">reset_scale_down_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice">reset_spot_max_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTemporaryNameForRotation">reset_temporary_name_for_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled">reset_ultra_ssd_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings">reset_upgrade_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVmSize">reset_vm_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId">reset_vnet_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile">reset_windows_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime">reset_workload_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kubelet_config` <a name="put_kubelet_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig"></a>

```python
def put_kubelet_config(
  allowed_unsafe_sysctls: typing.List[str] = None,
  container_log_max_line: typing.Union[int, float] = None,
  container_log_max_size_mb: typing.Union[int, float] = None,
  cpu_cfs_quota_enabled: typing.Union[bool, IResolvable] = None,
  cpu_cfs_quota_period: str = None,
  cpu_manager_policy: str = None,
  image_gc_high_threshold: typing.Union[int, float] = None,
  image_gc_low_threshold: typing.Union[int, float] = None,
  pod_max_pid: typing.Union[int, float] = None,
  topology_manager_policy: str = None
) -> None
```

###### `allowed_unsafe_sysctls`<sup>Optional</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.allowedUnsafeSysctls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}.

---

###### `container_log_max_line`<sup>Optional</sup> <a name="container_log_max_line" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.containerLogMaxLine"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}.

---

###### `container_log_max_size_mb`<sup>Optional</sup> <a name="container_log_max_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.containerLogMaxSizeMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}.

---

###### `cpu_cfs_quota_enabled`<sup>Optional</sup> <a name="cpu_cfs_quota_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.cpuCfsQuotaEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}.

---

###### `cpu_cfs_quota_period`<sup>Optional</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.cpuCfsQuotaPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}.

---

###### `cpu_manager_policy`<sup>Optional</sup> <a name="cpu_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.cpuManagerPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}.

---

###### `image_gc_high_threshold`<sup>Optional</sup> <a name="image_gc_high_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.imageGcHighThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}.

---

###### `image_gc_low_threshold`<sup>Optional</sup> <a name="image_gc_low_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.imageGcLowThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}.

---

###### `pod_max_pid`<sup>Optional</sup> <a name="pod_max_pid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.podMaxPid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}.

---

###### `topology_manager_policy`<sup>Optional</sup> <a name="topology_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.topologyManagerPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}.

---

##### `put_linux_os_config` <a name="put_linux_os_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig"></a>

```python
def put_linux_os_config(
  swap_file_size_mb: typing.Union[int, float] = None,
  sysctl_config: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig = None,
  transparent_huge_page: str = None,
  transparent_huge_page_defrag: str = None,
  transparent_huge_page_enabled: str = None
) -> None
```

###### `swap_file_size_mb`<sup>Optional</sup> <a name="swap_file_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.swapFileSizeMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}.

---

###### `sysctl_config`<sup>Optional</sup> <a name="sysctl_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.sysctlConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

sysctl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#sysctl_config KubernetesClusterNodePool#sysctl_config}

---

###### `transparent_huge_page`<sup>Optional</sup> <a name="transparent_huge_page" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.transparentHugePage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page KubernetesClusterNodePool#transparent_huge_page}.

---

###### `transparent_huge_page_defrag`<sup>Optional</sup> <a name="transparent_huge_page_defrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.transparentHugePageDefrag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}.

---

###### `transparent_huge_page_enabled`<sup>Optional</sup> <a name="transparent_huge_page_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.transparentHugePageEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}.

---

##### `put_node_network_profile` <a name="put_node_network_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile"></a>

```python
def put_node_network_profile(
  allowed_host_ports: typing.Union[IResolvable, typing.List[KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]] = None,
  application_security_group_ids: typing.List[str] = None,
  node_public_ip_tags: typing.Mapping[str] = None
) -> None
```

###### `allowed_host_ports`<sup>Optional</sup> <a name="allowed_host_ports" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile.parameter.allowedHostPorts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]

allowed_host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#allowed_host_ports KubernetesClusterNodePool#allowed_host_ports}

---

###### `application_security_group_ids`<sup>Optional</sup> <a name="application_security_group_ids" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile.parameter.applicationSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}.

---

###### `node_public_ip_tags`<sup>Optional</sup> <a name="node_public_ip_tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile.parameter.nodePublicIpTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}.

---

##### `put_upgrade_settings` <a name="put_upgrade_settings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings"></a>

```python
def put_upgrade_settings(
  max_surge: str,
  drain_timeout_in_minutes: typing.Union[int, float] = None,
  node_soak_duration_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `max_surge`<sup>Required</sup> <a name="max_surge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings.parameter.maxSurge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}.

---

###### `drain_timeout_in_minutes`<sup>Optional</sup> <a name="drain_timeout_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings.parameter.drainTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}.

---

###### `node_soak_duration_in_minutes`<sup>Optional</sup> <a name="node_soak_duration_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings.parameter.nodeSoakDurationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}.

---

##### `put_windows_profile` <a name="put_windows_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile"></a>

```python
def put_windows_profile(
  outbound_nat_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `outbound_nat_enabled`<sup>Optional</sup> <a name="outbound_nat_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile.parameter.outboundNatEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}.

---

##### `reset_auto_scaling_enabled` <a name="reset_auto_scaling_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetAutoScalingEnabled"></a>

```python
def reset_auto_scaling_enabled() -> None
```

##### `reset_capacity_reservation_group_id` <a name="reset_capacity_reservation_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId"></a>

```python
def reset_capacity_reservation_group_id() -> None
```

##### `reset_eviction_policy` <a name="reset_eviction_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy"></a>

```python
def reset_eviction_policy() -> None
```

##### `reset_fips_enabled` <a name="reset_fips_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled"></a>

```python
def reset_fips_enabled() -> None
```

##### `reset_gpu_driver` <a name="reset_gpu_driver" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuDriver"></a>

```python
def reset_gpu_driver() -> None
```

##### `reset_gpu_instance` <a name="reset_gpu_instance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuInstance"></a>

```python
def reset_gpu_instance() -> None
```

##### `reset_host_encryption_enabled` <a name="reset_host_encryption_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostEncryptionEnabled"></a>

```python
def reset_host_encryption_enabled() -> None
```

##### `reset_host_group_id` <a name="reset_host_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId"></a>

```python
def reset_host_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kubelet_config` <a name="reset_kubelet_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig"></a>

```python
def reset_kubelet_config() -> None
```

##### `reset_kubelet_disk_type` <a name="reset_kubelet_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType"></a>

```python
def reset_kubelet_disk_type() -> None
```

##### `reset_linux_os_config` <a name="reset_linux_os_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig"></a>

```python
def reset_linux_os_config() -> None
```

##### `reset_max_count` <a name="reset_max_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount"></a>

```python
def reset_max_count() -> None
```

##### `reset_max_pods` <a name="reset_max_pods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods"></a>

```python
def reset_max_pods() -> None
```

##### `reset_min_count` <a name="reset_min_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount"></a>

```python
def reset_min_count() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_node_labels` <a name="reset_node_labels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels"></a>

```python
def reset_node_labels() -> None
```

##### `reset_node_network_profile` <a name="reset_node_network_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile"></a>

```python
def reset_node_network_profile() -> None
```

##### `reset_node_public_ip_enabled` <a name="reset_node_public_ip_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpEnabled"></a>

```python
def reset_node_public_ip_enabled() -> None
```

##### `reset_node_public_ip_prefix_id` <a name="reset_node_public_ip_prefix_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId"></a>

```python
def reset_node_public_ip_prefix_id() -> None
```

##### `reset_node_taints` <a name="reset_node_taints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints"></a>

```python
def reset_node_taints() -> None
```

##### `reset_orchestrator_version` <a name="reset_orchestrator_version" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion"></a>

```python
def reset_orchestrator_version() -> None
```

##### `reset_os_disk_size_gb` <a name="reset_os_disk_size_gb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb"></a>

```python
def reset_os_disk_size_gb() -> None
```

##### `reset_os_disk_type` <a name="reset_os_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType"></a>

```python
def reset_os_disk_type() -> None
```

##### `reset_os_sku` <a name="reset_os_sku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku"></a>

```python
def reset_os_sku() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_pod_subnet_id` <a name="reset_pod_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId"></a>

```python
def reset_pod_subnet_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_proximity_placement_group_id` <a name="reset_proximity_placement_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId"></a>

```python
def reset_proximity_placement_group_id() -> None
```

##### `reset_scale_down_mode` <a name="reset_scale_down_mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode"></a>

```python
def reset_scale_down_mode() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_spot_max_price` <a name="reset_spot_max_price" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice"></a>

```python
def reset_spot_max_price() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_temporary_name_for_rotation` <a name="reset_temporary_name_for_rotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTemporaryNameForRotation"></a>

```python
def reset_temporary_name_for_rotation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ultra_ssd_enabled` <a name="reset_ultra_ssd_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled"></a>

```python
def reset_ultra_ssd_enabled() -> None
```

##### `reset_upgrade_settings` <a name="reset_upgrade_settings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings"></a>

```python
def reset_upgrade_settings() -> None
```

##### `reset_vm_size` <a name="reset_vm_size" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVmSize"></a>

```python
def reset_vm_size() -> None
```

##### `reset_vnet_subnet_id` <a name="reset_vnet_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId"></a>

```python
def reset_vnet_subnet_id() -> None
```

##### `reset_windows_profile` <a name="reset_windows_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile"></a>

```python
def reset_windows_profile() -> None
```

##### `reset_workload_runtime` <a name="reset_workload_runtime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime"></a>

```python
def reset_workload_runtime() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePool.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KubernetesClusterNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KubernetesClusterNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig">linux_os_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile">node_network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile">windows_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabledInput">auto_scaling_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput">capacity_reservation_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput">eviction_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput">fips_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuDriverInput">gpu_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstanceInput">gpu_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabledInput">host_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput">host_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput">kubelet_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput">kubelet_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput">kubernetes_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput">linux_os_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput">max_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput">max_pods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput">min_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput">node_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput">node_network_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabledInput">node_public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput">node_public_ip_prefix_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput">node_taints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput">orchestrator_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput">os_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput">os_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput">os_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput">pod_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput">proximity_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput">scale_down_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput">spot_max_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotationInput">temporary_name_for_rotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput">ultra_ssd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput">upgrade_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput">vnet_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput">windows_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput">workload_runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId">capacity_reservation_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuDriver">gpu_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstance">gpu_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabled">host_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId">host_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType">kubelet_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels">node_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId">node_public_ip_prefix_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints">node_taints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion">orchestrator_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType">os_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku">os_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId">pod_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode">scale_down_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice">spot_max_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotation">temporary_name_for_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId">vnet_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime">workload_runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubelet_config`<sup>Required</sup> <a name="kubelet_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig"></a>

```python
kubelet_config: KubernetesClusterNodePoolKubeletConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a>

---

##### `linux_os_config`<sup>Required</sup> <a name="linux_os_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig"></a>

```python
linux_os_config: KubernetesClusterNodePoolLinuxOsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a>

---

##### `node_network_profile`<sup>Required</sup> <a name="node_network_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile"></a>

```python
node_network_profile: KubernetesClusterNodePoolNodeNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts"></a>

```python
timeouts: KubernetesClusterNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `upgrade_settings`<sup>Required</sup> <a name="upgrade_settings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings"></a>

```python
upgrade_settings: KubernetesClusterNodePoolUpgradeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a>

---

##### `windows_profile`<sup>Required</sup> <a name="windows_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile"></a>

```python
windows_profile: KubernetesClusterNodePoolWindowsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a>

---

##### `auto_scaling_enabled_input`<sup>Optional</sup> <a name="auto_scaling_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabledInput"></a>

```python
auto_scaling_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `capacity_reservation_group_id_input`<sup>Optional</sup> <a name="capacity_reservation_group_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput"></a>

```python
capacity_reservation_group_id_input: str
```

- *Type:* str

---

##### `eviction_policy_input`<sup>Optional</sup> <a name="eviction_policy_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput"></a>

```python
eviction_policy_input: str
```

- *Type:* str

---

##### `fips_enabled_input`<sup>Optional</sup> <a name="fips_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput"></a>

```python
fips_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gpu_driver_input`<sup>Optional</sup> <a name="gpu_driver_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuDriverInput"></a>

```python
gpu_driver_input: str
```

- *Type:* str

---

##### `gpu_instance_input`<sup>Optional</sup> <a name="gpu_instance_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstanceInput"></a>

```python
gpu_instance_input: str
```

- *Type:* str

---

##### `host_encryption_enabled_input`<sup>Optional</sup> <a name="host_encryption_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabledInput"></a>

```python
host_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_group_id_input`<sup>Optional</sup> <a name="host_group_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput"></a>

```python
host_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubelet_config_input`<sup>Optional</sup> <a name="kubelet_config_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput"></a>

```python
kubelet_config_input: KubernetesClusterNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `kubelet_disk_type_input`<sup>Optional</sup> <a name="kubelet_disk_type_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput"></a>

```python
kubelet_disk_type_input: str
```

- *Type:* str

---

##### `kubernetes_cluster_id_input`<sup>Optional</sup> <a name="kubernetes_cluster_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput"></a>

```python
kubernetes_cluster_id_input: str
```

- *Type:* str

---

##### `linux_os_config_input`<sup>Optional</sup> <a name="linux_os_config_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput"></a>

```python
linux_os_config_input: KubernetesClusterNodePoolLinuxOsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `max_count_input`<sup>Optional</sup> <a name="max_count_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput"></a>

```python
max_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods_input`<sup>Optional</sup> <a name="max_pods_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput"></a>

```python
max_pods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count_input`<sup>Optional</sup> <a name="min_count_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput"></a>

```python
min_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_labels_input`<sup>Optional</sup> <a name="node_labels_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput"></a>

```python
node_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_network_profile_input`<sup>Optional</sup> <a name="node_network_profile_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput"></a>

```python
node_network_profile_input: KubernetesClusterNodePoolNodeNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `node_public_ip_enabled_input`<sup>Optional</sup> <a name="node_public_ip_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabledInput"></a>

```python
node_public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_public_ip_prefix_id_input`<sup>Optional</sup> <a name="node_public_ip_prefix_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput"></a>

```python
node_public_ip_prefix_id_input: str
```

- *Type:* str

---

##### `node_taints_input`<sup>Optional</sup> <a name="node_taints_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput"></a>

```python
node_taints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orchestrator_version_input`<sup>Optional</sup> <a name="orchestrator_version_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput"></a>

```python
orchestrator_version_input: str
```

- *Type:* str

---

##### `os_disk_size_gb_input`<sup>Optional</sup> <a name="os_disk_size_gb_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput"></a>

```python
os_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_disk_type_input`<sup>Optional</sup> <a name="os_disk_type_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput"></a>

```python
os_disk_type_input: str
```

- *Type:* str

---

##### `os_sku_input`<sup>Optional</sup> <a name="os_sku_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput"></a>

```python
os_sku_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `pod_subnet_id_input`<sup>Optional</sup> <a name="pod_subnet_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput"></a>

```python
pod_subnet_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `proximity_placement_group_id_input`<sup>Optional</sup> <a name="proximity_placement_group_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput"></a>

```python
proximity_placement_group_id_input: str
```

- *Type:* str

---

##### `scale_down_mode_input`<sup>Optional</sup> <a name="scale_down_mode_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput"></a>

```python
scale_down_mode_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `spot_max_price_input`<sup>Optional</sup> <a name="spot_max_price_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput"></a>

```python
spot_max_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `temporary_name_for_rotation_input`<sup>Optional</sup> <a name="temporary_name_for_rotation_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotationInput"></a>

```python
temporary_name_for_rotation_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KubernetesClusterNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>]

---

##### `ultra_ssd_enabled_input`<sup>Optional</sup> <a name="ultra_ssd_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput"></a>

```python
ultra_ssd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upgrade_settings_input`<sup>Optional</sup> <a name="upgrade_settings_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput"></a>

```python
upgrade_settings_input: KubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `vnet_subnet_id_input`<sup>Optional</sup> <a name="vnet_subnet_id_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput"></a>

```python
vnet_subnet_id_input: str
```

- *Type:* str

---

##### `windows_profile_input`<sup>Optional</sup> <a name="windows_profile_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput"></a>

```python
windows_profile_input: KubernetesClusterNodePoolWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `workload_runtime_input`<sup>Optional</sup> <a name="workload_runtime_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput"></a>

```python
workload_runtime_input: str
```

- *Type:* str

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `capacity_reservation_group_id`<sup>Required</sup> <a name="capacity_reservation_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId"></a>

```python
capacity_reservation_group_id: str
```

- *Type:* str

---

##### `eviction_policy`<sup>Required</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

---

##### `fips_enabled`<sup>Required</sup> <a name="fips_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gpu_driver`<sup>Required</sup> <a name="gpu_driver" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuDriver"></a>

```python
gpu_driver: str
```

- *Type:* str

---

##### `gpu_instance`<sup>Required</sup> <a name="gpu_instance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstance"></a>

```python
gpu_instance: str
```

- *Type:* str

---

##### `host_encryption_enabled`<sup>Required</sup> <a name="host_encryption_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabled"></a>

```python
host_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_group_id`<sup>Required</sup> <a name="host_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId"></a>

```python
host_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubelet_disk_type`<sup>Required</sup> <a name="kubelet_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType"></a>

```python
kubelet_disk_type: str
```

- *Type:* str

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId"></a>

```python
kubernetes_cluster_id: str
```

- *Type:* str

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods`<sup>Required</sup> <a name="max_pods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count`<sup>Required</sup> <a name="min_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_labels`<sup>Required</sup> <a name="node_labels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels"></a>

```python
node_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_public_ip_enabled`<sup>Required</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabled"></a>

```python
node_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_public_ip_prefix_id`<sup>Required</sup> <a name="node_public_ip_prefix_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```python
node_public_ip_prefix_id: str
```

- *Type:* str

---

##### `node_taints`<sup>Required</sup> <a name="node_taints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints"></a>

```python
node_taints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orchestrator_version`<sup>Required</sup> <a name="orchestrator_version" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion"></a>

```python
orchestrator_version: str
```

- *Type:* str

---

##### `os_disk_size_gb`<sup>Required</sup> <a name="os_disk_size_gb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb"></a>

```python
os_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_disk_type`<sup>Required</sup> <a name="os_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType"></a>

```python
os_disk_type: str
```

- *Type:* str

---

##### `os_sku`<sup>Required</sup> <a name="os_sku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku"></a>

```python
os_sku: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `pod_subnet_id`<sup>Required</sup> <a name="pod_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId"></a>

```python
pod_subnet_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `proximity_placement_group_id`<sup>Required</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

---

##### `scale_down_mode`<sup>Required</sup> <a name="scale_down_mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode"></a>

```python
scale_down_mode: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `spot_max_price`<sup>Required</sup> <a name="spot_max_price" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice"></a>

```python
spot_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `temporary_name_for_rotation`<sup>Required</sup> <a name="temporary_name_for_rotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.temporaryNameForRotation"></a>

```python
temporary_name_for_rotation: str
```

- *Type:* str

---

##### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `vnet_subnet_id`<sup>Required</sup> <a name="vnet_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId"></a>

```python
vnet_subnet_id: str
```

- *Type:* str

---

##### `workload_runtime`<sup>Required</sup> <a name="workload_runtime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime"></a>

```python
workload_runtime: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterNodePoolConfig <a name="KubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_cluster_id: str,
  name: str,
  auto_scaling_enabled: typing.Union[bool, IResolvable] = None,
  capacity_reservation_group_id: str = None,
  eviction_policy: str = None,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  gpu_driver: str = None,
  gpu_instance: str = None,
  host_encryption_enabled: typing.Union[bool, IResolvable] = None,
  host_group_id: str = None,
  id: str = None,
  kubelet_config: KubernetesClusterNodePoolKubeletConfig = None,
  kubelet_disk_type: str = None,
  linux_os_config: KubernetesClusterNodePoolLinuxOsConfig = None,
  max_count: typing.Union[int, float] = None,
  max_pods: typing.Union[int, float] = None,
  min_count: typing.Union[int, float] = None,
  mode: str = None,
  node_count: typing.Union[int, float] = None,
  node_labels: typing.Mapping[str] = None,
  node_network_profile: KubernetesClusterNodePoolNodeNetworkProfile = None,
  node_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  node_public_ip_prefix_id: str = None,
  node_taints: typing.List[str] = None,
  orchestrator_version: str = None,
  os_disk_size_gb: typing.Union[int, float] = None,
  os_disk_type: str = None,
  os_sku: str = None,
  os_type: str = None,
  pod_subnet_id: str = None,
  priority: str = None,
  proximity_placement_group_id: str = None,
  scale_down_mode: str = None,
  snapshot_id: str = None,
  spot_max_price: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  temporary_name_for_rotation: str = None,
  timeouts: KubernetesClusterNodePoolTimeouts = None,
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None,
  upgrade_settings: KubernetesClusterNodePoolUpgradeSettings = None,
  vm_size: str = None,
  vnet_subnet_id: str = None,
  windows_profile: KubernetesClusterNodePoolWindowsProfile = None,
  workload_runtime: str = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId">capacity_reservation_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuDriver">gpu_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_driver KubernetesClusterNodePool#gpu_driver}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuInstance">gpu_instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostEncryptionEnabled">host_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId">host_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType">kubelet_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig">linux_os_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels">node_labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile">node_network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | node_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId">node_public_ip_prefix_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints">node_taints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion">orchestrator_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType">os_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku">os_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId">pod_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode">scale_down_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice">spot_max_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.temporaryNameForRotation">temporary_name_for_rotation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId">vnet_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile">windows_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | windows_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime">workload_runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId"></a>

```python
kubernetes_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}.

---

##### `auto_scaling_enabled`<sup>Optional</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}.

---

##### `capacity_reservation_group_id`<sup>Optional</sup> <a name="capacity_reservation_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId"></a>

```python
capacity_reservation_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}.

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}.

---

##### `gpu_driver`<sup>Optional</sup> <a name="gpu_driver" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuDriver"></a>

```python
gpu_driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_driver KubernetesClusterNodePool#gpu_driver}.

---

##### `gpu_instance`<sup>Optional</sup> <a name="gpu_instance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuInstance"></a>

```python
gpu_instance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}.

---

##### `host_encryption_enabled`<sup>Optional</sup> <a name="host_encryption_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostEncryptionEnabled"></a>

```python
host_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}.

---

##### `host_group_id`<sup>Optional</sup> <a name="host_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId"></a>

```python
host_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubelet_config`<sup>Optional</sup> <a name="kubelet_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig"></a>

```python
kubelet_config: KubernetesClusterNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}

---

##### `kubelet_disk_type`<sup>Optional</sup> <a name="kubelet_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType"></a>

```python
kubelet_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}.

---

##### `linux_os_config`<sup>Optional</sup> <a name="linux_os_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig"></a>

```python
linux_os_config: KubernetesClusterNodePoolLinuxOsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}.

---

##### `min_count`<sup>Optional</sup> <a name="min_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}.

---

##### `node_labels`<sup>Optional</sup> <a name="node_labels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels"></a>

```python
node_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}.

---

##### `node_network_profile`<sup>Optional</sup> <a name="node_network_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile"></a>

```python
node_network_profile: KubernetesClusterNodePoolNodeNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

node_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}

---

##### `node_public_ip_enabled`<sup>Optional</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpEnabled"></a>

```python
node_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}.

---

##### `node_public_ip_prefix_id`<sup>Optional</sup> <a name="node_public_ip_prefix_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId"></a>

```python
node_public_ip_prefix_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}.

---

##### `node_taints`<sup>Optional</sup> <a name="node_taints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints"></a>

```python
node_taints: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}.

---

##### `orchestrator_version`<sup>Optional</sup> <a name="orchestrator_version" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion"></a>

```python
orchestrator_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}.

---

##### `os_disk_size_gb`<sup>Optional</sup> <a name="os_disk_size_gb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb"></a>

```python
os_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}.

---

##### `os_disk_type`<sup>Optional</sup> <a name="os_disk_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType"></a>

```python
os_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}.

---

##### `os_sku`<sup>Optional</sup> <a name="os_sku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku"></a>

```python
os_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}.

---

##### `pod_subnet_id`<sup>Optional</sup> <a name="pod_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId"></a>

```python
pod_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}.

---

##### `scale_down_mode`<sup>Optional</sup> <a name="scale_down_mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode"></a>

```python
scale_down_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}.

---

##### `spot_max_price`<sup>Optional</sup> <a name="spot_max_price" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice"></a>

```python
spot_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}.

---

##### `temporary_name_for_rotation`<sup>Optional</sup> <a name="temporary_name_for_rotation" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.temporaryNameForRotation"></a>

```python
temporary_name_for_rotation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#temporary_name_for_rotation KubernetesClusterNodePool#temporary_name_for_rotation}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts"></a>

```python
timeouts: KubernetesClusterNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}

---

##### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}.

---

##### `upgrade_settings`<sup>Optional</sup> <a name="upgrade_settings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings"></a>

```python
upgrade_settings: KubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}

---

##### `vm_size`<sup>Optional</sup> <a name="vm_size" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}.

---

##### `vnet_subnet_id`<sup>Optional</sup> <a name="vnet_subnet_id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId"></a>

```python
vnet_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}.

---

##### `windows_profile`<sup>Optional</sup> <a name="windows_profile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile"></a>

```python
windows_profile: KubernetesClusterNodePoolWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

windows_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}

---

##### `workload_runtime`<sup>Optional</sup> <a name="workload_runtime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime"></a>

```python
workload_runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}.

---

### KubernetesClusterNodePoolKubeletConfig <a name="KubernetesClusterNodePoolKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig(
  allowed_unsafe_sysctls: typing.List[str] = None,
  container_log_max_line: typing.Union[int, float] = None,
  container_log_max_size_mb: typing.Union[int, float] = None,
  cpu_cfs_quota_enabled: typing.Union[bool, IResolvable] = None,
  cpu_cfs_quota_period: str = None,
  cpu_manager_policy: str = None,
  image_gc_high_threshold: typing.Union[int, float] = None,
  image_gc_low_threshold: typing.Union[int, float] = None,
  pod_max_pid: typing.Union[int, float] = None,
  topology_manager_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls">allowed_unsafe_sysctls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine">container_log_max_line</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb">container_log_max_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled">cpu_cfs_quota_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">cpu_cfs_quota_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy">cpu_manager_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold">image_gc_high_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold">image_gc_low_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid">pod_max_pid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy">topology_manager_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}. |

---

##### `allowed_unsafe_sysctls`<sup>Optional</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls"></a>

```python
allowed_unsafe_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}.

---

##### `container_log_max_line`<sup>Optional</sup> <a name="container_log_max_line" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine"></a>

```python
container_log_max_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}.

---

##### `container_log_max_size_mb`<sup>Optional</sup> <a name="container_log_max_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb"></a>

```python
container_log_max_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}.

---

##### `cpu_cfs_quota_enabled`<sup>Optional</sup> <a name="cpu_cfs_quota_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled"></a>

```python
cpu_cfs_quota_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}.

---

##### `cpu_cfs_quota_period`<sup>Optional</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```python
cpu_cfs_quota_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}.

---

##### `cpu_manager_policy`<sup>Optional</sup> <a name="cpu_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```python
cpu_manager_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}.

---

##### `image_gc_high_threshold`<sup>Optional</sup> <a name="image_gc_high_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold"></a>

```python
image_gc_high_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}.

---

##### `image_gc_low_threshold`<sup>Optional</sup> <a name="image_gc_low_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold"></a>

```python
image_gc_low_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}.

---

##### `pod_max_pid`<sup>Optional</sup> <a name="pod_max_pid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid"></a>

```python
pod_max_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}.

---

##### `topology_manager_policy`<sup>Optional</sup> <a name="topology_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy"></a>

```python
topology_manager_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}.

---

### KubernetesClusterNodePoolLinuxOsConfig <a name="KubernetesClusterNodePoolLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig(
  swap_file_size_mb: typing.Union[int, float] = None,
  sysctl_config: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig = None,
  transparent_huge_page: str = None,
  transparent_huge_page_defrag: str = None,
  transparent_huge_page_enabled: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb">swap_file_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig">sysctl_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | sysctl_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePage">transparent_huge_page</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page KubernetesClusterNodePool#transparent_huge_page}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag">transparent_huge_page_defrag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled">transparent_huge_page_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}. |

---

##### `swap_file_size_mb`<sup>Optional</sup> <a name="swap_file_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb"></a>

```python
swap_file_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}.

---

##### `sysctl_config`<sup>Optional</sup> <a name="sysctl_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig"></a>

```python
sysctl_config: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

sysctl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#sysctl_config KubernetesClusterNodePool#sysctl_config}

---

##### `transparent_huge_page`<sup>Optional</sup> <a name="transparent_huge_page" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePage"></a>

```python
transparent_huge_page: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page KubernetesClusterNodePool#transparent_huge_page}.

---

##### `transparent_huge_page_defrag`<sup>Optional</sup> <a name="transparent_huge_page_defrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag"></a>

```python
transparent_huge_page_defrag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}.

---

##### `transparent_huge_page_enabled`<sup>Optional</sup> <a name="transparent_huge_page_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled"></a>

```python
transparent_huge_page_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}.

---

### KubernetesClusterNodePoolLinuxOsConfigSysctlConfig <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig(
  fs_aio_max_nr: typing.Union[int, float] = None,
  fs_file_max: typing.Union[int, float] = None,
  fs_inotify_max_user_watches: typing.Union[int, float] = None,
  fs_nr_open: typing.Union[int, float] = None,
  kernel_threads_max: typing.Union[int, float] = None,
  net_core_netdev_max_backlog: typing.Union[int, float] = None,
  net_core_optmem_max: typing.Union[int, float] = None,
  net_core_rmem_default: typing.Union[int, float] = None,
  net_core_rmem_max: typing.Union[int, float] = None,
  net_core_somaxconn: typing.Union[int, float] = None,
  net_core_wmem_default: typing.Union[int, float] = None,
  net_core_wmem_max: typing.Union[int, float] = None,
  net_ipv4_ip_local_port_range_max: typing.Union[int, float] = None,
  net_ipv4_ip_local_port_range_min: typing.Union[int, float] = None,
  net_ipv4_neigh_default_gc_thresh1: typing.Union[int, float] = None,
  net_ipv4_neigh_default_gc_thresh2: typing.Union[int, float] = None,
  net_ipv4_neigh_default_gc_thresh3: typing.Union[int, float] = None,
  net_ipv4_tcp_fin_timeout: typing.Union[int, float] = None,
  net_ipv4_tcp_keepalive_intvl: typing.Union[int, float] = None,
  net_ipv4_tcp_keepalive_probes: typing.Union[int, float] = None,
  net_ipv4_tcp_keepalive_time: typing.Union[int, float] = None,
  net_ipv4_tcp_max_syn_backlog: typing.Union[int, float] = None,
  net_ipv4_tcp_max_tw_buckets: typing.Union[int, float] = None,
  net_ipv4_tcp_tw_reuse: typing.Union[bool, IResolvable] = None,
  net_netfilter_nf_conntrack_buckets: typing.Union[int, float] = None,
  net_netfilter_nf_conntrack_max: typing.Union[int, float] = None,
  vm_max_map_count: typing.Union[int, float] = None,
  vm_swappiness: typing.Union[int, float] = None,
  vm_vfs_cache_pressure: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr">fs_aio_max_nr</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax">fs_file_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches">fs_inotify_max_user_watches</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen">fs_nr_open</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax">kernel_threads_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog">net_core_netdev_max_backlog</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax">net_core_optmem_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault">net_core_rmem_default</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax">net_core_rmem_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn">net_core_somaxconn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault">net_core_wmem_default</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax">net_core_wmem_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax">net_ipv4_ip_local_port_range_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin">net_ipv4_ip_local_port_range_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1">net_ipv4_neigh_default_gc_thresh1</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2">net_ipv4_neigh_default_gc_thresh2</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3">net_ipv4_neigh_default_gc_thresh3</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout">net_ipv4_tcp_fin_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl">net_ipv4_tcp_keepalive_intvl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes">net_ipv4_tcp_keepalive_probes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime">net_ipv4_tcp_keepalive_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog">net_ipv4_tcp_max_syn_backlog</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets">net_ipv4_tcp_max_tw_buckets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse">net_ipv4_tcp_tw_reuse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets">net_netfilter_nf_conntrack_buckets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax">net_netfilter_nf_conntrack_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount">vm_max_map_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness">vm_swappiness</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure">vm_vfs_cache_pressure</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}. |

---

##### `fs_aio_max_nr`<sup>Optional</sup> <a name="fs_aio_max_nr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr"></a>

```python
fs_aio_max_nr: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}.

---

##### `fs_file_max`<sup>Optional</sup> <a name="fs_file_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax"></a>

```python
fs_file_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}.

---

##### `fs_inotify_max_user_watches`<sup>Optional</sup> <a name="fs_inotify_max_user_watches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches"></a>

```python
fs_inotify_max_user_watches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}.

---

##### `fs_nr_open`<sup>Optional</sup> <a name="fs_nr_open" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen"></a>

```python
fs_nr_open: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}.

---

##### `kernel_threads_max`<sup>Optional</sup> <a name="kernel_threads_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax"></a>

```python
kernel_threads_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}.

---

##### `net_core_netdev_max_backlog`<sup>Optional</sup> <a name="net_core_netdev_max_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog"></a>

```python
net_core_netdev_max_backlog: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}.

---

##### `net_core_optmem_max`<sup>Optional</sup> <a name="net_core_optmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax"></a>

```python
net_core_optmem_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}.

---

##### `net_core_rmem_default`<sup>Optional</sup> <a name="net_core_rmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault"></a>

```python
net_core_rmem_default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}.

---

##### `net_core_rmem_max`<sup>Optional</sup> <a name="net_core_rmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax"></a>

```python
net_core_rmem_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}.

---

##### `net_core_somaxconn`<sup>Optional</sup> <a name="net_core_somaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn"></a>

```python
net_core_somaxconn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}.

---

##### `net_core_wmem_default`<sup>Optional</sup> <a name="net_core_wmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault"></a>

```python
net_core_wmem_default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}.

---

##### `net_core_wmem_max`<sup>Optional</sup> <a name="net_core_wmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax"></a>

```python
net_core_wmem_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}.

---

##### `net_ipv4_ip_local_port_range_max`<sup>Optional</sup> <a name="net_ipv4_ip_local_port_range_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax"></a>

```python
net_ipv4_ip_local_port_range_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}.

---

##### `net_ipv4_ip_local_port_range_min`<sup>Optional</sup> <a name="net_ipv4_ip_local_port_range_min" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin"></a>

```python
net_ipv4_ip_local_port_range_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}.

---

##### `net_ipv4_neigh_default_gc_thresh1`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1"></a>

```python
net_ipv4_neigh_default_gc_thresh1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}.

---

##### `net_ipv4_neigh_default_gc_thresh2`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2"></a>

```python
net_ipv4_neigh_default_gc_thresh2: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}.

---

##### `net_ipv4_neigh_default_gc_thresh3`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3"></a>

```python
net_ipv4_neigh_default_gc_thresh3: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}.

---

##### `net_ipv4_tcp_fin_timeout`<sup>Optional</sup> <a name="net_ipv4_tcp_fin_timeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout"></a>

```python
net_ipv4_tcp_fin_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}.

---

##### `net_ipv4_tcp_keepalive_intvl`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_intvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl"></a>

```python
net_ipv4_tcp_keepalive_intvl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}.

---

##### `net_ipv4_tcp_keepalive_probes`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_probes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes"></a>

```python
net_ipv4_tcp_keepalive_probes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}.

---

##### `net_ipv4_tcp_keepalive_time`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_time" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime"></a>

```python
net_ipv4_tcp_keepalive_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}.

---

##### `net_ipv4_tcp_max_syn_backlog`<sup>Optional</sup> <a name="net_ipv4_tcp_max_syn_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog"></a>

```python
net_ipv4_tcp_max_syn_backlog: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}.

---

##### `net_ipv4_tcp_max_tw_buckets`<sup>Optional</sup> <a name="net_ipv4_tcp_max_tw_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets"></a>

```python
net_ipv4_tcp_max_tw_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}.

---

##### `net_ipv4_tcp_tw_reuse`<sup>Optional</sup> <a name="net_ipv4_tcp_tw_reuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse"></a>

```python
net_ipv4_tcp_tw_reuse: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}.

---

##### `net_netfilter_nf_conntrack_buckets`<sup>Optional</sup> <a name="net_netfilter_nf_conntrack_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets"></a>

```python
net_netfilter_nf_conntrack_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}.

---

##### `net_netfilter_nf_conntrack_max`<sup>Optional</sup> <a name="net_netfilter_nf_conntrack_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax"></a>

```python
net_netfilter_nf_conntrack_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}.

---

##### `vm_max_map_count`<sup>Optional</sup> <a name="vm_max_map_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount"></a>

```python
vm_max_map_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}.

---

##### `vm_swappiness`<sup>Optional</sup> <a name="vm_swappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness"></a>

```python
vm_swappiness: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}.

---

##### `vm_vfs_cache_pressure`<sup>Optional</sup> <a name="vm_vfs_cache_pressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure"></a>

```python
vm_vfs_cache_pressure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}.

---

### KubernetesClusterNodePoolNodeNetworkProfile <a name="KubernetesClusterNodePoolNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile(
  allowed_host_ports: typing.Union[IResolvable, typing.List[KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]] = None,
  application_security_group_ids: typing.List[str] = None,
  node_public_ip_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.allowedHostPorts">allowed_host_ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]</code> | allowed_host_ports block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.applicationSecurityGroupIds">application_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags">node_public_ip_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}. |

---

##### `allowed_host_ports`<sup>Optional</sup> <a name="allowed_host_ports" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.allowedHostPorts"></a>

```python
allowed_host_ports: typing.Union[IResolvable, typing.List[KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]

allowed_host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#allowed_host_ports KubernetesClusterNodePool#allowed_host_ports}

---

##### `application_security_group_ids`<sup>Optional</sup> <a name="application_security_group_ids" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.applicationSecurityGroupIds"></a>

```python
application_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}.

---

##### `node_public_ip_tags`<sup>Optional</sup> <a name="node_public_ip_tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags"></a>

```python
node_public_ip_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}.

---

### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts(
  port_end: typing.Union[int, float] = None,
  port_start: typing.Union[int, float] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portEnd">port_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portStart">port_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}. |

---

##### `port_end`<sup>Optional</sup> <a name="port_end" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portEnd"></a>

```python
port_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}.

---

##### `port_start`<sup>Optional</sup> <a name="port_start" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portStart"></a>

```python
port_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}.

---

### KubernetesClusterNodePoolTimeouts <a name="KubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}.

---

### KubernetesClusterNodePoolUpgradeSettings <a name="KubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings(
  max_surge: str,
  drain_timeout_in_minutes: typing.Union[int, float] = None,
  node_soak_duration_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge">max_surge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.drainTimeoutInMinutes">drain_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.nodeSoakDurationInMinutes">node_soak_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}. |

---

##### `max_surge`<sup>Required</sup> <a name="max_surge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge"></a>

```python
max_surge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}.

---

##### `drain_timeout_in_minutes`<sup>Optional</sup> <a name="drain_timeout_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.drainTimeoutInMinutes"></a>

```python
drain_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}.

---

##### `node_soak_duration_in_minutes`<sup>Optional</sup> <a name="node_soak_duration_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.nodeSoakDurationInMinutes"></a>

```python
node_soak_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}.

---

### KubernetesClusterNodePoolWindowsProfile <a name="KubernetesClusterNodePoolWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile(
  outbound_nat_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled">outbound_nat_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}. |

---

##### `outbound_nat_enabled`<sup>Optional</sup> <a name="outbound_nat_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled"></a>

```python
outbound_nat_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterNodePoolKubeletConfigOutputReference <a name="KubernetesClusterNodePoolKubeletConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls">reset_allowed_unsafe_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine">reset_container_log_max_line</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb">reset_container_log_max_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled">reset_cpu_cfs_quota_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">reset_cpu_cfs_quota_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy">reset_cpu_manager_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold">reset_image_gc_high_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold">reset_image_gc_low_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid">reset_pod_max_pid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy">reset_topology_manager_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_unsafe_sysctls` <a name="reset_allowed_unsafe_sysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls"></a>

```python
def reset_allowed_unsafe_sysctls() -> None
```

##### `reset_container_log_max_line` <a name="reset_container_log_max_line" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine"></a>

```python
def reset_container_log_max_line() -> None
```

##### `reset_container_log_max_size_mb` <a name="reset_container_log_max_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb"></a>

```python
def reset_container_log_max_size_mb() -> None
```

##### `reset_cpu_cfs_quota_enabled` <a name="reset_cpu_cfs_quota_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled"></a>

```python
def reset_cpu_cfs_quota_enabled() -> None
```

##### `reset_cpu_cfs_quota_period` <a name="reset_cpu_cfs_quota_period" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```python
def reset_cpu_cfs_quota_period() -> None
```

##### `reset_cpu_manager_policy` <a name="reset_cpu_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```python
def reset_cpu_manager_policy() -> None
```

##### `reset_image_gc_high_threshold` <a name="reset_image_gc_high_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold"></a>

```python
def reset_image_gc_high_threshold() -> None
```

##### `reset_image_gc_low_threshold` <a name="reset_image_gc_low_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold"></a>

```python
def reset_image_gc_low_threshold() -> None
```

##### `reset_pod_max_pid` <a name="reset_pod_max_pid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid"></a>

```python
def reset_pod_max_pid() -> None
```

##### `reset_topology_manager_policy` <a name="reset_topology_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy"></a>

```python
def reset_topology_manager_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput">allowed_unsafe_sysctls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput">container_log_max_line_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput">container_log_max_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput">cpu_cfs_quota_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpu_cfs_quota_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpu_manager_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput">image_gc_high_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput">image_gc_low_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput">pod_max_pid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput">topology_manager_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls">allowed_unsafe_sysctls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine">container_log_max_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb">container_log_max_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled">cpu_cfs_quota_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpu_cfs_quota_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">cpu_manager_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold">image_gc_high_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold">image_gc_low_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid">pod_max_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy">topology_manager_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_unsafe_sysctls_input`<sup>Optional</sup> <a name="allowed_unsafe_sysctls_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput"></a>

```python
allowed_unsafe_sysctls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_log_max_line_input`<sup>Optional</sup> <a name="container_log_max_line_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput"></a>

```python
container_log_max_line_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_log_max_size_mb_input`<sup>Optional</sup> <a name="container_log_max_size_mb_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput"></a>

```python
container_log_max_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_cfs_quota_enabled_input`<sup>Optional</sup> <a name="cpu_cfs_quota_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput"></a>

```python
cpu_cfs_quota_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_cfs_quota_period_input`<sup>Optional</sup> <a name="cpu_cfs_quota_period_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```python
cpu_cfs_quota_period_input: str
```

- *Type:* str

---

##### `cpu_manager_policy_input`<sup>Optional</sup> <a name="cpu_manager_policy_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```python
cpu_manager_policy_input: str
```

- *Type:* str

---

##### `image_gc_high_threshold_input`<sup>Optional</sup> <a name="image_gc_high_threshold_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput"></a>

```python
image_gc_high_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_gc_low_threshold_input`<sup>Optional</sup> <a name="image_gc_low_threshold_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput"></a>

```python
image_gc_low_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pod_max_pid_input`<sup>Optional</sup> <a name="pod_max_pid_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput"></a>

```python
pod_max_pid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topology_manager_policy_input`<sup>Optional</sup> <a name="topology_manager_policy_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput"></a>

```python
topology_manager_policy_input: str
```

- *Type:* str

---

##### `allowed_unsafe_sysctls`<sup>Required</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls"></a>

```python
allowed_unsafe_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_log_max_line`<sup>Required</sup> <a name="container_log_max_line" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine"></a>

```python
container_log_max_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_log_max_size_mb`<sup>Required</sup> <a name="container_log_max_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb"></a>

```python
container_log_max_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_cfs_quota_enabled`<sup>Required</sup> <a name="cpu_cfs_quota_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled"></a>

```python
cpu_cfs_quota_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_cfs_quota_period`<sup>Required</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```python
cpu_cfs_quota_period: str
```

- *Type:* str

---

##### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```python
cpu_manager_policy: str
```

- *Type:* str

---

##### `image_gc_high_threshold`<sup>Required</sup> <a name="image_gc_high_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold"></a>

```python
image_gc_high_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_gc_low_threshold`<sup>Required</sup> <a name="image_gc_low_threshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold"></a>

```python
image_gc_low_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pod_max_pid`<sup>Required</sup> <a name="pod_max_pid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid"></a>

```python
pod_max_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topology_manager_policy`<sup>Required</sup> <a name="topology_manager_policy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy"></a>

```python
topology_manager_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig">put_sysctl_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb">reset_swap_file_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig">reset_sysctl_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePage">reset_transparent_huge_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag">reset_transparent_huge_page_defrag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled">reset_transparent_huge_page_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sysctl_config` <a name="put_sysctl_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig"></a>

```python
def put_sysctl_config(
  fs_aio_max_nr: typing.Union[int, float] = None,
  fs_file_max: typing.Union[int, float] = None,
  fs_inotify_max_user_watches: typing.Union[int, float] = None,
  fs_nr_open: typing.Union[int, float] = None,
  kernel_threads_max: typing.Union[int, float] = None,
  net_core_netdev_max_backlog: typing.Union[int, float] = None,
  net_core_optmem_max: typing.Union[int, float] = None,
  net_core_rmem_default: typing.Union[int, float] = None,
  net_core_rmem_max: typing.Union[int, float] = None,
  net_core_somaxconn: typing.Union[int, float] = None,
  net_core_wmem_default: typing.Union[int, float] = None,
  net_core_wmem_max: typing.Union[int, float] = None,
  net_ipv4_ip_local_port_range_max: typing.Union[int, float] = None,
  net_ipv4_ip_local_port_range_min: typing.Union[int, float] = None,
  net_ipv4_neigh_default_gc_thresh1: typing.Union[int, float] = None,
  net_ipv4_neigh_default_gc_thresh2: typing.Union[int, float] = None,
  net_ipv4_neigh_default_gc_thresh3: typing.Union[int, float] = None,
  net_ipv4_tcp_fin_timeout: typing.Union[int, float] = None,
  net_ipv4_tcp_keepalive_intvl: typing.Union[int, float] = None,
  net_ipv4_tcp_keepalive_probes: typing.Union[int, float] = None,
  net_ipv4_tcp_keepalive_time: typing.Union[int, float] = None,
  net_ipv4_tcp_max_syn_backlog: typing.Union[int, float] = None,
  net_ipv4_tcp_max_tw_buckets: typing.Union[int, float] = None,
  net_ipv4_tcp_tw_reuse: typing.Union[bool, IResolvable] = None,
  net_netfilter_nf_conntrack_buckets: typing.Union[int, float] = None,
  net_netfilter_nf_conntrack_max: typing.Union[int, float] = None,
  vm_max_map_count: typing.Union[int, float] = None,
  vm_swappiness: typing.Union[int, float] = None,
  vm_vfs_cache_pressure: typing.Union[int, float] = None
) -> None
```

###### `fs_aio_max_nr`<sup>Optional</sup> <a name="fs_aio_max_nr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.fsAioMaxNr"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}.

---

###### `fs_file_max`<sup>Optional</sup> <a name="fs_file_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.fsFileMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}.

---

###### `fs_inotify_max_user_watches`<sup>Optional</sup> <a name="fs_inotify_max_user_watches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.fsInotifyMaxUserWatches"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}.

---

###### `fs_nr_open`<sup>Optional</sup> <a name="fs_nr_open" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.fsNrOpen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}.

---

###### `kernel_threads_max`<sup>Optional</sup> <a name="kernel_threads_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.kernelThreadsMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}.

---

###### `net_core_netdev_max_backlog`<sup>Optional</sup> <a name="net_core_netdev_max_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreNetdevMaxBacklog"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}.

---

###### `net_core_optmem_max`<sup>Optional</sup> <a name="net_core_optmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreOptmemMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}.

---

###### `net_core_rmem_default`<sup>Optional</sup> <a name="net_core_rmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreRmemDefault"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}.

---

###### `net_core_rmem_max`<sup>Optional</sup> <a name="net_core_rmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreRmemMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}.

---

###### `net_core_somaxconn`<sup>Optional</sup> <a name="net_core_somaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreSomaxconn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}.

---

###### `net_core_wmem_default`<sup>Optional</sup> <a name="net_core_wmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreWmemDefault"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}.

---

###### `net_core_wmem_max`<sup>Optional</sup> <a name="net_core_wmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netCoreWmemMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}.

---

###### `net_ipv4_ip_local_port_range_max`<sup>Optional</sup> <a name="net_ipv4_ip_local_port_range_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4IpLocalPortRangeMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}.

---

###### `net_ipv4_ip_local_port_range_min`<sup>Optional</sup> <a name="net_ipv4_ip_local_port_range_min" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4IpLocalPortRangeMin"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}.

---

###### `net_ipv4_neigh_default_gc_thresh1`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4NeighDefaultGcThresh1"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}.

---

###### `net_ipv4_neigh_default_gc_thresh2`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4NeighDefaultGcThresh2"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}.

---

###### `net_ipv4_neigh_default_gc_thresh3`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4NeighDefaultGcThresh3"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}.

---

###### `net_ipv4_tcp_fin_timeout`<sup>Optional</sup> <a name="net_ipv4_tcp_fin_timeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpFinTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}.

---

###### `net_ipv4_tcp_keepalive_intvl`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_intvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpKeepaliveIntvl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}.

---

###### `net_ipv4_tcp_keepalive_probes`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_probes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpKeepaliveProbes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}.

---

###### `net_ipv4_tcp_keepalive_time`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_time" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpKeepaliveTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}.

---

###### `net_ipv4_tcp_max_syn_backlog`<sup>Optional</sup> <a name="net_ipv4_tcp_max_syn_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpMaxSynBacklog"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}.

---

###### `net_ipv4_tcp_max_tw_buckets`<sup>Optional</sup> <a name="net_ipv4_tcp_max_tw_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpMaxTwBuckets"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}.

---

###### `net_ipv4_tcp_tw_reuse`<sup>Optional</sup> <a name="net_ipv4_tcp_tw_reuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netIpv4TcpTwReuse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}.

---

###### `net_netfilter_nf_conntrack_buckets`<sup>Optional</sup> <a name="net_netfilter_nf_conntrack_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netNetfilterNfConntrackBuckets"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}.

---

###### `net_netfilter_nf_conntrack_max`<sup>Optional</sup> <a name="net_netfilter_nf_conntrack_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.netNetfilterNfConntrackMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}.

---

###### `vm_max_map_count`<sup>Optional</sup> <a name="vm_max_map_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.vmMaxMapCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}.

---

###### `vm_swappiness`<sup>Optional</sup> <a name="vm_swappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.vmSwappiness"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}.

---

###### `vm_vfs_cache_pressure`<sup>Optional</sup> <a name="vm_vfs_cache_pressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.vmVfsCachePressure"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}.

---

##### `reset_swap_file_size_mb` <a name="reset_swap_file_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb"></a>

```python
def reset_swap_file_size_mb() -> None
```

##### `reset_sysctl_config` <a name="reset_sysctl_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig"></a>

```python
def reset_sysctl_config() -> None
```

##### `reset_transparent_huge_page` <a name="reset_transparent_huge_page" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePage"></a>

```python
def reset_transparent_huge_page() -> None
```

##### `reset_transparent_huge_page_defrag` <a name="reset_transparent_huge_page_defrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag"></a>

```python
def reset_transparent_huge_page_defrag() -> None
```

##### `reset_transparent_huge_page_enabled` <a name="reset_transparent_huge_page_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled"></a>

```python
def reset_transparent_huge_page_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig">sysctl_config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput">swap_file_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput">sysctl_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput">transparent_huge_page_defrag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput">transparent_huge_page_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageInput">transparent_huge_page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb">swap_file_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePage">transparent_huge_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag">transparent_huge_page_defrag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled">transparent_huge_page_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sysctl_config`<sup>Required</sup> <a name="sysctl_config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig"></a>

```python
sysctl_config: KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a>

---

##### `swap_file_size_mb_input`<sup>Optional</sup> <a name="swap_file_size_mb_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput"></a>

```python
swap_file_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sysctl_config_input`<sup>Optional</sup> <a name="sysctl_config_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput"></a>

```python
sysctl_config_input: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `transparent_huge_page_defrag_input`<sup>Optional</sup> <a name="transparent_huge_page_defrag_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput"></a>

```python
transparent_huge_page_defrag_input: str
```

- *Type:* str

---

##### `transparent_huge_page_enabled_input`<sup>Optional</sup> <a name="transparent_huge_page_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput"></a>

```python
transparent_huge_page_enabled_input: str
```

- *Type:* str

---

##### `transparent_huge_page_input`<sup>Optional</sup> <a name="transparent_huge_page_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageInput"></a>

```python
transparent_huge_page_input: str
```

- *Type:* str

---

##### `swap_file_size_mb`<sup>Required</sup> <a name="swap_file_size_mb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb"></a>

```python
swap_file_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transparent_huge_page`<sup>Required</sup> <a name="transparent_huge_page" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePage"></a>

```python
transparent_huge_page: str
```

- *Type:* str

---

##### `transparent_huge_page_defrag`<sup>Required</sup> <a name="transparent_huge_page_defrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag"></a>

```python
transparent_huge_page_defrag: str
```

- *Type:* str

---

##### `transparent_huge_page_enabled`<sup>Required</sup> <a name="transparent_huge_page_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled"></a>

```python
transparent_huge_page_enabled: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterNodePoolLinuxOsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr">reset_fs_aio_max_nr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax">reset_fs_file_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches">reset_fs_inotify_max_user_watches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen">reset_fs_nr_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax">reset_kernel_threads_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog">reset_net_core_netdev_max_backlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax">reset_net_core_optmem_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault">reset_net_core_rmem_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax">reset_net_core_rmem_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn">reset_net_core_somaxconn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault">reset_net_core_wmem_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax">reset_net_core_wmem_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax">reset_net_ipv4_ip_local_port_range_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin">reset_net_ipv4_ip_local_port_range_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1">reset_net_ipv4_neigh_default_gc_thresh1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2">reset_net_ipv4_neigh_default_gc_thresh2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3">reset_net_ipv4_neigh_default_gc_thresh3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout">reset_net_ipv4_tcp_fin_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl">reset_net_ipv4_tcp_keepalive_intvl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes">reset_net_ipv4_tcp_keepalive_probes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime">reset_net_ipv4_tcp_keepalive_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog">reset_net_ipv4_tcp_max_syn_backlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets">reset_net_ipv4_tcp_max_tw_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse">reset_net_ipv4_tcp_tw_reuse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets">reset_net_netfilter_nf_conntrack_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax">reset_net_netfilter_nf_conntrack_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount">reset_vm_max_map_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness">reset_vm_swappiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure">reset_vm_vfs_cache_pressure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_aio_max_nr` <a name="reset_fs_aio_max_nr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr"></a>

```python
def reset_fs_aio_max_nr() -> None
```

##### `reset_fs_file_max` <a name="reset_fs_file_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax"></a>

```python
def reset_fs_file_max() -> None
```

##### `reset_fs_inotify_max_user_watches` <a name="reset_fs_inotify_max_user_watches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches"></a>

```python
def reset_fs_inotify_max_user_watches() -> None
```

##### `reset_fs_nr_open` <a name="reset_fs_nr_open" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen"></a>

```python
def reset_fs_nr_open() -> None
```

##### `reset_kernel_threads_max` <a name="reset_kernel_threads_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax"></a>

```python
def reset_kernel_threads_max() -> None
```

##### `reset_net_core_netdev_max_backlog` <a name="reset_net_core_netdev_max_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog"></a>

```python
def reset_net_core_netdev_max_backlog() -> None
```

##### `reset_net_core_optmem_max` <a name="reset_net_core_optmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax"></a>

```python
def reset_net_core_optmem_max() -> None
```

##### `reset_net_core_rmem_default` <a name="reset_net_core_rmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault"></a>

```python
def reset_net_core_rmem_default() -> None
```

##### `reset_net_core_rmem_max` <a name="reset_net_core_rmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax"></a>

```python
def reset_net_core_rmem_max() -> None
```

##### `reset_net_core_somaxconn` <a name="reset_net_core_somaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn"></a>

```python
def reset_net_core_somaxconn() -> None
```

##### `reset_net_core_wmem_default` <a name="reset_net_core_wmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault"></a>

```python
def reset_net_core_wmem_default() -> None
```

##### `reset_net_core_wmem_max` <a name="reset_net_core_wmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax"></a>

```python
def reset_net_core_wmem_max() -> None
```

##### `reset_net_ipv4_ip_local_port_range_max` <a name="reset_net_ipv4_ip_local_port_range_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax"></a>

```python
def reset_net_ipv4_ip_local_port_range_max() -> None
```

##### `reset_net_ipv4_ip_local_port_range_min` <a name="reset_net_ipv4_ip_local_port_range_min" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin"></a>

```python
def reset_net_ipv4_ip_local_port_range_min() -> None
```

##### `reset_net_ipv4_neigh_default_gc_thresh1` <a name="reset_net_ipv4_neigh_default_gc_thresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1"></a>

```python
def reset_net_ipv4_neigh_default_gc_thresh1() -> None
```

##### `reset_net_ipv4_neigh_default_gc_thresh2` <a name="reset_net_ipv4_neigh_default_gc_thresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2"></a>

```python
def reset_net_ipv4_neigh_default_gc_thresh2() -> None
```

##### `reset_net_ipv4_neigh_default_gc_thresh3` <a name="reset_net_ipv4_neigh_default_gc_thresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3"></a>

```python
def reset_net_ipv4_neigh_default_gc_thresh3() -> None
```

##### `reset_net_ipv4_tcp_fin_timeout` <a name="reset_net_ipv4_tcp_fin_timeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout"></a>

```python
def reset_net_ipv4_tcp_fin_timeout() -> None
```

##### `reset_net_ipv4_tcp_keepalive_intvl` <a name="reset_net_ipv4_tcp_keepalive_intvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl"></a>

```python
def reset_net_ipv4_tcp_keepalive_intvl() -> None
```

##### `reset_net_ipv4_tcp_keepalive_probes` <a name="reset_net_ipv4_tcp_keepalive_probes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes"></a>

```python
def reset_net_ipv4_tcp_keepalive_probes() -> None
```

##### `reset_net_ipv4_tcp_keepalive_time` <a name="reset_net_ipv4_tcp_keepalive_time" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime"></a>

```python
def reset_net_ipv4_tcp_keepalive_time() -> None
```

##### `reset_net_ipv4_tcp_max_syn_backlog` <a name="reset_net_ipv4_tcp_max_syn_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog"></a>

```python
def reset_net_ipv4_tcp_max_syn_backlog() -> None
```

##### `reset_net_ipv4_tcp_max_tw_buckets` <a name="reset_net_ipv4_tcp_max_tw_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets"></a>

```python
def reset_net_ipv4_tcp_max_tw_buckets() -> None
```

##### `reset_net_ipv4_tcp_tw_reuse` <a name="reset_net_ipv4_tcp_tw_reuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse"></a>

```python
def reset_net_ipv4_tcp_tw_reuse() -> None
```

##### `reset_net_netfilter_nf_conntrack_buckets` <a name="reset_net_netfilter_nf_conntrack_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets"></a>

```python
def reset_net_netfilter_nf_conntrack_buckets() -> None
```

##### `reset_net_netfilter_nf_conntrack_max` <a name="reset_net_netfilter_nf_conntrack_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax"></a>

```python
def reset_net_netfilter_nf_conntrack_max() -> None
```

##### `reset_vm_max_map_count` <a name="reset_vm_max_map_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount"></a>

```python
def reset_vm_max_map_count() -> None
```

##### `reset_vm_swappiness` <a name="reset_vm_swappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness"></a>

```python
def reset_vm_swappiness() -> None
```

##### `reset_vm_vfs_cache_pressure` <a name="reset_vm_vfs_cache_pressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure"></a>

```python
def reset_vm_vfs_cache_pressure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput">fs_aio_max_nr_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput">fs_file_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput">fs_inotify_max_user_watches_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput">fs_nr_open_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput">kernel_threads_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput">net_core_netdev_max_backlog_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput">net_core_optmem_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput">net_core_rmem_default_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput">net_core_rmem_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput">net_core_somaxconn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput">net_core_wmem_default_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput">net_core_wmem_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput">net_ipv4_ip_local_port_range_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput">net_ipv4_ip_local_port_range_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input">net_ipv4_neigh_default_gc_thresh1_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input">net_ipv4_neigh_default_gc_thresh2_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input">net_ipv4_neigh_default_gc_thresh3_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput">net_ipv4_tcp_fin_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput">net_ipv4_tcp_keepalive_intvl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput">net_ipv4_tcp_keepalive_probes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput">net_ipv4_tcp_keepalive_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput">net_ipv4_tcp_max_syn_backlog_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput">net_ipv4_tcp_max_tw_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput">net_ipv4_tcp_tw_reuse_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput">net_netfilter_nf_conntrack_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput">net_netfilter_nf_conntrack_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput">vm_max_map_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput">vm_swappiness_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput">vm_vfs_cache_pressure_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr">fs_aio_max_nr</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax">fs_file_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches">fs_inotify_max_user_watches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen">fs_nr_open</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax">kernel_threads_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog">net_core_netdev_max_backlog</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax">net_core_optmem_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault">net_core_rmem_default</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax">net_core_rmem_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn">net_core_somaxconn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault">net_core_wmem_default</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax">net_core_wmem_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax">net_ipv4_ip_local_port_range_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin">net_ipv4_ip_local_port_range_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1">net_ipv4_neigh_default_gc_thresh1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2">net_ipv4_neigh_default_gc_thresh2</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3">net_ipv4_neigh_default_gc_thresh3</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout">net_ipv4_tcp_fin_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl">net_ipv4_tcp_keepalive_intvl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes">net_ipv4_tcp_keepalive_probes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime">net_ipv4_tcp_keepalive_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog">net_ipv4_tcp_max_syn_backlog</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets">net_ipv4_tcp_max_tw_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse">net_ipv4_tcp_tw_reuse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets">net_netfilter_nf_conntrack_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax">net_netfilter_nf_conntrack_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount">vm_max_map_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness">vm_swappiness</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure">vm_vfs_cache_pressure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_aio_max_nr_input`<sup>Optional</sup> <a name="fs_aio_max_nr_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput"></a>

```python
fs_aio_max_nr_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_file_max_input`<sup>Optional</sup> <a name="fs_file_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput"></a>

```python
fs_file_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_inotify_max_user_watches_input`<sup>Optional</sup> <a name="fs_inotify_max_user_watches_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput"></a>

```python
fs_inotify_max_user_watches_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_nr_open_input`<sup>Optional</sup> <a name="fs_nr_open_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput"></a>

```python
fs_nr_open_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kernel_threads_max_input`<sup>Optional</sup> <a name="kernel_threads_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput"></a>

```python
kernel_threads_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_netdev_max_backlog_input`<sup>Optional</sup> <a name="net_core_netdev_max_backlog_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput"></a>

```python
net_core_netdev_max_backlog_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_optmem_max_input`<sup>Optional</sup> <a name="net_core_optmem_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput"></a>

```python
net_core_optmem_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_rmem_default_input`<sup>Optional</sup> <a name="net_core_rmem_default_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput"></a>

```python
net_core_rmem_default_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_rmem_max_input`<sup>Optional</sup> <a name="net_core_rmem_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput"></a>

```python
net_core_rmem_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_somaxconn_input`<sup>Optional</sup> <a name="net_core_somaxconn_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput"></a>

```python
net_core_somaxconn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_wmem_default_input`<sup>Optional</sup> <a name="net_core_wmem_default_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput"></a>

```python
net_core_wmem_default_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_wmem_max_input`<sup>Optional</sup> <a name="net_core_wmem_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput"></a>

```python
net_core_wmem_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_ip_local_port_range_max_input`<sup>Optional</sup> <a name="net_ipv4_ip_local_port_range_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput"></a>

```python
net_ipv4_ip_local_port_range_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_ip_local_port_range_min_input`<sup>Optional</sup> <a name="net_ipv4_ip_local_port_range_min_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput"></a>

```python
net_ipv4_ip_local_port_range_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_neigh_default_gc_thresh1_input`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh1_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input"></a>

```python
net_ipv4_neigh_default_gc_thresh1_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_neigh_default_gc_thresh2_input`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh2_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input"></a>

```python
net_ipv4_neigh_default_gc_thresh2_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_neigh_default_gc_thresh3_input`<sup>Optional</sup> <a name="net_ipv4_neigh_default_gc_thresh3_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input"></a>

```python
net_ipv4_neigh_default_gc_thresh3_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_fin_timeout_input`<sup>Optional</sup> <a name="net_ipv4_tcp_fin_timeout_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput"></a>

```python
net_ipv4_tcp_fin_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_keepalive_intvl_input`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_intvl_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput"></a>

```python
net_ipv4_tcp_keepalive_intvl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_keepalive_probes_input`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_probes_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput"></a>

```python
net_ipv4_tcp_keepalive_probes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_keepalive_time_input`<sup>Optional</sup> <a name="net_ipv4_tcp_keepalive_time_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput"></a>

```python
net_ipv4_tcp_keepalive_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_max_syn_backlog_input`<sup>Optional</sup> <a name="net_ipv4_tcp_max_syn_backlog_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput"></a>

```python
net_ipv4_tcp_max_syn_backlog_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_max_tw_buckets_input`<sup>Optional</sup> <a name="net_ipv4_tcp_max_tw_buckets_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput"></a>

```python
net_ipv4_tcp_max_tw_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_tw_reuse_input`<sup>Optional</sup> <a name="net_ipv4_tcp_tw_reuse_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput"></a>

```python
net_ipv4_tcp_tw_reuse_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `net_netfilter_nf_conntrack_buckets_input`<sup>Optional</sup> <a name="net_netfilter_nf_conntrack_buckets_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput"></a>

```python
net_netfilter_nf_conntrack_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_netfilter_nf_conntrack_max_input`<sup>Optional</sup> <a name="net_netfilter_nf_conntrack_max_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput"></a>

```python
net_netfilter_nf_conntrack_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_max_map_count_input`<sup>Optional</sup> <a name="vm_max_map_count_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput"></a>

```python
vm_max_map_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_swappiness_input`<sup>Optional</sup> <a name="vm_swappiness_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput"></a>

```python
vm_swappiness_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_vfs_cache_pressure_input`<sup>Optional</sup> <a name="vm_vfs_cache_pressure_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput"></a>

```python
vm_vfs_cache_pressure_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_aio_max_nr`<sup>Required</sup> <a name="fs_aio_max_nr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr"></a>

```python
fs_aio_max_nr: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_file_max`<sup>Required</sup> <a name="fs_file_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax"></a>

```python
fs_file_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_inotify_max_user_watches`<sup>Required</sup> <a name="fs_inotify_max_user_watches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches"></a>

```python
fs_inotify_max_user_watches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fs_nr_open`<sup>Required</sup> <a name="fs_nr_open" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen"></a>

```python
fs_nr_open: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kernel_threads_max`<sup>Required</sup> <a name="kernel_threads_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax"></a>

```python
kernel_threads_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_netdev_max_backlog`<sup>Required</sup> <a name="net_core_netdev_max_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog"></a>

```python
net_core_netdev_max_backlog: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_optmem_max`<sup>Required</sup> <a name="net_core_optmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax"></a>

```python
net_core_optmem_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_rmem_default`<sup>Required</sup> <a name="net_core_rmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault"></a>

```python
net_core_rmem_default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_rmem_max`<sup>Required</sup> <a name="net_core_rmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax"></a>

```python
net_core_rmem_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_somaxconn`<sup>Required</sup> <a name="net_core_somaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn"></a>

```python
net_core_somaxconn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_wmem_default`<sup>Required</sup> <a name="net_core_wmem_default" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault"></a>

```python
net_core_wmem_default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_core_wmem_max`<sup>Required</sup> <a name="net_core_wmem_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax"></a>

```python
net_core_wmem_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_ip_local_port_range_max`<sup>Required</sup> <a name="net_ipv4_ip_local_port_range_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax"></a>

```python
net_ipv4_ip_local_port_range_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_ip_local_port_range_min`<sup>Required</sup> <a name="net_ipv4_ip_local_port_range_min" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin"></a>

```python
net_ipv4_ip_local_port_range_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_neigh_default_gc_thresh1`<sup>Required</sup> <a name="net_ipv4_neigh_default_gc_thresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1"></a>

```python
net_ipv4_neigh_default_gc_thresh1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_neigh_default_gc_thresh2`<sup>Required</sup> <a name="net_ipv4_neigh_default_gc_thresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2"></a>

```python
net_ipv4_neigh_default_gc_thresh2: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_neigh_default_gc_thresh3`<sup>Required</sup> <a name="net_ipv4_neigh_default_gc_thresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3"></a>

```python
net_ipv4_neigh_default_gc_thresh3: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_fin_timeout`<sup>Required</sup> <a name="net_ipv4_tcp_fin_timeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout"></a>

```python
net_ipv4_tcp_fin_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_keepalive_intvl`<sup>Required</sup> <a name="net_ipv4_tcp_keepalive_intvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl"></a>

```python
net_ipv4_tcp_keepalive_intvl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_keepalive_probes`<sup>Required</sup> <a name="net_ipv4_tcp_keepalive_probes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes"></a>

```python
net_ipv4_tcp_keepalive_probes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_keepalive_time`<sup>Required</sup> <a name="net_ipv4_tcp_keepalive_time" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime"></a>

```python
net_ipv4_tcp_keepalive_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_max_syn_backlog`<sup>Required</sup> <a name="net_ipv4_tcp_max_syn_backlog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog"></a>

```python
net_ipv4_tcp_max_syn_backlog: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_max_tw_buckets`<sup>Required</sup> <a name="net_ipv4_tcp_max_tw_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets"></a>

```python
net_ipv4_tcp_max_tw_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_ipv4_tcp_tw_reuse`<sup>Required</sup> <a name="net_ipv4_tcp_tw_reuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse"></a>

```python
net_ipv4_tcp_tw_reuse: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `net_netfilter_nf_conntrack_buckets`<sup>Required</sup> <a name="net_netfilter_nf_conntrack_buckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets"></a>

```python
net_netfilter_nf_conntrack_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_netfilter_nf_conntrack_max`<sup>Required</sup> <a name="net_netfilter_nf_conntrack_max" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax"></a>

```python
net_netfilter_nf_conntrack_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_max_map_count`<sup>Required</sup> <a name="vm_max_map_count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount"></a>

```python
vm_max_map_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_swappiness`<sup>Required</sup> <a name="vm_swappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness"></a>

```python
vm_swappiness: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_vfs_cache_pressure`<sup>Required</sup> <a name="vm_vfs_cache_pressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure"></a>

```python
vm_vfs_cache_pressure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---


### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]

---


### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortEnd">reset_port_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortStart">reset_port_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port_end` <a name="reset_port_end" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortEnd"></a>

```python
def reset_port_end() -> None
```

##### `reset_port_start` <a name="reset_port_start" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortStart"></a>

```python
def reset_port_start() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEndInput">port_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStartInput">port_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEnd">port_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStart">port_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_end_input`<sup>Optional</sup> <a name="port_end_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEndInput"></a>

```python
port_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_start_input`<sup>Optional</sup> <a name="port_start_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStartInput"></a>

```python
port_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `port_end`<sup>Required</sup> <a name="port_end" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEnd"></a>

```python
port_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_start`<sup>Required</sup> <a name="port_start" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStart"></a>

```python
port_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]

---


### KubernetesClusterNodePoolNodeNetworkProfileOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts">put_allowed_host_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetAllowedHostPorts">reset_allowed_host_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetApplicationSecurityGroupIds">reset_application_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags">reset_node_public_ip_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_host_ports` <a name="put_allowed_host_ports" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts"></a>

```python
def put_allowed_host_ports(
  value: typing.Union[IResolvable, typing.List[KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]

---

##### `reset_allowed_host_ports` <a name="reset_allowed_host_ports" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetAllowedHostPorts"></a>

```python
def reset_allowed_host_ports() -> None
```

##### `reset_application_security_group_ids` <a name="reset_application_security_group_ids" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetApplicationSecurityGroupIds"></a>

```python
def reset_application_security_group_ids() -> None
```

##### `reset_node_public_ip_tags` <a name="reset_node_public_ip_tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags"></a>

```python
def reset_node_public_ip_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPorts">allowed_host_ports</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPortsInput">allowed_host_ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIdsInput">application_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput">node_public_ip_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIds">application_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags">node_public_ip_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_host_ports`<sup>Required</sup> <a name="allowed_host_ports" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPorts"></a>

```python
allowed_host_ports: KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList</a>

---

##### `allowed_host_ports_input`<sup>Optional</sup> <a name="allowed_host_ports_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPortsInput"></a>

```python
allowed_host_ports_input: typing.Union[IResolvable, typing.List[KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts</a>]]

---

##### `application_security_group_ids_input`<sup>Optional</sup> <a name="application_security_group_ids_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIdsInput"></a>

```python
application_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_public_ip_tags_input`<sup>Optional</sup> <a name="node_public_ip_tags_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput"></a>

```python
node_public_ip_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_security_group_ids`<sup>Required</sup> <a name="application_security_group_ids" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIds"></a>

```python
application_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_public_ip_tags`<sup>Required</sup> <a name="node_public_ip_tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags"></a>

```python
node_public_ip_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterNodePoolNodeNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---


### KubernetesClusterNodePoolTimeoutsOutputReference <a name="KubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KubernetesClusterNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>]

---


### KubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="KubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetDrainTimeoutInMinutes">reset_drain_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetNodeSoakDurationInMinutes">reset_node_soak_duration_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_drain_timeout_in_minutes` <a name="reset_drain_timeout_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetDrainTimeoutInMinutes"></a>

```python
def reset_drain_timeout_in_minutes() -> None
```

##### `reset_node_soak_duration_in_minutes` <a name="reset_node_soak_duration_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetNodeSoakDurationInMinutes"></a>

```python
def reset_node_soak_duration_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutesInput">drain_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">max_surge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutesInput">node_soak_duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes">drain_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">max_surge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes">node_soak_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `drain_timeout_in_minutes_input`<sup>Optional</sup> <a name="drain_timeout_in_minutes_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutesInput"></a>

```python
drain_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_surge_input`<sup>Optional</sup> <a name="max_surge_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```python
max_surge_input: str
```

- *Type:* str

---

##### `node_soak_duration_in_minutes_input`<sup>Optional</sup> <a name="node_soak_duration_in_minutes_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutesInput"></a>

```python
node_soak_duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drain_timeout_in_minutes`<sup>Required</sup> <a name="drain_timeout_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes"></a>

```python
drain_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_surge`<sup>Required</sup> <a name="max_surge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```python
max_surge: str
```

- *Type:* str

---

##### `node_soak_duration_in_minutes`<sup>Required</sup> <a name="node_soak_duration_in_minutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes"></a>

```python
node_soak_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---


### KubernetesClusterNodePoolWindowsProfileOutputReference <a name="KubernetesClusterNodePoolWindowsProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_node_pool

kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled">reset_outbound_nat_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_outbound_nat_enabled` <a name="reset_outbound_nat_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled"></a>

```python
def reset_outbound_nat_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput">outbound_nat_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled">outbound_nat_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound_nat_enabled_input`<sup>Optional</sup> <a name="outbound_nat_enabled_input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput"></a>

```python
outbound_nat_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outbound_nat_enabled`<sup>Required</sup> <a name="outbound_nat_enabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled"></a>

```python
outbound_nat_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterNodePoolWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---



